'use strict';

function getBasePath() {
    return typeof getWikiAssetBasePath === 'function' ? getWikiAssetBasePath() : '../';
}

let BASE_PATH = '../';
const NODE_WIDTH = 238;
const NODE_INNER_WIDTH = 214;
const NODE_HEIGHT = 72;
const ROW_GAP = 48;
const COLUMN_HEADER_HEIGHT = 48;
const COLUMN_BODY_PAD_TOP = 24;
const COLUMN_BODY_PAD_X = 12;
const CANVAS_PAD_X = 64;
const CANVAS_PAD_Y = 0;
const CANVAS_PAD_BOTTOM = 24;
const PAN_MARGIN_X = 40;
const PAN_MARGIN_Y = 24;

let currentCategory = null;
let selectedNodeId = null;
let selectedOfferIndex = 0;
let includeFullChain = true;
const chainExcludedNodesByKey = new Map();
let selectedWeapons = [];
let playerInventory = createEmptyPlayerInventory();
let weaponPickerQuery = '';
let weaponPickerOpen = false;
let categoryMenuOpen = false;
let cartPanelOpen = false;
let cartActiveTab = 'craft';
let purchaseOffers = {};

const INVENTORY_STORAGE_KEY = 'barter-player-inventory';
const PURCHASE_STORAGE_KEY = 'barter-purchase-offers';
const MAX_PLAYER_LEVEL = 50;

let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let scrollStartX = 0;
let scrollStartY = 0;
let hasDragged = false;

const elements = {};

function t(key, fallback) {
    if (window.i18n && typeof window.i18n.t === 'function') {
        const value = window.i18n.t(key);
        if (value && value !== key) return value;
    }
    return fallback;
}

function getWeaponName(weapon) {
    return weapon ? getLocalizedName(weapon) : '';
}

function createEmptyPlayerInventory() {
    return {
        level: 0,
        xp: 0,
        xpMode: 'level',
        money: 0,
        cr: 0,
        materials: {}
    };
}

function loadPlayerInventory() {
    try {
        const raw = localStorage.getItem(INVENTORY_STORAGE_KEY);
        if (!raw) return createEmptyPlayerInventory();

        const parsed = JSON.parse(raw);
        const level = Math.min(MAX_PLAYER_LEVEL, Math.max(0, Number(parsed.level) || 0));
        const xpMode = parsed.xpMode === 'exact' ? 'exact' : 'level';
        const xp = xpMode === 'exact'
            ? Math.max(0, Math.floor(Number(parsed.xp) || 0))
            : getBarterXpForLevel(level);

        return {
            level,
            xp,
            xpMode,
            money: Math.max(0, Number(parsed.money) || 0),
            cr: Math.max(0, Number(parsed.cr) || 0),
            materials: parsed.materials && typeof parsed.materials === 'object'
                ? Object.fromEntries(
                    Object.entries(parsed.materials).map(([id, amount]) => [id, Math.max(0, Number(amount) || 0)])
                )
                : {}
        };
    } catch {
        return createEmptyPlayerInventory();
    }
}

function savePlayerInventory() {
    try {
        localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(playerInventory));
    } catch {
        // ignore storage errors
    }
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function createEmptyPurchaseRow() {
    return { seller: '', qty: 0, price: 0 };
}

function normalizePurchaseRow(row) {
    return {
        seller: typeof row?.seller === 'string' ? row.seller : '',
        qty: Math.max(0, Number(row?.qty) || 0),
        price: Math.max(0, Number(row?.price) || 0)
    };
}

function loadPurchaseOffers() {
    try {
        const raw = localStorage.getItem(PURCHASE_STORAGE_KEY);
        if (!raw) return {};

        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== 'object') return {};

        return Object.fromEntries(
            Object.entries(parsed).map(([materialId, rows]) => [
                materialId,
                Array.isArray(rows) && rows.length
                    ? rows.map(normalizePurchaseRow)
                    : [createEmptyPurchaseRow()]
            ])
        );
    } catch {
        return {};
    }
}

function savePurchaseOffers() {
    try {
        localStorage.setItem(PURCHASE_STORAGE_KEY, JSON.stringify(purchaseOffers));
    } catch {
        // ignore storage errors
    }
}

function getPurchaseRows(materialId) {
    if (!purchaseOffers[materialId]?.length) {
        purchaseOffers[materialId] = [createEmptyPurchaseRow()];
    }
    return purchaseOffers[materialId];
}

function readPurchaseFormFromDom() {
    if (!elements.cartBody || cartActiveTab !== 'purchase') return;

    elements.cartBody.querySelectorAll('[data-purchase-material]').forEach(section => {
        const materialId = section.dataset.purchaseMaterial;
        if (!materialId) return;

        const rows = [];
        section.querySelectorAll('[data-purchase-row]').forEach(rowEl => {
            rows.push(normalizePurchaseRow({
                seller: rowEl.querySelector('[data-purchase-seller]')?.value || '',
                qty: rowEl.querySelector('[data-purchase-qty]')?.value,
                price: rowEl.querySelector('[data-purchase-price]')?.value
            }));
        });

        purchaseOffers[materialId] = rows.length ? rows : [createEmptyPurchaseRow()];
    });

    savePurchaseOffers();
}

function prunePurchaseOffers(missingMaterialIds) {
    const allowed = new Set(missingMaterialIds);
    let changed = false;

    Object.keys(purchaseOffers).forEach(materialId => {
        if (!allowed.has(materialId)) {
            delete purchaseOffers[materialId];
            changed = true;
        }
    });

    if (changed) {
        savePurchaseOffers();
    }
}

function calculatePurchaseRowTotals(rows) {
    return rows.reduce((totals, row) => {
        const qty = Math.max(0, Number(row.qty) || 0);
        const price = Math.max(0, Number(row.price) || 0);
        totals.allocatedQty += qty;
        totals.totalCost += qty * price;
        return totals;
    }, { allocatedQty: 0, totalCost: 0 });
}

function updatePurchaseTotalsInDom() {
    if (!elements.cartBody) return;

    let grandTotal = 0;
    let hasQtyMismatch = false;

    elements.cartBody.querySelectorAll('[data-purchase-material]').forEach(section => {
        const needed = Math.max(0, Number(section.dataset.purchaseNeeded) || 0);
        let allocatedQty = 0;
        let materialTotal = 0;

        section.querySelectorAll('[data-purchase-row]').forEach(rowEl => {
            const qty = Math.max(0, Number(rowEl.querySelector('[data-purchase-qty]')?.value) || 0);
            const price = Math.max(0, Number(rowEl.querySelector('[data-purchase-price]')?.value) || 0);
            const subtotal = qty * price;

            allocatedQty += qty;
            materialTotal += subtotal;

            const subtotalEl = rowEl.querySelector('[data-purchase-subtotal]');
            if (subtotalEl) {
                subtotalEl.textContent = formatPrice(subtotal);
            }
        });

        grandTotal += materialTotal;

        const qtyMismatch = allocatedQty !== needed;
        if (qtyMismatch && allocatedQty > 0) {
            hasQtyMismatch = true;
        }

        const remaining = Math.max(0, needed - allocatedQty);
        const overAllocated = allocatedQty > needed;

        const needEl = section.querySelector('[data-purchase-need]');
        const remainingEl = section.querySelector('[data-purchase-remaining]');
        if (remainingEl) {
            remainingEl.textContent = remaining;
        }
        if (needEl) {
            needEl.classList.toggle('barter-purchase-item__need--ok', remaining === 0 && !overAllocated);
            needEl.classList.toggle('barter-purchase-item__need--warn', overAllocated);
        }

        const statusEl = section.querySelector('[data-purchase-status]');
        if (statusEl) {
            statusEl.classList.toggle('barter-purchase-item__badge--ok', !qtyMismatch && allocatedQty > 0);
            statusEl.classList.toggle('barter-purchase-item__badge--warn', qtyMismatch && allocatedQty > 0);

            if (allocatedQty === 0) {
                statusEl.textContent = `0 / ${needed}`;
            } else if (qtyMismatch) {
                statusEl.textContent = t('barter.purchaseQtyMismatch', '{allocated} / {needed}')
                    .replace('{allocated}', allocatedQty)
                    .replace('{needed}', needed);
            } else {
                statusEl.textContent = `${allocatedQty} / ${needed}`;
            }
        }

        const progressEl = section.querySelector('[data-purchase-progress]');
        if (progressEl) {
            const progress = needed > 0 ? Math.min(100, Math.round((allocatedQty / needed) * 100)) : 0;
            progressEl.style.width = `${progress}%`;
            progressEl.parentElement?.classList.toggle('barter-purchase-item__bar--ok', !qtyMismatch && allocatedQty > 0);
            progressEl.parentElement?.classList.toggle('barter-purchase-item__bar--warn', qtyMismatch && allocatedQty > 0);
        }

        const materialTotalEl = section.querySelector('[data-purchase-material-total]');
        if (materialTotalEl) {
            materialTotalEl.textContent = formatPrice(materialTotal);
        }

        const avgPriceEl = section.querySelector('[data-purchase-avg-price]');
        if (avgPriceEl) {
            const avgPrice = allocatedQty > 0 ? Math.round(materialTotal / allocatedQty) : 0;
            avgPriceEl.textContent = allocatedQty > 0
                ? t('barter.purchaseAvgPrice', 'Средняя: {price}').replace('{price}', formatPrice(avgPrice))
                : '';
        }
    });

    const grandTotalEl = elements.cartBody.querySelector('[data-purchase-grand-total]');
    if (grandTotalEl) {
        grandTotalEl.textContent = formatPrice(grandTotal);
    }

    const grandTotalWrap = elements.cartBody.querySelector('[data-purchase-grand-total-wrap]');
    if (grandTotalWrap) {
        grandTotalWrap.classList.toggle('barter-purchase__total--warn', hasQtyMismatch);
    }
}

function getWeaponCount(nodeId, categoryId = currentCategory?.id) {
    return selectedWeapons.filter(entry =>
        entry.nodeId === nodeId && entry.categoryId === categoryId
    ).length;
}

function getWeaponGroupKey(entry) {
    return `${entry.categoryId}|${entry.nodeId}|${entry.offerIndex}|${entry.includeChain ? 1 : 0}`;
}

function parseWeaponGroupKey(groupKey) {
    const [categoryId, nodeId, offerIndex, includeChainFlag] = groupKey.split('|');
    return {
        categoryId,
        nodeId,
        offerIndex: Number(offerIndex) || 0,
        includeChain: includeChainFlag === '1'
    };
}

function hasMultipleSelectedCategories() {
    const categoryIds = new Set(selectedWeapons.map(entry => entry.categoryId).filter(Boolean));
    return categoryIds.size > 1;
}

function groupSelectedWeapons() {
    const groups = new Map();

    selectedWeapons.forEach(entry => {
        const key = getWeaponGroupKey(entry);
        if (!groups.has(key)) {
            groups.set(key, { ...entry, count: 0 });
        }
        groups.get(key).count += 1;
    });

    return [...groups.values()];
}

function getWeaponSelectionOptions(nodeId) {
    return {
        offerIndex: selectedNodeId === nodeId ? selectedOfferIndex : 0,
        includeChain: false
    };
}

function addWeaponToList(nodeId) {
    if (!currentCategory) return false;

    const node = getBarterNodeById(currentCategory, nodeId);
    if (!node || node.locked) return false;

    const options = getWeaponSelectionOptions(nodeId);
    selectedWeapons.push({
        categoryId: currentCategory.id,
        nodeId,
        offerIndex: options.offerIndex,
        includeChain: options.includeChain
    });

    updateWeaponListUi();
    return true;
}

function removeOneWeaponFromNode(nodeId, categoryId = currentCategory?.id) {
    let index = -1;
    for (let i = selectedWeapons.length - 1; i >= 0; i -= 1) {
        if (selectedWeapons[i].nodeId === nodeId && selectedWeapons[i].categoryId === categoryId) {
            index = i;
            break;
        }
    }

    if (index === -1) return false;

    selectedWeapons.splice(index, 1);
    updateWeaponListUi();
    return true;
}

function buildNodeSelectionMarkup(count) {
    const removeLabel = t('barter.removeWeapon', 'Убрать');
    return `
        <div class="barter-node__selection">
            <span class="barter-node__count">${count}</span>
            <button type="button" class="barter-node__remove" aria-label="${removeLabel}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18"/>
                </svg>
            </button>
        </div>
    `;
}

function bindNodeRemoveButton(nodeEl) {
    const removeBtn = nodeEl.querySelector('.barter-node__remove');
    removeBtn?.addEventListener('click', handleNodeRemoveClick);
}

function removeOneFromWeaponGroup(groupKey) {
    const { categoryId, nodeId, offerIndex, includeChain } = parseWeaponGroupKey(groupKey);
    const index = selectedWeapons.findIndex(entry =>
        entry.categoryId === categoryId
        && entry.nodeId === nodeId
        && entry.offerIndex === offerIndex
        && entry.includeChain === includeChain
    );

    if (index === -1) return false;

    selectedWeapons.splice(index, 1);
    updateWeaponListUi();
    return true;
}

function addOneToWeaponGroup(groupKey) {
    const { categoryId, nodeId, offerIndex, includeChain } = parseWeaponGroupKey(groupKey);
    const category = getBarterCategoryById(categoryId);
    const node = getBarterNodeById(category, nodeId);
    if (!node || node.locked) return false;

    selectedWeapons.push({ categoryId, nodeId, offerIndex, includeChain });
    updateWeaponListUi();
    return true;
}

function clearCraftList() {
    if (!selectedWeapons.length) return;

    selectedWeapons = [];
    updateWeaponListUi();
}

function getChainStateKey(nodeId, offerIndex = selectedOfferIndex) {
    return `${nodeId}|${offerIndex}`;
}

function getChainExcludedNodeIds(nodeId, offerIndex = selectedOfferIndex) {
    return chainExcludedNodesByKey.get(getChainStateKey(nodeId, offerIndex)) || new Set();
}

function toggleChainExcludedNode(nodeId, chainNodeId, offerIndex = selectedOfferIndex) {
    const key = getChainStateKey(nodeId, offerIndex);
    let excluded = chainExcludedNodesByKey.get(key);

    if (!excluded) {
        excluded = new Set();
        chainExcludedNodesByKey.set(key, excluded);
    }

    if (excluded.has(chainNodeId)) {
        excluded.delete(chainNodeId);
        if (!excluded.size) {
            chainExcludedNodesByKey.delete(key);
        }
    } else {
        excluded.add(chainNodeId);
    }
}

function clearChainExclusions(nodeId, offerIndex = selectedOfferIndex) {
    chainExcludedNodesByKey.delete(getChainStateKey(nodeId, offerIndex));
}

function syncWeaponListEntry(nodeId) {
    if (selectedNodeId !== nodeId) return;

    const offerIndex = selectedOfferIndex;

    selectedWeapons.forEach(entry => {
        if (entry.nodeId === nodeId && entry.categoryId === currentCategory?.id) {
            entry.offerIndex = offerIndex;
        }
    });

    updateCartPanel();
}

function updateWeaponListUi() {
    elements.tree?.querySelectorAll('.barter-node').forEach(nodeEl => {
        const nodeId = nodeEl.dataset.nodeId;
        const count = getWeaponCount(nodeId);
        const isAdded = count > 0;

        nodeEl.classList.toggle('barter-node--added', isAdded);

        let selectionEl = nodeEl.querySelector('.barter-node__selection');
        if (isAdded) {
            if (!selectionEl) {
                nodeEl.insertAdjacentHTML('afterbegin', buildNodeSelectionMarkup(count));
                bindNodeRemoveButton(nodeEl);
            } else {
                const countEl = selectionEl.querySelector('.barter-node__count');
                if (countEl) countEl.textContent = String(count);
            }
        } else if (selectionEl) {
            selectionEl.remove();
        }

        const actionBtn = nodeEl.querySelector('.barter-node__action');
        if (actionBtn && actionBtn.tagName === 'BUTTON') {
            actionBtn.classList.toggle('barter-node__action--added', isAdded);
            actionBtn.textContent = t('barter.addWeapon', 'Добавить');
        }
    });

    updateCartFab();
    updateCartPanel();
}

function updateCartFab() {
    if (!elements.cartFab || !elements.cartBadge) return;

    const count = selectedWeapons.length;
    elements.cartBadge.textContent = String(count);
    elements.cartBadge.hidden = count === 0;
}

function openCartPanel() {
    cartPanelOpen = true;

    if (elements.cart) {
        elements.cart.classList.add('is-open');
        elements.cart.setAttribute('aria-hidden', 'false');
    }

    if (elements.cartBackdrop) {
        elements.cartBackdrop.hidden = false;
    }

    elements.cartFab?.setAttribute('aria-expanded', 'true');
    renderCartPanel();
}

function closeCartPanel() {
    readPurchaseFormFromDom();
    cartPanelOpen = false;

    if (elements.cart) {
        elements.cart.classList.remove('is-open');
        elements.cart.setAttribute('aria-hidden', 'true');
    }

    if (elements.cartBackdrop) {
        elements.cartBackdrop.hidden = true;
    }

    elements.cartFab?.setAttribute('aria-expanded', 'false');
}

function toggleCartPanel() {
    if (cartPanelOpen) {
        closeCartPanel();
    } else {
        openCartPanel();
    }
}

function updateCartPanel() {
    if (!cartPanelOpen) {
        updateCartFab();
        if (elements.cartTitle) {
            const count = selectedWeapons.length;
            elements.cartTitle.textContent = count
                ? t('barter.craftListCount', '{count} предмет(ов)').replace('{count}', count)
                : '—';
        }
        return;
    }

    renderCartPanel();
}

function renderPurchaseSellerRow(materialId, row, rowIndex) {
    const subtotal = (Number(row.qty) || 0) * (Number(row.price) || 0);
    const removeLabel = t('barter.purchaseRemoveSeller', 'Убрать продавца');
    const sellerLabel = t('barter.purchaseSeller', 'Продавец');
    const qtyLabel = t('barter.purchaseQty', 'Кол-во');
    const priceLabel = t('barter.purchasePrice', 'Цена/шт');

    return `
        <div class="barter-purchase-offer" data-purchase-row data-row-index="${rowIndex}">
            <input type="text"
                   class="barter-purchase-offer__input barter-purchase-offer__input--seller"
                   data-purchase-seller
                   value="${escapeHtml(row.seller)}"
                   placeholder="${sellerLabel}"
                   autocomplete="off"
                   aria-label="${sellerLabel}">
            <input type="number"
                   class="barter-purchase-offer__input barter-purchase-offer__input--qty"
                   data-purchase-qty
                   value="${row.qty || ''}"
                   min="0"
                   step="1"
                   inputmode="numeric"
                   placeholder="0"
                   aria-label="${qtyLabel}">
            <span class="barter-purchase-offer__times" aria-hidden="true">×</span>
            <input type="number"
                   class="barter-purchase-offer__input barter-purchase-offer__input--price"
                   data-purchase-price
                   value="${row.price || ''}"
                   min="0"
                   step="1"
                   inputmode="numeric"
                   placeholder="0"
                   aria-label="${priceLabel}">
            <span class="barter-purchase-offer__sum" data-purchase-subtotal>${formatPrice(subtotal)}</span>
            <button type="button"
                    class="barter-purchase-offer__remove"
                    data-purchase-remove
                    data-material-id="${materialId}"
                    data-row-index="${rowIndex}"
                    aria-label="${removeLabel}">×</button>
        </div>
    `;
}

function renderPurchaseMaterialBlock(entry) {
    const rows = getPurchaseRows(entry.id);
    const totals = calculatePurchaseRowTotals(rows);
    const qtyMismatch = totals.allocatedQty !== entry.missing;
    const badgeClass = totals.allocatedQty === 0
        ? ''
        : (qtyMismatch ? 'barter-purchase-item__badge--warn' : 'barter-purchase-item__badge--ok');
    const barClass = totals.allocatedQty === 0
        ? ''
        : (qtyMismatch ? 'barter-purchase-item__bar--warn' : 'barter-purchase-item__bar--ok');
    const progress = entry.missing > 0
        ? Math.min(100, Math.round((totals.allocatedQty / entry.missing) * 100))
        : 0;
    const avgPrice = totals.allocatedQty > 0
        ? Math.round(totals.totalCost / totals.allocatedQty)
        : 0;
    const imagePath = getBarterMaterialImagePath(entry.id, BASE_PATH);
    const materialName = getBarterMaterialName(entry.material);
    const rowsHtml = rows.map((row, index) => renderPurchaseSellerRow(entry.id, row, index)).join('');

    return `
        <article class="barter-purchase-item" data-purchase-material="${entry.id}" data-purchase-needed="${entry.missing}">
            <header class="barter-purchase-item__head">
                <div class="barter-purchase-item__identity">
                    <div class="barter-purchase-item__icon-wrap">
                        <img class="barter-purchase-item__icon" src="${imagePath}" alt="" loading="lazy" decoding="async">
                    </div>
                    <div class="barter-purchase-item__meta">
                        <h4 class="barter-purchase-item__name">${materialName}</h4>
                        <p class="barter-purchase-item__need" data-purchase-need>
                            ${t('barter.purchaseStillNeed', 'Не хватает')}: <strong data-purchase-remaining>${Math.max(0, entry.missing - totals.allocatedQty)}</strong> ${t('barter.pcs', 'шт.')}
                        </p>
                    </div>
                </div>
                <span class="barter-purchase-item__badge ${badgeClass}" data-purchase-status>
                    ${totals.allocatedQty} / ${entry.missing}
                </span>
            </header>
            <div class="barter-purchase-item__bar ${barClass}" role="progressbar"
                 aria-valuenow="${totals.allocatedQty}" aria-valuemin="0" aria-valuemax="${entry.missing}">
                <div class="barter-purchase-item__bar-fill" data-purchase-progress style="width: ${progress}%"></div>
            </div>
            <div class="barter-purchase-item__offers-wrap">
                <div class="barter-purchase-item__offers-head" aria-hidden="true">
                    <span>${t('barter.purchaseSeller', 'Продавец')}</span>
                    <span>${t('barter.purchaseQty', 'Кол-во')}</span>
                    <span></span>
                    <span>${t('barter.purchasePrice', 'Цена/шт')}</span>
                    <span>${t('barter.purchaseSubtotal', 'Сумма')}</span>
                    <span></span>
                </div>
                <div class="barter-purchase-item__offers">
                    ${rowsHtml}
                </div>
            </div>
            <button type="button"
                    class="barter-purchase-item__add"
                    data-purchase-add
                    data-material-id="${entry.id}">
                ${t('barter.purchaseAddSeller', 'Добавить продавца')}
            </button>
            <footer class="barter-purchase-item__foot">
                <span class="barter-purchase-item__avg" data-purchase-avg-price>
                    ${totals.allocatedQty > 0
                        ? t('barter.purchaseAvgPrice', 'Средняя: {price}').replace('{price}', formatPrice(avgPrice))
                        : ''}
                </span>
                <span class="barter-purchase-item__total" data-purchase-material-total>${formatPrice(totals.totalCost)}</span>
            </footer>
        </article>
    `;
}

function renderPurchaseTabContent(missingMaterials) {
    if (!missingMaterials.length) {
        return `
            <div class="barter-purchase-empty">
                <div class="barter-purchase-empty__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                </div>
                <p class="barter-purchase-empty__text">${t('barter.purchaseAllCovered', 'Все материалы уже есть — закупка не нужна')}</p>
            </div>
        `;
    }

    const materialsHtml = missingMaterials
        .sort((a, b) => b.missing - a.missing)
        .map(entry => renderPurchaseMaterialBlock(entry))
        .join('');

    const grandTotal = missingMaterials.reduce((sum, entry) => {
        const rows = getPurchaseRows(entry.id);
        return sum + calculatePurchaseRowTotals(rows).totalCost;
    }, 0);

    return `
        <div class="barter-purchase">
            <div class="barter-purchase__intro">
                <svg class="barter-purchase__intro-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="barter-purchase__hint">${t('barter.purchaseHint', 'Укажите цены у разных продавцов — калькулятор посчитает итог в рублях')}</p>
            </div>
            <div class="barter-purchase__list">${materialsHtml}</div>
            <div class="barter-purchase__total" data-purchase-grand-total-wrap>
                <div class="barter-purchase__total-row">
                    <span class="barter-purchase__total-label">${t('barter.purchaseGrandTotal', 'Итого закупка')}</span>
                    <span class="barter-purchase__total-value" data-purchase-grand-total>${formatPrice(grandTotal)}</span>
                </div>
            </div>
        </div>
    `;
}

function handleCartBodyClick(event) {
    const addBtn = event.target.closest('[data-purchase-add]');
    if (addBtn) {
        event.preventDefault();
        readPurchaseFormFromDom();
        getPurchaseRows(addBtn.dataset.materialId).push(createEmptyPurchaseRow());
        savePurchaseOffers();
        renderCartPanel({ skipPurchaseRead: true });
        return;
    }

    const removeBtn = event.target.closest('[data-purchase-remove]');
    if (removeBtn) {
        event.preventDefault();
        readPurchaseFormFromDom();
        const materialId = removeBtn.dataset.materialId;
        const rowIndex = Number(removeBtn.dataset.rowIndex);
        const rows = getPurchaseRows(materialId);

        if (rows.length > 1) {
            rows.splice(rowIndex, 1);
        } else {
            rows[0] = createEmptyPurchaseRow();
        }

        savePurchaseOffers();
        renderCartPanel({ skipPurchaseRead: true });
        return;
    }

    const tab = event.target.closest('[data-cart-tab]');
    if (tab) {
        const nextTab = tab.dataset.cartTab;
        if (!nextTab || tab.disabled || nextTab === cartActiveTab) return;

        if (cartActiveTab === 'purchase') {
            readPurchaseFormFromDom();
        }
        cartActiveTab = nextTab;
        renderCartPanel();
        return;
    }

    const qtyBtn = event.target.closest('[data-cart-qty]');
    if (qtyBtn) {
        const groupKey = qtyBtn.dataset.groupKey;
        if (qtyBtn.dataset.cartQty === 'inc') {
            addOneToWeaponGroup(groupKey);
        } else {
            removeOneFromWeaponGroup(groupKey);
        }
    }
}

function handleCartBodyInput(event) {
    if (!event.target.matches('[data-purchase-qty], [data-purchase-price], [data-purchase-seller]')) return;
    updatePurchaseTotalsInDom();
}

function handleCartBodyChange(event) {
    if (!event.target.matches('[data-purchase-qty], [data-purchase-price], [data-purchase-seller]')) return;
    readPurchaseFormFromDom();
}

function initCartBodyDelegation() {
    if (!elements.cartBody || elements.cartBody.dataset.delegationBound) return;

    elements.cartBody.dataset.delegationBound = 'true';
    elements.cartBody.addEventListener('click', handleCartBodyClick);
    elements.cartBody.addEventListener('input', handleCartBodyInput);
    elements.cartBody.addEventListener('change', handleCartBodyChange);
}

function bindCartPanelInteractions() {
    // Delegated handlers are attached once in initCartBodyDelegation.
}

function renderCartPanel(options = {}) {
    if (!elements.cartBody) return;

    if (cartActiveTab === 'purchase' && !options.skipPurchaseRead) {
        readPurchaseFormFromDom();
    }

    const count = selectedWeapons.length;
    if (elements.cartTitle) {
        if (count) {
            elements.cartTitle.textContent = t('barter.craftListCount', '{count} предмет(ов)').replace('{count}', count);
            elements.cartTitle.removeAttribute('data-empty');
        } else {
            elements.cartTitle.textContent = '';
            elements.cartTitle.setAttribute('data-empty', 'true');
        }
    }

    updateCartFab();

    if (!count) {
        cartActiveTab = 'craft';
        elements.cartBody.innerHTML = `
            <div class="barter-cart__empty">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
                    <rect x="9" y="3" width="6" height="4" rx="1"/>
                    <path d="M9 12h6"/><path d="M9 16h4"/>
                </svg>
                <span>${t('barter.noWeaponsSelected', 'Добавьте оружие в список для расчёта ресурсов')}</span>
            </div>
        `;
        return;
    }

    const groups = groupSelectedWeapons();
    const totals = calculateMultiCategoryAggregatedBarterRequirements(selectedWeapons);
    if (!totals) {
        elements.cartBody.innerHTML = '';
        return;
    }

    const adjusted = applyInventoryToRequirements(totals, playerInventory);
    const missingMaterials = adjusted.materials.filter(entry => entry.missing > 0);
    const purchasableMissingMaterials = missingMaterials.filter(entry => isBarterMaterialPurchasable(entry.id));
    prunePurchaseOffers(purchasableMissingMaterials.map(entry => entry.id));

    if (cartActiveTab === 'purchase' && !purchasableMissingMaterials.length) {
        cartActiveTab = 'craft';
    }

    const showCategoryLabels = hasMultipleSelectedCategories();

    const weaponsHtml = groups.map(group => {
        const category = getBarterCategoryById(group.categoryId);
        const node = getBarterNodeById(category, group.nodeId);
        const weapon = node ? getBarterWeapon(node, BASE_PATH) : null;
        const name = weapon ? getWeaponName(weapon) : group.nodeId;
        const imagePath = weapon?.imagePath || '';
        const groupKey = getWeaponGroupKey(group);
        const categoryLabel = showCategoryLabels && category
            ? `<div class="barter-cart-weapon__category">${getBarterCategoryName(category)}</div>`
            : '';

        return `
            <div class="barter-cart-weapon">
                ${imagePath ? `<img class="barter-cart-weapon__image" src="${imagePath}" alt="" loading="lazy" decoding="async">` : '<div class="barter-cart-weapon__image"></div>'}
                <div class="barter-cart-weapon__body">
                    <div class="barter-cart-weapon__name">${name}</div>
                    ${categoryLabel}
                </div>
                <div class="barter-cart-weapon__qty">
                    <button type="button" class="barter-cart-weapon__qty-btn" data-cart-qty="dec" data-group-key="${groupKey}" aria-label="−">−</button>
                    <span class="barter-cart-weapon__qty-value">${group.count}</span>
                    <button type="button" class="barter-cart-weapon__qty-btn" data-cart-qty="inc" data-group-key="${groupKey}" aria-label="+">+</button>
                </div>
            </div>
        `;
    }).join('');

    const materialEntries = adjusted.materials
        .filter(entry => entry.amount > 0)
        .sort((a, b) => {
            if (a.satisfied !== b.satisfied) return a.satisfied ? 1 : -1;
            return b.missing - a.missing;
        });

    const missingMaterialCount = materialEntries.filter(entry => entry.missing > 0).length;

    const materialCards = materialEntries.map(entry => {
        const imagePath = getBarterMaterialImagePath(entry.id, BASE_PATH);
        const progress = Math.min(100, Math.round((entry.have / entry.amount) * 100));
        const statusClass = entry.missing > 0
            ? 'barter-cart-material--missing'
            : 'barter-cart-material--ok';

        return `
            <div class="barter-cart-material ${statusClass}">
                <img class="barter-cart-material__icon" src="${imagePath}" alt="" loading="lazy" decoding="async">
                <div class="barter-cart-material__body">
                    <div class="barter-cart-material__head">
                        <span class="barter-cart-material__name">${getBarterMaterialName(entry.material)}</span>
                        <div class="barter-cart-material__counts" aria-label="${t('barter.have', 'Есть')} / ${t('barter.need', 'Нужно')}">
                            <span class="barter-cart-material__have">${entry.have}</span>
                            <span class="barter-cart-material__sep">/</span>
                            <span class="barter-cart-material__need">${entry.amount}</span>
                        </div>
                    </div>
                    <div class="barter-cart-material__progress" role="progressbar" aria-valuenow="${entry.have}" aria-valuemin="0" aria-valuemax="${entry.amount}" aria-label="${getBarterMaterialName(entry.material)}">
                        <div class="barter-cart-material__progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
                ${entry.missing > 0
                    ? `<div class="barter-cart-material__status barter-cart-material__status--missing" title="${t('barter.missing', 'Не хватает')}">
                        <span class="barter-cart-material__status-value">${entry.missing}</span>
                    </div>`
                    : `<div class="barter-cart-material__status barter-cart-material__status--ok" title="${t('barter.allMaterialsCovered', 'Все материалы есть')}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                            <path d="M20 6L9 17l-5-5"/>
                        </svg>
                    </div>`
                }
            </div>
        `;
    }).join('');

    const metaRows = [];

    if (adjusted.money.required > 0) {
        metaRows.push(`
            <div class="barter-cart-summary__item${adjusted.money.missing === 0 ? ' barter-cart-summary__item--ok' : ' barter-cart-summary__item--missing'}">
                <span class="barter-cart-summary__label">${t('barter.money', 'Деньги')}</span>
                <span class="barter-cart-summary__value">${formatPrice(adjusted.money.missing)}</span>
            </div>
        `);
    }

    if (adjusted.cr.required > 0) {
        metaRows.push(`
            <div class="barter-cart-summary__item barter-cart-summary__item--cr${adjusted.cr.missing === 0 ? ' barter-cart-summary__item--ok' : ' barter-cart-summary__item--missing'}">
                <span class="barter-cart-summary__label">${t('barter.eventCraftCost', 'Ивентовая валюта')}</span>
                <span class="barter-cart-summary__value">${formatEventCost(adjusted.cr.missing)}</span>
            </div>
        `);
    }

    if (adjusted.level.required > 0) {
        const levelSatisfied = adjusted.level.satisfied;
        let levelText;

        if (!levelSatisfied && adjusted.level.missingXp > 0) {
            levelText = `${adjusted.level.have} → ${adjusted.level.required} (${formatXp(adjusted.level.missingXp)})`;
        } else if (!levelSatisfied) {
            levelText = `${adjusted.level.have} → ${adjusted.level.required}`;
        } else {
            levelText = String(adjusted.level.required);
        }

        metaRows.push(`
            <div class="barter-cart-summary__item${levelSatisfied ? ' barter-cart-summary__item--ok' : ' barter-cart-summary__item--missing'}">
                <span class="barter-cart-summary__label">${t('barter.level', 'Уровень')}</span>
                <span class="barter-cart-summary__value">${levelText}</span>
            </div>
        `);
    }

    const craftTabHtml = `
        <div class="barter-cart-section barter-cart-section--weapons">
            <h3 class="barter-cart-section__title barter-cart-section__title--prominent barter-cart-section__title--lined">${t('barter.selectedWeapons', 'Выбранное оружие')}</h3>
            <div class="barter-cart-weapons">${weaponsHtml}</div>
        </div>

        <div class="barter-cart-section">
            <div class="barter-cart-section__head barter-cart-section__head--materials">
                <h3 class="barter-cart-section__title barter-cart-section__title--prominent">${t('barter.totalSummary', 'Не хватает')}</h3>
                ${materialEntries.length ? `
                    <div class="barter-cart-section__stat${missingMaterialCount === 0 ? ' barter-cart-section__stat--ok' : ''}" aria-label="${missingMaterialCount} / ${materialEntries.length}">
                        ${missingMaterialCount === 0
                            ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>`
                            : `<span class="barter-cart-section__stat-missing">${missingMaterialCount}</span><span class="barter-cart-section__stat-sep">/</span><span class="barter-cart-section__stat-total">${materialEntries.length}</span>`
                        }
                    </div>
                ` : ''}
            </div>
            ${materialCards ? `
                <div class="barter-cart-materials">${materialCards}</div>
            ` : `
                <div class="barter-cart-materials-empty">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>${t('barter.allMaterialsCovered', 'Все материалы есть')}</span>
                </div>
            `}
        </div>

        ${metaRows.length ? `
            <div class="barter-cart-section barter-cart-section--summary">
                <h3 class="barter-cart-section__title barter-cart-section__title--prominent barter-cart-section__title--lined">${t('barter.summary', 'Итого')}</h3>
                <div class="barter-cart-summary">${metaRows.join('')}</div>
            </div>
        ` : ''}
    `;

    const purchaseTabHtml = renderPurchaseTabContent(purchasableMissingMaterials);
    const purchaseTabBadge = purchasableMissingMaterials.length
        ? `<span class="barter-cart-tab__badge">${purchasableMissingMaterials.length}</span>`
        : '';

    elements.cartBody.innerHTML = `
        <div class="barter-cart-tabs" role="tablist">
            <button type="button"
                    role="tab"
                    class="barter-cart-tab${cartActiveTab === 'craft' ? ' is-active' : ''}"
                    data-cart-tab="craft"
                    aria-selected="${cartActiveTab === 'craft'}">
                ${t('barter.cartTabCraft', 'Крафт')}
            </button>
            <button type="button"
                    role="tab"
                    class="barter-cart-tab${cartActiveTab === 'purchase' ? ' is-active' : ''}"
                    data-cart-tab="purchase"
                    aria-selected="${cartActiveTab === 'purchase'}"
                    ${purchasableMissingMaterials.length ? '' : 'disabled'}>
                ${t('barter.cartTabPurchase', 'Закупка')}
                ${purchaseTabBadge}
            </button>
        </div>
        <div class="barter-cart-tabpanel" data-cart-tabpanel="craft" ${cartActiveTab === 'craft' ? '' : 'hidden'}>
            ${craftTabHtml}
        </div>
        <div class="barter-cart-tabpanel barter-cart-tabpanel--purchase" data-cart-tabpanel="purchase" ${cartActiveTab === 'purchase' ? '' : 'hidden'}>
            ${purchaseTabHtml}
        </div>
    `;

    bindCartPanelInteractions();
}

function getCategoryWeaponOptions() {
    if (!currentCategory) return [];

    return currentCategory.nodes
        .filter(node => !node.locked)
        .map(node => {
            const weapon = getBarterWeapon(node, BASE_PATH);
            return {
                node,
                weapon,
                name: weapon ? getWeaponName(weapon) : node.id
            };
        })
        .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
}

function updateWeaponPickerValue(nodeId = null) {
    if (!elements.weaponPickerValue) return;

    if (!nodeId) {
        elements.weaponPickerValue.textContent = t('barter.searchWeapon', 'Выберите оружие...');
        elements.weaponPickerValue.classList.remove('barter-weapon-picker__value--selected');
        return;
    }

    const node = getBarterNodeById(currentCategory, nodeId);
    const weapon = node ? getBarterWeapon(node, BASE_PATH) : null;
    const name = weapon ? getWeaponName(weapon) : nodeId;

    elements.weaponPickerValue.textContent = name;
    elements.weaponPickerValue.classList.add('barter-weapon-picker__value--selected');
}

function getMeasuredTreeMetric(property, fallback) {
    if (!elements.tree) return fallback;

    const value = parseFloat(getComputedStyle(elements.tree).getPropertyValue(property));
    return Number.isFinite(value) && value > 0 ? value : fallback;
}

function getMeasuredNodeHeight() {
    return getMeasuredTreeMetric('--barter-node-height', NODE_HEIGHT);
}

function getMeasuredRowGap() {
    return getMeasuredTreeMetric('--barter-row-gap', ROW_GAP);
}

function getCanvasPadX() {
    if (!elements.canvas) return CANVAS_PAD_X;

    const raw = getComputedStyle(elements.canvas).getPropertyValue('--barter-canvas-pad-x').trim();
    const parsed = parseFloat(raw);
    if (Number.isFinite(parsed) && parsed >= 0) return parsed;

    const paddingLeft = parseFloat(getComputedStyle(elements.canvas).paddingLeft);
    return Number.isFinite(paddingLeft) && paddingLeft >= 0 ? paddingLeft : CANVAS_PAD_X;
}

function getCanvasPadBottom() {
    if (!elements.canvas) return CANVAS_PAD_BOTTOM;

    const raw = getComputedStyle(elements.canvas).getPropertyValue('--barter-canvas-pad-bottom').trim();
    const parsed = parseFloat(raw);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : CANVAS_PAD_BOTTOM;
}

function usesMobilePicker() {
    return window.matchMedia('(max-width: 768px)').matches;
}

function updateBodyScrollLock() {
    const locked = Boolean(
        elements.inventoryModal?.classList.contains('is-open')
        || elements.categoryModal?.classList.contains('is-open')
        || elements.weaponModal?.classList.contains('is-open')
    );
    document.body.style.overflow = locked ? 'hidden' : '';
}

function getWeaponPickerListElement() {
    if (usesMobilePicker() && elements.weaponModalList) {
        return elements.weaponModalList;
    }
    return elements.weaponPickerList;
}

function renderWeaponPickerList() {
    const listEl = getWeaponPickerListElement();
    if (!listEl) return;

    const query = weaponPickerQuery.trim().toLowerCase();
    const options = getCategoryWeaponOptions().filter(option => {
        if (!query) return true;
        return option.name.toLowerCase().includes(query);
    });

    if (!options.length) {
        listEl.innerHTML = `
            <div class="barter-weapon-picker__empty">${t('barter.weaponNotFound', 'Оружие не найдено')}</div>
        `;
        return;
    }

    listEl.innerHTML = options.map(option => {
        const imagePath = option.weapon?.imagePath || '';
        const isActive = option.node.id === selectedNodeId;

        return `
            <button type="button"
                    class="barter-weapon-picker__item${isActive ? ' barter-weapon-picker__item--active' : ''}"
                    role="option"
                    data-node-id="${option.node.id}"
                    aria-selected="${isActive}">
                ${imagePath ? `<img class="barter-weapon-picker__item-img" src="${imagePath}" alt="" loading="lazy" decoding="async">` : ''}
                <span class="barter-weapon-picker__item-name">${option.name}</span>
            </button>
        `;
    }).join('');
}

function updateWeaponPickerMenuPosition() {
    const trigger = elements.weaponPickerTrigger;
    const menu = elements.weaponPickerMenu;
    if (!trigger || !menu || menu.hidden) return;

    const rect = trigger.getBoundingClientRect();
    menu.style.top = `${rect.bottom + 4}px`;
    menu.style.left = `${rect.left}px`;
    menu.style.width = `${rect.width}px`;
}

function setWeaponPickerOpen(isOpen) {
    weaponPickerOpen = isOpen;

    if (!elements.weaponPickerMenu || !elements.weaponPickerTrigger) return;

    if (isOpen) {
        endPan();
    }

    const mobile = usesMobilePicker();

    elements.weaponPickerTrigger.setAttribute('aria-expanded', String(isOpen));

    if (mobile) {
        elements.weaponPickerMenu.hidden = true;
        elements.weaponModal?.classList.toggle('is-open', isOpen);
        elements.weaponModal?.setAttribute('aria-hidden', String(!isOpen));

        if (elements.weaponPickerValue) {
            elements.weaponPickerValue.hidden = false;
        }
        if (elements.weaponSearchInput) {
            elements.weaponSearchInput.hidden = true;
        }

        if (isOpen) {
            if (elements.weaponModalSearch) {
                elements.weaponModalSearch.value = weaponPickerQuery;
            }
            renderWeaponPickerList();
            requestAnimationFrame(() => {
                elements.weaponModalSearch?.focus();
            });
        } else {
            weaponPickerQuery = '';
            if (elements.weaponModalSearch) {
                elements.weaponModalSearch.value = '';
            }
            updateWeaponPickerValue(selectedNodeId);
        }
    } else {
        elements.weaponModal?.classList.remove('is-open');
        elements.weaponModal?.setAttribute('aria-hidden', 'true');
        elements.weaponPickerMenu.hidden = !isOpen;

        if (elements.weaponPickerValue) {
            elements.weaponPickerValue.hidden = isOpen;
        }
        if (elements.weaponSearchInput) {
            elements.weaponSearchInput.hidden = !isOpen;
        }

        if (isOpen) {
            if (elements.weaponSearchInput) {
                elements.weaponSearchInput.value = weaponPickerQuery;
            }
            renderWeaponPickerList();
            requestAnimationFrame(() => {
                updateWeaponPickerMenuPosition();
                elements.weaponSearchInput?.focus();
            });
        } else {
            weaponPickerQuery = '';
            if (elements.weaponSearchInput) {
                elements.weaponSearchInput.value = '';
            }
            updateWeaponPickerValue(selectedNodeId);
        }
    }

    updateBodyScrollLock();
}

function focusNodeInTree(nodeId, { openDetails = true } = {}) {
    const node = getBarterNodeById(currentCategory, nodeId);
    if (!node || node.locked) return;

    selectedNodeId = nodeId;
    selectedOfferIndex = 0;

    elements.tree?.querySelectorAll('.barter-node').forEach(el => {
        el.classList.toggle('barter-node--selected', el.dataset.nodeId === nodeId);
    });

    updateWeaponPickerValue(nodeId);
    setWeaponPickerOpen(false);

    if (openDetails) {
        openPanel(nodeId);
    }

    requestAnimationFrame(() => {
        const nodeEl = elements.tree?.querySelector(`[data-node-id="${nodeId}"]`);
        if (!nodeEl || !elements.viewport) return;

        const viewportRect = elements.viewport.getBoundingClientRect();
        const nodeRect = nodeEl.getBoundingClientRect();
        const targetLeft = elements.viewport.scrollLeft
            + (nodeRect.left - viewportRect.left)
            - (viewportRect.width / 2)
            + (nodeRect.width / 2);
        const targetTop = elements.viewport.scrollTop
            + (nodeRect.top - viewportRect.top)
            - (viewportRect.height / 2)
            + (nodeRect.height / 2);

        elements.viewport.scrollTo({
            left: Math.max(0, targetLeft),
            top: Math.max(0, targetTop),
            behavior: 'smooth'
        });
    });
}

function renderInventoryModal() {
    if (!elements.inventoryStats || !elements.inventoryBody) return;

    const isExactXp = playerInventory.xpMode === 'exact';
    const displayLevel = isExactXp
        ? getBarterLevelFromXp(playerInventory.xp)
        : Math.min(MAX_PLAYER_LEVEL, playerInventory.level || 0);
    const displayXp = isExactXp
        ? Math.max(0, Math.floor(playerInventory.xp || 0))
        : getBarterXpForLevel(playerInventory.level || 0);
    const levelHint = isExactXp
        ? t('barter.xpLevelHint', '≈ {level} ур.').replace('{level}', String(displayLevel))
        : t('barter.levelXpHint', '≈ {xp} опыта').replace('{xp}', formatXp(displayXp));

    elements.inventoryStats.innerHTML = `
        <div class="barter-inventory-stat barter-inventory-stat--level">
            <div class="barter-inventory-stat__head">
                <span class="barter-inventory-stat__label">${t('barter.level', 'Уровень персонажа')}</span>
                <div class="barter-inventory-stat__mode" role="group" aria-label="${t('barter.xpInputMode', 'Способ ввода')}">
                    <button type="button"
                            class="barter-inventory-stat__mode-btn${!isExactXp ? ' is-active' : ''}"
                            data-xp-mode="level"
                            aria-pressed="${!isExactXp}">
                        ${t('barter.xpModeLevel', 'Уровень')}
                    </button>
                    <button type="button"
                            class="barter-inventory-stat__mode-btn${isExactXp ? ' is-active' : ''}"
                            data-xp-mode="exact"
                            aria-pressed="${isExactXp}">
                        ${t('barter.xpModeExact', 'Опыт')}
                    </button>
                </div>
            </div>
            <input type="number"
                   class="barter-inventory-stat__input${isExactXp ? ' is-hidden' : ''}"
                   id="barterInventoryLevel"
                   min="0"
                   max="${MAX_PLAYER_LEVEL}"
                   step="1"
                   value="${Math.min(MAX_PLAYER_LEVEL, playerInventory.level || 0)}"
                   ${isExactXp ? 'hidden' : ''}>
            <input type="number"
                   class="barter-inventory-stat__input${!isExactXp ? ' is-hidden' : ''}"
                   id="barterInventoryXp"
                   min="0"
                   step="10"
                   value="${displayXp}"
                   ${!isExactXp ? 'hidden' : ''}>
            <span class="barter-inventory-stat__hint">${levelHint}</span>
        </div>
        <label class="barter-inventory-stat">
            <span class="barter-inventory-stat__label">${t('barter.money', 'Деньги')}</span>
            <input type="number"
                   class="barter-inventory-stat__input"
                   id="barterInventoryMoney"
                   min="0"
                   step="1"
                   value="${playerInventory.money || 0}">
        </label>
        <label class="barter-inventory-stat">
            <span class="barter-inventory-stat__label barter-inventory-stat__label--cr">${t('barter.cr', 'CR')}</span>
            <input type="number"
                   class="barter-inventory-stat__input"
                   id="barterInventoryCr"
                   min="0"
                   step="1"
                   value="${playerInventory.cr || 0}">
        </label>
    `;

    const materials = getBarterMaterialsForInventory();
    elements.inventoryBody.innerHTML = `
        <div class="barter-inventory-grid">
            ${materials.map(entry => {
                const imagePath = getBarterMaterialImagePath(entry.id, BASE_PATH);
                const amount = playerInventory.materials[entry.id] || 0;

                return `
                    <div class="barter-inventory-cell">
                        <img class="barter-inventory-cell__icon" src="${imagePath}" alt="" loading="lazy" decoding="async">
                        <span class="barter-inventory-cell__name">${getBarterMaterialName(entry.material)}</span>
                        <div class="barter-inventory-cell__qty">
                            <button type="button" class="barter-inventory-cell__qty-btn" data-inventory-qty="dec" aria-label="−">−</button>
                            <input type="number"
                                   class="barter-inventory-cell__qty-input"
                                   data-material-id="${entry.id}"
                                   min="0"
                                   step="1"
                                   value="${amount}"
                                   inputmode="numeric"
                                   aria-label="${getBarterMaterialName(entry.material)}">
                            <button type="button" class="barter-inventory-cell__qty-btn" data-inventory-qty="inc" aria-label="+">+</button>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function normalizeInventoryLevelInput() {
    const input = document.getElementById('barterInventoryLevel');
    if (!input) return 0;

    const level = Math.min(MAX_PLAYER_LEVEL, Math.max(0, Number(input.value) || 0));
    if (Number(input.value) !== level) {
        input.value = level;
    }

    return level;
}

function normalizeInventoryXpInput() {
    const input = document.getElementById('barterInventoryXp');
    if (!input) return 0;

    const xp = Math.max(0, Math.floor(Number(input.value) || 0));
    if (Number(input.value) !== xp) {
        input.value = xp;
    }

    return xp;
}

function setInventoryXpMode(mode) {
    const nextMode = mode === 'exact' ? 'exact' : 'level';
    if (playerInventory.xpMode === nextMode) return;

    if (nextMode === 'exact') {
        playerInventory.xp = getBarterXpForLevel(playerInventory.level || 0);
    } else {
        playerInventory.level = getBarterLevelFromXp(playerInventory.xp || 0);
    }

    playerInventory.xpMode = nextMode;
    savePlayerInventory();
    renderInventoryModal();
    updateCartPanel();
}

function readInventoryForm() {
    const xpMode = playerInventory.xpMode === 'exact' ? 'exact' : 'level';
    const level = Math.min(MAX_PLAYER_LEVEL, Math.max(0, Number(document.getElementById('barterInventoryLevel')?.value) || 0));
    const xp = Math.max(0, Math.floor(Number(document.getElementById('barterInventoryXp')?.value) || 0));
    const money = Math.max(0, Number(document.getElementById('barterInventoryMoney')?.value) || 0);
    const cr = Math.max(0, Number(document.getElementById('barterInventoryCr')?.value) || 0);
    const materials = {};

    elements.inventoryBody?.querySelectorAll('[data-material-id]').forEach(input => {
        const amount = Math.max(0, Number(input.value) || 0);
        if (amount > 0) {
            materials[input.dataset.materialId] = amount;
        }
    });

    playerInventory = {
        level: xpMode === 'level' ? level : getBarterLevelFromXp(xp),
        xp: xpMode === 'exact' ? xp : getBarterXpForLevel(level),
        xpMode,
        money,
        cr,
        materials
    };
    savePlayerInventory();
    updateInventoryLevelHint();
    updateCartPanel();
}

function updateInventoryLevelHint() {
    const hint = elements.inventoryStats?.querySelector('.barter-inventory-stat__hint');
    if (!hint) return;

    const isExactXp = playerInventory.xpMode === 'exact';
    hint.textContent = isExactXp
        ? t('barter.xpLevelHint', '≈ {level} ур.').replace('{level}', String(getBarterLevelFromXp(playerInventory.xp)))
        : t('barter.levelXpHint', '≈ {xp} опыта').replace('{xp}', formatXp(getBarterXpForLevel(playerInventory.level)));
}

function openInventoryModal() {
    if (!elements.inventoryModal) return;

    renderInventoryModal();
    elements.inventoryModal.classList.add('is-open');
    elements.inventoryModal.setAttribute('aria-hidden', 'false');
    updateBodyScrollLock();
}

function closeInventoryModal() {
    if (!elements.inventoryModal) return;

    readInventoryForm();
    elements.inventoryModal.classList.remove('is-open');
    elements.inventoryModal.setAttribute('aria-hidden', 'true');
    updateBodyScrollLock();
}

function clearPlayerInventory() {
    playerInventory = createEmptyPlayerInventory();
    savePlayerInventory();
    renderInventoryModal();
    updateCartPanel();
}

function initWeaponPicker() {
    if (!elements.weaponPicker) return;

    elements.weaponPickerTrigger?.addEventListener('click', (event) => {
        event.stopPropagation();

        if (event.target.closest('.barter-weapon-picker__arrow') && weaponPickerOpen) {
            setWeaponPickerOpen(false);
            return;
        }

        if (event.target === elements.weaponSearchInput) {
            return;
        }

        if (!weaponPickerOpen) {
            setWeaponPickerOpen(true);
        }
    });

    elements.weaponPickerTrigger?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            if (event.target === elements.weaponSearchInput) return;
            event.preventDefault();
            if (!weaponPickerOpen) {
                setWeaponPickerOpen(true);
            }
        }
    });

    elements.weaponSearchInput?.addEventListener('input', () => {
        weaponPickerQuery = elements.weaponSearchInput.value;
        renderWeaponPickerList();
    });

    elements.weaponModalSearch?.addEventListener('input', () => {
        weaponPickerQuery = elements.weaponModalSearch.value;
        renderWeaponPickerList();
    });

    const handleWeaponListClick = (event) => {
        const item = event.target.closest('[data-node-id]');
        if (!item) return;

        focusNodeInTree(item.dataset.nodeId);
    };

    elements.weaponPickerList?.addEventListener('click', handleWeaponListClick);
    elements.weaponModalList?.addEventListener('click', handleWeaponListClick);

    initTouchScrollContainment(elements.weaponPickerList);
    initTouchScrollContainment(elements.weaponPickerMenu);
    initTouchScrollContainment(elements.weaponModalList);

    elements.weaponModalClose?.addEventListener('click', () => setWeaponPickerOpen(false));
    elements.weaponModalBackdrop?.addEventListener('click', () => setWeaponPickerOpen(false));

    document.addEventListener('click', (event) => {
        if (!weaponPickerOpen || usesMobilePicker()) return;
        if (elements.weaponPicker?.contains(event.target)) return;
        setWeaponPickerOpen(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && weaponPickerOpen) {
            setWeaponPickerOpen(false);
        }
    });
}

function initCartPanel() {
    initCartBodyDelegation();
    elements.cartFab?.addEventListener('click', toggleCartPanel);
    elements.cartClose?.addEventListener('click', closeCartPanel);
    elements.cartBackdrop?.addEventListener('click', closeCartPanel);
    elements.cartClear?.addEventListener('click', clearCraftList);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && cartPanelOpen) {
            closeCartPanel();
        }
    });
}

function initInventoryModal() {
    elements.inventoryBtn?.addEventListener('click', openInventoryModal);
    elements.inventoryClose?.addEventListener('click', closeInventoryModal);
    elements.inventoryBackdrop?.addEventListener('click', closeInventoryModal);
    elements.inventoryClear?.addEventListener('click', clearPlayerInventory);

    elements.inventoryModal?.addEventListener('input', () => {
        readInventoryForm();
    });

    elements.inventoryModal?.addEventListener('click', (event) => {
        const modeBtn = event.target.closest('[data-xp-mode]');
        if (!modeBtn) return;

        event.preventDefault();
        setInventoryXpMode(modeBtn.dataset.xpMode);
    });

    elements.inventoryModal?.addEventListener('focusout', (event) => {
        if (event.target.id === 'barterInventoryLevel') {
            normalizeInventoryLevelInput();
            readInventoryForm();
            return;
        }

        if (event.target.id === 'barterInventoryXp') {
            normalizeInventoryXpInput();
            readInventoryForm();
        }
    });

    elements.inventoryBody?.addEventListener('click', (event) => {
        const qtyBtn = event.target.closest('[data-inventory-qty]');
        if (!qtyBtn) return;

        event.preventDefault();
        event.stopPropagation();

        const cell = qtyBtn.closest('.barter-inventory-cell');
        const input = cell?.querySelector('[data-material-id]');
        if (!input) return;

        const delta = qtyBtn.dataset.inventoryQty === 'inc' ? 1 : -1;
        input.value = Math.max(0, (Number(input.value) || 0) + delta);
        readInventoryForm();
    });

    elements.inventoryBody?.addEventListener('mousedown', (event) => {
        if (!window.matchMedia('(pointer: fine)').matches) return;
        if (event.target.closest('[data-inventory-qty]')
            || event.target.closest('.barter-inventory-cell__qty-input')) return;

        const cell = event.target.closest('.barter-inventory-cell');
        if (!cell) return;

        const input = cell.querySelector('[data-material-id]');
        if (!input) return;

        event.preventDefault();
        input.focus();
        input.select();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && elements.inventoryModal?.classList.contains('is-open')) {
            closeInventoryModal();
        }
    });
}

function initElements() {
    elements.viewport = document.getElementById('barterViewport');
    elements.canvas = document.getElementById('barterCanvas');
    elements.linesSvg = document.getElementById('barterLines');
    elements.tree = document.getElementById('barterTree');
    elements.categoryMenu = document.getElementById('barterCategoryMenu');
    elements.categoryMenuTrigger = document.getElementById('barterCategoryMenuTrigger');
    elements.categoryMenuValue = document.getElementById('barterCategoryMenuValue');
    elements.categoryMenuDropdown = document.getElementById('barterCategoryMenuDropdown');
    elements.categoryMenuGroups = document.getElementById('barterCategoryMenuGroups');
    elements.panel = document.getElementById('barterPanel');
    elements.panelBody = document.getElementById('barterPanelBody');
    elements.panelTitle = document.getElementById('barterPanelTitle');
    elements.panelWeapon = document.getElementById('barterPanelWeapon');
    elements.panelWeaponImage = document.getElementById('barterPanelWeaponImage');
    elements.panelClose = document.getElementById('barterPanelClose');
    elements.chainToggle = document.getElementById('barterChainToggle');
    elements.cartFab = document.getElementById('barterCartFab');
    elements.cartBadge = document.getElementById('barterCartBadge');
    elements.cart = document.getElementById('barterCart');
    elements.cartBackdrop = document.getElementById('barterCartBackdrop');
    elements.cartClose = document.getElementById('barterCartClose');
    elements.cartClear = document.getElementById('barterCartClear');
    elements.cartBody = document.getElementById('barterCartBody');
    elements.cartTitle = document.getElementById('barterCartTitle');
    elements.weaponPicker = document.getElementById('barterWeaponPicker');
    elements.weaponPickerTrigger = document.getElementById('barterWeaponPickerTrigger');
    elements.weaponPickerMenu = document.getElementById('barterWeaponPickerMenu');
    elements.weaponPickerValue = document.getElementById('barterWeaponPickerValue');
    elements.weaponPickerList = document.getElementById('barterWeaponPickerList');
    elements.weaponSearchInput = document.getElementById('barterWeaponSearchInput');
    elements.weaponModal = document.getElementById('barterWeaponModal');
    elements.weaponModalBackdrop = document.getElementById('barterWeaponBackdrop');
    elements.weaponModalClose = document.getElementById('barterWeaponClose');
    elements.weaponModalSearch = document.getElementById('barterWeaponModalSearch');
    elements.weaponModalList = document.getElementById('barterWeaponModalList');
    elements.categoryModal = document.getElementById('barterCategoryModal');
    elements.categoryModalBackdrop = document.getElementById('barterCategoryBackdrop');
    elements.categoryModalClose = document.getElementById('barterCategoryClose');
    elements.categoryModalGroups = document.getElementById('barterCategoryModalGroups');
    elements.inventoryBtn = document.getElementById('barterInventoryBtn');
    elements.inventoryModal = document.getElementById('barterInventoryModal');
    elements.inventoryBackdrop = document.getElementById('barterInventoryBackdrop');
    elements.inventoryClose = document.getElementById('barterInventoryClose');
    elements.inventoryClear = document.getElementById('barterInventoryClear');
    elements.inventoryStats = document.getElementById('barterInventoryStats');
    elements.inventoryBody = document.getElementById('barterInventoryBody');
}

function initTouchScrollContainment(element) {
    if (!element) return;

    let startY = 0;

    element.addEventListener('touchstart', (event) => {
        if (event.touches.length !== 1) return;
        startY = event.touches[0].clientY;
    }, { passive: true });

    element.addEventListener('touchmove', (event) => {
        if (event.touches.length !== 1) return;

        const { scrollTop, scrollHeight, clientHeight } = element;
        const deltaY = startY - event.touches[0].clientY;
        const atTop = scrollTop <= 0;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

        if ((atTop && deltaY < 0) || (atBottom && deltaY > 0)) {
            event.preventDefault();
        }

        event.stopPropagation();
    }, { passive: false });
}

function shouldBlockViewportPan(target) {
    if (weaponPickerOpen || categoryMenuOpen) return true;
    return Boolean(target?.closest?.(
        '.barter-weapon-picker__menu, .barter-category-menu__dropdown, .barter-picker-modal'
    ));
}

function closeCategorySubmenus(container = elements.categoryMenuGroups) {
    container?.querySelectorAll('.barter-category-menu__group.is-submenu-open')
        .forEach(group => group.classList.remove('is-submenu-open'));
}

function closeAllCategorySubmenus() {
    closeCategorySubmenus(elements.categoryMenuGroups);
    closeCategorySubmenus(elements.categoryModalGroups);
}

function buildCategoryMenuHtml(currentId) {
    const grouped = getBarterCategoriesGrouped();

    return grouped.map(group => {
        const hasCategories = group.categories.length > 0;
        const submenu = hasCategories
            ? `<ul class="barter-category-menu__submenu" role="menu">
                ${group.categories.map(category => `
                    <li role="none">
                        <button type="button"
                            class="barter-category-menu__subitem${category.id === currentId ? ' is-active' : ''}"
                            data-category-id="${category.id}"
                            role="menuitem">
                            ${escapeHtml(getBarterCategorySubcategoryName(category))}
                        </button>
                    </li>
                `).join('')}
            </ul>`
            : '';

        return `
            <li class="barter-category-menu__group${hasCategories ? '' : ' barter-category-menu__group--empty'}"
                data-group-id="${group.id}"
                role="none">
                <span class="barter-category-menu__group-label" role="menuitem" tabindex="${hasCategories ? '0' : '-1'}">
                    <span>${escapeHtml(group.name)}</span>
                    ${hasCategories ? `
                        <svg class="barter-category-menu__group-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <path d="M9 6l6 6-6 6"/>
                        </svg>
                    ` : ''}
                </span>
                ${submenu}
            </li>
        `;
    }).join('');
}

function handleCategoryGroupsClick(event) {
    const subitem = event.target.closest('.barter-category-menu__subitem');
    if (subitem?.dataset.categoryId) {
        selectCategory(subitem.dataset.categoryId);
        return;
    }

    if (!usesMobilePicker()) return;

    const group = event.target.closest('.barter-category-menu__group:not(.barter-category-menu__group--empty)');
    if (!group) return;

    const container = group.closest('.barter-category-menu__groups');
    const isOpen = group.classList.contains('is-submenu-open');
    closeCategorySubmenus(container);
    if (!isOpen) {
        group.classList.add('is-submenu-open');
    }

    if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
    }
}

function setCategoryMenuOpen(open) {
    categoryMenuOpen = open;

    if (open) {
        endPan();
    }

    elements.categoryMenu?.classList.toggle('is-open', open);
    elements.categoryMenuTrigger?.setAttribute('aria-expanded', String(open));

    if (usesMobilePicker()) {
        if (elements.categoryMenuDropdown) {
            elements.categoryMenuDropdown.setAttribute('hidden', '');
        }

        elements.categoryModal?.classList.toggle('is-open', open);
        elements.categoryModal?.setAttribute('aria-hidden', String(!open));

        if (!open) {
            closeAllCategorySubmenus();
        }
    } else {
        elements.categoryModal?.classList.remove('is-open');
        elements.categoryModal?.setAttribute('aria-hidden', 'true');

        if (elements.categoryMenuDropdown) {
            if (open) {
                elements.categoryMenuDropdown.removeAttribute('hidden');
            } else {
                elements.categoryMenuDropdown.setAttribute('hidden', '');
            }
        }

        if (!open) {
            closeAllCategorySubmenus();
        }
    }

    updateBodyScrollLock();
}

function updateCategoryMenuValue() {
    if (!elements.categoryMenuValue) return;
    elements.categoryMenuValue.textContent = currentCategory
        ? getBarterCategoryDisplayName(currentCategory)
        : '—';
}

function renderCategoryMenu() {
    const html = buildCategoryMenuHtml(currentCategory?.id);

    if (elements.categoryMenuGroups) {
        elements.categoryMenuGroups.innerHTML = html;
    }
    if (elements.categoryModalGroups) {
        elements.categoryModalGroups.innerHTML = html;
    }
}

function selectCategory(categoryId) {
    if (!categoryId || categoryId === currentCategory?.id) {
        setCategoryMenuOpen(false);
        return;
    }

    loadCategory(categoryId);
    updateCategoryMenuValue();
    renderCategoryMenu();
    setCategoryMenuOpen(false);
}

function initCategoryMenu() {
    if (!elements.categoryMenu || !elements.categoryMenuTrigger || !elements.categoryMenuGroups) return;

    renderCategoryMenu();
    updateCategoryMenuValue();

    elements.categoryMenuTrigger.addEventListener('click', (event) => {
        event.stopPropagation();
        setCategoryMenuOpen(!categoryMenuOpen);
    });

    elements.categoryMenuGroups.addEventListener('click', handleCategoryGroupsClick);
    elements.categoryModalGroups?.addEventListener('click', handleCategoryGroupsClick);

    elements.categoryModalGroups?.addEventListener('mousedown', (event) => {
        if (event.target.closest('.barter-category-menu__group-label')) {
            event.preventDefault();
        }
    });

    elements.categoryModalClose?.addEventListener('click', () => setCategoryMenuOpen(false));
    elements.categoryModalBackdrop?.addEventListener('click', () => setCategoryMenuOpen(false));

    document.addEventListener('click', (event) => {
        if (!categoryMenuOpen || usesMobilePicker()) return;
        if (elements.categoryMenu?.contains(event.target)) return;
        setCategoryMenuOpen(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && categoryMenuOpen) {
            setCategoryMenuOpen(false);
        }
    });

    initTouchScrollContainment(elements.categoryMenuDropdown);
}

function loadCategory(categoryId) {
    currentCategory = getBarterCategoryById(categoryId);
    selectedNodeId = null;
    selectedOfferIndex = 0;
    weaponPickerQuery = '';
    setWeaponPickerOpen(false);
    updateWeaponPickerValue();
    if (elements.weaponSearchInput) {
        elements.weaponSearchInput.value = '';
    }
    closePanel();
    renderTree({ center: true });
    updateCartPanel();
}

function getColumnNodes(columnIndex) {
    if (!currentCategory) return [];
    return currentCategory.nodes
        .filter(node => node.column === columnIndex)
        .sort((a, b) => a.row - b.row || a.id.localeCompare(b.id));
}

function getCategoryRowOffset() {
    if (!currentCategory?.nodes.length) return 0;
    return Math.min(...currentCategory.nodes.map(node => node.row));
}

function getVisualRow(node) {
    return node.row - getCategoryRowOffset();
}

function getCategoryRowCount() {
    if (!currentCategory?.nodes.length) return 0;
    return Math.max(...currentCategory.nodes.map(node => getVisualRow(node))) + 1;
}

function getRowStride() {
    return getMeasuredNodeHeight() + getMeasuredRowGap();
}

function getColumnGap() {
    if (!elements.tree) return 56;

    const gap = parseFloat(getComputedStyle(elements.tree).columnGap || getComputedStyle(elements.tree).gap);
    return Number.isFinite(gap) ? gap : 56;
}

function getColumnWidth() {
    if (!elements.tree) return NODE_WIDTH;

    const column = elements.tree.querySelector('.barter-column');
    if (!column) return NODE_WIDTH;

    const width = column.offsetWidth;
    return width > 0 ? width : NODE_WIDTH;
}

function getNodeWidth() {
    if (!elements.tree) return NODE_INNER_WIDTH;

    const width = parseFloat(getComputedStyle(elements.tree).getPropertyValue('--barter-node-width'));
    return Number.isFinite(width) && width > 0 ? width : NODE_INNER_WIDTH;
}

function getNodeOffsetX() {
    const columnWidth = getColumnWidth();
    const nodeWidth = getNodeWidth();
    const innerColumnWidth = columnWidth - COLUMN_BODY_PAD_X * 2;
    return COLUMN_BODY_PAD_X + Math.max(0, (innerColumnWidth - nodeWidth) / 2);
}

function getTreeWidth(columnCount) {
    const columnGap = getColumnGap();
    const columnWidth = getColumnWidth();
    return columnCount * columnWidth + Math.max(0, columnCount - 1) * columnGap;
}

function getNodePosition(node) {
    const columnGap = getColumnGap();
    const columnWidth = getColumnWidth();

    return {
        x: getCanvasPadX() + node.column * (columnWidth + columnGap) + getNodeOffsetX(),
        y: CANVAS_PAD_Y + COLUMN_HEADER_HEIGHT + COLUMN_BODY_PAD_TOP + getVisualRow(node) * getRowStride()
    };
}

function getColumnTopOffset(row) {
    return COLUMN_HEADER_HEIGHT + COLUMN_BODY_PAD_TOP + row * getRowStride();
}

function getNodeAnchor(node, side) {
    const nodeEl = elements.tree?.querySelector(`[data-node-id="${node.id}"]`);
    if (nodeEl && elements.canvas) {
        const canvasRect = elements.canvas.getBoundingClientRect();
        const nodeRect = nodeEl.getBoundingClientRect();
        const y = nodeRect.top - canvasRect.top + nodeRect.height / 2;

        if (side === 'right') {
            return { x: nodeRect.right - canvasRect.left, y };
        }

        return { x: nodeRect.left - canvasRect.left, y };
    }

    const pos = getNodePosition(node);
    const y = pos.y + NODE_HEIGHT / 2;
    const nodeWidth = getNodeWidth();

    if (side === 'right') {
        return { x: pos.x + nodeWidth, y };
    }

    return { x: pos.x, y };
}

function getColumnHeight(columnIndex) {
    const rowCount = getCategoryRowCount();
    if (!rowCount) return COLUMN_HEADER_HEIGHT;
    return getColumnTopOffset(rowCount - 1) + getMeasuredNodeHeight();
}

function syncTreeMetrics() {
    if (!elements.tree) return;

    const nodeHeight = usesMobilePicker() ? 64 : NODE_HEIGHT;
    const rowGap = usesMobilePicker() ? 40 : ROW_GAP;

    elements.tree.style.setProperty('--barter-node-height', `${nodeHeight}px`);
    elements.tree.style.setProperty('--barter-row-gap', `${rowGap}px`);
    elements.tree.style.setProperty('--barter-row-count', String(getCategoryRowCount()));
}

function renderTree({ center = false } = {}) {
    if (!currentCategory || !elements.tree) return;

    const rowCount = getCategoryRowCount();
    syncTreeMetrics();

    elements.tree.innerHTML = currentCategory.columns.map((column, columnIndex) => {
        const columnNodes = getColumnNodes(columnIndex);
        const nodeByRow = new Map(columnNodes.map(node => [getVisualRow(node), node]));

        let gridCells = '';
        for (let row = 0; row < rowCount; row++) {
            const node = nodeByRow.get(row);
            gridCells += node
                ? renderNode(node)
                : '<div class="barter-grid-spacer" aria-hidden="true"></div>';
        }

        return `
            <div class="barter-column" data-column="${columnIndex}">
                <div class="barter-column__header">
                    ${getBarterColumnRankName(column)}
                    <span class="barter-column__header-sep">|</span>
                    ${getBarterLocationName(column.location)}
                </div>
                <div class="barter-column__body">
                    <div class="barter-column__grid">
                        ${gridCells}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    elements.tree.querySelectorAll('.barter-node').forEach(nodeEl => {
        nodeEl.addEventListener('click', handleNodeClick);

        const actionBtn = nodeEl.querySelector('.barter-node__action');
        actionBtn?.addEventListener('click', handleNodeActionClick);

        bindNodeRemoveButton(nodeEl);
    });

    updateWeaponListUi();

    requestAnimationFrame(() => {
        updateCanvasSize();
        drawConnections();
        finalizeCanvasLayout(center);
    });
}

function finalizeCanvasLayout(center = false) {
    if (center) {
        centerCanvas();
        return;
    }

    clampPan();
    applyPan(false);
}

function renderNode(node) {
    const weapon = getBarterWeapon(node, BASE_PATH);
    const name = weapon ? getWeaponName(weapon) : node.id;
    const isLocked = Boolean(node.locked);
    const isSelected = node.id === selectedNodeId;
    const imagePath = weapon?.imagePath || '';
    const count = getWeaponCount(node.id);
    const isAdded = count > 0;
    const actionLabel = isLocked
        ? t('barter.soon', 'Скоро')
        : t('barter.addWeapon', 'Добавить');

    const imageClass = isLocked
        ? 'barter-node__image barter-node__image--locked'
        : 'barter-node__image';
    const itemRarity = node.barterRarity ?? (node.deviceId ? 'none' : weapon?.rarity);
    const rarityClass = itemRarity
        ? `barter-node__image-wrap--${itemRarity}`
        : 'barter-node__image-wrap--none';

    return `
        <div class="barter-node${isLocked ? ' barter-node--locked' : ''}${isSelected ? ' barter-node--selected' : ''}${isAdded ? ' barter-node--added' : ''}"
             data-node-id="${node.id}">
            ${isAdded ? buildNodeSelectionMarkup(count) : ''}
            <div class="barter-node__image-wrap ${rarityClass}">
                ${imagePath ? `<img class="${imageClass}" src="${imagePath}" alt="" loading="lazy" decoding="async">` : ''}
                ${isLocked ? `
                    <span class="barter-node__lock" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="5" y="11" width="14" height="10" rx="2"/>
                            <path d="M8 11V8a4 4 0 018 0v3"/>
                        </svg>
                    </span>
                ` : ''}
            </div>
            <div class="barter-node__body">
                <div class="barter-node__name">${name}</div>
                ${isLocked
                    ? `<span class="barter-node__action">${actionLabel}</span>`
                    : `<button type="button" class="barter-node__action${isAdded ? ' barter-node__action--added' : ''}">${actionLabel}</button>`
                }
            </div>
        </div>
    `;
}

function getBarterChildNodeIds(nodeId) {
    if (!currentCategory) return [];

    return currentCategory.nodes
        .filter(node => (node.parents || []).includes(nodeId))
        .map(node => node.id);
}

let hoveredNodeId = null;

function clearNodeHoverHighlight() {
    hoveredNodeId = null;
    elements.tree?.querySelectorAll('.barter-node--hover-source, .barter-node--hover-next')
        .forEach(el => el.classList.remove('barter-node--hover-source', 'barter-node--hover-next'));
    elements.linesSvg?.querySelectorAll('.barter-line--highlight')
        .forEach(el => el.classList.remove('barter-line--highlight'));
}

function setNodeHoverHighlight(nodeId) {
    if (!currentCategory || !elements.tree || !nodeId) return;
    if (hoveredNodeId === nodeId) return;

    clearNodeHoverHighlight();
    hoveredNodeId = nodeId;

    const childIds = getBarterChildNodeIds(nodeId);
    const sourceEl = elements.tree.querySelector(`[data-node-id="${nodeId}"]`);
    sourceEl?.classList.add('barter-node--hover-source');

    if (!childIds.length) return;

    childIds.forEach(childId => {
        elements.tree.querySelector(`[data-node-id="${childId}"]`)
            ?.classList.add('barter-node--hover-next');
    });

    elements.linesSvg?.querySelectorAll('.barter-line').forEach(line => {
        const from = line.dataset.from;
        const to = line.dataset.to;

        if (from === nodeId && childIds.includes(to)) {
            line.classList.add('barter-line--highlight');
        }
    });
}

function initNodeHoverHandlers() {
    if (!elements.tree || elements.tree.dataset.hoverBound === 'true') return;

    elements.tree.dataset.hoverBound = 'true';

    elements.tree.addEventListener('mouseover', (event) => {
        const nodeEl = event.target.closest('.barter-node');
        if (nodeEl) {
            setNodeHoverHighlight(nodeEl.dataset.nodeId);
            return;
        }

        clearNodeHoverHighlight();
    });

    elements.tree.addEventListener('mouseout', (event) => {
        if (!hoveredNodeId) return;

        const fromNode = event.target.closest('.barter-node');
        if (!fromNode) return;

        const related = event.relatedTarget;
        if (related && fromNode.contains(related)) return;
        if (related?.closest?.('.barter-node')) return;

        clearNodeHoverHighlight();
    });
}

function getColumnGapCenterX(columnIndex) {
    const columnWidth = getColumnWidth();
    const columnGap = getColumnGap();
    return getCanvasPadX() + (columnIndex + 1) * columnWidth + columnIndex * columnGap + columnGap / 2;
}

function buildConnectionPath(start, end, fromColumn) {
    if (Math.abs(start.y - end.y) < 1) {
        return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
    }

    const cornerX = getColumnGapCenterX(fromColumn);
    return `M ${start.x} ${start.y} L ${cornerX} ${start.y} L ${cornerX} ${end.y} L ${end.x} ${end.y}`;
}

function drawConnections() {
    if (!currentCategory || !elements.linesSvg) return;

    const edges = [];
    currentCategory.nodes.forEach(node => {
        (node.parents || []).forEach(parentId => {
            edges.push({ from: parentId, to: node.id });
        });
    });

    let maxX = 0;
    let maxY = 0;

    currentCategory.nodes.forEach(node => {
        const pos = getNodePosition(node);
        maxX = Math.max(maxX, pos.x + NODE_WIDTH);
        maxY = Math.max(maxY, pos.y + NODE_HEIGHT);
    });

    elements.linesSvg.setAttribute('width', maxX);
    elements.linesSvg.setAttribute('height', maxY);
    elements.linesSvg.setAttribute('viewBox', `0 0 ${maxX} ${maxY}`);

    const paths = edges.map(edge => {
        const fromNode = getBarterNodeById(currentCategory, edge.from);
        const toNode = getBarterNodeById(currentCategory, edge.to);
        if (!fromNode || !toNode) return '';

        const start = getNodeAnchor(fromNode, 'right');
        const end = getNodeAnchor(toNode, 'left');

        return `<path class="barter-line" data-from="${edge.from}" data-to="${edge.to}" d="${buildConnectionPath(start, end, fromNode.column)}"/>`;
    }).join('');

    elements.linesSvg.innerHTML = paths;
}

function syncColumnLanes(canvasHeight) {
    if (!currentCategory || !elements.canvas) return;

    let lanesContainer = elements.canvas.querySelector('.barter-column-lanes');
    if (!lanesContainer) {
        lanesContainer = document.createElement('div');
        lanesContainer.className = 'barter-column-lanes';
        lanesContainer.setAttribute('aria-hidden', 'true');
        elements.canvas.insertBefore(lanesContainer, elements.canvas.firstChild);
    }

    const columnWidth = getColumnWidth();
    const columnGap = getColumnGap();
    const laneHeight = Math.max(canvasHeight, 0);

    lanesContainer.style.height = `${laneHeight}px`;
    lanesContainer.innerHTML = currentCategory.columns.map((_, columnIndex) => {
        const left = getCanvasPadX() + columnIndex * (columnWidth + columnGap);
        return `<div class="barter-column-lane" style="left:${left}px;width:${columnWidth}px;height:${laneHeight}px"></div>`;
    }).join('');
}

function updateCanvasSize() {
    if (!currentCategory || !elements.canvas || !elements.tree) return;

    const columnCount = currentCategory.columns.length;
    const contentHeight = getColumnHeight(0);
    const viewportHeight = elements.viewport?.clientHeight || 0;
    const canvasPadBottom = getCanvasPadBottom();
    const contentCanvasHeight = contentHeight + CANVAS_PAD_Y + canvasPadBottom;
    const canvasHeight = Math.max(contentCanvasHeight, viewportHeight);
    const treeHeight = canvasHeight - CANVAS_PAD_Y - canvasPadBottom;

    const treeWidth = getTreeWidth(columnCount);

    elements.tree.style.width = `${treeWidth}px`;
    elements.tree.style.maxWidth = `${treeWidth}px`;
    elements.tree.style.height = `${treeHeight}px`;
    elements.tree.style.minHeight = `${treeHeight}px`;

    const canvasPadX = getCanvasPadX();
    elements.canvas.style.width = `${treeWidth + canvasPadX * 2}px`;
    elements.canvas.style.height = `${canvasHeight}px`;
    syncColumnLanes(canvasHeight);
    updateCanvasCentering();
    clampPan();
}

function updateCanvasCentering() {
    if (!elements.viewport || !elements.canvas) return;

    const viewportWidth = elements.viewport.clientWidth;
    const canvasWidth = elements.canvas.offsetWidth;

    const marginX = canvasWidth <= viewportWidth
        ? Math.max(PAN_MARGIN_X, (viewportWidth - canvasWidth) / 2)
        : 0;

    elements.canvas.style.marginLeft = `${marginX}px`;
    elements.canvas.style.marginTop = '0';
}

function getPanBounds() {
    if (!elements.viewport) {
        return { minX: 0, maxX: 0, minY: 0, maxY: 0 };
    }

    return {
        minX: 0,
        maxX: Math.max(0, elements.viewport.scrollWidth - elements.viewport.clientWidth),
        minY: 0,
        maxY: Math.max(0, elements.viewport.scrollHeight - elements.viewport.clientHeight)
    };
}

function clampPan() {
    if (!elements.viewport) return;

    const { minX, maxX, minY, maxY } = getPanBounds();
    elements.viewport.scrollLeft = Math.min(maxX, Math.max(minX, elements.viewport.scrollLeft));
    elements.viewport.scrollTop = Math.min(maxY, Math.max(minY, elements.viewport.scrollTop));
}

function applyPan(shouldClamp = true) {
    if (shouldClamp) clampPan();
}

function centerCanvas() {
    if (!elements.viewport || !elements.canvas) return;

    updateCanvasCentering();
    elements.viewport.scrollLeft = 0;
    elements.viewport.scrollTop = 0;
    clampPan();
}

function endPan() {
    isDragging = false;
    elements.viewport?.classList.remove('is-dragging');
}

function initPanAndZoom() {
    if (!elements.viewport) return;

    elements.viewport.addEventListener('mousedown', (event) => {
        if (event.button !== 0) return;
        if (shouldBlockViewportPan(event.target)) return;

        isDragging = true;
        hasDragged = false;
        dragStartX = event.clientX;
        dragStartY = event.clientY;
        scrollStartX = elements.viewport.scrollLeft;
        scrollStartY = elements.viewport.scrollTop;
        elements.viewport.classList.add('is-dragging');
    });

    window.addEventListener('mousemove', (event) => {
        if (!isDragging) return;

        const dx = event.clientX - dragStartX;
        const dy = event.clientY - dragStartY;

        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
            hasDragged = true;
        }

        elements.viewport.scrollLeft = scrollStartX - dx;
        elements.viewport.scrollTop = scrollStartY - dy;
        clampPan();
    });

    window.addEventListener('mouseup', endPan);
    window.addEventListener('blur', endPan);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) endPan();
    });

    elements.viewport.addEventListener('touchstart', (event) => {
        if (shouldBlockViewportPan(event.target)) return;
        if (event.touches.length !== 1) return;

        isDragging = true;
        hasDragged = false;
        dragStartX = event.touches[0].clientX;
        dragStartY = event.touches[0].clientY;
        scrollStartX = elements.viewport.scrollLeft;
        scrollStartY = elements.viewport.scrollTop;
        elements.viewport.classList.add('is-dragging');
    }, { passive: true });

    elements.viewport.addEventListener('touchmove', (event) => {
        if (!isDragging || event.touches.length !== 1) return;

        event.preventDefault();

        const dx = event.touches[0].clientX - dragStartX;
        const dy = event.touches[0].clientY - dragStartY;

        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
            hasDragged = true;
        }

        elements.viewport.scrollLeft = scrollStartX - dx;
        elements.viewport.scrollTop = scrollStartY - dy;
        clampPan();
    }, { passive: false });

    elements.viewport.addEventListener('touchend', endPan);
    elements.viewport.addEventListener('touchcancel', endPan);

    elements.viewport.addEventListener('wheel', (event) => {
        event.preventDefault();
        elements.viewport.scrollLeft += event.deltaX;
        elements.viewport.scrollTop += event.deltaY;
        clampPan();
    }, { passive: false });
}

function handleNodeActionClick(event) {
    event.stopPropagation();
    if (hasDragged) return;

    const nodeEl = event.currentTarget.closest('.barter-node');
    if (!nodeEl) return;

    const nodeId = nodeEl.dataset.nodeId;
    const node = getBarterNodeById(currentCategory, nodeId);
    if (!node || node.locked) return;

    addWeaponToList(nodeId);
}

function handleNodeRemoveClick(event) {
    event.stopPropagation();
    if (hasDragged) return;

    const nodeEl = event.currentTarget.closest('.barter-node');
    if (!nodeEl) return;

    removeOneWeaponFromNode(nodeEl.dataset.nodeId);
}

function handleNodeClick(event) {
    if (hasDragged) return;

    const nodeEl = event.currentTarget;
    const nodeId = nodeEl.dataset.nodeId;
    const node = getBarterNodeById(currentCategory, nodeId);

    if (!node || node.locked) return;

    selectedNodeId = nodeId;
    selectedOfferIndex = 0;
    elements.tree.querySelectorAll('.barter-node').forEach(el => {
        el.classList.toggle('barter-node--selected', el.dataset.nodeId === nodeId);
    });

    updateWeaponPickerValue(nodeId);
    openPanel(nodeId);
}

function openPanel(nodeId) {
    if (!elements.panel) return;
    elements.panel.classList.add('is-open');
    renderCalculator(nodeId);
}

function closePanel() {
    if (!elements.panel) return;
    elements.panel.classList.remove('is-open');
    selectedNodeId = null;
    selectedOfferIndex = 0;
    elements.tree?.querySelectorAll('.barter-node--selected').forEach(el => {
        el.classList.remove('barter-node--selected');
    });
    updateWeaponPickerValue();
    renderPanelEmpty();
}

function renderMaterialRow(entry, basePath = BASE_PATH) {
    const imagePath = getBarterMaterialImagePath(entry.id, basePath);
    const name = getBarterMaterialName(entry.material);

    return `
        <div class="barter-material">
            <div class="barter-material__left">
                <img class="barter-material__icon" src="${imagePath}" alt="" loading="lazy" decoding="async">
                <span class="barter-material__name">${name}</span>
            </div>
            <span class="barter-material__amount">${entry.amount} ${t('barter.pcs', 'шт.')}</span>
        </div>
    `;
}

function renderMaterialsSection(calc) {
    const totalsHtml = calc.materials.map(entry => renderMaterialRow(entry)).join('');

    if (calc.materialsByNode.length <= 1) {
        return totalsHtml;
    }

    const groupedHtml = calc.materialsByNode
        .filter(group => group.materials.length > 0)
        .map(group => {
            const { rankInfo } = group;
            const header = rankInfo
                ? `${rankInfo.rankName}<span class="barter-material-group__sep">|</span>${rankInfo.locationName}`
                : '';

            return `
                <div class="barter-material-group">
                    <div class="barter-material-group__head">${header}</div>
                    ${group.materials.map(entry => renderMaterialRow(entry)).join('')}
                </div>
            `;
        }).join('');

    return `
        ${totalsHtml}
        <div class="barter-calc-section" style="margin-top: var(--space-lg)">
            <div class="barter-calc-section__title">${t('barter.materialsByTier', 'По этапам')}</div>
            ${groupedHtml}
        </div>
    `;
}

function setPanelWeapon(weapon) {
    if (!elements.panelWeapon || !elements.panelWeaponImage) return;

    if (weapon?.imagePath) {
        elements.panelWeapon.hidden = false;
        elements.panelWeaponImage.src = weapon.imagePath;
        elements.panelWeaponImage.alt = getWeaponName(weapon);
    } else {
        elements.panelWeapon.hidden = true;
        elements.panelWeaponImage.removeAttribute('src');
        elements.panelWeaponImage.alt = '';
    }
}

function renderPanelEmpty() {
    if (!elements.panelBody) return;

    setPanelWeapon(null);

    elements.panelBody.innerHTML = `
        <div class="barter-panel__empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
            </svg>
            <span>${t('barter.panelHint', 'Выберите предмет в древе, чтобы рассчитать бартера')}</span>
        </div>
    `;
}

function renderOfferTabs(calc) {
    if (!calc.offers || calc.offers.length <= 1) return '';

    return `
        <div class="barter-calc-section">
            <div class="barter-calc-section__title">${t('barter.craftOffer', 'Вариант крафта')}</div>
            <div class="barter-offer-tabs" role="tablist">
                ${calc.offers.map((offer, index) => `
                    <button type="button"
                            class="barter-offer-tab${index === calc.offerIndex ? ' barter-offer-tab--active' : ''}"
                            data-offer-index="${index}"
                            role="tab"
                            aria-selected="${index === calc.offerIndex}">
                        ${getBarterOfferName(offer, index)}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function formatEventCost(amount) {
    const lang = window.i18n?.getCurrentLang() || 'ru';
    const formatted = lang === 'en'
        ? amount.toLocaleString('en-US')
        : amount.toLocaleString('ru-RU');
    return `${formatted} CR`;
}

function formatXp(amount) {
    const lang = window.i18n?.getCurrentLang() || 'ru';
    const formatted = lang === 'en'
        ? amount.toLocaleString('en-US')
        : amount.toLocaleString('ru-RU');
    return `${formatted} XP`;
}

function renderCostSummary(calc) {
    const rows = [];

    if (calc.totalCost > 0) {
        rows.push(`
            <div class="barter-calc-meta__row">
                <span class="barter-calc-meta__label">${t('barter.craftCost', 'Цена крафта')}</span>
                <span class="barter-calc-meta__value barter-calc-meta__value--accent">${formatPrice(calc.totalCost)}</span>
            </div>
        `);
    }

    if (calc.totalEventCost > 0) {
        rows.push(`
            <div class="barter-calc-meta__row">
                <span class="barter-calc-meta__label">${t('barter.eventCraftCost', 'Ивентовая валюта')}</span>
                <span class="barter-calc-meta__value barter-calc-meta__value--cr">${formatEventCost(calc.totalEventCost)}</span>
            </div>
        `);
    }

    if (!rows.length) {
        rows.push(`
            <div class="barter-calc-meta__row">
                <span class="barter-calc-meta__label">${t('barter.craftCost', 'Цена крафта')}</span>
                <span class="barter-calc-meta__value barter-calc-meta__value--accent">${formatPrice(0)}</span>
            </div>
        `);
    }

    return rows.join('');
}

function renderChainCard(chainNode, { isCurrent, isOwned, canExclude }) {
    const weapon = getBarterWeapon(chainNode, BASE_PATH);
    const name = weapon ? getWeaponName(weapon) : chainNode.id;
    const image = weapon?.imagePath
        ? `<img class="barter-prereq__image" src="${weapon.imagePath}" alt="">`
        : '';
    const excludeLabel = t('barter.excludeChainNode', 'Уже есть — не учитывать в расчёте');
    const excludeBtn = canExclude
        ? `
            <button type="button"
                    class="barter-chain-card__exclude${isOwned ? ' barter-chain-card__exclude--active' : ''}"
                    data-chain-node-id="${chainNode.id}"
                    aria-label="${excludeLabel}"
                    aria-pressed="${isOwned ? 'true' : 'false'}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18"/>
                </svg>
            </button>
        `
        : '';

    return `
        <div class="barter-prereq barter-chain-card${isCurrent ? ' barter-chain-card--current' : ''}${isOwned ? ' barter-chain-card--owned' : ''}">
            ${image}
            <span class="barter-prereq__name">${name}</span>
            ${excludeBtn}
        </div>
    `;
}

function renderChainSection(calc, nodeId) {
    const effectiveIncludeChain = calc.usesChain && includeFullChain;
    const excludedIds = getChainExcludedNodeIds(nodeId);

    if (effectiveIncludeChain && calc.fullChainNodes.length > 1) {
        const cardsHtml = calc.fullChainNodes.map((chainNode, index) => renderChainCard(chainNode, {
            isCurrent: index === calc.fullChainNodes.length - 1,
            isOwned: excludedIds.has(chainNode.id),
            canExclude: index < calc.fullChainNodes.length - 1
        })).join('');

        return `
            <div class="barter-calc-section">
                <div class="barter-calc-section__title">${t('barter.chain', 'Цепочка бартера')}</div>
                ${cardsHtml}
            </div>
        `;
    }

    if (calc.prerequisites.length) {
        const cardsHtml = calc.prerequisites.map(prereqId => {
            const prereq = getBarterPrerequisiteWeapon(prereqId, BASE_PATH, currentCategory);
            const name = prereq ? getWeaponName(prereq) : prereqId;
            const image = prereq?.imagePath
                ? `<img class="barter-prereq__image" src="${prereq.imagePath}" alt="">`
                : '';

            return `
                <div class="barter-prereq barter-chain-card">
                    ${image}
                    <span class="barter-prereq__name">${name}</span>
                </div>
            `;
        }).join('');

        return `
            <div class="barter-calc-section">
                <div class="barter-calc-section__title">${t('barter.prerequisites', 'Предыдущее снаряжение')}</div>
                ${cardsHtml}
            </div>
        `;
    }

    return `
        <div class="barter-calc-section">
            <div class="barter-calc-section__title">${t('barter.prerequisites', 'Предыдущее снаряжение')}</div>
            <span class="barter-calc-meta__label">${t('barter.noPrerequisites', 'Не требуется')}</span>
        </div>
    `;
}

function handleChainExcludeClick(nodeId, chainNodeId) {
    toggleChainExcludedNode(nodeId, chainNodeId);
    syncWeaponListEntry(nodeId);
    renderCalculator(nodeId);
}

function renderCalculator(nodeId) {
    const excludedNodeIds = getChainExcludedNodeIds(nodeId);
    const calc = calculateBarterRequirements(
        currentCategory,
        nodeId,
        includeFullChain,
        selectedOfferIndex,
        excludedNodeIds
    );
    if (!calc || !elements.panelBody) return;

    const weapon = getBarterWeapon(calc.node, BASE_PATH);
    const weaponName = weapon ? getWeaponName(weapon) : calc.node.id;
    const showChainToggle = calc.usesChain;
    const effectiveIncludeChain = showChainToggle && includeFullChain;

    setPanelWeapon(weapon);

    if (elements.panelTitle) {
        elements.panelTitle.textContent = weaponName;
    }

    const materialsHtml = renderMaterialsSection(calc);

    const locationsHtml = calc.locations
        .map(loc => getBarterLocationName(loc))
        .join(', ');

    const chainSectionHtml = renderChainSection(calc, nodeId);

    const chainToggleHtml = showChainToggle
        ? `
            <label class="barter-calc-toggle">
                <input type="checkbox" id="barterChainToggleInner" ${includeFullChain ? 'checked' : ''}>
                <span>${t('barter.includeChain', 'Учитывать всю цепочку')}</span>
            </label>
        `
        : '';

    elements.panelBody.innerHTML = `
        ${renderOfferTabs(calc)}

        ${chainToggleHtml}

        ${chainSectionHtml}

        <div class="barter-calc-section">
            <div class="barter-calc-section__title">${effectiveIncludeChain && calc.materialsByNode.length > 1
                ? t('barter.materialsTotal', 'Материалы (итого)')
                : t('barter.materials', 'Материалы')}</div>
            ${materialsHtml}
        </div>

        <div class="barter-calc-section">
            <div class="barter-calc-section__title">${t('barter.summary', 'Итого')}</div>
            <div class="barter-calc-meta">
                ${renderCostSummary(calc)}
                <div class="barter-calc-meta__row">
                    <span class="barter-calc-meta__label">${t('barter.level', 'Уровень персонажа')}</span>
                    <span class="barter-calc-meta__value">${calc.maxLevel} (${formatXp(calc.maxLevelXp || getBarterXpForLevel(calc.maxLevel))})</span>
                </div>
                <div class="barter-calc-meta__row">
                    <span class="barter-calc-meta__label">${t('barter.location', 'Локация')}</span>
                    <span class="barter-calc-meta__value">${locationsHtml}</span>
                </div>
            </div>
        </div>
    `;

    elements.panelBody.querySelectorAll('.barter-offer-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            selectedOfferIndex = Number(tab.dataset.offerIndex) || 0;
            syncWeaponListEntry(nodeId);
            renderCalculator(nodeId);
        });
    });

    elements.panelBody.querySelectorAll('.barter-chain-card__exclude').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            handleChainExcludeClick(nodeId, button.dataset.chainNodeId);
        });
    });

    const toggle = document.getElementById('barterChainToggleInner');
    if (toggle) {
        toggle.addEventListener('change', () => {
            includeFullChain = toggle.checked;
            if (!includeFullChain) {
                clearChainExclusions(nodeId);
            }
            syncWeaponListEntry(nodeId);
            renderCalculator(nodeId);
        });
    }
}

function initPanel() {
    elements.panelClose?.addEventListener('click', closePanel);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && elements.panel?.classList.contains('is-open')) {
            closePanel();
        }
    });
}

function init() {
    BASE_PATH = getBasePath();

    if (typeof BARTER_CATEGORIES === 'undefined' || typeof WEAPONS === 'undefined') {
        const main = document.querySelector('.barter-page');
        if (main) {
            main.innerHTML = `<div class="barter-panel__empty" style="padding:48px">${t('barter.loadError', 'Не удалось загрузить данные бартера')}</div>`;
        }
        return;
    }

    initElements();
    playerInventory = loadPlayerInventory();
    purchaseOffers = loadPurchaseOffers();
    initBurgerMenu();
    initScrollEffects();
    initLangDropdownClose();
    initNavCalculatorsDropdown();
    initCategoryMenu();
    initWeaponPicker();
    initInventoryModal();
    initCartPanel();
    initPanAndZoom();
    initNodeHoverHandlers();
    initPanel();
    renderPanelEmpty();
    updateCartPanel();

    const defaultCategory = getSortedBarterCategories()[0];
    if (defaultCategory) {
        loadCategory(defaultCategory.id);
        updateCategoryMenuValue();
        renderCategoryMenu();
    }

    window.addEventListener('resize', () => {
        syncTreeMetrics();
        updateCanvasSize();
        drawConnections();
        clampPan();
        updateWeaponPickerMenuPosition();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.i18n && typeof window.i18n.onReady === 'function') {
        window.i18n.onReady(init);
    } else {
        init();
    }
});

document.addEventListener('languageChanged', () => {
    if (!currentCategory) return;

    updateCategoryMenuValue();
    renderCategoryMenu();

    renderTree();
    updateWeaponPickerValue(selectedNodeId);
    renderWeaponPickerList();
    updateWeaponListUi();
    renderCartPanel({ skipPurchaseRead: true });

    if (elements.inventoryModal?.classList.contains('is-open')) {
        renderInventoryModal();
    }

    if (selectedNodeId) {
        renderCalculator(selectedNodeId);
    } else {
        renderPanelEmpty();
    }
});

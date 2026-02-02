// PROJECT CATACLYSM WIKI — DPS КАЛЬКУЛЯТОР v2.3

const state = {
    slots: [
        { weapon: null, ammo: null },
        { weapon: null, ammo: null },
        { weapon: null, ammo: null },
        { weapon: null, ammo: null },
        { weapon: null, ammo: null }
    ],
    activeSlot: 0,
    visibleSlots: 1,
    targetArmor: 0,
    targetHP: 100,
    targetDistance: 0
};

const SLOT_COLORS = ['#ef4444', '#3b82f6', '#22c55e', '#f59e0b', '#a855f7'];

const RARITY_ORDER = {
    'legendary': 6,
    'unique': 5,
    'rare': 4,
    'collection': 3,
    'uncommon': 2,
    'common': 1
};

const elements = {
    comparisonSlots: document.getElementById('comparisonSlots'),
    addSlotBtn: document.getElementById('addSlotBtn'),
    currentSlotIndicator: document.getElementById('currentSlotIndicator'),
    weaponDropdown: document.getElementById('weaponDropdown'),
    weaponDropdownList: document.getElementById('weaponDropdownList'),
    weaponSearchInput: document.getElementById('weaponSearchInput'),
    weaponClearWrapper: document.getElementById('weaponClearWrapper'),
    weaponClearBtn: document.getElementById('weaponClearBtn'),
    weaponInfo: document.getElementById('weaponInfo'),
    ammoDropdown: document.getElementById('ammoDropdown'),
    ammoDropdownList: document.getElementById('ammoDropdownList'),
    ammoStats: document.getElementById('ammoStats'),
    ammoDamageMod: document.getElementById('ammoDamageMod'),
    ammoArmorPen: document.getElementById('ammoArmorPen'),
    ammoPelletsContainer: document.getElementById('ammoPelletsContainer'),
    ammoPellets: document.getElementById('ammoPellets'),
    targetArmor: document.getElementById('targetArmor'),
    targetHP: document.getElementById('targetHP'),
    targetDistance: document.getElementById('targetDistance'),
    protectionPercent: document.getElementById('protectionPercent'),
    effectiveProtection: document.getElementById('effectiveProtection'),
    damageChart: document.getElementById('damageChart'),
    damageCanvas: document.getElementById('damageCanvas'),
    chartLegend: document.getElementById('chartLegend'),
    chartPlaceholder: document.getElementById('chartPlaceholder'),
    chartTooltip: document.getElementById('chartTooltip'),
    chartCursorLine: null, // Будет создан динамически
    dpsBody: document.getElementById('dpsBody'),
    dpsHead: document.getElementById('dpsHead'),
    baseDamage: document.getElementById('baseDamage'),
    distanceDamage: document.getElementById('distanceDamage'),
    armorDamage: document.getElementById('armorDamage'),
    headshotDamage: document.getElementById('headshotDamage'),
    ttkBody: document.getElementById('ttkBody'),
    shotsBody: document.getElementById('shotsBody'),
    ttkHead: document.getElementById('ttkHead'),
    shotsHead: document.getElementById('shotsHead'),
    resetBtn: document.getElementById('resetBtn'),
    comparisonTable: document.getElementById('comparisonTable'),
    comparisonTableContent: document.getElementById('comparisonTableContent'),
    weaponStats: document.getElementById('weaponStats'),
    weaponStatsGrid: document.getElementById('weaponStatsGrid'),
    burger: document.getElementById('burger'),
    mobileMenu: document.getElementById('mobileMenu'),
    scrollTop: document.getElementById('scrollTop'),
    header: document.querySelector('.header')
};

// Проверка на устройство с мышью (ПК)
function isDesktop() {
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

document.addEventListener('DOMContentLoaded', () => {
    initComparisonSlots();
    initWeaponDropdown();
    initAmmoDropdown();
    initEventListeners();
    initScrollEffects();
    initChartInteractivity();
    createChartCursorLine();
    updateSlotIndicator();
    calculateResults();
});

// Создаём элемент курсорной линии для графика
function createChartCursorLine() {
    const container = document.querySelector('.damage-chart__container');
    if (!container) return;
    
    const cursorLine = document.createElement('div');
    cursorLine.className = 'chart-cursor-line';
    cursorLine.id = 'chartCursorLine';
    container.appendChild(cursorLine);
    elements.chartCursorLine = cursorLine;
}

function getRarityPriority(rarity) {
    return RARITY_ORDER[rarity] || 0;
}

function sortWeaponsByRarity(weapons) {
    return [...weapons].sort((a, b) => {
        const priorityA = getRarityPriority(a.rarity);
        const priorityB = getRarityPriority(b.rarity);
        if (priorityB !== priorityA) return priorityB - priorityA;
        return a.name.localeCompare(b.name, 'ru');
    });
}

function initComparisonSlots() {
    elements.comparisonSlots.addEventListener('click', (e) => {
        const slot = e.target.closest('.comparison-slot');
        if (!slot) return;
        
        if (e.target.closest('.comparison-slot__remove')) {
            e.stopPropagation();
            const slotIndex = parseInt(slot.dataset.slot);
            removeSlot(slotIndex);
            return;
        }
        
        if (slot.id === 'addSlotBtn') {
            addNewSlot();
            return;
        }
        
        const slotIndex = parseInt(slot.dataset.slot);
        if (!isNaN(slotIndex)) selectSlot(slotIndex);
    });
    
    updateSlotsVisibility();
}

function selectSlot(index) {
    state.activeSlot = index;
    
    document.querySelectorAll('.comparison-slot[data-slot]').forEach(slot => {
        slot.classList.remove('comparison-slot--active');
        if (parseInt(slot.dataset.slot) === index) {
            slot.classList.add('comparison-slot--active');
        }
    });
    
    updateSlotIndicator();
    loadSlotData(index);
}

function addNewSlot() {
    if (state.visibleSlots >= 5) return;
    state.visibleSlots++;
    updateSlotsVisibility();
    selectSlot(state.visibleSlots - 1);
}

function removeSlot(index) {
    state.slots[index] = { weapon: null, ammo: null };
    
    const nameEl = document.getElementById(`slotName${index}`);
    const dpsEl = document.getElementById(`slotDps${index}`);
    if (nameEl) nameEl.textContent = 'Не выбрано';
    if (dpsEl) dpsEl.textContent = '0';
    
    if (index < state.visibleSlots - 1) {
        for (let i = index; i < state.visibleSlots - 1; i++) {
            state.slots[i] = { ...state.slots[i + 1] };
            updateSlotUI(i);
        }
        state.slots[state.visibleSlots - 1] = { weapon: null, ammo: null };
    }
    
    if (state.visibleSlots > 1) {
        state.visibleSlots--;
        updateSlotsVisibility();
    }
    
    if (state.activeSlot >= state.visibleSlots) {
        state.activeSlot = state.visibleSlots - 1;
    }
    
    selectSlot(state.activeSlot);
    calculateResults();
    updateChart();
    updateComparisonTable();
}

function clearSlot(index) {
    state.slots[index] = { weapon: null, ammo: null };
    document.getElementById(`slotName${index}`).textContent = 'Не выбрано';
    document.getElementById(`slotDps${index}`).textContent = '0';
    if (state.activeSlot === index) loadSlotData(index);
    calculateResults();
    updateChart();
    updateComparisonTable();
}

function updateSlotsVisibility() {
    for (let i = 0; i < 5; i++) {
        const slot = document.querySelector(`.comparison-slot[data-slot="${i}"]`);
        if (slot) {
            slot.classList.toggle('comparison-slot--hidden', i >= state.visibleSlots);
        }
    }
    
    if (elements.addSlotBtn) {
        elements.addSlotBtn.classList.toggle('comparison-slot--hidden', state.visibleSlots >= 5);
    }
}

function updateSlotIndicator() {
    if (!elements.currentSlotIndicator) return;
    
    elements.currentSlotIndicator.textContent = `Слот ${state.activeSlot + 1}`;
    
    const colorMap = {
        '#ef4444': '239,68,68',
        '#3b82f6': '59,130,246',
        '#22c55e': '34,197,94',
        '#f59e0b': '245,158,11',
        '#a855f7': '168,85,247'
    };
    
    const rgbColor = colorMap[SLOT_COLORS[state.activeSlot]] || '239,68,68';
    elements.currentSlotIndicator.style.background = `rgba(${rgbColor}, 0.15)`;
    elements.currentSlotIndicator.style.color = SLOT_COLORS[state.activeSlot];
}

function loadSlotData(index) {
    const slotData = state.slots[index];
    const valueElement = elements.weaponDropdown.querySelector('.custom-dropdown__value');
    const ammoValueElement = elements.ammoDropdown.querySelector('.custom-dropdown__value');
    
    if (slotData.weapon) {
        valueElement.textContent = slotData.weapon.name;
        valueElement.classList.add('has-value');
        renderWeaponInfo();
        renderWeaponStats();
        updateAmmoOptions(false);
        
        if (slotData.ammo) {
            ammoValueElement.textContent = slotData.ammo.name;
            ammoValueElement.classList.add('has-value');
            renderAmmoStats();
        }
    } else {
        valueElement.textContent = 'Выберите оружие...';
        valueElement.classList.remove('has-value');
        elements.weaponInfo.innerHTML = `
            <div class="weapon-info__placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                <span>Выберите оружие для расчёта</span>
            </div>`;
        
        const ammoTrigger = elements.ammoDropdown.querySelector('.custom-dropdown__trigger');
        ammoTrigger.disabled = true;
        ammoValueElement.textContent = 'Сначала выберите оружие...';
        ammoValueElement.classList.remove('has-value');
        elements.ammoStats.style.display = 'none';
        elements.weaponStats.style.display = 'none';
    }
    
    renderWeaponDropdownList();
    calculateResults();
}

function updateSlotUI(index) {
    const slotData = state.slots[index];
    const nameEl = document.getElementById(`slotName${index}`);
    const dpsEl = document.getElementById(`slotDps${index}`);
    
    if (!nameEl || !dpsEl) return;
    
    if (slotData.weapon) {
        nameEl.textContent = slotData.weapon.name;
        const result = calculateSlotDPS(index);
        dpsEl.textContent = Math.round(result.dpsBody);
    } else {
        nameEl.textContent = 'Не выбрано';
        dpsEl.textContent = '0';
    }
}

function initWeaponDropdown() {
    renderWeaponDropdownList();
    elements.weaponDropdown.querySelector('.custom-dropdown__trigger').addEventListener('click', toggleWeaponDropdown);
    if (elements.weaponSearchInput) {
        elements.weaponSearchInput.addEventListener('input', handleWeaponSearch);
    }
    elements.weaponDropdownList.addEventListener('click', handleWeaponListClick);
    if (elements.weaponClearBtn) {
        elements.weaponClearBtn.addEventListener('click', clearWeaponSelection);
    }
    
    document.addEventListener('click', (e) => {
        if (!elements.weaponDropdown.contains(e.target)) closeWeaponDropdown();
        if (!elements.ammoDropdown.contains(e.target)) closeAmmoDropdown();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeWeaponDropdown();
            closeAmmoDropdown();
        }
    });
}

function toggleWeaponDropdown() {
    elements.weaponDropdown.classList.toggle('open');
    if (elements.weaponDropdown.classList.contains('open') && elements.weaponSearchInput) {
        // Фокус только на ПК (устройства с мышью), не на мобильных
        if (isDesktop()) {
            // Небольшая задержка для корректной работы анимации открытия
            setTimeout(() => {
                elements.weaponSearchInput.focus();
            }, 50);
        }
    }
}

function closeWeaponDropdown() {
    elements.weaponDropdown.classList.remove('open');
}

function handleWeaponSearch(e) {
    renderWeaponDropdownList(e.target.value.toLowerCase().trim());
}

function handleWeaponListClick(e) {
    const item = e.target.closest('.custom-dropdown__item');
    if (item?.dataset.weaponId) selectWeaponFromDropdown(item.dataset.weaponId);
}

function renderWeaponDropdownList(searchQuery = '') {
    const groupedWeapons = {};
    
    WEAPONS.forEach(weapon => {
        if (searchQuery && !weapon.name.toLowerCase().includes(searchQuery)) return;
        if (!groupedWeapons[weapon.category]) groupedWeapons[weapon.category] = [];
        groupedWeapons[weapon.category].push(weapon);
    });
    
    Object.keys(groupedWeapons).forEach(category => {
        groupedWeapons[category] = sortWeaponsByRarity(groupedWeapons[category]);
    });
    
    const currentWeapon = state.slots[state.activeSlot].weapon;
    if (elements.weaponClearWrapper) {
        elements.weaponClearWrapper.style.display = currentWeapon ? 'block' : 'none';
    }
    
    if (Object.keys(groupedWeapons).length === 0) {
        elements.weaponDropdownList.innerHTML = `
            <div class="custom-dropdown__empty">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                <span>Оружие не найдено</span>
            </div>`;
        return;
    }
    
    let html = '';
    const categoryOrder = ['assault', 'smg', 'pistol', 'shotgun', 'sniper', 'machinegun'];
    
    categoryOrder.forEach(catId => {
        const weapons = groupedWeapons[catId];
        if (!weapons?.length) return;
        
        const catName = WEAPON_CATEGORIES[catId]?.name || catId;
        html += `<div class="custom-dropdown__group custom-dropdown__group--${catId}">
            <div class="custom-dropdown__group-title">${catName} (${weapons.length})</div>`;
        
        weapons.forEach(weapon => {
            const isSelected = currentWeapon?.id === weapon.id;
            const rarityClass = weapon.rarity ? `custom-dropdown__item--${weapon.rarity}` : '';
            
            html += `
                <div class="custom-dropdown__item ${rarityClass} ${isSelected ? 'selected' : ''}" 
                     data-weapon-id="${weapon.id}">
                    <div class="custom-dropdown__item-info">
                        <div class="custom-dropdown__item-name">${weapon.name}</div>
                        <div class="custom-dropdown__item-meta">
                            <span class="custom-dropdown__item-stat">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                                </svg>
                                ${weapon.damage}
                            </span>
                            <span class="custom-dropdown__item-rpm">${weapon.rpm} RPM</span>
                        </div>
                    </div>
                    ${weapon.rarityName ? `<span class="custom-dropdown__item-rarity">${weapon.rarityName}</span>` : ''}
                </div>`;
        });
        html += '</div>';
    });
    
    elements.weaponDropdownList.innerHTML = html;
}

function selectWeaponFromDropdown(weaponId) {
    const weapon = getWeaponById(weaponId);
    if (!weapon) return;
    
    state.slots[state.activeSlot].weapon = weapon;
    state.slots[state.activeSlot].ammo = null;
    
    const valueElement = elements.weaponDropdown.querySelector('.custom-dropdown__value');
    valueElement.textContent = weapon.name;
    valueElement.classList.add('has-value');
    
    closeWeaponDropdown();
    if (elements.weaponSearchInput) elements.weaponSearchInput.value = '';
    
    renderWeaponInfo();
    renderWeaponStats();
    updateAmmoOptions(true);
    updateSlotUI(state.activeSlot);
    calculateResults();
    updateChart();
    updateComparisonTable();
    renderWeaponDropdownList();
}

function clearWeaponSelection() {
    state.slots[state.activeSlot].weapon = null;
    state.slots[state.activeSlot].ammo = null;
    
    const valueElement = elements.weaponDropdown.querySelector('.custom-dropdown__value');
    valueElement.textContent = 'Выберите оружие...';
    valueElement.classList.remove('has-value');
    
    const ammoValueElement = elements.ammoDropdown.querySelector('.custom-dropdown__value');
    ammoValueElement.textContent = 'Сначала выберите оружие...';
    ammoValueElement.classList.remove('has-value');
    
    closeWeaponDropdown();
    if (elements.weaponSearchInput) elements.weaponSearchInput.value = '';
    
    renderWeaponInfo();
    
    const ammoTrigger = elements.ammoDropdown.querySelector('.custom-dropdown__trigger');
    ammoTrigger.disabled = true;
    elements.ammoStats.style.display = 'none';
    elements.weaponStats.style.display = 'none';
    
    updateSlotUI(state.activeSlot);
    calculateResults();
    updateChart();
    updateComparisonTable();
    renderWeaponDropdownList();
}

function renderWeaponInfo() {
    const weapon = state.slots[state.activeSlot].weapon;
    
    if (!weapon) {
        elements.weaponInfo.innerHTML = `
            <div class="weapon-info__placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                <span>Выберите оружие для расчёта</span>
            </div>`;
        return;
    }

    const rarityHtml = weapon.rarityName 
        ? `<span class="weapon-details__rarity rarity--${weapon.rarity}">${weapon.rarityName}</span>` 
        : '';
    
    elements.weaponInfo.innerHTML = `
        <div class="weapon-details">
            <div class="weapon-details__header">
                <span class="weapon-details__name">${weapon.name}</span>
                ${rarityHtml}
            </div>
            <div class="weapon-details__stats">
                <div class="weapon-details__stat">
                    <span class="weapon-details__stat-name">Урон</span>
                    <span class="weapon-details__stat-value weapon-details__stat-value--highlight">${weapon.damage}</span>
                </div>
                <div class="weapon-details__stat">
                    <span class="weapon-details__stat-name">Скорострельность</span>
                    <span class="weapon-details__stat-value">${weapon.rpm} в/м</span>
                </div>
                <div class="weapon-details__stat">
                    <span class="weapon-details__stat-name">Множитель в голову</span>
                    <span class="weapon-details__stat-value">x${weapon.headshotMult}</span>
                </div>
                <div class="weapon-details__stat">
                    <span class="weapon-details__stat-name">Эфф. дистанция</span>
                    <span class="weapon-details__stat-value">${weapon.effectiveRange} м</span>
                </div>
            </div>
        </div>`;
}

function renderWeaponStats() {
    const weapon = state.slots[state.activeSlot].weapon;
    
    if (!weapon?.stats) {
        elements.weaponStats.style.display = 'none';
        return;
    }
    
    const stats = weapon.stats;
    let html = '';
    
    const statNames = {
        verticalRecoil: 'Верт. отдача',
        horizontalRecoil: 'Гориз. отдача',
        hipSpread: 'Разброс от бедра',
        adsSpread: 'Разброс в прицеле',
        moveSpeed: 'Скорость бега',
        armorPenetration: 'Бронебойность'
    };
    
    const statUnits = {
        verticalRecoil: '°',
        horizontalRecoil: '°',
        moveSpeed: '%',
        armorPenetration: '%'
    };
    
    Object.entries(stats).forEach(([key, value]) => {
        if (statNames[key]) {
            const name = statNames[key];
            const unit = statUnits[key] || '';
            let displayValue = value;
            let valueClass = '';
            
            if (key === 'moveSpeed' || key === 'armorPenetration') {
                displayValue = value > 0 ? `+${value}` : value;
                valueClass = value > 0 ? 'weapon-stat-row__value--positive' : (value < 0 ? 'weapon-stat-row__value--negative' : '');
            }
            
            html += `
                <div class="weapon-stat-row">
                    <span class="weapon-stat-row__name">${name}</span>
                    <span class="weapon-stat-row__value ${valueClass}">${displayValue}${unit}</span>
                </div>`;
        }
    });
    
    elements.weaponStatsGrid.innerHTML = html;
    elements.weaponStats.style.display = html ? 'block' : 'none';
}

function initAmmoDropdown() {
    elements.ammoDropdown.querySelector('.custom-dropdown__trigger').addEventListener('click', toggleAmmoDropdown);
    elements.ammoDropdownList.addEventListener('click', handleAmmoListClick);
}

function toggleAmmoDropdown() {
    const trigger = elements.ammoDropdown.querySelector('.custom-dropdown__trigger');
    if (trigger.disabled) return;
    elements.ammoDropdown.classList.toggle('open');
}

function closeAmmoDropdown() {
    elements.ammoDropdown.classList.remove('open');
}

function handleAmmoListClick(e) {
    const item = e.target.closest('.ammo-item');
    if (item?.dataset.ammoId) selectAmmo(item.dataset.ammoId, true);
}

function updateAmmoOptions(autoSelectFirst = false) {
    const weapon = state.slots[state.activeSlot].weapon;
    const trigger = elements.ammoDropdown.querySelector('.custom-dropdown__trigger');
    const valueElement = elements.ammoDropdown.querySelector('.custom-dropdown__value');
    
    if (!weapon) {
        trigger.disabled = true;
        valueElement.textContent = 'Сначала выберите оружие...';
        valueElement.classList.remove('has-value');
        elements.ammoStats.style.display = 'none';
        return;
    }
    
    trigger.disabled = false;
    
    const availableAmmo = getAmmoForWeapon(weapon);
    const currentAmmo = state.slots[state.activeSlot].ammo;
    
    let html = '';
    
    availableAmmo.forEach(ammo => {
        const stats = ammo.stats || {};
        const dmgMod = stats.damageModifier || 0;
        const armorPen = stats.armorPenetration || 0;
        const isSelected = currentAmmo?.id === ammo.id;
        
        const iconType = ammo.type === 'hp' ? 'hp' : 
                        (ammo.type === 'ap' || ammo.type === 'ap_plus') ? 'ap' : 
                        (ammo.pellets && ammo.pellets > 1) ? 'shot' : 'standard';
        
        let iconHtml;
        if (ammo.image) {
            iconHtml = `<img src="${ammo.image}" alt="${ammo.name}" class="ammo-item__image">`;
        } else {
            const iconEmoji = iconType === 'hp' ? '💥' : 
                             iconType === 'ap' ? '🔷' : 
                             iconType === 'shot' ? '🔴' : '⚪';
            iconHtml = iconEmoji;
        }
        
        html += `
            <div class="ammo-item ${isSelected ? 'selected' : ''}" data-ammo-id="${ammo.id}">
                <div class="ammo-item__icon ammo-item__icon--${iconType}">${iconHtml}</div>
                <div class="ammo-item__info">
                    <div class="ammo-item__name">${ammo.name}</div>
                    <div class="ammo-item__desc">${ammo.description}</div>
                </div>
                <div class="ammo-item__stats">
                    ${dmgMod !== 0 ? `<span class="ammo-item__stat ammo-item__stat--${dmgMod > 0 ? 'positive' : 'negative'}">${dmgMod > 0 ? '+' : ''}${dmgMod}% урон</span>` : ''}
                    ${armorPen !== 0 ? `<span class="ammo-item__stat ammo-item__stat--${armorPen > 0 ? 'positive' : 'negative'}">${armorPen > 0 ? '+' : ''}${armorPen}% АП</span>` : ''}
                    ${dmgMod === 0 && armorPen === 0 ? '<span class="ammo-item__stat ammo-item__stat--neutral">Стандарт</span>' : ''}
                </div>
            </div>`;
    });
    
    elements.ammoDropdownList.innerHTML = html;
    
    if (autoSelectFirst && availableAmmo.length > 0) {
        selectAmmo(availableAmmo[0].id, true);
    } else if (currentAmmo) {
        valueElement.textContent = currentAmmo.name;
        valueElement.classList.add('has-value');
        renderAmmoStats();
    } else {
        valueElement.textContent = 'Выберите патроны...';
        valueElement.classList.remove('has-value');
    }
}

function selectAmmo(ammoId, updateUI = true) {
    const ammo = getAmmoById(ammoId);
    if (!ammo) return;
    
    state.slots[state.activeSlot].ammo = ammo;
    
    if (updateUI) {
        closeAmmoDropdown();
        
        const valueElement = elements.ammoDropdown.querySelector('.custom-dropdown__value');
        valueElement.textContent = ammo.name;
        valueElement.classList.add('has-value');
        
        renderAmmoStats();
        
        elements.ammoDropdownList.querySelectorAll('.ammo-item').forEach(item => {
            item.classList.toggle('selected', item.dataset.ammoId === ammoId);
        });
        
        updateSlotUI(state.activeSlot);
        calculateResults();
        updateChart();
        updateComparisonTable();
    }
}

function renderAmmoStats() {
    const ammo = state.slots[state.activeSlot].ammo;
    
    if (!ammo) {
        elements.ammoStats.style.display = 'none';
        return;
    }
    
    const stats = ammo.stats || {};
    const dmgMod = stats.damageModifier || 0;
    const armorPen = stats.armorPenetration || 0;
    
    elements.ammoDamageMod.textContent = dmgMod === 0 ? '0%' : `${dmgMod > 0 ? '+' : ''}${dmgMod}%`;
    elements.ammoDamageMod.className = 'ammo-stats__value' + (dmgMod > 0 ? ' ammo-stats__value--positive' : dmgMod < 0 ? ' ammo-stats__value--negative' : '');
    
    elements.ammoArmorPen.textContent = armorPen === 0 ? '0%' : `${armorPen > 0 ? '+' : ''}${armorPen}%`;
    elements.ammoArmorPen.className = 'ammo-stats__value' + (armorPen > 0 ? ' ammo-stats__value--positive' : armorPen < 0 ? ' ammo-stats__value--negative' : '');
    
    if (ammo.pellets && ammo.pellets > 1) {
        elements.ammoPelletsContainer.style.display = 'block';
        elements.ammoPellets.textContent = ammo.pellets;
    } else {
        elements.ammoPelletsContainer.style.display = 'none';
    }
    
    elements.ammoStats.style.display = 'block';
}

function initEventListeners() {
    elements.targetArmor.addEventListener('input', (e) => {
        state.targetArmor = Math.max(0, parseFloat(e.target.value) || 0);
        calculateResults();
        updateChart();
        updateComparisonTable();
    });
    
    elements.targetHP.addEventListener('input', (e) => {
        state.targetHP = Math.max(1, parseFloat(e.target.value) || 100);
        calculateResults();
        updateChart();
        updateComparisonTable();
    });
    
    elements.targetDistance.addEventListener('input', (e) => {
        state.targetDistance = Math.max(0, parseFloat(e.target.value) || 0);
        calculateResults();
        updateChart();
        updateComparisonTable();
    });
    
    elements.resetBtn.addEventListener('click', resetCalculator);
    
    if (elements.burger && elements.mobileMenu) {
        elements.burger.addEventListener('click', () => {
            elements.burger.classList.toggle('active');
            elements.mobileMenu.classList.toggle('active');
        });
    }
}

function calculateSlotDPS(slotIndex) {
    const slotData = state.slots[slotIndex];
    
    if (!slotData.weapon) {
        return {
            dpsBody: 0, dpsHead: 0, baseDamage: 0, damagePerPellet: 0, pellets: 1,
            totalShotDamage: 0, distanceDamage: 0, armorDamage: 0, headshotDamage: 0,
            ttkBody: Infinity, ttkHead: Infinity, shotsBody: 0, shotsHead: 0,
            protection: 0, effectiveProtection: 0, effectiveRange: 0, maxRange: 0
        };
    }
    
    const weapon = slotData.weapon;
    const ammo = slotData.ammo;
    
    let damage = weapon.damage;
    let rpm = weapon.rpm;
    let headshotMult = weapon.headshotMult;
    let effectiveRange = weapon.effectiveRange;
    let damageMod = 1.0;
    let pellets = 1;
    let ap = weapon.stats?.armorPenetration || 0;
    
    if (ammo) {
        const stats = ammo.stats || {};
        ap += stats.armorPenetration || 0;
        damageMod = 1 + ((stats.damageModifier || 0) / 100);
        pellets = ammo.pellets || 1;
        if (stats.rangeModifier) {
            effectiveRange = effectiveRange * (1 + stats.rangeModifier / 100);
        }
    }
    
    const damagePerPellet = damage * damageMod;
    const totalShotDamage = damagePerPellet * pellets;
    const maxRange = pellets > 1 ? effectiveRange * 3.5 : effectiveRange * 2;
    
    let distanceDamage = totalShotDamage;
    if (state.targetDistance > 0) {
        if (state.targetDistance > maxRange) {
            distanceDamage = 0;
        } else if (state.targetDistance > effectiveRange) {
            const falloffDistance = state.targetDistance - effectiveRange;
            const maxFalloffDistance = maxRange - effectiveRange;
            const falloffPercent = Math.min(falloffDistance / maxFalloffDistance, 1.0);
            
            if (pellets > 1) {
                const effectivePellets = Math.max(1, Math.round(pellets * (1 - falloffPercent * 0.7)));
                distanceDamage = damagePerPellet * effectivePellets * (1 - falloffPercent * 0.5);
            } else {
                distanceDamage = totalShotDamage * (1 - falloffPercent * 0.7);
            }
        }
    }
    
    const protection = calculateArmorProtection(state.targetArmor);
    const effectiveProtection = Math.max(0, protection - ap);
    
    const armorDamage = distanceDamage * (1 - effectiveProtection / 100);
    const headshotDamage = (distanceDamage / (pellets > 1 ? pellets : 1)) * headshotMult * (1 - effectiveProtection / 100);
    
    const dpsBody = calculateDPS(armorDamage, rpm);
    const dpsHead = calculateDPS(headshotDamage, rpm);
    
    const ttkBody = calculateTTK(armorDamage, rpm, state.targetHP);
    const ttkHead = calculateTTK(headshotDamage, rpm, state.targetHP);
    
    const shotsBody = armorDamage > 0 ? Math.ceil(state.targetHP / armorDamage) : Infinity;
    const shotsHead = headshotDamage > 0 ? Math.ceil(state.targetHP / headshotDamage) : Infinity;
    
    return {
        dpsBody, dpsHead, baseDamage: damage, damagePerPellet, pellets, totalShotDamage,
        distanceDamage, armorDamage, headshotDamage, ttkBody, ttkHead, shotsBody, shotsHead,
        protection, effectiveProtection, effectiveRange, maxRange
    };
}

function calculateResults() {
    const result = calculateSlotDPS(state.activeSlot);
    
    elements.protectionPercent.textContent = (result.protection?.toFixed(2) || '0') + '%';
    elements.effectiveProtection.textContent = (result.effectiveProtection?.toFixed(2) || '0') + '%';
    
    if (result.pellets > 1) {
        elements.baseDamage.textContent = `${result.damagePerPellet.toFixed(1)} ×${result.pellets}`;
    } else {
        elements.baseDamage.textContent = result.damagePerPellet.toFixed(1);
    }
    
    elements.distanceDamage.textContent = result.distanceDamage.toFixed(1);
    elements.armorDamage.textContent = result.armorDamage.toFixed(1);
    elements.headshotDamage.textContent = result.headshotDamage.toFixed(1);
    
    elements.dpsBody.textContent = Math.round(result.dpsBody);
    elements.dpsHead.textContent = Math.round(result.dpsHead);
    
    elements.ttkBody.textContent = result.ttkBody === Infinity ? '∞' : result.ttkBody.toFixed(2) + ' сек';
    elements.shotsBody.textContent = result.shotsBody === Infinity ? '∞' : result.shotsBody + ' выстр.';
    
    elements.ttkHead.textContent = result.ttkHead === Infinity ? '∞' : result.ttkHead.toFixed(2) + ' сек';
    elements.shotsHead.textContent = result.shotsHead === Infinity ? '∞' : result.shotsHead + ' выстр.';
    
    const slotDpsEl = document.getElementById(`slotDps${state.activeSlot}`);
    if (slotDpsEl) slotDpsEl.textContent = Math.round(result.dpsBody);
}

function updateChart() {
    const hasWeapons = state.slots.some((slot, i) => i < state.visibleSlots && slot.weapon);
    
    if (!hasWeapons) {
        elements.damageChart.classList.remove('visible');
        elements.chartPlaceholder.classList.remove('hidden');
        return;
    }
    
    elements.damageChart.classList.add('visible');
    elements.chartPlaceholder.classList.add('hidden');
    
    const canvas = elements.damageCanvas;
    const ctx = canvas.getContext('2d');
    
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = 280 * 2;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = '280px';
    ctx.scale(2, 2);
    
    const width = rect.width;
    const height = 280;
    const padding = { top: 30, right: 20, bottom: 50, left: 60 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;
    
    ctx.clearRect(0, 0, width, height);
    
    let maxRange = 100;
    let maxTTK = 0;
    
    for (let i = 0; i < state.visibleSlots; i++) {
        const weapon = state.slots[i].weapon;
        if (weapon) {
            const ammo = state.slots[i].ammo;
            let effectiveRange = weapon.effectiveRange;
            if (ammo?.stats?.rangeModifier) {
                effectiveRange = effectiveRange * (1 + ammo.stats.rangeModifier / 100);
            }
            maxRange = Math.max(maxRange, effectiveRange * 2);
            const ttkAtMaxRange = calculateTTKAtDistance(i, maxRange);
            if (ttkAtMaxRange !== Infinity) maxTTK = Math.max(maxTTK, ttkAtMaxRange);
        }
    }
    
    maxTTK = Math.max(maxTTK * 1.2, 2);
    
    // Сохраняем параметры графика для использования в интерактивности
    canvas.dataset.maxRange = maxRange;
    canvas.dataset.maxTTK = maxTTK;
    canvas.dataset.paddingLeft = padding.left;
    canvas.dataset.paddingRight = padding.right;
    canvas.dataset.paddingTop = padding.top;
    canvas.dataset.paddingBottom = padding.bottom;
    
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(padding.left, padding.top, chartWidth, chartHeight);
    
    const fastKillZone = chartHeight * 0.25;
    const gradient = ctx.createLinearGradient(0, height - padding.bottom - fastKillZone, 0, height - padding.bottom);
    gradient.addColorStop(0, 'rgba(34, 197, 94, 0)');
    gradient.addColorStop(1, 'rgba(34, 197, 94, 0.15)');
    ctx.fillStyle = gradient;
    ctx.fillRect(padding.left, height - padding.bottom - fastKillZone, chartWidth, fastKillZone);
    
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1;
    
    const ttkSteps = 5;
    for (let i = 0; i <= ttkSteps; i++) {
        const y = padding.top + (chartHeight / ttkSteps) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();
    }
    
    const distSteps = 5;
    for (let i = 0; i <= distSteps; i++) {
        const x = padding.left + (chartWidth / distSteps) * i;
        ctx.beginPath();
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, height - padding.bottom);
        ctx.stroke();
    }
    
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '11px Roboto';
    ctx.textAlign = 'center';
    
    for (let i = 0; i <= distSteps; i++) {
        const x = padding.left + (chartWidth / distSteps) * i;
        const dist = Math.round((maxRange / distSteps) * i);
        ctx.fillText(dist + ' м', x, height - padding.bottom + 20);
    }
    
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '10px Roboto';
    ctx.fillText('ДИСТАНЦИЯ', padding.left + chartWidth / 2, height - 8);
    
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '11px Roboto';
    ctx.textAlign = 'right';
    
    for (let i = 0; i <= ttkSteps; i++) {
        const y = padding.top + (chartHeight / ttkSteps) * i;
        const ttk = maxTTK - (maxTTK / ttkSteps) * i;
        ctx.fillText(ttk.toFixed(1) + 'с', padding.left - 8, y + 4);
    }
    
    ctx.save();
    ctx.translate(12, padding.top + chartHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '10px Roboto';
    ctx.textAlign = 'center';
    ctx.fillText('TTK (сек)', 0, 0);
    ctx.restore();
    
    const legendItems = [];
    
    for (let slotIndex = 0; slotIndex < state.visibleSlots; slotIndex++) {
        const slotData = state.slots[slotIndex];
        if (!slotData.weapon) continue;
        
        const weapon = slotData.weapon;
        const ammo = slotData.ammo;
        const color = SLOT_COLORS[slotIndex];
        
        let effectiveRange = weapon.effectiveRange;
        if (ammo?.stats?.rangeModifier) {
            effectiveRange = effectiveRange * (1 + ammo.stats.rangeModifier / 100);
        }
        
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        
        const points = 100;
        let firstPoint = true;
        
        for (let i = 0; i <= points; i++) {
            const distance = (maxRange / points) * i;
            const ttk = calculateTTKAtDistance(slotIndex, distance);
            if (ttk === Infinity || ttk > maxTTK) continue;
            
            const x = padding.left + (distance / maxRange) * chartWidth;
            const y = height - padding.bottom - (ttk / maxTTK) * chartHeight;
            
            if (firstPoint) {
                ctx.moveTo(x, y);
                firstPoint = false;
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
        
        ctx.beginPath();
        firstPoint = true;
        let lastX = padding.left;
        
        for (let i = 0; i <= points; i++) {
            const distance = (maxRange / points) * i;
            const ttk = calculateTTKAtDistance(slotIndex, distance);
            if (ttk === Infinity || ttk > maxTTK) continue;
            
            const x = padding.left + (distance / maxRange) * chartWidth;
            const y = height - padding.bottom - (ttk / maxTTK) * chartHeight;
            
            if (firstPoint) {
                ctx.moveTo(x, height - padding.bottom);
                ctx.lineTo(x, y);
                firstPoint = false;
            } else {
                ctx.lineTo(x, y);
            }
            lastX = x;
        }
        
        ctx.lineTo(lastX, height - padding.bottom);
        ctx.closePath();
        ctx.fillStyle = hexToRgba(color, 0.1);
        ctx.fill();
        
        const effX = padding.left + (effectiveRange / maxRange) * chartWidth;
        if (effX < width - padding.right) {
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(effX, padding.top);
            ctx.lineTo(effX, height - padding.bottom);
            ctx.stroke();
            ctx.setLineDash([]);
            
            ctx.fillStyle = color;
            ctx.font = '9px Roboto';
            ctx.textAlign = 'center';
            ctx.fillText(`${Math.round(effectiveRange)}м`, effX, padding.top - 8);
        }
        
        if (state.targetDistance > 0 && state.targetDistance <= maxRange) {
            const ttk = calculateTTKAtDistance(slotIndex, state.targetDistance);
            if (ttk !== Infinity && ttk <= maxTTK) {
                const pointX = padding.left + (state.targetDistance / maxRange) * chartWidth;
                const pointY = height - padding.bottom - (ttk / maxTTK) * chartHeight;
                
                ctx.beginPath();
                ctx.arc(pointX, pointY, 8, 0, Math.PI * 2);
                ctx.fillStyle = hexToRgba(color, 0.3);
                ctx.fill();
                
                ctx.beginPath();
                ctx.arc(pointX, pointY, 5, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
                
                ctx.beginPath();
                ctx.arc(pointX, pointY, 5, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255,255,255,0.8)';
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
        }
        
        legendItems.push({
            name: weapon.name,
            color: color,
            ttk: calculateTTKAtDistance(slotIndex, state.targetDistance || 0)
        });
    }
    
    if (state.targetDistance > 0 && state.targetDistance <= maxRange) {
        const distX = padding.left + (state.targetDistance / maxRange) * chartWidth;
        ctx.strokeStyle = 'rgba(255,255,255,0.4)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(distX, padding.top);
        ctx.lineTo(distX, height - padding.bottom);
        ctx.stroke();
        ctx.setLineDash([]);
    }
    
    ctx.fillStyle = 'rgba(34, 197, 94, 0.8)';
    ctx.font = 'bold 10px Roboto';
    ctx.textAlign = 'left';
    ctx.fillText('✓ ЛУЧШЕ', padding.left + 8, height - padding.bottom - 8);
    
    ctx.fillStyle = 'rgba(248, 113, 113, 0.6)';
    ctx.textAlign = 'right';
    ctx.fillText('ХУЖЕ ↑', width - padding.right - 8, padding.top + 15);
    
    renderChartLegend(legendItems);
}

function calculateTTKAtDistance(slotIndex, distance) {
    const slotData = state.slots[slotIndex];
    if (!slotData.weapon) return Infinity;
    
    const weapon = slotData.weapon;
    const ammo = slotData.ammo;
    
    let damage = weapon.damage;
    let rpm = weapon.rpm;
    let effectiveRange = weapon.effectiveRange;
    let damageMod = 1.0;
    let pellets = 1;
    let ap = weapon.stats?.armorPenetration || 0;
    
    if (ammo) {
        const stats = ammo.stats || {};
        ap += stats.armorPenetration || 0;
        damageMod = 1 + ((stats.damageModifier || 0) / 100);
        pellets = ammo.pellets || 1;
        if (stats.rangeModifier) {
            effectiveRange = effectiveRange * (1 + stats.rangeModifier / 100);
        }
    }
    
    const damagePerPellet = damage * damageMod;
    const totalShotDamage = damagePerPellet * pellets;
    const maxRange = pellets > 1 ? effectiveRange * 3.5 : effectiveRange * 2;
    
    let shotDamage = totalShotDamage;
    
    if (distance > maxRange) {
        return Infinity;
    } else if (distance > effectiveRange) {
        const falloffDistance = distance - effectiveRange;
        const maxFalloffDistance = maxRange - effectiveRange;
        const falloffPercent = Math.min(falloffDistance / maxFalloffDistance, 1.0);
        
        if (pellets > 1) {
            const effectivePellets = Math.max(1, Math.round(pellets * (1 - falloffPercent * 0.7)));
            shotDamage = damagePerPellet * effectivePellets * (1 - falloffPercent * 0.5);
        } else {
            shotDamage = totalShotDamage * (1 - falloffPercent * 0.7);
        }
    }
    
    const protection = calculateArmorProtection(state.targetArmor);
    const effectiveProtection = Math.max(0, protection - ap);
    shotDamage = shotDamage * (1 - effectiveProtection / 100);
    
    if (shotDamage <= 0) return Infinity;
    return calculateTTK(shotDamage, rpm, state.targetHP);
}

function calculateDamageAtDistance(slotIndex, distance) {
    const slotData = state.slots[slotIndex];
    if (!slotData.weapon) return 0;
    
    const weapon = slotData.weapon;
    const ammo = slotData.ammo;
    
    let damage = weapon.damage;
    let effectiveRange = weapon.effectiveRange;
    let damageMod = 1.0;
    let pellets = 1;
    let ap = weapon.stats?.armorPenetration || 0;
    
    if (ammo) {
        const stats = ammo.stats || {};
        ap += stats.armorPenetration || 0;
        damageMod = 1 + ((stats.damageModifier || 0) / 100);
        pellets = ammo.pellets || 1;
        if (stats.rangeModifier) {
            effectiveRange = effectiveRange * (1 + stats.rangeModifier / 100);
        }
    }
    
    const damagePerPellet = damage * damageMod;
    const totalShotDamage = damagePerPellet * pellets;
    const maxRange = pellets > 1 ? effectiveRange * 3.5 : effectiveRange * 2;
    
    let shotDamage = totalShotDamage;
    
    if (distance > maxRange) {
        return 0;
    } else if (distance > effectiveRange) {
        const falloffDistance = distance - effectiveRange;
        const maxFalloffDistance = maxRange - effectiveRange;
        const falloffPercent = Math.min(falloffDistance / maxFalloffDistance, 1.0);
        
        if (pellets > 1) {
            const effectivePellets = Math.max(1, Math.round(pellets * (1 - falloffPercent * 0.7)));
            shotDamage = damagePerPellet * effectivePellets * (1 - falloffPercent * 0.5);
        } else {
            shotDamage = totalShotDamage * (1 - falloffPercent * 0.7);
        }
    }
    
    const protection = calculateArmorProtection(state.targetArmor);
    const effectiveProtection = Math.max(0, protection - ap);
    shotDamage = shotDamage * (1 - effectiveProtection / 100);
    
    return shotDamage;
}

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function renderChartLegend(items) {
    if (!items.length) {
        elements.chartLegend.innerHTML = '';
        return;
    }
    
    items.sort((a, b) => {
        if (a.ttk === Infinity) return 1;
        if (b.ttk === Infinity) return -1;
        return a.ttk - b.ttk;
    });
    
    elements.chartLegend.innerHTML = items.map((item, index) => {
        const ttkText = item.ttk === Infinity ? '∞' : item.ttk.toFixed(2) + 'с';
        const rankClass = index === 0 && item.ttk !== Infinity ? 'chart-legend__item--best' : '';
        return `
            <div class="chart-legend__item ${rankClass}">
                <span class="chart-legend__color" style="background: ${item.color}"></span>
                <span class="chart-legend__name">${item.name}</span>
                <span class="chart-legend__ttk">${ttkText}</span>
            </div>`;
    }).join('');
}

function initChartInteractivity() {
    if (!elements.damageCanvas) return;
    
    const container = elements.damageCanvas.parentElement;
    
    elements.damageCanvas.addEventListener('mousemove', (e) => {
        const hasWeapons = state.slots.some((slot, i) => i < state.visibleSlots && slot.weapon);
        if (!hasWeapons) {
            hideCursorLine();
            return;
        }
        
        const rect = elements.damageCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const padding = {
            left: parseFloat(elements.damageCanvas.dataset.paddingLeft) || 60,
            right: parseFloat(elements.damageCanvas.dataset.paddingRight) || 20,
            top: parseFloat(elements.damageCanvas.dataset.paddingTop) || 30,
            bottom: parseFloat(elements.damageCanvas.dataset.paddingBottom) || 50
        };
        
        const chartWidth = rect.width - padding.left - padding.right;
        
        if (x < padding.left || x > rect.width - padding.right) {
            elements.chartTooltip.style.opacity = '0';
            hideCursorLine();
            return;
        }
        
        // Обновляем позицию курсорной линии
        updateCursorLine(x, padding);
        
        const maxRange = parseFloat(elements.damageCanvas.dataset.maxRange) || 100;
        
        const distance = ((x - padding.left) / chartWidth) * maxRange;
        let tooltipItems = [];
        
        for (let i = 0; i < state.visibleSlots; i++) {
            const slotData = state.slots[i];
            if (!slotData.weapon) continue;
            
            const ttk = calculateTTKAtDistance(i, distance);
            const damageAtDist = calculateDamageAtDistance(i, distance);
            const shotsNeeded = damageAtDist > 0 ? Math.ceil(state.targetHP / damageAtDist) : Infinity;
            
            tooltipItems.push({
                name: slotData.weapon.name,
                color: SLOT_COLORS[i],
                ttk: ttk,
                shots: shotsNeeded
            });
        }
        
        tooltipItems.sort((a, b) => {
            if (a.ttk === Infinity) return 1;
            if (b.ttk === Infinity) return -1;
            return a.ttk - b.ttk;
        });
        
        let tooltipContent = `
            <div class="chart-tooltip__header">
                <span class="chart-tooltip__distance">${Math.round(distance)} м</span>
                <span class="chart-tooltip__label">дистанция</span>
            </div>
            <div class="chart-tooltip__divider"></div>`;
        
        tooltipItems.forEach((item, index) => {
            const ttkText = item.ttk === Infinity ? '∞' : item.ttk.toFixed(2) + 'с';
            const rankIcon = index === 0 && item.ttk !== Infinity ? '👑' : '';
            const shotsText = item.shots === Infinity ? '∞' : item.shots;
            
            tooltipContent += `
                <div class="chart-tooltip__item ${index === 0 && item.ttk !== Infinity ? 'chart-tooltip__item--best' : ''}">
                    <span class="chart-tooltip__color" style="background: ${item.color}"></span>
                    <span class="chart-tooltip__name">${item.name}</span>
                    <div class="chart-tooltip__values">
                        <span class="chart-tooltip__ttk">${rankIcon} ${ttkText}</span>
                        <span class="chart-tooltip__shots">${shotsText} выстр.</span>
                    </div>
                </div>`;
        });
        
        elements.chartTooltip.innerHTML = tooltipContent;
        elements.chartTooltip.style.opacity = '1';
        
        // Позиционирование tooltip с учётом границ контейнера и viewport
        positionTooltip(e.clientX, e.clientY, container);
    });
    
    elements.damageCanvas.addEventListener('mouseleave', () => {
        elements.chartTooltip.style.opacity = '0';
        hideCursorLine();
    });
    
    elements.damageCanvas.addEventListener('click', (e) => {
        const rect = elements.damageCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const padding = { left: 60, right: 20 };
        const chartWidth = rect.width - padding.left - padding.right;
        
        if (x < padding.left || x > rect.width - padding.right) return;
        
        let maxRange = 100;
        for (let i = 0; i < state.visibleSlots; i++) {
            const weapon = state.slots[i].weapon;
            if (weapon) {
                const ammo = state.slots[i].ammo;
                let effectiveRange = weapon.effectiveRange;
                if (ammo?.stats?.rangeModifier) {
                    effectiveRange = effectiveRange * (1 + ammo.stats.rangeModifier / 100);
                }
                maxRange = Math.max(maxRange, effectiveRange * 2);
            }
        }
        
        const distance = Math.round(((x - padding.left) / chartWidth) * maxRange);
        state.targetDistance = distance;
        elements.targetDistance.value = distance;
        
        calculateResults();
        updateChart();
        updateComparisonTable();
    });
}

function updateCursorLine(x, padding) {
    if (!elements.chartCursorLine) return;
    
    elements.chartCursorLine.style.left = x + 'px';
    elements.chartCursorLine.style.top = padding.top + 'px';
    elements.chartCursorLine.style.height = `calc(100% - ${padding.top + padding.bottom}px)`;
    elements.chartCursorLine.classList.add('visible');
}

function hideCursorLine() {
    if (!elements.chartCursorLine) return;
    elements.chartCursorLine.classList.remove('visible');
}

function positionTooltip(clientX, clientY, container) {
    const tooltip = elements.chartTooltip;
    const containerRect = container.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    
    tooltip.style.position = 'fixed';
    
    let tooltipX = clientX + 15;
    let tooltipY = clientY - 10;
    
    if (tooltipX + tooltipRect.width > window.innerWidth - 10) {
        tooltipX = clientX - tooltipRect.width - 15;
    }
    
    if (tooltipY + tooltipRect.height > window.innerHeight - 10) {
        tooltipY = window.innerHeight - tooltipRect.height - 10;
    }
    
    if (tooltipY < 10) {
        tooltipY = 10;
    }
    
    if (tooltipX < 10) {
        tooltipX = 10;
    }
    
    tooltip.style.left = tooltipX + 'px';
    tooltip.style.top = tooltipY + 'px';
}

function updateComparisonTable() {
    const activeSlots = [];
    
    for (let i = 0; i < state.visibleSlots; i++) {
        if (state.slots[i].weapon) {
            activeSlots.push({
                index: i,
                weapon: state.slots[i].weapon,
                ammo: state.slots[i].ammo,
                result: calculateSlotDPS(i)
            });
        }
    }
    
    if (activeSlots.length < 2) {
        elements.comparisonTable.classList.remove('visible');
        return;
    }
    
    elements.comparisonTable.classList.add('visible');
    
    const bestDPS = Math.max(...activeSlots.map(s => s.result.dpsBody));
    const bestTTK = Math.min(...activeSlots.map(s => s.result.ttkBody === Infinity ? 999999 : s.result.ttkBody));
    const bestDamage = Math.max(...activeSlots.map(s => s.result.armorDamage));
    
    let html = `
        <table class="comparison-table__table">
            <thead>
                <tr>
                    <th>Оружие</th>
                    <th>Патроны</th>
                    <th>DPS (тело)</th>
                    <th>Урон/выстрел</th>
                    <th>TTK</th>
                    <th>Выстрелов</th>
                </tr>
            </thead>
            <tbody>`;
    
    activeSlots.forEach(slot => {
        const r = slot.result;
        const isBestDPS = r.dpsBody === bestDPS;
        const isBestTTK = r.ttkBody === bestTTK && r.ttkBody !== Infinity;
        const isBestDamage = r.armorDamage === bestDamage;
        
        const rarityHtml = slot.weapon.rarityName 
            ? `<span class="comparison-table__weapon-rarity rarity--${slot.weapon.rarity}">${slot.weapon.rarityName}</span>` 
            : '';
        
        html += `
            <tr style="border-left: 3px solid ${SLOT_COLORS[slot.index]}">
                <td>
                    <div class="comparison-table__weapon">
                        <span class="comparison-table__weapon-name">${slot.weapon.name}</span>
                        ${rarityHtml}
                    </div>
                </td>
                <td>${slot.ammo ? slot.ammo.name.replace('Патроны ', '') : '—'}</td>
                <td class="${isBestDPS ? 'comparison-table__best' : ''}">${Math.round(r.dpsBody)}</td>
                <td class="${isBestDamage ? 'comparison-table__best' : ''}">${r.armorDamage.toFixed(1)}</td>
                <td class="${isBestTTK ? 'comparison-table__best' : ''}">${r.ttkBody === Infinity ? '∞' : r.ttkBody.toFixed(2) + 'с'}</td>
                <td>${r.shotsBody === Infinity ? '∞' : r.shotsBody}</td>
            </tr>`;
    });
    
    html += '</tbody></table>';
    elements.comparisonTableContent.innerHTML = html;
}

function resetCalculator() {
    state.slots = [
        { weapon: null, ammo: null },
        { weapon: null, ammo: null },
        { weapon: null, ammo: null },
        { weapon: null, ammo: null },
        { weapon: null, ammo: null }
    ];
    state.activeSlot = 0;
    state.visibleSlots = 1;
    state.targetArmor = 0;
    state.targetHP = 100;
    state.targetDistance = 0;
    
    for (let i = 0; i < 5; i++) {
        const nameEl = document.getElementById(`slotName${i}`);
        const dpsEl = document.getElementById(`slotDps${i}`);
        if (nameEl) nameEl.textContent = 'Не выбрано';
        if (dpsEl) dpsEl.textContent = '0';
    }
    
    elements.targetArmor.value = 0;
    elements.targetHP.value = 100;
    elements.targetDistance.value = 0;
    
    const weaponValue = elements.weaponDropdown.querySelector('.custom-dropdown__value');
    weaponValue.textContent = 'Выберите оружие...';
    weaponValue.classList.remove('has-value');
    
    const ammoValue = elements.ammoDropdown.querySelector('.custom-dropdown__value');
    ammoValue.textContent = 'Сначала выберите оружие...';
    ammoValue.classList.remove('has-value');
    
    const ammoTrigger = elements.ammoDropdown.querySelector('.custom-dropdown__trigger');
    ammoTrigger.disabled = true;
    elements.ammoStats.style.display = 'none';
    
    updateSlotsVisibility();
    selectSlot(0);
    
    elements.comparisonTable.classList.remove('visible');
    elements.damageChart.classList.remove('visible');
    elements.chartPlaceholder.classList.remove('hidden');
    elements.weaponStats.style.display = 'none';
    
    renderWeaponInfo();
    renderWeaponDropdownList();
    calculateResults();
}

function initScrollEffects() {
    window.addEventListener('scroll', () => {
        if (elements.header) {
            elements.header.style.background = window.scrollY > 50 
                ? 'rgba(10, 10, 11, 0.98)' 
                : 'rgba(10, 10, 11, 0.9)';
        }
        if (elements.scrollTop) {
            elements.scrollTop.classList.toggle('visible', window.scrollY > 500);
        }
    });
    
    if (elements.scrollTop) {
        elements.scrollTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

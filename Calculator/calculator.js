const state = {
    selectedArmor: null,
    selectedContainer: null,
    artifacts: [],
    currentSlotIndex: null
};

const INVERTED_STATS = ['radiation', 'bleeding', 'cold'];

const elements = {
    armorSelect: document.getElementById('armorSelect'),
    armorInfo: document.getElementById('armorInfo'),
    containerSelect: document.getElementById('containerSelect'),
    containerInfo: document.getElementById('containerInfo'),
    artifactSlots: document.getElementById('artifactSlots'),
    artifactCounter: document.getElementById('artifactCounter'),
    radiationWarning: document.getElementById('radiationWarning'),
    radiationValue: document.getElementById('radiationValue'),
    coldWarning: document.getElementById('coldWarning'),
    coldValue: document.getElementById('coldValue'),
    resetBtn: document.getElementById('resetBtn'),
    modal: document.getElementById('artifactModal'),
    modalClose: document.getElementById('modalClose'),
    artifactSearch: document.getElementById('artifactSearch'),
    artifactList: document.getElementById('artifactList'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    burger: document.getElementById('burger'),
    mobileMenu: document.getElementById('mobileMenu'),
    scrollTop: document.getElementById('scrollTop')
};

document.addEventListener('DOMContentLoaded', () => {
    initArmorSelect();
    initEventListeners();
    initScrollEffects();
});

function initArmorSelect() {
    ARMORS.forEach(armor => {
        const option = document.createElement('option');
        option.value = armor.id;
        option.textContent = armor.name;
        elements.armorSelect.appendChild(option);
    });
}

function initEventListeners() {
    elements.armorSelect.addEventListener('change', handleArmorChange);
    elements.containerSelect.addEventListener('change', handleContainerChange);
    elements.resetBtn.addEventListener('click', resetBuild);
    elements.modalClose.addEventListener('click', closeModal);
    elements.modal.querySelector('.modal__backdrop').addEventListener('click', closeModal);
    elements.artifactSearch.addEventListener('input', filterArtifacts);
    
    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
            btn.classList.add('filter-btn--active');
            filterArtifacts();
        });
    });
    
    if (elements.burger && elements.mobileMenu) {
        elements.burger.addEventListener('click', () => {
            elements.burger.classList.toggle('active');
            elements.mobileMenu.classList.toggle('active');
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.modal.classList.contains('active')) closeModal();
    });
}

function initScrollEffects() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.style.background = window.scrollY > 50 ? 'rgba(10, 10, 11, 0.98)' : 'rgba(10, 10, 11, 0.9)';
        elements.scrollTop.classList.toggle('visible', window.scrollY > 500);
    });
    elements.scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function handleArmorChange(e) {
    const armorId = e.target.value;
    if (!armorId) {
        state.selectedArmor = null;
        renderArmorInfo();
        resetContainer();
        updateStats();
        return;
    }
    state.selectedArmor = ARMORS.find(a => a.id === armorId);
    renderArmorInfo();
    updateContainerSelect();
    updateStats();
}

function handleContainerChange(e) {
    const containerId = e.target.value;
    if (!containerId) {
        state.selectedContainer = null;
        state.artifacts = [];
        renderContainerInfo();
        renderArtifactSlots();
        updateStats();
        return;
    }
    state.selectedContainer = CONTAINERS.find(c => c.id === containerId);
    state.artifacts = new Array(state.selectedContainer.slots).fill(null);
    renderContainerInfo();
    renderArtifactSlots();
    updateStats();
}

function resetBuild() {
    state.selectedArmor = null;
    state.selectedContainer = null;
    state.artifacts = [];
    elements.armorSelect.value = '';
    elements.containerSelect.value = '';
    elements.containerSelect.disabled = true;
    renderArmorInfo();
    renderContainerInfo();
    renderArtifactSlots();
    updateStats();
}

function resetContainer() {
    state.selectedContainer = null;
    state.artifacts = [];
    elements.containerSelect.value = '';
    elements.containerSelect.disabled = true;
    elements.containerSelect.innerHTML = '<option value="">Сначала выберите броню...</option>';
    renderContainerInfo();
    renderArtifactSlots();
}

function renderArmorInfo() {
    if (!state.selectedArmor) {
        elements.armorInfo.innerHTML = `
            <div class="armor-info__placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>Выберите броню для просмотра характеристик</span>
            </div>`;
        return;
    }
    const armor = state.selectedArmor;
    const statsHtml = Object.entries(armor.stats).map(([key, value]) => {
        const name = STAT_NAMES[key] || key;
        const unit = STAT_UNITS[key] || '';
        const { displayValue, colorClass } = formatStatValue(key, value);
        return `<div class="armor-details__stat"><span class="armor-details__stat-name">${name}</span><span class="armor-details__stat-value ${colorClass}">${displayValue}${unit}</span></div>`;
    }).join('');
    
    elements.armorInfo.innerHTML = `
        <div class="armor-details">
            <div class="armor-details__header">
                <span class="armor-details__name">${armor.name}</span>
                <span class="armor-details__rarity rarity--${armor.rarity}">${armor.rarityName}</span>
            </div>
            <div class="armor-details__type">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                ${armor.type}
            </div>
            <div class="armor-details__stats">${statsHtml}</div>
        </div>`;
}

function renderContainerInfo() {
    if (!state.selectedContainer) {
        elements.containerInfo.innerHTML = `
            <div class="container-info__placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                <span>${state.selectedArmor ? 'Выберите контейнер' : 'Контейнер будет доступен после выбора брони'}</span>
            </div>`;
        return;
    }
    const container = state.selectedContainer;
    const statsHtml = Object.entries(container.stats).map(([key, value]) => {
        const name = STAT_NAMES[key] || key;
        const unit = STAT_UNITS[key] || '';
        const { displayValue, colorClass } = formatStatValue(key, value);
        return `<div class="container-details__stat"><span class="container-details__stat-name">${name}</span><span class="container-details__stat-value ${colorClass}">${displayValue}${unit}</span></div>`;
    }).join('');
    
    const shieldingHtml = Object.entries(container.shielding).map(([key, value]) => {
        const name = STAT_NAMES[key] || key;
        const unit = STAT_UNITS[key] || '';
        const { displayValue, colorClass } = formatStatValue(key, value);
        return `<div class="container-details__stat"><span class="container-details__stat-name">${name}</span><span class="container-details__stat-value ${colorClass}">${displayValue}${unit}</span></div>`;
    }).join('') || '<span class="container-details__stat-name">Нет экранирования</span>';
    
    elements.containerInfo.innerHTML = `
        <div class="container-details">
            <div class="container-details__header">
                <span class="container-details__name">${container.name}</span>
                <span class="container-details__rarity rarity--${container.rarity}">${container.rarityName}</span>
            </div>
            <div class="container-details__type">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                ${container.typeName} • ${container.slots} слот${getSlotWord(container.slots)}
            </div>
            ${Object.keys(container.stats).length > 0 ? `<div class="container-details__stats">${statsHtml}</div>` : ''}
            <div class="container-details__shielding">
                <div class="container-details__shielding-title">Экранирование:</div>
                ${shieldingHtml}
            </div>
        </div>`;
}

function renderArtifactSlots() {
    if (!state.selectedContainer) {
        elements.artifactSlots.innerHTML = `
            <div class="artifact-slots__placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                <span>Выберите контейнер для добавления артефактов</span>
            </div>`;
        elements.artifactCounter.textContent = '0/0';
        return;
    }
    const filledSlots = state.artifacts.filter(a => a !== null).length;
    elements.artifactCounter.textContent = `${filledSlots}/${state.selectedContainer.slots}`;
    
    const slotsHtml = state.artifacts.map((artifact, index) => {
        if (artifact) {
            return `
                <div class="artifact-slot" data-index="${index}">
                    <div class="artifact-slot__icon"><img src="${artifact.image}" alt="${artifact.name}" onerror="this.src='../images/placeholder.png'"></div>
                    <div class="artifact-slot__info">
                        <div class="artifact-slot__name">${artifact.name}</div>
                        <div class="artifact-slot__category">${artifact.categoryName} • Tier ${artifact.tier}</div>
                    </div>
                    <button class="artifact-slot__remove" onclick="removeArtifact(${index})" title="Удалить артефакт">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
                    </button>
                </div>`;
        }
        return `
            <div class="artifact-slot artifact-slot--empty" data-index="${index}" onclick="openArtifactModal(${index})">
                <div class="artifact-slot__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                </div>
                <div class="artifact-slot__info"><span class="artifact-slot__empty-text">Нажмите, чтобы добавить артефакт</span></div>
            </div>`;
    }).join('');
    
    elements.artifactSlots.innerHTML = `<div class="artifact-slots__grid">${slotsHtml}</div>`;
}

function renderArtifactList(artifacts = ARTIFACTS) {
    if (artifacts.length === 0) {
        elements.artifactList.innerHTML = `
            <div class="artifact-list__empty">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                <span>Артефакты не найдены</span>
            </div>`;
        return;
    }
    
    elements.artifactList.innerHTML = artifacts.map(artifact => {
        const tierClass = artifact.tier === 'unique' ? 'unique' : artifact.tier;
        const tierDisplay = artifact.tier === 'unique' ? '★' : artifact.tier;
        const statsHtml = Object.entries(artifact.stats).slice(0, 4).map(([key, value]) => {
            const name = STAT_NAMES[key] || key;
            const unit = STAT_UNITS[key] || '';
            const { displayValue, colorClass } = formatStatValue(key, value);
            return `<div class="artifact-stat"><span class="artifact-stat__name">${name}</span><span class="artifact-stat__value ${colorClass}">${displayValue}${unit}</span></div>`;
        }).join('');
        const moreStats = Object.keys(artifact.stats).length > 4 ? `<div class="artifact-stat artifact-stat--more">+${Object.keys(artifact.stats).length - 4} ещё</div>` : '';
        
        return `
            <div class="artifact-item" onclick="selectArtifact('${artifact.id}')">
                <div class="artifact-item__header">
                    <img src="${artifact.image}" alt="${artifact.name}" class="artifact-item__image" onerror="this.src='../images/placeholder.png'">
                    <div class="artifact-item__title">
                        <div class="artifact-item__name">${artifact.name}</div>
                        <div class="artifact-item__meta">
                            <span class="artifact-item__tier artifact-item__tier--${tierClass}">${tierDisplay}</span>
                            <span class="artifact-item__category">${artifact.categoryName}</span>
                        </div>
                    </div>
                </div>
                <div class="artifact-item__stats">${statsHtml}${moreStats}</div>
            </div>`;
    }).join('');
}

function updateContainerSelect() {
    if (!state.selectedArmor) { resetContainer(); return; }
    const armor = state.selectedArmor;
    const availableContainers = CONTAINERS.filter(container => {
        if (armor.containerTypes.includes('all')) return true;
        return armor.containerTypes.includes(container.type);
    });
    
    elements.containerSelect.innerHTML = '<option value="">Выберите контейнер...</option>';
    availableContainers.forEach(container => {
        const option = document.createElement('option');
        option.value = container.id;
        option.textContent = `${container.name} (${container.slots} слот${getSlotWord(container.slots)})`;
        elements.containerSelect.appendChild(option);
    });
    elements.containerSelect.disabled = false;
    
    if (state.selectedContainer) {
        const isAvailable = availableContainers.some(c => c.id === state.selectedContainer.id);
        if (!isAvailable) {
            state.selectedContainer = null;
            state.artifacts = [];
            elements.containerSelect.value = '';
            renderContainerInfo();
            renderArtifactSlots();
            updateStats();
        }
    }
}

function openArtifactModal(slotIndex) {
    state.currentSlotIndex = slotIndex;
    elements.modal.classList.add('active');
    elements.artifactSearch.value = '';
    elements.filterBtns.forEach(btn => {
        btn.classList.toggle('filter-btn--active', btn.dataset.category === 'all');
    });
    renderArtifactList();
    elements.artifactSearch.focus();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    elements.modal.classList.remove('active');
    state.currentSlotIndex = null;
    document.body.style.overflow = '';
}

function filterArtifacts() {
    const searchQuery = elements.artifactSearch.value.toLowerCase().trim();
    const activeFilter = document.querySelector('.filter-btn--active').dataset.category;
    let filtered = ARTIFACTS;
    if (activeFilter !== 'all') filtered = filtered.filter(a => a.category === activeFilter);
    if (searchQuery) filtered = filtered.filter(a => a.name.toLowerCase().includes(searchQuery) || a.nameEn.toLowerCase().includes(searchQuery));
    renderArtifactList(filtered);
}

function selectArtifact(artifactId) {
    const artifact = ARTIFACTS.find(a => a.id === artifactId);
    if (artifact && state.currentSlotIndex !== null) {
        state.artifacts[state.currentSlotIndex] = artifact;
        renderArtifactSlots();
        updateStats();
        closeModal();
    }
}

function removeArtifact(index) {
    state.artifacts[index] = null;
    renderArtifactSlots();
    updateStats();
}

function updateStats() {
    const totalStats = calculateTotalStats();
    Object.entries(totalStats).forEach(([key, value]) => {
        const element = document.querySelector(`[data-stat="${key}"]`);
        if (element) {
            const unit = STAT_UNITS[key] || '';
            const { displayValue, colorClass } = formatStatValue(key, value);
            element.textContent = displayValue + unit;
            element.className = 'stat-row__value ' + colorClass;
        }
    });
    updateEffectiveBulletResistance(totalStats.bulletResistance);
    
    const netRadiation = totalStats.radiation || 0;
    if (netRadiation > 0) {
        elements.radiationWarning.style.display = 'flex';
        elements.radiationValue.textContent = `+${netRadiation.toFixed(2)} мЗв/сек`;
    } else {
        elements.radiationWarning.style.display = 'none';
    }
    
    const netCold = totalStats.cold || 0;
    if (elements.coldWarning) {
        if (netCold > 0) {
            elements.coldWarning.style.display = 'flex';
            elements.coldValue.textContent = `+${netCold.toFixed(2)}/сек`;
        } else {
            elements.coldWarning.style.display = 'none';
        }
    }
}

function updateEffectiveBulletResistance(bulletResistance) {
    const effectiveElement = document.getElementById('effectiveBulletResistance');
    const percentElement = document.getElementById('bulletResistancePercent');
    const barElement = document.getElementById('bulletResistanceBar');
    if (!effectiveElement) return;
    
    const percent = Math.min(bulletResistance / 6, 100);
    const clampedPercent = Math.max(0, percent);
    effectiveElement.textContent = bulletResistance;
    percentElement.textContent = `${clampedPercent.toFixed(2)}%`;
    barElement.style.width = `${clampedPercent}%`;
    
    if (clampedPercent >= 70) barElement.className = 'bullet-resistance__bar-fill bullet-resistance__bar-fill--high';
    else if (clampedPercent >= 40) barElement.className = 'bullet-resistance__bar-fill bullet-resistance__bar-fill--medium';
    else barElement.className = 'bullet-resistance__bar-fill bullet-resistance__bar-fill--low';
}

function calculateTotalStats() {
    const stats = {
        radiationProtection: 0, bioProtection: 0, thermalProtection: 0, psiProtection: 0, frostProtection: 0,
        heatResistance: 0, chemResistance: 0, electroResistance: 0,
        impactResistance: 0, tearProtection: 0, bulletResistance: 0,
        regeneration: 0, bleeding: 0, radiation: 0, saturation: 0, cold: 0,
        maxStamina: 0, staminaRegen: 0, moveSpeed: 0, maxWeight: 0
    };
    
    if (state.selectedArmor) {
        Object.entries(state.selectedArmor.stats).forEach(([key, value]) => {
            if (stats.hasOwnProperty(key)) stats[key] += value;
        });
    }
    if (state.selectedContainer) {
        Object.entries(state.selectedContainer.stats).forEach(([key, value]) => {
            if (stats.hasOwnProperty(key)) stats[key] += value;
        });
        Object.entries(state.selectedContainer.shielding).forEach(([key, value]) => {
            if (stats.hasOwnProperty(key)) stats[key] += value;
        });
    }
    state.artifacts.forEach(artifact => {
        if (artifact) {
            Object.entries(artifact.stats).forEach(([key, value]) => {
                if (stats.hasOwnProperty(key)) stats[key] += value;
            });
        }
    });
    return stats;
}

function formatStatValue(statKey, value) {
    const isInverted = INVERTED_STATS.includes(statKey);
    let displayValue, colorClass = '';
    
    if (value === 0) {
        displayValue = '0';
    } else if (value > 0) {
        displayValue = `+${value.toFixed(2)}`.replace('.00', '').replace(/(\.\d)0$/, '$1');
        colorClass = isInverted ? 'stat-value--negative' : 'stat-value--positive';
    } else {
        displayValue = `${value.toFixed(2)}`.replace('.00', '').replace(/(\.\d)0$/, '$1');
        colorClass = isInverted ? 'stat-value--positive' : 'stat-value--negative';
    }
    return { displayValue, colorClass };
}

function getSlotWord(count) {
    if (count === 1) return '';
    if (count >= 2 && count <= 4) return 'а';
    return 'ов';
}

window.openArtifactModal = openArtifactModal;
window.selectArtifact = selectArtifact;
window.removeArtifact = removeArtifact;

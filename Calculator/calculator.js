const state = {
    selectedArmor: null,
    selectedContainer: null,
    artifacts: [],
    currentSlotIndex: null,
    previousStats: null,
    enhancementLevel: 0,
    // Фильтры артефактов
    filters: {
        category: 'all',
        search: '',
        bonusStat: null,    // { stat: 'bulletResistance', type: 'positive' }
        penaltyStat: null   // { stat: 'radiation', type: 'positive' }
    }
};

// Инвертированные статы (больше = хуже)
const INVERTED_STATS = ['radiation', 'bleeding', 'cold'];

// Приоритетные статы для верхней панели
const PRIORITY_STATS = ['regeneration', 'bleeding', 'radiation', 'saturation', 'cold'];

// Настройки предупреждений
const WARNING_STATS = {
    radiation: { threshold: 0, color: 'radiation', title: 'Накопление радиации', unit: 'мЗв/сек' },
    cold: { threshold: 0, color: 'cold', title: 'Накопление холода', unit: '/сек' },
    bleeding: { threshold: 0, color: 'bleeding', title: 'Накопление кровотечения', unit: '/сек' },
    regeneration: { threshold: 0, color: 'regeneration', title: 'Потеря здоровья', unit: '%/сек', inverted: true },
    saturation: { threshold: 0, color: 'saturation', title: 'Накопление голода', unit: '%/сек', inverted: true }
};

// Константа для расчёта пулестойкости
const BULLET_RESISTANCE_CONSTANT = 166.67;

// Названия фильтров для отображения
const FILTER_DISPLAY_NAMES = {
    bulletResistance: 'Пулестойкость',
    tearProtection: 'Защита от разрывов',
    impactResistance: 'Гашение удара',
    radiationProtection: 'Защита от радиации',
    bioProtection: 'Биозащита',
    thermalProtection: 'Термозащита',
    psiProtection: 'Пси-защита',
    frostProtection: 'Морозозащита',
    heatResistance: 'Термосопротивление',
    chemResistance: 'Химсопротивление',
    electroResistance: 'Электросопротивление',
    regeneration: 'Регенерация',
    bleeding: 'Кровотечение',
    radiation: 'Радиация',
    saturation: 'Насыщение',
    cold: 'Холод',
    maxWeight: 'Макс. вес',
    maxStamina: 'Макс. выносливость',
    staminaRegen: 'Восст. выносливости',
    moveSpeed: 'Скорость'
};

const elements = {
    armorSelect: document.getElementById('armorSelect'),
    armorInfo: document.getElementById('armorInfo'),
    containerSelect: document.getElementById('containerSelect'),
    containerInfo: document.getElementById('containerInfo'),
    artifactSlots: document.getElementById('artifactSlots'),
    artifactCounter: document.getElementById('artifactCounter'),
    resetBtn: document.getElementById('resetBtn'),
    modal: document.getElementById('artifactModal'),
    modalClose: document.getElementById('modalClose'),
    artifactSearch: document.getElementById('artifactSearch'),
    artifactList: document.getElementById('artifactList'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    burger: document.getElementById('burger'),
    mobileMenu: document.getElementById('mobileMenu'),
    scrollTop: document.getElementById('scrollTop'),
    warningsContainer: document.getElementById('warningsContainer'),
    priorityStats: document.getElementById('priorityStats'),
    enhancementBlock: document.getElementById('enhancementBlock'),
    enhancementSlider: document.getElementById('enhancementSlider'),
    enhancementValue: document.getElementById('enhancementValue'),
    enhancementBonus: document.getElementById('enhancementBonus'),
    // Новые элементы фильтрации
    bonusStatFilter: document.getElementById('bonusStatFilter'),
    penaltyStatFilter: document.getElementById('penaltyStatFilter'),
    resetStatFilters: document.getElementById('resetStatFilters'),
    activeFilters: document.getElementById('activeFilters'),
    activeFiltersTags: document.getElementById('activeFiltersTags'),
    quickFilterBtns: document.querySelectorAll('.quick-filter-btn')
};

document.addEventListener('DOMContentLoaded', () => {
    initArmorSelect();
    initContainerSelect();
    initEventListeners();
    initScrollEffects();
    updateStats();
});

function initArmorSelect() {
    ARMORS.forEach(armor => {
        const option = document.createElement('option');
        option.value = armor.id;
        option.textContent = armor.name;
        elements.armorSelect.appendChild(option);
    });
}

function initContainerSelect() {
    elements.containerSelect.innerHTML = '<option value="">Выберите контейнер...</option>';
    CONTAINERS.forEach(container => {
        const option = document.createElement('option');
        option.value = container.id;
        option.textContent = `${container.name} (${container.slots} слот${getSlotWord(container.slots)})`;
        elements.containerSelect.appendChild(option);
    });
    elements.containerSelect.disabled = false;
}

function initEventListeners() {
    elements.armorSelect.addEventListener('change', handleArmorChange);
    elements.containerSelect.addEventListener('change', handleContainerChange);
    elements.resetBtn.addEventListener('click', resetBuild);
    elements.modalClose.addEventListener('click', closeModal);
    elements.modal.querySelector('.modal__backdrop').addEventListener('click', closeModal);
    elements.artifactSearch.addEventListener('input', handleSearchChange);
    
    if (elements.enhancementSlider) {
        elements.enhancementSlider.addEventListener('input', handleEnhancementChange);
    }
    
    // Фильтры по категориям
    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
            btn.classList.add('filter-btn--active');
            state.filters.category = btn.dataset.category;
            applyFilters();
        });
    });
    
    // Фильтры по статам
    if (elements.bonusStatFilter) {
        elements.bonusStatFilter.addEventListener('change', handleBonusFilterChange);
    }
    if (elements.penaltyStatFilter) {
        elements.penaltyStatFilter.addEventListener('change', handlePenaltyFilterChange);
    }
    if (elements.resetStatFilters) {
        elements.resetStatFilters.addEventListener('click', resetAllStatFilters);
    }
    
    // Быстрые фильтры
    if (elements.quickFilterBtns) {
        elements.quickFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => handleQuickFilter(btn));
        });
    }
    
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

// Обработчик изменения поиска
function handleSearchChange(e) {
    state.filters.search = e.target.value.toLowerCase().trim();
    applyFilters();
}

// Обработчик изменения фильтра бонусов
function handleBonusFilterChange(e) {
    const value = e.target.value;
    if (value) {
        const [stat, type] = value.split(':');
        state.filters.bonusStat = { stat, type };
        e.target.classList.add('stat-filter-select--active');
    } else {
        state.filters.bonusStat = null;
        e.target.classList.remove('stat-filter-select--active');
    }
    updateQuickFilterButtons();
    updateActiveFiltersDisplay();
    applyFilters();
}

// Обработчик изменения фильтра штрафов
function handlePenaltyFilterChange(e) {
    const value = e.target.value;
    if (value) {
        const [stat, type] = value.split(':');
        state.filters.penaltyStat = { stat, type };
        e.target.classList.add('stat-filter-select--active');
    } else {
        state.filters.penaltyStat = null;
        e.target.classList.remove('stat-filter-select--active');
    }
    updateActiveFiltersDisplay();
    applyFilters();
}

// Обработчик быстрых фильтров
function handleQuickFilter(btn) {
    const filterValue = btn.dataset.quickFilter;
    const [stat, type] = filterValue.split(':');
    
    // Проверяем, активен ли уже этот фильтр
    const isActive = btn.classList.contains('quick-filter-btn--active');
    
    if (isActive) {
        // Снимаем фильтр
        state.filters.bonusStat = null;
        if (elements.bonusStatFilter) {
            elements.bonusStatFilter.value = '';
            elements.bonusStatFilter.classList.remove('stat-filter-select--active');
        }
        btn.classList.remove('quick-filter-btn--active');
    } else {
        // Устанавливаем фильтр
        state.filters.bonusStat = { stat, type };
        if (elements.bonusStatFilter) {
            elements.bonusStatFilter.value = filterValue;
            elements.bonusStatFilter.classList.add('stat-filter-select--active');
        }
        // Снимаем активность с других быстрых фильтров
        elements.quickFilterBtns.forEach(b => b.classList.remove('quick-filter-btn--active'));
        btn.classList.add('quick-filter-btn--active');
    }
    
    updateActiveFiltersDisplay();
    applyFilters();
}

// Обновление состояния кнопок быстрых фильтров
function updateQuickFilterButtons() {
    if (!elements.quickFilterBtns) return;
    
    elements.quickFilterBtns.forEach(btn => {
        const filterValue = btn.dataset.quickFilter;
        const [stat, type] = filterValue.split(':');
        
        const isActive = state.filters.bonusStat && 
                         state.filters.bonusStat.stat === stat && 
                         state.filters.bonusStat.type === type;
        
        btn.classList.toggle('quick-filter-btn--active', isActive);
    });
}

// Сброс всех фильтров по статам
function resetAllStatFilters() {
    state.filters.bonusStat = null;
    state.filters.penaltyStat = null;
    
    if (elements.bonusStatFilter) {
        elements.bonusStatFilter.value = '';
        elements.bonusStatFilter.classList.remove('stat-filter-select--active');
    }
    if (elements.penaltyStatFilter) {
        elements.penaltyStatFilter.value = '';
        elements.penaltyStatFilter.classList.remove('stat-filter-select--active');
    }
    
    elements.quickFilterBtns?.forEach(btn => btn.classList.remove('quick-filter-btn--active'));
    
    updateActiveFiltersDisplay();
    applyFilters();
}

// Удаление конкретного фильтра
function removeStatFilter(filterType) {
    if (filterType === 'bonus') {
        state.filters.bonusStat = null;
        if (elements.bonusStatFilter) {
            elements.bonusStatFilter.value = '';
            elements.bonusStatFilter.classList.remove('stat-filter-select--active');
        }
        elements.quickFilterBtns?.forEach(btn => btn.classList.remove('quick-filter-btn--active'));
    } else if (filterType === 'penalty') {
        state.filters.penaltyStat = null;
        if (elements.penaltyStatFilter) {
            elements.penaltyStatFilter.value = '';
            elements.penaltyStatFilter.classList.remove('stat-filter-select--active');
        }
    }
    
    updateActiveFiltersDisplay();
    applyFilters();
}

// Обновление отображения активных фильтров
function updateActiveFiltersDisplay() {
    if (!elements.activeFilters || !elements.activeFiltersTags) return;
    
    const tags = [];
    
    if (state.filters.bonusStat) {
        const { stat, type } = state.filters.bonusStat;
        const displayName = FILTER_DISPLAY_NAMES[stat] || stat;
        const prefix = type === 'positive' ? '+' : '−';
        tags.push(`
            <span class="filter-tag filter-tag--bonus">
                ${prefix} ${displayName}
                <button class="filter-tag__remove" onclick="removeStatFilter('bonus')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
                </button>
            </span>
        `);
    }
    
    if (state.filters.penaltyStat) {
        const { stat, type } = state.filters.penaltyStat;
        const displayName = FILTER_DISPLAY_NAMES[stat] || stat;
        const prefix = type === 'positive' ? '+' : '−';
        tags.push(`
            <span class="filter-tag filter-tag--penalty">
                ${prefix} ${displayName}
                <button class="filter-tag__remove" onclick="removeStatFilter('penalty')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
                </button>
            </span>
        `);
    }
    
    if (tags.length > 0) {
        elements.activeFilters.style.display = 'flex';
        elements.activeFiltersTags.innerHTML = tags.join('');
    } else {
        elements.activeFilters.style.display = 'none';
        elements.activeFiltersTags.innerHTML = '';
    }
}

// Применение всех фильтров
function applyFilters() {
    let filtered = [...ARTIFACTS];
    
    // Фильтр по категории
    if (state.filters.category !== 'all') {
        filtered = filtered.filter(a => a.category === state.filters.category);
    }
    
    // Фильтр по поиску
    if (state.filters.search) {
        filtered = filtered.filter(a => 
            a.name.toLowerCase().includes(state.filters.search) || 
            a.nameEn.toLowerCase().includes(state.filters.search)
        );
    }
    
    // Фильтр по бонусному стату
    if (state.filters.bonusStat) {
        const { stat, type } = state.filters.bonusStat;
        filtered = filtered.filter(artifact => {
            const value = artifact.stats[stat];
            if (value === undefined) return false;
            return type === 'positive' ? value > 0 : value < 0;
        });
    }
    
    // Фильтр по штрафному стату
    if (state.filters.penaltyStat) {
        const { stat, type } = state.filters.penaltyStat;
        filtered = filtered.filter(artifact => {
            const value = artifact.stats[stat];
            if (value === undefined) return false;
            return type === 'positive' ? value > 0 : value < 0;
        });
    }
    
    // Сортировка результатов
    if (state.filters.bonusStat) {
        const { stat, type } = state.filters.bonusStat;
        filtered.sort((a, b) => {
            const aVal = a.stats[stat] || 0;
            const bVal = b.stats[stat] || 0;
            // Сортируем по абсолютному значению (лучшие сверху)
            return type === 'positive' ? bVal - aVal : aVal - bVal;
        });
    }
    
    renderArtifactList(filtered);
}

// Устаревшая функция для обратной совместимости
function filterArtifacts() {
    applyFilters();
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
    state.previousStats = calculateTotalStats();
    
    if (!armorId) {
        state.selectedArmor = null;
        state.enhancementLevel = 0;
        hideEnhancementBlock();
        renderArmorInfo();
        updateContainerOptions();
        updateStats();
        return;
    }
    
    state.selectedArmor = ARMORS.find(a => a.id === armorId);
    state.enhancementLevel = 0;
    
    if (state.selectedArmor.enhancement) {
        showEnhancementBlock();
    } else {
        hideEnhancementBlock();
    }
    
    renderArmorInfo();
    updateContainerOptions();
    updateStats();
}

function updateContainerOptions() {
    const currentContainerId = elements.containerSelect.value;
    elements.containerSelect.innerHTML = '<option value="">Выберите контейнер...</option>';
    
    const availableContainers = CONTAINERS.filter(container => {
        if (!state.selectedArmor) return true;
        if (state.selectedArmor.containerTypes.includes('all')) return true;
        return state.selectedArmor.containerTypes.includes(container.type);
    });
    
    availableContainers.forEach(container => {
        const option = document.createElement('option');
        option.value = container.id;
        option.textContent = `${container.name} (${container.slots} слот${getSlotWord(container.slots)})`;
        elements.containerSelect.appendChild(option);
    });
    
    const currentStillAvailable = availableContainers.some(c => c.id === currentContainerId);
    if (currentStillAvailable) {
        elements.containerSelect.value = currentContainerId;
    } else if (state.selectedContainer) {
        state.selectedContainer = null;
        state.artifacts = [];
        renderContainerInfo();
        renderArtifactSlots();
    }
    
    elements.containerSelect.disabled = false;
}

function handleEnhancementChange(e) {
    state.previousStats = calculateTotalStats();
    state.enhancementLevel = parseInt(e.target.value);
    
    updateEnhancementDisplay();
    renderArmorInfo();
    updateStats();
}

function showEnhancementBlock() {
    if (!elements.enhancementBlock) return;
    
    const maxLevel = state.selectedArmor.enhancement.maxLevel;
    elements.enhancementSlider.max = maxLevel;
    elements.enhancementSlider.value = 0;
    state.enhancementLevel = 0;
    
    elements.enhancementBlock.style.display = 'block';
    elements.enhancementBlock.classList.add('visible');
    
    updateEnhancementDisplay();
}

function hideEnhancementBlock() {
    if (!elements.enhancementBlock) return;
    elements.enhancementBlock.style.display = 'none';
    elements.enhancementBlock.classList.remove('visible');
}

function updateEnhancementDisplay() {
    if (!elements.enhancementBlock || !state.selectedArmor?.enhancement) return;
    
    const level = state.enhancementLevel;
    const maxLevel = state.selectedArmor.enhancement.maxLevel;
    
    elements.enhancementValue.textContent = level;
    
    const progress = (level / maxLevel) * 100;
    elements.enhancementSlider.style.setProperty('--slider-progress', `${progress}%`);
    
    elements.enhancementBlock.setAttribute('data-level', level);
    
    elements.enhancementBlock.classList.remove('enhancement-block--high', 'enhancement-block--max');
    if (level >= 10 && level < maxLevel) {
        elements.enhancementBlock.classList.add('enhancement-block--high');
    } else if (level === maxLevel) {
        elements.enhancementBlock.classList.add('enhancement-block--max');
    }
    
    renderEnhancementBonuses();
}

function renderEnhancementBonuses() {
    if (!elements.enhancementBonus || !state.selectedArmor?.enhancement) return;
    
    const level = state.enhancementLevel;
    const bonuses = state.selectedArmor.enhancement.bonuses;
    
    if (level === 0) {
        elements.enhancementBonus.innerHTML = '<div class="enhancement-bonus-item"><span class="enhancement-bonus-item__name">Бонусы отсутствуют</span></div>';
        return;
    }
    
    let html = '';
    Object.entries(bonuses).forEach(([statKey, values]) => {
        const bonusValue = values[level] || 0;
        if (bonusValue !== 0) {
            const statName = STAT_NAMES[statKey] || statKey;
            const unit = STAT_UNITS[statKey] || '';
            const displayValue = bonusValue > 0 ? `+${formatNumber(bonusValue)}` : formatNumber(bonusValue);
            
            html += `
                <div class="enhancement-bonus-item">
                    <span class="enhancement-bonus-item__name">${statName}</span>
                    <span class="enhancement-bonus-item__value">${displayValue}${unit}</span>
                </div>
            `;
        }
    });
    
    elements.enhancementBonus.innerHTML = html || '<div class="enhancement-bonus-item"><span class="enhancement-bonus-item__name">Бонусы отсутствуют</span></div>';
}

function getEnhancementBonuses() {
    const bonuses = {};
    
    if (!state.selectedArmor?.enhancement || state.enhancementLevel === 0) {
        return bonuses;
    }
    
    const enhancementData = state.selectedArmor.enhancement.bonuses;
    
    Object.entries(enhancementData).forEach(([statKey, values]) => {
        const bonusValue = values[state.enhancementLevel] || 0;
        if (bonusValue !== 0) {
            bonuses[statKey] = bonusValue;
        }
    });
    
    return bonuses;
}

function handleContainerChange(e) {
    const containerId = e.target.value;
    state.previousStats = calculateTotalStats();
    
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
    state.previousStats = null;
    state.selectedArmor = null;
    state.selectedContainer = null;
    state.artifacts = [];
    state.enhancementLevel = 0;
    
    elements.armorSelect.value = '';
    elements.containerSelect.value = '';
    
    hideEnhancementBlock();
    updateContainerOptions();
    renderArmorInfo();
    renderContainerInfo();
    renderArtifactSlots();
    updateStats();
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
    const enhancementBonuses = getEnhancementBonuses();
    
    const statsHtml = Object.entries(armor.stats).map(([key, baseValue]) => {
        const name = STAT_NAMES[key] || key;
        const unit = STAT_UNITS[key] || '';
        const enhancementBonus = enhancementBonuses[key] || 0;
        const totalValue = baseValue + enhancementBonus;
        
        const { displayValue, colorClass } = formatStatValue(key, totalValue);
        
        let enhancementHtml = '';
        if (enhancementBonus !== 0) {
            const bonusStr = enhancementBonus > 0 ? `+${formatNumber(enhancementBonus)}` : formatNumber(enhancementBonus);
            enhancementHtml = `<span class="stat-enhancement-bonus">(${bonusStr})</span>`;
        }
        
        return `
            <div class="armor-details__stat">
                <span class="armor-details__stat-name">${name}</span>
                <span class="armor-details__stat-value ${colorClass}">
                    ${displayValue}${unit} ${enhancementHtml}
                </span>
            </div>
        `;
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
                <span>Выберите контейнер для добавления артефактов</span>
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
                <span style="font-size: 12px; margin-top: 4px;">Попробуйте изменить параметры фильтрации</span>
            </div>`;
        return;
    }
    
    // Добавляем счётчик найденных артефактов
    const countHtml = `<div class="artifacts-count">Найдено: <strong>${artifacts.length}</strong> артефакт${getArtifactWord(artifacts.length)}</div>`;
    
    const listHtml = artifacts.map(artifact => {
        const tierClass = artifact.tier === 'unique' ? 'unique' : artifact.tier;
        const tierDisplay = artifact.tier === 'unique' ? '★' : artifact.tier;
        
        // Подсвечиваем релевантные статы
        const statsHtml = Object.entries(artifact.stats).slice(0, 4).map(([key, value]) => {
            const name = STAT_NAMES[key] || key;
            const unit = STAT_UNITS[key] || '';
            const { displayValue, colorClass } = formatStatValue(key, value);
            
            // Проверяем, соответствует ли стат фильтру
            let highlightClass = '';
            if (state.filters.bonusStat && state.filters.bonusStat.stat === key) {
                highlightClass = 'artifact-stat--highlighted';
            }
            if (state.filters.penaltyStat && state.filters.penaltyStat.stat === key) {
                highlightClass = 'artifact-stat--highlighted-penalty';
            }
            
            return `<div class="artifact-stat ${highlightClass}"><span class="artifact-stat__name">${name}</span><span class="artifact-stat__value ${colorClass}">${displayValue}${unit}</span></div>`;
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
    
    elements.artifactList.innerHTML = listHtml;
}

// Склонение слова "артефакт"
function getArtifactWord(count) {
    const lastTwo = count % 100;
    const lastOne = count % 10;
    
    if (lastTwo >= 11 && lastTwo <= 14) return 'ов';
    if (lastOne === 1) return '';
    if (lastOne >= 2 && lastOne <= 4) return 'а';
    return 'ов';
}

function openArtifactModal(slotIndex) {
    state.currentSlotIndex = slotIndex;
    elements.modal.classList.add('active');
    
    // Сбрасываем фильтры при открытии
    state.filters.search = '';
    state.filters.category = 'all';
    state.filters.bonusStat = null;
    state.filters.penaltyStat = null;
    
    elements.artifactSearch.value = '';
    elements.filterBtns.forEach(btn => {
        btn.classList.toggle('filter-btn--active', btn.dataset.category === 'all');
    });
    
    if (elements.bonusStatFilter) {
        elements.bonusStatFilter.value = '';
        elements.bonusStatFilter.classList.remove('stat-filter-select--active');
    }
    if (elements.penaltyStatFilter) {
        elements.penaltyStatFilter.value = '';
        elements.penaltyStatFilter.classList.remove('stat-filter-select--active');
    }
    elements.quickFilterBtns?.forEach(btn => btn.classList.remove('quick-filter-btn--active'));
    
    updateActiveFiltersDisplay();
    applyFilters();
    
    elements.artifactSearch.focus();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    elements.modal.classList.remove('active');
    state.currentSlotIndex = null;
    document.body.style.overflow = '';
}

function selectArtifact(artifactId) {
    const artifact = ARTIFACTS.find(a => a.id === artifactId);
    if (artifact && state.currentSlotIndex !== null) {
        state.previousStats = calculateTotalStats();
        state.artifacts[state.currentSlotIndex] = artifact;
        renderArtifactSlots();
        updateStats();
        closeModal();
    }
}

function removeArtifact(index) {
    state.previousStats = calculateTotalStats();
    state.artifacts[index] = null;
    renderArtifactSlots();
    updateStats();
}

function updateStats() {
    const totalStats = calculateTotalStats();
    const baseStats = calculateBaseStats();
    
    updatePriorityStats(totalStats, state.previousStats);
    
    Object.entries(totalStats).forEach(([key, value]) => {
        const element = document.querySelector(`[data-stat="${key}"]`);
        if (element) {
            const unit = STAT_UNITS[key] || '';
            const prevValue = state.previousStats ? state.previousStats[key] : value;
            const { displayValue, colorClass } = formatStatValueWithChange(key, value, prevValue);
            element.textContent = displayValue + unit;
            element.className = 'stat-row__value ' + colorClass;
        }
    });
    
    updateEffectiveBulletResistance(totalStats.bulletResistance);
    updateWarnings(totalStats);
    
    state.previousStats = totalStats;
}

function updatePriorityStats(currentStats, previousStats) {
    PRIORITY_STATS.forEach(statKey => {
        const element = document.querySelector(`[data-priority-stat="${statKey}"]`);
        const cardElement = element?.closest('.priority-stat');
        
        if (!element || !cardElement) return;
        
        const value = currentStats[statKey] || 0;
        const prevValue = previousStats ? (previousStats[statKey] || 0) : value;
        const unit = STAT_UNITS[statKey] || '';
        
        const { displayValue, colorClass, isDangerous, isGood } = formatPriorityStatValue(statKey, value, prevValue);
        
        element.textContent = displayValue + unit;
        element.className = 'priority-stat__value';
        if (colorClass) {
            element.classList.add(colorClass);
        }
        
        cardElement.classList.remove('priority-stat--danger', 'priority-stat--good');
        if (isDangerous) {
            cardElement.classList.add('priority-stat--danger');
        } else if (isGood) {
            cardElement.classList.add('priority-stat--good');
        }
    });
}

function formatPriorityStatValue(statKey, value, prevValue) {
    const isInverted = INVERTED_STATS.includes(statKey);
    
    let displayValue = '';
    let colorClass = '';
    let isDangerous = false;
    let isGood = false;
    
    if (value === 0) {
        displayValue = '0';
    } else if (value > 0) {
        displayValue = `+${formatNumber(value)}`;
    } else {
        displayValue = formatNumber(value);
    }
    
    if (isInverted) {
        if (value > 0) {
            isDangerous = true;
            colorClass = 'priority-stat__value--negative';
        } else if (value < 0) {
            isGood = true;
            colorClass = 'priority-stat__value--positive';
        }
    } else {
        if (value > 0) {
            isGood = true;
            colorClass = 'priority-stat__value--positive';
        } else if (value < 0) {
            isDangerous = true;
            colorClass = 'priority-stat__value--negative';
        }
    }
    
    return { displayValue, colorClass, isDangerous, isGood };
}

function formatStatValueWithChange(statKey, currentValue, previousValue) {
    const isInverted = INVERTED_STATS.includes(statKey);
    const diff = currentValue - previousValue;
    
    let displayValue = '';
    let colorClass = '';
    
    if (currentValue === 0) {
        displayValue = '0';
    } else if (currentValue > 0) {
        displayValue = `+${formatNumber(currentValue)}`;
    } else {
        displayValue = formatNumber(currentValue);
    }
    
    if (diff !== 0) {
        if (isInverted) {
            colorClass = diff > 0 ? 'stat-row__value--negative' : 'stat-row__value--positive';
        } else {
            colorClass = diff > 0 ? 'stat-row__value--positive' : 'stat-row__value--negative';
        }
    } else {
        if (currentValue !== 0) {
            if (isInverted) {
                colorClass = currentValue > 0 ? 'stat-row__value--negative' : 'stat-row__value--positive';
            } else {
                colorClass = currentValue > 0 ? 'stat-row__value--positive' : 'stat-row__value--negative';
            }
        }
    }
    
    return { displayValue, colorClass };
}

function formatNumber(value) {
    return value.toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
}

function calculateBaseStats() {
    const stats = createEmptyStats();
    
    if (state.selectedArmor) {
        Object.entries(state.selectedArmor.stats).forEach(([key, value]) => {
            if (stats.hasOwnProperty(key)) stats[key] += value;
        });
        
        const enhancementBonuses = getEnhancementBonuses();
        Object.entries(enhancementBonuses).forEach(([key, value]) => {
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
    
    return stats;
}

function calculateTotalStats() {
    const stats = createEmptyStats();
    
    if (state.selectedArmor) {
        Object.entries(state.selectedArmor.stats).forEach(([key, value]) => {
            if (stats.hasOwnProperty(key)) stats[key] += value;
        });
        
        const enhancementBonuses = getEnhancementBonuses();
        Object.entries(enhancementBonuses).forEach(([key, value]) => {
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

function createEmptyStats() {
    return {
        radiationProtection: 0, bioProtection: 0, thermalProtection: 0,
        psiProtection: 0, frostProtection: 0,
        heatResistance: 0, chemResistance: 0, electroResistance: 0,
        impactResistance: 0, tearProtection: 0, bulletResistance: 0,
        regeneration: 0, bleeding: 0, radiation: 0, saturation: 0, cold: 0,
        maxStamina: 0, staminaRegen: 0, moveSpeed: 0, maxWeight: 0
    };
}

function updateWarnings(totalStats) {
    const warningsHtml = [];
    
    Object.entries(WARNING_STATS).forEach(([statKey, config]) => {
        let value = totalStats[statKey] || 0;
        let isDangerous = false;
        
        if (config.inverted) {
            isDangerous = value < config.threshold;
            value = Math.abs(value);
        } else {
            isDangerous = value > config.threshold;
        }
        
        if (isDangerous) {
            const iconSvg = getWarningIcon(statKey);
            warningsHtml.push(`
                <div class="warning-item warning-item--${config.color}">
                    <div class="warning-item__icon">${iconSvg}</div>
                    <div class="warning-item__content">
                        <span class="warning-item__title">Внимание: ${config.title}!</span>
                        <span class="warning-item__value">${config.inverted ? '-' : '+'}${formatNumber(value)} ${config.unit}</span>
                    </div>
                </div>
            `);
        }
    });
    
    let warningsContainer = document.getElementById('warningsContainer');
    if (!warningsContainer) {
        const bulletResistance = document.querySelector('.bullet-resistance');
        warningsContainer = document.createElement('div');
        warningsContainer.id = 'warningsContainer';
        bulletResistance.parentNode.insertBefore(warningsContainer, bulletResistance.nextSibling);
    }
    
    warningsContainer.innerHTML = warningsHtml.join('');
}

function getWarningIcon(statKey) {
    const icons = {
        radiation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
        cold: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><path d="M12 2l4 4M12 2l-4 4"/><path d="M12 22l4-4M12 22l-4-4"/><path d="M2 12l4 4M2 12l4-4"/><path d="M22 12l-4 4M22 12l-4-4"/></svg>',
        bleeding: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
        regeneration: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
        saturation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>'
    };
    return icons[statKey] || icons.radiation;
}

function updateEffectiveBulletResistance(bulletResistance) {
    const effectiveElement = document.getElementById('effectiveBulletResistance');
    const percentElement = document.getElementById('bulletResistancePercent');
    const barElement = document.getElementById('bulletResistanceBar');
    if (!effectiveElement) return;
    
    let percent = 0;
    if (bulletResistance > 0) {
        percent = (bulletResistance / (bulletResistance + BULLET_RESISTANCE_CONSTANT)) * 100;
    } else if (bulletResistance < 0) {
        percent = (bulletResistance / (Math.abs(bulletResistance) + BULLET_RESISTANCE_CONSTANT)) * 100;
    }
    
    const clampedPercent = Math.max(-100, Math.min(percent, 99.99));
    
    effectiveElement.textContent = formatNumber(bulletResistance);
    percentElement.textContent = `${clampedPercent.toFixed(2)}%`;
    
    const barPercent = Math.max(0, Math.min(clampedPercent, 100));
    barElement.style.width = `${barPercent}%`;
    
    if (clampedPercent >= 65) {
        barElement.className = 'bullet-resistance__bar-fill bullet-resistance__bar-fill--high';
    } else if (clampedPercent >= 45) {
        barElement.className = 'bullet-resistance__bar-fill bullet-resistance__bar-fill--medium';
    } else {
        barElement.className = 'bullet-resistance__bar-fill bullet-resistance__bar-fill--low';
    }
}

function formatStatValue(statKey, value) {
    const isInverted = INVERTED_STATS.includes(statKey);
    let displayValue, colorClass = '';
    
    if (value === 0) {
        displayValue = '0';
    } else if (value > 0) {
        displayValue = `+${formatNumber(value)}`;
        colorClass = isInverted ? 'stat-value--negative' : 'stat-value--positive';
    } else {
        displayValue = formatNumber(value);
        colorClass = isInverted ? 'stat-value--positive' : 'stat-value--negative';
    }
    return { displayValue, colorClass };
}

function getSlotWord(count) {
    if (count === 1) return '';
    if (count >= 2 && count <= 4) return 'а';
    return 'ов';
}

// Экспорт функций в глобальную область
window.openArtifactModal = openArtifactModal;
window.selectArtifact = selectArtifact;
window.removeArtifact = removeArtifact;
window.removeStatFilter = removeStatFilter;

const state = {
    selectedArmor: null,
    selectedContainer: null,
    artifacts: [],
    currentSlotIndex: null,
    previousStats: null // Для отслеживания изменений
};

// Инвертированные статы (больше = хуже)
const INVERTED_STATS = ['radiation', 'bleeding', 'cold', 'saturation'];

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
    priorityStats: document.getElementById('priorityStats')
};

document.addEventListener('DOMContentLoaded', () => {
    initArmorSelect();
    initContainerSelect();
    initEventListeners();
    initScrollEffects();
    updateStats(); // Инициализация начальных значений
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
    state.previousStats = calculateTotalStats(); // Сохраняем предыдущие статы
    
    if (!armorId) {
        state.selectedArmor = null;
        renderArmorInfo();
        updateStats();
        return;
    }
    state.selectedArmor = ARMORS.find(a => a.id === armorId);
    renderArmorInfo();
    updateStats();
}

function handleContainerChange(e) {
    const containerId = e.target.value;
    state.previousStats = calculateTotalStats(); // Сохраняем предыдущие статы
    
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
    elements.armorSelect.value = '';
    elements.containerSelect.value = '';
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
        state.previousStats = calculateTotalStats(); // Сохраняем статы ДО добавления
        state.artifacts[state.currentSlotIndex] = artifact;
        renderArtifactSlots();
        updateStats();
        closeModal();
    }
}

function removeArtifact(index) {
    state.previousStats = calculateTotalStats(); // Сохраняем статы ДО удаления
    state.artifacts[index] = null;
    renderArtifactSlots();
    updateStats();
}

// Главная функция обновления статов
function updateStats() {
    const totalStats = calculateTotalStats();
    const baseStats = calculateBaseStats();
    
    // Обновляем приоритетные показатели
    updatePriorityStats(totalStats, state.previousStats);
    
    // Обновляем все остальные статы
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
    
    // Сохраняем текущие статы для следующего сравнения
    state.previousStats = totalStats;
}

// Обновление приоритетных показателей
function updatePriorityStats(currentStats, previousStats) {
    PRIORITY_STATS.forEach(statKey => {
        const element = document.querySelector(`[data-priority-stat="${statKey}"]`);
        const cardElement = element?.closest('.priority-stat');
        
        if (!element || !cardElement) return;
        
        const value = currentStats[statKey] || 0;
        const prevValue = previousStats ? (previousStats[statKey] || 0) : value;
        const unit = STAT_UNITS[statKey] || '';
        
        // Форматируем значение
        const { displayValue, colorClass, isDangerous, isGood } = formatPriorityStatValue(statKey, value, prevValue);
        
        element.textContent = displayValue + unit;
        element.className = 'priority-stat__value';
        if (colorClass) {
            element.classList.add(colorClass);
        }
        
        // Обновляем стиль карточки
        cardElement.classList.remove('priority-stat--danger', 'priority-stat--good');
        if (isDangerous) {
            cardElement.classList.add('priority-stat--danger');
        } else if (isGood) {
            cardElement.classList.add('priority-stat--good');
        }
    });
}

// Форматирование значений приоритетных статов
function formatPriorityStatValue(statKey, value, prevValue) {
    const isInverted = INVERTED_STATS.includes(statKey);
    const diff = value - prevValue;
    
    let displayValue = '';
    let colorClass = '';
    let isDangerous = false;
    let isGood = false;
    
    // Формируем отображаемое значение
    if (value === 0) {
        displayValue = '0';
    } else if (value > 0) {
        displayValue = `+${formatNumber(value)}`;
    } else {
        displayValue = formatNumber(value);
    }
    
    // Определяем цвет и состояние на основе значения и изменения
    if (isInverted) {
        // Для инвертированных: положительное значение = плохо, отрицательное = хорошо
        if (value > 0) {
            isDangerous = true;
            colorClass = 'priority-stat__value--negative';
        } else if (value < 0) {
            isGood = true;
            colorClass = 'priority-stat__value--positive';
        }
    } else {
        // Для обычных (regeneration): положительное = хорошо, отрицательное = плохо
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

// Форматирование значений с учётом изменения
function formatStatValueWithChange(statKey, currentValue, previousValue) {
    const isInverted = INVERTED_STATS.includes(statKey);
    const diff = currentValue - previousValue;
    
    let displayValue = '';
    let colorClass = '';
    
    // Формируем отображаемое значение
    if (currentValue === 0) {
        displayValue = '0';
    } else if (currentValue > 0) {
        displayValue = `+${formatNumber(currentValue)}`;
    } else {
                displayValue = formatNumber(currentValue);
    }
    
    // Определяем цвет на основе изменения
    if (diff !== 0) {
        // Было изменение - подсвечиваем
        if (isInverted) {
            // Для инвертированных: увеличение = плохо (красный), уменьшение = хорошо (зелёный)
            colorClass = diff > 0 ? 'stat-row__value--negative' : 'stat-row__value--positive';
        } else {
            // Для обычных: увеличение = хорошо (зелёный), уменьшение = плохо (красный)
            colorClass = diff > 0 ? 'stat-row__value--positive' : 'stat-row__value--negative';
        }
    } else {
        // Изменения не было - определяем цвет по текущему значению
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

// Форматирование числа (убираем лишние нули)
function formatNumber(value) {
    return value.toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
}

// Расчёт базовых статов (броня + контейнер, без артефактов)
function calculateBaseStats() {
    const stats = createEmptyStats();
    
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
    
    return stats;
}

// Расчёт всех статов (броня + контейнер + артефакты)
function calculateTotalStats() {
    const stats = createEmptyStats();
    
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

// Создание пустого объекта статов
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

// Обновление предупреждений
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

// Иконки для предупреждений
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

// Обновление пулестойкости
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
    
    if (clampedPercent >= 70) {
        barElement.className = 'bullet-resistance__bar-fill bullet-resistance__bar-fill--high';
    } else if (clampedPercent >= 40) {
        barElement.className = 'bullet-resistance__bar-fill bullet-resistance__bar-fill--medium';
    } else {
        barElement.className = 'bullet-resistance__bar-fill bullet-resistance__bar-fill--low';
    }
}

// Базовое форматирование статов (для брони/контейнера)
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

// Склонение слова "слот"
function getSlotWord(count) {
    if (count === 1) return '';
    if (count >= 2 && count <= 4) return 'а';
    return 'ов';
}

// Экспорт функций в глобальную область
window.openArtifactModal = openArtifactModal;
window.selectArtifact = selectArtifact;
window.removeArtifact = removeArtifact;

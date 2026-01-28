// ============================================================
// PROJECT CATACLYSM WIKI — ЛОГИКА DPS КАЛЬКУЛЯТОРА
// ============================================================

const state = {
    selectedWeapon: null,
    selectedAmmo: null,
    manualMode: false,
    targetArmor: 0,
    targetHP: 100,
    // Значения для ручного ввода
    manualStats: {
        damage: 41,
        rpm: 600,
        headshot: 1.25
    },
    manualAmmoStats: {
        penetration: 0,
        damageMod: 100 // В процентах
    }
};

const elements = {
    // Ввод оружия
    weaponSelect: document.getElementById('weaponSelect'),
    weaponInfo: document.getElementById('weaponInfo'),
    manualInput: document.getElementById('manualInput'),
    manualModeToggle: document.getElementById('manualMode'),
    manualFields: document.getElementById('manualFields'),
    manualDamage: document.getElementById('manualDamage'),
    manualRPM: document.getElementById('manualRPM'),
    manualHeadshot: document.getElementById('manualHeadshot'),
    
    // Ввод патронов
    ammoSelect: document.getElementById('ammoSelect'),
    ammoInfo: document.getElementById('ammoInfo'),
    manualAmmo: document.getElementById('manualAmmo'),
    manualAP: document.getElementById('manualAP'),
    manualDamageMod: document.getElementById('manualDamageMod'),
    
    // Цель
    targetArmor: document.getElementById('targetArmor'),
    targetHP: document.getElementById('targetHP'),
    protectionPercent: document.getElementById('protectionPercent'),
    effectiveProtection: document.getElementById('effectiveProtection'),
    
    // Результаты
    dpsBody: document.getElementById('dpsBody'),
    dpsHead: document.getElementById('dpsHead'),
    baseDamage: document.getElementById('baseDamage'),
    armorDamage: document.getElementById('armorDamage'),
    headshotDamage: document.getElementById('headshotDamage'),
    headshotArmorDamage: document.getElementById('headshotArmorDamage'),
    ttkBody: document.getElementById('ttkBody'),
    shotsBody: document.getElementById('shotsBody'),
    ttkHead: document.getElementById('ttkHead'),
    shotsHead: document.getElementById('shotsHead'),
    resetBtn: document.getElementById('resetBtn'),
    
    // Характеристики
    weaponStats: document.getElementById('weaponStats'),
    weaponStatsGrid: document.getElementById('weaponStatsGrid'),
    
    // Навигация
    burger: document.getElementById('burger'),
    mobileMenu: document.getElementById('mobileMenu'),
    scrollTop: document.getElementById('scrollTop'),
    header: document.querySelector('.header')
};

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    initWeaponSelect();
    initEventListeners();
    initScrollEffects();
    calculateResults(); // Первичный расчёт (нули)
});

function initWeaponSelect() {
    // Группировка по категориям
    const categories = {};
    
    // Сортировка и группировка оружия
    WEAPONS.forEach(weapon => {
        const catId = weapon.category;
        if (!categories[catId]) {
            categories[catId] = [];
        }
        categories[catId].push(weapon);
    });
    
    // Заполнение селекта
    Object.keys(WEAPON_CATEGORIES).forEach(catId => {
        if (categories[catId]) {
            const group = document.createElement('optgroup');
            group.label = WEAPON_CATEGORIES[catId].name;
            
            categories[catId].forEach(weapon => {
                const option = document.createElement('option');
                option.value = weapon.id;
                option.textContent = weapon.name;
                group.appendChild(option);
            });
            
            elements.weaponSelect.appendChild(group);
        }
    });
}

function initEventListeners() {
    // Основные селекты
    elements.weaponSelect.addEventListener('change', handleWeaponChange);
    elements.ammoSelect.addEventListener('change', handleAmmoChange);
    
    // Переключатель ручного режима
    elements.manualModeToggle.addEventListener('change', toggleManualMode);
    
    // Инпуты ручного ввода оружия
    elements.manualDamage.addEventListener('input', (e) => {
        state.manualStats.damage = parseFloat(e.target.value) || 0;
        calculateResults();
    });
    elements.manualRPM.addEventListener('input', (e) => {
        state.manualStats.rpm = parseFloat(e.target.value) || 0;
        calculateResults();
    });
    elements.manualHeadshot.addEventListener('input', (e) => {
        state.manualStats.headshot = parseFloat(e.target.value) || 1;
        calculateResults();
    });
    
    // Инпуты ручного ввода патронов
    elements.manualAP.addEventListener('input', (e) => {
        let val = parseFloat(e.target.value) || 0;
        if (val > 100) val = 100; // Ограничение макс пробития
        state.manualAmmoStats.penetration = val;
        calculateResults();
    });
    elements.manualDamageMod.addEventListener('input', (e) => {
        state.manualAmmoStats.damageMod = parseFloat(e.target.value) || 100;
        calculateResults();
    });
    
    // Инпуты цели
    elements.targetArmor.addEventListener('input', (e) => {
        state.targetArmor = Math.max(0, parseFloat(e.target.value) || 0);
        calculateResults();
    });
    elements.targetHP.addEventListener('input', (e) => {
        state.targetHP = Math.max(1, parseFloat(e.target.value) || 100);
        calculateResults();
    });
    
    // Кнопка сброса
    elements.resetBtn.addEventListener('click', resetCalculator);
    
    // Мобильное меню
    if (elements.burger && elements.mobileMenu) {
        elements.burger.addEventListener('click', () => {
            elements.burger.classList.toggle('active');
            elements.mobileMenu.classList.toggle('active');
        });
    }
}

// ===== ОБРАБОТЧИКИ СОБЫТИЙ =====

function toggleManualMode(e) {
    state.manualMode = e.target.checked;
    
    if (state.manualMode) {
        // Включаем ручной режим
        elements.weaponSelect.disabled = true;
        elements.ammoSelect.disabled = true;
        
        elements.weaponInfo.style.display = 'none';
        elements.manualFields.style.display = 'grid';
        
        elements.ammoInfo.style.display = 'none';
        elements.manualAmmo.style.display = 'block';
        elements.weaponStats.style.display = 'none';
        
        // Сбрасываем выбранное, чтобы считать по ручным полям
        elements.weaponSelect.value = "";
        elements.ammoSelect.innerHTML = '<option value="">Ручной ввод патронов...</option>';
        elements.ammoSelect.disabled = true;
        
        state.selectedWeapon = null;
        state.selectedAmmo = null;
    } else {
        // Выключаем ручной режим
        elements.weaponSelect.disabled = false;
        elements.weaponInfo.style.display = 'block';
        elements.manualFields.style.display = 'none';
        
        elements.manualAmmo.style.display = 'none';
        
        // Восстанавливаем состояние селектов
        if (state.selectedWeapon) {
            updateAmmoOptions();
            if (state.selectedAmmo) {
                elements.ammoInfo.style.display = 'block';
            }
            elements.weaponStats.style.display = 'block';
        } else {
            elements.ammoSelect.innerHTML = '<option value="">Сначала выберите оружие...</option>';
            elements.ammoSelect.disabled = true;
        }
    }
    
    calculateResults();
}

function handleWeaponChange(e) {
    const weaponId = e.target.value;
    
    if (!weaponId) {
        state.selectedWeapon = null;
        state.selectedAmmo = null;
        renderWeaponInfo();
        elements.ammoSelect.innerHTML = '<option value="">Сначала выберите оружие...</option>';
        elements.ammoSelect.disabled = true;
        elements.ammoInfo.style.display = 'none';
        elements.weaponStats.style.display = 'none';
        calculateResults();
        return;
    }
    
    state.selectedWeapon = getWeaponById(weaponId);
    state.selectedAmmo = null; // Сбрасываем патрон при смене оружия
    
    renderWeaponInfo();
    renderWeaponStats();
    updateAmmoOptions();
    calculateResults();
}

function handleAmmoChange(e) {
    const ammoId = e.target.value;
    
    if (!ammoId) {
        state.selectedAmmo = null;
        elements.ammoInfo.style.display = 'none';
        calculateResults();
        return;
    }
    
    state.selectedAmmo = getAmmoById(ammoId);
    renderAmmoInfo();
    calculateResults();
}

function updateAmmoOptions() {
    elements.ammoSelect.innerHTML = '<option value="">Выберите патрон...</option>';
    
    if (!state.selectedWeapon) return;
    
    const availableAmmo = getAmmoForWeapon(state.selectedWeapon);
    
    availableAmmo.forEach(ammo => {
        const option = document.createElement('option');
        option.value = ammo.id;
        option.textContent = ammo.name;
        elements.ammoSelect.appendChild(option);
    });
    
    elements.ammoSelect.disabled = false;
}

// ===== РЕНДЕРИНГ ИНФОРМАЦИИ =====

function renderWeaponInfo() {
    if (!state.selectedWeapon) {
        elements.weaponInfo.innerHTML = `
            <div class="weapon-info__placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                <span>Выберите оружие или введите характеристики вручную</span>
            </div>`;
        return;
    }
    
    const w = state.selectedWeapon;
    const catName = WEAPON_CATEGORIES[w.category]?.name || w.category;
    
    elements.weaponInfo.innerHTML = `
        <div class="weapon-details">
            <div class="weapon-details__header">
                <span class="weapon-details__name">${w.name}</span>
                <span class="weapon-details__rarity rarity--${w.rarity}">${w.rarityName}</span>
            </div>
            <div class="weapon-details__stats">
                <div class="weapon-details__stat">
                    <span class="weapon-details__stat-name">Урон</span>
                    <span class="weapon-details__stat-value weapon-details__stat-value--highlight">${w.damage}</span>
                </div>
                <div class="weapon-details__stat">
                    <span class="weapon-details__stat-name">Скорострельность</span>
                    <span class="weapon-details__stat-value">${w.rpm} в/м</span>
                </div>
                <div class="weapon-details__stat">
                    <span class="weapon-details__stat-name">Множитель в голову</span>
                    <span class="weapon-details__stat-value">x${w.headshotMult}</span>
                </div>
                <div class="weapon-details__stat">
                    <span class="weapon-details__stat-name">Дистанция</span>
                    <span class="weapon-details__stat-value">${w.effectiveRange} м</span>
                </div>
            </div>
        </div>`;
}

function renderWeaponStats() {
    if (!state.selectedWeapon || !state.selectedWeapon.stats) {
        elements.weaponStats.style.display = 'none';
        return;
    }
    
    const stats = state.selectedWeapon.stats;
    let html = '';
    
    // Словарь названий статов (можно вынести в data.js если понадобится в других местах)
    const statNames = {
        verticalRecoil: 'Вертикальная отдача',
        horizontalRecoil: 'Горизонтальная отдача',
        hipSpread: 'Разброс от бедра',
        adsSpread: 'Разброс в прицеле',
        moveSpeed: 'Скорость бега'
    };
    
    const statUnits = {
        verticalRecoil: '°',
        horizontalRecoil: '°',
        moveSpeed: '%'
    };
    
    Object.entries(stats).forEach(([key, value]) => {
        const name = statNames[key] || key;
        const unit = statUnits[key] || '';
        const displayValue = (value > 0 && key === 'moveSpeed') ? `+${value}` : value;
        
        html += `
            <div class="weapon-stat-row">
                <span class="weapon-stat-row__name">${name}</span>
                <span class="weapon-stat-row__value">${displayValue}${unit}</span>
            </div>
        `;
    });
    
    elements.weaponStatsGrid.innerHTML = html;
    elements.weaponStats.style.display = 'block';
}

function renderAmmoInfo() {
    if (!state.selectedAmmo) {
        elements.ammoInfo.style.display = 'none';
        return;
    }
    
    const a = state.selectedAmmo;
    const dmgMod = Math.round(a.damageModifier * 100);
    const modClass = dmgMod > 100 ? 'ammo-info__value--positive' : (dmgMod < 100 ? 'ammo-info__value--negative' : '');
    
    elements.ammoInfo.innerHTML = `
        <div class="ammo-info__row">
            <span class="ammo-info__label">Тип</span>
            <span class="ammo-info__value">${a.description || a.type}</span>
        </div>
        <div class="ammo-info__row">
            <span class="ammo-info__label">Бронепробитие</span>
            <span class="ammo-info__value ammo-info__value--warning">${a.armorPenetration}%</span>
        </div>
        <div class="ammo-info__row">
            <span class="ammo-info__label">Модификатор урона</span>
            <span class="ammo-info__value ${modClass}">${dmgMod}%</span>
        </div>
    `;
    elements.ammoInfo.style.display = 'block';
}

// ===== РАСЧЁТЫ =====

function calculateResults() {
    let damage, rpm, headshotMult, ap, damageMod;
    
    // 1. Получаем параметры оружия и патронов
    if (state.manualMode) {
        damage = state.manualStats.damage;
        rpm = state.manualStats.rpm;
        headshotMult = state.manualStats.headshot;
        ap = state.manualAmmoStats.penetration;
        damageMod = state.manualAmmoStats.damageMod / 100;
    } else {
        if (!state.selectedWeapon) {
            updateUIWithZeros();
            return;
        }
        
        damage = state.selectedWeapon.damage;
        rpm = state.selectedWeapon.rpm;
        headshotMult = state.selectedWeapon.headshotMult;
        
        if (state.selectedAmmo) {
            ap = state.selectedAmmo.armorPenetration;
            damageMod = state.selectedAmmo.damageModifier;
        } else {
            // Если патрон не выбран, считаем как "стандарт" (0 пробития, 100% урона)
            ap = 0;
            damageMod = 1.0;
        }
    }
    
    // 2. Расчёт защиты цели
    const protection = calculateArmorProtection(state.targetArmor); // % защиты от пулестойкости
    const effectiveProtection = Math.max(0, protection - ap); // Формула балансера: Защита% - Бронебойность%
    
    // 3. Расчёт урона
    const baseShotDamage = damage * damageMod; // Базовый урон * модификатор патрона
    
    // Урон по телу (учитываем защиту)
    // Формула: Урон * (1 - процент_эффективной_защиты/100)
    const bodyShotDamage = baseShotDamage * (1 - (effectiveProtection / 100));
    
    // Урон в голову (сначала множитель, потом броня - порядок математически не важен при умножении)
    const headShotDamageRaw = baseShotDamage * headshotMult;
    const headShotDamageArmor = headShotDamageRaw * (1 - (effectiveProtection / 100));
    
    // 4. Расчёт DPS
    const dpsBodyVal = calculateDPS(bodyShotDamage, rpm);
    const dpsHeadVal = calculateDPS(headShotDamageArmor, rpm);
    
    // 5. Расчёт TTK
    const ttkBodyVal = calculateTTK(bodyShotDamage, rpm, state.targetHP);
    const ttkHeadVal = calculateTTK(headShotDamageArmor, rpm, state.targetHP);
    
    // Вычисляем количество выстрелов для TTK
    const shotsBodyVal = bodyShotDamage > 0 ? Math.ceil(state.targetHP / bodyShotDamage) : '∞';
    const shotsHeadVal = headShotDamageArmor > 0 ? Math.ceil(state.targetHP / headShotDamageArmor) : '∞';
    
    // 6. Обновление UI
    updateUI({
        protection,
        effectiveProtection,
        baseShotDamage,
        bodyShotDamage,
        headShotDamageRaw,
        headShotDamageArmor,
        dpsBodyVal,
        dpsHeadVal,
        ttkBodyVal,
        ttkHeadVal,
        shotsBodyVal,
        shotsHeadVal
    });
}

function updateUI(data) {
    // Защита
    elements.protectionPercent.textContent = data.protection.toFixed(2) + '%';
    elements.effectiveProtection.textContent = data.effectiveProtection.toFixed(2) + '%';
    
    // Урон
    elements.baseDamage.textContent = data.baseShotDamage.toFixed(1);
    elements.armorDamage.textContent = data.bodyShotDamage.toFixed(1);
    elements.headshotDamage.textContent = data.headShotDamageRaw.toFixed(1);
    elements.headshotArmorDamage.textContent = data.headShotDamageArmor.toFixed(1);
    
    // DPS
    elements.dpsBody.textContent = Math.round(data.dpsBodyVal);
    elements.dpsHead.textContent = Math.round(data.dpsHeadVal);
    
    // TTK
    elements.ttkBody.textContent = data.ttkBodyVal === Infinity ? '∞' : data.ttkBodyVal.toFixed(2) + ' сек';
    elements.shotsBody.textContent = data.shotsBodyVal + ' выстр.';
    
    elements.ttkHead.textContent = data.ttkHeadVal === Infinity ? '∞' : data.ttkHeadVal.toFixed(2) + ' сек';
    elements.shotsHead.textContent = data.shotsHeadVal + ' выстр.';
}

function updateUIWithZeros() {
    const zeros = {
        protection: 0,
        effectiveProtection: 0,
        baseShotDamage: 0,
        bodyShotDamage: 0,
        headShotDamageRaw: 0,
        headShotDamageArmor: 0,
        dpsBodyVal: 0,
        dpsHeadVal: 0,
        ttkBodyVal: 0,
        ttkHeadVal: 0,
        shotsBodyVal: 0,
        shotsHeadVal: 0
    };
    updateUI(zeros);
}

function resetCalculator() {
    state.selectedWeapon = null;
    state.selectedAmmo = null;
    state.manualMode = false;
    state.targetArmor = 0;
    state.targetHP = 100;
    
    elements.weaponSelect.value = '';
    elements.weaponSelect.disabled = false;
    elements.ammoSelect.value = '';
    elements.ammoSelect.disabled = true;
    elements.manualModeToggle.checked = false;
    elements.targetArmor.value = 0;
    elements.targetHP.value = 100;
    
    elements.manualDamage.value = 41;
    elements.manualRPM.value = 600;
    elements.manualHeadshot.value = 1.25;
    
    toggleManualMode({ target: { checked: false } }); // Reset UI state
    calculateResults();
}

function initScrollEffects() {
    window.addEventListener('scroll', () => {
        elements.header.style.background = window.scrollY > 50 
            ? 'rgba(10, 10, 11, 0.98)' 
            : 'rgba(10, 10, 11, 0.9)';
        elements.scrollTop.classList.toggle('visible', window.scrollY > 500);
    });
    
    elements.scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
// ============================================================
// PROJECT CATACLYSM WIKI — ЕДИНАЯ БАЗА ДАННЫХ
// ============================================================

// ============== ПРЕСЕТЫ ЗАТОЧКИ ==============
const ENHANCEMENT_PRESETS = {
    // Комбинированная броня (макс. +29.95)
    combined: {
        maxLevel: 15,
        bonuses: {
            bulletResistance: [0, 0.9, 1.8, 2.7, 3.59, 6.29, 7.79, 8.98, 10.48, 11.98, 15.87, 17.97, 19.77, 21.86, 23.96, 29.95]
        }
    },
    // Боевая броня (макс. +60)
    combat: {
        maxLevel: 15,
        bonuses: {
            bulletResistance: [0, 1.8, 3.6, 5.4, 7.2, 12.6, 15.6, 18, 21, 24, 31.8, 36, 39.6, 43.8, 48, 60]
        }
    },
    // Экзоскелеты (макс. +70)
    exoskeleton: {
        maxLevel: 15,
        bonuses: {
            bulletResistance: [0, 2.1, 4.2, 6.3, 8.4, 14.7, 18.2, 21, 24.5, 28, 37.1, 42, 46.2, 51.1, 56, 70]
        }
    },
    // Сверхтяжёлая броня (макс. +160) — Панцирь
    superHeavy: {
        maxLevel: 15,
        bonuses: {
            bulletResistance: [0, 4.8, 9.6, 14.4, 19.2, 33.6, 41.6, 48, 56, 64, 84.8, 96, 105.6, 116.8, 128, 160]
        }
    },
    // Научная броня (макс. +15)
    scientific: {
        maxLevel: 15,
        bonuses: {
            bulletResistance: [0, 0.45, 0.9, 1.35, 1.8, 3.15, 3.9, 4.5, 5.25, 6, 7.95, 9, 9.9, 10.95, 12, 15]
        }
    },
    // Легендарная броня (макс. +80)
    legendary: {
        maxLevel: 15,
        bonuses: {
            bulletResistance: [0, 2.4, 4.8, 7.2, 9.6, 16.8, 20.8, 24, 28, 32, 42.4, 48, 52.8, 58.4, 64, 80]
        }
    }
};

// ============== КАТЕГОРИИ АРТЕФАКТОВ ==============
const ARTIFACT_CATEGORIES = {
    gravity: {
        id: 'gravity',
        name: 'Гравитационные',
        nameShort: 'Грави',
        color: '#8b5cf6',
        icon: '◆',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0 0 20"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M2 12h20"/>
        </svg>`
    },
    chemical: {
        id: 'chemical',
        name: 'Химические',
        nameShort: 'Хим',
        color: '#10b981',
        icon: '◆',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>
        </svg>`
    },
    electric: {
        id: 'electric',
        name: 'Электрические',
        nameShort: 'Электро',
        color: '#3b82f6',
        icon: '◆',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
    },
    thermal: {
        id: 'thermal',
        name: 'Термические',
        nameShort: 'Терм',
        color: '#ef4444',
        icon: '◆',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v10l3 3"/><circle cx="12" cy="14" r="8"/></svg>`
    },
    unique: {
        id: 'unique',
        name: 'Уникальные',
        nameShort: 'Уник',
        color: '#a855f7',
        icon: '★',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
    },
    frost: {
        id: 'frost',
        name: 'Морозные',
        nameShort: 'Мороз',
        color: '#38bdf8',
        icon: '❄',
        isEvent: true,
        eventName: 'Зимний ивент',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"/><path d="M2 12h20"/><path d="M4.93 4.93l14.14 14.14"/><path d="M19.07 4.93L4.93 19.07"/><circle cx="12" cy="12" r="4"/></svg>`
    }
};

// ============== КОНТЕЙНЕРЫ ==============
const CONTAINERS = [
    {
        id: 'container_x1',
        name: 'Самодельный контейнер X1',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'standard',
        typeName: 'Стандартный',
        slots: 1,
        stats: { maxStamina: -8.00 },
        shielding: { radiation: -1.00 }
    },
    {
        id: 'container_x2',
        name: 'Самодельный контейнер X2',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'bulky',
        typeName: 'Громоздкий',
        slots: 2,
        stats: { maxStamina: -15.00, moveSpeed: -1.00 },
        shielding: { radiation: -2.00 }
    },
    {
        id: 'pka_2',
        name: 'ПКА-2',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'compact',
        typeName: 'Компактный',
        slots: 2,
        stats: {},
        shielding: { radiation: -3.00 }
    },
    {
        id: 'pka_3',
        name: 'ПКА-3',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'standard',
        typeName: 'Стандартный',
        slots: 3,
        stats: { maxStamina: -5.00 },
        shielding: { radiation: -2.00 }
    },
    {
        id: 'pka_4',
        name: 'ПКА-4',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'standard',
        typeName: 'Стандартный',
        slots: 4,
        stats: { maxStamina: -5.00 },
        shielding: { radiation: -2.50 }
    },
    {
        id: 'container_radiy',
        name: 'Контейнер "Радий"',
        rarity: 'rare',
        rarityName: 'Раритетное',
        type: 'standard',
        typeName: 'Стандартный',
        slots: 5,
        stats: { maxStamina: -10.00 },
        shielding: { radiation: -1.00 }
    },
    {
        id: 'pka_4m',
        name: 'ПКА-4М',
        rarity: 'unique',
        rarityName: 'Уникальное',
        type: 'compact',
        typeName: 'Компактный',
        slots: 4,
        stats: {},
        shielding: { radiation: -6.00 }
    },
    {
        id: 'container_bariy',
        name: 'Контейнер "Барий"',
        rarity: 'unique',
        rarityName: 'Уникальное',
        type: 'spacious',
        typeName: 'Вместительный',
        slots: 6,
        stats: { maxStamina: -20.00 },
        shielding: {}
    }
];

// ============== БРОНЯ ==============
const ARMORS = [
    // ===== ЛЁГКИЕ =====
    {
        id: 'leather_jacket',
        name: 'Кожаная куртка',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Лёгкие',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 20,
            bioProtection: 20,
            heatResistance: 14,
            chemResistance: 14,
            electroResistance: 14,
            impactResistance: 12,
            tearProtection: 16,
            bulletResistance: 24,
            maxWeight: 5.00
        },
        enhancement: null
    },
    {
        id: 'anomaly_jacket',
        name: 'Аномальная кожанка',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Лёгкие',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 20,
            bioProtection: 20,
            heatResistance: 14,
            chemResistance: 18,
            electroResistance: 14,
            impactResistance: 12,
            tearProtection: 16,
            bulletResistance: 24,
            bleeding: -0.25,
            regeneration: 0.75,
            moveSpeed: 2.00,
            maxWeight: 5.00
        },
        enhancement: null
    },
    {
        id: 'chainmail_jacket',
        name: 'Кольчужная куртка',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Лёгкие',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 20,
            bioProtection: 20,
            heatResistance: 9,
            chemResistance: 9,
            electroResistance: 9,
            impactResistance: 16,
            tearProtection: 36,
            bulletResistance: 32,
            moveSpeed: 1.00,
            maxWeight: 5.00
        },
        enhancement: null
    },

    // ===== НАУЧНЫЕ =====
    {
        id: 'otmychka',
        name: 'Кожаная куртка «Отмычка»',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Научные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 100,
            bioProtection: 60,
            thermalProtection: 20,
            heatResistance: 20,
            chemResistance: 20,
            electroResistance: 20,
            impactResistance: 12,
            tearProtection: 16,
            bulletResistance: 24,
            maxStamina: -3.00,
            maxWeight: 10.00
        },
        enhancement: ENHANCEMENT_PRESETS.scientific
    },
    {
        id: 'voshod',
        name: 'Научный комбинезон «Восход»',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Научные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 200,
            bioProtection: 100,
            thermalProtection: 100,
            psiProtection: 60,
            heatResistance: 56,
            chemResistance: 56,
            electroResistance: 56,
            impactResistance: 62,
            tearProtection: 58,
            bulletResistance: 56,
            maxStamina: -5.00,
            maxWeight: 20.00
        },
        enhancement: ENHANCEMENT_PRESETS.scientific
    },
    {
        id: 'fobos',
        name: 'Научный комбинезон «Фобос»',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Научные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 200,
            bioProtection: 200,
            thermalProtection: 100,
            psiProtection: 100,
            heatResistance: 90,
            chemResistance: 90,
            electroResistance: 90,
            impactResistance: 64,
            tearProtection: 60,
            bulletResistance: 72,
            maxStamina: -8.00,
            maxWeight: 24.00
        },
        enhancement: ENHANCEMENT_PRESETS.scientific
    },
    {
        id: 'ssp99_ecolog',
        name: 'Комбинезон ССП-99 «Эколог»',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Научные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 300,
            bioProtection: 200,
            thermalProtection: 200,
            psiProtection: 100,
            heatResistance: 112,
            chemResistance: 112,
            electroResistance: 112,
            impactResistance: 66,
            tearProtection: 64,
            bulletResistance: 90,
            maxStamina: -10.00,
            maxWeight: 26.00
        },
        enhancement: ENHANCEMENT_PRESETS.scientific
    },
    {
        id: 'ssp99_almaz',
        name: 'Комбинезон ССП-99 «Алмаз»',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Научные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 400,
            bioProtection: 300,
            thermalProtection: 300,
            psiProtection: 200,
            heatResistance: 140,
            chemResistance: 140,
            electroResistance: 140,
            impactResistance: 68,
            tearProtection: 70,
            bulletResistance: 112,
            maxStamina: -12.00,
            maxWeight: 30.00
        },
        enhancement: ENHANCEMENT_PRESETS.scientific
    },
    {
        id: 'ssp99m_emerald',
        name: 'Комбинезон ССП-99М «Изумруд»',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Научные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 300,
            bioProtection: 400,
            thermalProtection: 300,
            psiProtection: 200,
            heatResistance: 140,
            chemResistance: 1000,
            electroResistance: 140,
            impactResistance: 68,
            tearProtection: 70,
            bulletResistance: 112,
            maxStamina: -12.00,
            maxWeight: 30.00
        },
        enhancement: ENHANCEMENT_PRESETS.scientific
    },
    {
        id: 'ssp99m_topaz',
        name: 'Комбинезон ССП-99М «Топаз»',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Научные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 300,
            bioProtection: 300,
            thermalProtection: 400,
            psiProtection: 200,
            heatResistance: 1000,
            chemResistance: 140,
            electroResistance: 140,
            impactResistance: 68,
            tearProtection: 70,
            bulletResistance: 112,
            maxStamina: -12.00,
            maxWeight: 30.00
        },
        enhancement: ENHANCEMENT_PRESETS.scientific
    },
    {
        id: 'ssp99m_sapphire',
        name: 'Комбинезон ССП-99М «Сапфир»',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Научные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 300,
            bioProtection: 300,
            thermalProtection: 300,
            psiProtection: 400,
            heatResistance: 140,
            chemResistance: 140,
            electroResistance: 1000,
            impactResistance: 68,
            tearProtection: 70,
            bulletResistance: 112,
            maxStamina: -12.00,
            maxWeight: 30.00
        },
        enhancement: ENHANCEMENT_PRESETS.scientific
    },
    {
        id: 'ssp99m_ruby',
        name: 'Комбинезон ССП-99М «Рубин»',
        rarity: 'rare',
        rarityName: 'Раритетное',
        type: 'Научные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 360,
            bioProtection: 360,
            thermalProtection: 340,
            psiProtection: 300,
            heatResistance: 210,
            chemResistance: 210,
            electroResistance: 210,
            impactResistance: 72,
            tearProtection: 98,
            bulletResistance: 178,
            bleeding: -3.00,
            regeneration: 2.00,
            maxStamina: -15.00,
            maxWeight: 40.00
        },
        enhancement: ENHANCEMENT_PRESETS.scientific
    },

    // ===== БОЕВЫЕ =====
    {
        id: 'rat_cloak',
        name: 'Плащ из крысиных шкур',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 100,
            bioProtection: 20,
            heatResistance: 14,
            chemResistance: 14,
            electroResistance: 14,
            impactResistance: 12,
            tearProtection: 16,
            bulletResistance: 24,
            bleeding: -1.00,
            saturation: 0.60,
            regeneration: 0.50,
            moveSpeed: 5.00,
            maxWeight: 7.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'brown_leather_cloak',
        name: 'Коричневый кожаный плащ',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 20,
            bioProtection: 20,
            heatResistance: 12,
            chemResistance: 8,
            electroResistance: 32,
            impactResistance: 48,
            tearProtection: 92,
            bulletResistance: 54,
            maxWeight: 8.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'green_canvas_cloak',
        name: 'Зелёный брезентовый плащ',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 20,
            bioProtection: 20,
            heatResistance: 12,
            chemResistance: 8,
            electroResistance: 32,
            impactResistance: 86,
            tearProtection: 112,
            bulletResistance: 48,
            bleeding: -0.25,
            maxWeight: 12.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'psz7',
        name: 'Армейский бронежилет ПСЗ-7',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            heatResistance: 10,
            chemResistance: 10,
            electroResistance: 10,
            impactResistance: 72,
            tearProtection: 88,
            bulletResistance: 92,
            maxWeight: 12.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'psz7b',
        name: 'Армейский бронежилет ПСЗ-7Б',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 40,
            bioProtection: 40,
            heatResistance: 10,
            chemResistance: 10,
            electroResistance: 10,
            impactResistance: 86,
            tearProtection: 92,
            bulletResistance: 112,
            maxWeight: 12.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'shakal',
        name: 'Бронекостюм «Шакал»',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            impactResistance: 68,
            tearProtection: 84,
            bulletResistance: 72,
            maxWeight: 8.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'ps5',
        name: 'Бронекостюм ПС5',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 60,
            bioProtection: 60,
            thermalProtection: 40,
            heatResistance: 34,
            chemResistance: 26,
            electroResistance: 16,
            impactResistance: 92,
            tearProtection: 104,
            bulletResistance: 134,
            maxStamina: -10.00,
            maxWeight: 12.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'berill5m',
        name: 'Бронекостюм «Берилл-5М»',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 100,
            bioProtection: 100,
            thermalProtection: 60,
            heatResistance: 38,
            chemResistance: 28,
            electroResistance: 20,
            impactResistance: 108,
            tearProtection: 118,
            bulletResistance: 158,
            maxStamina: -10.00,
            maxWeight: 12.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'viking',
        name: 'Бронекостюм «Викинг»',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 200,
            bioProtection: 100,
            thermalProtection: 100,
            psiProtection: 100,
            heatResistance: 80,
            chemResistance: 80,
            electroResistance: 80,
            impactResistance: 82,
            tearProtection: 98,
            bulletResistance: 156,
            maxWeight: 24.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'raider',
        name: 'Бронекостюм «Рейдер»',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 100,
            bioProtection: 100,
            heatResistance: 34,
            chemResistance: 26,
            electroResistance: 16,
            impactResistance: 80,
            tearProtection: 68,
            bulletResistance: 126,
            moveSpeed: 2.00,
            maxWeight: 12.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'healing_berill',
        name: 'Лечебный «Берилл-5М»',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 100,
            bioProtection: 100,
            thermalProtection: 60,
            heatResistance: 38,
            chemResistance: 28,
            electroResistance: 20,
            impactResistance: 98,
            tearProtection: 102,
            bulletResistance: 158,
            bleeding: -3.00,
            regeneration: 1.00,
            maxStamina: -5.00,
            maxWeight: 12.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'psz9',
        name: 'Бронекостюм «ПСЗ-9»',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 160,
            bioProtection: 100,
            thermalProtection: 100,
            psiProtection: 60,
            heatResistance: 72,
            chemResistance: 38,
            electroResistance: 32,
            impactResistance: 126,
            tearProtection: 142,
            bulletResistance: 184,
            maxStamina: -20.00,
            maxWeight: 20.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'skat9m',
        name: 'Бронекостюм «СКАТ-9М»',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 200,
            bioProtection: 160,
            thermalProtection: 100,
            psiProtection: 100,
            heatResistance: 86,
            chemResistance: 44,
            electroResistance: 38,
            impactResistance: 148,
            tearProtection: 168,
            bulletResistance: 232,
            maxStamina: -20.00,
            maxWeight: 24.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'bulat',
        name: 'Бронекостюм «Булат»',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 200,
            bioProtection: 200,
            thermalProtection: 200,
            psiProtection: 100,
            heatResistance: 80,
            chemResistance: 40,
            electroResistance: 35,
            impactResistance: 122,
            tearProtection: 110,
            bulletResistance: 252,
            maxStamina: -10.00,
            maxWeight: 24.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'skat10',
        name: 'Бронекостюм «СКАТ-10»',
        rarity: 'unique',
        rarityName: 'Уникальное',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 300,
            bioProtection: 300,
            thermalProtection: 200,
            psiProtection: 200,
            heatResistance: 110,
            chemResistance: 110,
            electroResistance: 110,
            impactResistance: 204,
            tearProtection: 232,
            bulletResistance: 312,
            bleeding: -0.50,
            maxStamina: -10.00,
            maxWeight: 30.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'heavy_voshod',
        name: 'Тяжелый бронекостюм «Восход»',
        rarity: 'unique',
        rarityName: 'Уникальное',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 200,
            bioProtection: 200,
            thermalProtection: 100,
            psiProtection: 200,
            heatResistance: 80,
            chemResistance: 80,
            electroResistance: 80,
            impactResistance: 182,
            tearProtection: 218,
            bulletResistance: 292,
            maxStamina: -30.00,
            maxWeight: 20.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'shturm',
        name: 'Тяжелый бронекостюм «Штурм»',
        rarity: 'unique',
        rarityName: 'Уникальное',
        type: 'Боевые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 240,
            bioProtection: 240,
            thermalProtection: 160,
            psiProtection: 200,
            heatResistance: 60,
            chemResistance: 60,
            electroResistance: 60,
            impactResistance: 232,
            tearProtection: 272,
            bulletResistance: 342,
            maxStamina: -30.00,
            maxWeight: 30.00
        },
        enhancement: ENHANCEMENT_PRESETS.combat
    },
    {
        id: 'pancir',
        name: 'Сверхтяжелый бронекостюм «Панцирь»',
        rarity: 'unique',
        rarityName: 'Уникальное',
        type: 'Боевые',
        containerTypes: ['standard', 'compact'],
        stats: {
            radiationProtection: 200,
            bioProtection: 200,
            thermalProtection: 100,
            psiProtection: 100,
            heatResistance: 42,
            chemResistance: 42,
            electroResistance: 42,
            impactResistance: 258,
            tearProtection: 356,
            bulletResistance: 512,
            maxStamina: -10.00,
            moveSpeed: -20.00,
            maxWeight: 60.00
        },
        enhancement: ENHANCEMENT_PRESETS.superHeavy
    },
    {
        id: 'exoskeleton',
        name: 'Экзоскелет',
        rarity: 'unique',
        rarityName: 'Уникальное',
        type: 'Боевые',
        containerTypes: ['standard', 'spacious', 'compact'],
        stats: {
            radiationProtection: 200,
            bioProtection: 200,
            thermalProtection: 100,
            psiProtection: 200,
            heatResistance: 80,
            chemResistance: 80,
            electroResistance: 80,
            impactResistance: 214,
            tearProtection: 252,
            bulletResistance: 348,
            maxStamina: 10.00,
            moveSpeed: -5.00,
            maxWeight: 60.00
        },
        enhancement: ENHANCEMENT_PRESETS.exoskeleton
    },
    {
        id: 'modified_exo',
        name: 'Модифицированный Экзоскелет',
        rarity: 'unique',
        rarityName: 'Уникальное',
        type: 'Боевые',
        containerTypes: ['standard', 'spacious', 'compact'],
        stats: {
            radiationProtection: 200,
            bioProtection: 200,
            thermalProtection: 100,
            psiProtection: 200,
            heatResistance: 100,
            chemResistance: 100,
            electroResistance: 100,
            impactResistance: 242,
            tearProtection: 312,
            bulletResistance: 356,
            maxStamina: 10.00,
            maxWeight: 70.00
        },
        enhancement: ENHANCEMENT_PRESETS.exoskeleton
    },

    // ===== КОМБИНИРОВАННЫЕ =====
    {
        id: 'chn1',
        name: 'Бронежилет ЧН-1',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 60,
            thermalProtection: 40,
            heatResistance: 32,
            chemResistance: 30,
            electroResistance: 28,
            impactResistance: 52,
            tearProtection: 66,
            bulletResistance: 62,
            moveSpeed: 1.00,
            maxWeight: 14.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'chn16',
        name: 'Бронежилет ЧН-16',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 60,
            thermalProtection: 60,
            heatResistance: 44,
            chemResistance: 44,
            electroResistance: 32,
            impactResistance: 64,
            tearProtection: 76,
            bulletResistance: 82,
            moveSpeed: 1.00,
            maxWeight: 16.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'zarya',
        name: 'Комбинезон «Заря»',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 100,
            bioProtection: 60,
            thermalProtection: 60,
            heatResistance: 42,
            chemResistance: 46,
            electroResistance: 34,
            impactResistance: 70,
            tearProtection: 84,
            bulletResistance: 72,
            maxWeight: 10.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'chn2a',
        name: 'Бронежилет ЧН-2а',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 100,
            bioProtection: 100,
            thermalProtection: 100,
            heatResistance: 40,
            chemResistance: 54,
            electroResistance: 42,
            impactResistance: 72,
            tearProtection: 86,
            bulletResistance: 132,
            moveSpeed: 2.00,
            maxWeight: 20.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'zarya2',
        name: 'Комбинезон «Заря-2»',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 160,
            bioProtection: 100,
            thermalProtection: 100,
            heatResistance: 40,
            chemResistance: 52,
            electroResistance: 30,
            impactResistance: 80,
            tearProtection: 92,
            bulletResistance: 104,
            maxStamina: -5.00,
            maxWeight: 14.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'skitalec',
        name: 'Комбинезон «Скиталец»',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 120,
            bioProtection: 120,
            thermalProtection: 80,
            heatResistance: 10,
            chemResistance: 58,
            electroResistance: 46,
            impactResistance: 28,
            tearProtection: 32,
            bulletResistance: 62,
            maxStamina: 10.00,
            moveSpeed: 6.00,
            maxWeight: 16.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'veteran1',
        name: 'Комбинезон «Ветеран-1»',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 120,
            bioProtection: 100,
            thermalProtection: 100,
            heatResistance: 40,
            chemResistance: 52,
            electroResistance: 30,
            impactResistance: 76,
            tearProtection: 86,
            bulletResistance: 86,
            maxWeight: 12.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'borey',
        name: 'Комбинезон «Борей»',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 160,
            bioProtection: 160,
            thermalProtection: 120,
            frostProtection: 100,
            heatResistance: 56,
            chemResistance: 58,
            electroResistance: 62,
            impactResistance: 76,
            tearProtection: 88,
            bulletResistance: 108,
            moveSpeed: 3.00,
            maxWeight: 35.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'tourist',
        name: 'Комбинезон туриста',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 100,
            bioProtection: 100,
            thermalProtection: 100,
            heatResistance: 42,
            chemResistance: 46,
            electroResistance: 34,
            impactResistance: 74,
            tearProtection: 86,
            bulletResistance: 92,
            moveSpeed: 2.00,
            maxWeight: 30.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'seva',
        name: 'Комбинезон «Сева»',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 300,
            bioProtection: 300,
            thermalProtection: 200,
            psiProtection: 200,
            heatResistance: 110,
            chemResistance: 110,
            electroResistance: 110,
            impactResistance: 102,
            tearProtection: 108,
            bulletResistance: 168,
            maxStamina: -10.00,
            maxWeight: 26.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'chn26',
        name: 'Бронежилет ЧН-2б',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 200,
            bioProtection: 200,
            thermalProtection: 100,
            psiProtection: 100,
            heatResistance: 60,
            chemResistance: 74,
            electroResistance: 62,
            impactResistance: 84,
            tearProtection: 90,
            bulletResistance: 172,
            moveSpeed: 2.00,
            maxWeight: 22.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'zarya3',
        name: 'Комбинезон «Заря-3»',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 200,
            bioProtection: 160,
            thermalProtection: 140,
            psiProtection: 100,
            heatResistance: 80,
            chemResistance: 80,
            electroResistance: 80,
            impactResistance: 90,
            tearProtection: 102,
            bulletResistance: 142,
            maxStamina: -5.00,
            maxWeight: 16.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'chn3a',
        name: 'Бронежилет ЧН-3а',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 300,
            bioProtection: 200,
            thermalProtection: 200,
            psiProtection: 160,
            heatResistance: 100,
            chemResistance: 100,
            electroResistance: 100,
            impactResistance: 98,
            tearProtection: 96,
            bulletResistance: 208,
            moveSpeed: 2.00,
            maxWeight: 24.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'commando',
        name: 'Бронекомбинезон «Commando»',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 300,
            bioProtection: 300,
            thermalProtection: 200,
            psiProtection: 200,
            heatResistance: 140,
            chemResistance: 140,
            electroResistance: 140,
            impactResistance: 116,
            tearProtection: 124,
            bulletResistance: 204,
            maxWeight: 32.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'makeshift_exo',
        name: 'Кустарный экзоскелет',
        rarity: 'rare',
        rarityName: 'Раритетное',
        type: 'Комбинированные',
        containerTypes: ['standard', 'spacious', 'compact'],
        stats: {
            radiationProtection: 240,
            bioProtection: 300,
            thermalProtection: 160,
            psiProtection: 200,
            heatResistance: 84,
            chemResistance: 76,
            electroResistance: 52,
            impactResistance: 208,
            tearProtection: 212,
            bulletResistance: 292,
            maxStamina: 5.00,
            moveSpeed: -4.00,
            maxWeight: 50.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'pereval',
        name: 'Комбинезон «Перевал»',
        rarity: 'rare',
        rarityName: 'Раритетное',
        type: 'Комбинированные',
        containerTypes: ['standard', 'spacious', 'compact'],
        stats: {
            radiationProtection: 300,
            bioProtection: 300,
            thermalProtection: 200,
            psiProtection: 200,
            heatResistance: 64,
            chemResistance: 78,
            electroResistance: 72,
            impactResistance: 154,
            tearProtection: 168,
            bulletResistance: 192,
            maxStamina: -5.00,
            moveSpeed: -1.00,
            maxWeight: 40.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'chn36',
        name: 'Тяжелый бронекостюм ЧН-3б',
        rarity: 'unique',
        rarityName: 'Уникальное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 300,
            bioProtection: 300,
            thermalProtection: 200,
            psiProtection: 300,
            heatResistance: 118,
            chemResistance: 120,
            electroResistance: 40,
            impactResistance: 182,
            tearProtection: 176,
            bulletResistance: 302,
            moveSpeed: 1.00,
            maxWeight: 20.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'pokrov',
        name: 'Бронекостюм «Покров»',
        rarity: 'unique',
        rarityName: 'Уникальное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 300,
            bioProtection: 300,
            thermalProtection: 300,
            psiProtection: 300,
            heatResistance: 180,
            chemResistance: 210,
            electroResistance: 180,
            impactResistance: 106,
            tearProtection: 118,
            bulletResistance: 272,
            bleeding: -1.00,
            maxWeight: 50.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'prorok',
        name: 'Комбинезон «Пророк»',
        rarity: 'rare',
        rarityName: 'Раритетное',
        type: 'Комбинированные',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 300,
            bioProtection: 200,
            thermalProtection: 200,
            psiProtection: 200,
            heatResistance: 86,
            chemResistance: 84,
            electroResistance: 88,
            impactResistance: 144,
            tearProtection: 172,
            bulletResistance: 232,
            bleeding: -0.50,
            regeneration: 1.00,
            moveSpeed: 2.00,
            maxWeight: 34.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'yggdrasil',
        name: 'Экзоскелет «Иггдрасиль»',
        rarity: 'unique',
        rarityName: 'Уникальное',
        type: 'Комбинированные',
        containerTypes: ['standard', 'spacious', 'compact'],
        stats: {
            radiationProtection: 300,
            bioProtection: 300,
            thermalProtection: 160,
            frostProtection: 200,
            psiProtection: 200,
            heatResistance: 104,
            chemResistance: 96,
            electroResistance: 84,
            impactResistance: 142,
            tearProtection: 214,
            bulletResistance: 318,
            bleeding: -2.00,
            maxStamina: 10.00,
            regeneration: 1.00,
            moveSpeed: -3.00,
            maxWeight: 50.00
        },
        enhancement: ENHANCEMENT_PRESETS.combined
    },
    {
        id: 'commando_exo',
        name: 'Сверхпрочный экзоскелет «Commando»',
        rarity: 'legendary',
        rarityName: 'Легендарное',
        type: 'Комбинированные',
        containerTypes: ['standard', 'spacious', 'compact'],
        stats: {
            radiationProtection: 300,
            bioProtection: 300,
            thermalProtection: 200,
            psiProtection: 300,
            heatResistance: 120,
            chemResistance: 120,
            electroResistance: 120,
            impactResistance: 252,
            tearProtection: 324,
            bulletResistance: 362,
            bleeding: -1.00,
            maxStamina: 20.00,
            maxWeight: 80.00
        },
        enhancement: ENHANCEMENT_PRESETS.legendary
    }
];

// ============== АРТЕФАКТЫ ==============
const ARTIFACTS = [
    // ===== ГРАВИТАЦИОННЫЕ =====
    {
        id: 'blood_stone',
        name: 'Кровь камня',
        nameEn: 'Blood stone',
        category: 'gravity',
        tier: 1,
        image: 'BS.png',
        imageFolder: 'Artifacts',
        price: 3200,
        stats: { regeneration: 1.00, bleeding: -0.25, radiation: 1.00 }
    },
    {
        id: 'vyvert',
        name: 'Выверт',
        nameEn: 'Vyvert',
        category: 'gravity',
        tier: 1,
        image: 'Vivert.png',
        imageFolder: 'Artifacts',
        price: 5000,
        stats: { tearProtection: 20, maxWeight: 6.00, radiation: 1.00 }
    },
    {
        id: 'medusa',
        name: 'Медуза',
        nameEn: 'Medusa',
        category: 'gravity',
        tier: 1,
        image: 'Medusa.png',
        imageFolder: 'Artifacts',
        price: 12000,
        stats: { radiationProtection: 20, maxWeight: 4.00, radiation: -2.00, bulletResistance: -3 }
    },
    {
        id: 'stone_flower',
        name: 'Каменный цветок',
        nameEn: 'Cristall flower',
        category: 'gravity',
        tier: 1,
        image: 'SF.png',
        imageFolder: 'Artifacts',
        price: 12500,
        stats: { psiProtection: 20, maxWeight: 6.00, bulletResistance: 8, radiation: 2.00 }
    },
    {
        id: 'meat_chunk',
        name: 'Ломоть мяса',
        nameEn: 'Mincer meat',
        category: 'gravity',
        tier: 2,
        image: 'LM.png',
        imageFolder: 'Artifacts',
        price: 13500,
        stats: { regeneration: 2.00, bleeding: -0.75, radiation: 1.50 }
    },
    {
        id: 'gravi',
        name: 'Грави',
        nameEn: 'Gravy',
        category: 'gravity',
        tier: 2,
        image: 'Gravy.png',
        imageFolder: 'Artifacts',
        price: 21000,
        stats: { tearProtection: 30, maxWeight: 12.00, radiation: 2.00 }
    },
    {
        id: 'night_star',
        name: 'Ночная звезда',
        nameEn: 'Night star',
        category: 'gravity',
        tier: 2,
        image: 'NS.png',
        imageFolder: 'Artifacts',
        price: 26100,
        stats: { bulletResistance: 21, maxStamina: -2.00, radiation: 3.00 }
    },
    {
        id: 'mercury_ball',
        name: 'Ртутный шар',
        nameEn: 'Mercury ball',
        category: 'gravity',
        tier: 2,
        image: 'RB.png',
        imageFolder: 'Artifacts',
        price: 30000,
        stats: { impactResistance: 20, radiationProtection: 20, tearProtection: 15, saturation: 1.00, maxWeight: -6.00, radiation: 1.00 }
    },
    {
        id: 'gold_fish',
        name: 'Золотая рыбка',
        nameEn: 'Gold fish',
        category: 'gravity',
        tier: 3,
        image: 'GF.png',
        imageFolder: 'Artifacts',
        price: 31000,
        stats: { tearProtection: 60, maxWeight: 15.00, maxStamina: -5.00, radiation: 2.00 }
    },
    {
        id: 'spring',
        name: 'Пружина',
        nameEn: 'Spring',
        category: 'gravity',
        tier: 3,
        image: 'Pruzh.png',
        imageFolder: 'Artifacts',
        price: 40200,
        stats: { impactResistance: 60, maxWeight: 8.00, bioProtection: -20, thermalProtection: -20, heatResistance: -20, chemResistance: -20 }
    },
    {
        id: 'golden_gravi',
        name: 'Золотистый грави',
        nameEn: 'Golden gravel',
        category: 'gravity',
        tier: 3,
        image: 'GG.png',
        imageFolder: 'Artifacts',
        price: 46000,
        stats: { tearProtection: 40, maxWeight: 30.00, radiation: 3.00 }
    },
    {
        id: 'yantarnik',
        name: 'Янтарник',
        nameEn: 'Yantarnik',
        category: 'gravity',
        tier: 3,
        image: 'Yantarnik.png',
        imageFolder: 'Artifacts',
        price: 52000,
        stats: { maxWeight: 18.00, bulletResistance: 24, radiation: 3.00 }
    },
    {
        id: 'soul',
        name: 'Душа',
        nameEn: 'Soul',
        category: 'gravity',
        tier: 3,
        image: 'Soul.png',
        imageFolder: 'Artifacts',
        price: 61000,
        stats: { regeneration: 6.00, bleeding: -3.00, maxStamina: -12.00, saturation: -2.25, bulletResistance: -10, radiation: 5.00 }
    },
    {
        id: 'dark_medusa',
        name: 'Тёмная медуза',
        nameEn: 'Dark medusa',
        category: 'gravity',
        tier: 3,
        image: 'DarkMedusa.png',
        imageFolder: 'Artifacts',
        price: 78000,
        stats: { bulletResistance: 42, regeneration: -0.25, maxStamina: -10.00, radiation: 5.00 }
    },
    {
        id: 'proto_medusa',
        name: 'Протомедуза',
        nameEn: 'Protomedusa',
        category: 'gravity',
        tier: 3,
        image: 'ProtoMedusa.png',
        imageFolder: 'Artifacts',
        price: 80200,
        stats: { radiationProtection: 80, maxWeight: 4.00, radiation: -8.00, maxStamina: -5.00, staminaRegen: -1.00, bulletResistance: -18 }
    },

    // ===== ХИМИЧЕСКИЕ =====
    {
        id: 'slime',
        name: 'Слизь',
        nameEn: 'Slime',
        category: 'chemical',
        tier: 1,
        image: 'Slime.png',
        imageFolder: 'Artifacts/Bio',
        price: 4000,
        stats: { bioProtection: 10, bleeding: -1.50, saturation: 0.45, chemResistance: 10, regeneration: -0.30 }
    },
    {
        id: 'thorn',
        name: 'Колючка',
        nameEn: 'Rusty thorn',
        category: 'chemical',
        tier: 1,
        image: 'Thorn.png',
        imageFolder: 'Artifacts/Bio',
        price: 10300,
        stats: { bioProtection: 15, radiationProtection: 30, radiation: -3.00, chemResistance: 15, bleeding: 1.50 }
    },
    {
        id: 'slug',
        name: 'Слизняк',
        nameEn: 'Slug',
        category: 'chemical',
        tier: 2,
        image: 'Slug.png',
        imageFolder: 'Artifacts/Bio',
        price: 11800,
        stats: { bleeding: -2.00, saturation: 1.25, regeneration: -1.00, maxWeight: -3.00 }
    },
    {
        id: 'bile_stone',
        name: 'Желчь камня',
        nameEn: 'Bile stone',
        category: 'chemical',
        tier: 2,
        image: 'BileStone.png',
        imageFolder: 'Artifacts/Bio',
        price: 21000,
        stats: { maxWeight: 5.00, maxStamina: -2.00, radiation: 2.00 }
    },
    {
        id: 'swamp_rot',
        name: 'Болотный гнилец',
        nameEn: 'Mica',
        category: 'chemical',
        tier: 2,
        image: 'SR.png',
        imageFolder: 'Artifacts/Bio',
        price: 22000,
        stats: { bioProtection: 20, saturation: 2.35, chemResistance: 40, regeneration: -1.75, maxWeight: -5.00 }
    },
    {
        id: 'crystal_thorn',
        name: 'Кристальная колючка',
        nameEn: 'Crystal thorn',
        category: 'chemical',
        tier: 2,
        image: 'CT.png',
        imageFolder: 'Artifacts/Bio',
        price: 31000,
        stats: { radiationProtection: 40, radiation: -4.00, bioProtection: -15, bleeding: 2.00, chemResistance: -9 }
    },
    {
        id: 'firefly',
        name: 'Светляк',
        nameEn: 'Firefly',
        category: 'chemical',
        tier: 3,
        image: 'Svetlak.png',
        imageFolder: 'Artifacts/Bio',
        price: 42000,
        stats: { regeneration: 5.00, bleeding: -2.00, maxStamina: -8.00, saturation: -1.75, radiation: 4.00 }
    },
    {
        id: 'mica',
        name: 'Слюда',
        nameEn: 'Mica',
        category: 'chemical',
        tier: 3,
        image: 'Sluda.png',
        imageFolder: 'Artifacts/Bio',
        price: 45000,
        stats: { bioProtection: 60, maxWeight: 6.50, maxStamina: 35.00, chemResistance: -20 }
    },
    {
        id: 'pellicle',
        name: 'Плёнка',
        nameEn: 'Dummy pellicle',
        category: 'chemical',
        tier: 3,
        image: 'Plenka.png',
        imageFolder: 'Artifacts/Bio',
        price: 47000,
        stats: { bioProtection: 20, saturation: 2.50, radiation: 2.00 }
    },
    {
        id: 'sea_urchin',
        name: 'Морской ёж',
        nameEn: 'Rusty sea urchin',
        category: 'chemical',
        tier: 3,
        image: 'SH.png',
        imageFolder: 'Artifacts/Bio',
        price: 59000,
        stats: { radiationProtection: 50, radiation: -5.00, bleeding: 3.00 }
    },
    {
        id: 'kolobok',
        name: 'Колобок',
        nameEn: 'Fuzz kolobok',
        category: 'chemical',
        tier: 3,
        image: 'Kolobok.png',
        imageFolder: 'Artifacts/Bio',
        price: 78000,
        stats: { regeneration: 2.50, bleeding: -3.00, maxStamina: -5.00, bulletResistance: -8, radiation: 2.00 }
    },
    {
        id: 'bubble',
        name: 'Пузырь',
        nameEn: 'Baloon',
        category: 'chemical',
        tier: 3,
        image: 'Puzir.png',
        imageFolder: 'Artifacts/Bio',
        price: 86000,
        stats: { radiationProtection: 60, radiation: -6.00 }
    },

    // ===== ЭЛЕКТРИЧЕСКИЕ =====
    {
        id: 'sparkler',
        name: 'Бенгальский огонь',
        nameEn: 'Sparkler',
        category: 'electric',
        tier: 1,
        image: 'BF.png',
        imageFolder: 'Artifacts/Electro',
        price: 6000,
        stats: { staminaRegen: 0.50, electroResistance: 10, radiation: 0.50 }
    },
    {
        id: 'flash',
        name: 'Вспышка',
        nameEn: 'Electra flash',
        category: 'electric',
        tier: 1,
        image: 'Vspishka.png',
        imageFolder: 'Artifacts/Electro',
        price: 12000,
        stats: { staminaRegen: 1.00, electroResistance: 15, radiation: 1.00 }
    },
    {
        id: 'battery',
        name: 'Батарейка',
        nameEn: 'Battery',
        category: 'electric',
        tier: 1,
        image: 'Battery.png',
        imageFolder: 'Artifacts/Electro',
        price: 15000,
        stats: { staminaRegen: 1.50, moveSpeed: 2.00, radiation: 1.00 }
    },
    {
        id: 'moonlight',
        name: 'Лунный свет',
        nameEn: 'Moonlight',
        category: 'electric',
        tier: 2,
        image: 'Moonlight.png',
        imageFolder: 'Artifacts/Electro',
        price: 22000,
        stats: { psiProtection: 45, radiation: 1.00, electroResistance: -20 }
    },
    {
        id: 'sky_stone',
        name: 'Небесный камень',
        nameEn: 'Heavenly Stone',
        category: 'electric',
        tier: 2,
        image: 'SS.png',
        imageFolder: 'Artifacts/Electro',
        price: 22000,
        stats: { staminaRegen: 2.25, electroResistance: 25, radiation: 1.50 }
    },
    {
        id: 'medium',
        name: 'Медиум',
        nameEn: 'Medium',
        category: 'electric',
        tier: 2,
        image: 'Medium.png',
        imageFolder: 'Artifacts/Electro',
        price: 23000,
        stats: { psiProtection: 60, electroResistance: -35 }
    },
    {
        id: 'electro_mica',
        name: 'Электрослюда',
        nameEn: 'Electrosluda',
        category: 'electric',
        tier: 2,
        image: 'Electrosluda.png',
        imageFolder: 'Artifacts/Electro',
        price: 27000,
        stats: { maxStamina: 15.00, electroResistance: 20, radiation: 1.50 }
    },
    {
        id: 'dummy',
        name: 'Пустышка',
        nameEn: 'Dummy dummy',
        category: 'electric',
        tier: 3,
        image: 'Pustishka.png',
        imageFolder: 'Artifacts/Electro',
        price: 35000,
        stats: { staminaRegen: 5.25, bulletResistance: 8, maxStamina: -30.00, radiation: 3.00 }
    },
    {
        id: 'halogen',
        name: 'Галоген',
        nameEn: 'Halogen',
        category: 'electric',
        tier: 3,
        image: 'Galogen.png',
        imageFolder: 'Artifacts/Electro',
        price: 61000,
        stats: { psiProtection: 120, maxStamina: 10.00, moveSpeed: 5.00, regeneration: -1.00, bleeding: 3.00 }
    },
    {
        id: 'snowflake',
        name: 'Снежинка',
        nameEn: 'Ice',
        category: 'electric',
        tier: 3,
        image: 'Snowy.png',
        imageFolder: 'Artifacts/Electro',
        price: 78000,
        stats: { maxStamina: 20.00, moveSpeed: 4.00, staminaRegen: -2.00, radiation: 3.00 }
    },

    // ===== ТЕРМИЧЕСКИЕ =====
    {
        id: 'droplet',
        name: 'Капля',
        nameEn: 'Droplets',
        category: 'thermal',
        tier: 1,
        image: 'Kaplya.png',
        imageFolder: 'Artifacts/Termo',
        price: 3500,
        stats: { maxWeight: 2.00, radiation: -0.50, heatResistance: 10, staminaRegen: -0.25 }
    },
    {
        id: 'crystal',
        name: 'Кристалл',
        nameEn: 'Cristall',
        category: 'thermal',
        tier: 1,
        image: 'Crystall.png',
        imageFolder: 'Artifacts/Termo',
        price: 4800,
        stats: { frostProtection: 20, radiation: -1.00, heatResistance: 15, staminaRegen: -0.75 }
    },
    {
        id: 'fireball',
        name: 'Огненный шар',
        nameEn: 'Fire ball',
        category: 'thermal',
        tier: 1,
        image: 'FB.png',
        imageFolder: 'Artifacts/Termo',
        price: 6800,
        stats: { frostProtection: 20, thermalProtection: 20, radiation: -1.50, staminaRegen: -1.25 }
    },
    {
        id: 'mothers_beads',
        name: 'Мамины бусы',
        nameEn: 'Dummy Glassbeads',
        category: 'thermal',
        tier: 2,
        image: 'MothersB00bs.png',
        imageFolder: 'Artifacts/Termo',
        price: 13600,
        stats: { bleeding: -5.00, radiation: 1.00, heatResistance: -10 }
    },
    {
        id: 'eye',
        name: 'Глаз',
        nameEn: 'Eye',
        category: 'thermal',
        tier: 2,
        image: 'Eye.png',
        imageFolder: 'Artifacts/Termo',
        price: 19350,
        stats: { thermalProtection: 30, bleeding: -10.00, heatResistance: 20, radiation: 2.00 }
    },
    {
        id: 'flame',
        name: 'Пламя',
        nameEn: 'Flame',
        category: 'thermal',
        tier: 3,
        image: 'Flame.png',
        imageFolder: 'Artifacts/Termo',
        price: 32000,
        stats: { frostProtection: 40, thermalProtection: 80, bleeding: -15.00, radiation: 3.00 }
    },
    {
        id: 'fire_loop',
        name: 'Огненная петля',
        nameEn: 'Fire Loop',
        category: 'thermal',
        tier: 3,
        image: 'FP.png',
        imageFolder: 'Artifacts/Termo',
        price: 36000,
        stats: { regeneration: 4.00, bleeding: -2.00, maxStamina: -5.00, saturation: -1.25, radiation: 3.25 }
    },
    {
        id: 'dragon_eye',
        name: 'Глаз дракона',
        nameEn: 'Dragon Eye',
        category: 'thermal',
        tier: 3,
        image: 'DE.png',
        imageFolder: 'Artifacts/Termo',
        price: 44000,
        stats: { staminaRegen: 3.00, frostProtection: 40, maxWeight: 22.00, regeneration: -0.75 }
    },

    // ===== УНИКАЛЬНЫЕ =====
    {
        id: 'generator',
        name: 'Генератор',
        nameEn: 'Generator',
        category: 'unique',
        tier: 'unique',
        image: 'Generator.webp',
        imageFolder: 'Artifacts/Quest',
        price: null,
        priceText: 'Нельзя продать',
        stats: { maxStamina: 10.00, staminaRegen: 2.50, moveSpeed: 3.00, radiation: 2.00 }
    },
    {
        id: 'medallion',
        name: 'Медальон',
        nameEn: 'Medalion',
        category: 'unique',
        tier: 'unique',
        image: 'Medalion.png',
        imageFolder: 'Artifacts/Quest',
        price: null,
        priceText: 'Нельзя продать',
        stats: { regeneration: 3.00, bleeding: -2.00, maxStamina: -5.00, radiation: 2.00 }
    },
    {
        id: 'goblet_bio',
        name: 'Бокал (био)',
        nameEn: 'Goblet (bio)',
        category: 'unique',
        tier: 2,
        image: 'Bokal_Bio.jpg',
        imageFolder: 'Artifacts/Quest',
        price: null,
        priceText: 'Нельзя продать',
        stats: { saturation: 1.00, radiation: -1.50, bulletResistance: -6 }
    },
    {
        id: 'goblet_gravity',
        name: 'Бокал (грави)',
        nameEn: 'Goblet (gravity)',
        category: 'unique',
        tier: 2,
        image: 'Bokal_Gravity.jpg',
        imageFolder: 'Artifacts/Quest',
        price: null,
        priceText: 'Нельзя продать',
        stats: { tearProtection: 12, bulletResistance: 12, radiation: 1.00 }
    },
    {
        id: 'goblet_thermal',
        name: 'Бокал (терма)',
        nameEn: 'Goblet (thermal)',
        category: 'unique',
        tier: 2,
        image: 'Bokal_Thermal.jpg',
        imageFolder: 'Artifacts/Quest',
        price: null,
        priceText: 'Нельзя продать',
        stats: { bleeding: -1.00, regeneration: 1.50, radiation: 1.00 }
    },

    // ===== МОРОЗНЫЕ / ИВЕНТ =====
    {
        id: 'proto_snowflake',
        name: 'Прото-снежинка',
        nameEn: 'Proto-snowflake',
        category: 'frost',
        tier: 1,
        image: 'ProtoSnow.jpg',
        imageFolder: 'Artifacts/Frost',
        price: null,
        priceText: 'Ивент',
        stats: { frostProtection: 50, tearProtection: 30, cold: -20.00, impactResistance: -20, saturation: -0.05, moveSpeed: -1.00 }
    },
    {
        id: 'frostbiter',
        name: 'Обморожник',
        nameEn: 'Frostbiter',
        category: 'frost',
        tier: 1,
        image: 'Frostbite.jpg',
        imageFolder: 'Artifacts/Frost',
        price: null,
        priceText: 'Ивент',
        stats: { saturation: 1.00, heatResistance: 20, chemResistance: 20, frostProtection: -35, bulletResistance: -12, cold: 10.00 }
    },
    {
        id: 'ice_crystal',
        name: 'Ледяной кристалл',
        nameEn: 'Ice Crystal',
        category: 'frost',
        tier: 1,
        image: 'IceCrystal.jpg',
        imageFolder: 'Artifacts/Frost',
        price: null,
        priceText: 'Ивент',
        stats: { frostProtection: 40, cold: -15.00, radiation: 0.50 }
    },
    {
        id: 'polar_star',
        name: 'Полярная звезда',
        nameEn: 'Polar Star',
        category: 'frost',
        tier: 2,
        image: 'PolarStar.jpg',
        imageFolder: 'Artifacts/Frost',
        price: null,
        priceText: 'Ивент',
        stats: { staminaRegen: 1.00, frostProtection: 100, maxStamina: 10.00, cold: -35.00, psiProtection: -100, radiation: 1.00 }
    },
    {
        id: 'purple_tear',
        name: 'Пурпурная слеза',
        nameEn: 'Purple Tear',
        category: 'frost',
        tier: 2,
        image: 'PurpleTear.jpg',
        imageFolder: 'Artifacts/Frost',
        price: null,
        priceText: 'Ивент',
        stats: { staminaRegen: 3.00, thermalProtection: 30, bleeding: -4.00, maxStamina: 30.00, moveSpeed: 5.00, heatResistance: 20, frostProtection: -50, saturation: -0.25, radiation: 2.00, cold: 30.00 }
    },
    {
        id: 'ice_flower',
        name: 'Ледоцвет',
        nameEn: 'Ice Flower',
        category: 'frost',
        tier: 3,
        image: 'IceFlower.jpg',
        imageFolder: 'Artifacts/Frost',
        price: null,
        priceText: 'Ивент',
        stats: { frostProtection: 200, bleeding: -3.00, cold: -60.00, thermalProtection: -30, radiation: 1.50, heatResistance: -40 }
    },
    {
        id: 'tesseract',
        name: 'Тессеракт',
        nameEn: 'Tesseract',
        category: 'frost',
        tier: 3,
        image: 'Tesseract.jpg',
        imageFolder: 'Artifacts/Frost',
        price: null,
        priceText: 'Ивент',
        stats: { staminaRegen: 2.00, bleeding: -2.00, maxWeight: 16.00, maxStamina: 20.00, bulletResistance: 32, regeneration: 4.00, moveSpeed: 4.00, impactResistance: -50, frostProtection: -100, tearProtection: -50, saturation: -0.75, radiation: 4.00, cold: 30.00 }
    }
];

// ============== НАЗВАНИЯ ХАРАКТЕРИСТИК ==============
const STAT_NAMES = {
    radiationProtection: 'Защита от радиации',
    bioProtection: 'Защита от биозаражения',
    thermalProtection: 'Защита от температуры',
    psiProtection: 'Защита от пси-излучения',
    frostProtection: 'Защита от обморожения',
    heatResistance: 'Термозащита',
    chemResistance: 'Химзащита',
    electroResistance: 'Электрозащита',
    impactResistance: 'Гашение удара',
    tearProtection: 'Защита от разрывов',
    bulletResistance: 'Пулестойкость',
    regeneration: 'Регенерация',
    bleeding: 'Кровотечение',
    radiation: 'Радиация',
    saturation: 'Насыщение',
    cold: 'Холод',
    maxStamina: 'Макс. выносливость',
    staminaRegen: 'Восстановление сил',
    moveSpeed: 'Скорость передвижения',
    maxWeight: 'Макс. вес'
};

// ============== ЕДИНИЦЫ ИЗМЕРЕНИЯ ==============
const STAT_UNITS = {
    radiationProtection: '',
    bioProtection: '',
    thermalProtection: '',
    psiProtection: '',
    frostProtection: '',
    heatResistance: '',
    chemResistance: '',
    electroResistance: '',
    impactResistance: '',
    tearProtection: '',
    bulletResistance: '',
    regeneration: '%/сек',
    bleeding: '/сек',
    radiation: ' мЗв/сек',
    saturation: '%/сек',
    cold: '/сек',
    maxStamina: '%',
    staminaRegen: '%/сек',
    moveSpeed: '%',
    maxWeight: ' кг'
};

// Инвертированные статы (где положительное значение = плохо)
const INVERTED_STATS = ['radiation', 'bleeding', 'cold'];

// ============== ТИПЫ КОНТЕЙНЕРОВ ==============
const CONTAINER_TYPES = {
    standard: 'Стандартный',
    bulky: 'Громоздкий',
    compact: 'Компактный',
    spacious: 'Вместительный'
};

// ============== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==============

function getArtifactImagePath(artifact, basePath = '') {
    return `${basePath}${artifact.imageFolder}/${artifact.image}`;
}

function getCategoryName(categoryId) {
    return ARTIFACT_CATEGORIES[categoryId]?.name || categoryId;
}

function getArtifactsByCategory(categoryId) {
    return ARTIFACTS.filter(a => a.category === categoryId);
}

function formatPrice(price) {
    if (price === null) return null;
    return price.toLocaleString('ru-RU') + ' ₽';
}

function formatStatValue(statKey, value) {
    const isInverted = INVERTED_STATS.includes(statKey);
    const unit = STAT_UNITS[statKey] || '';
    
    let displayValue, isPositive;
    
    if (value === 0) {
        displayValue = '0';
        isPositive = null;
    } else if (value > 0) {
        displayValue = `+${formatNumber(value)}`;
        isPositive = !isInverted;
    } else {
        displayValue = formatNumber(value);
        isPositive = isInverted;
    }
    
    return {
        displayValue: displayValue + unit,
        isPositive,
        colorClass: isPositive === null ? '' : (isPositive ? 'property--positive' : 'property--negative')
    };
}

function formatNumber(value) {
    return value.toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
}

// ============================================================
// ОРУЖИЕ И ПАТРОНЫ ДЛЯ DPS-КАЛЬКУЛЯТОРА
// ============================================================

const WEAPON_CATEGORIES = {
    assault: { id: 'assault', name: 'Штурмовые винтовки', nameShort: 'Штурмовые', icon: '🔫' },
    sniper: { id: 'sniper', name: 'Снайперские винтовки', nameShort: 'Снайперские', icon: '🎯' },
    shotgun: { id: 'shotgun', name: 'Дробовики', nameShort: 'Дробовики', icon: '💥' },
    smg: { id: 'smg', name: 'Пистолеты-пулемёты', nameShort: 'ПП', icon: '🔧' },
    pistol: { id: 'pistol', name: 'Пистолеты', nameShort: 'Пистолеты', icon: '🔫' },
    machinegun: { id: 'machinegun', name: 'Пулемёты', nameShort: 'Пулемёты', icon: '⚙️' }
};

const WEAPONS = [
    // ===== ДРОБОВИКИ =====
    {
        id: 'toz194',
        name: 'ТОЗ-194',
        category: 'shotgun',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 84,
        rpm: 45,
        headshotMult: 1.25,
        effectiveRange: 89.0,
        fireModes: ['single'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 5.56,
            horizontalRecoil: 4.70,
            hipSpread: 1.13,
            adsSpread: 1.13
        }
    },
    {
        id: 'fort500',
        name: 'Форт-500',
        category: 'shotgun',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 82,
        rpm: 80,
        headshotMult: 1.25,
        effectiveRange: 85.0,
        fireModes: ['single'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 5.50,
            horizontalRecoil: 4.72,
            hipSpread: 1.19,
            adsSpread: 1.19
        }
    },
    {
        id: 'mossberg_maverick',
        name: 'Mossberg Maverick 88 Cruiser',
        category: 'shotgun',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 86,
        rpm: 80,
        headshotMult: 1.25,
        effectiveRange: 99.0,
        fireModes: ['single'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 4.77,
            horizontalRecoil: 3.90,
            hipSpread: 0.99,
            adsSpread: 0.99
        }
    },
    {
        id: 'remington_870',
        name: 'Remington 870 Tactical',
        category: 'shotgun',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 95,
        rpm: 50,
        headshotMult: 1.25,
        effectiveRange: 81.0,
        fireModes: ['single'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 6.81,
            horizontalRecoil: 5.32,
            hipSpread: 1.18,
            adsSpread: 1.18
        }
    },
    {
        id: 'mp153',
        name: 'MP-153',
        category: 'shotgun',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 84,
        rpm: 265,
        headshotMult: 1.25,
        effectiveRange: 95.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 4.68,
            horizontalRecoil: 2.57,
            hipSpread: 0.89,
            adsSpread: 0.89
        }
    },
    {
        id: 'protecta',
        name: 'Protecta',
        category: 'shotgun',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 77,
        rpm: 230,
        headshotMult: 1.25,
        effectiveRange: 72.0,
        fireModes: ['auto'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 5.52,
            horizontalRecoil: 3.35,
            hipSpread: 1.33,
            adsSpread: 1.33
        }
    },
    {
        id: 'usas12',
        name: 'Daewoo USAS-12',
        category: 'shotgun',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 75,
        rpm: 360,
        headshotMult: 1.25,
        effectiveRange: 73.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 5.11,
            horizontalRecoil: 3.59,
            hipSpread: 1.15,
            adsSpread: 1.15
        }
    },
    {
        id: 'spas12',
        name: 'Franchi SPAS-12',
        category: 'shotgun',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 90,
        rpm: 300,
        headshotMult: 1.25,
        effectiveRange: 76.0,
        fireModes: ['auto'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 6.55,
            horizontalRecoil: 3.10,
            hipSpread: 0.98,
            adsSpread: 0.98
        }
    },

    // ===== ПИСТОЛЕТЫ-ПУЛЕМЁТЫ =====
    {
        id: 'skorpion_vz61',
        name: 'Skorpion vz.61',
        category: 'smg',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 22,
        rpm: 800,
        headshotMult: 1.25,
        effectiveRange: 22.5,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x19_ps', '9x19_pp', '9x19_dum'],
        stats: {
            verticalRecoil: 1.27,
            horizontalRecoil: 0.60,
            hipSpread: 0.42,
            adsSpread: 0.42
        }
    },
    {
        id: 'pp2000',
        name: 'ПП-2000',
        category: 'smg',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 25,
        rpm: 725,
        headshotMult: 1.25,
        effectiveRange: 55.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x19_ps', '9x19_pp', '9x19_dum'],
        stats: {
            verticalRecoil: 0.54,
            horizontalRecoil: 0.31,
            hipSpread: 0.40,
            adsSpread: 0.40
        }
    },
    {
        id: 'mp5a3',
        name: 'HK MP5A3',
        category: 'smg',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 23,
        rpm: 800,
        headshotMult: 1.25,
        effectiveRange: 56.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x19_ps', '9x19_pp', '9x19_dum'],
        stats: {
            verticalRecoil: 1.33,
            horizontalRecoil: 0.42,
            hipSpread: 0.44,
            adsSpread: 0.44
        }
    },
    {
        id: 'pp19_bizon',
        name: 'ПП-19 «Бизон»',
        category: 'smg',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 25,
        rpm: 700,
        headshotMult: 1.25,
        effectiveRange: 120.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x18_p', '9x18_bjt', '9x18_pp'],
        stats: {
            verticalRecoil: 1.36,
            horizontalRecoil: 0.40,
            hipSpread: 0.36,
            adsSpread: 0.36
        }
    },
    {
        id: 'ump45',
        name: 'UMP45',
        category: 'smg',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 36,
        rpm: 660,
        headshotMult: 1.25,
        effectiveRange: 60.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['45acp', '45acp_super', '45acp_hydra'],
        stats: {
            verticalRecoil: 1.71,
            horizontalRecoil: 0.36,
            hipSpread: 0.31,
            adsSpread: 0.31
        }
    },
    {
        id: '9a91',
        name: '9A-91',
        category: 'smg',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 35,
        rpm: 700,
        headshotMult: 1.35,
        effectiveRange: 76.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x39_sp5', '9x39_sp6'],
        stats: {
            verticalRecoil: 1.62,
            horizontalRecoil: 0.60,
            hipSpread: 0.64,
            adsSpread: 0.19
        }
    },
    {
        id: 'sr3_vikhr',
        name: 'СР-3 «Вихрь»',
        category: 'smg',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 33,
        rpm: 800,
        headshotMult: 1.35,
        effectiveRange: 66.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x39_sp5', '9x39_sp6'],
        stats: {
            verticalRecoil: 1.77,
            horizontalRecoil: 0.51,
            hipSpread: 0.73,
            adsSpread: 0.33
        }
    },
    {
        id: 'fn_p90',
        name: 'FN P90',
        category: 'smg',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 24,
        rpm: 1100,
        headshotMult: 1.25,
        effectiveRange: 51.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x19_ps', '9x19_pp', '9x19_dum'],
        stats: {
            verticalRecoil: 0.32,
            horizontalRecoil: 0.51,
            hipSpread: 0.37,
            adsSpread: 0.37
        }
    },

    // ===== ШТУРМОВЫЕ ВИНТОВКИ =====
    {
        id: 'aks74',
        name: 'АКС-74',
        category: 'assault',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 31,
        rpm: 600,
        headshotMult: 1.25,
        effectiveRange: 104.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['545x39_ps', '545x39_bp', '545x39_snp'],
        stats: {
            verticalRecoil: 2.05,
            horizontalRecoil: 0.82,
            hipSpread: 0.71,
            adsSpread: 0.25
        }
    },
    {
        id: 'aks74u',
        name: 'АКС-74У',
        category: 'assault',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 30,
        rpm: 650,
        headshotMult: 1.25,
        effectiveRange: 58.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['545x39_ps', '545x39_bp', '545x39_snp'],
        stats: {
            verticalRecoil: 1.87,
            horizontalRecoil: 0.92,
            hipSpread: 0.67,
            adsSpread: 0.33
        }
    },
    {
        id: 'ak74m',
        name: 'АК-74М',
        category: 'assault',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 32,
        rpm: 650,
        headshotMult: 1.25,
        effectiveRange: 105.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['545x39_ps', '545x39_bp', '545x39_snp'],
        stats: {
            verticalRecoil: 1.94,
            horizontalRecoil: 0.79,
            hipSpread: 0.65,
            adsSpread: 0.25
        }
    },
    {
        id: 'm16a2',
        name: 'M16A2',
        category: 'assault',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 29,
        rpm: 750,
        headshotMult: 1.25,
        effectiveRange: 100.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.83,
            horizontalRecoil: 0.66,
            hipSpread: 0.67,
            adsSpread: 0.24
        }
    },
    {
        id: 'm4',
        name: 'M4',
        category: 'assault',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 29,
        rpm: 800,
        headshotMult: 1.25,
        effectiveRange: 100.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.92,
            horizontalRecoil: 0.72,
            hipSpread: 0.64,
            adsSpread: 0.22
        }
    },
    {
        id: 'l85a1',
        name: 'L85A1',
        category: 'assault',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 30,
        rpm: 650,
        headshotMult: 1.25,
        effectiveRange: 110.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.35,
            horizontalRecoil: 1.15,
            hipSpread: 0.64,
            adsSpread: 0.23
        }
    },
    {
        id: 'sig_sg550',
        name: 'SIG SG 550',
        category: 'assault',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 31,
        rpm: 650,
        headshotMult: 1.25,
        effectiveRange: 108.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.68,
            horizontalRecoil: 0.59,
            hipSpread: 0.62,
            adsSpread: 0.22
        }
    },
    {
        id: 'steyr_aug_a1',
        name: 'Steyr AUG A1',
        category: 'assault',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 31,
        rpm: 700,
        headshotMult: 1.25,
        effectiveRange: 110.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.44,
            horizontalRecoil: 0.92,
            hipSpread: 0.55,
            adsSpread: 0.20
        }
    },
    {
        id: 'm16a4',
        name: 'M16A4',
        category: 'assault',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 29,
        rpm: 750,
        headshotMult: 1.25,
        effectiveRange: 108.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.86,
            horizontalRecoil: 0.68,
            hipSpread: 0.67,
            adsSpread: 0.24
        }
    },
    {
        id: 'famas_f1',
        name: 'FAMAS F1',
        category: 'assault',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 29,
        rpm: 900,
        headshotMult: 1.25,
        effectiveRange: 76.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.45,
            horizontalRecoil: 1.21,
            hipSpread: 0.58,
            adsSpread: 0.24
        }
    },
    {
        id: 'akm',
        name: 'AKM',
        category: 'assault',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 37,
        rpm: 600,
        headshotMult: 1.25,
        effectiveRange: 110.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['762x39_ps', '762x39_bp'],
        stats: {
            verticalRecoil: 3.11,
            horizontalRecoil: 1.22,
            hipSpread: 0.68,
            adsSpread: 0.30
        }
    },
    {
        id: 'an94_abakan',
        name: 'АН-94 «Абакан»',
        category: 'assault',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 34,
        rpm: 625,
        headshotMult: 1.25,
        effectiveRange: 107.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['545x39_ps', '545x39_bp', '545x39_snp'],
        stats: {
            verticalRecoil: 1.92,
            horizontalRecoil: 0.41,
            hipSpread: 0.74,
            adsSpread: 0.19
        }
    },
    {
        id: 'ak105',
        name: 'AK-105',
        category: 'assault',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 33,
        rpm: 650,
        headshotMult: 1.25,
        effectiveRange: 86.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['545x39_ps', '545x39_bp', '545x39_snp'],
        stats: {
            verticalRecoil: 1.72,
            horizontalRecoil: 0.61,
            hipSpread: 0.58,
            adsSpread: 0.23
        }
    },
    {
        id: 'm4a1',
        name: 'M4A1',
        category: 'assault',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 30,
        rpm: 850,
        headshotMult: 1.25,
        effectiveRange: 106.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.81,
            horizontalRecoil: 0.68,
            hipSpread: 0.52,
            adsSpread: 0.20
        }
    },
    {
        id: 'fn_scar_l',
        name: 'FN SCAR-L',
        category: 'assault',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 32.5,
        rpm: 625,
        headshotMult: 1.25,
        effectiveRange: 136.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.35,
            horizontalRecoil: 0.38,
            hipSpread: 0.44,
            adsSpread: 0.15
        }
    },
    {
        id: 'hk_g36',
        name: 'HK G36',
        category: 'assault',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 33,
        rpm: 750,
        headshotMult: 1.25,
        effectiveRange: 126.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.62,
            horizontalRecoil: 0.33,
            hipSpread: 0.65,
            adsSpread: 0.15
        }
    },
    {
        id: 'fn_f2000',
        name: 'FN F2000',
        category: 'assault',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 34,
        rpm: 850,
        headshotMult: 1.25,
        effectiveRange: 132.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.23,
            horizontalRecoil: 0.59,
            hipSpread: 0.61,
            adsSpread: 0.18
        }
    },
    {
        id: 'hk_g3a3',
        name: 'HK G3A3',
        category: 'assault',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 43.5,
        rpm: 600,
        headshotMult: 1.25,
        effectiveRange: 132.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['762x51_m59', '762x51_m61'],
        stats: {
            verticalRecoil: 3.25,
            horizontalRecoil: 0.95,
            hipSpread: 0.88,
            adsSpread: 0.16
        }
    },
    {
        id: 'steyr_aug_a3',
        name: 'Steyr AUG A3',
        category: 'assault',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 32,
        rpm: 725,
        headshotMult: 1.25,
        effectiveRange: 112.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.39,
            horizontalRecoil: 0.73,
            hipSpread: 0.49,
            adsSpread: 0.20
        }
    },
    {
        id: 'ak103',
        name: 'AK-103',
        category: 'assault',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 37,
        rpm: 600,
        headshotMult: 1.25,
        effectiveRange: 112.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['762x39_ps', '762x39_bp'],
        stats: {
            verticalRecoil: 2.94,
            horizontalRecoil: 1.10,
            hipSpread: 0.60,
            adsSpread: 0.23
        }
    },
    {
        id: 'ots14_groza',
        name: 'ОЦ-14 «Гроза»',
        category: 'assault',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 34,
        rpm: 700,
        headshotMult: 1.35,
        effectiveRange: 74.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x39_sp5', '9x39_sp6'],
        stats: {
            verticalRecoil: 1.42,
            horizontalRecoil: 0.64,
            hipSpread: 0.54,
            adsSpread: 0.26
        }
    },
    {
        id: 'hk416',
        name: 'HK416',
        category: 'assault',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 32,
        rpm: 850,
        headshotMult: 1.25,
        effectiveRange: 121.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.42,
            horizontalRecoil: 0.36,
            hipSpread: 0.60,
            adsSpread: 0.20
        }
    },
    {
        id: 'fn_fnc',
        name: 'FN FNC',
        category: 'assault',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 38,
        rpm: 700,
        headshotMult: 1.25,
        effectiveRange: 145.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.64,
            horizontalRecoil: 0.54,
            hipSpread: 0.48,
            adsSpread: 0.14
        }
    },
    {
        id: 'fn_f2000_tactical',
        name: 'FN F2000 Tactical',
        category: 'assault',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 34,
        rpm: 850,
        headshotMult: 1.25,
        effectiveRange: 132.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.27,
            horizontalRecoil: 0.49,
            hipSpread: 0.46,
            adsSpread: 0.18
        }
    },
    {
        id: 'aek971',
        name: 'АЕК-971',
        category: 'assault',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 34,
        rpm: 900,
        headshotMult: 1.25,
        effectiveRange: 100.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['545x39_ps', '545x39_bp', '545x39_snp'],
        stats: {
            verticalRecoil: 1.37,
            horizontalRecoil: 0.31,
            hipSpread: 0.49,
            adsSpread: 0.22
        }
    },
    {
        id: 'ak12',
        name: 'AK-12',
        category: 'assault',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 34,
        rpm: 740,
        headshotMult: 1.25,
        effectiveRange: 110.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['545x39_ps', '545x39_bp', '545x39_snp', '545x39_bs'],
        stats: {
            verticalRecoil: 1.69,
            horizontalRecoil: 0.49,
            hipSpread: 0.53,
            adsSpread: 0.17
        }
    },
    {
        id: 'hk_xm8',
        name: 'HK XM8',
        category: 'assault',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 35,
        rpm: 800,
        headshotMult: 1.25,
        effectiveRange: 120.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.38,
            horizontalRecoil: 0.35,
            hipSpread: 0.54,
            adsSpread: 0.18
        }
    },
    {
        id: 'hk417',
        name: 'HK417',
        category: 'assault',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 45,
        rpm: 575,
        headshotMult: 1.25,
        effectiveRange: 140.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['762x51_m59', '762x51_m61'],
        stats: {
            verticalRecoil: 2.55,
            horizontalRecoil: 0.76,
            hipSpread: 0.60,
            adsSpread: 0.05
        }
    },
    {
        id: 'galil_ace_51',
        name: 'Galil ACE 51',
        category: 'assault',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 41,
        rpm: 685,
        headshotMult: 1.25,
        effectiveRange: 90.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['762x51_m59', '762x51_m61'],
        stats: {
            verticalRecoil: 2.49,
            horizontalRecoil: 0.90,
            hipSpread: 0.48,
            adsSpread: 0.15
        }
    },
    {
        id: 'fn_scar_h',
        name: 'FN SCAR-H',
        category: 'assault',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 42,
        rpm: 600,
        headshotMult: 1.25,
        effectiveRange: 126.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['762x51_m59', '762x51_m61'],
        stats: {
            verticalRecoil: 2.45,
            horizontalRecoil: 1.15,
            hipSpread: 0.57,
            adsSpread: 0.08
        }
    },
    {
        id: 'lr300',
        name: 'LR-300',
        category: 'assault',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 33,
        rpm: 950,
        headshotMult: 1.25,
        effectiveRange: 74.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.71,
            horizontalRecoil: 0.54,
            hipSpread: 0.53,
            adsSpread: 0.20
        }
    },
    {
        id: 'fn_fal',
        name: 'FN FAL',
        category: 'assault',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 44,
        rpm: 675,
        headshotMult: 1.25,
        effectiveRange: 124.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['762x51_m59', '762x51_m61'],
        stats: {
            verticalRecoil: 3.19,
            horizontalRecoil: 1.24,
            hipSpread: 0.51,
            adsSpread: 0.12
        }
    },
    {
        id: 'as_val',
        name: 'АС «Вал»',
        category: 'assault',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 32,
        rpm: 925,
        headshotMult: 1.35,
        effectiveRange: 70.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x39_sp5', '9x39_sp6'],
        stats: {
            verticalRecoil: 1.86,
            horizontalRecoil: 0.31,
            hipSpread: 0.62,
            adsSpread: 0.21
        }
    },
    {
        id: 'ash12',
        name: 'АШ-12',
        category: 'assault',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 53,
        rpm: 575,
        headshotMult: 1.25,
        effectiveRange: 72.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['127x55'],
        stats: {
            verticalRecoil: 4.35,
            horizontalRecoil: 1.74,
            hipSpread: 0.55,
            adsSpread: 0.18,
            armorPenetration: 5
        }
    },

    // ===== СНАЙПЕРСКИЕ ВИНТОВКИ =====
    {
        id: 'remington_700',
        name: 'Remington 700',
        category: 'sniper',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 140,
        rpm: 30,
        headshotMult: 1.50,
        effectiveRange: 105.0,
        fireModes: ['single'],
        ammoTypes: ['308_winchester'],
        stats: {
            verticalRecoil: 3.00,
            horizontalRecoil: 2.15,
            hipSpread: 2.00,
            adsSpread: 0.08
        }
    },
    {
        id: 'svd',
        name: 'Снайперская винтовка Драгунова',
        category: 'sniper',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 115,
        rpm: 100,
        headshotMult: 1.25,
        effectiveRange: 105.0,
        fireModes: ['single'],
        ammoTypes: ['762x54_lps', '762x54_bs', '762x54_hp'],
        stats: {
            verticalRecoil: 3.20,
            horizontalRecoil: 2.40,
            hipSpread: 2.00,
            adsSpread: 0.11
        }
    },
    {
        id: 'vsk94',
        name: 'ВСК-94',
        category: 'sniper',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 40,
        rpm: 700,
        headshotMult: 1.35,
        effectiveRange: 80.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x39_sp5', '9x39_sp6'],
        stats: {
            verticalRecoil: 1.43,
            horizontalRecoil: 0.22,
            hipSpread: 5.00,
            adsSpread: 0.10
        }
    },
    {
        id: 'sig_sg550_sniper',
        name: 'SIG SG 550 Sniper',
        category: 'sniper',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 38,
        rpm: 480,
        headshotMult: 1.35,
        effectiveRange: 180.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.72,
            horizontalRecoil: 0.38,
            hipSpread: 2.00,
            adsSpread: 0.05
        }
    },
    {
        id: 'walther_wa2000',
        name: 'Walther WA 2000',
        category: 'sniper',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 138,
        rpm: 100,
        headshotMult: 1.35,
        effectiveRange: 240.0,
        fireModes: ['single'],
        ammoTypes: ['308_winchester'],
        stats: {
            verticalRecoil: 5.00,
            horizontalRecoil: 1.50,
            hipSpread: 5.00,
            adsSpread: 0.05,
            moveSpeed: -3.00
        }
    },
    {
        id: 'sv98',
        name: 'СВ-98',
        category: 'sniper',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 183,
        rpm: 33,
        headshotMult: 1.50,
        effectiveRange: 270.0,
        fireModes: ['single'],
        ammoTypes: ['762x54_lps', '762x54_bs', '762x54_hp'],
        stats: {
            verticalRecoil: 3.55,
            horizontalRecoil: 3.10,
            hipSpread: 2.00,
            adsSpread: 0.03,
            moveSpeed: -3.00
        }
    },
    {
        id: 'sako_trg42',
        name: 'Sako TRG-42',
        category: 'sniper',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 185,
        rpm: 25,
        headshotMult: 1.50,
        effectiveRange: 290.0,
        fireModes: ['single'],
        ammoTypes: ['308_winchester'],
        stats: {
            verticalRecoil: 4.00,
            horizontalRecoil: 3.50,
            hipSpread: 5.00,
            adsSpread: 0.05,
            moveSpeed: -3.00
        }
    },
    {
        id: 'barrett_m82',
        name: 'Barrett M82',
        category: 'sniper',
        rarity: 'legendary',
        rarityName: 'Легендарное',
        damage: 195,
        rpm: 111,
        headshotMult: 1.35,
        effectiveRange: 280.0,
        fireModes: ['single'],
        ammoTypes: ['127x55'],
        stats: {
            verticalRecoil: 12.50,
            horizontalRecoil: 11.00,
            hipSpread: 10.00,
            adsSpread: 0.07,
            moveSpeed: -10.00,
            mutantDamageMultiplier: 2.5
        }
    },

    // ===== ПИСТОЛЕТЫ =====
    {
        id: 'glock18',
        name: 'Glock 18',
        category: 'pistol',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 27,
        rpm: 800,
        headshotMult: 1.75,
        effectiveRange: 45.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x19_ps', '9x19_pp', '9x19_dum'],
        stats: {
            verticalRecoil: 1.43,
            horizontalRecoil: 0.67,
            hipSpread: 0.52,
            adsSpread: 0.52,
            moveSpeed: 2.00
        }
    },
    {
        id: 'aps',
        name: 'АПС',
        category: 'pistol',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 32,
        rpm: 750,
        headshotMult: 1.75,
        effectiveRange: 36.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x18_p', '9x18_bjt', '9x18_pp'],
        stats: {
            verticalRecoil: 1.92,
            horizontalRecoil: 0.80,
            hipSpread: 0.45,
            adsSpread: 0.45,
            moveSpeed: 2.00
        }
    },

    // ===== ПУЛЕМЁТЫ =====
    {
        id: 'rpk74',
        name: 'РПК-74',
        category: 'machinegun',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 36,
        rpm: 650,
        headshotMult: 1.25,
        effectiveRange: 124.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['545x39_ps', '545x39_bp', '545x39_snp'],
        stats: {
            verticalRecoil: 2.55,
            horizontalRecoil: 0.71,
            hipSpread: 0.45,
            adsSpread: 0.17,
            moveSpeed: -4.00
        }
    },
    {
        id: 'm249_saw',
        name: 'M249 SAW',
        category: 'machinegun',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 32,
        rpm: 800,
        headshotMult: 1.25,
        effectiveRange: 120.0,
        fireModes: ['auto'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 2.35,
            horizontalRecoil: 0.62,
            hipSpread: 0.70,
            adsSpread: 0.19,
            moveSpeed: -3.00
        }
    },
    {
        id: 'm60',
        name: 'M60',
        category: 'machinegun',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 47,
        rpm: 550,
        headshotMult: 1.25,
        effectiveRange: 124.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['762x51_m59', '762x51_m61'],
        stats: {
            verticalRecoil: 3.83,
            horizontalRecoil: 1.36,
            hipSpread: 0.65,
            adsSpread: 0.15,
            moveSpeed: -6.00
        }
    },

    // ===== СПЕЦИАЛЬНОЕ =====
    {
        id: 'gauss_gun',
        name: 'Гаусс-пушка',
        category: 'sniper',
        rarity: 'legendary',
        rarityName: 'Легендарное',
        damage: 70,
        rpm: 25,
        headshotMult: 1.50,
        effectiveRange: 200.0,
        fireModes: ['single'],
        ammoTypes: ['makeshift_batteries', 'accumulators'],
        stats: {
            verticalRecoil: 0.00,
            horizontalRecoil: 0.00,
            hipSpread: 1.50,
            adsSpread: 0.01,
            moveSpeed: -4.00,
            armorPenetration: 100
        }
    },
        // ===== ПИСТОЛЕТЫ (НОВЫЕ) =====
    {
        id: 'colt_1911',
        name: 'Colt 1911',
        category: 'pistol',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 39,
        rpm: 265,
        headshotMult: 2.50,
        effectiveRange: 54.0,
        fireModes: ['single'],
        ammoTypes: ['45acp', '45acp_super', '45acp_hydra'],
        stats: {
            verticalRecoil: 2.00,
            horizontalRecoil: 1.50,
            hipSpread: 0.39,
            adsSpread: 0.39,
            moveSpeed: 2.00
        }
    },
    {
        id: 'gsh18',
        name: 'ГШ-18',
        category: 'pistol',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 35,
        rpm: 365,
        headshotMult: 2.00,
        effectiveRange: 51.0,
        fireModes: ['single'],
        ammoTypes: ['9x19_ps', '9x19_pp', '9x19_dum'],
        stats: {
            verticalRecoil: 1.62,
            horizontalRecoil: 1.15,
            hipSpread: 0.48,
            adsSpread: 0.48,
            moveSpeed: 2.00
        }
    },
    {
        id: 'sig_p220',
        name: 'SIG Sauer P220',
        category: 'pistol',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 36,
        rpm: 290,
        headshotMult: 2.00,
        effectiveRange: 54.0,
        fireModes: ['single'],
        ammoTypes: ['45acp', '45acp_super', '45acp_hydra'],
        stats: {
            verticalRecoil: 1.78,
            horizontalRecoil: 1.25,
            hipSpread: 0.40,
            adsSpread: 0.40,
            moveSpeed: 2.00
        }
    },
    {
        id: 'desert_eagle',
        name: 'Desert Eagle Mark XIX',
        category: 'pistol',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 52,
        rpm: 250,
        headshotMult: 2.50,
        effectiveRange: 63.0,
        fireModes: ['single'],
        ammoTypes: ['45acp', '45acp_super', '45acp_hydra'],
        stats: {
            verticalRecoil: 2.88,
            horizontalRecoil: 2.40,
            hipSpread: 0.39,
            adsSpread: 0.39,
            moveSpeed: 2.00
        }
    },
    {
        id: 'pm',
        name: 'Пистолет Макарова',
        category: 'pistol',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 30,
        rpm: 250,
        headshotMult: 2.00,
        effectiveRange: 45.0,
        fireModes: ['single'],
        ammoTypes: ['9x18_p', '9x18_bjt', '9x18_pp'],
        stats: {
            verticalRecoil: 1.87,
            horizontalRecoil: 1.50,
            hipSpread: 0.55,
            adsSpread: 0.55,
            moveSpeed: 2.00
        }
    },
    {
        id: 'pb',
        name: 'Пистолет Бесшумный (ПБ)',
        category: 'pistol',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 29,
        rpm: 250,
        headshotMult: 2.00,
        effectiveRange: 36.0,
        fireModes: ['single'],
        ammoTypes: ['9x18_p', '9x18_bjt', '9x18_pp'],
        stats: {
            verticalRecoil: 1.82,
            horizontalRecoil: 1.39,
            hipSpread: 0.55,
            adsSpread: 0.55,
            moveSpeed: 2.00
        }
    },
    {
        id: 'fort12',
        name: 'Форт-12',
        category: 'pistol',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 31,
        rpm: 280,
        headshotMult: 2.00,
        effectiveRange: 42.0,
        fireModes: ['single'],
        ammoTypes: ['9x18_p', '9x18_bjt', '9x18_pp'],
        stats: {
            verticalRecoil: 1.66,
            horizontalRecoil: 1.17,
            hipSpread: 0.49,
            adsSpread: 0.49,
            moveSpeed: 2.00
        }
    },
    {
        id: 'browning_hp',
        name: 'Browning Hi-Power',
        category: 'pistol',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 32,
        rpm: 310,
        headshotMult: 2.00,
        effectiveRange: 48.0,
        fireModes: ['single'],
        ammoTypes: ['9x19_ps', '9x19_pp', '9x19_dum'],
        stats: {
            verticalRecoil: 1.63,
            horizontalRecoil: 0.90,
            hipSpread: 0.45,
            adsSpread: 0.45,
            moveSpeed: 2.00
        }
    },
    {
        id: 'walther_p99',
        name: 'Walther P99',
        category: 'pistol',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 35,
        rpm: 275,
        headshotMult: 2.00,
        effectiveRange: 48.0,
        fireModes: ['single'],
        ammoTypes: ['9x19_ps', '9x19_pp', '9x19_dum'],
        stats: {
            verticalRecoil: 1.88,
            horizontalRecoil: 1.31,
            hipSpread: 0.44,
            adsSpread: 0.44,
            moveSpeed: 2.00
        }
    },
    {
        id: 'beretta_92fs',
        name: 'Beretta 92FS',
        category: 'pistol',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 33,
        rpm: 300,
        headshotMult: 2.00,
        effectiveRange: 51.0,
        fireModes: ['single'],
        ammoTypes: ['9x19_ps', '9x19_pp', '9x19_dum'],
        stats: {
            verticalRecoil: 1.59,
            horizontalRecoil: 1.25,
            hipSpread: 0.47,
            adsSpread: 0.47,
            moveSpeed: 2.00
        }
    },
    {
        id: 'gsh18_slavena',
        name: 'ГШ-18 Славена',
        category: 'pistol',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 35,
        rpm: 365,
        headshotMult: 2.00,
        effectiveRange: 51.0,
        fireModes: ['single'],
        ammoTypes: ['9x19_ps', '9x19_pp', '9x19_dum'],
        stats: {
            verticalRecoil: 1.62,
            horizontalRecoil: 1.15,
            hipSpread: 0.48,
            adsSpread: 0.48,
            moveSpeed: 2.00
        }
    },

    // ===== ПИСТОЛЕТЫ-ПУЛЕМЁТЫ (НОВЫЕ) =====
    {
        id: 'mp5sd6',
        name: 'HK MP5SD6',
        category: 'smg',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 24,
        rpm: 800,
        headshotMult: 1.25,
        effectiveRange: 49.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x19_ps', '9x19_pp', '9x19_dum'],
        stats: {
            verticalRecoil: 1.21,
            horizontalRecoil: 0.38,
            hipSpread: 0.39,
            adsSpread: 0.39
        }
    },
    {
        id: 'pp19_vityaz',
        name: 'ПП-19-01 «Витязь»',
        category: 'smg',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 28,
        rpm: 750,
        headshotMult: 1.25,
        effectiveRange: 65.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x19_ps', '9x19_pp', '9x19_dum'],
        stats: {
            verticalRecoil: 1.10,
            horizontalRecoil: 0.22,
            hipSpread: 0.27,
            adsSpread: 0.27
        }
    },
    {
        id: 'mp5sd6_sindbad',
        name: 'HK MP5SD6 Синдбада',
        category: 'smg',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 24,
        rpm: 800,
        headshotMult: 1.25,
        effectiveRange: 49.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x19_ps', '9x19_pp', '9x19_dum'],
        stats: {
            verticalRecoil: 1.21,
            horizontalRecoil: 0.38,
            hipSpread: 0.39,
            adsSpread: 0.39
        }
    },

    // ===== ШТУРМОВЫЕ ВИНТОВКИ (НОВЫЕ) =====
    {
        id: 'gorn',
        name: '«Горн»',
        category: 'assault',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 29,
        rpm: 850,
        headshotMult: 1.25,
        effectiveRange: 76.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['556x45_m855', '556x45_m995', '556x45_hp'],
        stats: {
            verticalRecoil: 1.45,
            horizontalRecoil: 1.21,
            hipSpread: 0.58,
            adsSpread: 0.24
        }
    },
    {
        id: 'aks74u_modified',
        name: 'Модифицированный АКС-74У',
        category: 'assault',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 30,
        rpm: 675,
        headshotMult: 1.25,
        effectiveRange: 62.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['545x39_ps', '545x39_bp', '545x39_snp'],
        stats: {
            verticalRecoil: 1.84,
            horizontalRecoil: 0.90,
            hipSpread: 0.58,
            adsSpread: 0.28
        }
    },
    {
        id: 'an94_assault',
        name: 'АН-94 «Абакан» штурмовой',
        category: 'assault',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 35,
        rpm: 625,
        headshotMult: 1.25,
        effectiveRange: 112.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['545x39_ps', '545x39_bp', '545x39_snp'],
        stats: {
            verticalRecoil: 1.92,
            horizontalRecoil: 0.41,
            hipSpread: 0.74,
            adsSpread: 0.19
        }
    },

    // ===== ПУЛЕМЁТЫ (НОВЫЕ) =====
    {
        id: 'rpd',
        name: 'РПД',
        category: 'machinegun',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 37,
        rpm: 700,
        headshotMult: 1.25,
        effectiveRange: 118.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['762x39_ps', '762x39_bp'],
        stats: {
            verticalRecoil: 2.90,
            horizontalRecoil: 0.81,
            hipSpread: 0.65,
            adsSpread: 0.27,
            moveSpeed: -5.00
        }
    },
    {
        id: 'pkm',
        name: 'ПКМ',
        category: 'machinegun',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 43,
        rpm: 650,
        headshotMult: 1.25,
        effectiveRange: 120.0,
        fireModes: ['auto'],
        ammoTypes: ['762x54_pp'],
        stats: {
            verticalRecoil: 3.45,
            horizontalRecoil: 1.29,
            hipSpread: 0.85,
            adsSpread: 0.20,
            moveSpeed: -6.00
        }
    },
    {
        id: 'pkp_pecheneg',
        name: 'ПКП «Печенег»',
        category: 'machinegun',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 43,
        rpm: 650,
        headshotMult: 1.25,
        effectiveRange: 126.0,
        fireModes: ['auto'],
        ammoTypes: ['762x54_pp'],
        stats: {
            verticalRecoil: 3.12,
            horizontalRecoil: 1.05,
            hipSpread: 0.69,
            adsSpread: 0.16,
            moveSpeed: -5.00
        }
    },

    // ===== СНАЙПЕРСКИЕ ВИНТОВКИ (НОВЫЕ) =====
    {
        id: 'm24',
        name: 'Снайперская винтовка М24',
        category: 'sniper',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 158,
        rpm: 35,
        headshotMult: 1.50,
        effectiveRange: 135.0,
        fireModes: ['single'],
        ammoTypes: ['308_winchester'],
        stats: {
            verticalRecoil: 2.75,
            horizontalRecoil: 1.80,
            hipSpread: 2.00,
            adsSpread: 0.05
        }
    },
    {
        id: 'mosin_obrez',
        name: 'Обрез винтовки Мосина',
        category: 'sniper',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 122,
        rpm: 20,
        headshotMult: 1.50,
        effectiveRange: 81.0,
        fireModes: ['single'],
        ammoTypes: ['762x54_lps', '762x54_bs', '762x54_hp'],
        stats: {
            verticalRecoil: 3.65,
            horizontalRecoil: 2.20,
            hipSpread: 2.00,
            adsSpread: 0.19
        }
    },
    {
        id: 'mosin',
        name: 'Винтовка Мосина',
        category: 'sniper',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 125,
        rpm: 20,
        headshotMult: 1.50,
        effectiveRange: 90.0,
        fireModes: ['single'],
        ammoTypes: ['762x54_lps', '762x54_bs', '762x54_hp'],
        stats: {
            verticalRecoil: 3.65,
            horizontalRecoil: 2.20,
            hipSpread: 2.00,
            adsSpread: 0.08
        }
    },
    {
        id: 'l96a1',
        name: 'L96A1',
        category: 'sniper',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 180,
        rpm: 30,
        headshotMult: 1.50,
        effectiveRange: 300.0,
        fireModes: ['single'],
        ammoTypes: ['308_winchester'],
        stats: {
            verticalRecoil: 2.10,
            horizontalRecoil: 1.00,
            hipSpread: 2.00,
            adsSpread: 0.03,
            moveSpeed: -3.00
        }
    },
    {
        id: 'svu',
        name: 'Снайперская винтовка укороченная',
        category: 'sniper',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        damage: 95,
        rpm: 125,
        headshotMult: 1.35,
        effectiveRange: 96.0,
        fireModes: ['single'],
        ammoTypes: ['762x54_lps', '762x54_bs', '762x54_hp'],
        stats: {
            verticalRecoil: 2.00,
            horizontalRecoil: 1.60,
            hipSpread: 5.00,
            adsSpread: 0.10
        }
    },
    {
        id: 'svds',
        name: 'СВД-С',
        category: 'sniper',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 120,
        rpm: 100,
        headshotMult: 1.35,
        effectiveRange: 114.0,
        fireModes: ['single'],
        ammoTypes: ['762x54_lps', '762x54_bs', '762x54_hp'],
        stats: {
            verticalRecoil: 2.75,
            horizontalRecoil: 1.20,
            hipSpread: 2.00,
            adsSpread: 0.09
        }
    },
    {
        id: 'mk14_ebr',
        name: 'Mk14 Enhanced Battle Rifle',
        category: 'sniper',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 52,
        rpm: 525,
        headshotMult: 1.35,
        effectiveRange: 190.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['762x51_m59', '762x51_m61'],
        stats: {
            verticalRecoil: 4.05,
            horizontalRecoil: 1.38,
            hipSpread: 1.10,
            adsSpread: 0.08
        }
    },
    {
        id: 'sr25',
        name: 'SR-25',
        category: 'sniper',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 85,
        rpm: 215,
        headshotMult: 1.50,
        effectiveRange: 130.0,
        fireModes: ['single'],
        ammoTypes: ['308_winchester'],
        stats: {
            verticalRecoil: 2.52,
            horizontalRecoil: 0.55,
            hipSpread: 5.00,
            adsSpread: 0.10
        }
    },
    {
        id: 'sks',
        name: 'СКС',
        category: 'sniper',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 45,
        rpm: 460,
        headshotMult: 1.35,
        effectiveRange: 150.0,
        fireModes: ['single'],
        ammoTypes: ['762x39_ps', '762x39_bp'],
        stats: {
            verticalRecoil: 2.62,
            horizontalRecoil: 0.85,
            hipSpread: 5.00,
            adsSpread: 0.17
        }
    },
    {
        id: 'vssk_vykhlop',
        name: 'ВССК «Выхлоп»',
        category: 'sniper',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 68,
        rpm: 33,
        headshotMult: 1.60,
        effectiveRange: 310.0,
        fireModes: ['single'],
        ammoTypes: ['127x55'],
        stats: {
            verticalRecoil: 4.50,
            horizontalRecoil: 4.25,
            hipSpread: 5.00,
            adsSpread: 0.04,
            moveSpeed: -4.00,
            armorPenetration: 90
        }
    },
    {
        id: 'svt40',
        name: 'СВТ-40',
        category: 'sniper',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 75,
        rpm: 120,
        headshotMult: 1.25,
        effectiveRange: 87.0,
        fireModes: ['single'],
        ammoTypes: ['762x54_lps', '762x54_bs', '762x54_hp'],
        stats: {
            verticalRecoil: 3.70,
            horizontalRecoil: 2.65,
            hipSpread: 2.20,
            adsSpread: 0.16
        }
    },
    {
        id: 'avt40',
        name: 'АВТ-40',
        category: 'sniper',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        damage: 81,
        rpm: 160,
        headshotMult: 1.25,
        effectiveRange: 162.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['762x54_lps', '762x54_bs', '762x54_hp'],
        stats: {
            verticalRecoil: 0.91,
            horizontalRecoil: 0.45,
            hipSpread: 5.00,
            adsSpread: 0.35
        }
    },
    {
        id: 'vintorez_m',
        name: 'ВССМ «Винторез-М» 6П29М',
        category: 'sniper',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 36,
        rpm: 800,
        headshotMult: 1.35,
        effectiveRange: 68.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x39_sp5', '9x39_sp6'],
        stats: {
            verticalRecoil: 1.40,
            horizontalRecoil: 0.22,
            hipSpread: 5.00,
            adsSpread: 0.10
        }
    },
    {
        id: 'vss_vintorez',
        name: 'ВСС «Винторез»',
        category: 'sniper',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 36.5,
        rpm: 750,
        headshotMult: 1.35,
        effectiveRange: 78.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['9x39_sp5', '9x39_sp6'],
        stats: {
            verticalRecoil: 1.46,
            horizontalRecoil: 0.31,
            hipSpread: 5.00,
            adsSpread: 0.12
        }
    },
    {
        id: 'ots03_svua',
        name: 'ОЦ-03 СВУ-А',
        category: 'sniper',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 65,
        rpm: 221,
        headshotMult: 1.35,
        effectiveRange: 87.0,
        fireModes: ['auto'],
        ammoTypes: ['762x54_lps', '762x54_bs', '762x54_hp'],
        stats: {
            verticalRecoil: 1.50,
            horizontalRecoil: 0.93,
            hipSpread: 5.00,
            adsSpread: 0.12
        }
    },
    {
        id: 'hk_g3sg1',
        name: 'HK G3SG-1',
        category: 'sniper',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 57,
        rpm: 380,
        headshotMult: 1.35,
        effectiveRange: 200.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['762x51_m59', '762x51_m61'],
        stats: {
            verticalRecoil: 1.98,
            horizontalRecoil: 0.45,
            hipSpread: 2.50,
            adsSpread: 0.15
        }
    },

    // ===== ДРОБОВИКИ (НОВЫЕ) =====
    {
        id: 'toz34_obrez',
        name: 'Обрез ТОЗ-34',
        category: 'shotgun',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 77,
        rpm: 1000,
        headshotMult: 1.25,
        effectiveRange: 72.0,
        fireModes: ['single', 'auto'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 6.25,
            horizontalRecoil: 4.75,
            hipSpread: 1.18,
            adsSpread: 1.18
        }
    },
    {
        id: 'toz34',
        name: 'Охотничье ружьё ТОЗ-34',
        category: 'shotgun',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 81,
        rpm: 1000,
        headshotMult: 1.25,
        effectiveRange: 96.0,
        fireModes: ['single', 'auto'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 6.14,
            horizontalRecoil: 4.64,
            hipSpread: 1.06,
            adsSpread: 1.06
        }
    },
    {
        id: 'toz66_obrez',
        name: 'Обрез ТОЗ-66',
        category: 'shotgun',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 80,
        rpm: 1000,
        headshotMult: 1.25,
        effectiveRange: 72.0,
        fireModes: ['single', 'auto'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 6.00,
            horizontalRecoil: 5.00,
            hipSpread: 1.30,
            adsSpread: 1.30
        }
    },
    {
        id: 'toz66',
        name: 'Охотничье ружьё ТОЗ-66',
        category: 'shotgun',
        rarity: 'common',
        rarityName: 'Распространённое',
        damage: 84,
        rpm: 1000,
        headshotMult: 1.25,
        effectiveRange: 89.0,
        fireModes: ['single', 'auto'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 5.89,
            horizontalRecoil: 4.89,
            hipSpread: 1.11,
            adsSpread: 1.11
        }
    },
    {
        id: 'saiga12c',
        name: 'Сайга-12C',
        category: 'shotgun',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 88,
        rpm: 310,
        headshotMult: 1.25,
        effectiveRange: 94.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 5.54,
            horizontalRecoil: 3.05,
            hipSpread: 0.93,
            adsSpread: 0.93
        }
    },
    {
        id: 'vepr12_molot',
        name: 'Вепрь-12 «Молот»',
        category: 'shotgun',
        rarity: 'unique',
        rarityName: 'Уникальное',
        damage: 80,
        rpm: 335,
        headshotMult: 1.25,
        effectiveRange: 90.0,
        fireModes: ['auto', 'single'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 4.67,
            horizontalRecoil: 2.70,
            hipSpread: 0.88,
            adsSpread: 0.88
        }
    },
    {
        id: 'toz66_obrez_sisyphus',
        name: 'Обрез ТОЗ-66 Сизифа',
        category: 'shotgun',
        rarity: 'rare',
        rarityName: 'Раритетное',
        damage: 80,
        rpm: 800,
        headshotMult: 1.25,
        effectiveRange: 72.0,
        fireModes: ['single', 'auto'],
        ammoTypes: ['12x70_shot', '12x70_buckshot', '12x76_dart', '12x76_slug'],
        stats: {
            verticalRecoil: 6.00,
            horizontalRecoil: 5.00,
            hipSpread: 1.30,
            adsSpread: 1.30
        }
    }
];

// ============================================================
// ТИПЫ ПАТРОНОВ ДЛЯ DPS-КАЛЬКУЛЯТОРА
// ============================================================

const AMMO_TYPES = [
    // ===== 9x18 мм =====
    {
        id: '9x18_p',
        name: 'Патроны 9x18 мм П',
        caliber: '9x18',
        type: 'standard',
        price: 2,
        stats: {},
        pellets: null,
        description: 'Стандартные пистолетные патроны'
    },
    {
        id: '9x18_pp',
        name: 'Патроны 9x18 мм +P+',
        caliber: '9x18',
        type: 'hp',
        price: 3,
        stats: {
            damageModifier: 20,
            armorPenetration: -5
        },
        pellets: null,
        description: 'Усиленные патроны с повышенным уроном'
    },
    {
        id: '9x18_bjt',
        name: 'Патроны 9x18 мм БЖТ',
        caliber: '9x18',
        type: 'ap',
        price: null,
        stats: {
            armorPenetration: 5
        },
        pellets: null,
        description: 'Бронебойно-зажигательно-трассирующие патроны'
    },

    // ===== 9x19 мм =====
    {
        id: '9x19_ps',
        name: 'Патроны 9x19 мм ПС',
        caliber: '9x19',
        type: 'standard',
        price: 3,
        stats: {},
        pellets: null,
        description: 'Стандартные пистолетные патроны'
    },
    {
        id: '9x19_dum',
        name: 'Патроны 9x19 мм «Дум-дум»',
        caliber: '9x19',
        type: 'hp',
        price: 4,
        stats: {
            damageModifier: 17,
            armorPenetration: -5
        },
        pellets: null,
        description: 'Экспансивные патроны с повышенным уроном'
    },
    {
        id: '9x19_pp',
        name: 'Патроны 9x19 мм ПП',
        caliber: '9x19',
        type: 'ap',
        price: null,
        stats: {
            armorPenetration: 8
        },
        pellets: null,
        description: 'Бронебойные патроны'
    },

    // ===== 9x39 мм =====
    {
        id: '9x39_sp5',
        name: 'Патроны 9x39 мм СП-5',
        caliber: '9x39',
        type: 'standard',
        price: 7,
        stats: {},
        pellets: null,
        description: 'Стандартные дозвуковые патроны'
    },
    {
        id: '9x39_sp6',
        name: 'Патроны 9x39 мм СП-6',
        caliber: '9x39',
        type: 'ap',
        price: null,
        stats: {
            rangeModifier: 25,
            armorPenetration: 10
        },
        pellets: null,
        description: 'Бронебойные дозвуковые патроны'
    },

    // ===== .45 ACP =====
    {
        id: '45acp',
        name: 'Патроны .45 ACP',
        caliber: '.45ACP',
        type: 'standard',
        price: 4,
        stats: {},
        pellets: null,
        description: 'Стандартные пистолетные патроны'
    },
    {
        id: '45acp_hydra',
        name: 'Патроны .45 ACP Hydroshock',
        caliber: '.45ACP',
        type: 'hp',
        price: 5,
        stats: {
            damageModifier: 80,
            armorPenetration: -25
        },
        pellets: null,
        description: 'Экспансивные патроны с высоким уроном'
    },
    {
        id: '45acp_super',
        name: 'Патроны .45 ACP +P Super',
        caliber: '.45ACP',
        type: 'ap',
        price: null,
        stats: {
            damageModifier: -3,
            armorPenetration: 10
        },
        pellets: null,
        description: 'Усиленные бронебойные патроны'
    },

    // ===== 5,45x39 мм =====
    {
        id: '545x39_ps',
        name: 'Патроны 5,45x39 мм ПС',
        caliber: '5.45x39',
        type: 'standard',
        price: 5,
        stats: {},
        pellets: null,
        description: 'Стандартные автоматные патроны'
    },
    {
        id: '545x39_snp',
        name: 'Патроны 5,45x39 мм СН-П',
        caliber: '5.45x39',
        type: 'hp',
        price: 6,
        stats: {
            damageModifier: 50,
            armorPenetration: -15
        },
        pellets: null,
        description: 'Экспансивные патроны с повышенным уроном'
    },
    {
        id: '545x39_bp',
        name: 'Патроны 5,45x39 мм БП',
        caliber: '5.45x39',
        type: 'ap',
        price: null,
        stats: {
            damageModifier: -5,
            armorPenetration: 12
        },
        pellets: null,
        description: 'Бронебойные патроны'
    },

    // ===== 5,56x45 мм =====
    {
        id: '556x45_m855',
        name: 'Патроны 5,56x45 мм M855',
        caliber: '5.56x45',
        type: 'standard',
        price: 6,
        stats: {},
        pellets: null,
        description: 'Стандартные патроны НАТО'
    },
    {
        id: '556x45_hp',
        name: 'Патроны 5,56x45 мм БПЗ НР',
        caliber: '5.56x45',
        type: 'hp',
        price: 7,
        stats: {
            damageModifier: 50,
            armorPenetration: -15
        },
        pellets: null,
        description: 'Экспансивные патроны с повышенным уроном'
    },
    {
        id: '556x45_m995',
        name: 'Патроны 5,56x45 мм M995',
        caliber: '5.56x45',
        type: 'ap',
        price: null,
        stats: {
            damageModifier: -9,
            armorPenetration: 14
        },
        pellets: null,
        description: 'Бронебойные патроны'
    },

    // ===== 7,62x39 мм =====
    {
        id: '762x39_ps',
        name: 'Патроны 7,62x39 мм ПС',
        caliber: '7.62x39',
        type: 'standard',
        price: 12,
        stats: {},
        pellets: null,
        description: 'Стандартные автоматные патроны'
    },
    {
        id: '762x39_bp',
        name: 'Патроны 7,62x39 мм БП',
        caliber: '7.62x39',
        type: 'ap',
        price: null,
        stats: {
            damageModifier: -7,
            armorPenetration: 13
        },
        pellets: null,
        description: 'Бронебойные патроны'
    },

    // ===== 7,62x51 мм =====
    {
        id: '762x51_m59',
        name: 'Патроны 7,62x51 мм M59',
        caliber: '7.62x51',
        type: 'standard',
        price: 13,
        stats: {},
        pellets: null,
        description: 'Стандартные винтовочные патроны'
    },
    {
        id: '762x51_m61',
        name: 'Патроны 7,62x51 мм М61',
        caliber: '7.62x51',
        type: 'ap',
        price: null,
        stats: {
            damageModifier: -14,
            armorPenetration: 18
        },
        pellets: null,
        description: 'Бронебойные патроны'
    },

    // ===== 7,62x54 мм =====
    {
        id: '762x54_lps',
        name: 'Патроны 7,62x54 мм ЛПС',
        caliber: '7.62x54',
        type: 'standard',
        price: 14,
        stats: {},
        pellets: null,
        description: 'Стандартные винтовочные патроны'
    },
    {
        id: '762x54_hp',
        name: 'Патроны 7,62x54 мм HP',
        caliber: '7.62x54',
        type: 'hp',
        price: 16,
        stats: {
            damageModifier: 50,
            armorPenetration: -20
        },
        pellets: null,
        description: 'Экспансивные патроны с повышенным уроном'
    },
    {
        id: '762x54_pp',
        name: 'Патроны 7,62x54 мм ПП',
        caliber: '7.62x54',
        type: 'ap',
        price: 26,
        stats: {
            damageModifier: -15,
            armorPenetration: 20
        },
        pellets: null,
        description: 'Бронебойные патроны'
    },
    {
        id: '762x54_bs',
        name: 'Патроны 7,62x54 мм БС',
        caliber: '7.62x54',
        type: 'ap_plus',
        price: null,
        stats: {
            armorPenetration: 10
        },
        pellets: null,
        description: 'Бронебойно-зажигательные патроны'
    },

    // ===== .308 Winchester =====
    {
        id: '308_winchester',
        name: 'Патроны .308 Winchester',
        caliber: '.308',
        type: 'standard',
        price: 21,
        stats: {
            armorPenetration: 10
        },
        pellets: null,
        description: 'Снайперские патроны'
    },

    // ===== 12,7x55 мм =====
    {
        id: '127x55',
        name: 'Патроны 12,7x55 мм',
        caliber: '12.7x55',
        type: 'standard',
        price: 19,
        stats: {
            armorPenetration: 10
        },
        pellets: null,
        description: 'Крупнокалиберные патроны'
    },

    // ===== 12x70 / 12x76 (дробовики) =====
    {
        id: '12x70_shot',
        name: 'Патроны 12x70 Дробь',
        caliber: '12gauge',
        type: 'shot',
        price: 4,
        stats: {
            rangeModifier: -60,
            damageModifier: -48,
            armorPenetration: -25,
            spreadModifier: 300
        },
        pellets: 8,
        description: 'Дробовые патроны, 8 дробин'
    },
    {
        id: '12x70_buckshot',
        name: 'Патроны 12x70 Картечь',
        caliber: '12gauge',
        type: 'buckshot',
        price: 5,
        stats: {
            rangeModifier: -10,
            damageModifier: -60,
            armorPenetration: -16,
            spreadModifier: 200
        },
        pellets: 5,
        description: 'Картечные патроны, 5 картечин'
    },
    {
        id: '12x76_dart',
        name: 'Патроны 12x76 Дротик',
        caliber: '12gauge',
        type: 'dart',
        price: 6,
        stats: {
            damageModifier: -18,
            armorPenetration: 20,
            spreadModifier: -62
        },
        pellets: 1,
        description: 'Подкалиберный дротик'
    },
    {
        id: '12x76_slug',
        name: 'Патроны 12x76 Жакан',
        caliber: '12gauge',
        type: 'slug',
        price: 5,
        stats: {
            armorPenetration: -2,
            spreadModifier: -38
        },
        pellets: 1,
        description: 'Пулевой патрон'
    },

    // ===== Специальные =====
    {
        id: 'firemix',
        name: 'Огнесмесь',
        caliber: 'flamethrower',
        type: 'incendiary',
        price: 5,
        stats: {
            armorPenetration: -15,
            spreadModifier: 300,
            mutantDamageMultiplier: 2.0
        },
        pellets: 6,
        description: 'Зажигательная смесь для огнемёта'
    },
    {
        id: 'makeshift_batteries',
        name: 'Кустарные батареи',
        caliber: 'electric',
        type: 'standard',
        price: null,
        stats: {
            armorPenetration: -30
        },
        pellets: null,
        description: 'Самодельные батареи для электрооружия'
    },
    {
        id: 'accumulators',
        name: 'Аккумуляторы',
        caliber: 'electric',
        type: 'enhanced',
        price: null,
        stats: {
            rangeModifier: 20,
            damageModifier: 10
        },
        pellets: null,
        description: 'Качественные аккумуляторы для электрооружия'
    }
];

// ============================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ ПАТРОНОВ
// ============================================================

function getAmmoById(ammoId) {
    return AMMO_TYPES.find(a => a.id === ammoId);
}

function getAmmoByCaliber(caliber) {
    return AMMO_TYPES.filter(a => a.caliber === caliber);
}

function getAmmoForWeapon(weapon) {
    if (!weapon.ammoTypes) return [];
    return AMMO_TYPES.filter(a => weapon.ammoTypes.includes(a.id));
}

function calculateAmmoDamage(baseDamage, ammo) {
    const modifier = ammo.stats?.damageModifier || 0;
    return baseDamage * (1 + modifier / 100);
}

function calculateAmmoArmorPen(baseArmorPen, ammo) {
    const modifier = ammo.stats?.armorPenetration || 0;
    return baseArmorPen + modifier;
}

function calculateAmmoRange(baseRange, ammo) {
    const modifier = ammo.stats?.rangeModifier || 0;
    return baseRange * (1 + modifier / 100);
}

function calculateAmmoSpread(baseSpread, ammo) {
    const modifier = ammo.stats?.spreadModifier || 0;
    return baseSpread * (1 + modifier / 100);
}

const ATTACHMENTS = [
    { id: 'barska', name: 'Коллиматорный прицел Barska', type: 'scope', stats: { aimTime: -15.00 } },
    { id: 'pbs_1', name: 'Глушитель ПБС-1', type: 'muzzle', stats: { effectiveRange: -10.00, hipSpread: -12.00, adsSpread: -12.00 } },
    { id: 'tac_grip', name: 'Тактическая рукоятка', type: 'grip', stats: { aimTime: -5.00, verticalRecoil: -9.00, horizontalRecoil: -4.00 } },
    { id: 'magpul_rvg', name: 'Рукоятка Magpul RVG', type: 'grip', stats: { aimTime: -7.00, verticalRecoil: -4.00, horizontalRecoil: -3.00 } }
];

function getAttachmentById(id) {
    return ATTACHMENTS.find(a => a.id === id);
}

function getAttachmentsForSlot(slotType, allowedIds) {
    if (allowedIds === true) return ATTACHMENTS.filter(a => a.type === slotType);
    if (Array.isArray(allowedIds)) return ATTACHMENTS.filter(a => allowedIds.includes(a.id));
    return [];
}

function calculateArmorProtection(bulletResistance) {
    if (bulletResistance <= 0) return 0;
    return (bulletResistance / (bulletResistance + 166.67)) * 100;
}

function calculateEffectiveProtection(bulletResistance, armorPenetration) {
    const baseProtection = calculateArmorProtection(bulletResistance);
    return Math.max(0, baseProtection - armorPenetration);
}

function calculateDamageAfterArmor(baseDamage, bulletResistance, armorPenetration) {
    const effectiveProtection = calculateEffectiveProtection(bulletResistance, armorPenetration);
    return baseDamage * (1 - effectiveProtection / 100);
}

function calculateDPS(damage, rpm) {
    return damage * (rpm / 60);
}

function calculateTTK(damage, rpm, targetHP) {
    if (damage <= 0) return Infinity;
    const shotsNeeded = Math.ceil(targetHP / damage);
    const timeBetweenShots = 60 / rpm;
    return (shotsNeeded - 1) * timeBetweenShots;
}

function getWeaponById(weaponId) {
    return WEAPONS.find(w => w.id === weaponId);
}

function getAmmoById(ammoId) {
    return AMMO_TYPES.find(a => a.id === ammoId);
}

function getAmmoForWeapon(weapon) {
    return AMMO_TYPES.filter(a => weapon.ammoTypes.includes(a.id));
}

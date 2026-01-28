// ============================================================
// PROJECT CATACLYSM WIKI — ЕДИНАЯ БАЗА ДАННЫХ
// ============================================================

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
        enhancement: null
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
        enhancement: {
            maxLevel: 15,
            bonuses: {
                bulletResistance: [0, 0.9, 1.8, 2.7, 3.59, 6.29, 7.79, 8.98, 10.48, 11.98, 15.87, 17.97, 19.77, 21.86, 23.96, 26.06]
            }
        }
    }
];

// ============== АРТЕФАКТЫ ==============
const ARTIFACTS = [
    // ===== ГРАВИТАЦИОННЫЕ (15 артефактов) =====
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

    // ===== ХИМИЧЕСКИЕ (12 артефактов) =====
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

    // ===== ЭЛЕКТРИЧЕСКИЕ (10 артефактов) =====
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

    // ===== ТЕРМИЧЕСКИЕ (8 артефактов) =====
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

    // ===== УНИКАЛЬНЫЕ (5 артефактов) =====
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

    // ===== МОРОЗНЫЕ / ИВЕНТ (7 артефактов) =====
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

/**
 * Получить полный путь к изображению артефакта
 * @param {Object} artifact - объект артефакта
 * @param {string} basePath - базовый путь (например '../Table/' для калькулятора)
 */
function getArtifactImagePath(artifact, basePath = '') {
    return `${basePath}${artifact.imageFolder}/${artifact.image}`;
}

/**
 * Получить название категории по ID
 */
function getCategoryName(categoryId) {
    return ARTIFACT_CATEGORIES[categoryId]?.name || categoryId;
}

/**
 * Отфильтровать артефакты по категории
 */
function getArtifactsByCategory(categoryId) {
    return ARTIFACTS.filter(a => a.category === categoryId);
}

/**
 * Форматирование цены
 */
function formatPrice(price) {
    if (price === null) return null;
    return price.toLocaleString('ru-RU') + ' ₽';
}

/**
 * Форматирование значения стата
 */
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

/**
 * Форматирование числа
 */
function formatNumber(value) {
    return value.toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
}

// ============================================================
// ОРУЖИЕ И ПАТРОНЫ ДЛЯ DPS-КАЛЬКУЛЯТОРА
// ============================================================

// ============== КАТЕГОРИИ ОРУЖИЯ ==============
const WEAPON_CATEGORIES = {
    assault: {
        id: 'assault',
        name: 'Штурмовые винтовки',
        nameShort: 'Штурмовые',
        icon: '🔫'
    },
    sniper: {
        id: 'sniper',
        name: 'Снайперские винтовки',
        nameShort: 'Снайперские',
        icon: '🎯'
    },
    shotgun: {
        id: 'shotgun',
        name: 'Дробовики',
        nameShort: 'Дробовики',
        icon: '💥'
    },
    smg: {
        id: 'smg',
        name: 'Пистолеты-пулемёты',
        nameShort: 'ПП',
        icon: '🔧'
    },
    pistol: {
        id: 'pistol',
        name: 'Пистолеты',
        nameShort: 'Пистолеты',
        icon: '🔫'
    },
    machinegun: {
        id: 'machinegun',
        name: 'Пулемёты',
        nameShort: 'Пулемёты',
        icon: '⚙️'
    }
};

// ============== ОРУЖИЕ ==============
const WEAPONS = [
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
        slots: {
            scope: true,
            muzzle: ['pbs_1'],
            grip: true
        },
        stats: {
            verticalRecoil: 2.49,
            horizontalRecoil: 0.90,
            hipSpread: 0.48,
            adsSpread: 0.15
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
    }
];

// ============== ПАТРОНЫ ==============
const AMMO_TYPES = [
    // 7.62x51
    {
        id: '762x51_m59',
        name: 'Патроны 7,62x51 мм M59',
        caliber: '7.62x51',
        type: 'standard',
        armorPenetration: 0,
        damageModifier: 1.0,
        description: 'Стандартные патроны'
    },
    {
        id: '762x51_m61',
        name: 'Патроны 7,62x51 мм M61',
        caliber: '7.62x51',
        type: 'ap',
        armorPenetration: 18,
        damageModifier: 0.86,
        description: 'Бронебойные патроны'
    },
    
    // .308 Winchester
    {
        id: '308_winchester',
        name: 'Патроны .308 Winchester',
        caliber: '.308',
        type: 'standard',
        armorPenetration: 0,
        damageModifier: 1.0,
        description: 'Стандартные снайперские патроны'
    },
    
    // 12 калибр
    {
        id: '12x70_shot',
        name: 'Патроны 12x70 Дробь',
        caliber: '12gauge',
        type: 'shot',
        armorPenetration: 0,
        damageModifier: 1.0,
        pellets: 8,
        description: 'Дробовые патроны, 8 дробин'
    },
    {
        id: '12x70_buckshot',
        name: 'Патроны 12x70 Картечь',
        caliber: '12gauge',
        type: 'buckshot',
        armorPenetration: 5,
        damageModifier: 1.1,
        pellets: 9,
        description: 'Картечные патроны, 9 картечин'
    },
    {
        id: '12x76_dart',
        name: 'Патроны 12x76 Дротик',
        caliber: '12gauge',
        type: 'dart',
        armorPenetration: 20,
        damageModifier: 0.8,
        pellets: 1,
        description: 'Подкалиберный дротик'
    },
    {
        id: '12x76_slug',
        name: 'Патроны 12x76 Жакан',
        caliber: '12gauge',
        type: 'slug',
        armorPenetration: 10,
        damageModifier: 1.5,
        pellets: 1,
        description: 'Пулевой патрон'
    }
];

// ============== МОДУЛИ ==============
const ATTACHMENTS = [
    // ПРИЦЕЛЫ
    {
        id: 'barska',
        name: 'Коллиматорный прицел Barska',
        type: 'scope',
        stats: { aimTime: -15.00 }
    },
    
    // НАДУЛЬНИКИ
    {
        id: 'pbs_1',
        name: 'Глушитель ПБС-1',
        type: 'muzzle',
        stats: { effectiveRange: -10.00, hipSpread: -12.00, adsSpread: -12.00 }
    },
    
    // РУКОЯТКИ
    {
        id: 'tac_grip',
        name: 'Тактическая рукоятка',
        type: 'grip',
        stats: { aimTime: -5.00, verticalRecoil: -9.00, horizontalRecoil: -4.00 }
    },
    {
        id: 'magpul_rvg',
        name: 'Рукоятка Magpul RVG',
        type: 'grip',
        stats: { aimTime: -7.00, verticalRecoil: -4.00, horizontalRecoil: -3.00 }
    }
];

// ============== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ МОДУЛЕЙ ==============

/**
 * Получить модуль по ID
 */
function getAttachmentById(id) {
    return ATTACHMENTS.find(a => a.id === id);
}

/**
 * Получить модули для слота оружия
 */
function getAttachmentsForSlot(slotType, allowedIds) {
    // Если allowedIds === true, значит подходят все модули этого типа
    if (allowedIds === true) {
        return ATTACHMENTS.filter(a => a.type === slotType);
    }
    // Если массив ID, фильтруем по нему
    if (Array.isArray(allowedIds)) {
        return ATTACHMENTS.filter(a => allowedIds.includes(a.id));
    }
    return [];
}

// ============== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ DPS ==============

/**
 * Расчёт защиты от пулестойкости
 */
function calculateArmorProtection(bulletResistance) {
    if (bulletResistance <= 0) return 0;
    return (bulletResistance / (bulletResistance + 166.67)) * 100;
}

/**
 * Расчёт эффективной защиты с учётом бронепробития
 */
function calculateEffectiveProtection(bulletResistance, armorPenetration) {
    const baseProtection = calculateArmorProtection(bulletResistance);
    return Math.max(0, baseProtection - armorPenetration);
}

/**
 * Расчёт урона с учётом брони
 */
function calculateDamageAfterArmor(baseDamage, bulletResistance, armorPenetration) {
    const effectiveProtection = calculateEffectiveProtection(bulletResistance, armorPenetration);
    return baseDamage * (1 - effectiveProtection / 100);
}

/**
 * Расчёт DPS
 */
function calculateDPS(damage, rpm) {
    return damage * (rpm / 60);
}

/**
 * Расчёт TTK (Time To Kill)
 */
function calculateTTK(damage, rpm, targetHP) {
    if (damage <= 0) return Infinity;
    const shotsNeeded = Math.ceil(targetHP / damage);
    const timeBetweenShots = 60 / rpm;
    return (shotsNeeded - 1) * timeBetweenShots;
}

/**
 * Получить оружие по ID
 */
function getWeaponById(weaponId) {
    return WEAPONS.find(w => w.id === weaponId);
}

/**
 * Получить патрон по ID
 */
function getAmmoById(ammoId) {
    return AMMO_TYPES.find(a => a.id === ammoId);
}

/**
 * Получить патроны для оружия
 */
function getAmmoForWeapon(weapon) {
    return AMMO_TYPES.filter(a => weapon.ammoTypes.includes(a.id));
}
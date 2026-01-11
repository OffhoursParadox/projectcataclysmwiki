/**
 * Project Cataclysm Wiki - Calculator Data
 * Данные о броне, контейнерах и артефактах
 */

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
        stats: {
            maxStamina: -8.00
        },
        shielding: {
            radiation: -1.00
        }
    },
    {
        id: 'container_x2',
        name: 'Самодельный контейнер X2',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'bulky',
        typeName: 'Громоздкий',
        slots: 2,
        stats: {
            maxStamina: -15.00,
            moveSpeed: -1.00
        },
        shielding: {
            radiation: -2.00
        }
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
        shielding: {
            radiation: -3.00
        }
    },
    {
        id: 'pka_3',
        name: 'ПКА-3',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'standard',
        typeName: 'Стандартный',
        slots: 3,
        stats: {
            maxStamina: -5.00
        },
        shielding: {
            radiation: -2.00
        }
    },
    {
        id: 'pka_4',
        name: 'ПКА-4',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'standard',
        typeName: 'Стандартный',
        slots: 4,
        stats: {
            maxStamina: -5.00
        },
        shielding: {
            radiation: -2.50
        }
    },
    {
        id: 'container_radiy',
        name: 'Контейнер "Радий"',
        rarity: 'rare',
        rarityName: 'Раритетное',
        type: 'standard',
        typeName: 'Стандартный',
        slots: 5,
        stats: {
            maxStamina: -10.00
        },
        shielding: {
            radiation: -1.00
        }
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
        shielding: {
            radiation: -6.00
        }
    },
    {
        id: 'container_bariy',
        name: 'Контейнер "Барий"',
        rarity: 'unique',
        rarityName: 'Уникальное',
        type: 'spacious',
        typeName: 'Вместительный',
        slots: 6,
        stats: {
            maxStamina: -20.00
        },
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
        containerTypes: ['all'], // Любые контейнеры
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
        }
    },
    {
        id: 'sunrise',
        name: 'Комбинезон «Sunrise»',
        rarity: 'uncommon',
        rarityName: 'Необычное',
        type: 'Лёгкие',
        containerTypes: ['compact', 'standard'],
        stats: {
            radiationProtection: 150,
            bioProtection: 120,
            thermalProtection: 100,
            psiProtection: 80,
            heatResistance: 80,
            chemResistance: 70,
            electroResistance: 60,
            impactResistance: 40,
            tearProtection: 45,
            bulletResistance: 60,
            maxWeight: 18.00
        }
    },
    {
        id: 'stalker_suit',
        name: 'Комбинезон «Сталкер»',
        rarity: 'common',
        rarityName: 'Распространённое',
        type: 'Лёгкие',
        containerTypes: ['compact', 'standard'],
        stats: {
            radiationProtection: 100,
            bioProtection: 80,
            thermalProtection: 60,
            psiProtection: 40,
            heatResistance: 50,
            chemResistance: 40,
            electroResistance: 30,
            impactResistance: 25,
            tearProtection: 30,
            bulletResistance: 35,
            maxWeight: 12.00
        }
    },
    {
        id: 'skat_9',
        name: 'Бронекостюм «СКАТ-9»',
        rarity: 'rare',
        rarityName: 'Раритетное',
        type: 'Тяжёлые',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 400,
            bioProtection: 350,
            thermalProtection: 300,
            psiProtection: 250,
            heatResistance: 180,
            chemResistance: 170,
            electroResistance: 160,
            impactResistance: 150,
            tearProtection: 160,
            bulletResistance: 280,
            maxWeight: 45.00,
            maxStamina: -10.00,
            moveSpeed: -5.00
        }
    },
    {
        id: 'seva',
        name: 'Научный костюм «СЕВА»',
        rarity: 'collection',
        rarityName: 'Коллекционное',
        type: 'Научные',
        containerTypes: ['compact', 'standard', 'spacious'],
        stats: {
            radiationProtection: 500,
            bioProtection: 450,
            thermalProtection: 350,
            psiProtection: 400,
            heatResistance: 200,
            chemResistance: 220,
            electroResistance: 180,
            impactResistance: 80,
            tearProtection: 90,
            bulletResistance: 120,
            maxWeight: 25.00
        }
    },
    {
        id: 'exoskeleton',
        name: 'Экзоскелет',
        rarity: 'unique',
        rarityName: 'Уникальное',
        type: 'Экзоскелеты',
        containerTypes: ['all'],
        stats: {
            radiationProtection: 350,
            bioProtection: 300,
            thermalProtection: 250,
            psiProtection: 200,
            heatResistance: 150,
            chemResistance: 140,
            electroResistance: 130,
            impactResistance: 200,
            tearProtection: 220,
            bulletResistance: 350,
            maxWeight: 80.00,
            maxStamina: -15.00
        }
    }
];

// ============== АРТЕФАКТЫ ==============
const ARTIFACTS = [
    // ===== ГРАВИТАЦИОННЫЕ =====
    {
        id: 'blood_stone',
        name: 'Кровь камня',
        nameEn: 'Blood Stone',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 1,
        image: '../Table/Artifacts/BS.png',
        stats: {
            regeneration: 1.00,
            bleeding: -0.25,
            radiation: 1.00
        }
    },
    {
        id: 'vyvert',
        name: 'Выверт',
        nameEn: 'Vyvert',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 1,
        image: '../Table/Artifacts/Vivert.png',
        stats: {
            tearProtection: 20,
            maxWeight: 6.00,
            radiation: 1.00
        }
    },
    {
        id: 'medusa',
        name: 'Медуза',
        nameEn: 'Medusa',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 1,
        image: '../Table/Artifacts/Medusa.png',
        stats: {
            radiationProtection: 20,
            maxWeight: 4.00,
            radiation: -2.00,
            bulletResistance: -3
        }
    },
    {
        id: 'stone_flower',
        name: 'Каменный цветок',
        nameEn: 'Crystal Flower',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 1,
        image: '../Table/Artifacts/SF.png',
        stats: {
            psiProtection: 20,
            maxWeight: 6.00,
            bulletResistance: 8,
            radiation: 2.00
        }
    },
    {
        id: 'meat_chunk',
        name: 'Ломоть мяса',
        nameEn: 'Meat Chunk',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 2,
        image: '../Table/Artifacts/LM.png',
        stats: {
            regeneration: 2.00,
            bleeding: -0.75,
            radiation: 1.50
        }
    },
    {
        id: 'gravi',
        name: 'Грави',
        nameEn: 'Gravi',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 2,
        image: '../Table/Artifacts/Gravy.png',
        stats: {
            tearProtection: 30,
            maxWeight: 12.00,
            radiation: 2.00
        }
    },
    {
        id: 'night_star',
        name: 'Ночная звезда',
        nameEn: 'Night Star',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 2,
        image: '../Table/Artifacts/NS.png',
        stats: {
            bulletResistance: 21,
            maxStamina: -2.00,
            radiation: 3.00
        }
    },
    {
        id: 'mercury_ball',
        name: 'Ртутный шар',
        nameEn: 'Mercury Ball',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 2,
        image: '../Table/Artifacts/RB.png',
        stats: {
            impactResistance: 20,
            radiationProtection: 20,
            tearProtection: 15,
            saturation: 1.00,
            maxWeight: -6.00,
            radiation: 1.00
        }
    },
    {
        id: 'gold_fish',
        name: 'Золотая рыбка',
        nameEn: 'Gold Fish',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 3,
        image: '../Table/Artifacts/GF.png',
        stats: {
            tearProtection: 60,
            maxWeight: 15.00,
            maxStamina: -5.00,
            radiation: 2.00
        }
    },
    {
        id: 'spring',
        name: 'Пружина',
        nameEn: 'Spring',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 3,
        image: '../Table/Artifacts/Pruzh.png',
        stats: {
            impactResistance: 60,
            maxWeight: 8.00,
            bioProtection: -20,
            thermalProtection: -20,
            heatResistance: -20,
            chemResistance: -20
        }
    },
    {
        id: 'golden_gravi',
        name: 'Золотистый грави',
        nameEn: 'Golden Gravi',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 3,
        image: '../Table/Artifacts/GG.png',
        stats: {
            tearProtection: 40,
            maxWeight: 30.00,
            radiation: 3.00
        }
    },
    {
        id: 'yantarnik',
        name: 'Янтарник',
        nameEn: 'Yantarnik',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 3,
        image: '../Table/Artifacts/Yantarnik.png',
        stats: {
            maxWeight: 18.00,
            bulletResistance: 24,
            radiation: 3.00
        }
    },
    {
        id: 'soul',
        name: 'Душа',
        nameEn: 'Soul',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 3,
        image: '../Table/Artifacts/Soul.png',
        stats: {
            regeneration: 6.00,
            bleeding: -3.00,
            maxStamina: -12.00,
            saturation: -2.25,
            bulletResistance: -10,
            radiation: 5.00
        }
    },
    {
        id: 'dark_medusa',
        name: 'Тёмная медуза',
        nameEn: 'Dark Medusa',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 3,
        image: '../Table/Artifacts/DarkMedusa.png',
        stats: {
            bulletResistance: 42,
            regeneration: -0.25,
            maxStamina: -10.00,
            radiation: 5.00
        }
    },
    {
        id: 'proto_medusa',
        name: 'Протомедуза',
        nameEn: 'Protomedusa',
        category: 'gravity',
        categoryName: 'Гравитационные',
        tier: 3,
        image: '../Table/Artifacts/ProtoMedusa.png',
        stats: {
            radiationProtection: 80,
            maxWeight: 4.00,
            radiation: -8.00,
            maxStamina: -5.00,
            staminaRegen: -1.00,
            bulletResistance: -18
        }
    },

    // ===== ХИМИЧЕСКИЕ =====
    {
        id: 'slime',
        name: 'Слизь',
        nameEn: 'Slime',
        category: 'chemical',
        categoryName: 'Химические',
        tier: 1,
        image: '../Table/Artifacts/Bio/Slime.png',
        stats: {
            bioProtection: 10,
            bleeding: -1.50,
            saturation: 0.45,
            chemResistance: 10,
            regeneration: -0.30
        }
    },
    {
        id: 'thorn',
        name: 'Колючка',
        nameEn: 'Rusty Thorn',
        category: 'chemical',
        categoryName: 'Химические',
        tier: 1,
        image: '../Table/Artifacts/Bio/Thorn.png',
        stats: {
            bioProtection: 15,
            radiationProtection: 30,
            radiation: -3.00,
            chemResistance: 15,
            bleeding: 1.50
        }
    },
    {
        id: 'slug',
        name: 'Слизняк',
        nameEn: 'Slug',
        category: 'chemical',
        categoryName: 'Химические',
        tier: 2,
        image: '../Table/Artifacts/Bio/Slug.png',
        stats: {
            bleeding: -2.00,
            saturation: 1.25,
            regeneration: -1.00,
            maxWeight: -3.00
        }
    },
    {
        id: 'bile_stone',
        name: 'Желчь камня',
        nameEn: 'Bile Stone',
        category: 'chemical',
        categoryName: 'Химические',
        tier: 2,
        image: '../Table/Artifacts/Bio/BileStone.png',
        stats: {
            maxWeight: 5.00,
            maxStamina: -2.00,
            radiation: 2.00
        }
    },
    {
        id: 'swamp_rot',
        name: 'Болотный гнилец',
        nameEn: 'Swamp Rot',
        category: 'chemical',
        categoryName: 'Химические',
        tier: 2,
        image: '../Table/Artifacts/Bio/SR.png',
        stats: {
            bioProtection: 20,
            saturation: 2.35,
            chemResistance: 40,
            regeneration: -1.75,
            maxWeight: -5.00
        }
    },
    {
        id: 'crystal_thorn',
        name: 'Кристальная колючка',
        nameEn: 'Crystal Thorn',
        category: 'chemical',
        categoryName: 'Химические',
        tier: 2,
        image: '../Table/Artifacts/Bio/CT.png',
        stats: {
            radiationProtection: 40,
            radiation: -4.00,
            bioProtection: -15,
            bleeding: 2.00,
            chemResistance: -9
        }
    },
    {
        id: 'firefly',
        name: 'Светляк',
        nameEn: 'Firefly',
        category: 'chemical',
        categoryName: 'Химические',
        tier: 3,
        image: '../Table/Artifacts/Bio/Svetlak.png',
        stats: {
            regeneration: 5.00,
            bleeding: -2.00,
            maxStamina: -8.00,
            saturation: -1.75,
            radiation: 4.00
        }
    },
    {
        id: 'mica',
        name: 'Слюда',
        nameEn: 'Mica',
        category: 'chemical',
        categoryName: 'Химические',
        tier: 3,
        image: '../Table/Artifacts/Bio/Sluda.png',
        stats: {
            bioProtection: 60,
            maxWeight: 6.50,
            maxStamina: 35.00,
            chemResistance: -20
        }
    },
    {
        id: 'pellicle',
        name: 'Плёнка',
        nameEn: 'Pellicle',
        category: 'chemical',
        categoryName: 'Химические',
        tier: 3,
        image: '../Table/Artifacts/Bio/Plenka.png',
        stats: {
            bioProtection: 20,
            saturation: 2.50,
            radiation: 2.00
        }
    },
    {
        id: 'sea_urchin',
        name: 'Морской ёж',
        nameEn: 'Sea Urchin',
        category: 'chemical',
        categoryName: 'Химические',
        tier: 3,
        image: '../Table/Artifacts/Bio/SH.png',
        stats: {
            radiationProtection: 50,
            radiation: -5.00,
            bleeding: 3.00
        }
    },
    {
        id: 'kolobok',
        name: 'Колобок',
        nameEn: 'Kolobok',
        category: 'chemical',
        categoryName: 'Химические',
        tier: 3,
        image: '../Table/Artifacts/Bio/Kolobok.png',
        stats: {
            regeneration: 2.50,
            bleeding: -3.00,
            maxStamina: -5.00,
            bulletResistance: -8,
            radiation: 2.00
        }
    },
    {
        id: 'bubble',
        name: 'Пузырь',
        nameEn: 'Bubble',
        category: 'chemical',
        categoryName: 'Химические',
        tier: 3,
        image: '../Table/Artifacts/Bio/Puzir.png',
        stats: {
            radiationProtection: 60,
            radiation: -6.00
        }
    },

    // ===== ЭЛЕКТРИЧЕСКИЕ =====
    {
        id: 'sparkler',
        name: 'Бенгальский огонь',
        nameEn: 'Sparkler',
        category: 'electric',
        categoryName: 'Электрические',
        tier: 1,
        image: '../Table/Artifacts/Electro/BF.png',
        stats: {
            staminaRegen: 0.50,
            electroResistance: 10,
            radiation: 0.50
        }
    },
    {
        id: 'flash',
        name: 'Вспышка',
        nameEn: 'Flash',
        category: 'electric',
        categoryName: 'Электрические',
        tier: 1,
        image: '../Table/Artifacts/Electro/Vspishka.png',
        stats: {
            staminaRegen: 1.00,
            electroResistance: 15,
            radiation: 1.00
        }
    },
    {
        id: 'battery',
        name: 'Батарейка',
        nameEn: 'Battery',
        category: 'electric',
        categoryName: 'Электрические',
        tier: 1,
        image: '../Table/Artifacts/Electro/Battery.png',
        stats: {
            staminaRegen: 1.50,
            moveSpeed: 2.00,
            radiation: 1.00
        }
    },
    {
        id: 'moonlight',
        name: 'Лунный свет',
        nameEn: 'Moonlight',
        category: 'electric',
        categoryName: 'Электрические',
        tier: 2,
        image: '../Table/Artifacts/Electro/Moonlight.png',
        stats: {
            psiProtection: 45,
            radiation: 1.00,
            electroResistance: -20
        }
    },
    {
        id: 'sky_stone',
        name: 'Небесный камень',
        nameEn: 'Sky Stone',
        category: 'electric',
        categoryName: 'Электрические',
        tier: 2,
        image: '../Table/Artifacts/Electro/SS.png',
        stats: {
            staminaRegen: 2.25,
            electroResistance: 25,
            radiation: 1.50
        }
    },
    {
        id: 'medium',
        name: 'Медиум',
        nameEn: 'Medium',
        category: 'electric',
        categoryName: 'Электрические',
        tier: 2,
        image: '../Table/Artifacts/Electro/Medium.png',
        stats: {
            psiProtection: 60,
            electroResistance: -35
        }
    },
    {
        id: 'electro_mica',
        name: 'Электрослюда',
        nameEn: 'Electro Mica',
        category: 'electric',
        categoryName: 'Электрические',
        tier: 2,
        image: '../Table/Artifacts/Electro/Electrosluda.png',
        stats: {
            maxStamina: 15.00,
            electroResistance: 20,
            radiation: 1.50
        }
    },
    {
        id: 'dummy',
        name: 'Пустышка',
        nameEn: 'Dummy',
        category: 'electric',
        categoryName: 'Электрические',
        tier: 3,
        image: '../Table/Artifacts/Electro/Pustishka.png',
        stats: {
            staminaRegen: 5.25,
            bulletResistance: 8,
            maxStamina: -30.00,
            radiation: 3.00
        }
    },
    {
        id: 'halogen',
        name: 'Галоген',
        nameEn: 'Halogen',
        category: 'electric',
        categoryName: 'Электрические',
        tier: 3,
        image: '../Table/Artifacts/Electro/Galogen.png',
        stats: {
            psiProtection: 120,
            maxStamina: 10.00,
            moveSpeed: 5.00,
            regeneration: -1.00,
            bleeding: 3.00
        }
    },
    {
        id: 'snowflake',
        name: 'Снежинка',
        nameEn: 'Snowflake',
        category: 'electric',
        categoryName: 'Электрические',
        tier: 3,
        image: '../Table/Artifacts/Electro/Snowy.png',
        stats: {
            maxStamina: 20.00,
            moveSpeed: 4.00,
            staminaRegen: -2.00,
            radiation: 3.00
        }
    },

    // ===== ТЕРМИЧЕСКИЕ =====
    {
        id: 'droplet',
        name: 'Капля',
        nameEn: 'Droplet',
        category: 'thermal',
        categoryName: 'Термические',
        tier: 1,
        image: '../Table/Artifacts/Termo/Kaplya.png',
        stats: {
            maxWeight: 2.00,
            radiation: -0.50,
            heatResistance: 10,
            staminaRegen: -0.25
        }
    },
    {
        id: 'crystal',
        name: 'Кристалл',
        nameEn: 'Crystal',
        category: 'thermal',
        categoryName: 'Термические',
        tier: 1,
        image: '../Table/Artifacts/Termo/Crystall.png',
        stats: {
            frostProtection: 20,
            radiation: -1.00,
            heatResistance: 15,
            staminaRegen: -0.75
        }
    },
    {
        id: 'fireball',
        name: 'Огненный шар',
        nameEn: 'Fireball',
        category: 'thermal',
        categoryName: 'Термические',
        tier: 1,
        image: '../Table/Artifacts/Termo/FB.png',
        stats: {
            frostProtection: 20,
            thermalProtection: 20,
            radiation: -1.50,
            staminaRegen: -1.25
        }
    },
    {
        id: 'mothers_beads',
        name: 'Мамины бусы',
        nameEn: "Mother's Beads",
        category: 'thermal',
        categoryName: 'Термические',
        tier: 2,
        image: '../Table/Artifacts/Termo/MothersB00bs.png',
        stats: {
            bleeding: -5.00,
            radiation: 1.00,
            heatResistance: -10
        }
    },
    {
        id: 'eye',
        name: 'Глаз',
        nameEn: 'Eye',
        category: 'thermal',
        categoryName: 'Термические',
        tier: 2,
        image: '../Table/Artifacts/Termo/Eye.png',
        stats: {
            thermalProtection: 30,
            bleeding: -10.00,
            heatResistance: 20,
            radiation: 2.00
        }
    },
    {
        id: 'flame',
        name: 'Пламя',
        nameEn: 'Flame',
        category: 'thermal',
        categoryName: 'Термические',
        tier: 3,
        image: '../Table/Artifacts/Termo/Flame.png',
        stats: {
            frostProtection: 40,
            thermalProtection: 80,
            bleeding: -15.00,
            radiation: 3.00
        }
    },
    {
        id: 'fire_loop',
        name: 'Огненная петля',
        nameEn: 'Fire Loop',
        category: 'thermal',
        categoryName: 'Термические',
        tier: 3,
        image: '../Table/Artifacts/Termo/FP.png',
        stats: {
            regeneration: 4.00,
            bleeding: -2.00,
            maxStamina: -5.00,
            saturation: -1.25,
            radiation: 3.25
        }
    },
    {
        id: 'dragon_eye',
        name: 'Глаз дракона',
        nameEn: 'Dragon Eye',
        category: 'thermal',
        categoryName: 'Термические',
        tier: 3,
        image: '../Table/Artifacts/Termo/DE.png',
        stats: {
            staminaRegen: 3.00,
            frostProtection: 40,
            maxWeight: 22.00,
            regeneration: -0.75
        }
    },

    // ===== УНИКАЛЬНЫЕ =====
    {
        id: 'generator',
        name: 'Генератор',
        nameEn: 'Generator',
        category: 'unique',
        categoryName: 'Уникальные',
        tier: 'unique',
        image: '../Table/Artifacts/Quest/Generator.webp',
        stats: {
            maxStamina: 10.00,
            staminaRegen: 2.50,
            moveSpeed: 3.00,
            radiation: 2.00
        }
    },
    {
        id: 'medallion',
        name: 'Медальон',
        nameEn: 'Medallion',
        category: 'unique',
        categoryName: 'Уникальные',
        tier: 'unique',
        image: '../Table/Artifacts/Quest/Medalion.png',
        stats: {
            regeneration: 3.00,
            bleeding: -2.00,
            maxStamina: -5.00,
            radiation: 2.00
        }
    },

    // ===== МОРОЗНЫЕ (ИВЕНТ) =====
    {
        id: 'proto_snowflake',
        name: 'Прото-снежинка',
        nameEn: 'Proto Snowflake',
        category: 'frost',
        categoryName: 'Морозные',
        tier: 1,
        image: '../Table/Artifacts/Frost/ProtoSnow.jpg',
        stats: {
            frostProtection: 50,
            tearProtection: 30,
            cold: -20.00,
            impactResistance: -20,
            saturation: -0.05,
            moveSpeed: -1.00
        }
    },
    {
        id: 'frostbiter',
        name: 'Обморожник',
        nameEn: 'Frostbiter',
        category: 'frost',
        categoryName: 'Морозные',
        tier: 1,
        image: '../Table/Artifacts/Frost/Frostbite.jpg',
        stats: {
            saturation: 1.00,
            heatResistance: 20,
            chemResistance: 20,
            frostProtection: -35,
            bulletResistance: -12,
            cold: 10.00
        }
    },
    {
        id: 'ice_crystal',
        name: 'Ледяной кристалл',
        nameEn: 'Ice Crystal',
        category: 'frost',
        categoryName: 'Морозные',
        tier: 1,
        image: '../Table/Artifacts/Frost/IceCrystal.jpg',
        stats: {
            frostProtection: 40,
            cold: -15.00,
            radiation: 0.50
        }
    },
    {
        id: 'polar_star',
        name: 'Полярная звезда',
        nameEn: 'Polar Star',
        category: 'frost',
        categoryName: 'Морозные',
        tier: 2,
        image: '../Table/Artifacts/Frost/PolarStar.png',
        stats: {
            staminaRegen: 1.00,
            frostProtection: 100,
            maxStamina: 10.00,
            cold: -35.00,
            psiProtection: -100,
            radiation: 1.00
        }
    },
    {
        id: 'purple_tear',
        name: 'Пурпурная слеза',
        nameEn: 'Purple Tear',
        category: 'frost',
        categoryName: 'Морозные',
        tier: 2,
        image: '../Table/Artifacts/Frost/PurpleTear.png',
        stats: {
            staminaRegen: 3.00,
            thermalProtection: 30,
            bleeding: -4.00,
            maxStamina: 30.00,
            moveSpeed: 5.00,
            heatResistance: 20,
            frostProtection: -50,
            saturation: -0.25,
            radiation: 2.00,
            cold: 30.00
        }
    },
    {
        id: 'ice_flower',
        name: 'Ледоцвет',
        nameEn: 'Ice Flower',
        category: 'frost',
        categoryName: 'Морозные',
        tier: 3,
        image: '../Table/Artifacts/Frost/IceFlower.png',
        stats: {
            frostProtection: 200,
            cold: -60.00,
            thermalProtection: -30,
            radiation: 1.50,
            heatResistance: -40
        }
    },
    {
        id: 'tesseract',
        name: 'Тессеракт',
        nameEn: 'Tesseract',
        category: 'frost',
        categoryName: 'Морозные',
        tier: 3,
        image: '../Table/Artifacts/Frost/Tesseract.png',
        stats: {
            staminaRegen: 2.00,
            maxWeight: 16.00,
            maxStamina: 20.00,
            bulletResistance: 32,
            regeneration: 4.00,
            moveSpeed: 4.00,
            impactResistance: -50,
            frostProtection: -100,
            tearProtection: -50,
            saturation: -0.75,
            radiation: 4.00,
            cold: 30.00
        }
    }
];

// ============== НАЗВАНИЯ ХАРАКТЕРИСТИК ==============
const STAT_NAMES = {
    // Защиты
    radiationProtection: 'Защита от радиации',
    bioProtection: 'Защита от биозаражения',
    thermalProtection: 'Защита от температуры',
    psiProtection: 'Защита от пси-излучения',
    frostProtection: 'Защита от обморожения',
    
    // Сопротивления
    heatResistance: 'Термозащита',
    chemResistance: 'Химзащита',
    electroResistance: 'Электрозащита',
    
    // Броня
    impactResistance: 'Гашение удара',
    tearProtection: 'Защита от разрывов',
    bulletResistance: 'Пулестойкость',
    
    // Эффекты
    regeneration: 'Регенерация',
    bleeding: 'Кровотечение',
    radiation: 'Радиация',
    saturation: 'Насыщение',
    cold: 'Холод',
    
    // Персонаж
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

// ============== ТИПЫ КОНТЕЙНЕРОВ ==============
const CONTAINER_TYPES = {
    standard: 'Стандартный',
    bulky: 'Громоздкий',
    compact: 'Компактный',
    spacious: 'Вместительный'
};
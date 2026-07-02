'use strict';

const BARTER_MATERIALS = {
    // Отмычка | Росстань
    mandrake_root: {
        name: 'Корень Мандрагоры',
        nameEn: 'Mandrake Root',
        rank: 'lockpick'
    },
    mutated_tissue_sample: {
        name: 'Мутировавший образец ткани',
        nameEn: 'Mutated Tissue Sample',
        rank: 'lockpick'
    },

    // Новичок | Кордон
    yantar_fragments: {
        name: 'Фрагменты «Янтаря»',
        nameEn: 'Yantar Fragments',
        rank: 'novice'
    },
    mutated_growth: {
        name: 'Мутировавший нарост',
        nameEn: 'Mutated Growth',
        rank: 'novice'
    },
    plantain: {
        name: '«Подорожник»',
        nameEn: 'Plantain',
        rank: 'novice'
    },

    // Сталкер | Кордон
    hazy_pollen: {
        name: 'Мглистая пыльца',
        nameEn: 'Hazy Pollen',
        rank: 'stalker'
    },
    rad_mutagen_sample: {
        name: 'Радиационно-мутагенный образец',
        nameEn: 'Radiation-Mutagen Sample',
        rank: 'stalker'
    },
    anoplast: {
        name: 'Анопласт',
        nameEn: 'Anoplast',
        rank: 'stalker'
    },
    bergman_meter: {
        name: 'Измеритель «Бергмана»',
        nameEn: 'Bergman Meter',
        rank: 'stalker'
    },

    // Бывалый | Бар
    anomaly_detector: {
        name: 'Датчик аномальной активности',
        nameEn: 'Anomaly Activity Detector',
        rank: 'experienced'
    },
    regenerating_fabric: {
        name: 'Регенерирующая ткань',
        nameEn: 'Regenerating Fabric',
        rank: 'experienced'
    },
    bioferrite_core: {
        name: 'Биоферитовый сердечник',
        nameEn: 'Bioferrite Core',
        rank: 'experienced'
    },
    old_scheme: {
        name: 'Старая схема',
        nameEn: 'Old Scheme',
        rank: 'experienced'
    },
    makeshift_radio_beacon: {
        name: 'Кустарный радиомаячок',
        nameEn: 'Makeshift Radio Beacon',
        rank: 'experienced'
    },

    // Ветеран | Бар
    anomaly_filter: {
        name: 'Аномальный «Фильтр»',
        nameEn: 'Anomaly Filter',
        rank: 'veteran'
    },
    chitin_plate: {
        name: 'Хитиновая пластина',
        nameEn: 'Chitin Plate',
        rank: 'veteran'
    },
    carbon_fiber: {
        name: 'Углестекловолокно',
        nameEn: 'Carbon Fiber',
        rank: 'veteran'
    },
    converter: {
        name: '«Преобразователь»',
        nameEn: 'Converter',
        rank: 'veteran'
    },

    // Эксперт | Бар
    exoskeleton_frame: {
        name: 'Каркас экзоскелета',
        nameEn: 'Exoskeleton Frame',
        rank: 'expert'
    },

    // Профессионал / Мастер | Север
    dark_pass: {
        name: 'Тёмный пропуск',
        nameEn: 'Dark Pass',
        rank: 'professional'
    },
    anomaly_glass: {
        name: 'Аномальное стекло',
        nameEn: 'Anomaly Glass',
        rank: 'professional'
    },
    storm_shard: {
        name: 'Осколок бури',
        nameEn: 'Storm Shard',
        rank: 'professional'
    },
    crystal_bud: {
        name: 'Кристальный бутон',
        nameEn: 'Crystal Bud',
        rank: 'professional'
    },
    stuzha: {
        name: 'Стужа',
        nameEn: 'Stuzha',
        rank: 'professional'
    },
    homemade_thermoplast: {
        name: 'Кустарный термопласт',
        nameEn: 'Homemade Thermoplast',
        rank: 'professional'
    },
    alpha_substance_container: {
        name: 'Контейнер с Альфа-веществом',
        nameEn: 'Alpha Substance Container',
        rank: 'professional'
    },
    frost_beacon: {
        name: 'Морозоустойчивый радиомаячок',
        nameEn: 'Frost-Resistant Radio Beacon',
        rank: 'professional'
    },

    // Компоненты крафта
    frozen_goggles: {
        name: 'Оледеневший окуляр',
        nameEn: 'Frozen Goggles',
        rank: 'professional'
    },
    sturdy_suit: {
        name: 'Крепкий комбинезон',
        nameEn: 'Sturdy Suit',
        rank: 'professional'
    },
    anomaly_vest: {
        name: 'Аномальная разгрузка',
        nameEn: 'Anomaly Vest',
        rank: 'professional'
    },
    vortex_cylinders: {
        name: 'Баллоны вихря',
        nameEn: 'Vortex Cylinders',
        rank: 'professional'
    },
    anomaly_frame: {
        name: 'Аномальный каркас',
        nameEn: 'Anomaly Frame',
        rank: 'professional'
    },
    sturdy_servos: {
        name: 'Крепкие сервоприводы',
        nameEn: 'Sturdy Servos',
        rank: 'professional'
    },
    anomaly_life_support: {
        name: 'Аномальная система жизнеобеспечения',
        nameEn: 'Anomaly Life Support System',
        rank: 'professional'
    },
    frost_batteries: {
        name: 'Морозные аккумуляторы',
        nameEn: 'Frost Batteries',
        rank: 'professional'
    },
    spirit_of_tree: {
        name: 'Дух древа',
        nameEn: 'Spirit of the Tree',
        rank: 'professional'
    }
};

const BARTER_RANKS = {
    lockpick: { name: 'Отмычка', nameEn: 'Lockpick' },
    novice: { name: 'Новичок', nameEn: 'Novice' },
    stalker: { name: 'Сталкер', nameEn: 'Stalker' },
    experienced: { name: 'Бывалый', nameEn: 'Experienced' },
    veteran: { name: 'Ветеран', nameEn: 'Veteran' },
    expert: { name: 'Эксперт', nameEn: 'Expert' },
    professional: { name: 'Профессионал', nameEn: 'Professional' },
    master: { name: 'Мастер', nameEn: 'Master' },
    legend: { name: 'Легенда', nameEn: 'Legend' }
};

const BARTER_LOCATIONS = {
    rostok: { name: 'Росстань', nameEn: 'Rostok' },
    cordon: { name: 'Кордон', nameEn: 'Cordon' },
    bar: { name: 'Бар', nameEn: 'Bar' },
    north: { name: 'Север', nameEn: 'North' }
};

const BARTER_RESOURCE_TIERS = {
    lockpick: { rank: 'lockpick', location: 'rostok', materialIds: ['mandrake_root', 'mutated_tissue_sample'] },
    novice: { rank: 'novice', location: 'cordon', materialIds: ['yantar_fragments', 'mutated_growth', 'plantain'] },
    stalker: { rank: 'stalker', location: 'cordon', materialIds: ['hazy_pollen', 'rad_mutagen_sample', 'anoplast', 'bergman_meter'] },
    experienced: { rank: 'experienced', location: 'bar', materialIds: ['anomaly_detector', 'regenerating_fabric', 'bioferrite_core', 'old_scheme', 'makeshift_radio_beacon'] },
    veteran: { rank: 'veteran', location: 'bar', materialIds: ['anomaly_filter', 'chitin_plate', 'carbon_fiber', 'converter'] },
    expert: { rank: 'expert', location: 'north', materialIds: [], available: false },
    professional: {
        rank: 'professional',
        location: 'north',
        materialIds: [
            'dark_pass', 'anomaly_glass', 'storm_shard', 'crystal_bud',
            'stuzha', 'homemade_thermoplast', 'alpha_substance_container', 'frost_beacon'
        ]
    },
    master: {
        rank: 'master',
        location: 'north',
        materialIds: [
            'dark_pass', 'anomaly_glass', 'storm_shard', 'crystal_bud',
            'stuzha', 'homemade_thermoplast', 'alpha_substance_container', 'frost_beacon'
        ]
    },
    legend: { rank: 'legend', location: 'north', materialIds: [], available: false }
};

const BARTER_CATEGORY_GROUPS = [
    { id: 'weapons', name: 'Оружие', nameEn: 'Weapons', order: 0 },
    { id: 'armor', name: 'Броня', nameEn: 'Armor', order: 1 },
    { id: 'other', name: 'Другое', nameEn: 'Other', order: 2 }
];

const BARTER_CATEGORIES = [
    {
        id: 'weapons_assault',
        name: 'Оружие/Автоматы',
        nameEn: 'Weapons/Assault Rifles',
        order: 2,
        columns: [
            { rank: 'lockpick', location: 'rostok' },
            { rank: 'novice', location: 'cordon' },
            { rank: 'stalker', location: 'cordon' },
            { rank: 'experienced', location: 'bar' },
            { rank: 'veteran', location: 'bar' },
            { rank: 'expert', location: 'north' },
            { rank: 'professional', location: 'north' },
            { rank: 'master', location: 'north' },
            { rank: 'legend', location: 'north' }
        ],
        nodes: [
            {
                id: 'aks74u',
                weaponId: 'aks74u',
                column: 0,
                row: 3,
                rank: 'lockpick',
                parents: [],
                materials: [
                    { id: 'mandrake_root', amount: 32 },
                    { id: 'mutated_tissue_sample', amount: 19 }
                ],
                cost: 7890,
                level: 6,
                location: 'rostok'
            },
            {
                id: 'aks74',
                weaponId: 'aks74',
                column: 1,
                row: 3,
                rank: 'novice',
                parents: ['aks74u'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'aks74u',
                        materials: [
                            { id: 'yantar_fragments', amount: 31 },
                            { id: 'mutated_growth', amount: 29 },
                            { id: 'plantain', amount: 7 }
                        ],
                        cost: 12340,
                        level: 10,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 42 },
                            { id: 'mutated_growth', amount: 36 },
                            { id: 'plantain', amount: 9 }
                        ],
                        cost: 15340,
                        level: 10,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'akm',
                weaponId: 'akm',
                column: 2,
                row: 2,
                rank: 'stalker',
                parents: ['aks74'],
                prerequisite: 'aks74',
                materials: [
                    { id: 'hazy_pollen', amount: 98 },
                    { id: 'rad_mutagen_sample', amount: 85 },
                    { id: 'anoplast', amount: 26 },
                    { id: 'bergman_meter', amount: 4 }
                ],
                cost: 60200,
                level: 15,
                location: 'cordon'
            },
            {
                id: 'ak74m',
                weaponId: 'ak74m',
                column: 2,
                row: 3,
                rank: 'stalker',
                parents: ['aks74'],
                prerequisite: 'aks74',
                materials: [
                    { id: 'hazy_pollen', amount: 105 },
                    { id: 'rad_mutagen_sample', amount: 95 },
                    { id: 'anoplast', amount: 22 },
                    { id: 'bergman_meter', amount: 3 }
                ],
                cost: 56840,
                level: 15,
                location: 'cordon'
            },
            {
                id: 'm16a2',
                weaponId: 'm16a2',
                column: 0,
                row: 6,
                rank: 'lockpick',
                parents: [],
                materials: [
                    { id: 'mandrake_root', amount: 36 },
                    { id: 'mutated_tissue_sample', amount: 16 }
                ],
                cost: 8200,
                level: 7,
                location: 'rostok'
            },
            {
                id: 'm4a1',
                weaponId: 'm4a1',
                column: 1,
                row: 6,
                rank: 'novice',
                parents: ['m16a2'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'm16a2',
                        materials: [
                            { id: 'yantar_fragments', amount: 33 },
                            { id: 'mutated_growth', amount: 28 },
                            { id: 'plantain', amount: 8 }
                        ],
                        cost: 14340,
                        level: 10,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 39 },
                            { id: 'mutated_growth', amount: 40 },
                            { id: 'plantain', amount: 10 }
                        ],
                        cost: 17340,
                        level: 10,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'l85a1',
                weaponId: 'l85a1',
                column: 1,
                row: 7,
                rank: 'novice',
                parents: ['m16a2'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'm16a2',
                        materials: [
                            { id: 'yantar_fragments', amount: 32 },
                            { id: 'mutated_growth', amount: 29 },
                            { id: 'plantain', amount: 7 }
                        ],
                        cost: 16720,
                        level: 10,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 39 },
                            { id: 'mutated_growth', amount: 41 },
                            { id: 'plantain', amount: 10 }
                        ],
                        cost: 19720,
                        level: 10,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'm16a4',
                weaponId: 'm16a4',
                column: 2,
                row: 6,
                rank: 'stalker',
                parents: ['m4a1'],
                prerequisite: 'm4a1',
                materials: [
                    { id: 'hazy_pollen', amount: 95 },
                    { id: 'rad_mutagen_sample', amount: 85 },
                    { id: 'anoplast', amount: 31 },
                    { id: 'bergman_meter', amount: 4 }
                ],
                cost: 55340,
                level: 15,
                location: 'cordon'
            },
            {
                id: 'sig_sg550',
                weaponId: 'sig_sg550',
                column: 2,
                row: 7,
                rank: 'stalker',
                parents: ['l85a1'],
                prerequisite: 'l85a1',
                materials: [
                    { id: 'hazy_pollen', amount: 93 },
                    { id: 'rad_mutagen_sample', amount: 90 },
                    { id: 'anoplast', amount: 28 },
                    { id: 'bergman_meter', amount: 3 }
                ],
                cost: 52720,
                level: 15,
                location: 'cordon'
            },
            {
                id: 'm4',
                weaponId: 'm4',
                column: 3,
                row: 6,
                rank: 'experienced',
                parents: ['m16a4'],
                prerequisite: 'm16a4',
                materials: [
                    { id: 'anomaly_detector', amount: 185 },
                    { id: 'regenerating_fabric', amount: 175 },
                    { id: 'bioferrite_core', amount: 61 },
                    { id: 'old_scheme', amount: 16 }
                ],
                cost: 264700,
                level: 25,
                location: 'bar'
            },
            {
                id: 'ak103',
                weaponId: 'ak103',
                column: 3,
                row: 2,
                rank: 'experienced',
                parents: ['akm'],
                prerequisite: 'akm',
                materials: [
                    { id: 'anomaly_detector', amount: 163 },
                    { id: 'regenerating_fabric', amount: 130 },
                    { id: 'bioferrite_core', amount: 64 },
                    { id: 'old_scheme', amount: 18 }
                ],
                cost: 302500,
                level: 25,
                location: 'bar'
            },
            {
                id: 'an94_abakan',
                weaponId: 'an94_abakan',
                column: 3,
                row: 3,
                rank: 'experienced',
                parents: ['ak74m'],
                prerequisite: 'ak74m',
                materials: [
                    { id: 'anomaly_detector', amount: 170 },
                    { id: 'regenerating_fabric', amount: 125 },
                    { id: 'bioferrite_core', amount: 56 },
                    { id: 'old_scheme', amount: 15 }
                ],
                cost: 245120,
                level: 25,
                location: 'bar'
            },
            {
                id: 'as_val',
                weaponId: 'as_val',
                column: 4,
                row: 4,
                rank: 'veteran',
                parents: ['an94_abakan'],
                prerequisite: 'an94_abakan',
                materials: [
                    { id: 'anomaly_filter', amount: 265 },
                    { id: 'chitin_plate', amount: 245 },
                    { id: 'carbon_fiber', amount: 295 },
                    { id: 'converter', amount: 70 }
                ],
                cost: 1020000,
                level: 30,
                location: 'bar'
            },
            {
                id: 'ots14_groza',
                weaponId: 'ots14_groza',
                column: 4,
                row: 5,
                rank: 'veteran',
                parents: ['an94_abakan'],
                prerequisite: 'an94_abakan',
                materials: [
                    { id: 'anomaly_filter', amount: 245 },
                    { id: 'chitin_plate', amount: 295 },
                    { id: 'carbon_fiber', amount: 205 },
                    { id: 'converter', amount: 60 }
                ],
                cost: 864000,
                level: 30,
                location: 'bar'
            },
            {
                id: 'fn_f2000',
                weaponId: 'fn_f2000',
                column: 4,
                row: 6,
                rank: 'veteran',
                parents: ['m4'],
                prerequisite: 'm4',
                materials: [
                    { id: 'anomaly_filter', amount: 225 },
                    { id: 'chitin_plate', amount: 275 },
                    { id: 'carbon_fiber', amount: 190 },
                    { id: 'converter', amount: 73 }
                ],
                cost: 1012000,
                level: 30,
                location: 'bar'
            },
            {
                id: 'hk_g36',
                weaponId: 'hk_g36',
                column: 4,
                row: 7,
                rank: 'veteran',
                parents: ['sig_sg550'],
                prerequisite: 'sig_sg550',
                materials: [
                    { id: 'anomaly_filter', amount: 315 },
                    { id: 'chitin_plate', amount: 255 },
                    { id: 'carbon_fiber', amount: 225 },
                    { id: 'converter', amount: 71 }
                ],
                cost: 972000,
                level: 30,
                location: 'bar'
            },
            {
                id: 'aek971',
                weaponId: 'aek971',
                column: 5,
                row: 3,
                rank: 'expert',
                parents: ['an94_abakan'],
                prerequisite: 'ak105',
                materials: [],
                cost: 0,
                level: 32,
                location: 'north',
                locked: true
            },
            {
                id: 'hk_g3a3',
                weaponId: 'hk_g3a3',
                column: 5,
                row: 2,
                rank: 'expert',
                parents: ['ak103'],
                prerequisite: 'fn_fal',
                materials: [],
                cost: 0,
                level: 35,
                location: 'north',
                locked: true
            },
            {
                id: 'ash12',
                weaponId: 'ash12',
                column: 5,
                row: 5,
                rank: 'expert',
                parents: ['ots14_groza'],
                prerequisite: 'vsk94',
                materials: [],
                cost: 0,
                level: 36,
                location: 'north',
                locked: true
            },
            {
                id: 'fn_f2000_tactical',
                weaponId: 'fn_f2000_tactical',
                column: 5,
                row: 6,
                rank: 'expert',
                parents: ['fn_f2000', 'hk_g36'],
                prerequisite: 'fn_f2000',
                materials: [],
                cost: 0,
                level: 34,
                location: 'north',
                locked: true
            },
            {
                id: 'galil_ace_51',
                weaponId: 'galil_ace_51',
                column: 6,
                row: 2,
                rank: 'professional',
                parents: [],
                prerequisite: 'hk417',
                materials: [
                    { id: 'dark_pass', amount: 2100 },
                    { id: 'anomaly_glass', amount: 42 },
                    { id: 'storm_shard', amount: 26 },
                    { id: 'crystal_bud', amount: 8 },
                    { id: 'stuzha', amount: 5 },
                    { id: 'homemade_thermoplast', amount: 20 },
                    { id: 'alpha_substance_container', amount: 10 },
                    { id: 'frost_beacon', amount: 4 }
                ],
                cost: 0,
                eventCost: 250000,
                level: 25,
                location: 'north'
            },
            {
                id: 'fn_fnc',
                weaponId: 'fn_fnc',
                column: 6,
                row: 4,
                rank: 'professional',
                parents: [],
                prerequisite: 'sig_sg550',
                materials: [
                    { id: 'dark_pass', amount: 2100 },
                    { id: 'anomaly_glass', amount: 42 },
                    { id: 'storm_shard', amount: 26 },
                    { id: 'crystal_bud', amount: 8 },
                    { id: 'stuzha', amount: 5 },
                    { id: 'homemade_thermoplast', amount: 20 },
                    { id: 'alpha_substance_container', amount: 10 },
                    { id: 'frost_beacon', amount: 4 }
                ],
                cost: 0,
                eventCost: 250000,
                level: 25,
                location: 'north'
            }
        ]
    },
    {
        id: 'weapons_pistol',
        name: 'Оружие/Пистолеты',
        nameEn: 'Weapons/Pistols',
        order: 0,
        columns: [
            { rank: 'lockpick', location: 'rostok' },
            { rank: 'lockpick', location: 'rostok' },
            { rank: 'novice', location: 'cordon' },
            { rank: 'stalker', location: 'cordon' },
            { rank: 'experienced', location: 'bar', rankLabel: 'Опытный', rankLabelEn: 'Experienced' },
            { rank: 'veteran', location: 'bar', rankLabel: 'Бывалый', rankLabelEn: 'Stalwart' },
            { rank: 'veteran', location: 'bar' },
            { rank: 'expert', location: 'north' },
            { rank: 'professional', location: 'north' },
            { rank: 'master', location: 'north' },
            { rank: 'legend', location: 'north' }
        ],
        nodes: [
            {
                id: 'pm',
                weaponId: 'pm',
                name: 'ПМ',
                nameEn: 'PM',
                column: 0,
                row: 2,
                rank: 'lockpick',
                parents: [],
                materials: [],
                cost: 710,
                level: 0,
                location: 'rostok'
            },
            {
                id: 'pb',
                weaponId: 'pb',
                name: 'ПБ',
                nameEn: 'PB',
                column: 1,
                row: 2,
                rank: 'lockpick',
                parents: ['pm'],
                location: 'rostok',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'pm',
                        materials: [
                            { id: 'mandrake_root', amount: 11 },
                            { id: 'mutated_tissue_sample', amount: 7 }
                        ],
                        cost: 1280,
                        level: 3,
                        location: 'rostok',
                        usesChain: true
                    }
                ]
            },
            {
                id: 'fort12',
                weaponId: 'fort12',
                column: 2,
                row: 2,
                rank: 'novice',
                parents: ['pb'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'pb',
                        materials: [
                            { id: 'yantar_fragments', amount: 28 },
                            { id: 'mutated_growth', amount: 31 },
                            { id: 'plantain', amount: 3 }
                        ],
                        cost: 5100,
                        level: 8,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 37 },
                            { id: 'mutated_growth', amount: 38 },
                            { id: 'plantain', amount: 6 }
                        ],
                        cost: 7200,
                        level: 10,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'browning_hp',
                weaponId: 'browning_hp',
                name: 'Browning HPSA',
                nameEn: 'Browning HPSA',
                column: 2,
                row: 3,
                rank: 'novice',
                parents: ['pb'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'pb',
                        materials: [
                            { id: 'yantar_fragments', amount: 26 },
                            { id: 'mutated_growth', amount: 33 },
                            { id: 'plantain', amount: 2 }
                        ],
                        cost: 4990,
                        level: 8,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 38 },
                            { id: 'mutated_growth', amount: 34 },
                            { id: 'plantain', amount: 5 }
                        ],
                        cost: 7120,
                        level: 10,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'walther_p99',
                weaponId: 'walther_p99',
                column: 3,
                row: 2,
                rank: 'stalker',
                parents: ['fort12', 'browning_hp'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'fort12',
                        materials: [
                            { id: 'hazy_pollen', amount: 54 },
                            { id: 'rad_mutagen_sample', amount: 42 },
                            { id: 'anoplast', amount: 10 },
                            { id: 'bergman_meter', amount: 1 }
                        ],
                        cost: 10100,
                        level: 15,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        prerequisite: 'browning_hp',
                        materials: [
                            { id: 'hazy_pollen', amount: 55 },
                            { id: 'rad_mutagen_sample', amount: 41 },
                            { id: 'anoplast', amount: 10 },
                            { id: 'bergman_meter', amount: 1 }
                        ],
                        cost: 14290,
                        level: 15,
                        location: 'cordon',
                        usesChain: true
                    }
                ]
            },
            {
                id: 'beretta_92fs',
                weaponId: 'beretta_92fs',
                column: 4,
                row: 2,
                rank: 'experienced',
                parents: ['walther_p99'],
                prerequisite: 'walther_p99',
                materials: [
                    { id: 'anomaly_detector', amount: 95 },
                    { id: 'regenerating_fabric', amount: 75 },
                    { id: 'bioferrite_core', amount: 28 },
                    { id: 'old_scheme', amount: 7 }
                ],
                cost: 82480,
                level: 20,
                location: 'bar'
            },
            {
                id: 'colt_1911',
                weaponId: 'colt_1911',
                column: 4,
                row: 3,
                rank: 'experienced',
                parents: ['walther_p99'],
                prerequisite: 'walther_p99',
                materials: [
                    { id: 'anomaly_detector', amount: 98 },
                    { id: 'regenerating_fabric', amount: 78 },
                    { id: 'bioferrite_core', amount: 31 },
                    { id: 'old_scheme', amount: 6 }
                ],
                cost: 81310,
                level: 20,
                location: 'bar'
            },
            {
                id: 'gsh18',
                weaponId: 'gsh18',
                column: 5,
                row: 2,
                rank: 'veteran',
                parents: ['beretta_92fs', 'colt_1911'],
                location: 'bar',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'beretta_92fs',
                        materials: [
                            { id: 'anomaly_detector', amount: 128 },
                            { id: 'regenerating_fabric', amount: 92 },
                            { id: 'bioferrite_core', amount: 42 },
                            { id: 'old_scheme', amount: 16 }
                        ],
                        cost: 152680,
                        level: 25,
                        location: 'bar',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        prerequisite: 'colt_1911',
                        materials: [
                            { id: 'anomaly_detector', amount: 116 },
                            { id: 'regenerating_fabric', amount: 98 },
                            { id: 'bioferrite_core', amount: 39 },
                            { id: 'old_scheme', amount: 17 }
                        ],
                        cost: 163980,
                        level: 25,
                        location: 'bar',
                        usesChain: true
                    }
                ]
            },
            {
                id: 'aps',
                weaponId: 'aps',
                column: 6,
                row: 2,
                rank: 'veteran',
                parents: ['gsh18'],
                prerequisite: 'gsh18',
                materials: [
                    { id: 'anomaly_filter', amount: 124 },
                    { id: 'chitin_plate', amount: 145 },
                    { id: 'carbon_fiber', amount: 85 },
                    { id: 'converter', amount: 14 }
                ],
                cost: 320680,
                level: 30,
                location: 'bar'
            },
            {
                id: 'sig_p220',
                weaponId: 'sig_p220',
                name: 'SIG P220',
                nameEn: 'SIG P220',
                column: 7,
                row: 2,
                rank: 'expert',
                parents: ['aps'],
                prerequisite: 'aps',
                materials: [],
                cost: 0,
                level: 32,
                location: 'north',
                locked: true
            },
            {
                id: 'desert_eagle',
                weaponId: 'desert_eagle',
                name: 'Desert Eagle',
                nameEn: 'Desert Eagle',
                column: 8,
                row: 2,
                rank: 'professional',
                parents: ['sig_p220'],
                prerequisite: 'sig_p220',
                materials: [],
                cost: 0,
                level: 35,
                location: 'north',
                locked: true
            }
        ]
    },
    {
        id: 'weapons_smg',
        name: 'Оружие/Пистолеты-пулемёты',
        nameEn: 'Weapons/Submachine Guns',
        order: 1,
        columns: [
            { rank: 'lockpick', location: 'rostok' },
            { rank: 'lockpick', location: 'rostok' },
            { rank: 'novice', location: 'cordon' },
            { rank: 'stalker', location: 'cordon' },
            { rank: 'experienced', location: 'bar', rankLabel: 'Опытный', rankLabelEn: 'Experienced' },
            { rank: 'veteran', location: 'bar', rankLabel: 'Бывалый', rankLabelEn: 'Stalwart' },
            { rank: 'veteran', location: 'bar' },
            { rank: 'expert', location: 'north' },
            { rank: 'professional', location: 'north' },
            { rank: 'master', location: 'north' },
            { rank: 'legend', location: 'north' }
        ],
        nodes: [
            {
                id: 'kiparis',
                weaponId: 'kiparis',
                column: 0,
                row: 2,
                rank: 'lockpick',
                parents: [],
                materials: [
                    { id: 'mandrake_root', amount: 14 },
                    { id: 'mutated_tissue_sample', amount: 8 }
                ],
                cost: 2200,
                level: 0,
                location: 'rostok'
            },
            {
                id: 'skorpion_vz61',
                weaponId: 'skorpion_vz61',
                column: 1,
                row: 2,
                rank: 'lockpick',
                parents: [],
                materials: [
                    { id: 'mandrake_root', amount: 28 },
                    { id: 'mutated_tissue_sample', amount: 14 }
                ],
                cost: 6400,
                level: 4,
                location: 'rostok'
            },
            {
                id: 'mp5a3',
                weaponId: 'mp5a3',
                column: 2,
                row: 2,
                rank: 'novice',
                parents: ['skorpion_vz61'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'skorpion_vz61',
                        materials: [
                            { id: 'yantar_fragments', amount: 26 },
                            { id: 'mutated_growth', amount: 29 },
                            { id: 'plantain', amount: 6 }
                        ],
                        cost: 14600,
                        level: 7,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 34 },
                            { id: 'mutated_growth', amount: 38 },
                            { id: 'plantain', amount: 10 }
                        ],
                        cost: 15100,
                        level: 9,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'pp2000',
                weaponId: 'pp2000',
                column: 2,
                row: 3,
                rank: 'novice',
                parents: ['skorpion_vz61'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'skorpion_vz61',
                        materials: [
                            { id: 'yantar_fragments', amount: 25 },
                            { id: 'mutated_growth', amount: 30 },
                            { id: 'plantain', amount: 5 }
                        ],
                        cost: 13100,
                        level: 7,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 35 },
                            { id: 'mutated_growth', amount: 37 },
                            { id: 'plantain', amount: 9 }
                        ],
                        cost: 15100,
                        level: 9,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'mp5sd6',
                weaponId: 'mp5sd6',
                column: 3,
                row: 2,
                rank: 'stalker',
                parents: ['mp5a3'],
                prerequisite: 'mp5a3',
                materials: [
                    { id: 'hazy_pollen', amount: 48 },
                    { id: 'rad_mutagen_sample', amount: 42 },
                    { id: 'anoplast', amount: 12 },
                    { id: 'bergman_meter', amount: 1 }
                ],
                cost: 38600,
                level: 12,
                location: 'cordon'
            },
            {
                id: 'pp19_bizon',
                weaponId: 'pp19_bizon',
                name: '«Бизон»',
                nameEn: '"Bizon"',
                column: 3,
                row: 3,
                rank: 'stalker',
                parents: ['pp2000'],
                prerequisite: 'pp2000',
                materials: [
                    { id: 'hazy_pollen', amount: 45 },
                    { id: 'rad_mutagen_sample', amount: 52 },
                    { id: 'anoplast', amount: 11 },
                    { id: 'bergman_meter', amount: 1 }
                ],
                cost: 41100,
                level: 12,
                location: 'cordon'
            },
            {
                id: 'ump45',
                weaponId: 'ump45',
                column: 4,
                row: 2,
                rank: 'experienced',
                parents: ['mp5sd6'],
                prerequisite: 'mp5sd6',
                materials: [
                    { id: 'anomaly_detector', amount: 135 },
                    { id: 'regenerating_fabric', amount: 91 },
                    { id: 'bioferrite_core', amount: 32 },
                    { id: 'old_scheme', amount: 6 }
                ],
                cost: 141900,
                level: 17,
                location: 'bar'
            },
            {
                id: 'pp19_vityaz',
                weaponId: 'pp19_vityaz',
                name: '«Витязь»',
                nameEn: '"Vityaz"',
                column: 4,
                row: 3,
                rank: 'experienced',
                parents: ['pp19_bizon'],
                prerequisite: 'pp19_bizon',
                materials: [
                    { id: 'anomaly_detector', amount: 124 },
                    { id: 'regenerating_fabric', amount: 98 },
                    { id: 'bioferrite_core', amount: 31 },
                    { id: 'old_scheme', amount: 7 }
                ],
                cost: 145000,
                level: 18,
                location: 'bar'
            },
            {
                id: 'fn_p90',
                weaponId: 'fn_p90',
                column: 6,
                row: 2,
                rank: 'veteran',
                parents: ['ump45', 'pp19_vityaz'],
                location: 'bar',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'ump45',
                        materials: [
                            { id: 'anomaly_filter', amount: 215 },
                            { id: 'chitin_plate', amount: 195 },
                            { id: 'carbon_fiber', amount: 62 },
                            { id: 'converter', amount: 15 }
                        ],
                        cost: 545100,
                        level: 30,
                        location: 'bar',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        prerequisite: 'pp19_vityaz',
                        materials: [
                            { id: 'anomaly_filter', amount: 225 },
                            { id: 'chitin_plate', amount: 190 },
                            { id: 'carbon_fiber', amount: 64 },
                            { id: 'converter', amount: 14 }
                        ],
                        cost: 641000,
                        level: 30,
                        location: 'bar',
                        usesChain: true
                    }
                ]
            }
        ]
    },
    {
        id: 'weapons_machinegun',
        name: 'Оружие/Пулемёты',
        nameEn: 'Weapons/Machine Guns',
        order: 3,
        columns: [
            { rank: 'experienced', location: 'bar', rankLabel: 'Опытный', rankLabelEn: 'Experienced' },
            { rank: 'veteran', location: 'bar', rankLabel: 'Бывалый', rankLabelEn: 'Stalwart' },
            { rank: 'veteran', location: 'north' },
            { rank: 'expert', location: 'north' },
            { rank: 'professional', location: 'north' },
            { rank: 'master', location: 'north' },
            { rank: 'legend', location: 'north' }
        ],
        nodes: [
            {
                id: 'rpk74',
                weaponId: 'rpk74',
                column: 0,
                row: 2,
                rank: 'experienced',
                parents: [],
                materials: [
                    { id: 'anomaly_detector', amount: 285 },
                    { id: 'regenerating_fabric', amount: 265 },
                    { id: 'bioferrite_core', amount: 72 },
                    { id: 'old_scheme', amount: 24 }
                ],
                cost: 121400,
                level: 20,
                location: 'bar'
            },
            {
                id: 'rpd',
                weaponId: 'rpd',
                column: 1,
                row: 2,
                rank: 'veteran',
                parents: ['rpk74'],
                prerequisite: 'rpk74',
                materials: [
                    { id: 'anomaly_detector', amount: 185 },
                    { id: 'regenerating_fabric', amount: 155 },
                    { id: 'bioferrite_core', amount: 84 },
                    { id: 'old_scheme', amount: 38 }
                ],
                cost: 232620,
                level: 25,
                location: 'bar'
            },
            {
                id: 'pkm',
                weaponId: 'pkm',
                column: 3,
                row: 2,
                rank: 'expert',
                parents: ['rpd'],
                prerequisite: 'rpd',
                materials: [],
                cost: 0,
                level: 0,
                location: 'north',
                locked: true
            },
            {
                id: 'pkp_pecheneg',
                weaponId: 'pkp_pecheneg',
                name: '«Печенег»',
                nameEn: '"Pecheneg"',
                column: 4,
                row: 2,
                rank: 'professional',
                parents: ['pkm'],
                location: 'north',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'pkm',
                        materials: [
                            { id: 'dark_pass', amount: 2600 },
                            { id: 'anomaly_glass', amount: 120 },
                            { id: 'storm_shard', amount: 110 },
                            { id: 'crystal_bud', amount: 60 },
                            { id: 'stuzha', amount: 58 },
                            { id: 'homemade_thermoplast', amount: 80 },
                            { id: 'alpha_substance_container', amount: 40 },
                            { id: 'frost_beacon', amount: 5 }
                        ],
                        cost: 0,
                        eventCost: 112000,
                        level: 25,
                        location: 'north',
                        usesChain: false
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'dark_pass', amount: 5200 },
                            { id: 'anomaly_glass', amount: 142 },
                            { id: 'storm_shard', amount: 126 },
                            { id: 'crystal_bud', amount: 74 },
                            { id: 'stuzha', amount: 68 },
                            { id: 'homemade_thermoplast', amount: 80 },
                            { id: 'alpha_substance_container', amount: 40 },
                            { id: 'frost_beacon', amount: 10 }
                        ],
                        cost: 0,
                        eventCost: 168000,
                        level: 25,
                        location: 'north',
                        usesChain: false
                    }
                ]
            }
        ]
    },
    {
        id: 'weapons_sniper',
        name: 'Оружие/Снайперские винтовки',
        nameEn: 'Weapons/Sniper Rifles',
        order: 4,
        columns: [
            { rank: 'lockpick', location: 'rostok' },
            { rank: 'novice', location: 'cordon' },
            { rank: 'stalker', location: 'cordon' },
            { rank: 'experienced', location: 'bar', rankLabel: 'Опытный', rankLabelEn: 'Experienced' },
            { rank: 'veteran', location: 'bar', rankLabel: 'Бывалый', rankLabelEn: 'Stalwart' },
            { rank: 'veteran', location: 'bar' },
            { rank: 'expert', location: 'north' },
            { rank: 'professional', location: 'north' },
            { rank: 'master', location: 'north' },
            { rank: 'legend', location: 'north' }
        ],
        nodes: [
            {
                id: 'mosin_obrez',
                weaponId: 'mosin_obrez',
                name: 'Обрез Мосина',
                nameEn: 'Mosin Obrez',
                column: 0,
                row: 2,
                rank: 'lockpick',
                parents: [],
                materials: [
                    { id: 'mandrake_root', amount: 31 },
                    { id: 'mutated_tissue_sample', amount: 22 }
                ],
                cost: 7090,
                level: 5,
                location: 'rostok'
            },
            {
                id: 'mosin',
                weaponId: 'mosin',
                name: 'Мосина',
                nameEn: 'Mosin',
                column: 1,
                row: 2,
                rank: 'novice',
                parents: ['mosin_obrez'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'mosin_obrez',
                        materials: [
                            { id: 'yantar_fragments', amount: 38 },
                            { id: 'mutated_growth', amount: 12 },
                            { id: 'plantain', amount: 9 }
                        ],
                        cost: 21380,
                        level: 9,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 52 },
                            { id: 'mutated_growth', amount: 14 },
                            { id: 'plantain', amount: 13 }
                        ],
                        cost: 25210,
                        level: 10,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'svt40',
                weaponId: 'svt40',
                column: 1,
                row: 3,
                rank: 'novice',
                parents: [],
                materials: [
                    { id: 'yantar_fragments', amount: 31 },
                    { id: 'mutated_growth', amount: 19 },
                    { id: 'plantain', amount: 10 }
                ],
                cost: 18280,
                level: 10,
                location: 'cordon'
            },
            {
                id: 'avt40',
                weaponId: 'avt40',
                column: 2,
                row: 3,
                rank: 'stalker',
                parents: ['svt40'],
                prerequisite: 'svt40',
                materials: [
                    { id: 'hazy_pollen', amount: 70 },
                    { id: 'rad_mutagen_sample', amount: 60 },
                    { id: 'anoplast', amount: 30 },
                    { id: 'bergman_meter', amount: 10 }
                ],
                cost: 74280,
                level: 15,
                location: 'cordon'
            },
            {
                id: 'sks',
                weaponId: 'sks',
                column: 2,
                row: 5,
                rank: 'stalker',
                parents: [],
                materials: [
                    { id: 'hazy_pollen', amount: 88 },
                    { id: 'rad_mutagen_sample', amount: 95 },
                    { id: 'anoplast', amount: 70 },
                    { id: 'bergman_meter', amount: 19 }
                ],
                cost: 84520,
                level: 15,
                location: 'cordon'
            },
            {
                id: 'svd',
                weaponId: 'svd',
                name: 'СВД',
                nameEn: 'SVD',
                column: 3,
                row: 3,
                rank: 'experienced',
                parents: ['avt40'],
                prerequisite: 'avt40',
                materials: [
                    { id: 'anomaly_detector', amount: 205 },
                    { id: 'regenerating_fabric', amount: 145 },
                    { id: 'bioferrite_core', amount: 125 },
                    { id: 'old_scheme', amount: 45 }
                ],
                cost: 124280,
                level: 20,
                location: 'bar'
            },
            {
                id: 'remington_700',
                weaponId: 'remington_700',
                column: 4,
                row: 2,
                rank: 'veteran',
                parents: ['mosin'],
                prerequisite: 'mosin',
                materials: [
                    { id: 'anomaly_detector', amount: 485 },
                    { id: 'regenerating_fabric', amount: 425 },
                    { id: 'bioferrite_core', amount: 124 },
                    { id: 'old_scheme', amount: 62 }
                ],
                cost: 424280,
                level: 25,
                location: 'bar'
            },
            {
                id: 'ots03_svua',
                weaponId: 'ots03_svua',
                name: 'ОЦ-03 СВУ',
                nameEn: 'OTs-03 SVU',
                column: 4,
                row: 4,
                rank: 'veteran',
                parents: ['svd'],
                prerequisite: 'svd',
                materials: [
                    { id: 'anomaly_detector', amount: 225 },
                    { id: 'regenerating_fabric', amount: 165 },
                    { id: 'bioferrite_core', amount: 94 },
                    { id: 'old_scheme', amount: 42 }
                ],
                cost: 145280,
                level: 25,
                location: 'bar'
            },
            {
                id: 'm24',
                weaponId: 'm24',
                name: 'Винтовка M24',
                nameEn: 'M24 Rifle',
                column: 5,
                row: 2,
                rank: 'veteran',
                parents: ['remington_700'],
                prerequisite: 'remington_700',
                materials: [
                    { id: 'anomaly_filter', amount: 325 },
                    { id: 'chitin_plate', amount: 285 },
                    { id: 'carbon_fiber', amount: 230 },
                    { id: 'converter', amount: 80 }
                ],
                cost: 1024000,
                level: 30,
                location: 'bar'
            },
            {
                id: 'svds',
                weaponId: 'svds',
                name: 'СВД-С',
                nameEn: 'SVDS',
                column: 5,
                row: 3,
                rank: 'veteran',
                parents: ['svd', 'ots03_svua'],
                location: 'bar',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'ots03_svua',
                        materials: [
                            { id: 'anomaly_filter', amount: 275 },
                            { id: 'chitin_plate', amount: 225 },
                            { id: 'carbon_fiber', amount: 175 },
                            { id: 'converter', amount: 50 }
                        ],
                        cost: 421240,
                        level: 30,
                        location: 'bar',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        prerequisite: 'svd',
                        materials: [
                            { id: 'anomaly_filter', amount: 365 },
                            { id: 'chitin_plate', amount: 275 },
                            { id: 'carbon_fiber', amount: 225 },
                            { id: 'converter', amount: 75 }
                        ],
                        cost: 632240,
                        level: 30,
                        location: 'bar',
                        usesChain: true
                    }
                ]
            },
            {
                id: 'vss_vintorez',
                weaponId: 'vss_vintorez',
                name: '«Винторез»',
                nameEn: '"Vintorez"',
                column: 6,
                row: 5,
                rank: 'expert',
                parents: [],
                materials: [],
                cost: 0,
                level: 0,
                location: 'north',
                locked: true
            },
            {
                id: 'l96a1',
                weaponId: 'l96a1',
                column: 7,
                row: 2,
                rank: 'professional',
                parents: ['m24'],
                prerequisite: 'm24',
                materials: [],
                cost: 0,
                level: 0,
                location: 'north',
                locked: true
            },
            {
                id: 'walther_wa2000',
                weaponId: 'walther_wa2000',
                name: 'WA 2000',
                nameEn: 'WA 2000',
                column: 7,
                row: 4,
                rank: 'professional',
                parents: ['svds', 'ots03_svua'],
                materials: [],
                cost: 0,
                level: 0,
                location: 'north',
                locked: true
            },
            {
                id: 'vintorez_m',
                weaponId: 'vintorez_m',
                name: '«Винторез-М»',
                nameEn: '"Vintorez-M"',
                column: 7,
                row: 5,
                rank: 'professional',
                parents: ['vss_vintorez'],
                prerequisite: 'vss_vintorez',
                materials: [],
                cost: 0,
                level: 0,
                location: 'north',
                locked: true
            },
            {
                id: 'hk_g3sg1',
                weaponId: 'hk_g3sg1',
                column: 7,
                row: 6,
                rank: 'professional',
                parents: [],
                materials: [],
                cost: 0,
                level: 0,
                location: 'north',
                locked: true
            },
            {
                id: 'sako_trg42',
                weaponId: 'sako_trg42',
                column: 8,
                row: 2,
                rank: 'master',
                parents: ['l96a1'],
                location: 'north',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'l96a1',
                        materials: [
                            { id: 'dark_pass', amount: 2600 },
                            { id: 'anomaly_glass', amount: 120 },
                            { id: 'storm_shard', amount: 110 },
                            { id: 'crystal_bud', amount: 60 },
                            { id: 'stuzha', amount: 58 },
                            { id: 'homemade_thermoplast', amount: 80 },
                            { id: 'alpha_substance_container', amount: 40 },
                            { id: 'frost_beacon', amount: 5 }
                        ],
                        cost: 0,
                        eventCost: 109100,
                        level: 25,
                        location: 'north',
                        usesChain: false
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'dark_pass', amount: 5200 },
                            { id: 'anomaly_glass', amount: 142 },
                            { id: 'storm_shard', amount: 126 },
                            { id: 'crystal_bud', amount: 74 },
                            { id: 'stuzha', amount: 68 },
                            { id: 'homemade_thermoplast', amount: 80 },
                            { id: 'alpha_substance_container', amount: 40 },
                            { id: 'frost_beacon', amount: 10 }
                        ],
                        cost: 0,
                        eventCost: 138400,
                        level: 25,
                        location: 'north',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'mk14_ebr',
                weaponId: 'mk14_ebr',
                name: 'Mk14 EBR',
                nameEn: 'Mk14 EBR',
                column: 8,
                row: 3,
                rank: 'master',
                parents: [],
                materials: [
                    { id: 'dark_pass', amount: 2100 },
                    { id: 'anomaly_glass', amount: 42 },
                    { id: 'storm_shard', amount: 26 },
                    { id: 'crystal_bud', amount: 8 },
                    { id: 'stuzha', amount: 5 },
                    { id: 'homemade_thermoplast', amount: 20 },
                    { id: 'alpha_substance_container', amount: 10 },
                    { id: 'frost_beacon', amount: 4 }
                ],
                cost: 0,
                eventCost: 250000,
                level: 25,
                location: 'north'
            },
            {
                id: 'sr25',
                weaponId: 'sr25',
                column: 8,
                row: 4,
                rank: 'master',
                parents: [],
                materials: [
                    { id: 'dark_pass', amount: 2100 },
                    { id: 'anomaly_glass', amount: 42 },
                    { id: 'storm_shard', amount: 26 },
                    { id: 'crystal_bud', amount: 8 },
                    { id: 'stuzha', amount: 5 },
                    { id: 'homemade_thermoplast', amount: 20 },
                    { id: 'alpha_substance_container', amount: 10 },
                    { id: 'frost_beacon', amount: 4 }
                ],
                cost: 0,
                eventCost: 250000,
                level: 25,
                location: 'north'
            },
            {
                id: 'vssk_vykhlop',
                weaponId: 'vssk_vykhlop',
                name: '«Выхлоп»',
                nameEn: '"Vykhlop"',
                column: 9,
                row: 2,
                rank: 'legend',
                parents: [],
                materials: [],
                cost: 0,
                level: 0,
                location: 'north',
                locked: true
            }
        ]
    },
    {
        id: 'weapons_shotgun',
        name: 'Оружие/Дробовики',
        nameEn: 'Weapons/Shotguns',
        order: 5,
        columns: [
            { rank: 'lockpick', location: 'rostok' },
            { rank: 'lockpick', location: 'rostok' },
            { rank: 'novice', location: 'cordon' },
            { rank: 'stalker', location: 'cordon' },
            { rank: 'experienced', location: 'bar', rankLabel: 'Опытный', rankLabelEn: 'Experienced' },
            { rank: 'veteran', location: 'bar', rankLabel: 'Бывалый', rankLabelEn: 'Stalwart' },
            { rank: 'veteran', location: 'bar' },
            { rank: 'expert', location: 'north' },
            { rank: 'professional', location: 'north' },
            { rank: 'master', location: 'north' },
            { rank: 'legend', location: 'north' }
        ],
        nodes: [
            {
                id: 'toz34_obrez',
                weaponId: 'toz34_obrez',
                column: 0,
                row: 2,
                rank: 'lockpick',
                parents: [],
                materials: [
                    { id: 'mutated_tissue_sample', amount: 5 }
                ],
                cost: 1920,
                level: 2,
                location: 'rostok'
            },
            {
                id: 'toz34',
                weaponId: 'toz34',
                name: 'ТОЗ-34',
                nameEn: 'TOZ-34',
                column: 1,
                row: 2,
                rank: 'lockpick',
                parents: ['toz34_obrez'],
                prerequisite: 'toz34_obrez',
                materials: [
                    { id: 'mandrake_root', amount: 15 },
                    { id: 'mutated_tissue_sample', amount: 10 }
                ],
                cost: 2110,
                level: 4,
                location: 'rostok'
            },
            {
                id: 'toz194',
                weaponId: 'toz194',
                column: 2,
                row: 2,
                rank: 'novice',
                parents: ['toz34'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'toz34',
                        materials: [
                            { id: 'yantar_fragments', amount: 15 },
                            { id: 'mutated_growth', amount: 20 },
                            { id: 'plantain', amount: 5 }
                        ],
                        cost: 4530,
                        level: 6,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 16 },
                            { id: 'mutated_growth', amount: 25 },
                            { id: 'plantain', amount: 8 }
                        ],
                        cost: 5230,
                        level: 8,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'toz66_obrez',
                weaponId: 'toz66_obrez',
                column: 0,
                row: 3,
                rank: 'lockpick',
                parents: [],
                materials: [],
                cost: 1240,
                level: 1,
                location: 'rostok'
            },
            {
                id: 'toz66',
                weaponId: 'toz66',
                name: 'ТОЗ-66',
                nameEn: 'TOZ-66',
                column: 1,
                row: 3,
                rank: 'lockpick',
                parents: ['toz66_obrez'],
                prerequisite: 'toz66_obrez',
                materials: [
                    { id: 'mandrake_root', amount: 10 },
                    { id: 'mutated_tissue_sample', amount: 20 }
                ],
                cost: 1890,
                level: 3,
                location: 'rostok'
            },
            {
                id: 'fort500',
                weaponId: 'fort500',
                column: 2,
                row: 3,
                rank: 'novice',
                parents: ['toz66'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'toz66',
                        materials: [
                            { id: 'yantar_fragments', amount: 15 },
                            { id: 'mutated_growth', amount: 15 },
                            { id: 'plantain', amount: 6 }
                        ],
                        cost: 4530,
                        level: 6,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 16 },
                            { id: 'mutated_growth', amount: 20 },
                            { id: 'plantain', amount: 9 }
                        ],
                        cost: 5230,
                        level: 8,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'mossberg_maverick',
                weaponId: 'mossberg_maverick',
                name: 'Mossberg 88',
                nameEn: 'Mossberg 88',
                column: 3,
                row: 2,
                rank: 'stalker',
                parents: ['toz194', 'fort500'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'toz194',
                        materials: [
                            { id: 'hazy_pollen', amount: 48 },
                            { id: 'rad_mutagen_sample', amount: 65 },
                            { id: 'anoplast', amount: 30 },
                            { id: 'bergman_meter', amount: 5 }
                        ],
                        cost: 10510,
                        level: 12,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        prerequisite: 'fort500',
                        materials: [
                            { id: 'hazy_pollen', amount: 55 },
                            { id: 'rad_mutagen_sample', amount: 80 },
                            { id: 'anoplast', amount: 35 }
                        ],
                        cost: 13510,
                        level: 12,
                        location: 'cordon',
                        usesChain: true
                    }
                ]
            },
            {
                id: 'remington_870',
                weaponId: 'remington_870',
                name: 'Remington 870',
                nameEn: 'Remington 870',
                column: 4,
                row: 2,
                rank: 'experienced',
                parents: ['mossberg_maverick'],
                prerequisite: 'mossberg_maverick',
                materials: [
                    { id: 'anomaly_detector', amount: 225 },
                    { id: 'regenerating_fabric', amount: 265 },
                    { id: 'bioferrite_core', amount: 140 },
                    { id: 'old_scheme', amount: 20 }
                ],
                cost: 104040,
                level: 17,
                location: 'bar'
            },
            {
                id: 'mp153',
                weaponId: 'mp153',
                column: 5,
                row: 2,
                rank: 'veteran',
                parents: ['remington_870'],
                prerequisite: 'remington_870',
                materials: [
                    { id: 'anomaly_detector', amount: 325 },
                    { id: 'regenerating_fabric', amount: 365 },
                    { id: 'bioferrite_core', amount: 215 },
                    { id: 'old_scheme', amount: 30 }
                ],
                cost: 301510,
                level: 25,
                location: 'bar'
            },
            {
                id: 'spas12',
                weaponId: 'spas12',
                name: 'SPAS-12',
                nameEn: 'SPAS-12',
                column: 6,
                row: 3,
                rank: 'veteran',
                parents: ['mp153'],
                prerequisite: 'mp153',
                materials: [
                    { id: 'anomaly_filter', amount: 235 },
                    { id: 'chitin_plate', amount: 355 },
                    { id: 'carbon_fiber', amount: 195 },
                    { id: 'converter', amount: 55 }
                ],
                cost: 900510,
                level: 30,
                location: 'bar'
            },
            {
                id: 'saiga12c',
                weaponId: 'saiga12c',
                name: 'Сайга-12С',
                nameEn: 'Saiga-12C',
                column: 7,
                row: 2,
                rank: 'expert',
                parents: ['mp153'],
                prerequisite: 'mp153',
                materials: [],
                cost: 0,
                level: 0,
                location: 'north',
                locked: true
            }
        ]
    },
    {
        id: 'armor_combat',
        name: 'Броня/Боевые',
        nameEn: 'Armor/Combat',
        order: 6,
        columns: [
            { rank: 'lockpick', location: 'rostok' },
            { rank: 'novice', location: 'cordon' },
            { rank: 'novice', location: 'cordon' },
            { rank: 'stalker', location: 'cordon' },
            { rank: 'stalker', location: 'cordon' },
            { rank: 'experienced', location: 'bar', rankLabel: 'Опытный', rankLabelEn: 'Experienced' },
            { rank: 'veteran', location: 'bar', rankLabel: 'Бывалый', rankLabelEn: 'Stalwart' },
            { rank: 'veteran', location: 'bar' },
            { rank: 'expert', location: 'bar' },
            { rank: 'professional', location: 'north' },
            { rank: 'master', location: 'north' },
            { rank: 'legend', location: 'north' }
        ],
        nodes: [
            {
                id: 'shakal',
                armorId: 'shakal',
                name: '«Шакал»',
                nameEn: '"Jackal"',
                column: 0,
                row: 2,
                rank: 'lockpick',
                parents: [],
                materials: [
                    { id: 'mandrake_root', amount: 32 },
                    { id: 'mutated_tissue_sample', amount: 24 }
                ],
                cost: 9600,
                level: 3,
                location: 'rostok'
            },
            {
                id: 'psz7',
                armorId: 'psz7',
                name: 'ПСЗ-7',
                nameEn: 'PSZ-7',
                column: 1,
                row: 2,
                rank: 'novice',
                parents: ['shakal'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'shakal',
                        materials: [
                            { id: 'yantar_fragments', amount: 29 },
                            { id: 'mutated_growth', amount: 21 },
                            { id: 'plantain', amount: 3 }
                        ],
                        cost: 12200,
                        level: 6,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 35 },
                            { id: 'mutated_growth', amount: 26 },
                            { id: 'plantain', amount: 5 }
                        ],
                        cost: 14100,
                        level: 7,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'psz7b',
                armorId: 'psz7b',
                name: 'ПСЗ-7Б',
                nameEn: 'PSZ-7B',
                column: 2,
                row: 2,
                rank: 'novice',
                parents: ['psz7'],
                prerequisite: 'psz7',
                materials: [
                    { id: 'yantar_fragments', amount: 33 },
                    { id: 'mutated_growth', amount: 28 },
                    { id: 'plantain', amount: 6 }
                ],
                cost: 16100,
                level: 10,
                location: 'cordon'
            },
            {
                id: 'ps5',
                armorId: 'ps5',
                name: 'ПС5',
                nameEn: 'PS5',
                column: 3,
                row: 2,
                rank: 'stalker',
                parents: ['psz7b'],
                prerequisite: 'psz7b',
                materials: [
                    { id: 'hazy_pollen', amount: 25 },
                    { id: 'rad_mutagen_sample', amount: 28 },
                    { id: 'anoplast', amount: 15 },
                    { id: 'bergman_meter', amount: 5 }
                ],
                cost: 46000,
                level: 13,
                location: 'cordon'
            },
            {
                id: 'berill5m',
                armorId: 'berill5m',
                name: '«Берилл-5М»',
                nameEn: '"Berill-5M"',
                column: 4,
                row: 2,
                rank: 'stalker',
                parents: ['ps5'],
                prerequisite: 'ps5',
                materials: [
                    { id: 'hazy_pollen', amount: 32 },
                    { id: 'rad_mutagen_sample', amount: 40 },
                    { id: 'anoplast', amount: 25 },
                    { id: 'bergman_meter', amount: 8 }
                ],
                cost: 52000,
                level: 15,
                location: 'cordon'
            },
            {
                id: 'psz9',
                armorId: 'psz9',
                name: '«ПСЗ-9»',
                nameEn: '"PSZ-9"',
                column: 5,
                row: 2,
                rank: 'experienced',
                parents: ['berill5m'],
                prerequisite: 'berill5m',
                materials: [
                    { id: 'anomaly_detector', amount: 63 },
                    { id: 'regenerating_fabric', amount: 70 },
                    { id: 'bioferrite_core', amount: 48 },
                    { id: 'old_scheme', amount: 15 }
                ],
                cost: 158000,
                level: 20,
                location: 'bar'
            },
            {
                id: 'skat9m',
                armorId: 'skat9m',
                name: '«СКАТ-9М»',
                nameEn: '"SKAT-9M"',
                column: 6,
                row: 2,
                rank: 'veteran',
                parents: ['psz9'],
                prerequisite: 'psz9',
                materials: [
                    { id: 'anomaly_detector', amount: 105 },
                    { id: 'regenerating_fabric', amount: 120 },
                    { id: 'bioferrite_core', amount: 77 },
                    { id: 'old_scheme', amount: 20 }
                ],
                cost: 382000,
                level: 25,
                location: 'bar'
            },
            {
                id: 'heavy_voshod',
                armorId: 'heavy_voshod',
                name: '«Восход»',
                nameEn: '"Voskhod"',
                column: 7,
                row: 2,
                rank: 'veteran',
                parents: ['skat9m'],
                prerequisite: 'skat9m',
                materials: [
                    { id: 'anomaly_filter', amount: 335 },
                    { id: 'chitin_plate', amount: 305 },
                    { id: 'carbon_fiber', amount: 200 },
                    { id: 'converter', amount: 80 }
                ],
                cost: 1425000,
                level: 30,
                location: 'bar'
            },
            {
                id: 'exoskeleton',
                armorId: 'exoskeleton',
                name: 'Экзоскелет',
                nameEn: 'Exoskeleton',
                column: 8,
                row: 2,
                rank: 'expert',
                parents: ['heavy_voshod'],
                prerequisite: 'heavy_voshod',
                materials: [
                    { id: 'exoskeleton_frame', amount: 1 }
                ],
                cost: 3099000,
                level: 35,
                location: 'bar'
            }
        ]
    },
    {
        id: 'armor_combined',
        name: 'Броня/Комбинированные',
        nameEn: 'Armor/Combined',
        order: 7,
        columns: [
            { rank: 'lockpick', location: 'rostok' },
            { rank: 'novice', location: 'cordon' },
            { rank: 'novice', location: 'cordon' },
            { rank: 'stalker', location: 'cordon' },
            { rank: 'experienced', location: 'bar', rankLabel: 'Опытный', rankLabelEn: 'Experienced' },
            { rank: 'veteran', location: 'bar', rankLabel: 'Бывалый', rankLabelEn: 'Stalwart' },
            { rank: 'veteran', location: 'bar' },
            { rank: 'expert', location: 'north' },
            { rank: 'professional', location: 'north' },
            { rank: 'master', location: 'north' },
            { rank: 'legend', location: 'north' }
        ],
        nodes: [
            {
                id: 'kurtka',
                armorId: 'kurtka',
                name: 'Куртка',
                nameEn: 'Jacket',
                column: 0,
                row: 2,
                rank: 'lockpick',
                parents: [],
                materials: [],
                cost: 1820,
                level: 0,
                location: 'rostok'
            },
            {
                id: 'chn1',
                armorId: 'chn1',
                name: 'ЧН-1',
                nameEn: 'CHN-1',
                column: 1,
                row: 2,
                rank: 'novice',
                parents: ['kurtka'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'kurtka',
                        materials: [
                            { id: 'yantar_fragments', amount: 24 },
                            { id: 'mutated_growth', amount: 22 },
                            { id: 'plantain', amount: 6 }
                        ],
                        cost: 11100,
                        level: 6,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 30 },
                            { id: 'mutated_growth', amount: 29 },
                            { id: 'plantain', amount: 8 }
                        ],
                        cost: 13100,
                        level: 7,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'zarya',
                armorId: 'zarya',
                name: '«Заря»',
                nameEn: '"Zarya"',
                column: 2,
                row: 1,
                rank: 'novice',
                parents: ['chn1'],
                prerequisite: 'chn1',
                materials: [
                    { id: 'yantar_fragments', amount: 32 },
                    { id: 'mutated_growth', amount: 25 },
                    { id: 'plantain', amount: 7 }
                ],
                cost: 38100,
                level: 10,
                location: 'cordon'
            },
            {
                id: 'chn16',
                armorId: 'chn16',
                name: 'ЧН-1б',
                nameEn: 'CHN-1b',
                column: 2,
                row: 2,
                rank: 'novice',
                parents: ['chn1'],
                prerequisite: 'chn1',
                materials: [
                    { id: 'yantar_fragments', amount: 28 },
                    { id: 'mutated_growth', amount: 27 },
                    { id: 'plantain', amount: 7 }
                ],
                cost: 31100,
                level: 10,
                location: 'cordon'
            },
            {
                id: 'tourist',
                armorId: 'tourist',
                name: '«Турист»',
                nameEn: '"Tourist"',
                column: 3,
                row: 0,
                rank: 'stalker',
                parents: ['zarya'],
                prerequisite: 'zarya',
                materials: [
                    { id: 'hazy_pollen', amount: 40 },
                    { id: 'rad_mutagen_sample', amount: 60 },
                    { id: 'anoplast', amount: 50 },
                    { id: 'bergman_meter', amount: 12 }
                ],
                cost: 86510,
                level: 15,
                location: 'cordon'
            },
            {
                id: 'zarya2',
                armorId: 'zarya2',
                name: '«Заря-2»',
                nameEn: '"Zarya-2"',
                column: 3,
                row: 1,
                rank: 'stalker',
                parents: ['zarya'],
                prerequisite: 'zarya',
                materials: [
                    { id: 'hazy_pollen', amount: 33 },
                    { id: 'rad_mutagen_sample', amount: 39 },
                    { id: 'anoplast', amount: 26 },
                    { id: 'bergman_meter', amount: 8 }
                ],
                cost: 78510,
                level: 15,
                location: 'cordon'
            },
            {
                id: 'chn2a',
                armorId: 'chn2a',
                name: 'ЧН-2а',
                nameEn: 'CHN-2a',
                column: 3,
                row: 2,
                rank: 'stalker',
                parents: ['chn16'],
                prerequisite: 'chn16',
                materials: [
                    { id: 'hazy_pollen', amount: 49 },
                    { id: 'rad_mutagen_sample', amount: 56 },
                    { id: 'anoplast', amount: 40 },
                    { id: 'bergman_meter', amount: 15 }
                ],
                cost: 102510,
                level: 15,
                location: 'cordon'
            },
            {
                id: 'borey',
                armorId: 'borey',
                name: '«Борей»',
                nameEn: '"Boreas"',
                column: 3,
                row: 3,
                rank: 'stalker',
                parents: [],
                prerequisite: 'tourist',
                materials: [
                    { id: 'frozen_goggles', amount: 1 },
                    { id: 'sturdy_suit', amount: 1 },
                    { id: 'anomaly_vest', amount: 1 },
                    { id: 'vortex_cylinders', amount: 1 },
                    { id: 'anomaly_glass', amount: 21 },
                    { id: 'storm_shard', amount: 12 },
                    { id: 'crystal_bud', amount: 10 },
                    { id: 'stuzha', amount: 8 }
                ],
                cost: 0,
                eventCost: 7500,
                level: 15,
                location: 'cordon'
            },
            {
                id: 'zarya3',
                armorId: 'zarya3',
                name: '«Заря-3»',
                nameEn: '"Zarya-3"',
                column: 4,
                row: 1,
                rank: 'experienced',
                parents: ['zarya2'],
                prerequisite: 'zarya2',
                materials: [
                    { id: 'anomaly_detector', amount: 75 },
                    { id: 'regenerating_fabric', amount: 65 },
                    { id: 'bioferrite_core', amount: 45 },
                    { id: 'old_scheme', amount: 16 }
                ],
                cost: 136000,
                level: 20,
                location: 'bar'
            },
            {
                id: 'chn26',
                armorId: 'chn26',
                name: 'ЧН-2б',
                nameEn: 'CHN-2b',
                column: 4,
                row: 2,
                rank: 'experienced',
                parents: ['chn2a'],
                prerequisite: 'chn2a',
                materials: [
                    { id: 'anomaly_detector', amount: 102 },
                    { id: 'regenerating_fabric', amount: 82 },
                    { id: 'bioferrite_core', amount: 52 },
                    { id: 'old_scheme', amount: 22 }
                ],
                cost: 192000,
                level: 20,
                location: 'bar'
            },
            {
                id: 'seva',
                armorId: 'seva',
                name: '«СЕВА»',
                nameEn: '"SEVA"',
                column: 5,
                row: 1,
                rank: 'veteran',
                parents: ['zarya3'],
                prerequisite: 'zarya3',
                materials: [
                    { id: 'anomaly_detector', amount: 80 },
                    { id: 'regenerating_fabric', amount: 90 },
                    { id: 'bioferrite_core', amount: 95 },
                    { id: 'old_scheme', amount: 21 }
                ],
                cost: 362000,
                level: 25,
                location: 'bar'
            },
            {
                id: 'chn3a',
                armorId: 'chn3a',
                name: 'ЧН-3а',
                nameEn: 'CHN-3a',
                column: 5,
                row: 2,
                rank: 'veteran',
                parents: ['chn26'],
                prerequisite: 'chn26',
                materials: [
                    { id: 'anomaly_detector', amount: 205 },
                    { id: 'regenerating_fabric', amount: 230 },
                    { id: 'bioferrite_core', amount: 122 },
                    { id: 'old_scheme', amount: 33 }
                ],
                cost: 392000,
                level: 25,
                location: 'bar'
            },
            {
                id: 'makeshift_exo',
                armorId: 'makeshift_exo',
                name: 'Экзоскелет',
                nameEn: 'Exoskeleton',
                column: 6,
                row: 0,
                rank: 'veteran',
                parents: ['tourist'],
                prerequisite: 'tourist',
                materials: [
                    { id: 'anomaly_filter', amount: 385 },
                    { id: 'chitin_plate', amount: 395 },
                    { id: 'carbon_fiber', amount: 255 },
                    { id: 'converter', amount: 100 }
                ],
                cost: 1450000,
                level: 30,
                location: 'bar'
            },
            {
                id: 'chn3m',
                armorId: 'chn3m',
                name: 'ЧН-3м',
                nameEn: 'CHN-3m',
                column: 6,
                row: 2,
                rank: 'veteran',
                parents: ['chn3a'],
                prerequisite: 'chn3a',
                materials: [
                    { id: 'anomaly_filter', amount: 355 },
                    { id: 'chitin_plate', amount: 425 },
                    { id: 'carbon_fiber', amount: 250 },
                    { id: 'converter', amount: 105 }
                ],
                cost: 1350000,
                level: 30,
                location: 'bar'
            },
            {
                id: 'chn36',
                armorId: 'chn36',
                name: 'ЧН-36',
                nameEn: 'CHN-36',
                column: 7,
                row: 2,
                rank: 'expert',
                parents: ['chn3m'],
                prerequisite: 'chn3m',
                materials: [],
                cost: 0,
                level: 0,
                location: 'north',
                locked: true
            },
            {
                id: 'yggdrasil',
                armorId: 'yggdrasil',
                name: '«Иггдрасиль»',
                nameEn: '"Yggdrasil"',
                column: 7,
                row: 3,
                rank: 'expert',
                parents: ['borey'],
                prerequisite: 'borey',
                materials: [
                    { id: 'dark_pass', amount: 820 },
                    { id: 'anomaly_frame', amount: 1 },
                    { id: 'sturdy_servos', amount: 1 },
                    { id: 'anomaly_life_support', amount: 1 },
                    { id: 'frost_batteries', amount: 1 },
                    { id: 'spirit_of_tree', amount: 1 },
                    { id: 'anomaly_glass', amount: 120 },
                    { id: 'storm_shard', amount: 110 },
                    { id: 'crystal_bud', amount: 60 },
                    { id: 'stuzha', amount: 58 },
                    { id: 'homemade_thermoplast', amount: 40 },
                    { id: 'alpha_substance_container', amount: 20 },
                    { id: 'frost_beacon', amount: 5 }
                ],
                cost: 0,
                eventCost: 85000,
                level: 25,
                location: 'north'
            }
        ]
    },
    {
        id: 'armor_scientific',
        name: 'Броня/Научные',
        nameEn: 'Armor/Scientific',
        order: 8,
        columns: [
            { rank: 'lockpick', location: 'rostok' },
            { rank: 'stalker', location: 'cordon' },
            { rank: 'stalker', location: 'cordon' },
            { rank: 'experienced', location: 'bar', rankLabel: 'Опытный', rankLabelEn: 'Experienced' },
            { rank: 'veteran', location: 'bar', rankLabel: 'Бывалый', rankLabelEn: 'Stalwart' },
            { rank: 'veteran', location: 'bar' },
            { rank: 'expert', location: 'north' },
            { rank: 'professional', location: 'north' },
            { rank: 'master', location: 'north' },
            { rank: 'legend', location: 'north' }
        ],
        nodes: [
            {
                id: 'otmychka',
                armorId: 'otmychka',
                name: '«Отмычка»',
                nameEn: '"Lockpick"',
                column: 0,
                row: 2,
                rank: 'lockpick',
                parents: [],
                materials: [
                    { id: 'mandrake_root', amount: 24 },
                    { id: 'mutated_tissue_sample', amount: 18 }
                ],
                cost: 8200,
                level: 3,
                location: 'rostok'
            },
            {
                id: 'voshod',
                armorId: 'voshod',
                name: '«Восход»',
                nameEn: '"Voskhod"',
                column: 1,
                row: 2,
                rank: 'stalker',
                parents: ['otmychka'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'otmychka',
                        materials: [
                            { id: 'hazy_pollen', amount: 26 },
                            { id: 'rad_mutagen_sample', amount: 18 },
                            { id: 'anoplast', amount: 8 },
                            { id: 'bergman_meter', amount: 4 }
                        ],
                        cost: 52300,
                        level: 11,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'hazy_pollen', amount: 34 },
                            { id: 'rad_mutagen_sample', amount: 32 },
                            { id: 'anoplast', amount: 14 },
                            { id: 'bergman_meter', amount: 6 }
                        ],
                        cost: 65600,
                        level: 12,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'fobos',
                armorId: 'fobos',
                name: '«Фобос»',
                nameEn: '"Phobos"',
                column: 2,
                row: 2,
                rank: 'stalker',
                parents: ['voshod'],
                prerequisite: 'voshod',
                materials: [
                    { id: 'hazy_pollen', amount: 42 },
                    { id: 'rad_mutagen_sample', amount: 36 },
                    { id: 'anoplast', amount: 18 },
                    { id: 'bergman_meter', amount: 6 }
                ],
                cost: 124100,
                level: 15,
                location: 'cordon'
            },
            {
                id: 'ssp99_ecolog',
                armorId: 'ssp99_ecolog',
                name: '«Эколог»',
                nameEn: '"Ecologist"',
                column: 3,
                row: 2,
                rank: 'experienced',
                parents: ['fobos'],
                prerequisite: 'fobos',
                materials: [
                    { id: 'anomaly_detector', amount: 48 },
                    { id: 'regenerating_fabric', amount: 39 },
                    { id: 'bioferrite_core', amount: 28 },
                    { id: 'old_scheme', amount: 10 }
                ],
                cost: 212100,
                level: 20,
                location: 'bar'
            },
            {
                id: 'ssp99_almaz',
                armorId: 'ssp99_almaz',
                name: '«Алмаз»',
                nameEn: '"Diamond"',
                column: 4,
                row: 1,
                rank: 'veteran',
                parents: ['ssp99_ecolog'],
                prerequisite: 'ssp99_ecolog',
                materials: [
                    { id: 'anomaly_detector', amount: 85 },
                    { id: 'regenerating_fabric', amount: 95 },
                    { id: 'bioferrite_core', amount: 85 },
                    { id: 'old_scheme', amount: 30 }
                ],
                cost: 352390,
                level: 25,
                location: 'bar'
            },
            {
                id: 'ssp99m_emerald',
                armorId: 'ssp99m_emerald',
                name: '«Изумруд»',
                nameEn: '"Emerald"',
                column: 4,
                row: 2,
                rank: 'veteran',
                parents: ['ssp99_ecolog'],
                prerequisite: 'ssp99_ecolog',
                materials: [
                    { id: 'anomaly_detector', amount: 65 },
                    { id: 'regenerating_fabric', amount: 65 },
                    { id: 'bioferrite_core', amount: 50 },
                    { id: 'old_scheme', amount: 20 }
                ],
                cost: 322100,
                level: 25,
                location: 'bar'
            },
            {
                id: 'ssp99m_topaz',
                armorId: 'ssp99m_topaz',
                name: '«Топаз»',
                nameEn: '"Topaz"',
                column: 4,
                row: 3,
                rank: 'veteran',
                parents: ['ssp99_ecolog'],
                prerequisite: 'ssp99_ecolog',
                materials: [
                    { id: 'anomaly_detector', amount: 55 },
                    { id: 'regenerating_fabric', amount: 55 },
                    { id: 'bioferrite_core', amount: 53 },
                    { id: 'old_scheme', amount: 19 }
                ],
                cost: 329200,
                level: 25,
                location: 'bar'
            },
            {
                id: 'ssp99m_sapphire',
                armorId: 'ssp99m_sapphire',
                name: '«Сапфир»',
                nameEn: '"Sapphire"',
                column: 4,
                row: 4,
                rank: 'veteran',
                parents: ['ssp99_ecolog'],
                prerequisite: 'ssp99_ecolog',
                materials: [
                    { id: 'anomaly_detector', amount: 95 },
                    { id: 'regenerating_fabric', amount: 90 },
                    { id: 'bioferrite_core', amount: 84 },
                    { id: 'old_scheme', amount: 26 }
                ],
                cost: 384310,
                level: 25,
                location: 'bar'
            },
            {
                id: 'ssp99m_ruby',
                armorId: 'ssp99m_ruby',
                name: '«Рубин»',
                nameEn: '"Ruby"',
                column: 5,
                row: 2,
                rank: 'veteran',
                parents: ['ssp99_almaz', 'ssp99m_emerald', 'ssp99m_topaz', 'ssp99m_sapphire'],
                location: 'bar',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'ssp99m_emerald',
                        materials: [
                            { id: 'anomaly_filter', amount: 265 },
                            { id: 'chitin_plate', amount: 305 },
                            { id: 'carbon_fiber', amount: 205 },
                            { id: 'converter', amount: 60 }
                        ],
                        cost: 622530,
                        level: 30,
                        location: 'bar',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        prerequisite: 'ssp99m_topaz',
                        materials: [
                            { id: 'anomaly_filter', amount: 265 },
                            { id: 'chitin_plate', amount: 305 },
                            { id: 'carbon_fiber', amount: 205 },
                            { id: 'converter', amount: 60 }
                        ],
                        cost: 622530,
                        level: 30,
                        location: 'bar',
                        usesChain: true
                    },
                    {
                        id: 'offer_3',
                        name: 'Предложение #3',
                        nameEn: 'Offer #3',
                        prerequisite: 'ssp99m_sapphire',
                        materials: [
                            { id: 'anomaly_filter', amount: 265 },
                            { id: 'chitin_plate', amount: 305 },
                            { id: 'carbon_fiber', amount: 205 },
                            { id: 'converter', amount: 60 }
                        ],
                        cost: 622530,
                        level: 30,
                        location: 'bar',
                        usesChain: true
                    },
                    {
                        id: 'offer_4',
                        name: 'Предложение #4',
                        nameEn: 'Offer #4',
                        prerequisite: 'ssp99_almaz',
                        materials: [
                            { id: 'anomaly_filter', amount: 265 },
                            { id: 'chitin_plate', amount: 305 },
                            { id: 'carbon_fiber', amount: 205 },
                            { id: 'converter', amount: 60 }
                        ],
                        cost: 622530,
                        level: 30,
                        location: 'bar',
                        usesChain: true
                    }
                ]
            }
        ]
    },
    {
        id: 'other_containers',
        name: 'Контейнеры и рюкзаки',
        nameEn: 'Containers and Backpacks',
        group: 'other',
        order: 9,
        columns: [
            { rank: 'lockpick', location: 'rostok' },
            { rank: 'novice', location: 'cordon' },
            { rank: 'novice', location: 'cordon' },
            { rank: 'stalker', location: 'cordon' },
            { rank: 'experienced', location: 'bar', rankLabel: 'Опытный', rankLabelEn: 'Experienced' },
            { rank: 'veteran', location: 'bar', rankLabel: 'Бывалый', rankLabelEn: 'Stalwart' },
            { rank: 'veteran', location: 'bar' }
        ],
        nodes: [
            {
                id: 'veshmeshok',
                backpackId: 'veshmeshok',
                name: 'Вещмешок',
                nameEn: 'Duffel Bag',
                barterRarity: 'none',
                column: 0,
                row: 1,
                rank: 'lockpick',
                parents: [],
                materials: [],
                cost: 380,
                level: 0,
                location: 'rostok'
            },
            {
                id: 'container_x1',
                containerId: 'container_x1',
                name: 'Контейнер X1',
                nameEn: 'Container X1',
                column: 1,
                row: 0,
                rank: 'novice',
                parents: [],
                materials: [
                    { id: 'yantar_fragments', amount: 26 },
                    { id: 'mutated_growth', amount: 12 },
                    { id: 'plantain', amount: 14 }
                ],
                cost: 4800,
                level: 6,
                location: 'cordon'
            },
            {
                id: 'palomnik',
                backpackId: 'palomnik',
                name: '«Паломник»',
                nameEn: '"Pilgrim"',
                barterRarity: 'common',
                column: 1,
                row: 1,
                rank: 'novice',
                parents: ['veshmeshok'],
                prerequisite: 'veshmeshok',
                materials: [
                    { id: 'yantar_fragments', amount: 38 },
                    { id: 'mutated_growth', amount: 18 },
                    { id: 'plantain', amount: 12 }
                ],
                cost: 10200,
                level: 9,
                location: 'cordon'
            },
            {
                id: 'container_x2',
                containerId: 'container_x2',
                name: 'Контейнер X2',
                nameEn: 'Container X2',
                column: 2,
                row: 0,
                rank: 'novice',
                parents: ['container_x1'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'container_x1',
                        materials: [
                            { id: 'yantar_fragments', amount: 37 },
                            { id: 'mutated_growth', amount: 19 },
                            { id: 'plantain', amount: 16 }
                        ],
                        cost: 18600,
                        level: 9,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        prerequisite: 'container_x1',
                        prerequisiteCount: 2,
                        materials: [],
                        cost: 0,
                        level: 9,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'pka_2',
                containerId: 'pka_2',
                name: 'ПКА-2',
                nameEn: 'PKA-2',
                column: 3,
                row: 0,
                rank: 'stalker',
                parents: ['container_x2'],
                prerequisite: 'container_x2',
                materials: [
                    { id: 'hazy_pollen', amount: 118 },
                    { id: 'rad_mutagen_sample', amount: 91 },
                    { id: 'anoplast', amount: 28 },
                    { id: 'bergman_meter', amount: 5 }
                ],
                cost: 32600,
                level: 14,
                location: 'cordon'
            },
            {
                id: 'backpack_kolobok',
                backpackId: 'backpack_kolobok',
                name: '«Колобок»',
                nameEn: '"Kolobok"',
                column: 3,
                row: 1,
                rank: 'stalker',
                parents: ['palomnik'],
                prerequisite: 'palomnik',
                materials: [
                    { id: 'hazy_pollen', amount: 102 },
                    { id: 'rad_mutagen_sample', amount: 78 },
                    { id: 'anoplast', amount: 19 },
                    { id: 'bergman_meter', amount: 1 }
                ],
                cost: 22400,
                level: 14,
                location: 'cordon'
            },
            {
                id: 'purga',
                backpackId: 'purga',
                name: '«Пурга»',
                nameEn: '"Purga"',
                barterRarity: 'uncommon',
                column: 3,
                row: 2,
                rank: 'stalker',
                parents: [],
                materials: [
                    { id: 'hazy_pollen', amount: 96 },
                    { id: 'rad_mutagen_sample', amount: 82 },
                    { id: 'anoplast', amount: 16 },
                    { id: 'bergman_meter', amount: 2 }
                ],
                cost: 52400,
                level: 14,
                location: 'cordon'
            },
            {
                id: 'pka_3',
                containerId: 'pka_3',
                name: 'ПКА-3',
                nameEn: 'PKA-3',
                column: 4,
                row: 0,
                rank: 'experienced',
                parents: ['pka_2'],
                prerequisite: 'pka_2',
                materials: [
                    { id: 'anomaly_detector', amount: 73 },
                    { id: 'regenerating_fabric', amount: 61 },
                    { id: 'bioferrite_core', amount: 36 },
                    { id: 'old_scheme', amount: 18 }
                ],
                cost: 46100,
                level: 18,
                location: 'bar'
            },
            {
                id: 'studen',
                backpackId: 'studen',
                name: '«Студень»',
                nameEn: '"Studen"',
                column: 4,
                row: 3,
                rank: 'experienced',
                parents: ['purga'],
                prerequisite: 'purga',
                materials: [
                    { id: 'anomaly_detector', amount: 64 },
                    { id: 'regenerating_fabric', amount: 88 },
                    { id: 'bioferrite_core', amount: 32 },
                    { id: 'old_scheme', amount: 12 }
                ],
                cost: 101300,
                level: 18,
                location: 'bar'
            },
            {
                id: 'pka_4',
                containerId: 'pka_4',
                name: 'ПКА-4',
                nameEn: 'PKA-4',
                column: 5,
                row: 0,
                rank: 'veteran',
                parents: ['pka_3'],
                prerequisite: 'pka_3',
                materials: [
                    { id: 'anomaly_detector', amount: 128 },
                    { id: 'regenerating_fabric', amount: 93 },
                    { id: 'bioferrite_core', amount: 86 },
                    { id: 'old_scheme', amount: 42 }
                ],
                cost: 97400,
                level: 23,
                location: 'bar'
            },
            {
                id: 'purga_2m',
                backpackId: 'purga_2m',
                name: '«Пурга 2М»',
                nameEn: '"Purga 2M"',
                barterRarity: 'collection',
                column: 5,
                row: 2,
                rank: 'veteran',
                parents: ['purga', 'studen'],
                location: 'bar',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'studen',
                        materials: [
                            { id: 'anomaly_detector', amount: 112 },
                            { id: 'regenerating_fabric', amount: 121 },
                            { id: 'bioferrite_core', amount: 68 },
                            { id: 'old_scheme', amount: 14 }
                        ],
                        cost: 126400,
                        level: 23,
                        location: 'bar',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        prerequisite: 'purga',
                        materials: [
                            { id: 'anomaly_detector', amount: 124 },
                            { id: 'regenerating_fabric', amount: 161 },
                            { id: 'bioferrite_core', amount: 78 },
                            { id: 'old_scheme', amount: 28 }
                        ],
                        cost: 166400,
                        level: 23,
                        location: 'bar',
                        usesChain: true
                    }
                ]
            },
            {
                id: 'container_radiy',
                containerId: 'container_radiy',
                name: '«Радий»',
                nameEn: '"Radium"',
                column: 6,
                row: 0,
                rank: 'veteran',
                parents: ['pka_4'],
                prerequisite: 'pka_4',
                materials: [
                    { id: 'anomaly_filter', amount: 275 },
                    { id: 'chitin_plate', amount: 225 },
                    { id: 'carbon_fiber', amount: 175 },
                    { id: 'converter', amount: 75 }
                ],
                cost: 568400,
                level: 28,
                location: 'bar'
            }
        ]
    },
    {
        id: 'other_devices',
        name: 'Устройства',
        nameEn: 'Devices',
        group: 'other',
        order: 10,
        columns: [
            { rank: 'lockpick', location: 'rostok' },
            { rank: 'stalker', location: 'cordon' },
            { rank: 'experienced', location: 'bar', rankLabel: 'Опытный', rankLabelEn: 'Experienced' },
            { rank: 'veteran', location: 'bar', rankLabel: 'Бывалый', rankLabelEn: 'Stalwart' },
            { rank: 'veteran', location: 'bar' },
            { rank: 'expert', location: 'bar' },
            { rank: 'professional', location: 'north' }
        ],
        nodes: [
            {
                id: 'sova_b1',
                deviceId: 'sova_b1',
                column: 0,
                row: 0,
                rank: 'lockpick',
                parents: [],
                materials: [
                    { id: 'mandrake_root', amount: 12 },
                    { id: 'mutated_tissue_sample', amount: 6 }
                ],
                cost: 2600,
                level: 3,
                location: 'rostok'
            },
            {
                id: 'orion_k2',
                deviceId: 'orion_k2',
                column: 1,
                row: 0,
                rank: 'novice',
                parents: ['sova_b1'],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'sova_b1',
                        materials: [
                            { id: 'yantar_fragments', amount: 18 },
                            { id: 'mutated_growth', amount: 9 },
                            { id: 'plantain', amount: 6 }
                        ],
                        cost: 6300,
                        level: 12,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 24 },
                            { id: 'mutated_growth', amount: 12 },
                            { id: 'plantain', amount: 9 }
                        ],
                        cost: 9900,
                        level: 12,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'otklik',
                deviceId: 'otklik',
                column: 1,
                row: 1,
                rank: 'novice',
                parents: [],
                location: 'cordon',
                offers: [
                    {
                        id: 'offer_1',
                        name: 'Предложение #1',
                        nameEn: 'Offer #1',
                        prerequisite: 'homemade_detector',
                        materials: [
                            { id: 'yantar_fragments', amount: 22 },
                            { id: 'mutated_growth', amount: 12 },
                            { id: 'plantain', amount: 14 }
                        ],
                        cost: 24300,
                        level: 12,
                        location: 'cordon',
                        usesChain: true
                    },
                    {
                        id: 'offer_2',
                        name: 'Предложение #2',
                        nameEn: 'Offer #2',
                        materials: [
                            { id: 'yantar_fragments', amount: 29 },
                            { id: 'mutated_growth', amount: 18 },
                            { id: 'plantain', amount: 16 }
                        ],
                        cost: 42000,
                        level: 12,
                        location: 'cordon',
                        usesChain: false
                    }
                ]
            },
            {
                id: 'medved',
                deviceId: 'medved',
                column: 2,
                row: 1,
                rank: 'experienced',
                parents: ['otklik'],
                prerequisite: 'otklik',
                materials: [
                    { id: 'anomaly_detector', amount: 46 },
                    { id: 'regenerating_fabric', amount: 38 },
                    { id: 'bioferrite_core', amount: 24 },
                    { id: 'makeshift_radio_beacon', amount: 2 }
                ],
                cost: 105000,
                level: 20,
                location: 'bar'
            },
            {
                id: 'foton',
                deviceId: 'foton',
                column: 3,
                row: 0,
                rank: 'experienced',
                parents: ['orion_k2'],
                prerequisite: 'orion_k2',
                materials: [
                    { id: 'anomaly_detector', amount: 95 },
                    { id: 'regenerating_fabric', amount: 85 },
                    { id: 'bioferrite_core', amount: 57 },
                    { id: 'old_scheme', amount: 10 }
                ],
                cost: 76300,
                level: 25,
                location: 'bar'
            },
            {
                id: 'rf_receiver_a',
                deviceId: 'rf_receiver_a',
                column: 4,
                row: 2,
                rank: 'veteran',
                parents: [],
                materials: [],
                cost: 0,
                level: 25,
                location: 'bar',
                locked: true
            },
            {
                id: 'white_night',
                deviceId: 'white_night',
                column: 5,
                row: 0,
                rank: 'expert',
                parents: ['foton'],
                prerequisite: 'foton',
                materials: [],
                cost: 0,
                level: 30,
                location: 'bar',
                locked: true
            }
        ]
    }
];

function getBarterMaterialName(material) {
    if (!material) return '';
    return getLocalizedField(material, 'name');
}

function getBarterMaterialImagePath(materialId, basePath = '../') {
    return getMaterialImagePath(materialId, null, basePath);
}

function getBarterRankName(rank) {
    const entry = BARTER_RANKS[rank];
    return entry ? getLocalizedField(entry, 'name') : rank;
}

function getBarterColumnRankName(column) {
    if (!column) return '';
    if (column.rankLabel || column.rankLabelEn) {
        return getLocalizedField(column, 'rankLabel');
    }
    return getBarterRankName(column.rank);
}

function getBarterLocationName(location) {
    const entry = BARTER_LOCATIONS[location];
    return entry ? getLocalizedField(entry, 'name') : location;
}

function getBarterCategoryName(category) {
    return category ? getLocalizedField(category, 'name') : '';
}

function getBarterCategoryGroupId(category) {
    if (category?.group) return category.group;

    const name = category?.name || '';
    const nameEn = category?.nameEn || '';
    if (name.startsWith('Оружие/') || nameEn.startsWith('Weapons/')) return 'weapons';
    if (name.startsWith('Броня/') || nameEn.startsWith('Armor/')) return 'armor';
    return 'other';
}

function getBarterCategoryGroupName(groupId) {
    const group = BARTER_CATEGORY_GROUPS.find(item => item.id === groupId);
    return group ? getLocalizedField(group, 'name') : groupId;
}

function getBarterCategorySubcategoryName(category) {
    const full = getBarterCategoryName(category);
    const slash = full.indexOf('/');
    return slash >= 0 ? full.slice(slash + 1).trim() : full;
}

function getBarterCategoryDisplayName(category) {
    return getBarterCategoryName(category);
}

function getBarterCategoriesGrouped() {
    const grouped = new Map();
    BARTER_CATEGORY_GROUPS.forEach(group => grouped.set(group.id, []));

    getSortedBarterCategories().forEach(category => {
        const groupId = getBarterCategoryGroupId(category);
        if (!grouped.has(groupId)) grouped.set(groupId, []);
        grouped.get(groupId).push(category);
    });

    return BARTER_CATEGORY_GROUPS
        .slice()
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .map(group => ({
            ...group,
            name: getLocalizedField(group, 'name'),
            categories: grouped.get(group.id) || []
        }));
}

function getBarterResourceTier(rank) {
    return BARTER_RESOURCE_TIERS[rank] || null;
}

function getBarterMaterialsForRank(rank) {
    const tier = getBarterResourceTier(rank);
    if (!tier) return [];
    return tier.materialIds.map(id => BARTER_MATERIALS[id]).filter(Boolean);
}

function getBarterCategoryById(categoryId) {
    return BARTER_CATEGORIES.find(category => category.id === categoryId) || null;
}

function getSortedBarterCategories() {
    return [...BARTER_CATEGORIES].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

function getBarterNodeById(category, nodeId) {
    if (!category) return null;
    return category.nodes.find(node => node.id === nodeId) || null;
}

function applyBarterNodeName(weapon, node) {
    if (!weapon || !node?.name && !node?.nameEn) return weapon;
    return {
        ...weapon,
        ...(node.name ? { name: node.name } : {}),
        ...(node.nameEn ? { nameEn: node.nameEn } : {})
    };
}

function getBarterItem(node, basePath = '../') {
    if (!node) return null;

    if (node.weaponId && typeof WEAPONS !== 'undefined') {
        const weapon = WEAPONS.find(item => item.id === node.weaponId);
        if (!weapon) return null;
        return applyBarterNodeName({
            ...weapon,
            imagePath: getWeaponImagePath(weapon, basePath)
        }, node);
    }

    if (node.armorId && typeof ARMORS !== 'undefined') {
        const armor = ARMORS.find(item => item.id === node.armorId);
        if (!armor) return null;
        return applyBarterNodeName({
            ...armor,
            imagePath: getArmorImagePath(armor, basePath)
        }, node);
    }

    if (node.containerId && typeof CONTAINERS !== 'undefined') {
        const container = CONTAINERS.find(item => item.id === node.containerId);
        if (!container) return null;
        return applyBarterNodeName({
            ...container,
            imagePath: getContainerImagePath(container, basePath)
        }, node);
    }

    if (node.backpackId && typeof BACKPACKS !== 'undefined') {
        const backpack = BACKPACKS.find(item => item.id === node.backpackId);
        if (!backpack) return null;
        return applyBarterNodeName({
            ...backpack,
            imagePath: getBackpackImagePath(backpack, basePath)
        }, node);
    }

    if (node.deviceId && typeof DEVICES !== 'undefined') {
        const device = DEVICES.find(item => item.id === node.deviceId);
        if (!device) return null;
        return applyBarterNodeName({
            ...device,
            imagePath: getDeviceImagePath(device, basePath)
        }, node);
    }

    return null;
}

function getBarterWeapon(node, basePath = '../') {
    return getBarterItem(node, basePath);
}

function getBarterPrerequisiteWeapon(prerequisiteId, basePath = '../', category = null) {
    if (!prerequisiteId) return null;

    const node = category ? getBarterNodeById(category, prerequisiteId) : null;
    if (node) return getBarterItem(node, basePath);

    if (typeof WEAPONS !== 'undefined') {
        const weapon = WEAPONS.find(item => item.id === prerequisiteId);
        if (weapon) {
            return applyBarterNodeName({
                ...weapon,
                imagePath: getWeaponImagePath(weapon, basePath)
            }, null);
        }
    }

    if (typeof ARMORS !== 'undefined') {
        const armor = ARMORS.find(item => item.id === prerequisiteId);
        if (armor) {
            return applyBarterNodeName({
                ...armor,
                imagePath: getArmorImagePath(armor, basePath)
            }, null);
        }
    }

    if (typeof CONTAINERS !== 'undefined') {
        const container = CONTAINERS.find(item => item.id === prerequisiteId);
        if (container) {
            return applyBarterNodeName({
                ...container,
                imagePath: getContainerImagePath(container, basePath)
            }, null);
        }
    }

    if (typeof BACKPACKS !== 'undefined') {
        const backpack = BACKPACKS.find(item => item.id === prerequisiteId);
        if (backpack) {
            return applyBarterNodeName({
                ...backpack,
                imagePath: getBackpackImagePath(backpack, basePath)
            }, null);
        }
    }

    if (typeof DEVICES !== 'undefined') {
        const device = DEVICES.find(item => item.id === prerequisiteId);
        if (device) {
            return applyBarterNodeName({
                ...device,
                imagePath: getDeviceImagePath(device, basePath)
            }, null);
        }
    }

    return null;
}

function getBarterTreeAncestors(category, nodeId) {
    const node = getBarterNodeById(category, nodeId);
    if (!node) return [];

    const ancestors = [];
    const visited = new Set();
    const queue = [...(node.parents || [])];

    while (queue.length) {
        const parentId = queue.shift();
        if (visited.has(parentId)) continue;
        visited.add(parentId);

        const parentNode = getBarterNodeById(category, parentId);
        if (!parentNode) continue;

        ancestors.push(parentNode);
        if (parentNode.parents?.length) {
            queue.push(...parentNode.parents);
        }
    }

    return ancestors;
}

function getBarterChainAncestors(category, nodeId, offerIndex = 0) {
    const node = getBarterNodeById(category, nodeId);
    if (!node) return [];

    const offer = getBarterOfferByIndex(node, offerIndex);
    const prerequisiteId = offer.prerequisite;

    if (prerequisiteId) {
        const prerequisiteNode = getBarterNodeById(category, prerequisiteId);
        if (!prerequisiteNode) return getBarterTreeAncestors(category, nodeId);

        return [
            ...getBarterTreeAncestors(category, prerequisiteId),
            prerequisiteNode
        ];
    }

    return getBarterTreeAncestors(category, nodeId);
}

function getBarterNodeOffers(node) {
    if (!node) return [];
    if (node.offers?.length) return node.offers;

    return [{
        id: 'default',
        prerequisite: node.prerequisite ?? null,
        materials: node.materials || [],
        cost: node.cost || 0,
        eventCost: node.eventCost || 0,
        level: node.level || 0,
        location: node.location,
        usesChain: Boolean(node.prerequisite)
    }];
}

function getBarterOfferByIndex(node, offerIndex = 0) {
    const offers = getBarterNodeOffers(node);
    const index = Math.max(0, Math.min(offerIndex, offers.length - 1));
    return offers[index] || offers[0];
}

function getBarterOfferName(offer, index = 0) {
    if (!offer) return '';
    if (offer.name || offer.nameEn) return getLocalizedField(offer, 'name');
    return `#${index + 1}`;
}

function getNodeRecipeForCalc(node, offerIndex = 0) {
    const offer = getBarterOfferByIndex(node, offerIndex);
    const usesChain = offer.usesChain !== false && Boolean(offer.prerequisite);

    return {
        ...node,
        prerequisite: offer.prerequisite ?? null,
        materials: offer.materials || [],
        cost: offer.cost || 0,
        eventCost: offer.eventCost || 0,
        level: offer.level ?? node.level ?? 0,
        location: offer.location || node.location,
        usesChain
    };
}

function getBarterChainNodes(category, nodeId, includeChain, offerIndex = 0) {
    const node = getBarterNodeById(category, nodeId);
    if (!node) return [];

    const currentRecipe = getNodeRecipeForCalc(node, offerIndex);
    const shouldIncludeAncestors = includeChain && currentRecipe.usesChain;

    if (!shouldIncludeAncestors) return [currentRecipe];

    const ancestors = getBarterChainAncestors(category, nodeId, offerIndex);
    ancestors.sort((a, b) => a.column - b.column || a.row - b.row);

    return [
        ...ancestors.map(ancestor => getNodeRecipeForCalc(ancestor, 0)),
        currentRecipe
    ];
}

function getBarterMaterialSortKey(materialId) {
    const material = BARTER_MATERIALS[materialId];
    if (!material?.rank) {
        return { rankSort: 999, materialIndex: 999 };
    }

    const rankIndex = BARTER_RANK_ORDER.indexOf(material.rank);
    const rankSort = rankIndex === -1 ? 999 : BARTER_RANK_ORDER.length - 1 - rankIndex;
    const tier = BARTER_RESOURCE_TIERS[material.rank];
    const materialIndex = tier?.materialIds?.indexOf(materialId);
    const normalizedMaterialIndex = materialIndex === -1 || materialIndex === undefined ? 999 : materialIndex;

    return { rankSort, materialIndex: normalizedMaterialIndex };
}

function sortBarterMaterials(materials) {
    return [...materials].sort((a, b) => {
        const keyA = getBarterMaterialSortKey(a.id);
        const keyB = getBarterMaterialSortKey(b.id);

        if (keyA.rankSort !== keyB.rankSort) {
            return keyA.rankSort - keyB.rankSort;
        }

        return keyA.materialIndex - keyB.materialIndex;
    });
}

function aggregateBarterMaterials(nodes) {
    const totals = new Map();

    nodes.forEach(node => {
        (node.materials || []).forEach(material => {
            const current = totals.get(material.id) || 0;
            totals.set(material.id, current + material.amount);
        });
    });

    return sortBarterMaterials(Array.from(totals.entries()).map(([id, amount]) => ({
        id,
        amount,
        material: BARTER_MATERIALS[id] || { name: id, nameEn: id }
    })));
}

function getBarterNodeRankInfo(node) {
    if (!node) return null;
    const tier = getBarterResourceTier(node.rank);
    return {
        rank: node.rank,
        rankName: getBarterRankName(node.rank),
        location: node.location || tier?.location,
        locationName: getBarterLocationName(node.location || tier?.location)
    };
}

const BARTER_RANK_ORDER = [
    'lockpick', 'novice', 'stalker', 'experienced', 'veteran', 'expert', 'professional', 'master', 'legend'
];

const BARTER_INVENTORY_RANK_ORDER = [
    'veteran', 'experienced', 'stalker', 'novice', 'lockpick'
];

const BARTER_NORTH_TAIL_MATERIAL_IDS = [
    'dark_pass',
    'anomaly_glass',
    'storm_shard',
    'crystal_bud'
];

const BARTER_NON_PURCHASABLE_MATERIAL_IDS = new Set([
    'dark_pass'
]);

function isBarterMaterialPurchasable(materialId) {
    return !BARTER_NON_PURCHASABLE_MATERIAL_IDS.has(materialId);
}

const BARTER_WINTER_EVENT_MATERIAL_ORDER = [
    'stuzha',
    'homemade_thermoplast',
    'alpha_substance_container',
    'frost_beacon'
];

function getAllBarterMaterialIds() {
    const ids = [];
    const seen = new Set();

    BARTER_RANK_ORDER.forEach(rank => {
        const tier = BARTER_RESOURCE_TIERS[rank];
        if (!tier?.materialIds?.length) return;

        tier.materialIds.forEach(id => {
            if (!seen.has(id)) {
                seen.add(id);
                ids.push(id);
            }
        });
    });

    Object.keys(BARTER_MATERIALS).forEach(id => {
        if (!seen.has(id)) {
            seen.add(id);
            ids.push(id);
        }
    });

    return ids;
}

function getBarterMaterialsGroupedByRank() {
    return BARTER_RANK_ORDER
        .map(rank => {
            const tier = BARTER_RESOURCE_TIERS[rank];
            if (!tier?.materialIds?.length) return null;

            return {
                rank,
                rankName: getBarterRankName(rank),
                locationName: getBarterLocationName(tier.location),
                materials: tier.materialIds.map(id => ({
                    id,
                    material: BARTER_MATERIALS[id]
                })).filter(entry => entry.material)
            };
        })
        .filter(Boolean);
}

function getBarterMaterialsForInventory() {
    const result = [];
    const seen = new Set();

    const pushEntry = (id) => {
        if (seen.has(id)) return;

        const material = BARTER_MATERIALS[id];
        if (!material) return;

        seen.add(id);
        result.push({ id, material });
    };

    BARTER_INVENTORY_RANK_ORDER.forEach(rank => {
        const tier = BARTER_RESOURCE_TIERS[rank];
        if (!tier?.materialIds?.length) return;

        tier.materialIds.forEach(pushEntry);
    });

    BARTER_NORTH_TAIL_MATERIAL_IDS.forEach(pushEntry);
    BARTER_WINTER_EVENT_MATERIAL_ORDER.forEach(pushEntry);

    Object.keys(BARTER_MATERIALS).forEach(pushEntry);

    return result;
}

function calculateAggregatedBarterRequirements(category, selections) {
    if (!category || !selections?.length) return null;

    const weapons = [];
    const allChainNodes = [];
    const prerequisites = [];
    let totalCost = 0;
    let totalEventCost = 0;
    let maxLevel = 0;
    const locations = new Set();

    selections.forEach(selection => {
        const calc = calculateBarterRequirements(
            category,
            selection.nodeId,
            false,
            selection.offerIndex || 0
        );
        if (!calc) return;

        weapons.push(calc);
        allChainNodes.push(...calc.chainNodes);
        prerequisites.push(...calc.prerequisites);
        totalCost += calc.totalCost;
        totalEventCost += calc.totalEventCost;
        maxLevel = Math.max(maxLevel, calc.maxLevel);
        calc.locations.forEach(location => locations.add(location));
    });

    if (!weapons.length) return null;

    return {
        weapons,
        materials: aggregateBarterMaterials(allChainNodes),
        prerequisites: [...new Set(prerequisites)],
        totalCost,
        totalEventCost,
        maxLevel,
        maxLevelXp: getBarterXpForLevel(maxLevel),
        locations: [...locations]
    };
}

function mergeAggregatedBarterRequirements(partials) {
    if (!partials.length) return null;
    if (partials.length === 1) return partials[0];

    const weapons = [];
    const prerequisites = new Set();
    let totalCost = 0;
    let totalEventCost = 0;
    let maxLevel = 0;
    const locations = new Set();
    const materialTotals = new Map();

    partials.forEach(partial => {
        weapons.push(...partial.weapons);
        partial.prerequisites.forEach(id => prerequisites.add(id));
        totalCost += partial.totalCost || 0;
        totalEventCost += partial.totalEventCost || 0;
        maxLevel = Math.max(maxLevel, partial.maxLevel || 0);
        (partial.locations || []).forEach(location => locations.add(location));
        (partial.materials || []).forEach(entry => {
            materialTotals.set(entry.id, (materialTotals.get(entry.id) || 0) + entry.amount);
        });
    });

    return {
        weapons,
        materials: sortBarterMaterials(Array.from(materialTotals.entries()).map(([id, amount]) => ({
            id,
            amount,
            material: BARTER_MATERIALS[id] || { name: id, nameEn: id }
        }))),
        prerequisites: [...prerequisites],
        totalCost,
        totalEventCost,
        maxLevel,
        maxLevelXp: getBarterXpForLevel(maxLevel),
        locations: [...locations]
    };
}

function calculateMultiCategoryAggregatedBarterRequirements(selections) {
    if (!selections?.length) return null;

    const byCategory = new Map();
    selections.forEach(selection => {
        const categoryId = selection.categoryId;
        if (!categoryId) return;
        if (!byCategory.has(categoryId)) {
            byCategory.set(categoryId, []);
        }
        byCategory.get(categoryId).push(selection);
    });

    const partials = [];
    byCategory.forEach((categorySelections, categoryId) => {
        const category = getBarterCategoryById(categoryId);
        const partial = calculateAggregatedBarterRequirements(category, categorySelections);
        if (partial) partials.push(partial);
    });

    return mergeAggregatedBarterRequirements(partials);
}

const BARTER_LVL_CONSTANT1 = 150;
const BARTER_LVL_CONSTANT2 = 6;
const BARTER_MAX_PLAYER_LEVEL = 50;

function getBarterXpForLevel(level) {
    const clamped = Math.min(BARTER_MAX_PLAYER_LEVEL, Math.max(0, Math.floor(Number(level) || 0)));
    return Math.floor(Math.exp(clamped / BARTER_LVL_CONSTANT2) * BARTER_LVL_CONSTANT1 / 10.0) * 10;
}

function getBarterLevelFromXp(xp) {
    const safeXp = Math.max(0, Math.floor(Number(xp) || 0));
    const inner = Math.floor((safeXp + 10) / 10.0) * 10 / BARTER_LVL_CONSTANT1;
    if (inner <= 0) return 0;
    return Math.min(BARTER_MAX_PLAYER_LEVEL, Math.max(0, Math.floor(Math.log(inner) * BARTER_LVL_CONSTANT2)));
}

function resolvePlayerXp(inventory = {}) {
    if (inventory.xpMode === 'exact') {
        return Math.max(0, Math.floor(Number(inventory.xp) || 0));
    }
    return getBarterXpForLevel(inventory.level);
}

function getPlayerEffectiveLevel(inventory = {}) {
    if (inventory.xpMode === 'exact') {
        return getBarterLevelFromXp(resolvePlayerXp(inventory));
    }
    return Math.min(BARTER_MAX_PLAYER_LEVEL, Math.max(0, Math.floor(Number(inventory.level) || 0)));
}

function applyInventoryToRequirements(totals, inventory = {}) {
    const materials = (totals.materials || []).map(entry => {
        const have = Math.max(0, Number(inventory.materials?.[entry.id]) || 0);
        const missing = Math.max(0, entry.amount - have);

        return {
            ...entry,
            have,
            missing,
            satisfied: missing === 0
        };
    });

    const playerMoney = Math.max(0, Number(inventory.money) || 0);
    const playerCr = Math.max(0, Number(inventory.cr) || 0);
    const requiredLevel = totals.maxLevel || 0;
    const requiredXp = totals.maxLevelXp ?? getBarterXpForLevel(requiredLevel);
    const playerXp = resolvePlayerXp(inventory);
    const playerLevel = getPlayerEffectiveLevel(inventory);
    const missingXp = Math.max(0, requiredXp - playerXp);

    return {
        materials,
        missingMaterials: materials.filter(entry => entry.missing > 0),
        money: {
            required: totals.totalCost || 0,
            have: playerMoney,
            missing: Math.max(0, (totals.totalCost || 0) - playerMoney)
        },
        cr: {
            required: totals.totalEventCost || 0,
            have: playerCr,
            missing: Math.max(0, (totals.totalEventCost || 0) - playerCr)
        },
        level: {
            required: requiredLevel,
            requiredXp,
            have: playerLevel,
            haveXp: playerXp,
            missing: Math.max(0, requiredLevel - playerLevel),
            missingXp,
            satisfied: missingXp === 0
        }
    };
}

function getBarterNodeItemId(node) {
    if (!node) return null;
    return node.weaponId || node.armorId || node.containerId || node.backpackId || node.deviceId || node.id;
}

function getBarterOfferPrerequisites(offer, includeChain, fullChainNodes) {
    if (includeChain && fullChainNodes.length > 1) {
        return fullChainNodes.slice(0, -1).map(chainNode => getBarterNodeItemId(chainNode) || chainNode.id);
    }

    if (!offer?.prerequisite) return [];

    const count = Math.max(1, offer.prerequisiteCount || 1);
    return Array.from({ length: count }, () => offer.prerequisite);
}

function applyChainExclusions(chainNodes, excludedNodeIds) {
    if (!excludedNodeIds?.size) return chainNodes;

    return chainNodes.filter(node => !excludedNodeIds.has(node.id));
}

function calculateBarterRequirements(category, nodeId, includeChain = true, offerIndex = 0, excludedNodeIds = null) {
    const node = getBarterNodeById(category, nodeId);
    if (!node) return null;

    const offers = getBarterNodeOffers(node);
    const offer = getBarterOfferByIndex(node, offerIndex);
    const fullChainNodes = getBarterChainNodes(category, nodeId, includeChain, offerIndex);
    const excluded = excludedNodeIds instanceof Set ? excludedNodeIds : new Set();
    const chainNodes = applyChainExclusions(fullChainNodes, excluded);
    const prerequisites = getBarterOfferPrerequisites(offer, includeChain, fullChainNodes);

    const uniquePrerequisites = includeChain && fullChainNodes.length > 1
        ? [...new Set(prerequisites)]
        : prerequisites;
    const maxLevel = chainNodes.reduce((max, chainNode) => Math.max(max, chainNode.level || 0), 0);

    return {
        node,
        offer,
        offerIndex,
        offers,
        usesChain: offer.usesChain !== false && Boolean(offer.prerequisite),
        fullChainNodes,
        chainNodes,
        excludedNodeIds: excluded,
        prerequisites: uniquePrerequisites,
        materials: aggregateBarterMaterials(chainNodes),
        materialsByNode: chainNodes.map(chainNode => ({
            node: chainNode,
            rankInfo: getBarterNodeRankInfo(chainNode),
            materials: (chainNode.materials || []).map(entry => ({
                ...entry,
                material: BARTER_MATERIALS[entry.id] || { name: entry.id, nameEn: entry.id }
            }))
        })),
        totalCost: chainNodes.reduce((sum, chainNode) => sum + (chainNode.cost || 0), 0),
        totalEventCost: chainNodes.reduce((sum, chainNode) => sum + (chainNode.eventCost || 0), 0),
        maxLevel,
        maxLevelXp: getBarterXpForLevel(maxLevel),
        locations: [...new Set(chainNodes.map(chainNode => chainNode.location).filter(Boolean))]
    };
}

// mapData.js
// ============================================================
// ДАННЫЕ МАРКЕРОВ - Project Cataclysm Map
// ============================================================

const MAP_CONFIG_DATA = {
    width: 11264,
    height: 16896
};

// Правильная формула конвертации (калибровка по реальной точке)
function convertCoords(oldY, oldX) {
    const newX = Math.round(oldX * 2.0);
    const newY = Math.round(MAP_CONFIG_DATA.height - (oldY * 2.0));
    return [newY, newX];
}

// ============================================================
// ИЗОБРАЖЕНИЯ НАГРАД (лут)
// ============================================================
const REWARD_ICONS = {
    anomaly_filter: { icon: 'images/rewards/anomaly_filter.png', name: { ru: 'Аномальный фильтр', en: 'Anomaly Filter' } },
    black_box: { icon: 'images/rewards/black_box.png', name: { ru: 'Черный ящик', en: 'Black Box' } },
    converter: { icon: 'images/rewards/converter.png', name: { ru: 'Преобразователь', en: 'Converter' } },
    titanium_frame: { icon: 'images/rewards/titanium_frame.png', name: { ru: 'Титановый каркас', en: 'Titanium Frame' } },
    advanced_upgrade_tools: { icon: 'images/rewards/advanced_upgrade_tools.png', name: { ru: 'Инструменты улучшения экипировки (продвинутые)', en: 'Advanced Equipment Upgrade Tools' } },
    spare_parts: { icon: 'images/rewards/spare_parts.png', name: { ru: 'Запасные детали для улучшения экипировки', en: 'Spare Parts for Equipment Upgrade' } },
    anomaly_detector: { icon: 'images/rewards/anomaly_detector.png', name: { ru: 'Датчик аномальной активности', en: 'Anomaly Activity Detector' } },
    basic_upgrade_tools: { icon: 'images/rewards/basic_upgrade_tools.png', name: { ru: 'Инструменты улучшения экипировки (базовые)', en: 'Basic Equipment Upgrade Tools' } },
    basic_armor_kit: { icon: 'images/rewards/basic_armor_kit.png', name: { ru: 'Ремнабор с компонентами брони (базовый)', en: 'Basic Armor Component Repair Kit' } },
    advanced_armor_kit: { icon: 'images/rewards/advanced_armor_kit.png', name: { ru: 'Ремнабор с компонентами брони (продвинутый)', en: 'Advanced Armor Component Repair Kit' } },
    compromat_flash: { icon: 'images/rewards/compromat_flash.png', name: { ru: 'Флешка с компроматом', en: 'Flash Drive with Compromat' } },
    coded_notebook: { icon: 'images/rewards/coded_notebook.png', name: { ru: 'Кодированный блокнот', en: 'Coded Notebook' } },
    large_battery: { icon: 'images/rewards/large_battery.png', name: { ru: 'Большая батарея', en: 'Large Battery' } },
    prima_cigarettes: { icon: 'images/rewards/prima_cigarettes.png', name: { ru: 'Пачка сигарет "Прима"', en: '"Prima" Cigarettes Pack' } },
    lead: { icon: 'images/rewards/lead.png', name: { ru: 'Свинец', en: 'Lead' } },
    vodka_kazaki: { icon: 'images/rewards/vodka_kazaki.png', name: { ru: 'Водка "Казаки"', en: '"Cossacks" Vodka' } },
    makarov_pistol: { icon: 'images/rewards/makarov.png', name: { ru: 'Пистолет Макарова', en: 'Makarov Pistol' } },
    ammo_9x18: { icon: 'images/rewards/ammo_9x18.png', name: { ru: 'Патроны 9x18 мм П', en: '9x18 mm PM Ammo' } },
    vitamins: { icon: 'images/rewards/vitamins.png', name: { ru: 'Поливитамины', en: 'Multivitamins' } },
    cheese_yantar: { icon: 'images/rewards/cheese_yantar.png', name: { ru: 'Плавленный сыр "Янтарь"', en: '"Yantar" Processed Cheese' } },
    snork_leg: { icon: 'images/rewards/snork_leg.png', name: { ru: 'Нога снорка', en: 'Snork Leg' } },
    beer_slavutich: { icon: 'images/rewards/beer_slavutich.png', name: { ru: 'Пиво "Славутич"', en: '"Slavutich" Beer' } },
    bandage: { icon: 'images/rewards/bandage.png', name: { ru: 'Бинт', en: 'Bandage' } },
    blind_dog_heart: { icon: 'images/rewards/blind_dog_heart.png', name: { ru: 'Сердце слепого пса', en: 'Blind Dog Heart' } },
    mercenary_patch: { icon: 'images/rewards/mercenary_patch.png', name: { ru: "Нашивка 'Наемников'", en: 'Mercenary Patch' } },
    psy_blockade: { icon: 'images/rewards/psy_blockade.png', name: { ru: 'Пси-блокада', en: 'Psy-blockade' } },
    condensed_milk: { icon: 'images/rewards/condensed_milk.png', name: { ru: 'Сгущенное молоко', en: 'Condensed Milk' } },
    mre_b: { icon: 'images/rewards/mre_b.png', name: { ru: 'Сухой паёк ИРП-Б', en: 'MRE-B' } },
    bandit_token: { icon: 'images/rewards/bandit_token.png', name: { ru: 'Бандитский жетон', en: 'Bandit Token' } },
    stash_pda: { icon: 'images/rewards/stash_pda.png', name: { ru: 'КПК с координатами общака', en: 'PDA with Stash Coordinates' } },
    zombie_hand: { icon: 'images/rewards/zombie_hand.png', name: { ru: 'Рука зомби', en: 'Zombie Hand' } },
    controller_hand: { icon: 'images/rewards/controller_hand.png', name: { ru: 'Рука контролёра', en: 'Controller Hand' } },
    toy_airplane: { icon: 'images/rewards/toy_airplane.png', name: { ru: 'Игрушечный самолет', en: 'Toy Airplane' } },
    snork_hand: { icon: 'images/rewards/snork_hand.png', name: { ru: 'Рука снорка', en: 'Snork Hand' } },
    toy_car: { icon: 'images/rewards/toy_car.png', name: { ru: 'Игрушечная машина', en: 'Toy Car' } },
    toy_doll: { icon: 'images/rewards/toy_doll.png', name: { ru: 'Игрушечная кукла', en: 'Toy Doll' } },
};

// ============================================================
// ВСЕ МАРКЕРЫ
// ============================================================

const MARKERS_DATA = {

    // ==================== АСТРОЛИТ: КАТАЛИЗАТОРЫ ====================
    catalyst: [
        // Армейские склады
        { coords: convertCoords(3596, 2573), desc: "Катализатор" },
        { coords: convertCoords(3768, 3157), desc: "Катализатор" },
        { coords: convertCoords(3551, 2639), desc: "Катализатор" },
        { coords: convertCoords(3664, 2981), desc: "Катализатор" },
        { coords: convertCoords(3744, 2929), desc: "Катализатор" },
        { coords: convertCoords(3656, 3050), desc: "Катализатор" },
        { coords: convertCoords(3635, 2736), desc: "Катализатор" },
        { coords: convertCoords(3409, 2395), desc: "Катализатор" },
        { coords: convertCoords(3605, 3149), desc: "Катализатор" },
        { coords: convertCoords(3512, 3028), desc: "Катализатор" },
        { coords: convertCoords(3538, 2418), desc: "Катализатор" },
        { coords: convertCoords(3518, 2956), desc: "Катализатор" },
        { coords: convertCoords(3545, 2857), desc: "Катализатор" },
        // Муравейник
        { coords: convertCoords(2933, 3381), desc: "Координаты: 107, 82, -4331" },
        { coords: convertCoords(2825, 3404), desc: "Координаты: 151, 96, -4114" },
        { coords: convertCoords(2953, 3405), desc: "Координаты: 155, 98, -4369" },
        { coords: convertCoords(2957, 3210), desc: "Координаты: -236, 85, -4378" },
        { coords: convertCoords(2772, 3243), desc: "Координаты: -170, 79, -4008" },
        // Полесское
        { coords: convertCoords(3229, 2834), desc: "Координаты: -988, 77, -4921" },
        { coords: convertCoords(3145, 2813), desc: "Координаты: -1029, 73, -4753" },
        { coords: convertCoords(3300, 2775), desc: "Координаты: -1105, 84, -5063" },
        { coords: convertCoords(3298, 2685), desc: "Координаты: -1287, 86, -5060" },
        { coords: convertCoords(3353, 2535), desc: "Координаты: -1587, 85, -5170" },
        { coords: convertCoords(3088, 2744), desc: "Координаты: -1169, 76, -4640" },
        { coords: convertCoords(3369, 2801), desc: "Координаты: -1053, 84, -5202" },
        { coords: convertCoords(2990, 2806), desc: "Координаты: -1044, 81, -4444" },
        { coords: convertCoords(3082, 2673), desc: "Координаты: -1310, 75, -4627" },
        { coords: convertCoords(3344, 2614), desc: "Координаты: -1428, 84, -5153" },
        { coords: convertCoords(3353, 2685), desc: "Координаты: -1287, 75, -5170" },
        // Поляна
        { coords: convertCoords(3001, 2342), desc: "Координаты: -1972, 80, -4466" },
        { coords: convertCoords(3143, 2452), desc: "Координаты: -1752, 87, -4751" },
        { coords: convertCoords(2823, 2399), desc: "Координаты: -1857, 92, -4110" },
        { coords: convertCoords(3031, 2347), desc: "Координаты: -1960, 82, -4525" },
        { coords: convertCoords(2966, 2435), desc: "Координаты: -1785, 89, -4396" },
        { coords: convertCoords(2866, 2313), desc: "Координаты: -2028, 94, -4196" },
        // Завод «Янтарь»
        { coords: convertCoords(2697, 2323), desc: "Координаты: -2009, 101, -3857" },
        { coords: convertCoords(2647, 2436), desc: "Координаты: -1783, 70, -3757" },
        { coords: convertCoords(2526, 1944), desc: "Координаты: -2767, 72, -3516" },
        { coords: convertCoords(2614, 2095), desc: "Координаты: -2464, 67, -3692" },
        // Дикая территория
        { coords: convertCoords(2709, 2749), desc: "Координаты: -1158, 81, -3881" },
        { coords: convertCoords(2797, 2708), desc: "Координаты: -1240, 80, -4056" },
        { coords: convertCoords(2763, 2795), desc: "Координаты: -1065, 80, -3989" },
        { coords: convertCoords(2785, 2765), desc: "Координаты: -1126, 88, -4033" },
        { coords: convertCoords(2649, 2630), desc: "Координаты: -1395, 80, -3760" },
        { coords: convertCoords(2791, 2609), desc: "Координаты: -1437, 84, -4046" },
        { coords: convertCoords(2690, 2616), desc: "Координаты: -1424, 77, -3843" },
        { coords: convertCoords(2704, 2696), desc: "Координаты: -1265, 74, -3871" },
        // Свалка
        { coords: convertCoords(2305, 3050), desc: "Координаты: -555, 88, -3073" },
        { coords: convertCoords(2296, 3434), desc: "Координаты: 212, 83, -3054" },
        { coords: convertCoords(2144, 2708), desc: "Координаты: -1240, 83, -2750" },
        { coords: convertCoords(1926, 2804), desc: "Координаты: -1049, 86, -2315" },
        // Тёмная долина
        { coords: convertCoords(2362, 4061), desc: "Координаты: 1467, 80, -3186" },
        { coords: convertCoords(2232, 3923), desc: "Координаты: 1190, 85, -2926" },
        // НИИ «Агропром»
        { coords: convertCoords(2127, 2146), desc: "Координаты: -2363, 81, -2718" },
        { coords: convertCoords(2232, 2028), desc: "Координаты: -2599, 84, -2926" },
        { coords: convertCoords(2338, 2088), desc: "Координаты: -2479, 80, -3140" },
        // Редколесье
        { coords: convertCoords(1613, 2571), desc: "Координаты: -1514, 94, -1688" },
        { coords: convertCoords(1728, 2245), desc: "Координаты: -2164, 85, -1919" },
        { coords: convertCoords(1525, 2541), desc: "Координаты: -1574, 85, -1512" },
        { coords: convertCoords(1649, 2207), desc: "Координаты: -2242, 94, -1760" },
        // Кордон
        { coords: convertCoords(1621, 3313), desc: "Координаты: -29, 97, -1705" },
        { coords: convertCoords(1576, 2882), desc: "Координаты: -891, 102, -1614" },
        { coords: convertCoords(1778, 2873), desc: "Координаты: -910, 77, -2018" },
        // Тёмная лощина
        { coords: convertCoords(1859, 3468), desc: "Координаты: 280, 89, -2182" },
        { coords: convertCoords(1715, 3495), desc: "Координаты: 334, 102, -1894" },
        { coords: convertCoords(1543, 3965), desc: "Координаты: 1275, 79, -1549" },
        { coords: convertCoords(1442, 4088), desc: "Координаты: 1520, 72, -1348" },
        { coords: convertCoords(1460, 3800), desc: "Координаты: 944, 88, -1385" },
        { coords: convertCoords(1851, 3675), desc: "Координаты: 694, 80, -2167" },
        { coords: convertCoords(1716, 3969), desc: "Координаты: 1283, 79, -1896" },
        // Топи
        { coords: convertCoords(663, 2534), desc: "Координаты: -1587, 95, 210" },
        { coords: convertCoords(1084, 2259), desc: "Координаты: -2138, 102, -631" },
        { coords: convertCoords(702, 2215), desc: "Координаты: -2225, 102, 133" }
    ],

    // ==================== АСТРОЛИТ: ЧЕРВОТОЧИНЫ ====================
    wormhole: [
        // Армейские склады
        { coords: convertCoords(3532, 2751), desc: "Червоточина" },
        { coords: convertCoords(3647, 3165), desc: "Червоточина" },
        { coords: convertCoords(3602, 3024), desc: "Червоточина" },
        { coords: convertCoords(3670, 2694), desc: "Червоточина" },
        { coords: convertCoords(3477, 2412), desc: "Червоточина" },
        { coords: convertCoords(3476, 2436), desc: "Червоточина" },
        { coords: convertCoords(3482, 2986), desc: "Червоточина" },
        { coords: convertCoords(3559, 3127), desc: "Червоточина" },
        { coords: convertCoords(3766, 2839), desc: "Червоточина" },
        { coords: convertCoords(3536, 2494), desc: "Червоточина" },
        { coords: convertCoords(3723, 3130), desc: "Червоточина" },
        { coords: convertCoords(3651, 2915), desc: "Червоточина" },
        { coords: convertCoords(3520, 2718), desc: "Червоточина" },
        // Муравейник
        { coords: convertCoords(2909, 3295), desc: "Координаты: -67, 78, -4282" },
        { coords: convertCoords(2946, 3132), desc: "Координаты: -391, 95, -4356" },
        { coords: convertCoords(2983, 3441), desc: "Координаты: 225, 98, -4431" },
        { coords: convertCoords(2856, 3428), desc: "Координаты: 200, 96, -4175" },
        { coords: convertCoords(2721, 3244), desc: "Координаты: -169, 79, -3905" },
        // Полесское
        { coords: convertCoords(3102, 2674), desc: "Координаты: -1309, 75, -4668" },
        { coords: convertCoords(3330, 2862), desc: "Координаты: -932, 82, -5124" },
        { coords: convertCoords(3315, 2644), desc: "Координаты: -1367, 89, -5093" },
        { coords: convertCoords(3106, 2838), desc: "Координаты: -979, 80, -4677" },
        { coords: convertCoords(3251, 2662), desc: "Координаты: -1332, 85, -4967" },
        { coords: convertCoords(3006, 2751), desc: "Координаты: -1154, 78, -4475" },
        { coords: convertCoords(3372, 2724), desc: "Координаты: -1209, 84, -5208" },
        { coords: convertCoords(3062, 2786), desc: "Координаты: -1085, 80, -4587" },
        { coords: convertCoords(3300, 2539), desc: "Координаты: -1579, 92, -5065" },
        // Поляна
        { coords: convertCoords(2946, 2379), desc: "Координаты: -1897, 91, -4355" },
        { coords: convertCoords(2852, 2342), desc: "Координаты: -1971, 94, -4168" },
        { coords: convertCoords(3094, 2388), desc: "Координаты: -1880, 86, -4651" },
        { coords: convertCoords(2971, 2278), desc: "Координаты: -2098, 76, -4407" },
        { coords: convertCoords(2873, 2469), desc: "Координаты: -1717, 91, -4209" },
        { coords: convertCoords(3268, 2458), desc: "Координаты: -1740, 89, -5000" },
        // Завод «Янтарь»
        { coords: convertCoords(2744, 2306), desc: "Координаты: -2043, 83, -3953" },
        { coords: convertCoords(2630, 2020), desc: "Координаты: -2614, 81, -3723" },
        { coords: convertCoords(2543, 2203), desc: "Координаты: -2249, 72, -3550" },
        { coords: convertCoords(2735, 2394), desc: "Координаты: -1868, 79, -3933" },
        // Дикая территория
        { coords: convertCoords(2680, 2830), desc: "Координаты: -997, 78, -3823" },
        { coords: convertCoords(2762, 2636), desc: "Координаты: -1385, 86, -3987" },
        { coords: convertCoords(2758, 2763), desc: "Координаты: -1130, 80, -3979" },
        { coords: convertCoords(2809, 2783), desc: "Координаты: -1091, 81, -4081" },
        { coords: convertCoords(2740, 2662), desc: "Координаты: -1333, 81, -3944" },
        { coords: convertCoords(2799, 2707), desc: "Координаты: -1242, 100, -4061" },
        { coords: convertCoords(2731, 2609), desc: "Координаты: -1437, 92, -3924" },
        { coords: convertCoords(2653, 2704), desc: "Координаты: -1248, 86, -3768" },
        // Свалка
        { coords: convertCoords(2089, 2798), desc: "Координаты: -1059, 93, -2641" },
        { coords: convertCoords(2016, 2704), desc: "Координаты: -1248, 97, -2496" },
        { coords: convertCoords(2249, 3533), desc: "Координаты: 411, 90, -2961" },
        { coords: convertCoords(2162, 3042), desc: "Координаты: -572, 106, -2788" },
        // Тёмная долина
        { coords: convertCoords(2228, 4114), desc: "Координаты: 1572, 88, -2920" },
        { coords: convertCoords(2194, 3772), desc: "Координаты: 889, 83, -2851" },
        // НИИ «Агропром»
        { coords: convertCoords(2015, 2082), desc: "Координаты: -2490, 82, -2493" },
        { coords: convertCoords(2188, 1984), desc: "Координаты: -2687, 94, -2838" },
        { coords: convertCoords(2373, 1983), desc: "Координаты: -2689, 81, -3209" },
        // Редколесье
        { coords: convertCoords(1789, 2261), desc: "Координаты: -2133, 95, -2041" },
        { coords: convertCoords(1547, 2202), desc: "Координаты: -2251, 86, -1557" },
        { coords: convertCoords(1790, 2411), desc: "Координаты: -1833, 85, -2042" },
        { coords: convertCoords(1484, 2298), desc: "Координаты: -2059, 88, -1432" },
        // Кордон
        { coords: convertCoords(1726, 3220), desc: "Координаты: -215, 82, -1916" },
        { coords: convertCoords(1815, 2817), desc: "Координаты: -1021, 77, -2092" },
        { coords: convertCoords(1492, 2914), desc: "Координаты: -827, 75, -1446" },
        // Тёмная лощина
        { coords: convertCoords(1781, 3948), desc: "Координаты: 1242, 82, -2027" },
        { coords: convertCoords(1487, 3914), desc: "Координаты: 1173, 83, -1439" },
        { coords: convertCoords(1714, 3573), desc: "Координаты: 490, 102, -1893" },
        { coords: convertCoords(1445, 3882), desc: "Координаты: 1109, 89, -1355" },
        { coords: convertCoords(1898, 3593), desc: "Координаты: 531, 79, -2259" },
        { coords: convertCoords(1948, 3476), desc: "Координаты: 297, 84, -2360" },
        { coords: convertCoords(1440, 4037), desc: "Координаты: 1419, 102, -1343" },
        // Топи
        { coords: convertCoords(584, 2183), desc: "Координаты: -2290, 91, 367" },
        { coords: convertCoords(838, 2572), desc: "Координаты: -1511, 96, -140" },
        { coords: convertCoords(979, 2273), desc: "Координаты: -2108, 92, -422" }
    ],

    // ==================== КОНТЕЙНЕРЫ: ПАТРОНЫ ====================
    ammo: [
        // Армейские склады
        { coords: convertCoords(3679, 2972), desc: "Координаты: -711, 78, -5822" },
        { coords: convertCoords(3488, 3003), desc: "Координаты: -650, 89, -5440" },
        { coords: convertCoords(3730, 3033), desc: "Координаты: -591, 89, -5924" },
        { coords: convertCoords(3460, 2412), desc: "Координаты: -1831, 91, -5385" },
        { coords: convertCoords(3635, 2953), desc: "Координаты: -751, 81, -5734" },
        // Муравейник
        { coords: convertCoords(2705, 3545), desc: "Координаты: 434, 83, -3875" },
        { coords: convertCoords(2952, 3191), desc: "Координаты: -274, 92, -4369" },
        { coords: convertCoords(2969, 3206), desc: "Координаты: -243, 92, -4401" },
        { coords: convertCoords(2717, 3565), desc: "Координаты: 473, 82, -3898" },
        { coords: convertCoords(2833, 3539), desc: "Координаты: 422, 85, -4130" },
        { coords: convertCoords(2839, 3401), desc: "Координаты: 147, 85, -4142" },
        { coords: convertCoords(2764, 3390), desc: "Координаты: 123, 80, -3991" },
        { coords: convertCoords(2940, 3159), desc: "Координаты: -339, 92, -4344" },
        { coords: convertCoords(2748, 3260), desc: "Координаты: -135, 81, -3959" },
        { coords: convertCoords(2984, 3442), desc: "Координаты: 227, 99, -4431" },
        { coords: convertCoords(2961, 3421), desc: "Координаты: 187, 85, -4385" },
        // Полесское
        { coords: convertCoords(2990, 2788), desc: "Координаты: -1080, 83, -4443" },
        { coords: convertCoords(3279, 2733), desc: "Координаты: -1191, 85, -5022" },
        { coords: convertCoords(3033, 2776), desc: "Координаты: -1105, 86, -4529" },
        { coords: convertCoords(3119, 2810), desc: "Координаты: -1037, 86, -4702" },
        { coords: convertCoords(3350, 2607), desc: "Координаты: -1441, 85, -5163" },
        // Поляна
        { coords: convertCoords(2982, 2323), desc: "Координаты: -2010, 78, -4429" },
        { coords: convertCoords(2987, 2308), desc: "Координаты: -2039, 76, -4439" },
        { coords: convertCoords(2865, 2389), desc: "Координаты: -1878, 90, -4194" },
        { coords: convertCoords(2879, 2402), desc: "Координаты: -1851, 91, -4222" },
        { coords: convertCoords(2867, 2370), desc: "Координаты: -1916, 90, -4198" },
        { coords: convertCoords(2971, 2340), desc: "Координаты: -1976, 82, -4405" },
        { coords: convertCoords(2812, 2352), desc: "Координаты: -1952, 90, -4088" },
        { coords: convertCoords(2843, 2351), desc: "Координаты: -1954, 91, -4151" },
        { coords: convertCoords(2966, 2434), desc: "Координаты: -1788, 90, -4397" },
        { coords: convertCoords(2921, 2419), desc: "Координаты: -1817, 90, -4306" },
        // Янтарь
        { coords: convertCoords(2531, 1944), desc: "Координаты: -2766, 71, -3524" },
        { coords: convertCoords(2693, 2281), desc: "Координаты: -2094, 45, -3850" },
        { coords: convertCoords(2676, 2321), desc: "Координаты: -2012, 79, -3814" },
        { coords: convertCoords(2687, 2054), desc: "Координаты: -2547, 46, -3836" },
        { coords: convertCoords(2712, 2266), desc: "Координаты: -2124, 39, -3887" },
        // Дикая территория
        { coords: convertCoords(2654, 2632), desc: "Координаты: -1391, 80, -3774" },
        { coords: convertCoords(2624, 2663), desc: "Координаты: -1329, 80, -3713" },
        { coords: convertCoords(2789, 2740), desc: "Координаты: -1175, 91, -4044" },
        { coords: convertCoords(2796, 2686), desc: "Координаты: -1282, 87, -4057" },
        { coords: convertCoords(2658, 2635), desc: "Координаты: -1385, 92, -3781" },
        { coords: convertCoords(2670, 2632), desc: "Координаты: -1391, 93, -3806" },
        { coords: convertCoords(2717, 2627), desc: "Координаты: -1402, 79, -3900" },
        { coords: convertCoords(2742, 2657), desc: "Координаты: -1341, 86, -3950" },
        { coords: convertCoords(2761, 2687), desc: "Координаты: -1281, 86, -3988" },
        { coords: convertCoords(2796, 2589), desc: "Координаты: -1477, 103, -4056" },
        { coords: convertCoords(2762, 2618), desc: "Координаты: -1420, 85, -3990" },
        { coords: convertCoords(2786, 2629), desc: "Координаты: -1397, 84, -4037" },
        { coords: convertCoords(2736, 2618), desc: "Координаты: -1419, 85, -3937" },
        { coords: convertCoords(2625, 2683), desc: "Координаты: -1290, 80, -3716" },
        { coords: convertCoords(2739, 2759), desc: "Координаты: -1138, 87, -3944" },
        { coords: convertCoords(2834, 2832), desc: "Координаты: -991, 79, -4133" },
        { coords: convertCoords(2807, 2670), desc: "Координаты: -1316, 80, -4080" },
        // Свалка
        { coords: convertCoords(1959, 2811), desc: "Координаты: -1034, 94, -2380" },
        { coords: convertCoords(2007, 2873), desc: "Координаты: -909, 81, -2477" },
        { coords: convertCoords(2198, 2860), desc: "Координаты: -936, 88, -2860" },
        { coords: convertCoords(2333, 3053), desc: "Координаты: -550, 80, -3129" },
        { coords: convertCoords(2141, 2937), desc: "Координаты: -782, 78, -2745" },
    ],

    // ==================== КОНТЕЙНЕРЫ: ПРИПАСЫ ====================
    supply: [
        // Армейские склады
        { coords: convertCoords(3489, 2430), desc: "Координаты: -1796, 91, -5443" },
        { coords: convertCoords(3545, 2641), desc: "Координаты: -1374, 88, -5555" },
        { coords: convertCoords(3530, 2587), desc: "Координаты: -1483, 87, -5523" },
        { coords: convertCoords(3706, 3035), desc: "Координаты: -587, 89, -5876" },
        { coords: convertCoords(3486, 2965), desc: "Координаты: -726, 90, -5437" },
        { coords: convertCoords(3646, 2736), desc: "Координаты: -1183, 88, -5756" },
        { coords: convertCoords(3498, 2997), desc: "Координаты: -661, 90, -5460" },
        { coords: convertCoords(3626, 2710), desc: "Координаты: -1236, 88, -5717" },
        { coords: convertCoords(3684, 2912), desc: "Координаты: -833, 80, -5833" },
        { coords: convertCoords(3666, 3065), desc: "Координаты: -525, 92, -5797" },
        { coords: convertCoords(3547, 3057), desc: "Координаты: -542, 86, -5558" },
        { coords: convertCoords(3521, 3088), desc: "Координаты: -479, 90, -5506" },
        { coords: convertCoords(3669, 2735), desc: "Координаты: -1185, 88, -5801" },
        { coords: convertCoords(3423, 2427), desc: "Координаты: -1803, 91, -5310" },
        { coords: convertCoords(3491, 2960), desc: "Координаты: -735, 90, -5445" },
        { coords: convertCoords(3662, 2977), desc: "Координаты: -701, 79, -5788" },
        { coords: convertCoords(3520, 2438), desc: "Координаты: -1781, 92, -5503" },
        { coords: convertCoords(3509, 2747), desc: "Координаты: -1163, 81, -5483" },
        { coords: convertCoords(3497, 3112), desc: "Координаты: -432, 90, -5459" },
        { coords: convertCoords(3599, 2573), desc: "Координаты: -1509, 83, -5663" },
        { coords: convertCoords(3745, 2873), desc: "Координаты: -910, 91, -5954" },
        { coords: convertCoords(3763, 3094), desc: "Координаты: -469, 94, -5990" },
        { coords: convertCoords(3523, 3138), desc: "Координаты: -380, 89, -5510" },
        // Муравейник
        { coords: convertCoords(2726, 3541), desc: "Координаты: 425, 82, -3915" },
        { coords: convertCoords(2771, 3372), desc: "Координаты: 87, 77, -4007" },
        { coords: convertCoords(2765, 3226), desc: "Координаты: -203, 80, -3994" },
        { coords: convertCoords(2950, 3188), desc: "Координаты: -280, 92, -4364" },
        { coords: convertCoords(2979, 3425), desc: "Координаты: 195, 86, -4423" },
        { coords: convertCoords(2760, 3401), desc: "Координаты: 146, 80, -3984" },
        { coords: convertCoords(2893, 3506), desc: "Координаты: 357, 80, -4250" },
        { coords: convertCoords(2947, 3139), desc: "Координаты: -378, 96, -4359" },
        { coords: convertCoords(2950, 3144), desc: "Координаты: -367, 92, -4365" },
        { coords: convertCoords(2838, 3368), desc: "Координаты: 79, 86, -4140" },
        { coords: convertCoords(2773, 3245), desc: "Координаты: -166, 101, -4009" },
        { coords: convertCoords(2863, 3594), desc: "Координаты: 532, 79, -4190" },
        // Полесское
        { coords: convertCoords(3065, 2723), desc: "Координаты: -1211, 87, -4594" },
        { coords: convertCoords(3106, 2807), desc: "Координаты: -1041, 98, -4676" },
        { coords: convertCoords(2976, 2793), desc: "Координаты: -1071, 84, -4417" },
        { coords: convertCoords(3217, 2580), desc: "Координаты: -1496, 127, -4899" },
        { coords: convertCoords(3046, 2840), desc: "Координаты: -977, 79, -4557" },
        { coords: convertCoords(3244, 2690), desc: "Координаты: -1275, 77, -4952" },
        { coords: convertCoords(3060, 2662), desc: "Координаты: -1331, 77, -4585" },
        { coords: convertCoords(2980, 2832), desc: "Координаты: -992, 84, -4423" },
        { coords: convertCoords(3293, 2863), desc: "Координаты: -930, 80, -5050" },
        { coords: convertCoords(3293, 2837), desc: "Координаты: -982, 80, -5050" },
        { coords: convertCoords(3140, 2815), desc: "Координаты: -1026, 80, -4743" },
        { coords: convertCoords(3052, 2836), desc: "Координаты: -985, 81, -4568" },
        { coords: convertCoords(3143, 2742), desc: "Координаты: -1173, 86, -4750" },
        { coords: convertCoords(3127, 2844), desc: "Координаты: -969, 86, -4719" },
        { coords: convertCoords(3232, 2567), desc: "Координаты: -1522, 96, -4929" },
        { coords: convertCoords(3280, 2801), desc: "Координаты: -1053, 85, -5025" },
        { coords: convertCoords(3090, 2849), desc: "Координаты: -958, 86, -4643" },
        { coords: convertCoords(3232, 2593), desc: "Координаты: -1471, 97, -4928" },
        { coords: convertCoords(3340, 2634), desc: "Координаты: -1387, 85, -5145" },
        { coords: convertCoords(3031, 2786), desc: "Координаты: -1084, 81, -4526" },
        { coords: convertCoords(3033, 2729), desc: "Координаты: -1199, 82, -4530" },
        { coords: convertCoords(3344, 2706), desc: "Координаты: -1244, 85, -5152" },
        { coords: convertCoords(3115, 2669), desc: "Координаты: -1318, 82, -4694" },
        { coords: convertCoords(3146, 2769), desc: "Координаты: -1117, 82, -4756" },
        { coords: convertCoords(3326, 2731), desc: "Координаты: -1195, 85, -5117" },
        { coords: convertCoords(3376, 2727), desc: "Координаты: -1201, 85, -5216" },
        { coords: convertCoords(3352, 2788), desc: "Координаты: -1079, 85, -5167" },
        { coords: convertCoords(3370, 2782), desc: "Координаты: -1093, 85, -5203" },
        { coords: convertCoords(3330, 2775), desc: "Координаты: -1107, 85, -5123" },
        { coords: convertCoords(3331, 2758), desc: "Координаты: -1140, 85, -5126" },
        { coords: convertCoords(3283, 2661), desc: "Координаты: -1335, 85, -5030" },
        { coords: convertCoords(3283, 2527), desc: "Координаты: -1602, 87, -5031" },
        { coords: convertCoords(3035, 2698), desc: "Координаты: -1259, 82, -4535" },
        { coords: convertCoords(3087, 2770), desc: "Координаты: -1115, 94, -4639" },
        { coords: convertCoords(3342, 2541), desc: "Координаты: -1573, 78, -5148" },
        { coords: convertCoords(2980, 2816), desc: "Координаты: -1025, 83, -4424" },
        { coords: convertCoords(3144, 2782), desc: "Координаты: -1093, 86, -4753" },
        { coords: convertCoords(3282, 2619), desc: "Координаты: -1418, 85, -5029" },
        { coords: convertCoords(3218, 2583), desc: "Координаты: -1491, 170, -4901" },
        { coords: convertCoords(3224, 2751), desc: "Координаты: -1153, 73, -4912" },
        { coords: convertCoords(3124, 2857), desc: "Координаты: -942, 86, -4711" },
        { coords: convertCoords(3145, 2816), desc: "Координаты: -1024, 74, -4755" },
        { coords: convertCoords(2982, 2767), desc: "Координаты: -1124, 100, -4428" },
        { coords: convertCoords(3114, 2711), desc: "Координаты: -1233, 87, -4691" },
        // Поляна
        { coords: convertCoords(3030, 2348), desc: "Координаты: -1960, 79, -4523" },
        { coords: convertCoords(3043, 2384), desc: "Координаты: -1888, 86, -4551" },
        { coords: convertCoords(2923, 2424), desc: "Координаты: -1808, 94, -4310" },
        { coords: convertCoords(2818, 2436), desc: "Координаты: -1784, 90, -4100" },
        { coords: convertCoords(3026, 2405), desc: "Координаты: -1846, 89, -4516" },
        { coords: convertCoords(2865, 2296), desc: "Координаты: -2063, 91, -4195" },
        { coords: convertCoords(2958, 2339), desc: "Координаты: -1979, 78, -4381" },
        { coords: convertCoords(2852, 2394), desc: "Координаты: -1869, 100, -4167" },
        { coords: convertCoords(2970, 2343), desc: "Координаты: -1971, 74, -4405" },
        { coords: convertCoords(3062, 2327), desc: "Координаты: -2002, 77, -4587" },
        { coords: convertCoords(2940, 2372), desc: "Координаты: -1912, 90, -4344" },
        { coords: convertCoords(2971, 2284), desc: "Координаты: -2088, 76, -4406" },
        { coords: convertCoords(2952, 2380), desc: "Координаты: -1896, 90, -4369" },
        { coords: convertCoords(3268, 2453), desc: "Координаты: -1750, 88, -5001" },
        { coords: convertCoords(3065, 2352), desc: "Координаты: -1953, 81, -4594" },
        { coords: convertCoords(3009, 2355), desc: "Координаты: -1947, 79, -4482" },
        { coords: convertCoords(3009, 2323), desc: "Координаты: -2011, 78, -4481" },
        // Янтарь
        { coords: convertCoords(2718, 2250), desc: "Координаты: -2156, 40, -3898" },
        { coords: convertCoords(2570, 1983), desc: "Координаты: -2689, 91, -3602" },
        { coords: convertCoords(2728, 2285), desc: "Координаты: -2084, 81, -3919" },
        { coords: convertCoords(2724, 2082), desc: "Координаты: -2491, 31, -3911" },
        { coords: convertCoords(2724, 2345), desc: "Координаты: -1965, 80, -3910" },
        { coords: convertCoords(2701, 2276), desc: "Координаты: -2102, 45, -3866" },
        { coords: convertCoords(2687, 2153), desc: "Координаты: -2350, 40, -3838" },
        // Дикая территория
        { coords: convertCoords(2668, 2632), desc: "Координаты: -1391, 80, -3801" },
        { coords: convertCoords(2786, 2633), desc: "Координаты: -1389, 83, -4037" },
        { coords: convertCoords(2738, 2649), desc: "Координаты: -1356, 87, -3941" },
        { coords: convertCoords(2762, 2662), desc: "Координаты: -1331, 79, -3989" },
        { coords: convertCoords(2698, 2658), desc: "Координаты: -1340, 81, -3861" },
        { coords: convertCoords(2786, 2654), desc: "Координаты: -1347, 81, -4038" },
        { coords: convertCoords(2828, 2760), desc: "Координаты: -1135, 79, -4122" },
        { coords: convertCoords(2801, 2785), desc: "Координаты: -1086, 79, -4067" },
        { coords: convertCoords(2758, 2656), desc: "Координаты: -1342, 79, -3982" },
        { coords: convertCoords(2809, 2668), desc: "Координаты: -1319, 80, -4084" },
        { coords: convertCoords(2678, 2632), desc: "Координаты: -1390, 93, -3820" },
        { coords: convertCoords(2684, 2801), desc: "Координаты: -1053, 80, -3832" },
        { coords: convertCoords(2786, 2752), desc: "Координаты: -1151, 80, -4037" },
        { coords: convertCoords(2758, 2628), desc: "Координаты: -1399, 91, -3981" },
        { coords: convertCoords(2778, 2736), desc: "Координаты: -1183, 80, -4021" },
        { coords: convertCoords(2761, 2673), desc: "Координаты: -1309, 85, -3988" },
        { coords: convertCoords(2702, 2631), desc: "Координаты: -1394, 84, -3869" },
        { coords: convertCoords(2764, 2655), desc: "Координаты: -1345, 79, -3994" },
        { coords: convertCoords(2788, 2670), desc: "Координаты: -1315, 87, -4042" },
        // Свалка
        { coords: convertCoords(2247, 2889), desc: "Координаты: -877, 76, -2957" },
        { coords: convertCoords(2057, 2702), desc: "Координаты: -1252, 85, -2578" },
        { coords: convertCoords(2237, 3503), desc: "Координаты: 352, 71, -2936" },
        { coords: convertCoords(2295, 3431), desc: "Координаты: 206, 79, -3052" },
        { coords: convertCoords(2162, 2797), desc: "Координаты: -1060, 84, -2788" },
        { coords: convertCoords(2123, 2747), desc: "Координаты: -1160, 83, -2708" },
        { coords: convertCoords(1962, 2780), desc: "Координаты: -1094, 83, -2387" },
        { coords: convertCoords(2185, 2699), desc: "Координаты: -1257, 82, -2832" },
        { coords: convertCoords(1899, 2789), desc: "Координаты: -1076, 84, -2261" },
        { coords: convertCoords(2081, 2667), desc: "Координаты: -1320, 85, -2625" },
        { coords: convertCoords(2163, 2699), desc: "Координаты: -1257, 83, -2789" },
        { coords: convertCoords(2241, 3509), desc: "Координаты: 362, 71, -2945" },
        { coords: convertCoords(2099, 2693), desc: "Координаты: -1270, 108, -2662" },
        { coords: convertCoords(2076, 2682), desc: "Координаты: -1290, 87, -2616" },
        { coords: convertCoords(2030, 2798), desc: "Координаты: -1059, 84, -2523" },
        { coords: convertCoords(1953, 2811), desc: "Координаты: -1033, 85, -2370" },
        { coords: convertCoords(2095, 2707), desc: "Координаты: -1241, 101, -2653" },
        { coords: convertCoords(2141, 2767), desc: "Координаты: -1121, 84, -2746" },
        { coords: convertCoords(2044, 2753), desc: "Координаты: -1148, 86, -2551" },
    ],

    // ==================== КОНТЕЙНЕРЫ: БОЧКИ ====================
    barrels: [
        // Армейские склады
        { coords: convertCoords(3496, 2958), desc: "Координаты: -741, 90, -5457" },
        { coords: convertCoords(3570, 3084), desc: "Координаты: -488, 89, -5603" },
        { coords: convertCoords(3553, 2642), desc: "Координаты: -1372, 86, -5571" },
        { coords: convertCoords(3619, 3159), desc: "Координаты: -338, 85, -5702" },
        { coords: convertCoords(3509, 2996), desc: "Координаты: -664, 85, -5482" },
        { coords: convertCoords(3664, 2944), desc: "Координаты: -767, 76, -5793" },
        { coords: convertCoords(3491, 2995), desc: "Координаты: -666, 90, -5447" },
        { coords: convertCoords(3496, 3137), desc: "Координаты: -382, 90, -5456" },
        { coords: convertCoords(3723, 3065), desc: "Координаты: -526, 88, -5909" },
        { coords: convertCoords(3649, 2716), desc: "Координаты: -1224, 88, -5763" },
        { coords: convertCoords(3536, 2493), desc: "Координаты: -1669, 87, -5536" },
        { coords: convertCoords(3519, 2720), desc: "Координаты: -1216, 82, -5501" },
        { coords: convertCoords(3604, 3028), desc: "Координаты: -600, 85, -5672" },
        { coords: convertCoords(3514, 3012), desc: "Координаты: -631, 85, -5492" },
        { coords: convertCoords(3528, 2886), desc: "Координаты: -885, 85, -5521" },
        { coords: convertCoords(3515, 3074), desc: "Координаты: -507, 89, -5494" },
        { coords: convertCoords(3750, 3140), desc: "Координаты: -377, 94, -5963" },
        { coords: convertCoords(3512, 3126), desc: "Координаты: -403, 89, -5488" },
        { coords: convertCoords(3681, 2712), desc: "Координаты: -1233, 88, -5826" },
        { coords: convertCoords(3700, 3044), desc: "Координаты: -568, 88, -5864" },
        { coords: convertCoords(3493, 3129), desc: "Координаты: -399, 90, -5450" },
        { coords: convertCoords(3657, 2590), desc: "Координаты: -1475, 95, -5779" },
        { coords: convertCoords(3753, 2926), desc: "Координаты: -803, 88, -5971" },
        // Муравейник
        { coords: convertCoords(2956, 3431), desc: "Координаты: 206, 85, -4376" },
        { coords: convertCoords(2757, 3478), desc: "Координаты: 301, 73, -3978" },
        { coords: convertCoords(2845, 3488), desc: "Координаты: 320, 72, -4155" },
        { coords: convertCoords(2930, 3337), desc: "Координаты: 17, 73, -4324" },
        { coords: convertCoords(2815, 3333), desc: "Координаты: 11, 74, -4095" },
        { coords: convertCoords(2955, 3415), desc: "Координаты: 174, 85, -4374" },
        { coords: convertCoords(2893, 3474), desc: "Координаты: 292, 72, -4249" },
        { coords: convertCoords(2712, 3448), desc: "Координаты: 240, 72, -3887" },
        { coords: convertCoords(2915, 3472), desc: "Координаты: 287, 72, -4295" },
        { coords: convertCoords(2856, 3424), desc: "Координаты: 192, 85, -4177" },
        { coords: convertCoords(2749, 3418), desc: "Координаты: 179, 75, -3962" },
        { coords: convertCoords(2764, 3482), desc: "Координаты: 308, 73, -3992" },
        { coords: convertCoords(2738, 3538), desc: "Координаты: 420, 82, -3941" },
        { coords: convertCoords(2965, 3197), desc: "Координаты: -282, 92, -4394" },
        { coords: convertCoords(2948, 3146), desc: "Координаты: -365, 88, -4360" },
        { coords: convertCoords(2950, 3171), desc: "Координаты: -314, 91, -4363" },
        { coords: convertCoords(3014, 3223), desc: "Координаты: -211, 83, -4492" },
        { coords: convertCoords(2926, 3289), desc: "Координаты: -79, 72, -4315" },
        { coords: convertCoords(2699, 3405), desc: "Координаты: 155, 72, -3861" },
        { coords: convertCoords(2782, 3427), desc: "Координаты: 198, 72, -4029" },
        { coords: convertCoords(2917, 3447), desc: "Координаты: 238, 72, -4299" },
        { coords: convertCoords(2788, 3372), desc: "Координаты: 88, 73, -4041" },
        { coords: convertCoords(2824, 3428), desc: "Координаты: 201, 85, -4113" },
        { coords: convertCoords(3010, 3392), desc: "Координаты: 128, 72, -4485" },
        { coords: convertCoords(2979, 3367), desc: "Координаты: 79, 81, -4423" },
        { coords: convertCoords(2961, 3426), desc: "Координаты: 195, 85, -4385" },
        { coords: convertCoords(2752, 3216), desc: "Координаты: -224, 80, -3967" },
        { coords: convertCoords(2920, 3293), desc: "Координаты: -70, 75, -4302" },
        { coords: convertCoords(2877, 3290), desc: "Координаты: -75, 72, -4219" },
        // Полесское
        { coords: convertCoords(3119, 2730), desc: "Координаты: -1196, 95, -4702" },
        { coords: convertCoords(3065, 2733), desc: "Координаты: -1190, 76, -4594" },
        { coords: convertCoords(3285, 2707), desc: "Координаты: -1242, 85, -5035" },
        { coords: convertCoords(3223, 2582), desc: "Координаты: -1491, 145, -4909" },
        { coords: convertCoords(3232, 2767), desc: "Координаты: -1122, 73, -4927" },
        { coords: convertCoords(3362, 2739), desc: "Координаты: -1178, 85, -5187" },
        { coords: convertCoords(3327, 2667), desc: "Координаты: -1323, 85, -5119" },
        { coords: convertCoords(3311, 2653), desc: "Координаты: -1350, 85, -5085" },
        { coords: convertCoords(3036, 2686), desc: "Координаты: -1284, 75, -4537" },
        { coords: convertCoords(3112, 2673), desc: "Координаты: -1311, 77, -4689" },
        { coords: convertCoords(3007, 2792), desc: "Координаты: -1071, 83, -4479" },
        { coords: convertCoords(3122, 2837), desc: "Координаты: -982, 79, -4709" },
        { coords: convertCoords(3307, 2688), desc: "Координаты: -1281, 85, -5078" },
        { coords: convertCoords(3316, 2620), desc: "Координаты: -1416, 85, -5096" },
        { coords: convertCoords(3296, 2772), desc: "Координаты: -1113, 85, -5057" },
        { coords: convertCoords(3307, 2782), desc: "Координаты: -1093, 85, -5078" },
        { coords: convertCoords(3089, 2793), desc: "Координаты: -1070, 78, -4641" },
        { coords: convertCoords(3143, 2693), desc: "Координаты: -1269, 87, -4751" },
        { coords: convertCoords(3096, 2805), desc: "Координаты: -1047, 79, -4656" },
        { coords: convertCoords(2972, 2807), desc: "Координаты: -1043, 83, -4409" },
        { coords: convertCoords(3002, 2819), desc: "Координаты: -1017, 83, -4469" },
        { coords: convertCoords(3228, 2707), desc: "Координаты: -1241, 76, -4920" },
        { coords: convertCoords(3064, 2839), desc: "Координаты: -977, 86, -4592" },
        { coords: convertCoords(3144, 2808), desc: "Координаты: -1041, 74, -4753" },
        { coords: convertCoords(3065, 2679), desc: "Координаты: -1299, 77, -4595" },
        { coords: convertCoords(3313, 2538), desc: "Координаты: -1580, 87, -5091" },
        { coords: convertCoords(3364, 2766), desc: "Координаты: -1124, 85, -5192" },
        { coords: convertCoords(3330, 2861), desc: "Координаты: -935, 78, -5125" },
        { coords: convertCoords(3253, 2844), desc: "Координаты: -967, 73, -4969" },
        { coords: convertCoords(3220, 2580), desc: "Координаты: -1496, 97, -4904" },
        // Поляна
        { coords: convertCoords(2993, 2290), desc: "Координаты: -2076, 72, -4449" },
        { coords: convertCoords(2834, 2386), desc: "Координаты: -1883, 91, -4131" },
        { coords: convertCoords(2827, 2444), desc: "Координаты: -1769, 90, -4118" },
        { coords: convertCoords(2966, 2390), desc: "Координаты: -1877, 90, -4397" },
        { coords: convertCoords(2853, 2344), desc: "Координаты: -1968, 89, -4171" },
        { coords: convertCoords(2812, 2329), desc: "Координаты: -1999, 90, -4088" },
        { coords: convertCoords(2854, 2418), desc: "Координаты: -1819, 90, -4171" },
        { coords: convertCoords(2847, 2364), desc: "Координаты: -1929, 90, -4159" },
        // Янтарь
        { coords: convertCoords(2547, 1941), desc: "Координаты: -2773, 67, -3556" },
        { coords: convertCoords(2538, 2210), desc: "Координаты: -2235, 70, -3538" },
        { coords: convertCoords(2691, 2028), desc: "Координаты: -2599, 61, -3846" },
        { coords: convertCoords(2644, 2321), desc: "Координаты: -2014, 80, -3751" },
        { coords: convertCoords(2756, 2288), desc: "Координаты: -2079, 80, -3974" },
        { coords: convertCoords(2690, 2031), desc: "Координаты: -2594, 62, -3842" },
        { coords: convertCoords(2697, 2166), desc: "Координаты: -2323, 40, -3856" },
        // Дикая территория
        { coords: convertCoords(2767, 2620), desc: "Координаты: -1416, 91, -3999" },
        { coords: convertCoords(2824, 2819), desc: "Координаты: -1017, 76, -4114" },
        { coords: convertCoords(2779, 2595), desc: "Координаты: -1466, 95, -4023" },
        { coords: convertCoords(2796, 2653), desc: "Координаты: -1349, 80, -4058" },
        { coords: convertCoords(2723, 2695), desc: "Координаты: -1264, 86, -3911" },
        { coords: convertCoords(2755, 2590), desc: "Координаты: -1475, 154, -3975" },
        { coords: convertCoords(2633, 2653), desc: "Координаты: -1349, 80, -3731" },
        { coords: convertCoords(2632, 2680), desc: "Координаты: -1295, 81, -3729" },
        { coords: convertCoords(2771, 2798), desc: "Координаты: -1059, 79, -4007" },
        { coords: convertCoords(2720, 2773), desc: "Координаты: -1110, 81, -3906" },
        { coords: convertCoords(2837, 2787), desc: "Координаты: -1081, 86, -4138" },
        { coords: convertCoords(2671, 2809), desc: "Координаты: -1037, 86, -3807" },
        { coords: convertCoords(2765, 2658), desc: "Координаты: -1338, 86, -3996" },
        { coords: convertCoords(2651, 2632), desc: "Координаты: -1390, 86, -3768" },
        { coords: convertCoords(2654, 2604), desc: "Координаты: -1448, 85, -3774" },
        { coords: convertCoords(2736, 2604), desc: "Координаты: -1446, 88, -3938" },
        { coords: convertCoords(2803, 2645), desc: "Координаты: -1365, 84, -4072" },
        { coords: convertCoords(2714, 2604), desc: "Координаты: -1446, 85, -3892" },
        { coords: convertCoords(2749, 2674), desc: "Координаты: -1307, 80, -3964" },
        { coords: convertCoords(2786, 2738), desc: "Координаты: -1179, 80, -4037" },
        { coords: convertCoords(2754, 2627), desc: "Координаты: -1401, 91, -3972" },
        { coords: convertCoords(2724, 2779), desc: "Координаты: -1097, 79, -3914" },
        { coords: convertCoords(2721, 2835), desc: "Координаты: -985, 80, -3907" },
        // Свалка
        { coords: convertCoords(2167, 2706), desc: "Координаты: -1242, 85, -2797" },
        { coords: convertCoords(2091, 2794), desc: "Координаты: -1066, 89, -2646" },
        { coords: convertCoords(2298, 3432), desc: "Координаты: 209, 79, -3059" },
        { coords: convertCoords(2005, 2875), desc: "Координаты: -905, 80, -2473" },
        { coords: convertCoords(2143, 2725), desc: "Координаты: -1206, 87, -2750" },
        { coords: convertCoords(1940, 2817), desc: "Координаты: -1022, 84, -2342" },
        { coords: convertCoords(2112, 2700), desc: "Координаты: -1256, 101, -2687" },
        { coords: convertCoords(1969, 2796), desc: "Координаты: -1063, 83, -2400" },
        { coords: convertCoords(2412, 3173), desc: "Координаты: -310, 79, -3288" },
        { coords: convertCoords(2410, 3185), desc: "Координаты: -286, 82, -3283" },
        { coords: convertCoords(2232, 3387), desc: "Координаты: 119, 84, -2928" },
        { coords: convertCoords(2150, 3106), desc: "Координаты: -443, 79, -2763" },
        { coords: convertCoords(2128, 2801), desc: "Координаты: -1052, 88, -2719" },
        { coords: convertCoords(1971, 2780), desc: "Координаты: -1096, 83, -2405" },
        { coords: convertCoords(2106, 2705), desc: "Координаты: -1244, 122, -2675" },
        { coords: convertCoords(2070, 2783), desc: "Координаты: -1088, 84, -2604" },
        { coords: convertCoords(2238, 3385), desc: "Координаты: 115, 84, -2939" },
        { coords: convertCoords(2098, 2803), desc: "Координаты: -1049, 84, -2659" },
        { coords: convertCoords(2236, 3505), desc: "Координаты: 355, 71, -2935" },
        { coords: convertCoords(2155, 2789), desc: "Координаты: -1076, 83, -2774" },
        { coords: convertCoords(2103, 3025), desc: "Координаты: -605, 75, -2669" },
        { coords: convertCoords(2076, 2790), desc: "Координаты: -1076, 83, -2616" },
        { coords: convertCoords(2294, 3436), desc: "Координаты: 217, 79, -3052" },
        { coords: convertCoords(2052, 2998), desc: "Координаты: -660, 79, -2566" },
        { coords: convertCoords(2075, 2804), desc: "Координаты: -1047, 87, -2614" },
        { coords: convertCoords(2041, 2806), desc: "Координаты: -1044, 86, -2545" },
        { coords: convertCoords(2242, 3512), desc: "Координаты: 368, 71, -2947" },
        { coords: convertCoords(2119, 2789), desc: "Координаты: -1077, 84, -2700" },
        { coords: convertCoords(2102, 2808), desc: "Координаты: -1038, 84, -2668" },
        { coords: convertCoords(2050, 3013), desc: "Координаты: -629, 79, -2562" },
        { coords: convertCoords(2156, 2781), desc: "Координаты: -1093, 87, -2775" },
        { coords: convertCoords(2074, 2674), desc: "Координаты: -1308, 81, -2610" },
        { coords: convertCoords(2100, 2765), desc: "Координаты: -1124, 83, -2664" },
        { coords: convertCoords(2166, 2708), desc: "Координаты: -1239, 84, -2795" },
        { coords: convertCoords(2319, 3004), desc: "Координаты: -647, 75, -3100" },
        { coords: convertCoords(2166, 2713), desc: "Координаты: -1229, 82, -2796" },
        { coords: convertCoords(2247, 2888), desc: "Координаты: -880, 76, -2957" },
        { coords: convertCoords(2120, 3014), desc: "Координаты: -628, 75, -2704" },
        { coords: convertCoords(2117, 2699), desc: "Координаты: -1257, 101, -2698" },
        { coords: convertCoords(2079, 2659), desc: "Координаты: -1337, 85, -2622" },
        { coords: convertCoords(2311, 3003), desc: "Координаты: -650, 76, -3086" },
        { coords: convertCoords(2046, 2793), desc: "Координаты: -1068, 86, -2555" },
        { coords: convertCoords(2069, 2662), desc: "Координаты: -1331, 84, -2602" },
        { coords: convertCoords(2156, 3115), desc: "Координаты: -425, 77, -2774" },
        { coords: convertCoords(2111, 2697), desc: "Координаты: -1260, 122, -2684" },
        { coords: convertCoords(2105, 2692), desc: "Координаты: -1272, 101, -2673" },
        { coords: convertCoords(1923, 2774), desc: "Координаты: -1107, 83, -2308" },
        { coords: convertCoords(2038, 2804), desc: "Координаты: -1047, 85, -2538" },
        { coords: convertCoords(2167, 2714), desc: "Координаты: -1227, 82, -2796" },
        { coords: convertCoords(2140, 2707), desc: "Координаты: -1240, 82, -2743" },
        { coords: convertCoords(2225, 2792), desc: "Координаты: -1070, 86, -2914" },
        { coords: convertCoords(2221, 2787), desc: "Координаты: -1082, 86, -2906" },
        { coords: convertCoords(2126, 2786), desc: "Координаты: -1084, 89, -2716" },
        { coords: convertCoords(2055, 3091), desc: "Координаты: -473, 79, -2572" },
        { coords: convertCoords(2050, 3082), desc: "Координаты: -490, 79, -2562" },
        { coords: convertCoords(2236, 3385), desc: "Координаты: 115, 84, -2935" },
        { coords: convertCoords(2049, 2654), desc: "Координаты: -1348, 81, -2560" },
        { coords: convertCoords(2138, 2795), desc: "Координаты: -1065, 83, -2738" },
    ],

    // ==================== КОНТЕЙНЕРЫ: ИНСТРУМЕНТЫ ====================
    tools: [
        // Армейские склады
        { coords: convertCoords(3760, 2867), desc: "Координаты: -922, 95, -5984" },
        { coords: convertCoords(3652, 2735), desc: "Координаты: -1185, 95, -5768" },
        { coords: convertCoords(3493, 3168), desc: "Координаты: -320, 94, -5450" },
        { coords: convertCoords(3672, 2942), desc: "Координаты: -773, 80, -5809" },
        { coords: convertCoords(3750, 3155), desc: "Координаты: -346, 95, -5965" },
        { coords: convertCoords(3462, 2436), desc: "Координаты: -1785, 91, -5389" },
        { coords: convertCoords(3704, 2634), desc: "Координаты: -1387, 94, -5873" },
        { coords: convertCoords(3519, 2419), desc: "Координаты: -1819, 96, -5501" },
        { coords: convertCoords(3475, 2430), desc: "Координаты: -1796, 92, -5414" },
        { coords: convertCoords(3428, 2433), desc: "Координаты: -1790, 91, -5320" },
        { coords: convertCoords(3518, 2433), desc: "Координаты: -1790, 92, -5500" },
        { coords: convertCoords(3704, 3082), desc: "Координаты: -492, 89, -5871" },
        { coords: convertCoords(3645, 2930), desc: "Координаты: -796, 80, -5753" },
        { coords: convertCoords(3401, 2390), desc: "Координаты: -1876, 89, -5267" },
        { coords: convertCoords(3696, 2966), desc: "Координаты: -724, 80, -5857" },
        { coords: convertCoords(3700, 3024), desc: "Координаты: -608, 88, -5865" },
        { coords: convertCoords(3485, 2987), desc: "Координаты: -681, 90, -5433" },
        { coords: convertCoords(3713, 3068), desc: "Координаты: -521, 89, -5889" },
        { coords: convertCoords(3727, 3040), desc: "Координаты: -576, 90, -5918" },
        { coords: convertCoords(3686, 3029), desc: "Координаты: -599, 88, -5836" },
        { coords: convertCoords(3515, 3113), desc: "Координаты: -430, 91, -5494" },
        { coords: convertCoords(3672, 2916), desc: "Координаты: -824, 80, -5808" },
        { coords: convertCoords(3528, 2580), desc: "Координаты: -1496, 85, -5521" },
        { coords: convertCoords(3646, 2919), desc: "Координаты: -819, 80, -5757" },
        { coords: convertCoords(3699, 2926), desc: "Координаты: -804, 97, -5862" },
        { coords: convertCoords(3515, 2762), desc: "Координаты: -1131, 82, -5495" },
        { coords: convertCoords(3676, 2960), desc: "Координаты: -737, 80, -5816" },
        { coords: convertCoords(3522, 2874), desc: "Координаты: -907, 85, -5507" },
        { coords: convertCoords(3703, 2634), desc: "Координаты: -1387, 108, -5870" },
        { coords: convertCoords(3448, 2439), desc: "Координаты: -1779, 93, -5361" },
        { coords: convertCoords(3552, 2634), desc: "Координаты: -1388, 86, -5569" },
        { coords: convertCoords(3497, 2988), desc: "Координаты: -681, 97, -5459" },
        { coords: convertCoords(3520, 2415), desc: "Координаты: -1827, 91, -5504" },
        { coords: convertCoords(3643, 2745), desc: "Координаты: -1165, 88, -5751" },
        { coords: convertCoords(3520, 3127), desc: "Координаты: -401, 89, -5505" },
        { coords: convertCoords(3527, 2585), desc: "Координаты: -1487, 86, -5518" },
        { coords: convertCoords(3540, 3137), desc: "Координаты: -382, 89, -5544" },
        { coords: convertCoords(3693, 2951), desc: "Координаты: -755, 81, -5851" },
        { coords: convertCoords(3542, 3112), desc: "Координаты: -432, 90, -5548" },
        { coords: convertCoords(3445, 2415), desc: "Координаты: -1825, 91, -5354" },
        // Муравейник
        { coords: convertCoords(2833, 3536), desc: "Координаты: 415, 80, -4129" },
        { coords: convertCoords(2705, 3258), desc: "Координаты: -140, 81, -3875" },
        { coords: convertCoords(2937, 3186), desc: "Координаты: -284, 92, -4338" },
        { coords: convertCoords(2750, 3239), desc: "Координаты: -178, 81, -3964" },
        { coords: convertCoords(2836, 3420), desc: "Координаты: 185, 89, -4136" },
        { coords: convertCoords(2761, 3242), desc: "Координаты: -173, 80, -3985" },
        { coords: convertCoords(2709, 3222), desc: "Координаты: -213, 81, -3881" },
        { coords: convertCoords(2942, 3182), desc: "Координаты: -292, 86, -4347" },
        { coords: convertCoords(2975, 3404), desc: "Координаты: 153, 95, -4414" },
        { coords: convertCoords(2967, 3173), desc: "Координаты: -311, 92, -4398" },
        { coords: convertCoords(2908, 3296), desc: "Координаты: -64, 78, -4281" },
        { coords: convertCoords(2981, 3432), desc: "Координаты: 207, 86, -4427" },
        { coords: convertCoords(2972, 3405), desc: "Координаты: 155, 86, -4409" },
        { coords: convertCoords(3058, 3431), desc: "Координаты: 205, 75, -4579" },
        { coords: convertCoords(2707, 3258), desc: "Координаты: -141, 86, -3877" },
        { coords: convertCoords(2750, 3222), desc: "Координаты: -211, 81, -3965" },
        { coords: convertCoords(2854, 3530), desc: "Координаты: 404, 85, -4173" },
        { coords: convertCoords(2697, 3562), desc: "Координаты: 467, 83, -3858" },
        { coords: convertCoords(2943, 3162), desc: "Координаты: -333, 92, -4350" },
        { coords: convertCoords(2693, 3550), desc: "Координаты: 445, 86, -3851" },
        { coords: convertCoords(2712, 3542), desc: "Координаты: 428, 82, -3887" },
        { coords: convertCoords(2851, 3532), desc: "Координаты: 407, 70, -4165" },
        { coords: convertCoords(2854, 3530), desc: "Координаты: 404, 85, -4173" },
        { coords: convertCoords(2944, 3144), desc: "Координаты: -367, 92, -4352" },
        { coords: convertCoords(2740, 3545), desc: "Координаты: 434, 83, -3944" },
        { coords: convertCoords(2728, 3195), desc: "Координаты: -265, 79, -3921" },
        { coords: convertCoords(2938, 3129), desc: "Координаты: -397, 96, -4340" },
        { coords: convertCoords(2726, 3261), desc: "Координаты: -134, 81, -3915" },
        // Полесское
        { coords: convertCoords(3364, 2712), desc: "Координаты: -1233, 85, -5192" },
        { coords: convertCoords(3065, 2835), desc: "Координаты: -985, 82, -4594" },
        { coords: convertCoords(3286, 2637), desc: "Координаты: -1381, 86, -5036" },
        { coords: convertCoords(3115, 2756), desc: "Координаты: -1143, 83, -4693" },
        { coords: convertCoords(3247, 2798), desc: "Координаты: -1059, 76, -4958" },
        { coords: convertCoords(3142, 2810), desc: "Координаты: -1036, 79, -4749" },
        { coords: convertCoords(3219, 2583), desc: "Координаты: -1490, 157, -4902" },
        { coords: convertCoords(3311, 2714), desc: "Координаты: -1228, 85, -5087" },
        { coords: convertCoords(3004, 2802), desc: "Координаты: -1052, 83, -4472" },
        { coords: convertCoords(3065, 2740), desc: "Координаты: -1177, 83, -4594" },
        { coords: convertCoords(2993, 2832), desc: "Координаты: -991, 85, -4450" },
        { coords: convertCoords(3059, 2757), desc: "Координаты: -1143, 87, -4583" },
        { coords: convertCoords(2980, 2807), desc: "Координаты: -1042, 83, -4425" },
        { coords: convertCoords(3230, 2599), desc: "Координаты: -1459, 101, -4925" },
        { coords: convertCoords(3102, 2808), desc: "Координаты: -1039, 98, -4669" },
        { coords: convertCoords(3062, 2706), desc: "Координаты: -1245, 83, -4588" },
        { coords: convertCoords(3039, 2735), desc: "Координаты: -1186, 78, -4542" },
        { coords: convertCoords(3115, 2695), desc: "Координаты: -1266, 83, -4694" },
        { coords: convertCoords(3140, 2705), desc: "Координаты: -1245, 80, -4744" },
        { coords: convertCoords(3144, 2725), desc: "Координаты: -1207, 86, -4753" },
        { coords: convertCoords(3118, 2779), desc: "Координаты: -1099, 80, -4701" },
        { coords: convertCoords(3055, 2835), desc: "Координаты: -985, 85, -4574" },
        { coords: convertCoords(3057, 2849), desc: "Координаты: -959, 86, -4578" },
        { coords: convertCoords(3320, 2516), desc: "Координаты: -1624, 84, -5105" },
        { coords: convertCoords(3032, 2751), desc: "Координаты: -1155, 78, -4529" },
        { coords: convertCoords(3038, 2793), desc: "Координаты: -1071, 85, -4539" },
        { coords: convertCoords(3144, 2781), desc: "Координаты: -1095, 85, -4753" },
        { coords: convertCoords(3117, 2716), desc: "Координаты: -1223, 79, -4699" },
        { coords: convertCoords(3235, 2733), desc: "Координаты: -1190, 73, -4934" },
        // Поляна
        { coords: convertCoords(2885, 2382), desc: "Координаты: -1893, 91, -4233" },
        { coords: convertCoords(2871, 2295), desc: "Координаты: -2066, 90, -4207" },
        { coords: convertCoords(2864, 2305), desc: "Координаты: -2047, 99, -4191" },
        { coords: convertCoords(3008, 2340), desc: "Координаты: -1976, 79, -4480" },
        { coords: convertCoords(2966, 2307), desc: "Координаты: -2041, 81, -4397" },
        { coords: convertCoords(2968, 2320), desc: "Координаты: -2015, 78, -4400" },
        { coords: convertCoords(2947, 2428), desc: "Координаты: -1801, 90, -4357" },
        { coords: convertCoords(2844, 2393), desc: "Координаты: -1871, 90, -4152" },
        { coords: convertCoords(2825, 2380), desc: "Координаты: -1896, 91, -4114" },
        { coords: convertCoords(2951, 2415), desc: "Координаты: -1825, 90, -4366" },
        { coords: convertCoords(2903, 2394), desc: "Координаты: -1868, 93, -4269" },
        { coords: convertCoords(2995, 2332), desc: "Координаты: -1992, 79, -4455" },
        { coords: convertCoords(3077, 2407), desc: "Координаты: -1841, 86, -4619" },
        { coords: convertCoords(3081, 2374), desc: "Координаты: -1908, 83, -4625" },
        // Янтарь
        { coords: convertCoords(2711, 2261), desc: "Координаты: -2132, 40, -3886" },
        { coords: convertCoords(2638, 2021), desc: "Координаты: -2614, 67, -3739" },
        { coords: convertCoords(2705, 2327), desc: "Координаты: -2001, 80, -3872" },
        { coords: convertCoords(2696, 2161), desc: "Координаты: -2334, 40, -3854" },
        { coords: convertCoords(2720, 2113), desc: "Координаты: -2428, 32, -3903" },
        { coords: convertCoords(2702, 2288), desc: "Координаты: -2080, 81, -3866" },
        { coords: convertCoords(2564, 1916), desc: "Координаты: -2822, 65, -3591" },
        // Дикая территория
        { coords: convertCoords(2665, 2641), desc: "Координаты: -1374, 93, -3795" },
        { coords: convertCoords(2776, 2588), desc: "Координаты: -1479, 104, -4018" },
        { coords: convertCoords(2706, 2626), desc: "Координаты: -1404, 77, -3878" },
        { coords: convertCoords(2746, 2769), desc: "Координаты: -1118, 78, -3957" },
        { coords: convertCoords(2748, 2627), desc: "Координаты: -1400, 86, -3961" },
        { coords: convertCoords(2787, 2792), desc: "Координаты: -1072, 81, -4040" },
        { coords: convertCoords(2697, 2632), desc: "Координаты: -1391, 77, -3859" },
        { coords: convertCoords(2629, 2697), desc: "Координаты: -1262, 86, -3724" },
        { coords: convertCoords(2756, 2764), desc: "Координаты: -1127, 80, -3977" },
        { coords: convertCoords(2716, 2816), desc: "Координаты: -1022, 90, -3897" },
        { coords: convertCoords(2751, 2682), desc: "Координаты: -1292, 92, -3968" },
        { coords: convertCoords(2641, 2610), desc: "Координаты: -1436, 85, -3746" },
        { coords: convertCoords(2746, 2795), desc: "Координаты: -1066, 81, -3958" },
        { coords: convertCoords(2782, 2593), desc: "Координаты: -1470, 112, -4029" },
        { coords: convertCoords(2804, 2739), desc: "Координаты: -1176, 80, -4073" },
        { coords: convertCoords(2836, 2791), desc: "Координаты: -1073, 79, -4138" },
        { coords: convertCoords(2724, 2649), desc: "Координаты: -1356, 86, -3912" },
        { coords: convertCoords(2799, 2784), desc: "Координаты: -1087, 79, -4062" },
        // Свалка
        { coords: convertCoords(2176, 2684), desc: "Координаты: -1288, 82, -2815" },
        { coords: convertCoords(1953, 2799), desc: "Координаты: -1057, 85, -2368" },
        { coords: convertCoords(2096, 2710), desc: "Координаты: -1236, 101, -2656" },
        { coords: convertCoords(2010, 2696), desc: "Координаты: -1264, 98, -2484" },
        { coords: convertCoords(1941, 2808), desc: "Координаты: -1039, 84, -2346" },
        { coords: convertCoords(2145, 2802), desc: "Координаты: -1050, 89, -2753" },
        { coords: convertCoords(1950, 2815), desc: "Координаты: -1025, 84, -2364" },
        { coords: convertCoords(2011, 2687), desc: "Координаты: -1282, 98, -2486" },
        { coords: convertCoords(2328, 3053), desc: "Координаты: -549, 79, -3118" },
        { coords: convertCoords(2126, 2756), desc: "Координаты: -1142, 83, -2715" },
        { coords: convertCoords(1952, 2785), desc: "Координаты: -1085, 85, -2366" },
        { coords: convertCoords(1954, 2793), desc: "Координаты: -1070, 90, -2370" },
        { coords: convertCoords(2208, 2860), desc: "Координаты: -935, 87, -2879" },
        { coords: convertCoords(2118, 3039), desc: "Координаты: -578, 76, -2699" },
        { coords: convertCoords(2144, 2932), desc: "Координаты: -791, 78, -2752" },
        { coords: convertCoords(2087, 2782), desc: "Координаты: -1092, 84, -2636" },
    ],

    // ==================== КОНТЕЙНЕРЫ: НАУЧНОЕ ОБОРУДОВАНИЕ ====================
    science: [
        // Янтарь
        { coords: convertCoords(2702, 2204), desc: "Координаты: -2247, 7, -3867" },
        { coords: convertCoords(2622, 2196), desc: "Координаты: -2263, 65, -3707" },
        { coords: convertCoords(2699, 2207), desc: "Координаты: -2241, 7, -3861" },
        // Дикая территория
        { coords: convertCoords(2706, 2875), desc: "Координаты: -906, 79, -3876" },
        { coords: convertCoords(2681, 2697), desc: "Координаты: -1261, 72, -3826" },
        // Свалка
        { coords: convertCoords(2255, 3125), desc: "Координаты: -405, 95, -2974" },
        { coords: convertCoords(2108, 2996), desc: "Координаты: -663, 75, -2680" },
    ],

    // ==================== КОНТЕЙНЕРЫ: ТАЙНИКИ ====================
    stash: [
        // Полесское
        {
            coords: convertCoords(3267, 2763),
            desc: "Координаты: -1130, 84, -4997",
            extended: {
                rewards: [
                { key: 'prima_cigarettes', count: 4 },
                { key: 'lead', count: 1 },
                { key: 'vodka_kazaki', count: 5 }
                ]
            }
        },
        // Янтарь
        {
            coords: convertCoords(2688, 2031),
            desc: "Координаты: -2594, 61, -3839",
            extended: {
                rewards: [
                    { key: 'makarov_pistol', count: 1 },
                    { key: 'vodka_kazaki', count: 1 },
                    { key: 'ammo_9x18', count: 1 }
                ]
            }
        },
        // Дикая территория
        {
            coords: convertCoords(2716, 2662),
            desc: "Координаты: -1331, 80, -3898",
            extended: {
                rewards: [
                    { key: 'vitamins', count: 4 },
                    { key: 'cheese_yantar', count: 1 },
                    { key: 'snork_leg', count: 3 },
                    { key: 'beer_slavutich', count: 1 },
                    { key: 'bandage', count: 4 },
                    { key: 'blind_dog_heart', count: 6 }
                ]
            }
        },
        {
            coords: convertCoords(2748, 2655),
            desc: "Координаты: -1344, 85, -3962",
            extended: {
                rewards: [
                    { key: 'mercenary_patch', count: 3 },
                    { key: 'psy_blockade', count: 1 },
                    { key: 'condensed_milk', count: 1 },
                    { key: 'vodka_kazaki', count: 1 },
                    { key: 'mre_b', count: 1 }
                ]
            }
        },
        {
            coords: convertCoords(2823, 2833),
            desc: "Координаты: -990, 83, -4110",
            extended: {
                rewards: [
                    { key: 'zombie_hand', count: 1 },
                    { key: 'controller_hand', count: 1 },
                    { key: 'toy_airplane', count: 1 },
                    { key: 'snork_hand', count: 1 },
                    { key: 'toy_car', count: 1 },
                    { key: 'toy_doll', count: 1 }
                ]
            }
        }
    ],

    // ==================== КОНТЕЙНЕРЫ: ДЕРЕВЯННЫЕ ЯЩИКИ ====================
    wooden_crate: [
        // Армейские склады
        { coords: convertCoords(3494, 2451), desc: "Координаты: -1754, 91, -5452" },
        { coords: convertCoords(3648, 2916), desc: "Координаты: -825, 80, -5761" },
        { coords: convertCoords(3496, 2412), desc: "Координаты: -1832, 91, -5456" },
        { coords: convertCoords(3497, 2953), desc: "Координаты: -750, 90, -5458" },
        // Поляна
        { coords: convertCoords(2852, 2391), desc: "Координаты: -1875, 87, -4169" },
        { coords: convertCoords(3094, 2415), desc: "Координаты: -1827, 88, -4651" },
        { coords: convertCoords(3096, 2450), desc: "Координаты: -1756, 87, -4657" },
        { coords: convertCoords(3123, 2424), desc: "Координаты: -1808, 85, -4711" },
        { coords: convertCoords(3098, 2387), desc: "Координаты: -1883, 80, -4661" },
        // Янтарь
        { coords: convertCoords(2545, 2205), desc: "Координаты: -2246, 70, -3552" },
        { coords: convertCoords(2564, 1984), desc: "Координаты: -2687, 63, -3592" },
        { coords: convertCoords(2631, 2020), desc: "Координаты: -2614, 81, -3725" },
        // Дикая территория
        { coords: convertCoords(2730, 2764), desc: "Координаты: -1127, 84, -3925" },
        { coords: convertCoords(2768, 2799), desc: "Координаты: -1056, 79, -4001" },
        // Свалка
        { coords: convertCoords(2019, 2712), desc: "Координаты: -1232, 96, -2501" },
    ],

    // ==================== КОНТЕЙНЕРЫ: СЕЙФЫ ====================
    safe: [
        // Армейские склады
        { coords: convertCoords(3511, 3127), desc: "Координаты: -402, 89, -5487" },
        { coords: convertCoords(3687, 2910), desc: "Координаты: -837, 82, -5838" },
        { coords: convertCoords(3700, 3028), desc: "Координаты: -600, 89, -5864" },
        { coords: convertCoords(3711, 3064), desc: "Координаты: -528, 90, -5886" },
        { coords: convertCoords(3510, 2760), desc: "Координаты: -1137, 83, -5483" },
        { coords: convertCoords(3765, 3093), desc: "Координаты: -470, 93, -5994" },
        { coords: convertCoords(3517, 2414), desc: "Координаты: -1828, 96, -5499" },
        { coords: convertCoords(3482, 2993), desc: "Координаты: -671, 89, -5428" },
        { coords: convertCoords(3704, 2636), desc: "Координаты: -1385, 108, -5871" },
        { coords: convertCoords(3750, 3157), desc: "Координаты: -341, 94, -5965" },
        { coords: convertCoords(3452, 2437), desc: "Координаты: -1782, 94, -5368" },
        { coords: convertCoords(3638, 2953), desc: "Координаты: -751, 80, -5740" },
        { coords: convertCoords(3665, 2970), desc: "Координаты: -716, 80, -5794" },
        { coords: convertCoords(3657, 2735), desc: "Координаты: -1186, 88, -5779" },
        { coords: convertCoords(3666, 2941), desc: "Координаты: -775, 76, -5795" },
        { coords: convertCoords(3361, 2419), desc: "Координаты: -1817, 85, -5186" },
        { coords: convertCoords(3513, 3089), desc: "Координаты: -479, 95, -5490" },
        { coords: convertCoords(3536, 3058), desc: "Координаты: -539, 85, -5536" },
        { coords: convertCoords(3489, 2440), desc: "Координаты: -1776, 90, -5443" },
        { coords: convertCoords(3554, 2637), desc: "Координаты: -1382, 86, -5573" },
        // Муравейник
        { coords: convertCoords(2747, 3226), desc: "Координаты: -204, 80, -3958" },
        { coords: convertCoords(2981, 3432), desc: "Координаты: 208, 87, -4425" },
        { coords: convertCoords(2761, 3400), desc: "Координаты: 145, 79, -3986" },
        { coords: convertCoords(2712, 3549), desc: "Координаты: 442, 82, -3889" },
        { coords: convertCoords(2693, 3551), desc: "Координаты: 447, 86, -3849" },
        { coords: convertCoords(2969, 3226), desc: "Координаты: -205, 91, -4401" },
        { coords: convertCoords(2951, 3153), desc: "Координаты: -350, 98, -4366" },
        { coords: convertCoords(2955, 3416), desc: "Координаты: 175, 85, -4374" },
        { coords: convertCoords(2853, 3424), desc: "Координаты: 193, 87, -4170" },
        { coords: convertCoords(2834, 3418), desc: "Координаты: 180, 88, -4133" },
        { coords: convertCoords(2708, 3257), desc: "Координаты: -143, 85, -3880" },
        { coords: convertCoords(2763, 3227), desc: "Координаты: -203, 78, -3990" },
        // Полесское
        { coords: convertCoords(3119, 2791), desc: "Координаты: -1075, 79, -4703" },
        { coords: convertCoords(3253, 2844), desc: "Координаты: -968, 73, -4970" },
        { coords: convertCoords(3369, 2701), desc: "Координаты: -1254, 89, -5202" },
        { coords: convertCoords(3070, 2668), desc: "Координаты: -1320, 84, -4604" },
        { coords: convertCoords(2977, 2793), desc: "Координаты: -1071, 88, -4418" },
        { coords: convertCoords(3283, 2655), desc: "Координаты: -1346, 87, -5030" },
        { coords: convertCoords(3236, 2587), desc: "Координаты: -1483, 102, -4937" },
        { coords: convertCoords(3369, 2768), desc: "Координаты: -1120, 89, -5202" },
        { coords: convertCoords(3287, 2764), desc: "Координаты: -1128, 85, -5037" },
        { coords: convertCoords(2995, 2817), desc: "Координаты: -1021, 87, -4455" },
        // Поляна
        { coords: convertCoords(2998, 2328), desc: "Координаты: -2000, 79, -4461" },
        { coords: convertCoords(2828, 2332), desc: "Координаты: -1991, 90, -4119" },
        { coords: convertCoords(2924, 2423), desc: "Координаты: -1810, 94, -4313" },
        { coords: convertCoords(2968, 2437), desc: "Координаты: -1782, 91, -4401" },
        { coords: convertCoords(2854, 2391), desc: "Координаты: -1875, 100, -4172" },
        { coords: convertCoords(2862, 2304), desc: "Координаты: -2049, 98, -4189" },
        { coords: convertCoords(2970, 2305), desc: "Координаты: -2046, 80, -4405" },
        { coords: convertCoords(3076, 2443), desc: "Координаты: -1769, 86, -4616" },
        { coords: convertCoords(2942, 2371), desc: "Координаты: -1913, 91, -4348" },
        { coords: convertCoords(2855, 2418), desc: "Координаты: -1821, 90, -4174" },
        { coords: convertCoords(2828, 2383), desc: "Координаты: -1889, 88, -4120" },
        { coords: convertCoords(2827, 2443), desc: "Координаты: -1770, 90, -4118" },
        // Янтарь
        { coords: convertCoords(2576, 1983), desc: "Координаты: -2690, 72, -3615" },
        { coords: convertCoords(2723, 2287), desc: "Координаты: -2082, 81, -3908" },
        { coords: convertCoords(2705, 2329), desc: "Координаты: -1997, 87, -3873" },
        { coords: convertCoords(2557, 2149), desc: "Координаты: -2356, 66, -3577" },
        { coords: convertCoords(2729, 2373), desc: "Координаты: -1910, 79, -3922" },
        { coords: convertCoords(2648, 2362), desc: "Координаты: -1932, 79, -3760" },
        // Дикая территория
        { coords: convertCoords(2832, 2787), desc: "Координаты: -1082, 85, -4129" },
        { coords: convertCoords(2778, 2593), desc: "Координаты: -1470, 111, -4022" },
        { coords: convertCoords(2742, 2650), desc: "Координаты: -1354, 85, -3950" },
        { coords: convertCoords(2730, 2762), desc: "Координаты: -1133, 79, -3922" },
        // Свалка
        { coords: convertCoords(2142, 2764), desc: "Координаты: -1126, 84, -2747" },
        { coords: convertCoords(2033, 2788), desc: "Координаты: -1078, 89, -2530" },
        { coords: convertCoords(2120, 3037), desc: "Координаты: -581, 77, -2703" },
        { coords: convertCoords(2007, 2875), desc: "Координаты: -904, 80, -2478" },
        { coords: convertCoords(2254, 3122), desc: "Координаты: -411, 95, -2971" },
        { coords: convertCoords(2247, 3002), desc: "Координаты: -652, 80, -2958" },
        { coords: convertCoords(2007, 2693), desc: "Координаты: -1269, 97, -2478" },
        { coords: convertCoords(1948, 2815), desc: "Координаты: -1026, 83, -2359" },
        { coords: convertCoords(2106, 2706), desc: "Координаты: -1242, 108, -2675" },
    ],

    // ==================== КОНТЕЙНЕРЫ: СХРОНЫ ====================
    stash_hidden: [

    ],

    // ==================== МУТАНТЫ: СЛЕПЫЕ ПСЫ ====================
    blind_dog: [
        // Армейские склады
        { coords: convertCoords(3576, 3007), desc: "Слепые собаки" },
        { coords: convertCoords(3377, 2531), desc: "Слепые собаки" },
        { coords: convertCoords(3598, 3032), desc: "Слепые собаки" },
        { coords: convertCoords(3463, 2840), desc: "Слепые собаки" },
        { coords: convertCoords(3555, 3051), desc: "Слепые собаки" },
        { coords: convertCoords(3587, 3106), desc: "Слепые собаки" },
        { coords: convertCoords(3740, 2796), desc: "Слепые собаки" },
        { coords: convertCoords(3707, 3044), desc: "Слепые собаки" },
        { coords: convertCoords(3447, 2531), desc: "Слепые собаки" },
        { coords: convertCoords(3762, 3037), desc: "Слепые собаки" },
        // Муравейник
        { coords: convertCoords(3057, 3319), desc: "Слепые собаки" },
        { coords: convertCoords(2800, 3330), desc: "Слепые собаки" },
        { coords: convertCoords(2815, 3179), desc: "Слепые собаки" },
        { coords: convertCoords(2956, 3143), desc: "Слепые собаки" },
        { coords: convertCoords(2830, 3365), desc: "Слепые собаки" },
        { coords: convertCoords(2863, 3376), desc: "Слепые собаки" },
        { coords: convertCoords(2709, 3294), desc: "Слепые собаки" },
        { coords: convertCoords(2663, 3277), desc: "Слепые собаки" },
        { coords: convertCoords(2958, 3162), desc: "Слепые собаки" },
        // Полесское
        { coords: convertCoords(3239, 2650), desc: "Слепые псы" },
        { coords: convertCoords(3107, 2845), desc: "Слепые псы" },
        { coords: convertCoords(3026, 2633), desc: "Слепые псы" },
        { coords: convertCoords(3049, 2710), desc: "Слепые псы" },
        { coords: convertCoords(3383, 2809), desc: "Слепые псы" },
        { coords: convertCoords(3344, 2761), desc: "Слепые псы" },
        { coords: convertCoords(3099, 2712), desc: "Слепые псы" },
        { coords: convertCoords(3182, 2579), desc: "Слепые псы" },
        { coords: convertCoords(2976, 2893), desc: "Слепые псы" },
        // Поляна
        { coords: convertCoords(2916, 2332), desc: "Слепые псы" },
        { coords: convertCoords(3088, 2474), desc: "Слепые псы" },
        { coords: convertCoords(2974, 2465), desc: "Слепые псы" },
        { coords: convertCoords(2883, 2484), desc: "Слепые псы" },
        { coords: convertCoords(2824, 2356), desc: "Слепые псы" },
        { coords: convertCoords(3005, 2381), desc: "Слепые псы" },
        { coords: convertCoords(2931, 2468), desc: "Слепые псы" },
        { coords: convertCoords(3108, 2407), desc: "Слепые псы" },
        { coords: convertCoords(2826, 2356), desc: "Слепые псы" },
        // Дикая территория
        { coords: convertCoords(2760, 2732), desc: "Слепые псы" },
        { coords: convertCoords(2816, 2654), desc: "Слепые псы" },
        { coords: convertCoords(2815, 2829), desc: "Слепые псы" },
        // Бар
        { coords: convertCoords(2586, 3110), desc: "Слепые псы" },
        { coords: convertCoords(2638, 3021), desc: "Слепые псы" },
        { coords: convertCoords(2531, 3115), desc: "Слепые псы" },
        // Свалка
        { coords: convertCoords(2306, 2952), desc: "Слепые собаки" },
        { coords: convertCoords(2078, 2973), desc: "Слепые собаки" },
        { coords: convertCoords(2064, 3246), desc: "Слепые собаки" },
        { coords: convertCoords(2140, 2778), desc: "Слепые собаки" },
        { coords: convertCoords(2224, 2882), desc: "Слепые собаки" },
        { coords: convertCoords(1938, 2593), desc: "Слепые собаки" },
        { coords: convertCoords(2203, 2873), desc: "Слепые собаки" },
        { coords: convertCoords(2110, 3215), desc: "Слепые собаки" },
        { coords: convertCoords(2251, 2683), desc: "Слепые собаки" },
        { coords: convertCoords(2139, 2659), desc: "Слепые собаки" },
        { coords: convertCoords(2200, 3133), desc: "Слепые собаки" },
        { coords: convertCoords(1933, 2740), desc: "Слепые собаки" },
    ],

    // ==================== МУТАНТЫ: ПСЕВДОСОБАКИ ====================
    pseudodog: [
        // Армейские склады
        { coords: convertCoords(3404, 2536), desc: "Псевдособаки" },
        // Свалка
        { coords: convertCoords(2227, 2841), desc: "Псевдособаки" },
        { coords: convertCoords(2062, 3240), desc: "Псевдособаки" },
        { coords: convertCoords(2232, 3269), desc: "Псевдособаки" },
        { coords: convertCoords(2319, 2935), desc: "Псевдособаки" },
        { coords: convertCoords(1970, 2656), desc: "Псевдособаки" },
    ],

    // ==================== МУТАНТЫ: ПСИ-СОБАКА ====================
    psy_dog: [
        // Армейские склады
        { coords: convertCoords(3775, 2902), desc: "Пси-собака" },
        { coords: convertCoords(3457, 2838), desc: "Пси-собака" },
        { coords: convertCoords(3571, 3006), desc: "Пси-собака" },
        { coords: convertCoords(3560, 3065), desc: "Пси-собака" },
        { coords: convertCoords(3553, 3182), desc: "Пси-собака" },
        { coords: convertCoords(3760, 3036), desc: "Пси-собака" },
        { coords: convertCoords(3447, 2535), desc: "Пси-собака" },
        { coords: convertCoords(3596, 3034), desc: "Пси-собака" },
        { coords: convertCoords(3739, 2801), desc: "Пси-собака" },
        // Муравейник
        { coords: convertCoords(2700, 3303), desc: "Пси-собака" },
        { coords: convertCoords(2862, 3375), desc: "Пси-собака" },
        { coords: convertCoords(2958, 3129), desc: "Пси-собака" },
        // Полесское
        { coords: convertCoords(3182, 2576), desc: "Пси-собака" },
        { coords: convertCoords(3107, 2848), desc: "Пси-собака" },
        // Поляна
        { coords: convertCoords(2881, 2484), desc: "Пси-собака" },
        { coords: convertCoords(2826, 2356), desc: "Пси-собака" },
        { coords: convertCoords(2913, 2332), desc: "Пси-собака" },
        { coords: convertCoords(2959, 2459), desc: "Пси-собака" },
        // Дикая территория
        { coords: convertCoords(2737, 2736), desc: "Пси-собака" },
        { coords: convertCoords(2687, 2794), desc: "Пси-собака" },
        // Бар
        { coords: convertCoords(2590, 3110), desc: "Пси-собака" },
        { coords: convertCoords(2663, 3042), desc: "Пси-собака" },
        // Свалка
        { coords: convertCoords(1933, 2737), desc: "Пси-собака" },
        { coords: convertCoords(2109, 2799), desc: "Пси-собака" },
        { coords: convertCoords(2250, 2686), desc: "Пси-собака" },
        { coords: convertCoords(2203, 3133), desc: "Пси-собака" },
    ],

    // ==================== МУТАНТЫ: ПЛОТИ ====================
    flesh: [
        // Армейские склады
        { coords: convertCoords(3570, 2593), desc: "Плоти" },
        { coords: convertCoords(3710, 2998), desc: "Плоти" },
        { coords: convertCoords(3499, 2793), desc: "Плоти" },
        { coords: convertCoords(3528, 2668), desc: "Плоти" },
        { coords: convertCoords(3679, 3140), desc: "Плоти" },
        { coords: convertCoords(3681, 2894), desc: "Плоти" },
        // Муравейник
        { coords: convertCoords(2912, 3201), desc: "Плоти" },
        { coords: convertCoords(2967, 3246), desc: "Плоти" },
        { coords: convertCoords(2833, 3216), desc: "Плоти" },
        { coords: convertCoords(2667, 3436), desc: "Плоти" },
        { coords: convertCoords(3062, 3526), desc: "Плоти" },
        { coords: convertCoords(2762, 3216), desc: "Плоти" },
        { coords: convertCoords(2995, 3275), desc: "Плоти" },
        { coords: convertCoords(2702, 3170), desc: "Плоти" },
        { coords: convertCoords(2878, 3427), desc: "Плоти" },
        // Полесское
        { coords: convertCoords(3009, 2701), desc: "Плоти" },
        { coords: convertCoords(3192, 2644), desc: "Плоти" },
        { coords: convertCoords(3378, 2644), desc: "Плоти" },
        { coords: convertCoords(3186, 2852), desc: "Плоти" },
        // Поляна
        { coords: convertCoords(3031, 2448), desc: "Плоти" },
        { coords: convertCoords(3118, 2360), desc: "Плоти" },
        { coords: convertCoords(3073, 2430), desc: "Плоти" },
        { coords: convertCoords(2815, 2288), desc: "Плоти" },
        // Дикая территория
        { coords: convertCoords(2650, 2827), desc: "Плоти" },
        // Бар
        { coords: convertCoords(2547, 3150), desc: "Плоти" },
        // Свалка
        { coords: convertCoords(1995, 2758), desc: "Плоти" },
        { coords: convertCoords(2225, 2640), desc: "Плоти" },
        { coords: convertCoords(2346, 2974), desc: "Плоти" },
        { coords: convertCoords(2199, 2724), desc: "Плоти" },
        { coords: convertCoords(2086, 3121), desc: "Плоти" },
    ],

    // ==================== МУТАНТЫ: КАБАНЫ ====================
    boar: [
        // Армейские склады
        { coords: convertCoords(3500, 2791), desc: "Кабаны" },
        { coords: convertCoords(3735, 3062), desc: "Кабаны" },
        { coords: convertCoords(3591, 2886), desc: "Кабаны" },
        { coords: convertCoords(3670, 3112), desc: "Кабаны" },
        { coords: convertCoords(3570, 2598), desc: "Кабаны" },
        // Муравейник
        { coords: convertCoords(3077, 3496), desc: "Кабаны" },
        { coords: convertCoords(2832, 3218), desc: "Кабаны" },
        { coords: convertCoords(2665, 3471), desc: "Кабаны" },
        { coords: convertCoords(2993, 3156), desc: "Кабаны" },
        { coords: convertCoords(3012, 3543), desc: "Кабаны" },
        { coords: convertCoords(2843, 3451), desc: "Кабаны" },
        { coords: convertCoords(2689, 3199), desc: "Кабаны" },
        // Полесское
        { coords: convertCoords(3152, 2572), desc: "Кабаны" },
        { coords: convertCoords(3116, 2631), desc: "Кабаны" },
        { coords: convertCoords(3184, 2745), desc: "Кабаны" },
        { coords: convertCoords(3150, 2866), desc: "Кабаны" },
        { coords: convertCoords(3375, 2643), desc: "Кабаны" },
        // Поляна
        { coords: convertCoords(2951, 2550), desc: "Кабаны" },
        { coords: convertCoords(2924, 2277), desc: "Кабаны" },
        { coords: convertCoords(3053, 2290), desc: "Кабаны" },
        { coords: convertCoords(3118, 2363), desc: "Кабаны" },
        { coords: convertCoords(2888, 2538), desc: "Кабаны" },
        // Свалка
        { coords: convertCoords(2176, 2783), desc: "Кабаны" },
        { coords: convertCoords(2267, 3024), desc: "Кабаны" },
        { coords: convertCoords(2196, 2782), desc: "Кабаны" },
        { coords: convertCoords(2066, 2720), desc: "Кабаны" },
        { coords: convertCoords(1948, 2694), desc: "Кабаны" },
        { coords: convertCoords(2381, 3178), desc: "Кабаны" },
    ],

    // ==================== МУТАНТЫ: КРЫСЫ ====================
    rat: [

    ],

    // ==================== МУТАНТЫ: СНОРКИ ====================
    snork: [
        // Армейские склады
        { coords: convertCoords(3658, 3163), desc: "Снорки" },
        { coords: convertCoords(3590, 3183), desc: "Снорки" },
        { coords: convertCoords(3328, 2336), desc: "Снорки" },
        { coords: convertCoords(3626, 3140), desc: "Снорки" },
        { coords: convertCoords(3596, 3161), desc: "Снорки" },
        { coords: convertCoords(3572, 3081), desc: "Снорки" },
        { coords: convertCoords(3516, 3134), desc: "Снорки" },
        { coords: convertCoords(3491, 2992), desc: "Снорки" },
        { coords: convertCoords(3801, 2842), desc: "Снорки" },
        { coords: convertCoords(3789, 2840), desc: "Снорки" },
        { coords: convertCoords(3548, 2711), desc: "Снорки" },
        { coords: convertCoords(3637, 2566), desc: "Снорки" },
        { coords: convertCoords(3409, 2560), desc: "Снорки" },
        { coords: convertCoords(3569, 2525), desc: "Снорки" },
        { coords: convertCoords(3358, 2340), desc: "Снорки" },
        // Муравейник
        { coords: convertCoords(2713, 3475), desc: "Снорки" },
        { coords: convertCoords(2730, 3343), desc: "Снорки" },
        { coords: convertCoords(3004, 3379), desc: "Снорки" },
        { coords: convertCoords(2787, 3288), desc: "Снорки" },
        { coords: convertCoords(2945, 3362), desc: "Снорки" },
        { coords: convertCoords(2946, 3338), desc: "Снорки" },
        { coords: convertCoords(2947, 3491), desc: "Снорки" },
        { coords: convertCoords(2885, 3476), desc: "Снорки" },
        { coords: convertCoords(2791, 3498), desc: "Снорки" },
        { coords: convertCoords(3018, 3459), desc: "Снорки" },
        { coords: convertCoords(3017, 3488), desc: "Снорки" },
        { coords: convertCoords(2934, 3288), desc: "Снорки" },
        { coords: convertCoords(2702, 3369), desc: "Снорки" },
        { coords: convertCoords(2899, 3239), desc: "Снорки" },
        { coords: convertCoords(2746, 3450), desc: "Снорки" },
        { coords: convertCoords(2903, 3453), desc: "Снорки" },
        { coords: convertCoords(2865, 3282), desc: "Снорки" },
        { coords: convertCoords(2973, 3161), desc: "Снорки" },
        { coords: convertCoords(2751, 3403), desc: "Снорки" },
        // Полесское
        { coords: convertCoords(3352, 2504), desc: "Снорки" },
        { coords: convertCoords(3343, 2738), desc: "Снорки" },
        { coords: convertCoords(3277, 2544), desc: "Снорки" },
        { coords: convertCoords(3297, 2802), desc: "Снорки" },
        { coords: convertCoords(2992, 2744), desc: "Снорки" },
        // Поляна
        { coords: convertCoords(3000, 2266), desc: "Снорки" },
        { coords: convertCoords(3039, 2243), desc: "Снорки" },
        { coords: convertCoords(2864, 2434), desc: "Снорки" },
        // Янтарь
        { coords: convertCoords(2637, 1999), desc: "Снорки" },
        { coords: convertCoords(2700, 2135), desc: "Снорки" },
        { coords: convertCoords(2720, 2351), desc: "Снорки" },
        { coords: convertCoords(2693, 2372), desc: "Снорки" },
        { coords: convertCoords(2642, 2145), desc: "Снорки" },
        { coords: convertCoords(2639, 2055), desc: "Снорки" },
        { coords: convertCoords(2625, 2283), desc: "Снорки" },
        { coords: convertCoords(2616, 2344), desc: "Снорки" },
        { coords: convertCoords(2690, 2045), desc: "Снорки" },
        { coords: convertCoords(2670, 2058), desc: "Снорки" },
        { coords: convertCoords(2691, 2104), desc: "Снорки" },
        { coords: convertCoords(2651, 2435), desc: "Снорки" },
        { coords: convertCoords(2520, 2259), desc: "Снорки" },
        { coords: convertCoords(2697, 2329), desc: "Снорки" },
        { coords: convertCoords(2567, 1942), desc: "Снорки" },
        { coords: convertCoords(2696, 2359), desc: "Снорки" },
        { coords: convertCoords(2711, 2258), desc: "Снорки" },
        { coords: convertCoords(2690, 2341), desc: "Снорки" },
        { coords: convertCoords(2675, 2352), desc: "Снорки" },
        { coords: convertCoords(2687, 2289), desc: "Снорки" },
        { coords: convertCoords(2559, 2106), desc: "Снорки" },
        { coords: convertCoords(2637, 2378), desc: "Снорки" },
        // Дикая территория
        { coords: convertCoords(2767, 2683), desc: "Снорки" },
        { coords: convertCoords(2676, 2612), desc: "Снорки" },
        { coords: convertCoords(2716, 2792), desc: "Снорки" },
        { coords: convertCoords(2724, 2690), desc: "Снорки" },
        // Свалка
        { coords: convertCoords(2135, 3360), desc: "Снорки" },
        { coords: convertCoords(2194, 3483), desc: "Снорки" },
        { coords: convertCoords(2183, 2703), desc: "Снорки" },
        { coords: convertCoords(1962, 2811), desc: "Снорки" },
        { coords: convertCoords(2025, 2830), desc: "Снорки" },
        { coords: convertCoords(1962, 2841), desc: "Снорки" },
        { coords: convertCoords(2051, 2663), desc: "Снорки" },
        { coords: convertCoords(2031, 3490), desc: "Снорки" },
        { coords: convertCoords(2059, 3370), desc: "Снорки" },
        { coords: convertCoords(1983, 2610), desc: "Снорки" },
        { coords: convertCoords(1913, 2831), desc: "Снорки" },
        { coords: convertCoords(2047, 2595), desc: "Снорки" },
        { coords: convertCoords(2157, 3394), desc: "Снорки" },
        { coords: convertCoords(2103, 2737), desc: "Снорки" },
        { coords: convertCoords(2295, 3166), desc: "Снорки" },
        { coords: convertCoords(2078, 2787), desc: "Снорки" },
        { coords: convertCoords(2074, 3487), desc: "Снорки" },
        { coords: convertCoords(2038, 2740), desc: "Снорки" },
    ],

    // ==================== МУТАНТЫ: ЗОМБИ ====================
    zombie: [
        // Армейские склады
        { coords: convertCoords(3524, 2440), desc: "Зомби" },
        { coords: convertCoords(3513, 2426), desc: "Зомби" },
        { coords: convertCoords(3505, 2434), desc: "Зомби" },
        { coords: convertCoords(3504, 2407), desc: "Зомби" },
        { coords: convertCoords(3493, 2420), desc: "Зомби" },
        { coords: convertCoords(3481, 2436), desc: "Зомби" },
        { coords: convertCoords(3473, 2408), desc: "Зомби" },
        { coords: convertCoords(3461, 2423), desc: "Зомби" },
        { coords: convertCoords(3459, 2436), desc: "Зомби" },
        { coords: convertCoords(3443, 2450), desc: "Зомби" },
        { coords: convertCoords(3433, 2425), desc: "Зомби" },
        { coords: convertCoords(3422, 2440), desc: "Зомби" },
        { coords: convertCoords(3409, 2421), desc: "Зомби" },
        { coords: convertCoords(3396, 2404), desc: "Зомби" },
        { coords: convertCoords(3766, 3091), desc: "Зомби" },
        // Муравейник
        { coords: convertCoords(2765, 3237), desc: "Зомби" },
        { coords: convertCoords(2838, 3527), desc: "Зомби" },
        { coords: convertCoords(2738, 3192), desc: "Зомби" },
        { coords: convertCoords(2715, 3213), desc: "Зомби" },
        { coords: convertCoords(3061, 3414), desc: "Зомби" },
        { coords: convertCoords(2769, 3372), desc: "Зомби" },
        { coords: convertCoords(3066, 3452), desc: "Зомби" },
        { coords: convertCoords(3080, 3450), desc: "Зомби" },
        { coords: convertCoords(2745, 3229), desc: "Зомби" },
        // Полесское
        { coords: convertCoords(3289, 2614), desc: "Зомби" },
        // Поляна
        { coords: convertCoords(3102, 2445), desc: "Зомби" },
        // Янтарь
        { coords: convertCoords(2702, 2224), desc: "Зомби" },
        { coords: convertCoords(2758, 2292), desc: "Зомби" },
        // Свалка
        { coords: convertCoords(2027, 3304), desc: "Зомби" },
        { coords: convertCoords(2029, 3406), desc: "Зомби" },
        { coords: convertCoords(2099, 3424), desc: "Зомби" },
        { coords: convertCoords(2031, 3509), desc: "Зомби" },
        { coords: convertCoords(2140, 3416), desc: "Зомби" },
        { coords: convertCoords(2132, 3506), desc: "Зомби" },
        { coords: convertCoords(2112, 3405), desc: "Зомби" },
        { coords: convertCoords(2123, 2879), desc: "Зомби" },
        { coords: convertCoords(2058, 3278), desc: "Зомби" },
        { coords: convertCoords(2042, 3449), desc: "Зомби" },
        { coords: convertCoords(1941, 2812), desc: "Зомби" },
        { coords: convertCoords(2092, 3500), desc: "Зомби" },
        { coords: convertCoords(2144, 2687), desc: "Зомби" },
        { coords: convertCoords(1950, 2777), desc: "Зомби" },
        { coords: convertCoords(2127, 3438), desc: "Зомби" },
        { coords: convertCoords(1966, 2786), desc: "Зомби" },
        { coords: convertCoords(2046, 3391), desc: "Зомби" },
        { coords: convertCoords(2037, 3340), desc: "Зомби" },
        { coords: convertCoords(2078, 3387), desc: "Зомби" },
        { coords: convertCoords(2087, 3461), desc: "Зомби" },
        { coords: convertCoords(2135, 3468), desc: "Зомби" },
    ],

    // ==================== МУТАНТЫ: КРОВОСОСЫ ====================
    bloodsucker: [
        // Армейские склады
        { coords: convertCoords(3690, 2913), desc: "Кровосос" },
        { coords: convertCoords(3679, 2708), desc: "Кровосос" },
        { coords: convertCoords(3674, 2724), desc: "Кровосос" },
        { coords: convertCoords(3669, 2733), desc: "Кровосос" },
        { coords: convertCoords(3669, 2980), desc: "Кровосос" },
        { coords: convertCoords(3659, 2689), desc: "Кровосос" },
        { coords: convertCoords(3646, 2708), desc: "Кровосос" },
        { coords: convertCoords(3644, 2919), desc: "Кровосос" },
        { coords: convertCoords(3641, 2931), desc: "Кровосос" },
        { coords: convertCoords(3639, 2954), desc: "Кровосос" },
        { coords: convertCoords(3531, 2531), desc: "Кровосос" },
        { coords: convertCoords(3529, 3149), desc: "Кровосос" },
        { coords: convertCoords(3785, 2739), desc: "Кровосос" },
        { coords: convertCoords(3624, 2680), desc: "Кровосос" },
        // Муравейник
        { coords: convertCoords(2711, 3544), desc: "Кровосос" },
        { coords: convertCoords(2698, 3560), desc: "Кровосос" },
        { coords: convertCoords(3053, 3363), desc: "Кровосос" },
        { coords: convertCoords(2891, 3506), desc: "Кровосос" },
        { coords: convertCoords(2725, 3538), desc: "Кровосос" },
        { coords: convertCoords(2718, 3562), desc: "Кровосос" },
        { coords: convertCoords(2730, 3563), desc: "Кровосос" },
        { coords: convertCoords(2833, 3539), desc: "Кровосос" },
        { coords: convertCoords(2944, 3187), desc: "Кровосос" },
        { coords: convertCoords(2966, 3225), desc: "Кровосос" },
        // Полесское
        { coords: convertCoords(3269, 2784), desc: "Кровосос" },
        { coords: convertCoords(3081, 2744), desc: "Кровосос" },
        { coords: convertCoords(3300, 2772), desc: "Кровосос" },
        // Поляна
        { coords: convertCoords(3039, 2388), desc: "Кровосос" },
        { coords: convertCoords(2946, 2514), desc: "Кровосос" },
        { coords: convertCoords(3095, 2393), desc: "Кровосос" },
        { coords: convertCoords(3080, 2370), desc: "Кровосос" },
        { coords: convertCoords(2787, 2339), desc: "Кровосос" },
        // Янтарь
        { coords: convertCoords(2719, 2112), desc: "Кровосос" },
        { coords: convertCoords(2554, 2033), desc: "Кровосос" },
        { coords: convertCoords(2652, 2044), desc: "Кровосос" },
        { coords: convertCoords(2735, 2100), desc: "Кровосос" },
        { coords: convertCoords(2702, 2317), desc: "Кровосос" },
        { coords: convertCoords(2639, 2377), desc: "Кровосос" },
        // Дикая территория
        { coords: convertCoords(2740, 2767), desc: "Кровосос" },
        { coords: convertCoords(2754, 2860), desc: "Кровосос" },
        { coords: convertCoords(2774, 2842), desc: "Кровосос" },
        // Бар
        { coords: convertCoords(2504, 3194), desc: "Кровосос" },
        // Свалка
        { coords: convertCoords(1899, 2788), desc: "Кровосос" },
        { coords: convertCoords(2161, 2763), desc: "Кровосос" },
        { coords: convertCoords(2243, 2866), desc: "Кровосос" },
        { coords: convertCoords(2159, 2744), desc: "Кровосос" },
        { coords: convertCoords(1950, 2802), desc: "Кровосос" },
        { coords: convertCoords(2291, 2907), desc: "Кровосос" },
        { coords: convertCoords(2141, 2769), desc: "Кровосос" },
        { coords: convertCoords(2109, 3477), desc: "Кровосос" },
    ],

    // ==================== МУТАНТЫ: МАТЁРЫЕ КРОВОСОСЫ ====================
    bloodsucker_strong: [
        // Армейские склады
        { coords: convertCoords(3640, 2737), desc: "Матёрый кровосос" },
        { coords: convertCoords(3788, 2741), desc: "Матёрый кровосос" },
        { coords: convertCoords(3727, 2633), desc: "Матёрый кровосос" },
        { coords: convertCoords(3631, 2717), desc: "Матёрый кровосос" },
        // Муравейник
        { coords: convertCoords(2853, 3410), desc: "Матёрый кровосос" },
        { coords: convertCoords(2691, 3550), desc: "Матёрый кровосос" },
        { coords: convertCoords(2750, 3419), desc: "Матёрый кровосос" },
        // Полесское
        { coords: convertCoords(3358, 2801), desc: "Матёрый кровосос" },
        // Поляна
        { coords: convertCoords(3024, 2401), desc: "Матёрый кровосос" },
        { coords: convertCoords(3076, 2407), desc: "Матёрый кровосос" },
        // Янтарь
        { coords: convertCoords(2731, 2293), desc: "Матёрый кровосос" },
        { coords: convertCoords(2715, 2090), desc: "Матёрый кровосос" },
        // Дикая территория
        { coords: convertCoords(2709, 2610), desc: "Матёрый кровосос" },
        { coords: convertCoords(2759, 2620), desc: "Матёрый кровосос" },
    ],

    // ==================== МУТАНТЫ: ХИМЕРЫ ====================
    chimera: [
        // Армейские склады
        { coords: convertCoords(3343, 2326), desc: "Химера" },
        { coords: convertCoords(3763, 2969), desc: "Химера" },
        { coords: convertCoords(3730, 2690), desc: "Химера" },
        { coords: convertCoords(3770, 3161), desc: "Химера" },
        // Муравейник
        { coords: convertCoords(2712, 3247), desc: "Химера" },
        { coords: convertCoords(2925, 3547), desc: "Химера" },
        // Полесское
        { coords: convertCoords(3294, 2702), desc: "Химера" },
        // Поляна
        { coords: convertCoords(2831, 2384), desc: "Химера" },
        // Янтарь
        { coords: convertCoords(2546, 2206), desc: "Химера" },
    ],

    // ==================== МУТАНТЫ: КОНТРОЛЁР ====================
    controller: [
        // Армейские склады
        { coords: convertCoords(3698, 2926), desc: "Контролёр" },
        { coords: convertCoords(3476, 2413), desc: "Контролёр" },
        { coords: convertCoords(3762, 3088), desc: "Контролёр" },
        { coords: convertCoords(3676, 2705), desc: "Контролёр" },
        // Муравейник
        { coords: convertCoords(2771, 3372), desc: "Контролёр" },
        { coords: convertCoords(2847, 3523), desc: "Контролёр" },
        { coords: convertCoords(3063, 3438), desc: "Контролёр" },
        { coords: convertCoords(2747, 3234), desc: "Контролёр" },
    ],

    // ==================== НПС: ЗОМБИРОВАННЫЕ ====================
    zombified: [
        // Муравейник
        { coords: convertCoords(2832, 3422), desc: "Зомбированный" },
        { coords: convertCoords(2841, 3418), desc: "Зомбированный" },
        { coords: convertCoords(2842, 3544), desc: "Зомбированный" },
        { coords: convertCoords(2832, 3419), desc: "Зомбированный" },
        { coords: convertCoords(2832, 3542), desc: "Зомбированный" },
        { coords: convertCoords(2834, 3413), desc: "Зомбированный" },
        { coords: convertCoords(2836, 3421), desc: "Зомбированный" },
        { coords: convertCoords(2833, 3537), desc: "Зомбированный" },
        { coords: convertCoords(2844, 3413), desc: "Зомбированный" },
        { coords: convertCoords(2852, 3527), desc: "Зомбированный" },
        { coords: convertCoords(2828, 3543), desc: "Зомбированный" },
        { coords: convertCoords(2842, 3532), desc: "Зомбированный" },
        { coords: convertCoords(2836, 3417), desc: "Зомбированный" },
        { coords: convertCoords(2856, 3529), desc: "Зомбированный" },
        { coords: convertCoords(3052, 3435), desc: "Зомбированный" },
        { coords: convertCoords(2839, 3523), desc: "Зомбированный" },
        { coords: convertCoords(2837, 3416), desc: "Зомбированный" },
        { coords: convertCoords(2843, 3404), desc: "Зомбированный" },
        { coords: convertCoords(2827, 3520), desc: "Зомбированный" },
        { coords: convertCoords(2846, 3417), desc: "Зомбированный" },
        { coords: convertCoords(2856, 3528), desc: "Зомбированный" },
        { coords: convertCoords(2844, 3526), desc: "Зомбированный" },
        { coords: convertCoords(2841, 3404), desc: "Зомбированный" },
        { coords: convertCoords(2854, 3524), desc: "Зомбированный" },
        { coords: convertCoords(2856, 3530), desc: "Зомбированный" },
        { coords: convertCoords(3057, 3428), desc: "Зомбированный" },
        { coords: convertCoords(3057, 3444), desc: "Зомбированный" },
        { coords: convertCoords(2835, 3516), desc: "Зомбированный" },
        // Поляна
        { coords: convertCoords(2873, 2303), desc: "Зомбированный" },
        { coords: convertCoords(2860, 2296), desc: "Зомбированный" },
        { coords: convertCoords(2858, 2302), desc: "Зомбированный" },
        { coords: convertCoords(2853, 2302), desc: "Зомбированный" },
        { coords: convertCoords(2855, 2304), desc: "Зомбированный" },
        { coords: convertCoords(2865, 2303), desc: "Зомбированный" },
        { coords: convertCoords(2865, 2300), desc: "Зомбированный" },
        { coords: convertCoords(2856, 2304), desc: "Зомбированный" },
        { coords: convertCoords(2854, 2302), desc: "Зомбированный" },
        // Янтарь
        { coords: convertCoords(2699, 2307), desc: "Зомбированный" },
        { coords: convertCoords(2700, 2241), desc: "Зомбированный" },
        { coords: convertCoords(2623, 2289), desc: "Зомбированный" },
        { coords: convertCoords(2702, 2325), desc: "Зомбированный" },
        { coords: convertCoords(2728, 2362), desc: "Зомбированный" },
        { coords: convertCoords(2726, 2208), desc: "Зомбированный" },
        { coords: convertCoords(2719, 2210), desc: "Зомбированный" },
        { coords: convertCoords(2695, 2203), desc: "Зомбированный" },
        { coords: convertCoords(2703, 2211), desc: "Зомбированный" },
        { coords: convertCoords(2700, 2211), desc: "Зомбированный" },
        { coords: convertCoords(2695, 2205), desc: "Зомбированный" },
        { coords: convertCoords(2727, 2356), desc: "Зомбированный" },
        { coords: convertCoords(2673, 2350), desc: "Зомбированный" },
        { coords: convertCoords(2698, 2203), desc: "Зомбированный" },
        { coords: convertCoords(2695, 2285), desc: "Зомбированный" },
        { coords: convertCoords(2557, 2106), desc: "Зомбированный" },
        { coords: convertCoords(2613, 2240), desc: "Зомбированный" },
        { coords: convertCoords(2726, 2350), desc: "Зомбированный" },
        { coords: convertCoords(2693, 2333), desc: "Зомбированный" },
        { coords: convertCoords(2623, 2294), desc: "Зомбированный" },
        { coords: convertCoords(2712, 2342), desc: "Зомбированный" },
        { coords: convertCoords(2608, 2248), desc: "Зомбированный" },
        { coords: convertCoords(2715, 2375), desc: "Зомбированный" },
        { coords: convertCoords(2703, 2334), desc: "Зомбированный" },
        { coords: convertCoords(2695, 2031), desc: "Зомбированный" },
        { coords: convertCoords(2686, 2322), desc: "Зомбированный" },
        { coords: convertCoords(2683, 2330), desc: "Зомбированный" },
        { coords: convertCoords(2699, 2326), desc: "Зомбированный" },
        { coords: convertCoords(2714, 2251), desc: "Зомбированный" },
        { coords: convertCoords(2694, 2207), desc: "Зомбированный" },
        { coords: convertCoords(2703, 2224), desc: "Зомбированный" },
        { coords: convertCoords(2703, 2262), desc: "Зомбированный" },
        { coords: convertCoords(2706, 2350), desc: "Зомбированный" },
        { coords: convertCoords(2569, 2117), desc: "Зомбированный" },
        { coords: convertCoords(2570, 2116), desc: "Зомбированный" },
        { coords: convertCoords(2721, 2204), desc: "Зомбированный" },
        { coords: convertCoords(2711, 2342), desc: "Зомбированный" },
        { coords: convertCoords(2622, 2291), desc: "Зомбированный" },
        { coords: convertCoords(2692, 2333), desc: "Зомбированный" },
        { coords: convertCoords(2701, 2211), desc: "Зомбированный" },
        { coords: convertCoords(2685, 2367), desc: "Зомбированный" },
        { coords: convertCoords(2686, 2368), desc: "Зомбированный" },
        { coords: convertCoords(2718, 2211), desc: "Зомбированный" },
        { coords: convertCoords(2723, 2347), desc: "Зомбированный" },
        { coords: convertCoords(2708, 2253), desc: "Зомбированный" },
        { coords: convertCoords(2710, 2343), desc: "Зомбированный" },
        { coords: convertCoords(2688, 2329), desc: "Зомбированный" },
        { coords: convertCoords(2612, 2251), desc: "Зомбированный" },
        { coords: convertCoords(2695, 2222), desc: "Зомбированный" },
        { coords: convertCoords(2707, 2318), desc: "Зомбированный" },
        { coords: convertCoords(2650, 2095), desc: "Зомбированный" },
        { coords: convertCoords(2713, 2376), desc: "Зомбированный" },
        { coords: convertCoords(2701, 2237), desc: "Зомбированный" },
        { coords: convertCoords(2696, 2308), desc: "Зомбированный" },
        { coords: convertCoords(2621, 2294), desc: "Зомбированный" },
        { coords: convertCoords(2686, 2366), desc: "Зомбированный" },
        { coords: convertCoords(2687, 2333), desc: "Зомбированный" },
        { coords: convertCoords(2698, 2324), desc: "Зомбированный" },
        { coords: convertCoords(2721, 2207), desc: "Зомбированный" },
        // Свалка
        { coords: convertCoords(2340, 2924), desc: "Зомбированный" },
        { coords: convertCoords(2346, 2925), desc: "Зомбированный" },
        { coords: convertCoords(2336, 2917), desc: "Зомбированный" },
    ],

    // ==================== НПС: СКОПЛЕНИЕ ЗОМБИРОВАННЫХ ====================
    zombified_cluster: [
        // Армейские склады
        {
            coords: convertCoords(3633, 2708),
            desc: "Скопление зомбированных",
            image: "images/NPC/zombified_cluster/zombified_cluster_1.jpg",
            extended: {
                image: "images/NPC/zombified_cluster/zombified_cluster_1.jpg",
                description: {
                    ru: "Скопление зомбированных в автотранспортном цехе.",
                    en: "Cluster of zombified stalkers in the vehicle workshop."
                },
                rewards: ['anomaly_filter']
            }
        },
        {
            coords: convertCoords(3648, 2733),
            desc: "Скопление зомбированных",
            image: "images/NPC/zombified_cluster/zombified_cluster_2.jpg",
            extended: {
                image: "images/NPC/zombified_cluster/zombified_cluster_2.jpg",
                description: {
                    ru: "Скопление зомбированных в административно-бытовом корпусе.",
                    en: "Cluster of zombified stalkers in the administrative building."
                },
                rewards: ['anomaly_filter']
            }
        },
        {
            coords: convertCoords(3567, 3088),
            desc: "Скопление зомбированных",
            image: "images/NPC/zombified_cluster/zombified_cluster_3.jpg",
            extended: {
                image: "images/NPC/zombified_cluster/zombified_cluster_3.jpg",
                description: {
                    ru: "Скопление зомбированных у КПП военной базы.",
                    en: "Cluster of zombified stalkers near the military base checkpoint."
                },
                rewards: ['anomaly_filter']
            }
        },
        {
            coords: convertCoords(3493, 2428),
            desc: "Скопление зомбированных",
            image: "images/NPC/zombified_cluster/zombified_cluster_4.jpg",
            extended: {
                image: "images/NPC/zombified_cluster/zombified_cluster_4.jpg",
                description: {
                    ru: "Скопление зомбированных в центре деревни.",
                    en: "Cluster of zombified stalkers in the village center."
                },
                rewards: ['anomaly_filter']
            }
        },
        {
            coords: convertCoords(3418, 2423),
            desc: "Скопление зомбированных",
            image: "images/NPC/zombified_cluster/zombified_cluster_5.jpg",
            extended: {
                image: "images/NPC/zombified_cluster/zombified_cluster_5.jpg",
                description: {
                    ru: "Скопление зомбированных в южном доме.",
                    en: "Cluster of zombified stalkers in the southern house."
                },
                rewards: ['anomaly_filter']
            }
        },
        {
            coords: convertCoords(3528, 2878),
            desc: "Скопление зомбированных",
            image: "images/NPC/zombified_cluster/zombified_cluster_6.jpg",
            extended: {
                image: "images/NPC/zombified_cluster/zombified_cluster_6.jpg",
                description: {
                    ru: "Скопление зомбированных у вагонов.",
                    en: "Cluster of zombified stalkers near the train cars."
                },
                rewards: ['anomaly_filter']
            }
        },
        {
            coords: convertCoords(3498, 3168),
            desc: "Скопление зомбированных",
            image: "images/NPC/zombified_cluster/zombified_cluster_7.jpg",
            extended: {
                image: "images/NPC/zombified_cluster/zombified_cluster_7.jpg",
                description: {
                    ru: "Скопление зомбированных у перехода на Муравейник.",
                    en: "Cluster of zombified stalkers near the passage to the Anthill."
                },
                rewards: ['anomaly_filter']
            }
        },
        {
            coords: convertCoords(3512, 2754),
            desc: "Скопление зомбированных",
            image: "images/NPC/zombified_cluster/zombified_cluster_8.jpg",
            extended: {
                image: "images/NPC/zombified_cluster/zombified_cluster_8.jpg",
                description: {
                    ru: "Скопление зомбированных в ангаре.",
                    en: "Cluster of zombified stalkers in the hangar."
                },
                rewards: ['anomaly_filter']
            }
        },
        {
            coords: convertCoords(3550, 2633),
            desc: "Скопление зомбированных",
            image: "images/NPC/zombified_cluster/zombified_cluster_9.jpg",
            extended: {
                image: "images/NPC/zombified_cluster/zombified_cluster_9.jpg",
                description: {
                    ru: "Скопление зомбированных на заправке.",
                    en: "Cluster of zombified stalkers at the gas station."
                },
                rewards: ['anomaly_filter']
            }
        }
    ],

    stalkers: [
        // Дикая территория
        { coords: convertCoords(2796, 2837), desc: "Маклак" },
    ],

    // ==================== НПС: ГРЕШНИКИ (ОРДЕН) ====================
    sinner: [
        // Полесское
        { coords: convertCoords(2988, 2785), desc: "Грешник" },
        { coords: convertCoords(2992, 2792), desc: "Грешник" },
        { coords: convertCoords(2991, 2796), desc: "Грешник" },
        { coords: convertCoords(2989, 2786), desc: "Грешник" },
        { coords: convertCoords(2989, 2794), desc: "Грешник" },
        { coords: convertCoords(2988, 2801), desc: "Грешник" },
        { coords: convertCoords(2987, 2799), desc: "Грешник" },
        { coords: convertCoords(2984, 2792), desc: "Грешник" },
        { coords: convertCoords(2985, 2763), desc: "Грешник" },
        { coords: convertCoords(2984, 2796), desc: "Грешник" },
        { coords: convertCoords(2987, 2792), desc: "Грешник" },
        { coords: convertCoords(2984, 2768), desc: "Грешник" },
        { coords: convertCoords(2983, 2763), desc: "Грешник" },
    ],

    // ==================== НПС: БАНДИТЫ ====================
    bandits: [
        // Полесское
        { coords: convertCoords(3067, 2838), desc: "Мародеры" },
        { coords: convertCoords(3047, 2841), desc: "Мародеры" },
        { coords: convertCoords(3061, 2812), desc: "Мародеры" },
        { coords: convertCoords(3060, 2812), desc: "Мародеры" },
        { coords: convertCoords(3055, 2833), desc: "Мародеры" },
        { coords: convertCoords(3067, 2778), desc: "Мародеры" },
        { coords: convertCoords(3059, 2843), desc: "Мародеры" },
        { coords: convertCoords(3042, 2840), desc: "Мародеры" },
        { coords: convertCoords(3052, 2850), desc: "Мародеры" },
        { coords: convertCoords(3051, 2847), desc: "Мародеры" },
        { coords: convertCoords(3062, 2839), desc: "Мародеры" },
        { coords: convertCoords(3062, 2840), desc: "Мародеры" },
        { coords: convertCoords(3042, 2837), desc: "Мародеры" },
        { coords: convertCoords(3055, 2834), desc: "Мародеры" },
        { coords: convertCoords(3064, 2838), desc: "Варг" },
        { coords: convertCoords(3067, 2837), desc: "Шпиц" },
        // Поляна
        { coords: convertCoords(2954, 2331), desc: "Ренегат" },
        { coords: convertCoords(2917, 2429), desc: "Ренегат" },
        { coords: convertCoords(2919, 2443), desc: "Ренегат" },
        { coords: convertCoords(3030, 2325), desc: "Ренегат" },
        { coords: convertCoords(2956, 2331), desc: "Ренегат" },
        { coords: convertCoords(3028, 2327), desc: "Ренегат" },
        { coords: convertCoords(2919, 2426), desc: "Ренегат" },
        { coords: convertCoords(3027, 2324), desc: "Ренегат" },
        // Янтарь
        { coords: convertCoords(2723, 2294), desc: "Бандит" },
        { coords: convertCoords(2722, 2294), desc: "Бандит" },
        { coords: convertCoords(2723, 2295), desc: "Бандит" },
        // Дикая территория
        { coords: convertCoords(2748, 2808), desc: "Бандит" },
        { coords: convertCoords(2691, 2826), desc: "Бандит" },
        { coords: convertCoords(2640, 2623), desc: "Бандит" },
        { coords: convertCoords(2736, 2686), desc: "Бандит" },
        { coords: convertCoords(2736, 2699), desc: "Бандит" },
        { coords: convertCoords(2745, 2816), desc: "Бандит" },
        { coords: convertCoords(2785, 2840), desc: "Бандит" },
        { coords: convertCoords(2639, 2636), desc: "Бандит" },
        { coords: convertCoords(2744, 2808), desc: "Бандит" },
        { coords: convertCoords(2743, 2819), desc: "Бандит" },
        { coords: convertCoords(2731, 2694), desc: "Бандит" },
        { coords: convertCoords(2694, 2819), desc: "Бандит" },
        { coords: convertCoords(2736, 2705), desc: "Бандит" },
        { coords: convertCoords(2758, 2696), desc: "Бандит" },
        { coords: convertCoords(2695, 2819), desc: "Бандит" },
        { coords: convertCoords(2751, 2701), desc: "Бандит" },
        { coords: convertCoords(2785, 2841), desc: "Бандит" },
        { coords: convertCoords(2695, 2818), desc: "Бандит" },
        { coords: convertCoords(2750, 2821), desc: "Бандит" },
        { coords: convertCoords(2639, 2622), desc: "Бандит" },
        { coords: convertCoords(2754, 2826), desc: "Бандит" },
        { coords: convertCoords(2640, 2622), desc: "Бандит" },
        { coords: convertCoords(2746, 2707), desc: "Бандит" },
        { coords: convertCoords(2786, 2840), desc: "Бандит" },
        // Свалка
        { coords: convertCoords(2008, 2691), desc: "Бандит" },
        { coords: convertCoords(2053, 3086), desc: "Бандит" },
        { coords: convertCoords(2023, 2778), desc: "Бандит" },
        { coords: convertCoords(2229, 2940), desc: "Бандит" },
        { coords: convertCoords(2159, 3108), desc: "Бандит" },
        { coords: convertCoords(2011, 2691), desc: "Бандит" },
        { coords: convertCoords(2047, 3087), desc: "Бандит" },
        { coords: convertCoords(2223, 2934), desc: "Бандит" },
        { coords: convertCoords(2009, 2693), desc: "Бандит" },
        { coords: convertCoords(2010, 2688), desc: "Бандит" },
        { coords: convertCoords(2331, 3052), desc: "Бандит" },
        { coords: convertCoords(2007, 2691), desc: "Бандит" },
        { coords: convertCoords(2329, 3051), desc: "Бандит" },
        { coords: convertCoords(2056, 3002), desc: "Бандит" },
        { coords: convertCoords(2053, 3085), desc: "Бандит" },
        { coords: convertCoords(2042, 2798), desc: "Бандит" },
        { coords: convertCoords(2043, 2799), desc: "Бандит" },
        { coords: convertCoords(2155, 3105), desc: "Бандит" },
        { coords: convertCoords(2026, 2778), desc: "Бандит" },
        { coords: convertCoords(2015, 2718), desc: "Бандит" },
        { coords: convertCoords(2157, 3111), desc: "Бандит" },
        { coords: convertCoords(2012, 2717), desc: "Бандит" },
        { coords: convertCoords(2002, 2697), desc: "Бандит" },
        { coords: convertCoords(2333, 3052), desc: "Бандит" },
        { coords: convertCoords(2052, 2994), desc: "Бандит" },
        { coords: convertCoords(2059, 3016), desc: "Бандит" },
        { coords: convertCoords(2220, 2940), desc: "Бандит" },
        { coords: convertCoords(2330, 3054), desc: "Бандит" },
        { coords: convertCoords(2013, 2690), desc: "Бандит" },
        { coords: convertCoords(2153, 3111), desc: "Бандит" },
        { coords: convertCoords(2152, 3107), desc: "Бандит" },
        { coords: convertCoords(2225, 2939), desc: "Бандит" },
        { coords: convertCoords(2057, 3091), desc: "Бандит" },
        { coords: convertCoords(2010, 2689), desc: "Бандит" },
    ],

    // ==================== НПС: МОНОЛИТ / АПОСТАТЫ ====================
    monolith: [
        // Поляна
        { coords: convertCoords(2933, 2541), desc: "Апостат" },
        { coords: convertCoords(2856, 2389), desc: "Апостат" },
        { coords: convertCoords(2841, 2403), desc: "Апостат" },
        { coords: convertCoords(2857, 2402), desc: "Апостат" },
        { coords: convertCoords(2852, 2401), desc: "Апостат" },
        { coords: convertCoords(2847, 2411), desc: "Апостат" },
        { coords: convertCoords(2845, 2352), desc: "Апостат" },
        { coords: convertCoords(2942, 2554), desc: "Апостат" },
        { coords: convertCoords(2852, 2397), desc: "Апостат" },
        { coords: convertCoords(2860, 2402), desc: "Апостат" },
        { coords: convertCoords(2860, 2397), desc: "Апостат" },
        { coords: convertCoords(2860, 2395), desc: "Апостат" },
        { coords: convertCoords(2942, 2551), desc: "Апостат" },
        { coords: convertCoords(2942, 2543), desc: "Апостат" },
        { coords: convertCoords(2849, 2415), desc: "Апостат" },
        { coords: convertCoords(2844, 2352), desc: "Апостат" },
        { coords: convertCoords(2852, 2397), desc: "Апостат" },
        { coords: convertCoords(2847, 2385), desc: "Апостат" },
        { coords: convertCoords(2860, 2395), desc: "Апостат" },
        { coords: convertCoords(2846, 2402), desc: "Апостат" },
        { coords: convertCoords(2849, 2416), desc: "Апостат" },
        { coords: convertCoords(2860, 2397), desc: "Апостат" },
        { coords: convertCoords(2932, 2541), desc: "Апостат" },
        { coords: convertCoords(2932, 2540), desc: "Апостат" },
        { coords: convertCoords(2843, 2353), desc: "Апостат" },
        { coords: convertCoords(2860, 2397), desc: "Апостат" },
        { coords: convertCoords(2852, 2391), desc: "Апостат" },
        { coords: convertCoords(2860, 2393), desc: "Апостат" },
        { coords: convertCoords(2924, 2553), desc: "Апостат" },
        { coords: convertCoords(2860, 2402), desc: "Апостат" },
        // Архонт
        { coords: convertCoords(2856, 2393), desc: "Архонт" },
    ],

    // ==================== НПС: НАЁМНИКИ / ЧВК «АСГАРД» ====================
    mercenary: [
        // Поляна
        { coords: convertCoords(3261, 2458), desc: "ЧВК «Асгард»" },
        { coords: convertCoords(3238, 2456), desc: "ЧВК «Асгард»" },
        { coords: convertCoords(3263, 2459), desc: "ЧВК «Асгард»" },
        { coords: convertCoords(3275, 2457), desc: "ЧВК «Асгард»" },
        { coords: convertCoords(3264, 2456), desc: "ЧВК «Асгард»" },
        { coords: convertCoords(3269, 2457), desc: "ЧВК «Асгард»" },
        { coords: convertCoords(3272, 2463), desc: "ЧВК «Асгард»" },
        { coords: convertCoords(3270, 2460), desc: "ЧВК «Асгард»" },
        { coords: convertCoords(3150, 2449), desc: "ЧВК «Асгард»" },
        // Акбар
        { coords: convertCoords(3269, 2453), desc: "Акбар" },
        // Дикая территория
        { coords: convertCoords(2720, 2817), desc: "Наёмник" },
        { coords: convertCoords(2834, 2789), desc: "Наёмник" },
        { coords: convertCoords(2836, 2790), desc: "Наёмник" },
        { coords: convertCoords(2719, 2818), desc: "Наёмник" },
        { coords: convertCoords(2835, 2790), desc: "Наёмник" },
    ],

    // ==================== НПС: СТОЯНКА БАНДИТОВ ====================
    bandit_camp: [
        // Дикая территория
        {
            coords: convertCoords(2627, 2643),
            desc: "Стоянка бандитов",
            image: "images/NPC/bandit_camp/wt_camp_1.jpg",
            extended: {
                image: "images/NPC/bandit_camp/wt_camp_1.jpg",
                description: {
                    ru: "Это скопление врагов, за зачистку которого вы получите припасы.",
                    en: "This is a cluster of enemies, for clearing which you will receive supplies."
                },
                rewards: ['anomaly_detector']
            }
        },
        {
            coords: convertCoords(2830, 2773),
            desc: "Стоянка бандитов",
            image: "images/NPC/bandit_camp/wt_camp_2.jpg",
            extended: {
                image: "images/NPC/bandit_camp/wt_camp_2.jpg",
                description: {
                    ru: "Это скопление врагов, за зачистку которого вы получите припасы.",
                    en: "This is a cluster of enemies, for clearing which you will receive supplies."
                },
                rewards: ['anomaly_detector']
            }
        },
        {
            coords: convertCoords(2637, 2628),
            desc: "Стоянка бандитов",
            image: "images/NPC/bandit_camp/wt_camp_3.jpg",
            extended: {
                image: "images/NPC/bandit_camp/wt_camp_3.jpg",
                description: {
                    ru: "Это скопление врагов, за зачистку которого вы получите припасы.",
                    en: "This is a cluster of enemies, for clearing which you will receive supplies."
                },
                rewards: ['anomaly_detector']
            }
        },
        {
            coords: convertCoords(2692, 2808),
            desc: "Стоянка бандитов",
            image: "images/NPC/bandit_camp/wt_camp_4.jpg",
            extended: {
                image: "images/NPC/bandit_camp/wt_camp_4.jpg",
                description: {
                    ru: "Это скопление врагов, за зачистку которого вы получите припасы.",
                    en: "This is a cluster of enemies, for clearing which you will receive supplies."
                },
                rewards: ['anomaly_detector']
            }
        },
        {
            coords: convertCoords(2815, 2858),
            desc: "Стоянка бандитов",
            image: "images/NPC/bandit_camp/wt_camp_5.jpg",
            extended: {
                image: "images/NPC/bandit_camp/wt_camp_5.jpg",
                description: {
                    ru: "Это скопление врагов, за зачистку которого вы получите припасы.",
                    en: "This is a cluster of enemies, for clearing which you will receive supplies."
                },
                rewards: ['anomaly_detector']
            }
        },
        {
            coords: convertCoords(2787, 2620),
            desc: "Стоянка бандитов",
            image: "images/NPC/bandit_camp/wt_camp_6.jpg",
            extended: {
                image: "images/NPC/bandit_camp/wt_camp_6.jpg",
                description: {
                    ru: "Это скопление врагов, за зачистку которого вы получите припасы.",
                    en: "This is a cluster of enemies, for clearing which you will receive supplies."
                },
                rewards: ['anomaly_detector']
            }
        },
        {
            coords: convertCoords(2720, 2748),
            desc: "Стоянка бандитов",
            image: "images/NPC/bandit_camp/wt_camp_7.jpg",
            extended: {
                image: "images/NPC/bandit_camp/wt_camp_7.jpg",
                description: {
                    ru: "Это скопление врагов, за зачистку которого вы получите припасы.",
                    en: "This is a cluster of enemies, for clearing which you will receive supplies."
                },
                rewards: ['anomaly_detector']
            }
        },
        {
            coords: convertCoords(2795, 2708),
            desc: "Стоянка бандитов",
            image: "images/NPC/bandit_camp/wt_camp_8.jpg",
            extended: {
                image: "images/NPC/bandit_camp/wt_camp_8.jpg",
                description: {
                    ru: "Это скопление врагов, за зачистку которого вы получите припасы.",
                    en: "This is a cluster of enemies, for clearing which you will receive supplies."
                },
                rewards: ['anomaly_detector']
            }
        }
    ],

    // ==================== НПС: ВОЕННЫЕ ====================
    military: [
        // Дикая территория
        { coords: convertCoords(2691, 2656), desc: "Военный" },
        { coords: convertCoords(2706, 2677), desc: "Военный" },
        { coords: convertCoords(2782, 2736), desc: "Военный" },
        { coords: convertCoords(2688, 2660), desc: "Военный" },
        { coords: convertCoords(2695, 2650), desc: "Военный" },
        { coords: convertCoords(2633, 2697), desc: "Военный" },
        { coords: convertCoords(2630, 2697), desc: "Военный" },
        { coords: convertCoords(2705, 2676), desc: "Военный" },
        { coords: convertCoords(2691, 2670), desc: "Военный" },
        { coords: convertCoords(2630, 2695), desc: "Военный" },
        { coords: convertCoords(2698, 2647), desc: "Военный" },
        { coords: convertCoords(2693, 2654), desc: "Военный" },
    ],

    // ==================== НПС: АВАНПОСТ МОНОЛИТА ====================
    monolith_outpost: [
        // Армейские склады
        {
            coords: convertCoords(3713, 3068),
            desc: "Аванпост монолита",
            image: "images/NPC/monolith_outpost/monolith_outpost_1.jpg",
            extended: {
                image: "images/NPC/monolith_outpost/monolith_outpost_1.jpg",
                description: {
                    ru: "Аванпост монолита в северной деревне.",
                    en: "Monolith outpost in the northern village."
                },
                rewards: ['anomaly_filter', 'black_box']
            }
        }
    ],

    // ==================== НПС: СВОБОДОВЦЫ ====================
    freedom: [
        // Дикая территория
        { coords: convertCoords(2792, 2685), desc: "Свободовец" },
        { coords: convertCoords(2795, 2686), desc: "Свободовец" },
        { coords: convertCoords(2793, 2688), desc: "Свободовец" },
        { coords: convertCoords(2789, 2686), desc: "Свободовец" },
    ],

    // ==================== НПС: ДОЛГОВЦЫ ====================
    duty: [

    ],

    // ==================== НПС: СПАВН ДОЛГА/СВОБОДЫ ====================
    duty_freedom_spawn: [
        // Муравейник
        { coords: convertCoords(2785, 3558), desc: "Спавн Долга/Свободы - 4 чел." },
        // Полесское
        { coords: convertCoords(3119, 2805), desc: "Спавн Долга/Свободы" },
        { coords: convertCoords(3152, 2802), desc: "Спавн Долга/Свободы" },
        { coords: convertCoords(3140, 2820), desc: "Спавн Долга/Свободы" },
        { coords: convertCoords(3138, 2813), desc: "Спавн Долга/Свободы" },
        { coords: convertCoords(3136, 2802), desc: "Спавн Долга/Свободы" },
        { coords: convertCoords(3138, 2809), desc: "Спавн Долга/Свободы" },
        { coords: convertCoords(3139, 2804), desc: "Спавн Долга/Свободы" },
        { coords: convertCoords(3137, 2811), desc: "Спавн Долга/Свободы" },
        { coords: convertCoords(3143, 2806), desc: "Спавн Долга/Свободы" },
        { coords: convertCoords(3145, 2814), desc: "Спавн Долга/Свободы" },
    ],

    // ==================== НПС: БОСС КНЯЗЬ ====================
    boss_prince: [
        {
            coords: convertCoords(3517, 3090),
            desc: "Босс: Князь",
            image: "images/NPC/bosses/boss_prince.jpg",
            extended: {
                image: "images/NPC/bosses/boss_prince.jpg",
                description: {
                    ru: "Это база босса, за зачистку которого вы получите припасы.",
                    en: "This is the boss base. You will receive supplies for clearing it."
                },
                info: {
                    respawn: {
                        ru: '2.5 — 3 ч',
                        en: '2.5 — 3 h'
                    }
                },
                rewards: ['anomaly_filter', 'converter', 'black_box', 'titanium_frame', 'advanced_upgrade_tools', 'spare_parts']
            }
        }
    ],

    // ==================== НПС: БОСС ФОКСТРОТ ====================
    boss_foxtrot: [
        {
            coords: convertCoords(3234, 2593),
            desc: "Босс: Фокстрот",
            image: "images/NPC/bosses/boss_foxtrot.jpg",
            extended: {
                image: "images/NPC/bosses/boss_foxtrot.jpg",
                description: {
                    ru: "Это база босса, за зачистку которого вы получите припасы.",
                    en: "This is the boss base. You will receive supplies for clearing it."
                },
                info: {
                    respawn: {
                    ru: '20:00 — 7:00',
                    en: '20:00 — 7:00'
                    }
                },
                rewards: ['anomaly_detector', 'basic_upgrade_tools', 'advanced_upgrade_tools', 'basic_armor_kit', 'advanced_armor_kit', 'compromat_flash', 'coded_notebook', 'large_battery']
            }
        },
    ],

    // ==================== НПС: БОСС ФАРАОН ====================
    boss_pharaoh: [
        {
            coords: convertCoords(2946, 2432),
            desc: "Босс: Банда Фараона",
            image: "images/NPC/bosses/boss_pharaoh.jpg",
            extended: {
                image: "images/NPC/bosses/boss_pharaoh.jpg",
                description: {
                    ru: "За зачистку босса вы получите припасы.",
                    en: "For clearing the boss you will receive supplies."
                },
                info: {
                    respawn: {
                        ru: "2 - 2.5 ч",
                        en: "2 - 2.5 h"
                    }
                },
                rewards: [
                    'anomaly_detector',
                    'basic_upgrade_tools',
                    'advanced_upgrade_tools',
                    'basic_armor_kit',
                    'advanced_armor_kit',
                ]
            }
        },
    ],

    // ==================== НПС: БОСС (ДЕПО СУМРАКА) ====================
    boss_sumrak: [
        {
            coords: convertCoords(2241, 3018),
            desc: "Босс: Депо Сумрака",
            image: "images/NPC/bosses/boss_sumrak.jpg",
            extended: {
                image: "images/NPC/bosses/boss_sumrak.jpg",
                description: {
                    ru: "Это база босса, за зачистку которого вы получите припасы.",
                    en: "This is the boss base. You will receive supplies for clearing it."
                },
                info: {
                    respawn: {
                        ru: "2 - 2.5 ч",
                        en: "2 - 2.5 h"
                    }
                },
                rewards: [
                    "basic_upgrade_tools",
                    "basic_armor_kit",
                    "bandit_token",
                    "stash_pda"
                ]
            }
        }
    ],

    // ==================== НПС: БОСС (ИСКАТЕЛЬ) ====================
    boss_iskatel: [
        {
            coords: convertCoords(2103, 2704),
            desc: "Босс: Искатель",
            image: "images/NPC/bosses/boss_iskatel.jpg",
            extended: {
                image: "images/NPC/bosses/boss_iskatel.jpg",
                description: {
                    ru: "Это база босса, за зачистку которого вы получите припасы.",
                    en: "This is the boss base. You will receive supplies for clearing it."
                },
                info: {
                    respawn: {
                        ru: "2 - 2.5 ч",
                        en: "2 - 2.5 h"
                    }
                },
                rewards: [
                    "basic_upgrade_tools",
                    "advanced_upgrade_tools",
                    "spare_parts"
                ]
            }
        }
    ],

    // ==================== НПС: БОСС НЕПРОБИВАЕМЫЙ ====================
    boss_invincible: [

    ],

    // ==================== НПС: БОСС ИЛЛЮЗИОНИСТ ====================
    boss_illusionist: [

    ],

    // ==================== ЛОКАЦИИ: БАЗА ОРДЕНА ====================
    base_orden: [
        {
            coords: convertCoords(2790, 3639),
            desc: "База группировки «Орден»",
            extended: {
                image: "images/locations/preview/base-orden.jpg",
                description: {
                    ru: "Многоуровневый бункер, занятый группировкой Орден.",
                    en: "A multi-level bunker occupied by the Order group."
                }
            }
        },
    ],

    // ==================== ЛОКАЦИИ: БАЗА ЛЕГИОНА ====================
    base_legion: [
        {
            coords: convertCoords(2610, 1822),
            desc: "База группировки «Легион»",
            extended: {
                image: "images/locations/preview/base-legion.jpg",
                description: {
                    ru: "Станция связи, занятая группировкой Легион.",
                    en: "A communications station occupied by the Legion group."
                }
            }
        },
    ],

    // ==================== ЛОКАЦИИ: БАЗА ДОЛГА ====================
    base_duty: [
        {
            coords: convertCoords(2120, 2277),
            desc: "База группировки «Долг»",
        },
    ],

    // ==================== ЛОКАЦИИ: БАЗА СВОБОДЫ ====================
    base_freedom: [
        {
            coords: convertCoords(2441, 3708),
            desc: "База группировки «Свобода»",
        },
    ],

    // ==================== ЛОКАЦИИ: БАЗЫ (СОХРАНЕНИЕ) ====================
    base_spawn: [
        {
            coords: convertCoords(2557, 2330),
            desc: "Бункер учёных",
        },
        {
            coords: convertCoords(2771, 3017),
            desc: "Завод «Росток»",
        },
        {
            coords: convertCoords(1047, 2446),
            desc: "Фабрика",
        },
        {
            coords: convertCoords(2183, 3633),
            desc: "Заброшенная ферма",
        },
        {
            coords: convertCoords(1490, 3121),
            desc: "АТП",
        },
        {
            coords: convertCoords(1419, 2940),
            desc: "Деревня новичков",
        },
        {
            coords: convertCoords(2246, 2388),
            desc: "База сталкеров",
        },
        {
            coords: convertCoords(630, 3647),
            desc: "КПП «Рубежный»",
            extended: {
                image: "images/locations/preview/kpp-rubezh.jpg",
                description: {
                    ru: "Это основной контрольно-пропускной пункт на въезде в Чернобыльскую зону отчуждения.",
                    en: "This is the main checkpoint at the entrance to the Chernobyl Exclusion Zone."
                }
            }
        },
    ],

    // ==================== ЛОКАЦИИ: БАЗЫ (БЕЗ СОХРАНЕНИЯ) ====================
    base_nospawn: [
        {
            coords: convertCoords(2332, 3122),
            desc: "Барахолка",
        },
        {
            coords: convertCoords(1650, 3054),
            desc: "Свиноферма",
        },
        {
            coords: convertCoords(683, 2978),
            desc: "Пожарная часть",
            extended: {
                image: "images/locations/preview/mes.jpg",
                description: {
                    ru: "Станция МЧС ранее, сейчас – укреплённая зона, занятая группой неучтённых лиц.",
                    en: "The Ministry of Emergency Situations station used to be a fortified area, now occupied by a group of unaccounted individuals."
                }
            }
        },
    ],

    // ==================== ЛОКАЦИИ: ВРАЖДЕБНЫЕ БАЗЫ ====================
    base_hostile: [
        {
            coords: convertCoords(1290, 2974),
            desc: "КПП «Южный»",
            extended: {
                image: "images/locations/preview/kpp-yuzhny.jpg",
                description: {
                    ru: "Укреплённый блокпост между Кордоном и Росстанью. Часть последнего кольца Периметра, из трёх, возведённых согласно с «Планом Сдерживания».",
                    en: "A fortified checkpoint between Cordon and Rosstan. Part of the final ring of the Perimeter, of three built in accordance with the «Containment Plan»."
                }
            }
        },
    ],
};

// ============================================================
// Категории фильтров
// ============================================================
const FILTER_CATEGORIES = {
    astrolite: ['catalyst', 'wormhole'],
    containers: ['ammo', 'supply', 'tools', 'barrels', 'science', 'stash', 'wooden_crate', 'safe', 'stash_hidden'],
    mutants: ['blind_dog', 'pseudodog', 'psy_dog', 'flesh', 'boar', 'rat', 'snork', 'zombie', 'bloodsucker', 'bloodsucker_strong', 'chimera', 'controller'],
    npc: ['zombified', 'zombified_cluster', 'bandits', 'bandit_camp', 'military', 'monolith_outpost', 'monolith', 'mercenary', 'stalkers', 'freedom', 'duty', 'duty_freedom_spawn', 'sinner', 'boss_foxtrot', 'boss_prince', 'boss_invincible', 'boss_illusionist', 'boss_pharaoh', 'boss_sumrak', 'boss_iskatel'],
    locations: ['base_orden', 'base_legion', 'base_duty', 'base_freedom', 'base_spawn', 'base_nospawn', 'base_hostile']
};

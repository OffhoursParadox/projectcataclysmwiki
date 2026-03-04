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
        // Полесское (багнутые — добавлены без приписки)
        { coords: convertCoords(3114, 2711), desc: "Координаты: -1233, 87, -4691" },
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
        // Полесское (багнутые — добавлены без приписки)
        { coords: convertCoords(3253, 2844), desc: "Координаты: -967, 73, -4969" },
        { coords: convertCoords(3220, 2580), desc: "Координаты: -1496, 97, -4904" },
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
        // Полесское (багнутые — добавлены без приписки)
        { coords: convertCoords(3144, 2781), desc: "Координаты: -1095, 85, -4753" },
        { coords: convertCoords(3117, 2716), desc: "Координаты: -1223, 79, -4699" },
        { coords: convertCoords(3235, 2733), desc: "Координаты: -1190, 73, -4934" },
    ],

    // ==================== КОНТЕЙНЕРЫ: НАУЧНОЕ ОБОРУДОВАНИЕ ====================
    science: [

    ],

    // ==================== КОНТЕЙНЕРЫ: ТАЙНИКИ ====================
    stash: [
        // Полесское
        {
            coords: convertCoords(3267, 2763),
            desc: "Тайник",
            image: "images/containers/stash_polesye.jpg",
            extended: {
                image: "images/containers/stash_polesye.jpg",
                description: {
                    ru: "Тайник в Полесском. Координаты: -1130, 84, -4997",
                    en: "Stash in Polesye. Coordinates: -1130, 84, -4997"
                },
                info: {
                    respawn: {
                        ru: 'Неизвестно',
                        en: 'Unknown'
                    }
                },
                rewards: ['anomaly_filter', 'converter', 'black_box', 'titanium_frame', 'spare_parts']
            }
        },
    ],

    // ==================== КОНТЕЙНЕРЫ: ДЕРЕВЯННЫЕ ЯЩИКИ ====================
    wooden_crate: [
        // Армейские склады
        { coords: convertCoords(3494, 2451), desc: "Координаты: -1754, 91, -5452" },
        { coords: convertCoords(3648, 2916), desc: "Координаты: -825, 80, -5761" },
        { coords: convertCoords(3496, 2412), desc: "Координаты: -1832, 91, -5456" },
        { coords: convertCoords(3497, 2953), desc: "Координаты: -750, 90, -5458" },
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
    ],

    // ==================== МУТАНТЫ: ПСЕВДОСОБАКИ ====================
    pseudodog: [
        // Армейские склады
        { coords: convertCoords(3404, 2536), desc: "Псевдособаки" },
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
        // Полесское
        { coords: convertCoords(3352, 2504), desc: "Снорки" },
        { coords: convertCoords(3343, 2738), desc: "Снорки" },
        { coords: convertCoords(3277, 2544), desc: "Снорки" },
        { coords: convertCoords(3297, 2802), desc: "Снорки" },
        { coords: convertCoords(2992, 2744), desc: "Снорки" },
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
    ],

    // ==================== НПС: СТОЯНКА БАНДИТОВ ====================
    bandit_camp: [

    ],

    // ==================== НПС: ВОЕННЫЕ ====================
    military: [

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
    npc: ['zombified', 'zombified_cluster', 'bandits', 'bandit_camp', 'military', 'monolith_outpost', 'freedom', 'duty', 'duty_freedom_spawn', 'sinner', 'boss_foxtrot', 'boss_prince', 'boss_invincible', 'boss_illusionist'],
    locations: ['base_orden', 'base_legion', 'base_duty', 'base_freedom', 'base_spawn', 'base_nospawn', 'base_hostile']
};

'use strict';

/**
 * Каталог гайдов — метаданные для списка.
 * Квестовые гайды: quests/{slug}/index.html
 * Руководства: handbooks/{slug}/index.html
 */
const GUIDE_CATEGORIES = [
    { id: 'all', color: 'accent' },
    { id: 'quests', color: 'amber' },
    { id: 'combat', color: 'red' },
    { id: 'progression', color: 'blue' },
    { id: 'equipment', color: 'purple' },
    { id: 'lore', color: 'muted' },
    { id: 'economy', color: 'green' },
    { id: 'technical', color: 'cyan' }
];

const GUIDE_LOCATIONS = [
    'rosstan',
    'marshes',
    'cordon',
    'dark-hollow',
    'junkyard',
    'red-forest',
    'agroprom',
    'dark-valley',
    'rostok-factory',
    'wild-territory',
    'anthill',
    'lake-yantar',
    'meadow',
    'polissya',
    'army-warehouses',
    'sorting-station',
    'construction-site'
];

const GUIDE_SORT_OPTIONS = ['newest', 'oldest', 'title'];

const GUIDES = [
    {
        id: 'stuck-in-space',
        slug: 'stuck-in-space',
        type: 'quest',
        category: 'quests',
        published: true,
        featured: true,
        location: 'rosstan',
        tags: ['npc', 'story', 'detectors', 'artifacts', 'zone'],
        readTime: 12,
        updatedAt: '2026-07-14',
        image: 'quests/stuck-in-space/images/preview.jpg'
    },
    {
        id: 'rf-receiver',
        slug: 'rf-receiver',
        type: 'handbook',
        category: 'equipment',
        published: true,
        featured: true,
        location: 'junkyard',
        tags: ['detectors', 'stash', 'devices'],
        readTime: 6,
        updatedAt: '2026-07-09',
        image: '../images/devices/rf-receiver.png'
    }
];

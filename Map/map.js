'use strict';

const MAP_CONFIG = {
    width: 11264,
    height: 16896,
    tileSize: 256,
    minZoom: 4,
    maxZoom: 8,
    defaultZoom: 5,
    nativeZoom: 7
};

const MARKER_ICONS = {
    // Астролит
    catalyst: L.icon({ iconUrl: 'markers/astrolite/catalyst.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    wormhole: L.icon({ iconUrl: 'markers/astrolite/wormhole.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    // Контейнеры
    ammo:   L.icon({ iconUrl: 'markers/ammo.png',   iconSize: [24, 18], iconAnchor: [12, 9], popupAnchor: [0, -9] }),
    supply: L.icon({ iconUrl: 'markers/supply.png', iconSize: [25, 18], iconAnchor: [13, 9], popupAnchor: [0, -9] }),
    tools:  L.icon({ iconUrl: 'markers/tool.png',   iconSize: [20, 18], iconAnchor: [10, 9], popupAnchor: [0, -9] }),
    barrels: L.icon({ iconUrl: 'markers/barrel.png', iconSize: [14, 24], iconAnchor: [7, 12], popupAnchor: [0, -12] }),
    science: L.icon({ iconUrl: 'markers/science.png', iconSize: [24, 24], iconAnchor: [12, 12], popupAnchor: [0, -12] }),
    stash: L.icon({ iconUrl: 'markers/stash.png', iconSize: [24, 24], iconAnchor: [12, 12], popupAnchor: [0, -12] }),
    wooden_crate: L.icon({ iconUrl: 'markers/wooden_crate.png', iconSize: [21, 18], iconAnchor: [11, 9],  popupAnchor: [0, -9] }),
    safe: L.icon({ iconUrl: 'markers/safe.png', iconSize: [17, 24], iconAnchor: [9, 12], popupAnchor: [0, -12] }),
    // Мутанты
    blind_dog: L.icon({ iconUrl: 'markers/mutants/blinddog.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    pseudodog: L.icon({ iconUrl: 'markers/mutants/pseudodog.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    psy_dog: L.icon({ iconUrl: 'markers/mutants/pseudodog.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    flesh: L.icon({ iconUrl: 'markers/mutants/flesh.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    boar: L.icon({ iconUrl: 'markers/mutants/boar.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    rat: L.icon({ iconUrl: 'markers/mutants/rat.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    snork: L.icon({ iconUrl: 'markers/mutants/snork.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    zombie: L.icon({ iconUrl: 'markers/mutants/zombie.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    bloodsucker: L.icon({ iconUrl: 'markers/mutants/bloodsucker.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    bloodsucker_strong: L.icon({ iconUrl: 'markers/mutants/strongbloodsucker.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    chimera: L.icon({ iconUrl: 'markers/mutants/chimera.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    controller: L.icon({ iconUrl: 'markers/mutants/controller.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    // НПС
    zombified: L.icon({ iconUrl: 'markers/NPC/Zombified.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    zombified_cluster: L.icon({ iconUrl: 'markers/NPC/npc_outpost.png', iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, -10] }),
    bandits: L.icon({ iconUrl: 'markers/NPC/Bandits.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    bandit_camp:       L.icon({ iconUrl: 'markers/NPC/npc_outpost.png', iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, -10] }),
    military: L.icon({ iconUrl: 'markers/NPC/military.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    monolith_outpost:  L.icon({ iconUrl: 'markers/NPC/npc_outpost.png', iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, -10] }),
    freedom: L.icon({ iconUrl: 'markers/NPC/freedom.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    duty: L.icon({ iconUrl: 'markers/NPC/Duty.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    boss_prince: L.icon({ iconUrl: 'markers/NPC/boss.png', iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, -10] }),
    boss_invincible: L.icon({ iconUrl: 'markers/NPC/boss.png', iconSize: [32, 32], iconAnchor: [16, 16], popupAnchor: [0, -16] }),
    boss_illusionist: L.icon({ iconUrl: 'markers/NPC/boss_illusionist.png', iconSize: [32, 32], iconAnchor: [16, 16], popupAnchor: [0, -16] })
};

const ASTROLITE_TYPES = ['catalyst', 'wormhole'];
const CONTAINER_TYPES = ['ammo', 'supply', 'tools', 'barrels', 'science', 'stash', 'wooden_crate', 'safe'];
const MUTANT_TYPES = ['blind_dog', 'pseudodog', 'psy_dog', 'flesh', 'boar', 'rat', 'snork', 'zombie', 'bloodsucker', 'bloodsucker_strong', 'chimera', 'controller'];
const NPC_TYPES = ['zombified', 'zombified_cluster', 'bandits', 'bandit_camp', 'military', 'monolith_outpost', 'freedom', 'duty', 'boss_prince', 'boss_invincible', 'boss_illusionist'];

const RUSSIAN_MUTANT_NAMES = {
    'Слепые собаки': 'blind_dog',
    'Псевдособаки': 'pseudodog',
    'Пси-собака': 'psy_dog',
    'Плоти': 'flesh',
    'Кабаны': 'boar',
    'Крысы': 'rat',
    'Снорки': 'snork',
    'Зомби': 'zombie',
    'Кровосос': 'bloodsucker',
    'Матёрый кровосос': 'bloodsucker_strong',
    'Химера': 'chimera',
    'Контролёр': 'controller'
};

const DESC_TRANSLATIONS = {
    'Лаборатория в тоннеле': 'Laboratory in the tunnel',
    'Мини лаборатория в тоннеле': 'Mini laboratory in the tunnel',
    'Находится в лаборатории': 'Located in the laboratory',
    'Находится в тоннеле': 'Located in the tunnel',
    'Подземелья Агропрома': 'Agroprom Underground',
    'Лаборатория в пещере': 'Laboratory in the cave',
    'Лаборатория X-16': 'Laboratory X-16',
    'Выход из лаборатории X-16': 'Exit from Laboratory X-16',
    'Лаборатория X-18': 'Laboratory X-18',
    '-1 этаж': '-1 floor',
    '-2 этаж': '-2 floor',
    'Зомбированные': 'Zombified',
    'Зомбированный': 'Zombified',
    'Скопление зомбированных': 'Zombified cluster',
    'Бандиты': 'Bandits',
    'Стоянка бандитов': 'Bandit camp',
    'Мародеры': 'Marauders',
    'Очень сильные': 'Very strong',
    'Военные': 'Military',
    'Военный блокпост': 'Military checkpoint',
    'Свободовцы': 'Freedom',
    'База Свободы': 'Freedom Base',
    'Долговцы': 'Duty',
    'База Долга': 'Duty Base',
    'Аванпост монолита': 'Monolith outpost',
    'Монолит': 'Monolith',
    'Князь': 'Prince',
    'Непробиваемый': 'Invincible',
    'Иллюзионист': 'Illusionist',
    'Босс': 'Boss',
    'Катализатор': 'Catalyst',
    'Червоточина': 'Wormhole',
    'Контролёр': 'Controller',
    'Пси-собака': 'Psy-dog',
    'Также лежит': 'Also contains',
    'Трек:': 'Track:',
    'Координаты:': 'Coordinates:'
};

let map;
let markerLayers = {};
let activeFilters = new Set();

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function t(key, params = {}) {
    if (window.i18n && typeof window.i18n.t === 'function') {
        return window.i18n.t(key, params);
    }
    return key;
}

function getMarkerTypeName(type) {
    return t(`map.marker.${type}`);
}

function translateDescription(desc, type) {
    if (!window.i18n?.isEnglish()) return desc;

    let translated = desc;

    if (MUTANT_TYPES.includes(type)) {
        Object.entries(RUSSIAN_MUTANT_NAMES).forEach(([ruName, typeKey]) => {
            if (translated.startsWith(ruName)) {
                translated = translated.replace(ruName, t(`map.marker.${typeKey}`));
            }
        });
    }

    Object.entries(DESC_TRANSLATIONS).forEach(([ru, en]) => {
        translated = translated.split(ru).join(en);
    });

    return translated;
}

document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    initLangDropdownClose();
    initMap();
    initMarkers();
    initFilters();
    initSidebar();
    initControls();
    updateMarkerCounts();
    setTimeout(() => UserMarkerTool.init(), 100);
});

document.addEventListener('languageChanged', () => {
    refreshMarkersPopups();
    UserMarkerTool.refreshAllMarkers();
    UserMarkerTool.renderMarkersList();
    UserMarkerTool.updateToggleButtonText();
    UserMarkerTool.updateSelectedCategory();
});

function initMap() {
    map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: MAP_CONFIG.minZoom,
        maxZoom: MAP_CONFIG.maxZoom,
        zoomControl: false,
        attributionControl: false,
        maxBoundsViscosity: 1.0
    });

    const southWest = map.unproject([0, MAP_CONFIG.height], MAP_CONFIG.nativeZoom);
    const northEast = map.unproject([MAP_CONFIG.width, 0], MAP_CONFIG.nativeZoom);
    const bounds = new L.LatLngBounds(southWest, northEast);

    L.tileLayer('tiles/{z}/{x}/{y}.jpg', {
        minZoom: MAP_CONFIG.minZoom,
        maxZoom: MAP_CONFIG.maxZoom,
        bounds: bounds,
        noWrap: true,
        tileSize: MAP_CONFIG.tileSize,
        errorTileUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    }).addTo(map);

    const center = map.unproject([MAP_CONFIG.width / 2, MAP_CONFIG.height / 2], MAP_CONFIG.nativeZoom);
    map.setView(center, MAP_CONFIG.defaultZoom);
    map.setMaxBounds(bounds);

    map.on('mousemove', (e) => {
        const point = map.project(e.latlng, MAP_CONFIG.nativeZoom);
        document.getElementById('coordX').textContent = Math.round(point.x);
        document.getElementById('coordY').textContent = Math.round(point.y);
    });

    setTimeout(() => {
        if (window.Dynmap) {
            Dynmap.init(map);
        }
    }, 500);
}

function initMarkers() {
    if (typeof MARKERS_DATA === 'undefined') return console.error('MARKERS_DATA not loaded!');

    Object.keys(MARKERS_DATA).forEach(type => {
        markerLayers[type] = L.layerGroup();

        MARKERS_DATA[type].forEach(markerData => {
            const latLng = map.unproject([markerData.coords[1], markerData.coords[0]], MAP_CONFIG.nativeZoom);
            const icon = MARKER_ICONS[type];
            if (!icon) return;

            const marker = L.marker(latLng, { icon });
            marker.markerType = type;
            marker.markerData = markerData;
            marker.bindPopup(() => createMarkerPopup(type, markerData));
            markerLayers[type].addLayer(marker);
        });

        markerLayers[type].addTo(map);
        activeFilters.add(type);
    });
}

function createMarkerPopup(type, markerData) {
    const typeName = getMarkerTypeName(type);
    const desc = translateDescription(markerData.desc, type);

    let popupContent = '<div class="marker-popup">';
    popupContent += `<div class="marker-popup__title">${typeName}</div>`;

    if (markerData.image) {
        popupContent += `<img src="${markerData.image}" alt="" style="max-width:280px;border-radius:8px;margin-bottom:10px;">`;
    }

    popupContent += `<div class="marker-popup__desc">${desc}</div>`;
    popupContent += '</div>';
    return popupContent;
}

function refreshMarkersPopups() {
    Object.values(markerLayers).forEach(layerGroup => {
        layerGroup.eachLayer(marker => {
            if (marker.markerType && marker.markerData) {
                marker.setPopupContent(createMarkerPopup(marker.markerType, marker.markerData));
            }
        });
    });
}

function initFilters() {
    const saved = JSON.parse(localStorage.getItem('mapFilters') || '{}');

    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        const filter = checkbox.dataset.filter;

        if (saved[filter] !== undefined) {
            checkbox.checked = saved[filter];
            if (!saved[filter]) {
                activeFilters.delete(filter);
                if (markerLayers[filter]) map.removeLayer(markerLayers[filter]);
            }
        }

        checkbox.addEventListener('change', () => {
            toggleFilter(filter, checkbox.checked);
            saveFiltersState();
        });
    });

    document.querySelectorAll('.filter-group__header').forEach(header => {
        header.addEventListener('click', () => header.closest('.filter-group').classList.toggle('open'));
    });

    document.querySelector('.filter-group')?.classList.add('open');
}

function toggleFilter(filterType, isActive) {
    if (isActive) {
        activeFilters.add(filterType);
        markerLayers[filterType]?.addTo(map);
    } else {
        activeFilters.delete(filterType);
        if (markerLayers[filterType]) map.removeLayer(markerLayers[filterType]);
    }
    updateMarkerCounts();
}

function saveFiltersState() {
    const state = {};
    document.querySelectorAll('.filter-checkbox').forEach(cb => {
        state[cb.dataset.filter] = cb.checked;
    });
    localStorage.setItem('mapFilters', JSON.stringify(state));
}

function updateMarkerCounts() {
    if (typeof MARKERS_DATA === 'undefined') return;

    Object.keys(MARKERS_DATA).forEach(type => {
        const el = document.querySelector(`[data-count="${type}"]`);
        if (el) el.textContent = MARKERS_DATA[type].length;
    });

    if (typeof FILTER_CATEGORIES !== 'undefined') {
        Object.entries(FILTER_CATEGORIES).forEach(([cat, types]) => {
            const total = types.reduce((sum, t) => sum + (MARKERS_DATA[t]?.length || 0), 0);
            const el = document.getElementById(`count${cat.charAt(0).toUpperCase() + cat.slice(1)}`);
            if (el) el.textContent = total;
        });
    }
}

function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebarToggle');

    if (!sidebar || !toggle) return;

    const isMobile = () => window.innerWidth <= 768;

    const savedCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (savedCollapsed && !isMobile()) {
        sidebar.classList.add('collapsed');
    }

    toggle.addEventListener('click', () => {
        if (isMobile()) {
            sidebar.classList.toggle('open');
        } else {
            sidebar.classList.toggle('collapsed');
            localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
        }
        setTimeout(() => map.invalidateSize(), 300);
    });

    document.getElementById('map')?.addEventListener('click', () => {
        if (isMobile() && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            setTimeout(() => map.invalidateSize(), 300);
        }
    });

    window.addEventListener('resize', () => {
        if (isMobile()) {
            sidebar.classList.remove('collapsed');
        } else {
            sidebar.classList.remove('open');
        }
    });

    document.getElementById('resetFilters')?.addEventListener('click', () => {
        document.querySelectorAll('.filter-checkbox').forEach(cb => {
            cb.checked = true;
            toggleFilter(cb.dataset.filter, true);
        });
        saveFiltersState();
    });
}

function initControls() {
    document.getElementById('zoomIn')?.addEventListener('click', () => map.zoomIn());
    document.getElementById('zoomOut')?.addEventListener('click', () => map.zoomOut());

    document.getElementById('resetView')?.addEventListener('click', () => {
        const center = map.unproject([MAP_CONFIG.width / 2, MAP_CONFIG.height / 2], MAP_CONFIG.nativeZoom);
        map.setView(center, MAP_CONFIG.defaultZoom);
    });

    document.getElementById('fullscreen')?.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen().catch(() => {});
        }
    });
}

const UserMarkerTool = {
    isActive: false,
    userMarkers: [],
    markerLayerGroup: null,
    currentCoords: null,

    getCategoryName(type) {
        return t(`map.marker.${type}`);
    },

    init() {
        this.markerLayerGroup = L.layerGroup().addTo(map);
        this.loadFromStorage();
        this.bindEvents();
        this.renderMarkersList();
    },

    bindEvents() {
        document.getElementById('userMarkerToggle')?.addEventListener('click', () => this.toggleMode());

        map.on('click', (e) => {
            if (this.isActive) this.openModal(e.latlng);
        });

        document.getElementById('closeModal')?.addEventListener('click', () => this.closeModal());
        document.getElementById('modalOverlay')?.addEventListener('click', () => this.closeModal());
        document.getElementById('cancelMarker')?.addEventListener('click', () => this.closeModal());
        document.getElementById('saveMarker')?.addEventListener('click', () => this.saveMarker());

        document.getElementById('closeMarkersPanel')?.addEventListener('click', () => {
            document.getElementById('userMarkersPanel')?.classList.remove('visible');
        });

        document.getElementById('copyAllMarkers')?.addEventListener('click', () => this.copyAllMarkers());
        document.getElementById('copyForDiscord')?.addEventListener('click', () => this.copyForDiscord());
        document.getElementById('clearAllMarkers')?.addEventListener('click', () => this.clearAllMarkers());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (document.getElementById('markerModal')?.classList.contains('visible')) {
                    this.closeModal();
                } else if (this.isActive) {
                    this.toggleMode();
                }
            }
        });

        this.initCustomSelect();
    },

    initCustomSelect() {
        const select = document.getElementById('categorySelect');
        if (!select) return;

        const trigger = select.querySelector('.custom-select__trigger');
        const options = select.querySelectorAll('.custom-select__option');
        const hiddenInput = document.getElementById('markerCategory');

        const openSelect = (e) => {
            e.stopPropagation();
            select.classList.toggle('open');
        };

        trigger?.addEventListener('click', openSelect);
        trigger?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openSelect(e);
            }
        });

        options?.forEach(option => {
            option.addEventListener('click', () => {
                const value = option.dataset.value;
                const img = option.querySelector('img')?.src;
                const text = option.querySelector('span')?.textContent;
                hiddenInput.value = value;

                trigger.innerHTML = `
                    <div class="custom-select__selected">
                        <img src="${img}" alt=""><span>${text}</span>
                    </div>
                    <svg class="custom-select__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 9l6 6 6-6"/>
                    </svg>`;

                options.forEach(o => o.classList.remove('selected'));
                option.classList.add('selected');
                select.classList.remove('open');
                this.validateForm();
            });
        });

        document.addEventListener('click', (e) => {
            if (!select.contains(e.target)) select.classList.remove('open');
        });
    },

    updateToggleButtonText() {
        const btn = document.getElementById('userMarkerToggle');
        const spanEl = btn?.querySelector('span');
        if (spanEl) {
            spanEl.textContent = this.isActive
                ? t('map.userMarkers.cancel')
                : t('map.userMarkers.addMarker');
        }
    },

    updateSelectedCategory() {
        const hiddenInput = document.getElementById('markerCategory');
        const trigger = document.querySelector('#categorySelect .custom-select__trigger');
        const value = hiddenInput?.value;

        if (value && trigger) {
            const option = document.querySelector(`.custom-select__option[data-value="${value}"]`);
            if (option) {
                const img = option.querySelector('img')?.src;
                const text = option.querySelector('span')?.textContent;
                trigger.innerHTML = `
                    <div class="custom-select__selected">
                        <img src="${img}" alt=""><span>${text}</span>
                    </div>
                    <svg class="custom-select__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 9l6 6 6-6"/>
                    </svg>`;
            }
        }
    },

    toggleMode() {
        this.isActive = !this.isActive;
        const btn = document.getElementById('userMarkerToggle');
        const mapContainer = document.getElementById('map');
        const panel = document.getElementById('userMarkersPanel');

        if (this.isActive) {
            btn?.classList.add('active');
            if (btn?.querySelector('span')) {
                btn.querySelector('span').textContent = t('map.userMarkers.cancel');
            }
            mapContainer?.classList.add('adding-marker');
            panel?.classList.add('visible');
        } else {
            btn?.classList.remove('active');
            if (btn?.querySelector('span')) {
                btn.querySelector('span').textContent = t('map.userMarkers.addMarker');
            }
            mapContainer?.classList.remove('adding-marker');
            panel?.classList.remove('visible');
        }
    },

    openModal(latlng) {
        const point = map.project(latlng, MAP_CONFIG.nativeZoom);
        const pixelX = Math.round(point.x);
        const pixelY = Math.round(point.y);
        this.currentCoords = { latlng, pixelX, pixelY };

        document.getElementById('modalCoords').textContent = `X: ${pixelX}, Y: ${pixelY}`;
        document.getElementById('markerCategory').value = '';
        document.getElementById('markerDescription').value = '';
        document.getElementById('markerGameCoords').value = '';

        const select = document.getElementById('categorySelect');
        const trigger = select?.querySelector('.custom-select__trigger');
        if (trigger) {
            trigger.innerHTML = `
                <span class="custom-select__placeholder">${t('map.modal.selectCategory')}</span>
                <svg class="custom-select__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                </svg>`;
        }

        select?.querySelectorAll('.custom-select__option').forEach(o => o.classList.remove('selected'));
        select?.classList.remove('open');

        const modal = document.getElementById('markerModal');
        modal?.classList.add('visible');
        document.body.style.overflow = 'hidden';
        this.validateForm();

        setTimeout(() => {
            trigger?.focus();
        }, 100);
    },

    closeModal() {
        document.getElementById('markerModal')?.classList.remove('visible');
        document.body.style.overflow = '';
        this.currentCoords = null;
    },

    validateForm() {
        const category = document.getElementById('markerCategory')?.value;
        const saveBtn = document.getElementById('saveMarker');
        if (saveBtn) saveBtn.disabled = !category;
    },

    saveMarker() {
        const category = document.getElementById('markerCategory')?.value;
        const description = document.getElementById('markerDescription')?.value.trim();
        const gameCoords = document.getElementById('markerGameCoords')?.value.trim();
        if (!category || !this.currentCoords) return;

        const marker = {
            id: Date.now(),
            category,
            pixelX: this.currentCoords.pixelX,
            pixelY: this.currentCoords.pixelY,
            latlng: this.currentCoords.latlng,
            description,
            gameCoords,
            timestamp: new Date().toISOString()
        };

        this.userMarkers.push(marker);
        this.addMarkerToMap(marker);
        this.saveToStorage();
        this.renderMarkersList();
        this.closeModal();
        this.showToast(t('map.toast.markerAdded'));
    },

    addMarkerToMap(marker) {
        const icon = MARKER_ICONS[marker.category];
        if (!icon) return;

        const customIcon = L.divIcon({
            className: 'user-marker-wrapper',
            html: `<div class="user-marker-icon">
                <img src="${icon.options.iconUrl}" style="width:${icon.options.iconSize[0]}px;height:${icon.options.iconSize[1]}px;">
            </div>`,
            iconSize: icon.options.iconSize,
            iconAnchor: icon.options.iconAnchor
        });

        const leafletMarker = L.marker(marker.latlng, { icon: customIcon });
        leafletMarker.userMarkerData = marker;
        leafletMarker.bindPopup(() => this.createUserMarkerPopup(marker));
        leafletMarker.markerId = marker.id;
        this.markerLayerGroup.addLayer(leafletMarker);
    },

    createUserMarkerPopup(marker) {
        const categoryName = escapeHtml(this.getCategoryName(marker.category));
        const yourMarker = escapeHtml(t('map.popup.yourMarker'));

        let popupContent = `<div class="marker-popup">
            <div class="marker-popup__title">${categoryName} (${yourMarker})</div>`;

        if (marker.description) {
            popupContent += `<div class="marker-popup__desc">${escapeHtml(marker.description)}</div>`;
        }

        if (marker.gameCoords) {
            popupContent += `<div class="marker-popup__coords">${escapeHtml(t('map.popup.gameCoords'))}: ${escapeHtml(marker.gameCoords)}</div>`;
        }

        popupContent += `<div class="marker-popup__coords">${escapeHtml(t('map.popup.pixels'))}: X: ${marker.pixelX}, Y: ${marker.pixelY}</div>`;
        popupContent += '</div>';
        return popupContent;
    },

    refreshAllMarkers() {
        this.markerLayerGroup.eachLayer(layer => {
            if (layer.userMarkerData) {
                layer.setPopupContent(this.createUserMarkerPopup(layer.userMarkerData));
            }
        });
    },

    removeMarker(id) {
        this.userMarkers = this.userMarkers.filter(m => m.id !== id);
        this.markerLayerGroup.eachLayer(layer => {
            if (layer.markerId === id) this.markerLayerGroup.removeLayer(layer);
        });
        this.saveToStorage();
        this.renderMarkersList();
    },

    focusMarker(id) {
        const marker = this.userMarkers.find(m => m.id === id);
        if (marker) {
            map.setView(marker.latlng, MAP_CONFIG.maxZoom - 1);
            this.markerLayerGroup.eachLayer(layer => {
                if (layer.markerId === id) layer.openPopup();
            });
        }
    },

    renderMarkersList() {
        const list = document.getElementById('userMarkersList');
        const copyBtn = document.getElementById('copyForDiscord');

        if (this.userMarkers.length === 0) {
            list.innerHTML = `<div class="user-markers-panel__empty">${escapeHtml(t('map.userMarkers.clickToAdd'))}</div>`;
            if (copyBtn) copyBtn.disabled = true;
            return;
        }

        if (copyBtn) copyBtn.disabled = false;

        list.innerHTML = this.userMarkers.map(marker => {
            const iconUrl = MARKER_ICONS[marker.category]?.options.iconUrl || '';
            const categoryName = escapeHtml(this.getCategoryName(marker.category));
            const desc = marker.description ? escapeHtml(marker.description) : '';
            const showOnMap = escapeHtml(t('map.userMarkers.showOnMap'));
            const copyTitle = escapeHtml(t('map.userMarkers.copy'));
            const deleteTitle = escapeHtml(t('map.userMarkers.delete'));

            return `<div class="user-marker-item" data-id="${marker.id}">
                <div class="user-marker-item__header">
                    <div class="user-marker-item__type">
                        <img src="${iconUrl}" class="user-marker-item__type-icon" alt="">
                        ${categoryName}
                    </div>
                    <div class="user-marker-item__actions">
                        <button class="user-marker-item__btn" onclick="UserMarkerTool.focusMarker(${marker.id})" title="${showOnMap}">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                            </svg>
                        </button>
                        <button class="user-marker-item__btn" onclick="UserMarkerTool.copySingleMarker(${marker.id})" title="${copyTitle}">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                            </svg>
                        </button>
                        <button class="user-marker-item__btn user-marker-item__btn--delete" onclick="UserMarkerTool.removeMarker(${marker.id})" title="${deleteTitle}">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="user-marker-item__coords">X: ${marker.pixelX}, Y: ${marker.pixelY}</div>
                ${desc ? `<div class="user-marker-item__desc">${desc}</div>` : ''}
            </div>`;
        }).join('');
    },

    generateExportText() {
        if (this.userMarkers.length === 0) return '';

        const isEn = window.i18n?.isEnglish();
        let text = isEn
            ? '🗺️ NEW MARKERS FOR PROJECT CATACLYSM MAP\n'
            : '🗺️ НОВЫЕ МЕТКИ ДЛЯ КАРТЫ PROJECT CATACLYSM\n';
        text += isEn
            ? `📅 Date: ${new Date().toLocaleDateString('en-US')}\n`
            : `📅 Дата: ${new Date().toLocaleDateString('ru-RU')}\n`;
        text += isEn
            ? `📍 Markers count: ${this.userMarkers.length}\n`
            : `📍 Количество меток: ${this.userMarkers.length}\n`;
        text += `${'─'.repeat(40)}\n\n`;

        this.userMarkers.forEach((marker, index) => {
            text += isEn ? `【 Marker ${index + 1} 】\n` : `【 Метка ${index + 1} 】\n`;
            text += isEn
                ? `• Type: ${this.getCategoryName(marker.category)}\n`
                : `• Тип: ${this.getCategoryName(marker.category)}\n`;
            text += isEn
                ? `• Category (code): ${marker.category}\n`
                : `• Категория (код): ${marker.category}\n`;
            text += isEn
                ? `• Map coordinates: X: ${marker.pixelX}, Y: ${marker.pixelY}\n`
                : `• Координаты на карте: X: ${marker.pixelX}, Y: ${marker.pixelY}\n`;

            if (marker.gameCoords) {
                text += isEn
                    ? `• Game coordinates: ${marker.gameCoords}\n`
                    : `• Игровые координаты: ${marker.gameCoords}\n`;
            }

            if (marker.description) {
                text += isEn
                    ? `• Description: ${marker.description}\n`
                    : `• Описание: ${marker.description}\n`;
            }

            text += isEn ? '\n📋 Code for adding:\n' : '\n📋 Код для добавления:\n';

            const desc = marker.gameCoords
                ? (isEn ? `Coordinates: ${marker.gameCoords}` : `Координаты: ${marker.gameCoords}`)
                : (marker.description || this.getCategoryName(marker.category));
            text += `{ coords: convertCoords(${marker.pixelY}, ${marker.pixelX}), desc: "${desc}" },\n\n`;
        });

        return text;
    },

    copySingleMarker(id) {
        const marker = this.userMarkers.find(m => m.id === id);
        if (!marker) return;

        const isEn = window.i18n?.isEnglish();
        const desc = marker.gameCoords
            ? (isEn ? `Coordinates: ${marker.gameCoords}` : `Координаты: ${marker.gameCoords}`)
            : (marker.description || this.getCategoryName(marker.category));
        const code = `{ coords: convertCoords(${marker.pixelY}, ${marker.pixelX}), desc: "${desc}" },`;

        navigator.clipboard.writeText(code)
            .then(() => this.showToast(t('map.toast.markerCodeCopied')))
            .catch(() => this.showToast(t('map.toast.copyFailed')));
    },

    copyAllMarkers() {
        const text = this.generateExportText();
        if (text) {
            navigator.clipboard.writeText(text)
                .then(() => this.showToast(t('map.toast.allMarkersCopied')))
                .catch(() => this.showToast(t('map.toast.copyFailed')));
        }
    },

    copyForDiscord() {
        const text = this.generateExportText();
        if (text) {
            navigator.clipboard.writeText('```\n' + text + '```')
                .then(() => this.showToast(t('map.toast.copiedForDiscord')))
                .catch(() => this.showToast(t('map.toast.copyFailed')));
        }
    },

    clearAllMarkers() {
        if (!confirm(t('map.confirm.deleteAllMarkers'))) return;
        this.userMarkers = [];
        this.markerLayerGroup.clearLayers();
        this.saveToStorage();
        this.renderMarkersList();
        this.showToast(t('map.toast.allMarkersDeleted'));
    },

    saveToStorage() {
        const data = this.userMarkers.map(m => ({
            ...m,
            latlng: { lat: m.latlng.lat, lng: m.latlng.lng }
        }));
        localStorage.setItem('userMapMarkers', JSON.stringify(data));
    },

    loadFromStorage() {
        try {
            const data = localStorage.getItem('userMapMarkers');
            if (data) {
                JSON.parse(data).forEach(m => {
                    m.latlng = L.latLng(m.latlng.lat, m.latlng.lng);
                    this.userMarkers.push(m);
                    this.addMarkerToMap(m);
                });
            }
        } catch (e) {
            console.error('Failed to load user markers:', e);
        }
    },

    showToast(message) {
        const toast = document.getElementById('copyToast');
        if (!toast) return;
        const span = toast.querySelector('span');
        if (span) span.textContent = message;
        toast.classList.add('visible');
        setTimeout(() => toast.classList.remove('visible'), 2500);
    }
};

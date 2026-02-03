// ============================================================
// КОНФИГУРАЦИЯ КАРТЫ
// ============================================================

const MAP_CONFIG = {
    width: 11264,
    height: 16896,
    tileSize: 256,
    minZoom: 4,
    maxZoom: 8,      // Теперь можно ставить 8!
    defaultZoom: 5,
    nativeZoom: 7    // Базовый уровень - для которого указаны width/height
};

// ============================================================
// ИКОНКИ МАРКЕРОВ
// ============================================================

const MARKER_ICONS = {
    ammo: L.icon({ iconUrl: 'markers/ammo.png', iconSize: [24, 24], iconAnchor: [12, 12], popupAnchor: [0, -12] }),
    supply: L.icon({ iconUrl: 'markers/supply.png', iconSize: [24, 24], iconAnchor: [12, 12], popupAnchor: [0, -12] }),
    tools: L.icon({ iconUrl: 'markers/tool.svg', iconSize: [24, 24], iconAnchor: [12, 12], popupAnchor: [0, -12] }),
    barrels: L.icon({ iconUrl: 'markers/barrel.png', iconSize: [24, 24], iconAnchor: [12, 12], popupAnchor: [0, -12] }),
    science: L.icon({ iconUrl: 'markers/science.png', iconSize: [24, 24], iconAnchor: [12, 12], popupAnchor: [0, -12] }),
    stash: L.icon({ iconUrl: 'markers/stash.png', iconSize: [24, 24], iconAnchor: [12, 12], popupAnchor: [0, -12] }),
    blind_dog: L.icon({ iconUrl: 'markers/mutants/blinddog.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    pseudodog: L.icon({ iconUrl: 'markers/mutants/pseudodog.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    flesh: L.icon({ iconUrl: 'markers/mutants/flesh.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    boar: L.icon({ iconUrl: 'markers/mutants/boar.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    rat: L.icon({ iconUrl: 'markers/mutants/rat.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    snork: L.icon({ iconUrl: 'markers/mutants/snork.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    zombie: L.icon({ iconUrl: 'markers/mutants/zombie.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    bloodsucker: L.icon({ iconUrl: 'markers/mutants/bloodsucker.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    bloodsucker_strong: L.icon({ iconUrl: 'markers/mutants/strongbloodsucker.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    chimera: L.icon({ iconUrl: 'markers/mutants/chimera.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    trader: L.icon({ iconUrl: 'markers/dealer.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    zombified: L.icon({ iconUrl: 'markers/NPC/Zombified.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    bandits: L.icon({ iconUrl: 'markers/NPC/Bandits.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    military: L.icon({ iconUrl: 'markers/NPC/military.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    freedom: L.icon({ iconUrl: 'markers/NPC/freedom.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    duty: L.icon({ iconUrl: 'markers/NPC/Duty.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    mercs: L.icon({ iconUrl: 'markers/NPC/Mercs.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    sins: L.icon({ iconUrl: 'markers/NPC/Sin.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    monolith: L.icon({ iconUrl: 'markers/NPC/Monolith.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] }),
    obliterator: L.icon({ iconUrl: 'markers/NPC/Obliterator.png', iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14] })
};

// ============================================================
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ============================================================

let map;
let markerLayers = {};
let activeFilters = new Set();

// ============================================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initMarkers();
    initFilters();
    initSidebar();
    initControls();
    initMobileMenu();
    updateMarkerCounts();
});

function initMap() {
    map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: MAP_CONFIG.minZoom,
        maxZoom: MAP_CONFIG.maxZoom,
        zoomControl: false,
        attributionControl: false
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
    map.setMaxBounds(bounds.pad(0.1));

    map.on('mousemove', (e) => {
        const point = map.project(e.latlng, MAP_CONFIG.nativeZoom);
        document.getElementById('coordX').textContent = Math.round(point.x);
        document.getElementById('coordY').textContent = Math.round(point.y);
    });
}

function initMarkers() {
    if (typeof MARKERS_DATA === 'undefined') {
        console.error('MARKERS_DATA not loaded!');
        return;
    }

    Object.keys(MARKERS_DATA).forEach(type => {
        markerLayers[type] = L.layerGroup();
        
        MARKERS_DATA[type].forEach(markerData => {
            const pixelY = markerData.coords[0];
            const pixelX = markerData.coords[1];
            const latLng = map.unproject([pixelX, pixelY], MAP_CONFIG.nativeZoom);
            
            const icon = MARKER_ICONS[type];
            if (!icon) return;
            
            const marker = L.marker(latLng, { icon: icon });
            
            let popupContent = `<div class="marker-popup">`;
            if (markerData.image) {
                popupContent += `<img src="${markerData.image}" alt="" style="max-width: 280px; border-radius: 8px; margin-bottom: 10px;">`;
            }
            popupContent += `<div class="marker-popup__desc">${markerData.desc}</div>`;
            popupContent += `</div>`;
            
            marker.bindPopup(popupContent);
            markerLayers[type].addLayer(marker);
        });
        
        markerLayers[type].addTo(map);
        activeFilters.add(type);
    });
}

function initFilters() {
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            toggleFilter(checkbox.dataset.filter, checkbox.checked);
        });
    });

    document.querySelectorAll('.filter-group__header').forEach(header => {
        header.addEventListener('click', () => {
            header.closest('.filter-group').classList.toggle('open');
        });
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
    document.getElementById('sidebarToggle')?.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        setTimeout(() => map.invalidateSize(), 300);
    });

    document.getElementById('resetFilters')?.addEventListener('click', () => {
        document.querySelectorAll('.filter-checkbox').forEach(cb => {
            cb.checked = true;
            toggleFilter(cb.dataset.filter, true);
        });
    });
}

function initControls() {
    document.getElementById('zoomIn')?.addEventListener('click', () => map.zoomIn());
    document.getElementById('zoomOut')?.addEventListener('click', () => map.zoomOut());
    
    document.getElementById('resetView')?.addEventListener('click', () => {
        const center = map.unproject([MAP_CONFIG.width / 2, MAP_CONFIG.height / 2], MAP_CONFIG.maxZoom);
        map.setView(center, MAP_CONFIG.defaultZoom);
    });
    
    document.getElementById('fullscreen')?.addEventListener('click', () => {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen();
    });
}

function initMobileMenu() {
    document.getElementById('burger')?.addEventListener('click', function() {
        this.classList.toggle('active');
        document.getElementById('mobileMenu').classList.toggle('active');
    });
}

'use strict';

const DEFAULT_FILTERS = {
    q: '',
    category: 'all',
    location: 'all',
    sort: 'newest'
};

const CATEGORY_ICONS = {
    all: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>',
    quests: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>',
    combat: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>',
    progression: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>',
    equipment: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>',
    lore: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>',
    economy: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
    technical: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>'
};

let filters = { ...DEFAULT_FILTERS };
let searchDebounceTimer = null;
let guidesPickersBound = false;

document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    initScrollEffects();
    initLangDropdownClose();
    initNavCalculatorsDropdown();

    i18n.onReady(() => {
        initGuidesPage();
    });

    document.addEventListener('languageChanged', () => {
        renderCategoryNav();
        renderLocationPicker();
        renderSortPicker();
        renderGuides();
        updateResultsCount();
        updateListTitle();
    });
});

function initGuidesPage() {
    readFiltersFromUrl();
    bindFilterControls();
    initGuidesPickers();
    updateMastheadStats();
    renderCategoryNav();
    renderLocationPicker();
    renderSortPicker();
    renderGuides();
    updateResultsCount();
    updateListTitle();
    updateClearButtonVisibility();
}

function bindFilterControls() {
    const searchInput = document.getElementById('guidesSearch');
    const searchClear = document.getElementById('guidesSearchClear');
    const clearBtn = document.getElementById('guidesClearFilters');

    if (searchInput) {
        searchInput.value = filters.q;

        searchInput.addEventListener('input', () => {
            filters.q = searchInput.value.trim();

            if (searchClear) {
                searchClear.classList.toggle('visible', filters.q.length > 0);
            }

            clearTimeout(searchDebounceTimer);
            searchDebounceTimer = setTimeout(applyFilters, 220);
        });
    }

    if (searchClear) {
        searchClear.classList.toggle('visible', filters.q.length > 0);

        searchClear.addEventListener('click', () => {
            filters.q = '';

            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }

            searchClear.classList.remove('visible');
            applyFilters();
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', resetFilters);
    }
}

function initGuidesPickers() {
    if (guidesPickersBound) return;
    guidesPickersBound = true;

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.guides-picker')) {
            closeAllGuidesPickers();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeAllGuidesPickers();
        }
    });
}

function closeAllGuidesPickers() {
    document.querySelectorAll('.guides-picker.open').forEach(picker => {
        picker.classList.remove('open');

        const trigger = picker.querySelector('.guides-picker__trigger');
        if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
        }
    });
}

function toggleGuidesPicker(picker) {
    const isOpen = picker.classList.contains('open');
    closeAllGuidesPickers();

    if (isOpen) return;

    picker.classList.add('open');

    const trigger = picker.querySelector('.guides-picker__trigger');
    if (trigger) {
        trigger.setAttribute('aria-expanded', 'true');
    }

    const selected = picker.querySelector('.guides-picker__option.selected');
    if (selected) {
        selected.scrollIntoView({ block: 'nearest' });
    }
}

function bindGuidesPickerTrigger(picker, trigger) {
    if (!picker || !trigger || trigger.dataset.bound === '1') return;

    trigger.dataset.bound = '1';

    trigger.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleGuidesPicker(picker);
    });
}

function createPickerOption(value, labelKey, selected) {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'guides-picker__option';
    option.dataset.value = value;
    option.dataset.i18n = labelKey;
    option.textContent = t(labelKey);
    option.setAttribute('role', 'option');
    option.setAttribute('aria-selected', selected ? 'true' : 'false');

    if (selected) {
        option.classList.add('selected');
    }

    return option;
}

function renderLocationPicker() {
    const picker = document.getElementById('guidesLocationPicker');
    const menu = document.getElementById('guidesLocationMenu');
    const valueEl = document.getElementById('guidesLocationValue');
    const trigger = document.getElementById('guidesLocationTrigger');

    if (!picker || !menu || !valueEl) return;

    if (!GUIDE_LOCATIONS.includes(filters.location) && filters.location !== 'all') {
        filters.location = DEFAULT_FILTERS.location;
    }

    menu.innerHTML = '';

    const options = [
        { value: 'all', key: 'guides.loc.all' },
        ...GUIDE_LOCATIONS.map(locationId => ({
            value: locationId,
            key: `guides.loc.${locationId}`
        }))
    ];

    options.forEach(option => {
        const button = createPickerOption(option.value, option.key, option.value === filters.location);

        button.addEventListener('click', (event) => {
            event.stopPropagation();
            filters.location = option.value;
            closeAllGuidesPickers();
            renderLocationPicker();
            applyFilters();
        });

        menu.appendChild(button);
    });

    const selectedKey = filters.location === 'all'
        ? 'guides.loc.all'
        : `guides.loc.${filters.location}`;

    valueEl.dataset.i18n = selectedKey;
    valueEl.textContent = t(selectedKey);
    bindGuidesPickerTrigger(picker, trigger);
    i18n.translatePage();
}

function renderSortPicker() {
    const picker = document.getElementById('guidesSortPicker');
    const menu = document.getElementById('guidesSortMenu');
    const valueEl = document.getElementById('guidesSortValue');
    const trigger = document.getElementById('guidesSortTrigger');

    if (!picker || !menu || !valueEl) return;

    if (!GUIDE_SORT_OPTIONS.includes(filters.sort)) {
        filters.sort = DEFAULT_FILTERS.sort;
    }

    menu.innerHTML = '';

    GUIDE_SORT_OPTIONS.forEach(sortKey => {
        const labelKey = `guides.sort.${sortKey}`;
        const button = createPickerOption(sortKey, labelKey, sortKey === filters.sort);

        button.addEventListener('click', (event) => {
            event.stopPropagation();
            filters.sort = sortKey;
            closeAllGuidesPickers();
            renderSortPicker();
            applyFilters();
        });

        menu.appendChild(button);
    });

    const selectedKey = `guides.sort.${filters.sort}`;
    valueEl.dataset.i18n = selectedKey;
    valueEl.textContent = t(selectedKey);
    bindGuidesPickerTrigger(picker, trigger);
    i18n.translatePage();
}

function renderCategoryNav() {
    const container = document.getElementById('guidesCategories');
    if (!container) return;

    container.innerHTML = '';

    GUIDE_CATEGORIES.forEach(cat => {
        const count = countGuidesInCategory(cat.id);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'guides-nav__item';
        btn.dataset.category = cat.id;

        if (filters.category === cat.id) {
            btn.classList.add('active');
        }

        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.setAttribute('class', 'guides-nav__icon');
        icon.setAttribute('fill', 'none');
        icon.setAttribute('stroke', 'currentColor');
        icon.setAttribute('viewBox', '0 0 24 24');
        icon.setAttribute('aria-hidden', 'true');
        icon.innerHTML = CATEGORY_ICONS[cat.id] || CATEGORY_ICONS.all;
        btn.appendChild(icon);

        const label = document.createElement('span');
        label.className = 'guides-nav__label';
        label.dataset.i18n = `guides.cat.${cat.id}`;
        label.textContent = t(`guides.cat.${cat.id}`);
        btn.appendChild(label);

        const countEl = document.createElement('span');
        countEl.className = 'guides-nav__count';
        countEl.textContent = String(count);
        btn.appendChild(countEl);

        btn.addEventListener('click', () => {
            filters.category = cat.id;
            container.querySelectorAll('.guides-nav__item').forEach(el => {
                el.classList.toggle('active', el.dataset.category === cat.id);
            });
            applyFilters();
            updateListTitle();
        });

        container.appendChild(btn);
    });

    i18n.translatePage();
}

function countGuidesInCategory(categoryId) {
    if (categoryId === 'all') return GUIDES.length;
    return GUIDES.filter(g => g.category === categoryId).length;
}

function getFilteredGuides() {
    const query = filters.q.toLowerCase();

    let result = GUIDES.filter(guide => {
        if (filters.category !== 'all' && guide.category !== filters.category) {
            return false;
        }

        if (filters.location !== 'all' && guide.location !== filters.location) {
            return false;
        }

        if (!query) return true;

        const title = t(`guides.items.${guide.id}.title`).toLowerCase();
        const desc = t(`guides.items.${guide.id}.desc`).toLowerCase();
        const tags = guide.tags.map(tag => t(`guides.tag.${tag}`).toLowerCase()).join(' ');
        const location = guide.location ? t(`guides.loc.${guide.location}`).toLowerCase() : '';

        return title.includes(query) || desc.includes(query) || tags.includes(query) || location.includes(query);
    });

    return sortGuides(result, filters.sort);
}

function sortGuides(list, sortKey) {
    const sorted = [...list];

    switch (sortKey) {
        case 'oldest':
            sorted.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
            break;
        case 'title':
            sorted.sort((a, b) => t(`guides.items.${a.id}.title`).localeCompare(
                t(`guides.items.${b.id}.title`),
                i18n.getCurrentLang()
            ));
            break;
        case 'newest':
        default:
            sorted.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
            break;
    }

    return sorted;
}

function renderGuides() {
    const archive = document.getElementById('guidesGrid');
    const empty = document.getElementById('guidesEmpty');
    if (!archive || !empty) return;

    const guides = getFilteredGuides();

    archive.innerHTML = '';

    if (guides.length === 0) {
        archive.hidden = true;
        empty.classList.add('visible');
        return;
    }

    archive.hidden = false;
    empty.classList.remove('visible');

    guides.forEach((guide, index) => {
        archive.appendChild(createGuideEntry(guide, index));
    });
}

function getGuideUrl(guide) {
    const folder = guide.type === 'quest' ? 'quests' : 'handbooks';
    return `${folder}/${guide.slug}/`;
}

function createGuideEntry(guide, index) {
    const isSoon = !guide.published;
    const entry = document.createElement(isSoon ? 'article' : 'a');

    entry.className = 'guide-entry';
    entry.dataset.category = guide.category;
    entry.style.setProperty('--entry-delay', `${Math.min(index, 11) * 45}ms`);

    if (isSoon) {
        entry.classList.add('guide-entry--soon');
    } else {
        entry.href = getGuideUrl(guide);
        entry.setAttribute('aria-label', t('guides.openGuide'));
    }

    const visual = document.createElement('div');
    visual.className = 'guide-entry__visual';

    const img = document.createElement('img');
    img.src = guide.image;
    img.alt = '';
    img.width = 172;
    img.height = 148;
    img.loading = 'lazy';
    img.decoding = 'async';
    visual.appendChild(img);

    entry.appendChild(visual);

    const body = document.createElement('div');
    body.className = 'guide-entry__body';

    const top = document.createElement('div');
    top.className = 'guide-entry__top';

    const tagsRow = document.createElement('div');
    tagsRow.className = 'guide-entry__tags-row';

    const cat = document.createElement('span');
    cat.className = 'guide-entry__cat';
    cat.textContent = t(`guides.cat.${guide.category}`);
    tagsRow.appendChild(cat);

    if (isSoon) {
        const soon = document.createElement('span');
        soon.className = 'guide-entry__flag guide-entry__flag--soon';
        soon.textContent = t('guides.soon');
        tagsRow.appendChild(soon);
    }

    top.appendChild(tagsRow);

    if (guide.location) {
        const location = document.createElement('span');
        location.className = 'guide-entry__location';
        location.innerHTML = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>${t(`guides.loc.${guide.location}`)}`;
        top.appendChild(location);
    }

    body.appendChild(top);

    const title = document.createElement('h3');
    title.className = 'guide-entry__title';
    title.textContent = t(`guides.items.${guide.id}.title`);
    body.appendChild(title);

    const desc = document.createElement('p');
    desc.className = 'guide-entry__desc';
    desc.textContent = t(`guides.items.${guide.id}.desc`);
    body.appendChild(desc);

    if (guide.tags.length) {
        const keywords = document.createElement('div');
        keywords.className = 'guide-entry__keywords';

        guide.tags.slice(0, 4).forEach(tag => {
            const tagEl = document.createElement('span');
            tagEl.className = 'guide-entry__keyword';
            tagEl.textContent = t(`guides.tag.${tag}`);
            keywords.appendChild(tagEl);
        });

        body.appendChild(keywords);
    }

    const foot = document.createElement('div');
    foot.className = 'guide-entry__foot';

    const meta = document.createElement('div');
    meta.className = 'guide-entry__meta';

    const updated = document.createElement('span');
    updated.className = 'guide-entry__meta-item';
    updated.textContent = formatGuideDate(guide.updatedAt);
    meta.appendChild(updated);

    foot.appendChild(meta);

    if (!isSoon) {
        const action = document.createElement('span');
        action.className = 'guide-entry__action';
        action.innerHTML = `${t('guides.openGuide')}<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>`;
        foot.appendChild(action);
    }

    body.appendChild(foot);
    entry.appendChild(body);

    return entry;
}

function formatGuideDate(isoDate) {
    const date = new Date(isoDate);

    if (Number.isNaN(date.getTime())) return '';

    return new Intl.DateTimeFormat(i18n.getCurrentLang() === 'en' ? 'en-GB' : 'ru-RU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(date);
}

function updateMastheadStats() {
    const questsEl = document.getElementById('guidesQuestCount');
    const handbooksEl = document.getElementById('guidesHandbookCount');

    if (questsEl) {
        questsEl.textContent = String(GUIDES.filter(g => g.category === 'quests').length);
    }

    if (handbooksEl) {
        handbooksEl.textContent = String(GUIDES.filter(g => g.category !== 'quests').length);
    }
}

function updateResultsCount() {
    const el = document.getElementById('guidesResults');
    if (!el) return;

    const count = getFilteredGuides().length;

    if (count === 1) {
        el.textContent = t('guides.resultsCountOne');
    } else {
        el.textContent = t('guides.resultsCount', { count });
    }
}

function updateListTitle() {
    const el = document.getElementById('guidesListTitle');
    if (!el) return;

    if (filters.category === 'all') {
        el.dataset.i18n = 'guides.allGuides';
        el.textContent = t('guides.allGuides');
    } else {
        el.removeAttribute('data-i18n');
        el.textContent = t(`guides.cat.${filters.category}`);
    }
}

function updateClearButtonVisibility() {
    const clearBtn = document.getElementById('guidesClearFilters');
    if (!clearBtn) return;

    const hasActiveFilters =
        filters.q !== DEFAULT_FILTERS.q ||
        filters.category !== DEFAULT_FILTERS.category ||
        filters.location !== DEFAULT_FILTERS.location ||
        filters.sort !== DEFAULT_FILTERS.sort;

    clearBtn.classList.toggle('visible', hasActiveFilters);
}

function applyFilters() {
    writeFiltersToUrl();
    renderGuides();
    updateResultsCount();
    updateClearButtonVisibility();
}

function resetFilters() {
    filters = { ...DEFAULT_FILTERS };

    const searchInput = document.getElementById('guidesSearch');
    const searchClear = document.getElementById('guidesSearchClear');

    if (searchInput) searchInput.value = '';
    if (searchClear) searchClear.classList.remove('visible');

    closeAllGuidesPickers();
    renderLocationPicker();
    renderSortPicker();
    renderCategoryNav();
    updateListTitle();
    applyFilters();
}

function readFiltersFromUrl() {
    const params = new URLSearchParams(window.location.search);

    filters = {
        q: params.get('q') || DEFAULT_FILTERS.q,
        category: params.get('category') || DEFAULT_FILTERS.category,
        location: params.get('location') || DEFAULT_FILTERS.location,
        sort: params.get('sort') || DEFAULT_FILTERS.sort
    };

    if (!GUIDE_CATEGORIES.some(c => c.id === filters.category)) {
        filters.category = DEFAULT_FILTERS.category;
    }

    if (filters.location !== 'all' && !GUIDE_LOCATIONS.includes(filters.location)) {
        filters.location = DEFAULT_FILTERS.location;
    }

    if (!GUIDE_SORT_OPTIONS.includes(filters.sort)) {
        filters.sort = DEFAULT_FILTERS.sort;
    }
}

function writeFiltersToUrl() {
    const params = new URLSearchParams();

    if (filters.q) params.set('q', filters.q);
    if (filters.category !== DEFAULT_FILTERS.category) params.set('category', filters.category);
    if (filters.location !== DEFAULT_FILTERS.location) params.set('location', filters.location);
    if (filters.sort !== DEFAULT_FILTERS.sort) params.set('sort', filters.sort);

    const query = params.toString();
    const newUrl = query
        ? `${window.location.pathname}?${query}`
        : window.location.pathname;

    window.history.replaceState(null, '', newUrl);
}

function t(key, params) {
    if (window.i18n && typeof window.i18n.t === 'function') {
        return window.i18n.t(key, params);
    }

    return key;
}

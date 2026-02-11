'use strict';

document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    initScrollEffects();
    initCategoryNav();
    renderAllArtifactTables();
});

document.addEventListener('languageChanged', () => {
    renderAllArtifactTables();
});

function initBurgerMenu() {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!burger || !mobileMenu) return;

    burger.addEventListener('click', () => {
        const isActive = burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        burger.setAttribute('aria-expanded', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            burger.focus();
        }
    });

    const mediaQuery = window.matchMedia('(min-width: 1025px)');
    mediaQuery.addEventListener('change', (e) => {
        if (e.matches && mobileMenu.classList.contains('active')) {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

function initScrollEffects() {
    const header = document.querySelector('.header');
    const scrollTopBtn = document.getElementById('scrollTop');

    if (!header) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;

                header.style.background = scrollY > 50
                    ? 'rgba(10, 10, 11, 0.98)'
                    : 'rgba(10, 10, 11, 0.9)';

                if (scrollTopBtn) {
                    scrollTopBtn.classList.toggle('visible', scrollY > 500);
                }

                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function initCategoryNav() {
    const headerHeight = 70;
    const categoryNavHeight = 80;
    const offset = headerHeight + categoryNavHeight;

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(btn.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

const TABLE_CATEGORIES = [
    {
        id: 'gravity',
        titleKey: 'artifacts.catFull.gravity',
        titleFallback: 'Гравитационные артефакты',
        countKey: 'artifacts.artifactsCount',
        countFallback: 'артефактов',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0 0 20"/>
            <path d="M12 2a10 10 0 0 1 0 20"/><path d="M2 12h20"/>
        </svg>`,
        isEvent: false
    },
    {
        id: 'chemical',
        titleKey: 'artifacts.catFull.chemical',
        titleFallback: 'Химические артефакты',
        countKey: 'artifacts.artifactsCount',
        countFallback: 'артефактов',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/>
            <path d="M8.5 2h7"/><path d="M7 16h10"/>
        </svg>`,
        isEvent: false
    },
    {
        id: 'electric',
        titleKey: 'artifacts.catFull.electric',
        titleFallback: 'Электрические артефакты',
        countKey: 'artifacts.artifactsCount',
        countFallback: 'артефактов',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>`,
        isEvent: false
    },
    {
        id: 'thermal',
        titleKey: 'artifacts.catFull.thermal',
        titleFallback: 'Термические артефакты',
        countKey: 'artifacts.artifactsCount',
        countFallback: 'артефактов',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v10l3 3"/><circle cx="12" cy="14" r="8"/>
        </svg>`,
        isEvent: false
    },
    {
        id: 'unique',
        titleKey: 'artifacts.catFull.unique',
        titleFallback: 'Уникальные артефакты',
        countKey: 'artifacts.artifactsCount',
        countFallback: 'артефактов',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>`,
        isEvent: false
    },
    {
        id: 'frost',
        titleKey: 'artifacts.catFull.frost',
        titleFallback: 'Морозные артефакты',
        countKey: 'artifacts.artifactsCount',
        countFallback: 'артефактов',
        svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v20"/><path d="M2 12h20"/>
            <path d="M4.93 4.93l14.14 14.14"/><path d="M19.07 4.93L4.93 19.07"/>
            <circle cx="12" cy="12" r="4"/>
        </svg>`,
        isEvent: true,
        eventKey: 'artifacts.winterEvent',
        eventFallback: 'Зимний ивент'
    }
];

function tbl_t(key, fallback) {
    if (window.i18n && typeof window.i18n.t === 'function') {
        const result = window.i18n.t(key);
        if (result && result !== key) return result;
    }
    return fallback || key;
}

function buildPropertyHtml(statKey, value) {
    const isInverted = INVERTED_STATS.includes(statKey);
    const statName = getStatName(statKey);
    const unit = getStatUnit(statKey);

    let isPositive;
    if (value > 0) {
        isPositive = !isInverted;
    } else if (value < 0) {
        isPositive = isInverted;
    } else {
        isPositive = true;
    }

    const cssClass = isPositive ? 'property--positive' : 'property--negative';
    const displayValue = value > 0 ? `+${formatNumber(value)}` : formatNumber(value);

    return `<span class="property ${cssClass}">${statName}: ${displayValue}${unit}</span>`;
}

function buildPriceHtml(artifact) {
    if (artifact.price !== null && artifact.price !== undefined) {
        return `<span class="price">${formatPrice(artifact.price)}</span>`;
    }

    const priceText = getLocalizedField(artifact, 'priceText');
    if (priceText) {
        return `<span class="price price--none">${priceText}</span>`;
    }

    return `<span class="price">—</span>`;
}

function buildTierBadge(tier) {
    if (tier === 'unique') {
        return `<span class="tier-badge tier-badge--unique">★</span>`;
    }
    return `<span class="tier-badge tier-badge--${tier}">${tier}</span>`;
}

function buildArtifactRow(artifact) {
    const tierHtml = buildTierBadge(artifact.tier);
    const imgPath = `${artifact.imageFolder}/${artifact.image}`;
    const nameRu = artifact.name;
    const nameEn = artifact.nameEn || '';

    const propsHtml = Object.entries(artifact.stats)
        .map(([key, value]) => buildPropertyHtml(key, value))
        .join('');

    const priceHtml = buildPriceHtml(artifact);

    return `
        <tr>
            <td class="tier-cell">${tierHtml}</td>
            <td class="artifact-image-cell"><img src="${imgPath}" alt="${nameRu}" class="artifact-image" loading="lazy"></td>
            <td><div class="artifact-name"><span class="artifact-name__ru">${nameRu}</span><span class="artifact-name__en">${nameEn}</span></div></td>
            <td><div class="properties-list">${propsHtml}</div></td>
            <td class="price-cell">${priceHtml}</td>
        </tr>`;
}

function buildCategorySection(categoryDef) {
    const artifacts = ARTIFACTS.filter(a => a.category === categoryDef.id);
    if (artifacts.length === 0) return '';

    const title = tbl_t(categoryDef.titleKey, categoryDef.titleFallback);
    const countWord = tbl_t(categoryDef.countKey, categoryDef.countFallback);

    const eventBadge = categoryDef.isEvent
        ? `<span class="category-header__event" data-i18n="${categoryDef.eventKey}">${tbl_t(categoryDef.eventKey, categoryDef.eventFallback)}</span>`
        : '';

    const rowsHtml = artifacts.map(a => buildArtifactRow(a)).join('');

    return `
        <div class="artifact-category" id="${categoryDef.id}">
            <div class="category-header category-header--${categoryDef.id}">
                <div class="category-header__icon">${categoryDef.svgIcon}</div>
                <h2 class="category-header__title" data-i18n="${categoryDef.titleKey}">${title}</h2>
                <span class="category-header__count">${artifacts.length} <span data-i18n="${categoryDef.countKey}">${countWord}</span></span>
                ${eventBadge}
            </div>
            <div class="artifacts-table-wrapper">
                <table class="artifacts-table">
                    <thead>
                        <tr>
                            <th class="th-tier" data-i18n="artifacts.th.tier">${tbl_t('artifacts.th.tier', 'Ур.')}</th>
                            <th class="th-image" data-i18n="artifacts.th.icon">${tbl_t('artifacts.th.icon', 'Иконка')}</th>
                            <th class="th-name" data-i18n="artifacts.th.name">${tbl_t('artifacts.th.name', 'Название')}</th>
                            <th class="th-properties" data-i18n="artifacts.th.properties">${tbl_t('artifacts.th.properties', 'Свойства')}</th>
                            <th class="th-price" data-i18n="artifacts.th.price">${tbl_t('artifacts.th.price', 'Цена')}</th>
                        </tr>
                    </thead>
                    <tbody>${rowsHtml}</tbody>
                </table>
            </div>
        </div>`;
}

function renderAllArtifactTables() {
    const container = document.getElementById('artifactsContainer');
    if (!container) return;

    container.innerHTML = TABLE_CATEGORIES.map(cat => buildCategorySection(cat)).join('');

    container.querySelectorAll('.artifact-image').forEach(img => {
        img.addEventListener('error', function () {
            this.src = '../images/placeholder.png';
        }, { once: true });
    });
}

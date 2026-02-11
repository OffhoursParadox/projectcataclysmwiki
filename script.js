'use strict';

document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    initScrollEffects();
    initLangDropdownClose();
    loadUpdates();
});

function loadUpdates() {
    const container = document.getElementById('updatesContent');
    if (!container) return;

    fetch('updates.json')
        .then(res => {
            if (!res.ok) throw new Error(res.status);
            return res.json();
        })
        .then(updates => {
            renderUpdates(updates, container);

            document.addEventListener('languageChanged', () => {
                renderUpdates(updates, container);
            });
        })
        .catch(() => {
            container.innerHTML = '<p style="color:var(--color-text-muted);padding:16px;">Не удалось загрузить обновления</p>';
        });
}

function renderUpdates(updates, container) {
    const lang = localStorage.getItem('wiki-lang') || 'ru';

    container.innerHTML = updates.map(entry => `
        <div class="update-entry">
            <span class="update-entry__date">${entry.date[lang] || entry.date.ru}</span>
            <ul class="update-entry__list">
                ${entry.items.map(item =>
                    `<li>${item[lang] || item.ru}</li>`
                ).join('')}
            </ul>
        </div>
    `).join('');
}

function initBurgerMenu() {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!burger || !mobileMenu) return;
    
    burger.addEventListener('click', () => {
        const isActive = burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        burger.setAttribute('aria-expanded', isActive);

        document.body.style.overflow = isActive ? 'hidden' : '';

        const langDropdown = document.getElementById('langDropdown');
        if (langDropdown) {
            langDropdown.classList.remove('active');
        }
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
                    scrollTopBtn.classList.toggle('visible', scrollY > 300);
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

function initLangDropdownClose() {
    document.addEventListener('click', (e) => {
        const langDropdown = document.getElementById('langDropdown');
        const langSwitcher = document.getElementById('langSwitcher');
        
        if (langDropdown && langSwitcher && 
            !langSwitcher.contains(e.target) && 
            !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('active');
            langSwitcher.setAttribute('aria-expanded', 'false');
        }
    });
}

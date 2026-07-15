'use strict';

document.addEventListener('DOMContentLoaded', () => {
    initBurgerMenu();
    initScrollEffects();
    initLangDropdownClose();
    initNavCalculatorsDropdown();
    initGuideScrollSpy();
    initGuideStepAnchors();
});

function openGuideStep(target) {
    if (!(target instanceof HTMLElement)) return null;

    const details = target instanceof HTMLDetailsElement
        ? target
        : target.closest('details');

    if (details instanceof HTMLDetailsElement) {
        details.open = true;
        return details;
    }

    return target;
}

function scrollToGuideTarget(target) {
    const node = openGuideStep(target);
    if (!(node instanceof HTMLElement)) return;

    node.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initGuideStepAnchors() {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const target = document.getElementById(hash);
    if (!target) return;

    // Wait a frame so open details reflow before scrolling.
    requestAnimationFrame(() => {
        scrollToGuideTarget(target);
    });
}

function initGuideScrollSpy() {
    const nav = document.getElementById('guideNav');
    if (!nav) return;

    const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;

    const sections = links
        .map(link => {
            const id = link.getAttribute('href').slice(1);
            const section = document.getElementById(id);
            return section ? { link, section } : null;
        })
        .filter(Boolean);

    if (!sections.length) return;

    const setActive = (id) => {
        let passed = true;

        links.forEach(link => {
            const isActive = link.getAttribute('href') === `#${id}`;

            link.classList.toggle('active', isActive);
            link.classList.toggle('is-done', passed && !isActive);

            if (isActive) {
                passed = false;
            }
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            const visible = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visible.length) {
                setActive(visible[0].target.id);
            }
        },
        {
            rootMargin: '-20% 0px -55% 0px',
            threshold: [0, 0.25, 0.5, 0.75, 1]
        }
    );

    sections.forEach(({ section }) => observer.observe(section));

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            const id = link.getAttribute('href').slice(1);
            const target = document.getElementById(id);

            if (!target) return;

            event.preventDefault();
            scrollToGuideTarget(target);
            history.replaceState(null, '', `#${id}`);
            setActive(id);
        });
    });
}

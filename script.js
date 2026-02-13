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

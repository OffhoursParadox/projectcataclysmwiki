const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.querySelector('.header');
const scrollTopBtn = document.getElementById('scrollTop');

if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

window.addEventListener('scroll', () => {
    header.style.background = window.scrollY > 50 
        ? 'rgba(10, 10, 11, 0.98)' 
        : 'rgba(10, 10, 11, 0.9)';
    scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(btn.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 140,
                behavior: 'smooth'
            });
        }
    });
});

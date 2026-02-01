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
    
    if (scrollTopBtn) {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

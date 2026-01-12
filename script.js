const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.querySelector('.header');

if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

window.addEventListener('scroll', () => {
    header.style.background = window.scrollY > 50 
        ? 'rgba(10, 10, 11, 0.95)' 
        : 'rgba(10, 10, 11, 0.8)';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

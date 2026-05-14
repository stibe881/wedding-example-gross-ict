// ===== Nav Scroll Effect =====
function initNav() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ===== Reveal on Scroll =====
function initReveal() {
    const els = document.querySelectorAll('.package-card, .cta-content');
    els.forEach(el => el.classList.add('reveal'));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
        });
    }, { threshold: 0.15 });
    els.forEach(el => observer.observe(el));
}

// ===== Smooth scroll =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initReveal();
    initSmoothScroll();
});

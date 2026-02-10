// Navbar scroll effect
const nav = document.querySelector('.nav');

if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
            nav.style.background = 'rgba(17, 17, 17, 0.95)';
        } else {
            nav.style.boxShadow = 'none';
            nav.style.background = 'rgba(17, 17, 17, 0.8)';
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements with stagger for grid items
function initAnimations() {
    // Single elements
    document.querySelectorAll('.project, .contact-card, .about-content, .section-title, .oss-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Grid items with stagger
    document.querySelectorAll('.skills-grid, .mobile-app-strip').forEach(grid => {
        const items = grid.children;
        Array.from(items).forEach((item, i) => {
            item.classList.add('fade-in');
            item.style.transitionDelay = `${i * 0.1}s`;
            observer.observe(item);
        });
    });
}

initAnimations();

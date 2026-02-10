/* ============================================
   AARON STRICKLAND — PORTFOLIO JS
   ============================================ */

// Typing animation
const lines = [
    'whoami → Aaron Strickland',
    'location → Lincoln, UK',
    'role → Mobile Developer',
    'stack → Swift · Kotlin · React Native',
    'apps shipped → 5+'
];

const typedEl = document.getElementById('typed');
let lineIndex = 0;
let charIndex = 0;
let deleting = false;
let pauseTimer = 0;

function typeLoop() {
    const currentLine = lines[lineIndex];
    
    if (!deleting) {
        typedEl.textContent = currentLine.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentLine.length) {
            deleting = true;
            pauseTimer = setTimeout(typeLoop, 2500);
            return;
        }
        pauseTimer = setTimeout(typeLoop, 70 + Math.random() * 50);
    } else {
        typedEl.textContent = currentLine.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            deleting = false;
            lineIndex = (lineIndex + 1) % lines.length;
            pauseTimer = setTimeout(typeLoop, 500);
            return;
        }
        pauseTimer = setTimeout(typeLoop, 20);
    }
}

// Start typing after a short delay
setTimeout(typeLoop, 800);

// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal, .reveal-delay, .reveal-delay-2, .reveal-up').forEach(el => {
    observer.observe(el);
});

// Smooth active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 200;
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${id}`) {
                    link.style.color = 'var(--accent)';
                }
            });
        }
    });
}, { passive: true });

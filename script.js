// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Hover effect for cursor
const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('py-2');
        navbar.classList.remove('py-4');
    } else {
        navbar.classList.add('py-4');
        navbar.classList.remove('py-2');
    }
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Auto-count projects
const projectCards = document.querySelectorAll('.project-card');
const projectCountEl = document.getElementById('project-count');
if (projectCountEl && projectCards.length > 0) {
    projectCountEl.textContent = `${projectCards.length} proyecto${projectCards.length !== 1 ? 's' : ''} principales`;
}

// Form handling
const form = document.querySelector('form[name="contacto"]');
const successMsg = document.getElementById('form-success');
const errorMsg = document.getElementById('form-error');

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === 'true') {
    successMsg.style.display = 'block';
    form.reset();
}

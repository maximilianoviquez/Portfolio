'use strict';

/* -------- tech stack data (add new skills here as an object) -------- */
const ICON_BASE = 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/';

const CATEGORIES = [
    { key: 'backend', es: 'Backend', en: 'Backend', accent: 'var(--violet)' },
    { key: 'frontend', es: 'Frontend', en: 'Frontend', accent: 'var(--yellow)' },
    { key: 'databases', es: 'Bases de datos', en: 'Databases', accent: 'var(--green)' },
    { key: 'cloud', es: 'Cloud', en: 'Cloud', accent: 'var(--blue)' },
    { key: 'devops', es: 'DevOps', en: 'DevOps', accent: 'var(--violet)' },
    { key: 'integrations', es: 'Integraciones', en: 'Integrations', accent: 'var(--yellow)' },
    { key: 'testing', es: 'Testing', en: 'Testing', accent: 'var(--green)' },
    { key: 'tools', es: 'Herramientas', en: 'Tools', accent: 'var(--blue)' },
];

const SKILLS = [
    { name: 'C#', slug: 'csharp', category: 'backend' },
    { name: 'Node.js', slug: 'nodedotjs', category: 'backend' },
    { name: 'JavaScript', slug: 'javascript', category: 'backend' },
    { name: 'TypeScript', slug: 'typescript', category: 'backend' },
    { name: '.NET', slug: 'dotnet', category: 'backend' },
    { name: 'Java', slug: 'java', category: 'backend' },
    { name: 'Express.js', slug: 'express', category: 'backend' },
    { name: 'NestJS', slug: 'nestjs', category: 'backend' },
    { name: 'InversifyJS', slug: null, category: 'backend' },

    { name: 'HTML5', slug: 'html5', category: 'frontend' },
    { name: 'CSS3', slug: 'css3', category: 'frontend' },
    { name: 'React', slug: 'react', category: 'frontend' },
    { name: 'React Native', slug: 'react', category: 'frontend' },
    { name: 'Expo', slug: 'expo', category: 'frontend' },
    { name: 'Vite', slug: 'vite', category: 'frontend' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', category: 'frontend' },
    { name: 'Redux Toolkit', slug: 'redux', category: 'frontend' },

    { name: 'SQL Server', slug: 'microsoftsqlserver', category: 'databases' },
    { name: 'PostgreSQL', slug: 'postgresql', category: 'databases' },
    { name: 'MongoDB', slug: 'mongodb', category: 'databases' },
    { name: 'Firebase', slug: 'firebase', category: 'databases' },
    { name: 'Firestore', slug: 'firebase', category: 'databases' },
    { name: 'Redis', slug: 'redis', category: 'databases' },

    { name: 'AWS', slug: 'amazonaws', category: 'cloud' },
    { name: 'GCP', slug: 'googlecloud', category: 'cloud' },
    { name: 'Cloudflare R2', slug: 'cloudflare', category: 'cloud' },

    { name: 'Docker', slug: 'docker', category: 'devops' },
    { name: 'Docker Compose', slug: 'docker', category: 'devops' },
    { name: 'RabbitMQ', slug: 'rabbitmq', category: 'devops' },
    { name: 'BullMQ', slug: null, category: 'devops' },
    { name: 'GitHub Actions', slug: 'githubactions', category: 'devops' },
    { name: 'Azure DevOps', slug: 'azuredevops', category: 'devops' },
    { name: 'PM2', slug: 'pm2', category: 'devops' },
    { name: 'EAS', slug: 'expo', category: 'devops' },

    { name: 'Twilio', slug: 'twilio', category: 'integrations' },
    { name: 'SendGrid', slug: 'sendgrid', category: 'integrations' },
    { name: 'FCM', slug: 'firebase', category: 'integrations' },
    { name: 'Google Play', slug: 'googleplay', category: 'integrations' },
    { name: 'Apple IAP', slug: 'apple', category: 'integrations' },
    { name: 'Mapbox', slug: 'mapbox', category: 'integrations' },
    { name: 'OSRM', slug: 'openstreetmap', category: 'integrations' },
    { name: 'Elasticsearch', slug: 'elasticsearch', category: 'integrations' },

    { name: 'Jest', slug: 'jest', category: 'testing' },
    { name: 'Cypress', slug: 'cypress', category: 'testing' },

    { name: 'Swagger', slug: 'swagger', category: 'tools' },
    { name: 'Postman', slug: 'postman', category: 'tools' },
    { name: 'Astah', slug: null, category: 'tools' },
    { name: 'Prisma', slug: 'prisma', category: 'tools' },
];

function renderTechGrid() {
    const grid = document.getElementById('tech-grid');
    if (!grid) return;
    const lang = document.documentElement.dataset.lang === 'en' ? 'en' : 'es';

    CATEGORIES.forEach(cat => {
        const items = SKILLS.filter(s => s.category === cat.key);
        if (!items.length) return;

        const section = document.createElement('div');
        section.className = 'tech-category reveal';
        section.style.setProperty('--accent', cat.accent);

        const title = document.createElement('h4');
        title.className = 'tech-category-title';
        title.textContent = cat[lang];
        section.appendChild(title);

        const list = document.createElement('ul');
        list.className = 'tech-tiles';

        items.forEach(item => {
            const tile = document.createElement('li');
            tile.className = 'tech-tile' + (item.slug ? '' : ' no-icon');

            const icon = document.createElement('span');
            icon.className = 'tech-icon';
            if (item.slug) {
                icon.style.webkitMaskImage = `url("${ICON_BASE}${item.slug}.svg")`;
                icon.style.maskImage = `url("${ICON_BASE}${item.slug}.svg")`;
            } else {
                icon.textContent = item.name.slice(0, 2);
            }

            const name = document.createElement('span');
            name.className = 'tech-name';
            name.textContent = item.name;

            tile.appendChild(icon);
            tile.appendChild(name);
            list.appendChild(tile);
        });

        section.appendChild(list);
        grid.appendChild(section);
    });
}

/* -------- language toggle -------- */
function initLangToggle() {
    const toggle = document.getElementById('lang-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const current = document.documentElement.dataset.lang === 'en' ? 'en' : 'es';
        const next = current === 'en' ? 'es' : 'en';
        document.documentElement.dataset.lang = next;
        document.documentElement.lang = next;
        try { localStorage.setItem('lang', next); } catch (e) {}
    });
}

/* -------- reveal on scroll -------- */
function initReveal() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = document.querySelectorAll('.reveal');

    if (prefersReduced || !('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: .15, rootMargin: '0px 0px -40px 0px' });

    items.forEach(el => observer.observe(el));
}

/* -------- sticky header + active nav link -------- */
function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const links = document.querySelectorAll('.nav-link');
    const sections = Array.from(links)
        .map(link => document.getElementById(link.dataset.target))
        .filter(Boolean);

    if (!('IntersectionObserver' in window) || !sections.length) return;

    const setActive = (id) => {
        links.forEach(link => link.classList.toggle('active', link.dataset.target === id));
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActive(entry.target.id);
        });
    }, { rootMargin: '-45% 0px -45% 0px' });

    sections.forEach(section => sectionObserver.observe(section));
}

/* -------- mobile nav -------- */
function initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');
    if (!toggle || !nav) return;

    const close = () => {
        nav.classList.remove('nav--open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('nav--open');
        toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', close));
}

/* -------- stat counters -------- */
function initStats() {
    const stats = document.querySelectorAll('.stat-number');
    if (!stats.length || !('IntersectionObserver' in window)) return;

    const animate = (el) => {
        const target = parseInt(el.dataset.count, 10) || 0;
        const suffix = el.dataset.suffix || '';
        const duration = 1200;
        const start = performance.now();

        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: .6 });

    stats.forEach(el => observer.observe(el));
}

/* -------- mouse glow on cards -------- */
function initCardGlow() {
    document.querySelectorAll('.timeline-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
            card.style.setProperty('--my', `${e.clientY - rect.top}px`);
        });
    });
}

function initFooterYear() {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
    renderTechGrid();
    initLangToggle();
    initReveal();
    initHeader();
    initMobileNav();
    initStats();
    initCardGlow();
    initFooterYear();
});

const pages = [
  { path: '', label: 'Home' },
  { path: 'gallery', label: 'Gallery' },
  { path: 'events', label: 'Events' },
  { path: 'performances', label: 'Performances' },
  { path: 'results', label: 'Results' },
  { path: 'journey', label: 'Our Journey' },
  { path: 'about', label: 'About Us' },
];

export function renderNavbar() {
  const nav = document.getElementById('navbar');
  const currentHash = window.location.hash.slice(1) || '';

  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="navbar-inner">
      <a class="navbar-logo" data-nav="">
        <span class="navbar-logo-text" style="font-family: 'Samarkan', cursive; font-size: var(--text-2xl); color: var(--cream);">Seven.84</span>
      </a>
      <div class="navbar-links">
        ${pages.map(p => `
          <a class="navbar-link ${currentHash === p.path ? 'active' : ''}" data-nav="${p.path}">
            ${p.label}
          </a>
        `).join('')}
      </div>
      <button class="navbar-toggle" id="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="navbar-mobile-overlay" id="mobile-overlay">
      ${pages.map(p => `
        <a class="navbar-link ${currentHash === p.path ? 'active' : ''}" data-nav="${p.path}">
          ${p.label}
        </a>
      `).join('')}
    </div>
  `;

  // Navigation click handlers
  nav.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const path = link.getAttribute('data-nav');
      window.location.hash = path;
      closeMobileMenu();
    });
  });

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  const overlay = document.getElementById('mobile-overlay');
  
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
  });

  // Scroll behavior — solid nav on scroll
  setupScrollBehavior(nav);
}

function closeMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const overlay = document.getElementById('mobile-overlay');
  if (toggle && overlay) {
    toggle.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function setupScrollBehavior(nav) {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

export function updateActiveLink() {
  const currentHash = window.location.hash.slice(1) || '';
  document.querySelectorAll('.navbar-link').forEach(link => {
    const path = link.getAttribute('data-nav');
    if (path === currentHash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

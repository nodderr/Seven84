const pages = [
  { path: '', label: 'Home' },
  { path: 'events', label: 'Events' },
  { path: 'performances', label: 'Performances' },
  { path: 'results', label: 'Results' },
  { path: 'journey', label: 'Our Journey' },
  { path: 'about', label: 'About Us' },
];

export function renderNavbar() {
  const nav = document.getElementById('navbar');
  let currentPath = window.location.pathname;
  if (currentPath.startsWith('/')) currentPath = currentPath.slice(1);
  if (currentPath.endsWith('/')) currentPath = currentPath.slice(0, -1);

  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="navbar-inner">
      <a class="navbar-logo" data-nav="">
        <span class="navbar-logo-text" style="font-family: 'Samarkan', cursive; font-size: var(--text-2xl); color: var(--cream);">Seven.84</span>
      </a>
      <div class="navbar-links">
        ${pages.map(p => `
          <a class="navbar-link ${currentPath === p.path ? 'active' : ''}" data-nav="${p.path}">
            ${p.label}
          </a>
        `).join('')}
      </div>
      <button class="navbar-toggle" id="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  // Create or update overlay outside the fixed height navbar
  let overlay = document.getElementById('mobile-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'mobile-overlay';
    overlay.className = 'navbar-mobile-overlay';
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = `
    <div class="mobile-logo-wrap">
      <span class="navbar-logo-text" style="font-family: 'Samarkan', cursive; font-size: 3rem; color: var(--saffron);">Seven.84</span>
    </div>
    <div class="mobile-links-container">
      ${pages.map(p => `
        <a class="navbar-link ${currentPath === p.path ? 'active' : ''}" data-nav="${p.path}">
          ${p.label}
        </a>
      `).join('')}
    </div>
  `;

  // Navigation click handlers for both desktop and mobile
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const path = link.getAttribute('data-nav');
      window.appAPI.navigate(path);
      closeMobileMenu();
    });
  });

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
  });

  // Close on resize if switching to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && overlay.classList.contains('open')) {
      closeMobileMenu();
    }
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
  let currentPath = window.location.pathname;
  if (currentPath.startsWith('/')) currentPath = currentPath.slice(1);
  if (currentPath.endsWith('/')) currentPath = currentPath.slice(0, -1);
  
  document.querySelectorAll('.navbar-link').forEach(link => {
    const path = link.getAttribute('data-nav');
    if (path === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

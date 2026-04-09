import './styles/index.css';

// Components
import { renderNavbar, updateActiveLink } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { openLightbox } from './components/lightbox.js';
import { openVideoModal } from './components/videoModal.js';
import { initScrollAnimations } from './components/scrollAnimations.js';

// Pages
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderJourney } from './pages/journey.js';
import { renderPerformances } from './pages/performances.js';
import { renderEvents } from './pages/events.js';
import { renderResults } from './pages/results.js';


// Global API for inline HTML handlers (onClick)
window.appAPI = {
  openEventSpecificLightbox: (images, index) => openLightbox(images, index),
  openVideo: (youtubeId) => openVideoModal(youtubeId),
  scrollHighlights: (direction) => {
    const container = document.getElementById('infinite-reel-scroll');
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  },
  navigate: (path) => {
    const targetUrl = path.startsWith('/') ? path : '/' + path;
    const currentUrl = window.location.pathname + window.location.search;
    if (currentUrl !== targetUrl) {
      history.pushState(null, '', targetUrl);
      window.dispatchEvent(new Event('popstate'));
    }
  },
  initInfiniteScroll: () => {
    const container = document.getElementById('infinite-reel-scroll');
    if (!container) return;

    const cards = container.querySelectorAll('.highlight-card');
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(container).gap);
    const totalRealItems = cards.length - 8; // Subtract 8 clones (4 before, 4 after)

    // Initial position: Skip the 4 clones at the start
    container.scrollLeft = cardWidth * 4;

    // Seamless loop check
    container.addEventListener('scroll', () => {
      const scrollLeft = container.scrollLeft;
      
      // Proactive jump: If entering the clone zones (the first 2 or last 2 clones)
      // Jump back to the equivalent real item position
      
      // Right boundary: If we've scrolled into the last 2 clones
      if (scrollLeft >= cardWidth * (totalRealItems + 6)) {
        container.scrollTo({ left: cardWidth * 6, behavior: 'instant' });
      }
      // Left boundary: If we've scrolled into the first 2 clones
      else if (scrollLeft <= cardWidth * 2) {
        container.scrollTo({ left: cardWidth * (totalRealItems + 2), behavior: 'instant' });
      }
    });
  }
};

const routes = {
  '': renderHome,
  'about': renderAbout,
  'journey': renderJourney,
  'performances': renderPerformances,
  'events': renderEvents,
  'results': renderResults,
};

function render404() {
  return `
    <div class="page-enter" style="min-height: 80vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: var(--space-xl);">
      <div>
        <div style="font-family: 'Samarkan', cursive; font-size: clamp(5rem, 15vw, 10rem); color: var(--saffron); line-height: 1; margin-bottom: var(--space-md);">404</div>
        <p style="font-size: var(--text-lg); color: var(--grey-400); margin-bottom: var(--space-2xl); max-width: 400px;">This page doesn't exist, but our music does.</p>
        <a href="/" class="btn btn-primary">Back to Home</a>
      </div>
    </div>
  `;
}

function router() {
  const contentDiv = document.getElementById('page-content');
  
  // Get current path from pathname instead of hash
  let path = window.location.pathname;
  if (path.startsWith('/')) path = path.slice(1);
  if (path.endsWith('/')) path = path.slice(0, -1);
  
  // Handle invalid routes — show 404
  const is404 = path && !routes[path];
  
  // Parse query parameters
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString || '');

  // Pre-transition state
  contentDiv.classList.add('page-exit');

  setTimeout(() => {
    // Render new page
    if (is404) {
      contentDiv.innerHTML = render404();
    } else {
      const renderFn = routes[path] || routes[''];
      contentDiv.innerHTML = renderFn(params);
    }

    // Trigger enter animation
    contentDiv.classList.remove('page-exit');
    contentDiv.classList.add('page-enter-active');
    
    // Setup animations for new page
    initScrollAnimations();
    
    // Initialize infinite scroll if on home page
    if (!path || path === '') {
      window.appAPI.initInfiniteScroll();
    }
    
    // Update Document Title & Meta for SEO
    const routeMeta = {
      '': {
        title: 'Seven.84 — Hindustani Bollywood Fusion',
        description: 'Seven.84 is a Hindustani-Bollywood-Fusion band from MIT Manipal. Explore our music, performances, gallery, and journey.',
      },
      'about': {
        title: 'Seven.84 — About Us',
        description: 'Meet the 17 musicians of Seven.84 — a Hindustani-Bollywood-Fusion band blending classical ragas with modern energy.',
      },
      'journey': {
        title: 'Seven.84 — Our Journey',
        description: 'From dorm room jams to festival headliners. The timeline of Seven.84\'s musical evolution at MIT Manipal.',
      },
      'performances': {
        title: 'Seven.84 — Performances',
        description: 'Watch Seven.84 live and unplugged — performances spanning Hindustani classical fusion, Bollywood covers, and original compositions.',
      },
      'events': {
        title: 'Seven.84 — Events & Diary',
        description: 'A complete timeline of Seven.84\'s on-stage battles, exhibitions, and college fest appearances.',
      },
      'results': {
        title: 'Seven.84 — Competitions & Results',
        description: 'An ongoing tally of Seven.84\'s competitive journey across college fests and battle of the bands.',
      },
    };
    const meta = routeMeta[path] || routeMeta[''];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description);
    document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', meta.title);
    document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', meta.description);

    // Post-transition state
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Clean up transition class after animation
    setTimeout(() => contentDiv.classList.remove('page-enter-active'), 500);

    // Accessibility: move focus to main content on route change
    contentDiv.setAttribute('tabindex', '-1');
    contentDiv.focus({ preventScroll: true });
    
    // Update navbar active state
    updateActiveLink();
  }, 150);
}

// App Initialization
function initApp() {
  // Render static shell components
  renderNavbar();
  renderFooter();
  
  // Setup router listeners for History API
  window.addEventListener('popstate', router);
  
  // Global link interception for internal navigation
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && !link.target && link.host === window.location.host) {
      const path = link.getAttribute('href');
      // Only intercept if it's an internal path starting with / or #
      if (path && (path.startsWith('/') || path.startsWith('#'))) {
        e.preventDefault();
        const cleanPath = path.startsWith('#') ? path.slice(1) : path;
        window.appAPI.navigate(cleanPath);
      }
    }

    // Delegated data-action handlers
    const actionEl = e.target.closest('[data-action]');
    if (!actionEl) return;

    const action = actionEl.dataset.action;
    const value = actionEl.dataset.value;

    if (action === 'open-video') {
      e.preventDefault();
      openVideoModal(value);
    } else if (action === 'navigate') {
      e.preventDefault();
      window.appAPI.navigate(value);
    } else if (action === 'toggle-details') {
      const details = document.getElementById(value);
      if (details) {
        if (details.tagName === 'TR') {
          details.style.display = details.style.display === 'table-row' ? 'none' : 'table-row';
          actionEl.classList.toggle('active-row');
        } else {
          details.classList.toggle('open');
          actionEl.classList.toggle('active');
        }
      }
    }
  });
  
  // Initial route
  router();
}

// Boot application
document.addEventListener('DOMContentLoaded', initApp);

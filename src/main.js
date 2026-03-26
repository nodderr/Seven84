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

function router() {
  const contentDiv = document.getElementById('page-content');
  
  // Get current path from pathname instead of hash
  let path = window.location.pathname;
  if (path.startsWith('/')) path = path.slice(1);
  if (path.endsWith('/')) path = path.slice(0, -1);
  
  // Handle invalid routes
  if (path && !routes[path]) {
    history.replaceState(null, '', '/');
    path = '';
  }
  
  // Parse query parameters
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString || '');

  // Pre-transition state
  contentDiv.style.opacity = '0';
  
  setTimeout(() => {
    // Render new page
    const renderFn = routes[path] || routes[''];
    contentDiv.innerHTML = renderFn(params);
    
    // Setup animations for new page
    initScrollAnimations();
    
    // Initialize infinite scroll if on home page
    if (!path || path === '') {
      window.appAPI.initInfiniteScroll();
    }
    
    // Update Document Title for SEO
    const routeTitles = {
      '': 'Seven.84 — Hindustani Bollywood Fusion',
      'about': 'Seven.84 — About Us',
      'journey': 'Seven.84 — Our Journey',
      'performances': 'Seven.84 — Performances',
      'events': 'Seven.84 — Events & Diary',
      'results': 'Seven.84 — Competitions & Results'
    };
    document.title = routeTitles[path] || routeTitles[''];

    // Post-transition state
    window.scrollTo({ top: 0, behavior: 'instant' });
    contentDiv.style.opacity = '1';
    
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
  });
  
  // Initial route
  router();
}

// Boot application
document.addEventListener('DOMContentLoaded', initApp);

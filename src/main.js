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
  
  // Get current path from hash, split off query params
  const fullHash = window.location.hash.slice(1);
  const [path, queryString] = fullHash.split('?');
  
  // Handle invalid routes
  if (path && !routes[path]) {
    window.location.hash = '';
    return;
  }
  
  // Parse query parameters
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
  
  // Setup router listeners
  window.addEventListener('hashchange', router);
  
  // Initial route
  router();
}

// Boot application
document.addEventListener('DOMContentLoaded', initApp);

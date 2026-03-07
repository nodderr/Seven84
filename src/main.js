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
  openVideo: (youtubeId) => openVideoModal(youtubeId)
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

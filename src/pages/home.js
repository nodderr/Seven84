import { performances } from '../data/performances.js';
import { eventsData } from '../data/events.js';

const getThumbnail = (p) => {
  if (p.eventId) {
    const event = eventsData.find(e => e.id === p.eventId);
    if (event && event.thumbnail) return event.thumbnail;
  }
  // Use hqdefault as it's more reliable than maxresdefault for newer/smaller videos
  return `https://img.youtube.com/vi/${p.youtubeId}/hqdefault.jpg`;
};

export function renderHome() {
  const latestPerformance = performances.find(p => p.featured) || performances[0] || {
    title: 'New Performance Coming Soon',
    youtubeId: ''
  };

  return `
    <div class="page-enter">
      <!-- HERO -->
      <section class="hero">
        <div class="hero-bg"></div>
        
        <div class="hero-content container">
          <div class="hero-logo-css" style="font-family: 'Samarkan', cursive; font-size: clamp(4rem, 15vw, 10rem); color: white; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); margin-bottom: var(--space-xl); display: inline-block;">Seven.84</div>
          <div class="hero-cta" style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem;">
            <a href="#journey" class="btn btn-primary" style="width: 250px; justify-content: center;">Our Journey</a>
          </div>
        </div>
        
        <div class="hero-scroll-indicator">
          <span></span>
        </div>
      </section>

      <!-- PERFORMANCE HIGHLIGHTS -->
      <section class="section section-darker">
        <div class="container section-header">
          <span class="section-subtitle">Glimpses</span>
          <h2 class="section-title">Performance Highlights</h2>
        </div>
        
        <div class="highlight-reel">
          <button class="reel-nav-btn prev" onclick="window.appAPI.scrollHighlights(-1)" aria-label="Previous">❮</button>
          <div class="highlight-scroll" id="infinite-reel-scroll">
            ${(() => {
              const items = performances.slice(0, 10); // Take a good amount
              const clonesBefore = items.slice(-3);
              const clonesAfter = items.slice(0, 3);
              const displayItems = [...clonesBefore, ...items, ...clonesAfter];
              
              return displayItems.map((p, idx) => `
                <div class="highlight-card ${idx < 3 || idx >= displayItems.length - 3 ? 'is-clone' : ''}" 
                     data-index="${idx}"
                     onclick="window.appAPI.openVideo('${p.youtubeId}')">
                   <img src="${getThumbnail(p)}" alt="${p.title}" loading="lazy" />
                  <div class="highlight-card-overlay">
                    <h4>${p.title}</h4>
                    <p>${p.date}</p>
                  </div>
                </div>
              `).join('');
            })()}
          </div>
          <button class="reel-nav-btn next" onclick="window.appAPI.scrollHighlights(1)" aria-label="Next">❯</button>
        </div>
      </section>

      <!-- LATEST PERFORMANCE -->
      <section class="section section-dark">
        <div class="container" style="text-align: center; max-width: 800px;">
          <div class="reveal-up">
            <span class="section-subtitle">Newest Upload</span>
            <h2 class="section-title">${latestPerformance.title}</h2>
            <p class="section-description" style="margin-bottom: var(--space-xl);">
              Experience our latest performance where the soulful melodies of Hindustani classical meet the high-octane energy of modern fusion. 
            </p>
            <div class="featured-video-wrapper" style="margin: 0 auto var(--space-xl);" onclick="window.appAPI.openVideo('${latestPerformance.youtubeId}')">
               <img src="${getThumbnail(latestPerformance)}" alt="${latestPerformance.title}" class="featured-video-thumb" />
              <div class="featured-play-btn"></div>
            </div>
            <div style="display: flex; gap: 1rem; justify-content: center;">
              <button class="btn btn-primary" onclick="window.appAPI.openVideo('${latestPerformance.youtubeId}')">Watch Now</button>
              <a href="#performances" class="btn btn-ghost">View All</a>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT STRIP -->
      <section class="section section-gradient">
        <div class="container" style="text-align: center;">
          <h2 class="section-title" style="margin-bottom: var(--space-md);">Contact us for Bookings/ Collabs</h2>
          <p class="section-description" style="margin-bottom: var(--space-xl);">For bookings, collaborations, or just to say hi.</p>
          <a href="mailto:nishant.verma04@yahoo.com" class="btn btn-primary" style="background: white; color: var(--saffron);">Book Us via Email</a>
        </div>
      </section>

      <!-- QUICK LINKS -->
      <section class="section section-dark">
        <div class="container">
          <div class="quick-links">
            <a href="#about" class="quick-link-card">
              <div class="quick-link-icon">👥</div>
              <h4>Meet the Band</h4>
              <p>The musicians behind the sound</p>
            </a>
            <a href="#journey" class="quick-link-card">
              <div class="quick-link-icon">🎸</div>
              <h4>Our Story</h4>
              <p>From a dorm room jam to main stage</p>
            </a>
            <a href="#gallery" class="quick-link-card">
              <div class="quick-link-icon">📸</div>
              <h4>Photo Gallery</h4>
              <p>Visuals from our best shows</p>
            </a>
            <a href="https://www.instagram.com/seven.84_" class="quick-link-card" target="_blank" rel="noopener">
              <div class="quick-link-icon">📱</div>
              <h4>Instagram</h4>
              <p>Follow our daily journey</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

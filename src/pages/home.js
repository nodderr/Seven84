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
  const latestPerformance = performances[performances.length - 1] || {
    title: 'New Performance Coming Soon',
    youtubeId: ''
  };

  return `
    <div class="page-enter">
      <!-- HERO -->
      <section class="hero">
        <div class="hero-bg"></div>
        
        <div class="hero-content container">
          <div class="hero-logo-css hero-anim-1" style="font-family: 'Samarkan', cursive; font-size: clamp(4rem, 15vw, 10rem); color: white; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); margin-bottom: var(--space-xl); display: inline-block;">Seven.84</div>
          <div class="hero-cta hero-anim-2" style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem;">
            <a href="/journey" class="btn btn-primary" style="width: 250px; justify-content: center;">Our Journey</a>
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
        
        <div class="highlight-reel" tabindex="0" role="region" aria-label="Performance highlights carousel" onkeydown="if(event.key==='ArrowLeft')window.appAPI.scrollHighlights(-1);if(event.key==='ArrowRight')window.appAPI.scrollHighlights(1);">
          <button class="reel-nav-btn prev" onclick="window.appAPI.scrollHighlights(-1)" aria-label="Previous">❮</button>
          <div class="highlight-scroll" id="infinite-reel-scroll">
            ${(() => {
              const items = [...performances].reverse().slice(0, 10); // Latest first
              const clonesBefore = items.slice(-4);
              const clonesAfter = items.slice(0, 4);
              const displayItems = [...clonesBefore, ...items, ...clonesAfter];
              
              return displayItems.map((p, idx) => `
                <div class="highlight-card img-skeleton ${idx < 4 || idx >= displayItems.length - 4 ? 'is-clone' : ''}"
                     data-index="${idx}"
                     data-action="open-video" data-value="${p.youtubeId}">
                   <img src="${getThumbnail(p)}" alt="${p.title}" loading="lazy" onload="this.parentElement.classList.remove('img-skeleton')" />
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
            <div class="featured-video-wrapper" style="margin: 0 auto var(--space-xl);" data-action="open-video" data-value="${latestPerformance.youtubeId}">
               <img src="${getThumbnail(latestPerformance)}" alt="${latestPerformance.title}" class="featured-video-thumb" />
              <div class="featured-play-btn"></div>
            </div>
            <div style="display: flex; gap: 1rem; justify-content: center;">
              <button class="btn btn-primary" data-action="open-video" data-value="${latestPerformance.youtubeId}">Watch Now</button>
              <a href="/performances" class="btn btn-ghost">View All</a>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT STRIP -->
      <section class="contact-strip">
        <div class="contact-strip-bg"></div>
        <div class="container contact-strip-content">
          <div class="contact-strip-text">
            <span class="contact-strip-label">Ready to collaborate?</span>
            <h2 class="contact-strip-title">Let's Make <span class="text-saffron">Music</span> Together</h2>
            <p class="contact-strip-desc">Whether it's a college fest, a private gig, or a creative collaboration, we'd love to hear from you.</p>
          </div>
          <div class="contact-strip-actions">
            <a href="mailto:nishant.verma04@yahoo.com" class="btn btn-primary contact-btn">
              Book Us via Email
            </a>
            <a href="https://www.instagram.com/seven.84_" target="_blank" rel="noopener" class="btn btn-outline contact-btn">
              DM on Instagram
            </a>
            <a href="tel:+918860671430" class="contact-phone">
              <span class="contact-phone-icon">☎</span>
              <span class="contact-phone-details">
                <span class="contact-phone-name">Nishant Verma</span>
                <span class="contact-phone-number">+91 88606 71430</span>
              </span>
            </a>
          </div>
        </div>
      </section>

    </div>
  `;
}

import { performances } from '../data/performances.js';

export function renderHome() {
  const latestPerformance = performances.find(p => p.featured) || performances[0];

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

      <!-- HIGHLIGHT REEL -->
      <section class="section section-darker">
        <div class="container section-header">
          <span class="section-subtitle">Glimpses</span>
          <h2 class="section-title">Stage Moments</h2>
        </div>
        
        <div class="highlight-reel">
          <div class="highlight-scroll">
            <a href="#gallery" class="highlight-card">
              <img src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800" alt="Revels Performance" />
              <div class="highlight-card-overlay">
                <h4>Main Stage Magic</h4>
                <p>Revels 2024</p>
              </div>
            </a>
            <a href="#gallery" class="highlight-card">
              <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800" alt="Acoustic Session" />
              <div class="highlight-card-overlay">
                <h4>Unplugged Setup</h4>
                <p>College Auditorium</p>
              </div>
            </a>
            <a href="#gallery" class="highlight-card">
              <img src="https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800" alt="Classical Meets Rock" />
              <div class="highlight-card-overlay">
                <h4>Fusion Grooves</h4>
                <p>Inter-college Fest</p>
              </div>
            </a>
            <a href="#gallery" class="highlight-card reveal-left">
              <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800" alt="Behind the scenes" />
              <div class="highlight-card-overlay">
                <h4>Soundcheck</h4>
                <p>Before the storm</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- FEATURED PERFORMANCE -->
      <section class="section section-dark">
        <div class="container grid-2 align-center gap-xl">
          <div>
            <span class="section-subtitle">Latest Drop</span>
            <h2 class="section-title">Vande Mataram<br>Fusion Reimagined</h2>
            <p class="section-description" style="margin-left: 0; margin-bottom: var(--space-xl);">
              Our biggest undertaking yet. A 10-minute arrangement combining the timeless melody with progressive rock riffs, complex Indian rhythms, and soaring synthesizer leads. 
            </p>
            <a href="#performances" class="btn btn-ghost">View All Performances</a>
          </div>
          
          <div>
            <div class="featured-video-wrapper" onclick="window.appAPI.openVideo('${latestPerformance.youtubeId}')">
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800" alt="${latestPerformance.title}" class="featured-video-thumb" />
              <div class="featured-play-btn"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- QUOTE STRIP -->
      <section class="quote-strip section-gradient">
        <div class="container">
          <p class="quote-text">"Seven.84 isn't just a band playing songs; they are architects of sound, building bridges between classical heritage and modern energy."</p>
          <p class="quote-author">MIT Post</p>
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
            <a href="mailto:seven84band@gmail.com" class="quick-link-card">
              <div class="quick-link-icon">✉️</div>
              <h4>Book Us</h4>
              <p>Get in touch for live events</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

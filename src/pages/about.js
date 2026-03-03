import { members } from '../data/members.js';

export function renderAbout() {
  const memberCards = members.map(m => `
    <div class="member-card reveal-scale">
      <div class="member-photo-wrapper">
        <img src="${m.photo}" alt="${m.name}" class="member-photo" loading="lazy" />
      </div>
      <h3 class="member-name">${m.name}</h3>
      <div class="member-role">${m.role}</div>
      <p class="member-quote">"${m.quote}"</p>
      <div class="member-socials">
        ${m.instagram ? `<a href="${m.instagram}" class="member-social-link" aria-label="Instagram">📷</a>` : ''}
      </div>
    </div>
  `).join('');

  return `
    <div class="page-enter">
      <section class="about-hero grain-overlay">
        <div class="container reveal">
          <h1 class="section-title">Who We Are</h1>
          <div class="band-philosophy">
            <p>
              Seven.84 is more than a band — we are an exploration of sound. 
              Born in the vibrant campus of MIT, Manipal, our music seeks to bridge the gap 
              between the intricate melodies of Hindustani classical music and the driving 
              energy of modern progressive rock and Bollywood fusion.
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-subtitle">The Lineup</span>
            <h2 class="section-title">Meet the Band</h2>
          </div>
          
          <div class="members-grid stagger-children">
            ${memberCards}
          </div>
        </div>
      </section>

      <section class="section section-darker">
        <div class="container reveal">
          <div class="group-photo-section">
            <img 
              src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600" 
              alt="Seven.84 Group Photo" 
              class="group-photo"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  `;
}

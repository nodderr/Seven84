import { members } from '../data/members.js';

const getAvatarUrl = (name) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=D05E1A&color=FFF4E5&size=400&font-size=0.35&bold=true`;
};

export function renderAbout() {
  const memberCards = members.map((m, i) => {
    const photoSrc = m.photo || getAvatarUrl(m.name);
    return `
      <div class="member-tile" style="animation: fadeInUp 0.5s ${i * 0.05}s var(--ease-out) both">
        <div class="member-tile-img-wrap img-skeleton">
          <img src="${photoSrc}" alt="${m.name}" class="member-tile-img" loading="lazy" onload="this.parentElement.classList.remove('img-skeleton')" />
          <div class="member-tile-overlay">
            <span class="member-tile-role">${m.role}</span>
            ${m.instagram && m.instagram !== '#' ? `<a href="${m.instagram}" class="member-tile-insta" target="_blank" rel="noopener" aria-label="${m.name} Instagram">&#9654;</a>` : ''}
          </div>
        </div>
        <h3 class="member-tile-name">${m.name}</h3>
      </div>
    `;
  }).join('');

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

      <section class="section section-dark">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-subtitle">The Lineup</span>
            <h2 class="section-title">Meet the Band</h2>
          </div>

          <div class="members-roster">
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

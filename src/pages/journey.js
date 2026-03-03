import { timeline, stats } from '../data/timeline.js';

export function renderJourney() {
  const statItems = stats.map(s => `
    <div class="stat-item reveal-scale">
      <div class="stat-number" data-count="${s.number}" data-suffix="${s.suffix}">0</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');

  const timelineItems = timeline.map((item, index) => {
    const isEven = index % 2 !== 0; // CSS nth-child is 1-indexed, JS is 0-indexed
    const layoutClass = isEven ? 'reveal-left' : 'reveal-right';
    
    return `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content ${layoutClass}">
          <div class="timeline-date">${item.date}</div>
          <h3 class="timeline-title">${item.title}</h3>
          <p class="timeline-description">${item.description}</p>
          ${item.image ? `<img src="${item.image}" alt="${item.title}" class="timeline-image" loading="lazy" />` : ''}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="page-enter">
      <section class="journey-hero grain-overlay">
        <div class="container reveal">
          <h1 class="section-title">Our Story</h1>
          <p class="section-description hide-mobile" style="margin: 0 auto; max-width: 600px;">
            From late-night jam sessions in college rooms to headlining festivals. This is the timeline of our musical evolution.
          </p>
        </div>
      </section>

      <section class="section section-dark">
        <div class="container">
          <div class="stats-bar stagger-children">
            ${statItems}
          </div>
        </div>
      </section>

      <section class="section section-darker" style="padding-top: var(--space-xl)">
        <div class="container-narrow">
          <div class="timeline stagger-children">
            ${timelineItems}
          </div>
        </div>
      </section>
    </div>
  `;
}

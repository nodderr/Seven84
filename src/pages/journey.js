import { timeline, stats } from '../data/timeline.js';

export function renderJourney() {
  const statItems = stats.map(s => `
    <div class="stat-item reveal-scale">
      <div class="stat-number" data-count="${s.number}" data-suffix="${s.suffix}">
        <span class="stat-number-sizer" aria-hidden="true" style="visibility:hidden">${Number(s.number).toLocaleString('en-IN')}${s.suffix}</span>
        <span class="stat-number-value">0${s.suffix}</span>
      </div>
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

  // Run count-up after DOM renders
  setTimeout(() => initCountUp(), 200);

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

      <section class="section section-dark" style="padding-top: 0;">
        <div class="container">
          <div class="stats-bar stagger-children" id="stats-bar">
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

function initCountUp() {
  const statsBar = document.getElementById('stats-bar');
  if (!statsBar) return;

  const counters = statsBar.querySelectorAll('.stat-number');
  let hasAnimated = false;

  const animate = () => {
    if (hasAnimated) return;
    hasAnimated = true;

    counters.forEach(counter => {
      const target = parseInt(counter.dataset.count, 10);
      const suffix = counter.dataset.suffix || '';
      const duration = 1500;
      const start = performance.now();

      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        counter.querySelector('.stat-number-value').textContent = current.toLocaleString('en-IN') + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animate();
      observer.disconnect();
    }
  }, { threshold: 0.3 });

  observer.observe(statsBar);
}

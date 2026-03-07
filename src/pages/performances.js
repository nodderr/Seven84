import { performances, performanceCategories } from '../data/performances.js';

const getFirstName = (name) => name.split(' ')[0];

export function renderPerformances() {
  const featured = performances.find(p => p.featured) || performances[0];
  const gridVideos = performances.filter(p => p.id !== featured.id);

  const categoryFilters = performanceCategories.map((cat, index) => `
    <button class="filter-tab ${index === 0 ? 'active' : ''}" data-filter="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  const videoItems = gridVideos.map(video => `
    <div class="performance-card reveal" data-category="${video.category}" onclick="window.appAPI.openVideo('${video.youtubeId}')">
      <div class="performance-thumb-wrapper">
        <img src="https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg" alt="${video.title}" class="performance-thumb" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80'" />
        <div class="performance-play-overlay">
          <div class="performance-play-icon"></div>
        </div>
      </div>
      <div class="performance-info">
        <div class="performance-category">${video.category.toUpperCase()}</div>
        <h3 class="performance-title">${video.title}</h3>
        <span class="performance-meta">${video.event || ''} ${video.event ? '•' : ''} ${video.date}</span>
        <div class="performer-tags">
          ${(video.bandMembers || []).map(member => `<span class="performer-tag">${getFirstName(member)}</span>`).join('')}
        </div>
        ${video.eventId ? `
          <button class="btn btn-ghost btn-sm mt-sm" onclick="event.stopPropagation(); window.location.hash = '#events?id=${video.eventId}'">
            View Event Details
          </button>
        ` : ''}
      </div>
    </div>
  `).join('');

  setTimeout(setupVideoFilters, 100);

  return `
    <div class="page-enter">
      <section class="performances-hero grain-overlay">
        <div class="container reveal">
          <h1 class="section-title">Live & Unplugged</h1>
          <p class="section-description">Experience the energy of Seven.84 on stage and in the studio.</p>
        </div>
      </section>

      <section class="section section-dark">
        <div class="container">
          <!-- Featured Video -->
          <div class="featured-performance reveal-scale">
            <div class="section-header" style="margin-bottom: var(--space-lg)">
              <span class="section-subtitle">Featured Performance</span>
            </div>
            
            <div class="featured-video-wrapper" onclick="window.appAPI.openVideo('${featured.youtubeId}')">
              <!-- Fallback to unspash if youtube ID is invalid placeholder -->
              <img src="https://img.youtube.com/vi/${featured.youtubeId}/maxresdefault.jpg" alt="${featured.title}" class="featured-video-thumb" onerror="this.src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&q=80'" />
              <div class="featured-play-btn"></div>
            </div>
            
            <div class="featured-video-info">
              <h3>${featured.title}</h3>
              <p>${featured.event || ''} ${featured.event ? '•' : ''} ${featured.date}</p>
              <div class="performer-tags">
                ${(featured.bandMembers || []).map(member => `<span class="performer-tag">${getFirstName(member)}</span>`).join('')}
              </div>
              ${featured.eventId ? `
                <button class="btn btn-outline btn-sm mt-md" onclick="event.stopPropagation(); window.location.hash = '#events?id=${featured.eventId}'">
                  View Event Details & Photos
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      </section>

      <section class="section section-darker">
        <div class="container">
          <div class="filter-tabs reveal">
            ${categoryFilters}
          </div>
          
          <div class="performances-grid stagger-children" id="video-grid">
            ${videoItems}
          </div>
        </div>
      </section>
    </div>
  `;
}

function setupVideoFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  const items = document.querySelectorAll('.performance-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      // Filter items
      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(10px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

import { performances, performanceCategories } from '../data/performances.js';
import { members } from '../data/members.js';
import { eventsData } from '../data/events.js';

const getThumbnail = (p) => {
  if (p.eventId) {
    const event = eventsData.find(e => e.id === p.eventId);
    if (event && event.thumbnail) return event.thumbnail;
  }
  return `https://img.youtube.com/vi/${p.youtubeId}/hqdefault.jpg`;
};

const getFirstName = (name) => name.split(' ')[0];

const sortMembers = (names) => {
  return [...names].sort((a, b) => {
    const idxA = members.findIndex(m => m.name === a || m.name.startsWith(a));
    const idxB = members.findIndex(m => m.name === b || m.name.startsWith(b));
    return idxA - idxB;
  });
};

export function renderPerformances() {
  const reversed = [...performances].reverse();
  const featured = reversed.find(p => p.featured) || reversed[0];
  const gridVideos = reversed.filter(p => p.id !== featured.id);

  const categoryFilters = performanceCategories.map((cat, index) => `
    <button class="filter-tab ${index === 0 ? 'active' : ''}" data-filter="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  const videoItems = gridVideos.map(video => `
    <div class="performance-card reveal" data-category="${video.category}" data-action="open-video" data-value="${video.youtubeId}">
      <div class="performance-thumb-wrapper img-skeleton">
        <img src="${getThumbnail(video)}" alt="${video.title}" class="performance-thumb" loading="lazy" onload="this.parentElement.classList.remove('img-skeleton')" onerror="this.style.display='none'; this.parentElement.classList.remove('img-skeleton'); this.parentElement.classList.add('thumb-fallback'); this.parentElement.innerHTML='<span>Seven.84</span>'" />
        <div class="performance-play-overlay">
          <div class="performance-play-icon"></div>
        </div>
      </div>
      <div class="performance-info">
        <div class="performance-category">${video.category.toUpperCase()}</div>
        <h3 class="performance-title">${video.title}</h3>
        <span class="performance-meta">${video.event || ''} ${video.event ? '•' : ''} ${video.date}</span>
        <div class="performer-tags">
          ${sortMembers(video.bandMembers || []).map(member => `<span class="performer-tag">${getFirstName(member)}</span>`).join('')}
        </div>
        ${video.eventId ? `
          <button class="btn btn-ghost btn-sm mt-sm" data-action="navigate" data-value="/events?id=${video.eventId}">
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
        <div class="container reveal" style="text-align: center;">
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
            
            <div class="featured-video-wrapper" data-action="open-video" data-value="${featured.youtubeId}">
              <!-- Fallback to unspash if youtube ID is invalid placeholder -->
              <img src="${getThumbnail(featured)}" alt="${featured.title}" class="featured-video-thumb" onerror="this.style.display='none'; this.parentElement.classList.add('thumb-fallback'); this.parentElement.innerHTML='<span style=\'font-size:3rem\'>Seven.84</span>'" />
              <div class="featured-play-btn"></div>
            </div>
            
            <div class="featured-video-info">
              <h3>${featured.title}</h3>
              <p>${featured.event || ''} ${featured.event ? '•' : ''} ${featured.date}</p>
              <div class="performer-tags">
                ${sortMembers(featured.bandMembers || []).map(member => `<span class="performer-tag">${getFirstName(member)}</span>`).join('')}
              </div>
              ${featured.eventId ? `
                <button class="btn btn-outline btn-sm mt-md" data-action="navigate" data-value="/events?id=${featured.eventId}">
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

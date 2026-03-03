import { galleryItems, galleryCategories } from '../data/gallery.js';

export function renderGallery() {
  const categoryFilters = galleryCategories.map((cat, index) => `
    <button class="filter-tab ${index === 0 ? 'active' : ''}" data-filter="${cat === 'All' ? 'all' : cat}">
      ${cat}
    </button>
  `).join('');

  const imageItems = galleryItems.map((item, index) => `
    <div class="gallery-item reveal" data-category="${item.category}" onclick="window.appAPI.openLightbox(${index})">
      <img src="${item.thumb}" alt="${item.title}" loading="lazy" />
      <div class="gallery-item-overlay">
        <div class="gallery-item-info">
          <h4>${item.title}</h4>
          <p>${item.date}</p>
        </div>
      </div>
    </div>
  `).join('');

  setTimeout(setupGalleryFilters, 100);

  return `
    <div class="page-enter">
      <section class="gallery-hero grain-overlay">
        <div class="container reveal">
          <h1 class="section-title">Visual Archive</h1>
          <p class="section-description">Moments frozen in time across stages, studios, and practice rooms.</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="filter-tabs reveal">
            ${categoryFilters}
          </div>
          
          <div class="gallery-masonry stagger-children" id="gallery-grid">
            ${imageItems}
          </div>
        </div>
      </section>
    </div>
  `;
}

function setupGalleryFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  const items = document.querySelectorAll('.gallery-item');

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
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

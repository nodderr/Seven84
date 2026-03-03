let currentImages = [];
let currentIndex = 0;

export function openLightbox(images, index = 0) {
  currentImages = images;
  currentIndex = index;

  const overlay = document.getElementById('lightbox-overlay');
  overlay.classList.remove('hidden');
  overlay.innerHTML = `
    <span class="lightbox-close" id="lightbox-close">✕</span>
    <span class="lightbox-nav lightbox-prev" id="lightbox-prev">‹</span>
    <img class="lightbox-image" src="${currentImages[currentIndex].src}" alt="${currentImages[currentIndex].title || ''}" />
    <span class="lightbox-nav lightbox-next" id="lightbox-next">›</span>
    <div class="lightbox-counter">${currentIndex + 1} / ${currentImages.length}</div>
  `;

  requestAnimationFrame(() => overlay.classList.add('active'));

  // Close
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });

  // Nav
  document.getElementById('lightbox-prev').addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
  });
  document.getElementById('lightbox-next').addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(1);
  });

  // Keyboard
  document.addEventListener('keydown', handleLightboxKeys);
  document.body.style.overflow = 'hidden';
}

function navigateLightbox(direction) {
  currentIndex = (currentIndex + direction + currentImages.length) % currentImages.length;
  const img = document.querySelector('.lightbox-image');
  const counter = document.querySelector('.lightbox-counter');
  
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = currentImages[currentIndex].src;
    img.alt = currentImages[currentIndex].title || '';
    counter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    img.style.opacity = '1';
  }, 150);
}

function handleLightboxKeys(e) {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
}

export function closeLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.classList.add('hidden');
    overlay.innerHTML = '';
  }, 300);
  document.removeEventListener('keydown', handleLightboxKeys);
  document.body.style.overflow = '';
}

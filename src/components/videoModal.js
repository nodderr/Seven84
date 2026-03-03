export function openVideoModal(youtubeId) {
  const modal = document.getElementById('video-modal');
  modal.classList.remove('hidden');
  modal.innerHTML = `
    <div class="video-modal-inner">
      <span class="video-modal-close" id="video-close">✕</span>
      <iframe 
        src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </div>
  `;

  requestAnimationFrame(() => modal.classList.add('active'));

  document.getElementById('video-close').addEventListener('click', closeVideoModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeVideoModal();
  });
  document.addEventListener('keydown', handleVideoKeys);
  document.body.style.overflow = 'hidden';
}

function handleVideoKeys(e) {
  if (e.key === 'Escape') closeVideoModal();
}

export function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  modal.classList.remove('active');
  setTimeout(() => {
    modal.classList.add('hidden');
    modal.innerHTML = '';
  }, 300);
  document.removeEventListener('keydown', handleVideoKeys);
  document.body.style.overflow = '';
}

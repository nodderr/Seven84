export function renderFooter() {
  const footer = document.getElementById('site-footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo" style="font-family: 'Samarkan', cursive; color: var(--cream);">Seven.84</div>
          <p class="footer-tagline">
            A Hindustani-Bollywood-Fusion band from MIT Manipal. 
          </p>
          <div class="footer-socials" style="margin-top: var(--space-lg);">
            <a href="https://www.instagram.com/seven.84_" class="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener">📷</a>
          </div>
        </div>
        <div class="footer-nav">
          <div class="footer-nav-group">
            <h4>Navigate</h4>
            <a href="#" data-nav="">Home</a>
            <a href="#events" data-nav="events">Events</a>
            <a href="#results" data-nav="results">Results</a>
            <a href="#about" data-nav="about">About Us</a>
            <a href="#journey" data-nav="journey">Our Journey</a>
            <a href="#performances" data-nav="performances">Performances</a>
          </div>
          <div class="footer-nav-group">
            <h4>Connect</h4>
            <a href="https://www.instagram.com/seven.84_" target="_blank" rel="noopener">Instagram</a>
            <a href="mailto:nishant.verma04@yahoo.com">Email Us</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Seven.84 — All rights reserved</span>
        <span>Based out of MIT, Manipal 🎶</span>
      </div>
    </div>
  `;

  // Footer nav click handlers
  footer.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const path = link.getAttribute('data-nav');
      window.location.hash = path;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

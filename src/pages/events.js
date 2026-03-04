import { eventsData } from '../data/events.js';

export function renderEvents(params) {
  // If ?id= is present, render identical details view
  const eventId = params ? params.get('id') : null;
  
  if (eventId) {
    return renderEventDetail(eventId);
  }
  
  // Otherwise render catalog list
  return renderEventCatalog();
}

function renderEventCatalog() {
  const competitions = eventsData.filter(e => e.type === 'competition');
  const exhibitions = eventsData.filter(e => e.type === 'exhibition');
  
  return `
    <div class="page-container page-events fade-in">
      <header class="section-hero">
        <h1 class="font-display size-xxl section-title slide-up">Our <span class="text-saffron">Events</span></h1>
        <p class="font-body opacity-80 slide-up" style="animation-delay: 0.1s">
          A definitive timeline of our on-stage battles and exhibitions.
        </p>
      </header>
      
      <section class="events-catalog slide-up" style="animation-delay: 0.2s">
        <!-- Optional Tabs for Filtering if needed later, keeping it unified for now -->
        
        <div class="events-grid">
          ${eventsData.map(event => `
            <div class="event-card" onclick="window.location.hash = '#events?id=${event.id}'">
              <div class="event-thumbnail">
                <img src="${event.thumbnail}" alt="${event.name}" loading="lazy" />
                ${event.rank ? `<div class="event-badge">${event.rank}</div>` : ''}
              </div>
              <div class="event-info">
                <span class="event-date font-accent text-saffron size-sm">${event.date}</span>
                <h3 class="font-display size-md">${event.name}</h3>
                <span class="event-venue opacity-70 size-sm">📍 ${event.venue}</span>
                <p class="event-desc font-body opacity-80 mt-sm line-clamp-2">${event.description}</p>
                <div class="event-media-icons mt-md">
                  ${event.youtubeId ? `<span class="media-icon" title="Video available">🎥 Video</span>` : ''}
                  ${event.photos && event.photos.length > 0 ? `<span class="media-icon" title="Photos available">📸 ${event.photos.length} Photos</span>` : ''}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    </div>
  `;
}

function renderEventDetail(eventId) {
  const event = eventsData.find(e => e.id === eventId);
  
  if (!event) {
    return `
      <div class="page-container page-events fade-in text-center" style="padding: 150px 20px;">
        <h1 class="font-display size-xl">Event Not Found</h1>
        <a href="#events" class="btn btn-primary mt-lg text-charcoal">Back to Events</a>
      </div>
    `;
  }

  const hasPhotos = event.photos && event.photos.length > 0;
  
  // Set up lightbox window API for this specific event's photos
  window.appAPI.openEventLightbox = (index) => {
    window.appAPI.openEventSpecificLightbox(event.photos, index);
  };

  return `
    <div class="page-container page-event-detail fade-in">
      <button class="back-button btn btn-outline slide-up" onclick="window.location.hash = '#events'">
        ← Back to Events
      </button>

      <header class="event-detail-hero slide-up" style="animation-delay: 0.1s">
        <div class="event-meta mb-sm">
          <span class="font-accent text-saffron size-md">${event.date}</span> • <span class="opacity-80">${event.venue}</span>
        </div>
        <h1 class="font-display size-xxl mb-xs">${event.name}</h1>
        ${event.rank ? `<div class="event-badge inline-badge mb-md">${event.rank}</div>` : ''}
        <p class="font-body opacity-80 size-md mt-sm max-w-lg">${event.description}</p>
      </header>

      ${event.youtubeId ? `
        <section class="event-main-media slide-up" style="animation-delay: 0.2s">
          <div class="video-embed-container">
            <iframe 
              src="https://www.youtube.com/embed/${event.youtubeId}" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </section>
      ` : ''}

      ${hasPhotos ? `
        <section class="event-gallery slide-up" style="animation-delay: 0.3s">
          <h2 class="font-display size-xl mb-xl">Event <span class="text-saffron">Gallery</span></h2>
          <div class="gallery-masonry" style="--columns: 3;">
            ${event.photos.map((photo, index) => `
              <div class="gallery-item" onclick="appAPI.openEventLightbox(${index})">
                <img src="${photo.src}" alt="${photo.caption}" loading="lazy" />
                <div class="gallery-overlay">
                  <span class="font-display">${photo.caption}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}
    </div>
  `;
}

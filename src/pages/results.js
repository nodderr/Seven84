import { eventsData } from '../data/events.js';
import { members } from '../data/members.js';

const sortMembers = (names) => {
  return [...names].sort((a, b) => {
    const idxA = members.findIndex(m => m.name === a || m.name.startsWith(a));
    const idxB = members.findIndex(m => m.name === b || m.name.startsWith(b));
    return idxA - idxB;
  });
};

export function renderResults() {
  // Filter only competitions, sort by date (fallback to reversing array if dates are complex strings)
  // For simplicity since dates are string formats like "April 2024", we'll just keep the defined array order
  // which is typically reverse-chronological as authored in eventsData.
  const results = eventsData.filter(event => event.type === 'competition');

  return `
    <div class="page-container page-results fade-in">
      <header class="section-hero text-center">
        <h1 class="font-display size-xxl section-title slide-up">Our <span class="text-saffron">Results</span></h1>
        <p class="font-body opacity-80 slide-up" style="animation-delay: 0.1s; max-width: 600px; margin: 0 auto;">
          An ongoing tally of our competitive journey across various college fests and battle of the bands.
        </p>
      </header>
      
      <section class="results-table-container slide-up" style="animation-delay: 0.2s">
        <div class="results-table-wrapper">
          <table class="results-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Competition</th>
                <th>Venue</th>
                <th>Result / Rank</th>
              </tr>
            </thead>
            <tbody>
              ${results.length > 0 ? results.map((result, index) => `
                <tr class="result-row" onclick="const details = document.getElementById('details-${index}'); details.style.display = details.style.display === 'table-row' ? 'none' : 'table-row'; this.classList.toggle('active-row');">
                  <td class="font-accent text-saffron text-nowrap">
                    <span class="dropdown-icon">▶</span> ${result.date}
                  </td>
                  <td class="font-accent text-saffron text-nowrap">${result.time || ''}</td>
                  <td class="font-display size-md text-cream">${result.name}</td>
                  <td class="opacity-80">${result.venue}</td>
                  <td>
                    ${result.rank 
                      ? `<span class="result-badge ${getRankClass(result.rank)}">${result.rank}</span>` 
                      : '<span class="opacity-50">—</span>'}
                  </td>
                </tr>
                <tr id="details-${index}" class="result-details-row" style="display: none;">
                  <td colspan="5" class="result-details-cell">
                    <div class="result-details-content">
                      <div class="result-members">
                        <strong class="text-saffron">Lineup:</strong> 
                        <span class="opacity-80">${result.bandMembers && result.bandMembers.length > 0 ? sortMembers(result.bandMembers).join(', ') : 'Lineup not specified'}</span>
                      </div>
                      ${(result.youtubeId || result.thumbnail || (result.photos && result.photos.length > 0)) ? `
                        <a href="/events?id=${result.id}" class="result-event-link">
                          View Event Media <span>&rarr;</span>
                        </a>
                      ` : ''}
                    </div>
                  </td>
                </tr>
              `).join('') : `
                <tr>
                  <td colspan="5" class="text-center opacity-50 py-xl">No competition results available yet.</td>
                </tr>
              `}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

// Helper to style badges differently based on rank (1st vs others)
function getRankClass(rank) {
  const lowercaseRank = String(rank).toLowerCase();
  if (lowercaseRank.includes('1st') || lowercaseRank.includes('winner') || lowercaseRank === 'first') {
    return 'badge-gold';
  } else if (lowercaseRank.includes('2nd') || lowercaseRank.includes('runner')) {
    return 'badge-silver';
  } else if (lowercaseRank.includes('3rd')) {
    return 'badge-bronze';
  }
  return 'badge-neutral';
}

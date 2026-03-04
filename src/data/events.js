export const eventsData = [
  {
    id: 'revels-2024',
    name: 'Revels 2024 (Proshow Opening)',
    type: 'exhibition',
    date: 'April 2024',
    venue: 'MIT Manipal (Quadrangle)',
    rank: null,
    description: 'Opening the main Proshow night at Revels 2024 in front of 5000+ people. We played a 45-minute set featuring our best Hindustani-Rock fusions.',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
    thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1470&auto=format&fit=crop', // Placeholder
    photos: [
      { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800', caption: 'On Stage' },
      { src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800', caption: 'Crowd view' },
      { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800', caption: 'Lead singer' },
      { src: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f51608?w=800', caption: 'Guitar Solo' },
    ]
  },
  {
    id: 'indian-ocean-opener',
    name: 'Opening for Indian Ocean',
    type: 'exhibition',
    date: 'February 2024',
    venue: 'KMC Greens',
    rank: null,
    description: 'An absolute dream come true. We had the honor of opening the stage for the legendary Indian Ocean. A night of pure musical magic.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1470&auto=format&fit=crop',
    photos: []
  },
  {
    id: 'battle-of-bands-2023',
    name: 'Battle of the Bands',
    type: 'competition',
    date: 'November 2023',
    venue: 'NITK Surathkal',
    rank: '1st Place',
    description: 'Competed against 15 amazing bands from across South India and secured the 1st position with our original composition.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1598387181032-a310322db565?q=80&w=1526&auto=format&fit=crop',
    photos: [
      { src: 'https://images.unsplash.com/photo-1598387181032-a310322db565?w=800', caption: 'Trophy Celebration' },
      { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800', caption: 'Performance' },
    ],
    bandMembers: ['Nishant Verma', 'Tushar Vikash K', 'Vansh Srivastava', 'Aryan Raj', 'Anjishnu Satpathy', 'Milind Konwar']
  },
  {
    id: 'technomeet-2023',
    name: 'TechnoMeet Cultural Night',
    type: 'competition',
    date: 'September 2023',
    venue: 'VIT Vellore',
    rank: 'Runners Up',
    description: 'A high-energy performance securing 2nd place. The crowd energy was unmatched during our closing track.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop',
    photos: [],
    bandMembers: ['Nishant Verma', 'Tushar Vikash K', 'Vansh Srivastava']
  },
  {
    id: 'first-gig',
    name: 'First Public Gig',
    type: 'exhibition',
    date: 'March 2023',
    venue: 'Edge Cafe, Manipal',
    rank: null,
    description: 'Where it all started. An intimate gig introducing the Seven.84 sound to our local supporters.',
    youtubeId: null,
    thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1374&auto=format&fit=crop',
    photos: [
      { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800', caption: 'Small crowd' }
    ]
  }
];

export const getEventById = (id) => eventsData.find(e => e.id === id);

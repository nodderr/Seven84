export const eventsData = [
  {
    id: 'waves-24-indian-rock',
    name: 'Indian Rock',
    type: 'competition',
    date: '2024',
    time: 'November 2024',
    venue: 'Bits Goa Waves 24',
    rank: '5th',
    description: 'Participated in the Indian Rock competition at Bits Goa Waves.',
    youtubeId: null,
    thumbnail: '/gallery/events/waves-24-indian-rock/DSC_0006_1.webp',
    photos: [
      { src: '/gallery/events/waves-24-indian-rock/DSC_0006_1.webp', caption: 'Live at Waves 24' },
      { src: '/gallery/events/waves-24-indian-rock/DSC_0023_1.webp', caption: 'Performance' },
      { src: '/gallery/events/waves-24-indian-rock/DSC_0042.webp', caption: 'Band in action' },
      { src: '/gallery/events/waves-24-indian-rock/DSC_0080.webp', caption: 'Crowd view' },
      { src: '/gallery/events/waves-24-indian-rock/DSC_0096.webp', caption: 'Stage magic' }
    ],
    bandMembers: ['Nishant Verma', 'Tushar Vikash K', 'Aryan Raj', 'Vansh Srivastava', 'Anjishnu Satpathy', 'Milind Konwar']
  },
  {
    id: 'waves-24-silence-amps',
    name: 'Silence of the Amps',
    type: 'competition',
    date: '2024',
    time: 'November 2024',
    venue: 'Bits Goa Waves 24',
    rank: '2nd Place',
    description: 'Secured 2nd position in Silence of the Amps at Bits Goa Waves.',
    youtubeId: null,
    thumbnail: '/gallery/events/waves-24-silence-amps/7M4A7414.webp',
    photos: [
      { src: '/gallery/events/waves-24-silence-amps/7M4A7414.webp', caption: 'Acoustic Set' },
      { src: '/gallery/events/waves-24-silence-amps/7M4A7418.webp', caption: 'Silence of the Amps' },
      { src: '/gallery/events/waves-24-silence-amps/IMG-20231029-WA0101.webp', caption: 'Unplugged' },
      { src: '/gallery/events/waves-24-silence-amps/IMG-20231029-WA0102.webp', caption: 'Vibes' }
    ],
    bandMembers: ['Nishant Verma', 'Chaitanya Pandey', 'Aryan Raj', 'Vansh Srivastava', 'Tushar Vikash K', 'Milind Konwar']
  },
  {
    id: 'waves-24-eastern-vocals',
    name: 'Eastern Solo Vocals',
    type: 'competition',
    date: '2024',
    time: 'November 2024',
    venue: 'Bits Goa Waves 24',
    rank: '3rd Place',
    description: 'Secured 3rd position in Eastern Solo Vocals at Bits Goa Waves.',
    youtubeId: null,
    thumbnail: 'https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop',
    photos: [],
    bandMembers: ['Vansh Srivastava']
  }
];

export const getEventById = (id) => eventsData.find(e => e.id === id);

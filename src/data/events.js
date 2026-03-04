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
    thumbnail: 'https://images.unsplash.com/photo-1598387181032-a310322db565?q=80&w=1526&auto=format&fit=crop',
    photos: [],
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
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop',
    photos: [],
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

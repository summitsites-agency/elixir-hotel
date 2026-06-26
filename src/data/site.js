export const site = {
  brand: 'ELIXIR',
  brandFull: 'Elixir — The Metropolitan Grand Hotel',
  issue: 'The Metropolitan — Vol. 01',
  tagline: 'An editorial in residence.',
  standfirst:
    'A grand hotel of one hundred and twenty-eight rooms, a tower restaurant, and a cocktail bar on the forty-second floor — set, like a good story, above the city.',
  navLinks: [
    { label: 'The Hotel', href: '#hotel' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Dining', href: '#dining' },
    { label: 'The Bar', href: '#bar' },
    { label: 'The City', href: '#city' },
    { label: 'Enquiries', href: '#enquiries' },
  ],
  contact: {
    email: 'stay@elixirhotel.example',
    phone: '+1 (212) 555-0148',
    address: '1 Meridian Plaza, Tribeca, New York',
    hours: 'Front desk · 24 hours',
  },
  // Optional Formspree endpoint via env; falls back to mailto when absent.
  formEndpoint: import.meta.env?.VITE_FORM_ENDPOINT || '',
};

// Running-header + cover stats (animated). `to` is the numeric target.
export const stats = [
  { to: 1924, label: 'Founded', prefix: '', suffix: '' },
  { to: 128, label: 'Rooms & suites', prefix: '', suffix: '' },
  { to: 42, label: 'Bar · floor', prefix: '', suffix: '' },
  { to: 24, label: 'In residence', prefix: '', suffix: 'h' },
];

// Lead essay — "The Hotel" department.
export const hotelEssay = {
  kicker: 'The House',
  lead:
    'Elixir was built in 1924 as the city’s first tower hotel — twenty-two floors of limestone and brass, raised on the promise that a great hotel is a city that never asks you to leave.',
  body: [
    'A century on, that promise still holds. The lobby keeps its original terrazzo and a concierge desk cut from a single slab of Carrara. Above it, one hundred and twenty-eight rooms rise toward a restaurant and a bar that the city has, for a hundred years, agreed to keep quiet about.',
    'We are not a large hotel, and we have never wanted to be. What we offer instead is proportion — a doorman who knows your name by the second night, a bath drawn before you ask, a window that frames the river like a held breath.',
  ],
  pull: 'A grand hotel is a city that never asks you to leave.',
  pullCite: 'House motto, est. 1924',
};

// Dining — "Vermillion", the tower restaurant.
export const dining = {
  name: 'Vermillion',
  floor: 'Floor 41',
  kicker: 'The Restaurant',
  lead:
    'Vermillion is a forty-first-floor dining room of forty covers, where a single tasting menu changes with the light and the market.',
  body:
    'Chef Aurelia Voss cooks one menu, served once a night, to a room that watches the city turn from gold to ink. Reservations open thirty days ahead and rarely last the morning.',
  menu: [
    { course: 'I', name: 'Oyster · cucumber · frozen elixir', note: 'cold' },
    { course: 'II', name: 'Hand-cut tagliatelle · brown butter · aged parmesan', note: 'pasta' },
    { course: 'III', name: 'Dry-aged duck · burnt honey · bitter leaf', note: 'fire' },
    { course: 'IV', name: 'Tonka & black fig · crème fraîche', note: 'sweet' },
  ],
  marginalia:
    'Dinner only · 6 — 11pm. One seating. A vegetarian menu is offered with notice. Vermillion is on the 41st floor; the express lift departs from the lobby colonnade.',
};

// The Bar — "Elixir", the namesake on the 42nd floor.
export const bar = {
  name: 'Elixir',
  floor: 'Floor 42',
  kicker: 'The Bar',
  lead:
    'Up one more floor — past the restaurant, behind an unmarked brass door — is the bar that gave the hotel its name.',
  body:
    'Forty-two floors up, Elixir has poured the same eleven cocktails since 1924, plus one the bartender will not write down. No reservations. No telephone. The lift only stops here after eight.',
  pull: 'Every great city keeps its secret on the forty-second floor.',
  pullCite: 'Elixir — Floor 42',
  pours: [
    { name: 'The Apothecary', base: 'rye · amaro · bitters', price: '24' },
    { name: 'Meridian Sour', base: 'mezcal · citrus · saline', price: '22' },
    { name: 'Limestone & Brass', base: 'gin · vermouth · oil', price: '23' },
    { name: 'The One We Don’t Write Down', base: 'ask the bar', price: '—' },
  ],
};

// The City — neighbourhood essay + sidenotes.
export const city = {
  kicker: 'The Neighbourhood',
  lead:
    'Elixir stands at Meridian Plaza, where Tribeca loosens into the river — close enough to the noise to hear it, far enough to keep your own.',
  body: [
    'Step out beneath the colonnade and the city arranges itself around you: the produce market two streets north, the old printing district to the east, and the water always somewhere to the west, catching the light between buildings.',
    'Our concierge keeps a quiet ledger of the things worth leaving for — a 7am bakery, a bookbinder, a jazz room with no sign on the door — and will tell you, if you ask, which corner the morning sun finds first.',
  ],
  notes: [
    { k: 'On foot', v: 'Riverfront walk · 4 min' },
    { k: 'Market', v: 'Greenwich produce · 6 min' },
    { k: 'Culture', v: 'The Printworks gallery · 9 min' },
    { k: 'After dark', v: 'The unsigned jazz room · 11 min' },
  ],
};

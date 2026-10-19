export const SITE = {
  name: 'GWE NGO INDIA',
  tagline: 'Glorious Women Empowerment',
  url: 'https://gwengoindia.org',
  description:
    'Glorious Women Empowerment (GWE) NGO India — a women-led nonprofit working since 1998 for the empowerment of women, children and elders in Kurnool and Kadapa Districts of Andhra Pradesh.',
};

export const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about-us',
    children: [
      { label: 'Our Story', href: '/about-us' },
      { label: 'Our Vision', href: '/about-us/vision' },
      { label: 'Our Mission', href: '/about-us/mission' },
      { label: 'Objectives', href: '/about-us/objectives' },
      { label: 'Our Work', href: '/about-us/our-work' },
      { label: 'Donor Speak', href: '/about-us/donor-speak' },
      { label: 'Financials', href: '/about-us/financials' },
      { label: 'Charitable Status', href: '/about-us/charitable-status' },
    ],
  },
  {
    label: 'Women',
    href: '/women',
    children: [
      { label: 'Support for Women', href: '/women' },
      { label: 'Women Empowerment', href: '/women/women-empowerment' },
      { label: 'Health Education', href: '/women/health-education' },
    ],
  },
  {
    label: 'Children',
    href: '/children',
    children: [
      { label: 'Support for Girl Child', href: '/children' },
      { label: 'Education Material', href: '/children/education-material' },
      { label: 'School Uniforms', href: '/children/school-uniforms' },
      { label: 'Day Care', href: '/children/day-care' },
      { label: 'Sponsorship', href: '/children/sponsorship' },
    ],
  },
  {
    label: 'Elders',
    href: '/elders',
    children: [
      { label: 'Support for Elders', href: '/elders' },
      { label: 'Nutritious Meal', href: '/elders/nutritious-meal' },
      { label: 'Nutritious Diet', href: '/elders/nutritious-diet' },
      { label: 'Groceries Support', href: '/elders/groceries-support' },
      { label: 'Distribution of Blankets', href: '/elders/distribution-of-blankets' },
    ],
  },
  { label: 'Donate', href: '/donate', cta: true },
];

export const IMAGES = {
  logo: '/images/gwengoindia_logo1-1.webp',
  qr: '/images/QRCode-gwe122.webp',
  heroSlide1: '/images/gwen-community-hero.jpg',
  heroSlide2: 'https://gwengoindia.org/wp-content/uploads/2023/06/DSC09990.jpg',
  heroHands:
    'https://gwengoindia.org/wp-content/uploads/2023/06/people-stacking-hands-together-park-scaled.jpg',
  about: 'https://gwengoindia.org/wp-content/uploads/2023/05/About1.webp',
  aboutCore: 'https://gwengoindia.org/wp-content/uploads/2021/05/About_core_05.jpg',
  eldersHome:
    'https://gwengoindia.org/wp-content/uploads/2023/05/old-young-man-holding-hands-close-up-scaled.jpg',
  elders: 'https://gwengoindia.org/wp-content/uploads/2023/05/elders.webp',
  kids: 'https://gwengoindia.org/wp-content/uploads/2023/05/Home_kids.jpg',
  children: 'https://gwengoindia.org/wp-content/uploads/2023/05/children.webp',
  woman: 'https://gwengoindia.org/wp-content/uploads/2023/05/Home_woman.jpg',
  women: 'https://gwengoindia.org/wp-content/uploads/2023/05/women.webp',
};

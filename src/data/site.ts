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
  {
    label: 'Women',
    href: '/women',
    children: [
      { label: 'Support for Women', href: '/women' },
      { label: 'Women Empowerment', href: '/women/women-empowerment' },
      { label: 'Health Education', href: '/women/health-education' },
    ],
  },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Donate', href: '/donate', cta: true },
];

export const IMAGES = {
  logo: '/images/gwengoindia_logo1-1.webp',
  qr: '/images/QRCode-gwe122.webp',
  heroSlide1: '/images/gwen-community-hero.jpg',
  heroSlide2:
    'https://images.pexels.com/photos/15675903/pexels-photo-15675903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  heroHands:
    'https://images.pexels.com/photos/5029919/pexels-photo-5029919.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  about:
    'https://images.pexels.com/photos/33808945/pexels-photo-33808945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  aboutCore:
    'https://images.pexels.com/photos/28382914/pexels-photo-28382914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  eldersHome:
    'https://images.pexels.com/photos/6646815/pexels-photo-6646815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  elders:
    'https://images.pexels.com/photos/30075634/pexels-photo-30075634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  kids:
    'https://images.pexels.com/photos/20556421/pexels-photo-20556421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  children:
    'https://images.pexels.com/photos/15119089/pexels-photo-15119089.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  woman:
    'https://images.pexels.com/photos/8527070/pexels-photo-8527070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  women:
    'https://images.pexels.com/photos/11359621/pexels-photo-11359621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

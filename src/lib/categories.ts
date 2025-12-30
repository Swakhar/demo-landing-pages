export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  tags: string[];
}

export const categories: Category[] = [
  {
    id: 'restaurant-elegant',
    name: 'Elegant Restaurant',
    description: 'Sophisticated dining experiences for Italian, French, and fine dining establishments',
    icon: '🍷',
    tags: ['Italian', 'French', 'Fine Dining']
  },
  {
    id: 'restaurant-casual',
    name: 'Casual Dining',
    description: 'Relaxed and inviting designs for cafes, fast food, and bars',
    icon: '☕',
    tags: ['Cafe', 'Fast Food', 'Bar']
  },
  {
    id: 'agency-creative',
    name: 'Creative Agency',
    description: 'Bold and innovative layouts for design, marketing, and branding agencies',
    icon: '🎨',
    tags: ['Design', 'Marketing', 'Branding']
  },
  {
    id: 'agency-corporate',
    name: 'Corporate Agency',
    description: 'Professional and trustworthy designs for consulting, finance, and legal firms',
    icon: '💼',
    tags: ['Consulting', 'Finance', 'Legal']
  },
  {
    id: 'ecommerce-product',
    name: 'Product Landing',
    description: 'Compelling single-product landing pages that convert visitors into customers',
    icon: '🛍️',
    tags: ['E-commerce', 'Product', 'Landing']
  },
  {
    id: 'saas-landing',
    name: 'SaaS Platform',
    description: 'Modern software, app, and platform landing pages that drive sign-ups',
    icon: '💻',
    tags: ['Software', 'App', 'Platform']
  },
  {
    id: 'photographer-portfolio',
    name: 'Photography Portfolio',
    description: 'Stunning visual portfolios for photographers and videographers',
    icon: '📸',
    tags: ['Photography', 'Videography', 'Portfolio']
  },
  {
    id: 'fitness-trainer',
    name: 'Fitness Trainer',
    description: 'Energetic and motivating pages for gyms, yoga studios, and personal trainers',
    icon: '💪',
    tags: ['Gym', 'Yoga', 'Training']
  },
  {
    id: 'medical-practice',
    name: 'Medical Practice',
    description: 'Clean and professional designs for doctors, dentists, and clinics',
    icon: '⚕️',
    tags: ['Doctor', 'Dentist', 'Clinic']
  },
  {
    id: 'real-estate-agent',
    name: 'Real Estate',
    description: 'Attractive property listings and agent portfolios',
    icon: '🏡',
    tags: ['Property', 'Listings', 'Agent']
  },
  {
    id: 'event-planning',
    name: 'Event Planning',
    description: 'Elegant and organized designs for weddings, parties, and conferences',
    icon: '🎉',
    tags: ['Weddings', 'Parties', 'Conferences']
  }
];

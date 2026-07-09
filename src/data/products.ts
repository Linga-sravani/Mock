import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'copper-brass',
    name: 'Copper & Brass',
    icon: '🫖',
    description: 'Traditional metal utensils for healthy cooking and water storage',
    image: '/images/copper-bottle.jpg'
  },
  {
    id: 'earthen-clay',
    name: 'Earthen & Clay',
    icon: '🏺',
    description: 'Natural clay pots and cookware for authentic taste',
    image: '/images/earthen-pots.jpg'
  },
  {
    id: 'cast-iron',
    name: 'Cast Iron',
    icon: '🍳',
    description: 'Durable iron cookware that lasts generations',
    image: '/images/cast-iron.jpg'
  },
  {
    id: 'wooden-bamboo',
    name: 'Wooden & Bamboo',
    icon: '🥄',
    description: 'Eco-friendly utensils and serving items',
    image: '/images/wooden-utensils.jpg'
  },
  {
    id: 'natural-cleaning',
    name: 'Natural Cleaning',
    icon: '🌿',
    description: 'Chemical-free cleaning solutions for your home',
    image: '/images/hero-kitchen.jpg'
  },
  {
    id: 'steel-utensils',
    name: 'Steel Utensils',
    icon: '🥣',
    description: 'High-quality stainless steel for daily use',
    image: '/images/brass-pot.jpg'
  }
];

export const products: Product[] = [
  // Copper & Brass
  {
    id: 'copper-bottle-1',
    name: 'Pure Copper Water Bottle (1L)',
    description: 'Handcrafted pure copper water bottle. Drinking water stored in copper vessels has numerous health benefits including improved digestion and immunity.',
    price: 899,
    originalPrice: 1299,
    image: '/images/copper-bottle.jpg',
    category: 'copper-brass',
    rating: 4.8,
    reviews: 234,
    badge: 'Bestseller',
    benefits: ['Improves digestion', 'Boosts immunity', 'Anti-microbial', 'No soap needed'],
    inStock: true
  },
  {
    id: 'brass-cooking-pot',
    name: 'Traditional Brass Cooking Pot (3L)',
    description: 'Authentic brass pot for cooking traditional recipes. Brass retains heat evenly and adds essential minerals to food.',
    price: 2499,
    originalPrice: 3200,
    image: '/images/brass-pot.jpg',
    category: 'copper-brass',
    rating: 4.7,
    reviews: 156,
    benefits: ['Even heat distribution', 'Adds minerals to food', 'Traditional cooking', 'Easy to clean'],
    inStock: true
  },
  {
    id: 'copper-glass-set',
    name: 'Copper Tumbler Set (4 pcs)',
    description: 'Set of 4 handcrafted copper tumblers. Perfect for daily water consumption with health benefits.',
    price: 1299,
    image: '/images/copper-bottle.jpg',
    category: 'copper-brass',
    rating: 4.6,
    reviews: 189,
    benefits: ['Daily wellness', 'Handcrafted', 'Easy maintenance', 'Durable'],
    inStock: true
  },
  // Earthen & Clay
  {
    id: 'clay-cooking-pot',
    name: 'Earthen Clay Cooking Pot (2L)',
    description: 'Natural clay pot for slow cooking. Preserves nutrients and enhances food flavor naturally without any additives.',
    price: 699,
    originalPrice: 899,
    image: '/images/earthen-pots.jpg',
    category: 'earthen-clay',
    rating: 4.9,
    reviews: 312,
    badge: 'Eco Choice',
    benefits: ['Natural cooking', 'Preserves nutrients', 'Enhances flavor', '100% natural'],
    inStock: true
  },
  {
    id: 'clay-water-pot',
    name: 'Matka Water Pot (10L)',
    description: 'Traditional earthen water pot that naturally cools water. No electricity needed for cool, refreshing water.',
    price: 599,
    image: '/images/earthen-pots.jpg',
    category: 'earthen-clay',
    rating: 4.8,
    reviews: 445,
    badge: 'Summer Essential',
    benefits: ['Natural cooling', 'No electricity', 'Alkaline water', 'Traditional design'],
    inStock: true
  },
  {
    id: 'clay-curry-pot',
    name: 'Clay Handi for Curries (1.5L)',
    description: 'Perfect for making traditional curries with authentic taste. The porous clay allows slow, even cooking.',
    price: 449,
    image: '/images/earthen-pots.jpg',
    category: 'earthen-clay',
    rating: 4.7,
    reviews: 198,
    benefits: ['Authentic taste', 'Slow cooking', 'Natural material', 'Affordable'],
    inStock: true
  },
  // Cast Iron
  {
    id: 'cast-iron-skillet',
    name: 'Pre-Seasoned Cast Iron Skillet (10")',
    description: 'Heavy-duty cast iron skillet that lasts forever. Naturally non-stick when seasoned properly. No chemical coatings.',
    price: 1599,
    originalPrice: 1999,
    image: '/images/cast-iron.jpg',
    category: 'cast-iron',
    rating: 4.9,
    reviews: 567,
    badge: 'Lifetime Buy',
    benefits: ['Lifetime durability', 'Natural non-stick', 'Iron enrichment', 'No chemicals'],
    inStock: true
  },
  {
    id: 'cast-iron-dosa-pan',
    name: 'Cast Iron Dosa Tawa (12")',
    description: 'Traditional cast iron tawa for perfect dosas, rotis, and parathas. Improves with use over time.',
    price: 1299,
    image: '/images/cast-iron.jpg',
    category: 'cast-iron',
    rating: 4.8,
    reviews: 423,
    benefits: ['Perfect for dosas', 'Improves with age', 'Even heating', 'Traditional cooking'],
    inStock: true
  },
  {
    id: 'cast-iron-kadai',
    name: 'Cast Iron Kadai (3L)',
    description: 'Deep cast iron kadai for frying and curries. The iron content adds nutrition to your food.',
    price: 1899,
    image: '/images/cast-iron.jpg',
    category: 'cast-iron',
    rating: 4.7,
    reviews: 289,
    benefits: ['Deep frying', 'Iron rich cooking', 'Durable', 'Versatile'],
    inStock: true
  },
  // Wooden & Bamboo
  {
    id: 'wooden-spoon-set',
    name: 'Handcrafted Wooden Spoon Set (6 pcs)',
    description: 'Beautiful wooden spoons for cooking and serving. Gentle on cookware, no scratching. Natural antibacterial properties.',
    price: 699,
    originalPrice: 899,
    image: '/images/wooden-utensils.jpg',
    category: 'wooden-bamboo',
    rating: 4.6,
    reviews: 234,
    benefits: ['Gentle on pans', 'Antibacterial', 'Beautiful grain', 'Handcrafted'],
    inStock: true
  },
  {
    id: 'bamboo-cutting-board',
    name: 'Bamboo Cutting Board Set (3 pcs)',
    description: 'Eco-friendly bamboo cutting boards in three sizes. Naturally antibacterial and sustainable.',
    price: 899,
    image: '/images/wooden-utensils.jpg',
    category: 'wooden-bamboo',
    rating: 4.7,
    reviews: 345,
    badge: 'Eco Choice',
    benefits: ['Antibacterial', 'Sustainable bamboo', 'Knife-friendly', 'Multiple sizes'],
    inStock: true
  },
  {
    id: 'wooden-serving-bowl',
    name: 'Teak Wood Serving Bowl',
    description: 'Elegant teak wood bowl for serving. Natural oils make it water-resistant and durable.',
    price: 1199,
    image: '/images/wooden-utensils.jpg',
    category: 'wooden-bamboo',
    rating: 4.8,
    reviews: 178,
    benefits: ['Water resistant', 'Beautiful finish', 'Durable teak', 'Natural oils'],
    inStock: true
  },
  // Steel Utensils
  {
    id: 'steel-thali-set',
    name: 'Premium Steel Thali Set (6 pcs)',
    description: 'Complete steel thali set with katori, glass, and spoon. Food-grade stainless steel that needs no soap.',
    price: 799,
    originalPrice: 999,
    image: '/images/brass-pot.jpg',
    category: 'steel-utensils',
    rating: 4.7,
    reviews: 456,
    benefits: ['Food-grade steel', 'Easy to clean', 'Hygienic', 'Complete set'],
    inStock: true
  },
  {
    id: 'steel-water-bottle',
    name: 'Stainless Steel Water Bottle (1L)',
    description: 'Double-walled steel bottle that keeps water cool. No plastic, no chemicals leaching into your water.',
    price: 599,
    image: '/images/copper-bottle.jpg',
    category: 'steel-utensils',
    rating: 4.8,
    reviews: 678,
    badge: 'Popular',
    benefits: ['Insulated', 'No plastic', 'BPA free', 'Durable'],
    inStock: true
  },
  // Natural Cleaning
  {
    id: 'wood-ash-cleaner',
    name: 'Wood Ash Natural Cleaner (500g)',
    description: 'Traditional wood ash cleaner for utensils. Completely natural, no chemicals needed for sparkling clean dishes.',
    price: 199,
    image: '/images/hero-kitchen.jpg',
    category: 'natural-cleaning',
    rating: 4.5,
    reviews: 234,
    badge: 'Zero Waste',
    benefits: ['100% natural', 'No chemicals', 'Zero waste', 'Traditional method'],
    inStock: true
  },
  {
    id: 'coconut-scrubber',
    name: 'Coconut Coir Scrubber Set (5 pcs)',
    description: 'Natural coconut fiber scrubbers. Biodegradable and effective. Perfect for all types of cookware.',
    price: 149,
    image: '/images/hero-kitchen.jpg',
    category: 'natural-cleaning',
    rating: 4.6,
    reviews: 345,
    benefits: ['Biodegradable', 'Effective cleaning', 'No plastic', 'Natural fiber'],
    inStock: true
  },
  {
    id: 'neem-wood-brush',
    name: 'Neem Wood Cleaning Brush',
    description: 'Antibacterial neem wood brush with natural bristles. Perfect for cleaning bottles and utensils.',
    price: 129,
    image: '/images/wooden-utensils.jpg',
    category: 'natural-cleaning',
    rating: 4.4,
    reviews: 189,
    benefits: ['Antibacterial neem', 'Natural bristles', 'Long handle', 'Sustainable'],
    inStock: true
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    text: 'Switching to copper bottles and clay pots has transformed my family\'s health. No more plastic, no more chemicals. Natura made it easy!',
    rating: 5,
    product: 'Copper Water Bottle'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    text: 'The cast iron tawa is incredible. My dosas come out perfect every time. Best investment for my kitchen!',
    rating: 5,
    product: 'Cast Iron Dosa Tawa'
  },
  {
    id: 3,
    name: 'Anita Patel',
    location: 'Ahmedabad',
    text: 'I love that I can clean my brass utensils with just ash and water. No soap needed! My grandmother would be proud.',
    rating: 5,
    product: 'Brass Cooking Pot'
  },
  {
    id: 4,
    name: 'Suresh Menon',
    location: 'Kochi',
    text: 'The wooden utensils are beautiful and so gentle on my cookware. No scratches, and they look amazing in my kitchen.',
    rating: 5,
    product: 'Wooden Spoon Set'
  }
];

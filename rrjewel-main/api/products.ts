import { VercelRequest, VercelResponse } from '@vercel/node';

// Sample products data
const PRODUCTS = [
  {
    id: '1',
    name: 'Diamond Engagement Ring',
    category: 'Rings',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    description: 'Stunning diamond engagement ring with 14k gold band',
    rating: 4.9,
    reviews: 45,
  },
  {
    id: '2',
    name: 'Pearl Necklace',
    category: 'Necklaces',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1535563566420-3be941b5c15d?w=500&q=80',
    description: 'Elegant pearl necklace with gold findings',
    rating: 4.8,
    reviews: 32,
  },
  {
    id: '3',
    name: 'Emerald Earrings',
    category: 'Earrings',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    description: 'Beautiful emerald drop earrings with diamond accents',
    rating: 4.7,
    reviews: 28,
  },
  {
    id: '4',
    name: 'Gold Bracelet',
    category: 'Bracelets',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80',
    description: 'Classic gold bangle bracelet with intricate detailing',
    rating: 4.6,
    reviews: 19,
  },
];

export default function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.status(200).json(PRODUCTS);
}

import { VercelRequest, VercelResponse } from '@vercel/node';

const BANNERS = [
  {
    id: '1',
    title: 'Spring Collection',
    description: 'New arrivals for this season',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
    link: '/collections/new-arrivals',
    active: true,
  },
  {
    id: '2',
    title: 'Summer Sale',
    description: 'Up to 50% off on selected items',
    image: 'https://images.unsplash.com/photo-1515562141207-6811bcb33efb?w=1200&q=80',
    link: '/sale',
    active: true,
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

  res.status(200).json(BANNERS);
}

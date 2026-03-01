import { VercelRequest, VercelResponse } from '@vercel/node';

const VIDEOS = [
  {
    id: '1',
    title: 'Luxury Diamond Collection',
    description: 'Explore our exquisite diamond collection',
    thumbnail: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '3:45',
  },
  {
    id: '2',
    title: 'Jewelry Making Process',
    description: 'Behind the scenes of our jewelry craftsmanship',
    thumbnail: 'https://images.unsplash.com/photo-1515562141207-6811bcb33efb?w=500&q=80',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '5:20',
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

  res.status(200).json(VIDEOS);
}

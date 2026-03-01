import { VercelRequest, VercelResponse } from '@vercel/node';

const COUPONS = [
  {
    id: '1',
    code: 'SPARKLE20',
    discount: 20,
    type: 'percentage',
    maxUses: 100,
    currentUses: 45,
    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    description: '20% off on all jewelry',
  },
  {
    id: '2',
    code: 'LUXURY500',
    discount: 500,
    type: 'fixed',
    maxUses: 50,
    currentUses: 12,
    expiryDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    description: '$500 off on orders over $2000',
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

  res.status(200).json(COUPONS);
}

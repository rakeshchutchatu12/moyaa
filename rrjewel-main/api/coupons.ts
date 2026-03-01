import { VercelRequest, VercelResponse } from '@vercel/node';

const coupons = [
  {
    code: 'WELCOME10',
    discountPercent: 10,
    active: true,
    productId: null,
    expiresAt: null,
    usageLimit: null,
    used: 0
  },
  {
    code: 'LUXURY20',
    discountPercent: 20,
    active: true,
    productId: null,
    expiresAt: null,
    usageLimit: null,
    used: 0
  },
  {
    code: 'DIAMOND30',
    discountPercent: 30,
    active: true,
    productId: null,
    expiresAt: null,
    usageLimit: null,
    used: 0
  }
];

export default async (req: VercelRequest, res: VercelResponse) => {
  res.json(coupons);
};

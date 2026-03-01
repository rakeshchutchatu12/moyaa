import { VercelRequest, VercelResponse } from '@vercel/node';

const banners = [
  {
    id: '1',
    text: 'FREE SHIPPING ON ORDERS OVER $100',
    type: 'info'
  },
  {
    id: '2',
    text: 'LIMITED TIME: 30% OFF ON SELECTED ITEMS',
    type: 'hot'
  },
  {
    id: '3',
    text: 'NEW COLLECTION JUST ARRIVED',
    type: 'new'
  }
];

export default async (req: VercelRequest, res: VercelResponse) => {
  res.json(banners);
};

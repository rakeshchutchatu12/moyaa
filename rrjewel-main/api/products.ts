import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
  // Import products data
  const { products } = await import('../../src/data/products');
  
  res.json(products);
};

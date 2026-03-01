import { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
  res.json({ status: 'ok', message: 'RRJEWEL API Server is running' });
};

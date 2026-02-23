import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ error: 'User already exists' });
  const user = new User({ email, passwordHash: password, name, isAdmin: false });
  await user.save();
  res.json({ user: { id: user._id, email: user.email, name: user.name, isAdmin: user.isAdmin } });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
  const user = await User.findOne({ email });
  if (!user || user.passwordHash !== password) return res.status(400).json({ error: 'Invalid credentials' });
  res.json({ user: { id: user._id, email: user.email, name: user.name, isAdmin: user.isAdmin } });
});

router.get('/me', async (req, res) => {
  res.json({ message: 'Endpoint available - use localStorage' });
});

export default router;


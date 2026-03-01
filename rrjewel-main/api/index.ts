import { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  credentials: true,
}));
app.use(express.json());

// Connect to MongoDB
let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/rrjewel', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any);
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Auth routes
app.post('/api/auth/login', async (req, res) => {
  try {
    await connectDB();
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    // Import models
    const mongoose_imported = await import('mongoose');
    const User = mongoose_imported.models.User || mongoose_imported.model('User', new mongoose_imported.Schema({
      email: { type: String, unique: true, required: true },
      passwordHash: { type: String, required: true },
      name: String,
      isAdmin: Boolean,
    }));

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Compare password
    const bcryptjs = await import('bcryptjs');
    const isValidPassword = await bcryptjs.default.compare(password, user.passwordHash);
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    res.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/auth/register', async (req, res) => {
  try {
    await connectDB();
    const { email, password, name } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const mongoose_imported = await import('mongoose');
    const User = mongoose_imported.models.User || mongoose_imported.model('User', new mongoose_imported.Schema({
      email: { type: String, unique: true, required: true },
      passwordHash: { type: String, required: true },
      name: String,
      isAdmin: Boolean,
    }));

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const bcryptjs = await import('bcryptjs');
    const passwordHash = await bcryptjs.default.hash(password, 10);

    const user = await User.create({
      email,
      passwordHash,
      name,
      isAdmin: false,
    });

    res.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Generic catch-all
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

export default (req: VercelRequest, res: VercelResponse) => {
  return app(req, res);
};

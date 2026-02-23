import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password required' },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user || user.passwordHash !== password) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const secret = process.env.JWT_SECRET || 'dev_secret';
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: '7d' });

    return NextResponse.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      },
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

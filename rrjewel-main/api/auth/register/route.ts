import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email, password, name } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password required' },
        { status: 400 }
      );
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    const user = new User({
      email,
      passwordHash: password,
      name,
      isAdmin: false,
    });

    await user.save();

    return NextResponse.json(
      {
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          isAdmin: user.isAdmin,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json(
    { message: 'Endpoint available - use localStorage' },
    { status: 200 }
  );
}

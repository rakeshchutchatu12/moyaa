import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import User from '@/models/User';
import { connectDB } from '@/lib/mongodb';

export async function middleware(request: NextRequest) {
  // Only protect /api routes that require auth
  if (request.nextUrl.pathname.startsWith('/api/chat')) {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    
    try {
      const secret = process.env.JWT_SECRET || 'dev_secret';
      const decoded: any = jwt.verify(token, secret);
      
      await connectDB();
      const user = await User.findById(decoded.id).select('-passwordHash');
      
      if (!user) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }

      // Store user info in request headers for API routes
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-id', user._id.toString());
      requestHeaders.set('x-user-email', user.email);
      
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'],
};

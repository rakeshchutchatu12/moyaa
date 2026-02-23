import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, message } = body;

    // Get the authenticated user from the request
    // Note: You'll need to implement proper authentication (JWT, session, etc.)
    const authenticatedUserId = request.headers.get('x-user-id');

    // Authorization check: Verify that the userId matches the authenticated user
    // This prevents user impersonation attacks
    if (userId !== authenticatedUserId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Process the chat message here
    // TODO: Save to database, call AI service, etc.

    return NextResponse.json({
      success: true,
      message: 'Chat message processed',
      userId,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const authenticatedUserId = request.headers.get('x-user-id');
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    // Authorization check: Users can only access their own chat history
    if (userId !== authenticatedUserId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Retrieve chat messages for the authenticated user
    // TODO: Fetch from database

    return NextResponse.json({
      success: true,
      userId: authenticatedUserId,
      messages: []
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

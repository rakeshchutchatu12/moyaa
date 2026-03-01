import mongoose from 'mongoose';

let cachedConnection: typeof mongoose | null = null;

export async function connectDB() {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('MONGO_URI environment variable is not set');
    }

    const connection = await mongoose.connect(mongoUri);
    cachedConnection = connection;
    return connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export async function disconnectDB() {
  if (cachedConnection) {
    await cachedConnection.disconnect();
    cachedConnection = null;
  }
}

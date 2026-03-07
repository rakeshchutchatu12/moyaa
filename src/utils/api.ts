// API Configuration
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://moyaa-backend.vercel.app' // Update with your production backend URL
  : 'http://localhost:5000';

export const API_ENDPOINTS = {
  HEALTH: `${API_BASE_URL}/api/health`,
  AUTH_LOGIN: `${API_BASE_URL}/api/auth/login`,
  AUTH_REGISTER: `${API_BASE_URL}/api/auth/register`,
  PRODUCTS: `${API_BASE_URL}/api/products`,
  VIDEOS: `${API_BASE_URL}/api/videos`,
  BANNERS: `${API_BASE_URL}/api/banners`,
  COUPONS: `${API_BASE_URL}/api/coupons`,
};

export const getApiUrl = (endpoint: string) => {
  return `${API_BASE_URL}${endpoint}`;
};

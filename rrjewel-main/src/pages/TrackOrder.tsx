import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle } from 'lucide-react';

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order tracking logic here
    console.log('Tracking order:', orderNumber, email);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TRACK YOUR ORDER</h1>
          <p className="text-gray-600">
            Enter your order details below to track your jewelry shipment
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <form onSubmit={handleTrackOrder} className="space-y-6">
            <div>
              <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Order Number
              </label>
              <input
                type="text"
                id="orderNumber"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Enter your order number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand text-dark-chocolate py-3 px-6 rounded-lg font-medium hover:bg-brand-hover transition-colors flex items-center justify-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>TRACK ORDER</span>
            </button>
          </form>
        </div>

        {/* Sample Order Status */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Status</h2>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">Order Confirmed</h3>
                <p className="text-sm text-gray-600">Your order has been confirmed and is being prepared</p>
                <p className="text-xs text-gray-500">Dec 10, 2024 - 2:30 PM</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Package className="h-8 w-8 text-brand" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">Processing</h3>
                <p className="text-sm text-gray-600">Your jewelry is being carefully packaged</p>
                <p className="text-xs text-gray-500">Dec 11, 2024 - 10:15 AM</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Truck className="h-8 w-8 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-400">Shipped</h3>
                <p className="text-sm text-gray-400">Your order is on its way</p>
                <p className="text-xs text-gray-400">Estimated: Dec 12, 2024</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-400">Delivered</h3>
                <p className="text-sm text-gray-400">Your order has been delivered</p>
                <p className="text-xs text-gray-400">Estimated: Dec 14, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
import React, { useState } from 'react';
import {
  User,
  LayoutDashboard,
  Package,
  Heart,
  History,
  Settings,
  LogOut,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';
import { OrderRecord, StoryboardPage } from '../types';

import iphone15Img from '../assets/images/product_iphone15_1790847823667.jpg';
import nikeShoesImg from '../assets/images/product_nike_shoes_1790847836073.jpg';
import nykaaLipstickImg from '../assets/images/product_nykaa_lipstick_1790847867533.jpg';

interface UserProfilePageViewProps {
  onNavigate: (page: StoryboardPage) => void;
  onLogout: () => void;
}

export const UserProfilePageView: React.FC<UserProfilePageViewProps> = ({
  onNavigate,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'saved' | 'history' | 'settings'>('dashboard');

  const orders: OrderRecord[] = [
    {
      id: 'ORD-98421',
      productId: 'prod-iphone-15',
      productTitle: 'iPhone 15 (128GB)',
      productImage: iphone15Img,
      price: 69900,
      status: 'Delivered',
      orderDate: '12 Sep 2025',
      platform: 'Amazon',
    },
    {
      id: 'ORD-98319',
      productId: 'prod-nike-shoes',
      productTitle: 'Nike Running Shoes',
      productImage: nikeShoesImg,
      price: 4499,
      status: 'Delivered',
      orderDate: '8 Sep 2025',
      platform: 'Myntra',
    },
    {
      id: 'ORD-98112',
      productId: 'prod-nykaa-lipstick',
      productTitle: 'Nykaa Lipstick',
      productImage: nykaaLipstickImg,
      price: 399,
      status: 'Processing',
      orderDate: '5 Sep 2025',
      platform: 'Nykaa',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* User Header Profile Card (Panel 10 from Storyboard) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-indigo-600 text-white font-black text-xl flex items-center justify-center shadow-md shadow-indigo-600/25">
            SK
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-900 font-heading">
              Selvarani K
            </h1>
            <p className="text-xs text-slate-500 font-mono">
              selvarani@gmail.com • Verified Smart Shopper
            </p>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:text-rose-600 hover:bg-rose-50 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Logout</span>
        </button>
      </div>

      {/* Main Grid: Left Nav + Right Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar Menu (Panel 10) */}
        <aside className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-3 shadow-2xs space-y-1">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'orders', label: 'My Orders', icon: Package },
            { id: 'saved', label: 'Saved Products', icon: Heart },
            { id: 'history', label: 'Review History', icon: History },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  active
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Right Content Area (Panel 10) */}
        <main className="lg:col-span-9 space-y-6">
          {/* Greeting Banner */}
          <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 sm:p-5 flex items-center justify-between">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Welcome, Selvarani!
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Here's your activity summary and recent cross-marketplace purchase track.
              </p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer shrink-0 hidden sm:inline"
            >
              Shop More
            </button>
          </div>

          {/* 3 Metric Summary Boxes (Panel 10) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Total Orders
              </span>
              <div className="text-3xl font-black text-slate-900 font-mono">
                5
              </div>
              <p className="text-[11px] text-emerald-600 font-semibold">
                ✓ 2 delivered this month
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Saved Products
              </span>
              <div className="text-3xl font-black text-indigo-600 font-mono">
                12
              </div>
              <p className="text-[11px] text-slate-500">
                Price drop alerts enabled
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Reviews Analyzed
              </span>
              <div className="text-3xl font-black text-purple-600 font-mono">
                8
              </div>
              <p className="text-[11px] text-slate-500">
                Text, voice & image OCR
              </p>
            </div>
          </div>

          {/* Recent Orders Table (Panel 10 in Storyboard) */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-3 p-5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">
                Recent Orders
              </h3>
              <button
                onClick={() => setActiveTab('orders')}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-2 px-3">Product</th>
                    <th className="py-2 px-3">Amount</th>
                    <th className="py-2 px-3">Status</th>
                    <th className="py-2 px-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={ord.productImage}
                            alt={ord.productTitle}
                            className="w-10 h-10 rounded-lg object-contain bg-slate-50 border border-slate-200 p-1"
                          />
                          <div>
                            <div className="font-bold text-slate-900">{ord.productTitle}</div>
                            <div className="text-[10px] text-slate-500">Via {ord.platform}</div>
                          </div>
                        </div>
                      </td>

                      <td className="py-3 px-3 font-mono font-bold text-slate-900">
                        ₹{ord.price.toLocaleString('en-IN')}
                      </td>

                      <td className="py-3 px-3">
                        {ord.status === 'Delivered' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Delivered</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                            <Clock className="w-3 h-3" />
                            <span>Processing</span>
                          </span>
                        )}
                      </td>

                      <td className="py-3 px-3 text-slate-500 font-mono text-[11px]">
                        {ord.orderDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

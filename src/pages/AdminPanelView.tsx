import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  MessageSquare,
  FolderTree,
  BarChart3,
  Settings,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { Product, StoryboardPage } from '../types';

interface AdminPanelViewProps {
  products: Product[];
  onNavigate: (page: StoryboardPage) => void;
  onAddProduct?: (product: Product) => void;
  onDeleteProduct?: (id: string) => void;
}

export const AdminPanelView: React.FC<AdminPanelViewProps> = ({
  products,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [productList, setProductList] = useState(products.slice(0, 4));
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const handleDelete = (id: string, title: string) => {
    setProductList((prev) => prev.filter((p) => p.id !== id));
    setFeedbackMsg(`Removed ${title} from catalog.`);
    setTimeout(() => setFeedbackMsg(null), 2500);
  };

  const handleEdit = (title: string) => {
    setFeedbackMsg(`Editing product "${title}".`);
    setTimeout(() => setFeedbackMsg(null), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Admin Title Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex items-center justify-between shadow-md">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-mono font-bold mb-2">
            PANEL 11 · ADMIN CONSOLE
          </div>
          <h1 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
            ReviewAI Admin Panel
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage product catalog, ingestion pipelines, user reviews, and sentiment algorithms.
          </p>
        </div>

        <button
          onClick={() => onNavigate('home')}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
        >
          View Storefront
        </button>
      </div>

      {/* Main Admin Grid (Panel 11 in Storyboard) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Admin Navigation Sidebar */}
        <aside className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-3 shadow-2xs space-y-1">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'products', label: 'Products', icon: Package },
            { id: 'orders', label: 'Orders', icon: ShoppingCart },
            { id: 'users', label: 'Users', icon: Users },
            { id: 'reviews', label: 'Reviews', icon: MessageSquare },
            { id: 'categories', label: 'Categories', icon: FolderTree },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
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

          <div className="pt-3 mt-3 border-t border-slate-100">
            <button
              onClick={() => onNavigate('home')}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Exit Admin</span>
            </button>
          </div>
        </aside>

        {/* Right Main Admin Area (Panel 11) */}
        <main className="lg:col-span-9 space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h2 className="text-xl font-black text-slate-900 font-heading">
              Admin Dashboard
            </h2>
            <span className="text-xs text-slate-500 font-mono">
              Live Production Database
            </span>
          </div>

          {feedbackMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
              ✓ {feedbackMsg}
            </div>
          )}

          {/* 4 Metric Stats (Panel 11: Total Products, Total Users, Total Orders, Total Reviews) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Total Products
              </span>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                1,240
              </div>
              <span className="text-[10px] text-emerald-600 font-bold">+14 this week</span>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Total Users
              </span>
              <div className="text-2xl sm:text-3xl font-black text-indigo-600 font-mono">
                842
              </div>
              <span className="text-[10px] text-indigo-600 font-bold">+28 active today</span>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Total Orders
              </span>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                356
              </div>
              <span className="text-[10px] text-emerald-600 font-bold">₹2.4M Volume</span>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Total Reviews
              </span>
              <div className="text-2xl sm:text-3xl font-black text-purple-600 font-mono">
                2,845
              </div>
              <span className="text-[10px] text-purple-600 font-bold">96% Accuracy</span>
            </div>
          </div>

          {/* Recent Products Table (Panel 11 in Storyboard) */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">
                Recent Products
              </h3>
              <button
                type="button"
                onClick={() => setFeedbackMsg('Add Product Modal: Ready to ingest new marketplace SKU.')}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-2xs cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Product</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {productList.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                      {/* Product */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-10 h-10 rounded-lg object-contain bg-slate-50 border border-slate-200 p-1 shrink-0"
                          />
                          <div>
                            <div className="font-bold text-slate-900">{p.title}</div>
                            <div className="text-[10px] text-slate-500">{p.brand} • {p.category}</div>
                          </div>
                        </div>
                      </td>

                      {/* Price */}
                      <td className="py-3 px-4 font-mono font-bold text-slate-900">
                        ₹{p.price.toLocaleString('en-IN')}
                      </td>

                      {/* Status: Active */}
                      <td className="py-3 px-4">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          Active
                        </span>
                      </td>

                      {/* Action: Edit & Delete */}
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleEdit(p.title)}
                            className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] cursor-pointer"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(p.id, p.title)}
                            className="px-2.5 py-1 rounded bg-rose-50 hover:bg-rose-100 text-rose-600 font-semibold text-[11px] cursor-pointer"
                          >
                            Delete
                          </button>
                        </div>
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

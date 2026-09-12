import React, { useState } from 'react';
import { ProductOrder } from './types';
import { PlatformPill } from '../../components/PlatformPill';
import {
  X,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  ExternalLink,
  Star,
  ChevronRight,
  ShoppingBag,
  RotateCcw,
  MapPin,
  Calendar,
  AlertCircle,
} from 'lucide-react';

interface MyOrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: ProductOrder[];
  onOpenReviewModal?: (productId: string) => void;
  onBuyAgain?: (order: ProductOrder) => void;
}

export const MyOrdersModal: React.FC<MyOrdersModalProps> = ({
  isOpen,
  onClose,
  orders,
  onOpenReviewModal,
  onBuyAgain,
}) => {
  if (!isOpen) return null;

  const [filter, setFilter] = useState<'all' | 'active' | 'delivered'>('all');

  const filteredOrders = orders.filter((o) => {
    if (filter === 'active') return o.status !== 'Delivered';
    if (filter === 'delivered') return o.status === 'Delivered';
    return true;
  });

  return (
    <div
      id="my-orders-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full overflow-hidden my-4 relative">
        {/* Top Bar */}
        <div className="bg-slate-900 text-white px-5 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
              <Package className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold flex items-center gap-2">
                <span>My Product Orders & Delivery Tracking</span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  {orders.length} Order{orders.length === 1 ? '' : 's'}
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                Track live shipments, view receipts, and review verified purchases
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters */}
        <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Filter:</span>
          {(['all', 'active', 'delivered'] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                filter === f
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {f === 'all' ? `All (${orders.length})` : f}
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="p-4 sm:p-6 max-h-[68vh] overflow-y-auto space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="text-xs text-slate-500">No orders found in this view.</p>
            </div>
          ) : (
            filteredOrders.map((order) => {
              const isDelivered = order.status === 'Delivered';

              return (
                <div
                  key={order.orderId}
                  className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all bg-white shadow-2xs space-y-3"
                >
                  {/* Order header row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-100 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-slate-900">
                        {order.orderId}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {order.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <PlatformPill platform={order.platform} size="sm" />
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          isDelivered
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-indigo-100 text-indigo-800'
                        }`}
                      >
                        {isDelivered ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {order.status}
                      </span>
                    </div>
                  </div>

                  {/* Product Details row */}
                  <div className="flex items-start gap-3">
                    <img
                      src={order.productImage}
                      alt={order.productTitle}
                      className="w-16 h-16 object-cover rounded-lg border border-slate-200 shrink-0"
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <span className="text-[10px] font-bold text-indigo-700 uppercase">
                        {order.brand}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                        {order.productTitle}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {order.variant} • Qty: {order.quantity}
                      </p>

                      <div className="flex items-center gap-3 pt-0.5">
                        <span className="text-xs font-bold font-mono text-emerald-700">
                          ₹{order.totalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          via {order.paymentMethod.toUpperCase()} ({order.paymentStatus})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Shipping info strip */}
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Truck className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-medium text-[11px]">
                        {isDelivered ? 'Delivered' : 'ETA'}: {order.estimatedDelivery}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono text-slate-500">
                      AWB: {order.trackingNumber}
                    </div>
                  </div>

                  {/* Order Actions */}
                  <div className="flex items-center justify-end gap-2 pt-1">
                    {onOpenReviewModal && (
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onOpenReviewModal(order.productId);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer border border-emerald-200"
                      >
                        <Star className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                        <span>Write a Review</span>
                      </button>
                    )}

                    {onBuyAgain && (
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onBuyAgain(order);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Buy Again</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

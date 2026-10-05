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
  ShoppingBag,
  RotateCcw,
  MapPin,
  Calendar,
  Zap,
  Mail,
  Copy,
  Check,
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
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredOrders = orders.filter((o) => {
    if (filter === 'active') return o.status !== 'Delivered';
    if (filter === 'delivered') return o.status === 'Delivered';
    return true;
  });

  const handleCopyTracking = (orderId: string, trackingNumber?: string) => {
    const textToCopy = trackingNumber || orderId;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(orderId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      id="my-orders-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#10131A] text-white rounded-3xl border border-white/10 shadow-2xl max-w-2xl w-full overflow-hidden my-4 relative">
        {/* Flash.co Shopping Inbox Top Header */}
        <div className="bg-gradient-to-r from-[#151922] via-[#181D29] to-[#151922] px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E2F952] text-black flex items-center justify-center font-black shadow-[0_0_15px_rgba(226,249,82,0.35)] shrink-0">
              <Zap className="w-5 h-5 fill-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black font-heading text-white">
                  Flash Shopping Inbox
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E2F952]/10 border border-[#E2F952]/30 text-[#E2F952] font-bold">
                  24bit015@flash.co
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Spam-free unified tracking across Amazon, Myntra, Nykaa & Meesho
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close orders modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters & Inbox Status */}
        <div className="px-6 py-3 bg-black/40 border-b border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {(['all', 'active', 'delivered'] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
                  filter === f
                    ? 'bg-[#E2F952] text-black font-bold shadow-xs'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {f === 'all' ? `All (${orders.length})` : f}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Sync Active</span>
          </div>
        </div>

        {/* Orders List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 mx-auto flex items-center justify-center text-slate-500">
                <Package className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">No Shipments Found</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Orders placed through Flash or synced from your e-commerce accounts will automatically appear here with real-time tracking.
              </p>
            </div>
          ) : (
            filteredOrders.map((order) => {
              const isDelivered = order.status === 'Delivered';
              return (
                <div
                  key={order.orderId}
                  className="p-5 rounded-2xl bg-[#141721] border border-white/10 hover:border-white/20 transition-all space-y-4"
                >
                  {/* Top line: Marketplace + Order ID + Flash Coins */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <PlatformPill platform={order.platform} size="sm" />
                      <span className="text-xs font-mono text-slate-400">
                        #{order.orderId}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-[#E2F952]/10 border border-[#E2F952]/30 text-[#E2F952] text-[10px] font-bold font-mono flex items-center gap-1">
                        <Zap className="w-2.5 h-2.5 fill-[#E2F952]" /> +75 Flash Coins
                      </span>

                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1 ${
                          isDelivered
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        {isDelivered ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <Truck className="w-3 h-3" />
                        )}
                        <span>{order.status}</span>
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex items-center gap-3.5">
                    {order.productImage ? (
                      <img
                        src={order.productImage}
                        alt={order.productTitle}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-xl object-cover bg-black/40 border border-white/10 shrink-0"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-slate-500 shrink-0">
                        <Package className="w-6 h-6" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">
                        {order.productTitle}
                      </h4>
                      <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                        <span className="font-mono text-white font-bold">
                          ₹{order.totalPrice.toLocaleString('en-IN')}
                        </span>
                        <span>·</span>
                        <span>Qty: {order.quantity || 1}</span>
                        {order.estimatedDelivery && (
                          <>
                            <span>·</span>
                            <span className="text-[#E2F952]">ETA: {order.estimatedDelivery}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Flash Delivery Steps Timeline */}
                  <div className="pt-2 border-t border-white/[0.06]">
                    <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                      {[
                        { label: 'Confirmed', done: true },
                        { label: 'Shipped', done: true },
                        {
                          label: 'Out for Delivery',
                          done: order.status === 'Out for Delivery' || isDelivered,
                        },
                        { label: 'Delivered', done: isDelivered },
                      ].map((step) => (
                        <div key={step.label} className="space-y-1">
                          <div
                            className={`h-1.5 rounded-full ${
                              step.done ? 'bg-[#E2F952]' : 'bg-white/10'
                            }`}
                          />
                          <span
                            className={
                              step.done ? 'text-white font-semibold' : 'text-slate-500'
                            }
                          >
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/[0.06]">
                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <span>Tracking:</span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyTracking(order.orderId, order.trackingNumber)
                        }
                        className="font-mono text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                        title="Copy tracking code"
                      >
                        <span>
                          {order.trackingNumber || `FL-${order.orderId.slice(0, 8)}`}
                        </span>
                        {copiedId === order.orderId ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-slate-500" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      {onBuyAgain && (
                        <button
                          type="button"
                          onClick={() => onBuyAgain(order)}
                          className="px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-white transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Buy Again</span>
                        </button>
                      )}

                      {onOpenReviewModal && (
                        <button
                          type="button"
                          onClick={() => onOpenReviewModal(order.productId)}
                          className="px-3.5 py-1.5 rounded-xl bg-[#E2F952] hover:bg-[#d6f03d] text-xs font-bold text-black transition-all cursor-pointer flex items-center gap-1 shadow-xs"
                        >
                          <Zap className="w-3 h-3 fill-black" />
                          <span>Write Review (+50 ⚡)</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-black/50 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E2F952]" />
            <span>Flash Smart Inbox protects your purchase privacy.</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-white hover:underline cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ShoppingBag,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { CartItem, StoryboardPage } from '../types';

interface CartPageViewProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onNavigate: (page: StoryboardPage) => void;
  onClearCart: () => void;
}

export const CartPageView: React.FC<CartPageViewProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onNavigate,
  onClearCart,
}) => {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setCheckoutModalOpen(true);
  };

  const handleConfirmOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutModalOpen(false);
      setOrderPlaced(false);
      onNavigate('profile');
    }, 1800);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Title (Panel 8 from Storyboard) */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Your Cart{' '}
            <span className="text-sm font-normal text-slate-500">
              ({items.length} {items.length === 1 ? 'item' : 'items'})
            </span>
          </h1>
        </div>

        <button
          onClick={() => onNavigate('products')}
          className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Continue Shopping</span>
        </button>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-sm">
          <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">Your cart is currently empty</h3>
          <p className="text-xs text-slate-500">
            Browse our top-rated trending products to start shopping with AI review insights.
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors shadow-xs cursor-pointer"
          >
            Explore Products
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Cart Table (Panel 8) */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="py-3.5 px-6">Product</th>
                    <th className="py-3.5 px-6">Price</th>
                    <th className="py-3.5 px-6">Quantity</th>
                    <th className="py-3.5 px-6">Total</th>
                    <th className="py-3.5 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {items.map((item) => {
                    const lineTotal = item.product.price * item.quantity;
                    return (
                      <tr key={item.product.id} className="hover:bg-slate-50/70 transition-colors">
                        {/* Product Info */}
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.product.image}
                              alt={item.product.title}
                              className="w-12 h-12 rounded-xl object-contain bg-slate-50 border border-slate-200 p-1 shrink-0"
                            />
                            <div>
                              <div className="font-bold text-slate-900 line-clamp-1">
                                {item.product.title}
                              </div>
                              <div className="text-[11px] text-slate-500">
                                {item.product.brand} • {item.product.category}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Price */}
                        <td className="py-4 px-6 font-mono font-bold text-slate-900">
                          ₹{item.product.price.toLocaleString('en-IN')}
                        </td>

                        {/* Quantity Counter (- 1 +) */}
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2 border border-slate-300 rounded-lg p-1 w-fit bg-slate-50">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                              className="p-1 text-slate-600 hover:text-slate-900 rounded hover:bg-slate-200 cursor-pointer"
                              title="Decrease"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center font-bold font-mono text-slate-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                              className="p-1 text-slate-600 hover:text-slate-900 rounded hover:bg-slate-200 cursor-pointer"
                              title="Increase"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </td>

                        {/* Line Total */}
                        <td className="py-4 px-6 font-mono font-black text-slate-900">
                          ₹{lineTotal.toLocaleString('en-IN')}
                        </td>

                        {/* Action (Delete/Remove) */}
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                            title="Remove from cart"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cart Footer Summary Card (Panel 8) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => onNavigate('products')}
              className="text-xs font-bold text-slate-700 hover:text-indigo-600 flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </button>

            {/* Price Calculations */}
            <div className="space-y-3 w-full sm:w-80">
              <div className="space-y-1.5 text-xs text-slate-600 border-b border-slate-100 pb-3">
                <div className="flex items-center justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono font-bold text-slate-900">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping:</span>
                  <span className="font-mono font-bold text-emerald-600">Free</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-base font-black text-slate-900">
                <span>Total:</span>
                <span className="font-mono text-indigo-600">
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-600/25 cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
                <span>Secure Checkout</span>
              </h3>
              <button
                onClick={() => setCheckoutModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 text-xs font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {orderPlaced ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-base font-bold text-slate-900">Order Confirmed!</h4>
                <p className="text-xs text-slate-500">
                  Your order for ₹{total.toLocaleString('en-IN')} was placed successfully. Redirecting to your profile orders...
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Items Total ({items.length} items):</span>
                    <span className="font-mono font-bold text-slate-900">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Address:</span>
                    <span className="font-semibold text-slate-900">Selvarani K, 24 St. Thomas Colony, Chennai</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Mode:</span>
                    <span className="font-semibold text-indigo-600">UPI / Cash on Delivery</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setCheckoutModalOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleConfirmOrder}
                    className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/30 cursor-pointer"
                  >
                    Confirm & Pay
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

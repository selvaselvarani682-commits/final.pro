import React, { useState, useEffect } from 'react';
import { Product, PlatformType } from '../../types';
import { ProductOrder, ProductPaymentMethod, MarketplaceOffer } from './types';
import { getMarketplaceOffers } from './marketplaceOffers';
import { PlatformPill } from '../../components/PlatformPill';
import {
  X,
  ShoppingBag,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Tag,
  Star,
  ArrowRight,
  CreditCard,
  QrCode,
  Building2,
  Banknote,
  Package,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  User,
  Check,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';

interface BuyProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  initialPlatform?: PlatformType;
  onOrderPlaced: (order: ProductOrder) => void;
  onOpenReviewModal?: (productId: string) => void;
  onViewOrders?: () => void;
}

export const BuyProductModal: React.FC<BuyProductModalProps> = ({
  isOpen,
  onClose,
  product,
  initialPlatform,
  onOrderPlaced,
  onOpenReviewModal,
  onViewOrders,
}) => {
  if (!isOpen || !product) return null;

  const offers = getMarketplaceOffers(product);

  // Selected marketplace offer
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType>(() => {
    if (initialPlatform && offers.some((o) => o.platform === initialPlatform)) {
      return initialPlatform;
    }
    return offers[0]?.platform || 'Amazon';
  });

  const activeOffer = offers.find((o) => o.platform === selectedPlatform) || offers[0];

  // Product variant state
  const isAudioOrElectronics = product.category === 'Audio' || product.category === 'Electronics';
  const isClothing = product.category === 'Fashion' || product.category === 'Footwear';

  const defaultVariants = isClothing
    ? ['Size M (Regular Fit)', 'Size L (Slim Fit)', 'Size XL (Comfort Fit)']
    : isAudioOrElectronics
    ? ['Midnight Black (Standard)', 'Silver Platinum (Noise-Cancelling)', 'Matte Navy Blue']
    : ['Standard Pack (Verified Stock)', 'Twin Value Pack (Save 15%)'];

  const [selectedVariant, setSelectedVariant] = useState<string>(defaultVariants[0]);
  const [quantity, setQuantity] = useState<number>(1);

  // Address and contact state
  const [customerName, setCustomerName] = useState<string>('Aarav Sharma');
  const [customerPhone, setCustomerPhone] = useState<string>('+91 98765 43210');
  const [streetAddress, setStreetAddress] = useState<string>('Flat 402, Green Glen Layout, Bellandur');
  const [city, setCity] = useState<string>('Bengaluru, Karnataka');
  const [pincode, setPincode] = useState<string>('560103');
  const [pincodeVerified, setPincodeVerified] = useState<boolean>(true);

  // Coupon state
  const [couponInput, setCouponInput] = useState<string>('DEAL200');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>('DEAL200');
  const [couponError, setCouponError] = useState<string | null>(null);

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState<ProductPaymentMethod>('cod');

  // Checkout flow states
  const [checkoutStep, setCheckoutStep] = useState<'details' | 'processing' | 'confirmed'>('details');
  const [confirmedOrder, setConfirmedOrder] = useState<ProductOrder | null>(null);

  // Calculations
  const unitPrice = activeOffer ? activeOffer.price : product.price;
  const originalPrice = activeOffer ? activeOffer.originalPrice : product.originalPrice;
  const rawSubtotal = unitPrice * quantity;

  let couponDiscount = 0;
  if (appliedCoupon === 'DEAL200') {
    couponDiscount = Math.min(200, rawSubtotal * 0.2);
  } else if (appliedCoupon === 'SAVE500') {
    couponDiscount = Math.min(500, rawSubtotal * 0.25);
  } else if (appliedCoupon === 'BUYNOW10') {
    couponDiscount = Math.round(rawSubtotal * 0.1);
  }

  const shippingFee = 0; // Free delivery
  const finalPayable = Math.max(0, rawSubtotal - couponDiscount + shippingFee);

  const handleApplyCoupon = () => {
    setCouponError(null);
    const clean = couponInput.trim().toUpperCase();
    if (!clean) {
      setAppliedCoupon(null);
      return;
    }
    if (['DEAL200', 'SAVE500', 'BUYNOW10'].includes(clean)) {
      setAppliedCoupon(clean);
    } else {
      setCouponError('Invalid coupon. Try "DEAL200", "SAVE500", or "BUYNOW10"');
    }
  };

  const handlePrefillSample = () => {
    setCustomerName('Priya Nair');
    setCustomerPhone('+91 98112 34567');
    setStreetAddress('42 Palm Avenue, Indiranagar 100ft Rd');
    setCity('Bengaluru, Karnataka');
    setPincode('560038');
    setPincodeVerified(true);
  };

  const handlePlaceOrder = () => {
    setCheckoutStep('processing');

    setTimeout(() => {
      const orderId = `ORD-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      const trackingNo = `${selectedPlatform.substring(0, 3).toUpperCase()}-TRK-${Math.floor(100000 + Math.random() * 900000)}`;
      
      const newOrder: ProductOrder = {
        orderId,
        date: new Date().toISOString().split('T')[0],
        productId: product.id,
        productTitle: product.title,
        productImage: product.image,
        brand: product.brand,
        category: product.category,
        platform: selectedPlatform,
        variant: selectedVariant,
        quantity,
        unitPrice,
        originalPrice,
        discount: couponDiscount,
        shippingFee,
        totalPrice: finalPayable,
        status: 'Confirmed',
        paymentMethod,
        paymentStatus: paymentMethod === 'cod' ? 'Pay on Delivery' : 'Paid',
        customerName,
        customerPhone,
        shippingAddress: streetAddress,
        city,
        pincode,
        estimatedDelivery: 'Estimated by Tomorrow, 3:00 PM - 7:00 PM',
        trackingNumber: trackingNo,
        deliveryPartner: `${selectedPlatform} Express Logistics`,
      };

      setConfirmedOrder(newOrder);
      setCheckoutStep('confirmed');
      onOrderPlaced(newOrder);
    }, 1200);
  };

  return (
    <div
      id="buy-product-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget && checkoutStep !== 'processing') onClose();
      }}
    >
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full overflow-hidden my-4 relative">
        {/* Top Header */}
        <div className="bg-slate-900 text-white px-5 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold flex items-center gap-2">
                <span>Secure Product Checkout & Order Placement</span>
                <span className="text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  Verified Seller Stock
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                Cross-Marketplace Price Match & Authenticity Guarantee
              </p>
            </div>
          </div>

          {checkoutStep !== 'processing' && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Modal Body */}
        {checkoutStep === 'confirmed' && confirmedOrder ? (
          /* ================================================================= */
          /* ORDER CONFIRMED VIEW                                              */
          /* ================================================================= */
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                Order Placed Successfully!
              </span>
              <h2 className="text-2xl font-black text-slate-900">
                Your order is confirmed & preparing for dispatch
              </h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you for your purchase. We have dispatched an SMS & tracking link to{' '}
                <span className="font-semibold text-slate-800">{customerPhone}</span>.
              </p>
            </div>

            {/* Order Confirmation Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 max-w-lg mx-auto text-left space-y-3.5">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <img
                  src={confirmedOrder.productImage}
                  alt={confirmedOrder.productTitle}
                  className="w-14 h-14 object-cover rounded-lg border border-slate-200"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-indigo-600 uppercase">
                    {confirmedOrder.brand} • Sold via {confirmedOrder.platform}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                    {confirmedOrder.productTitle}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Variant: {confirmedOrder.variant} • Qty: {confirmedOrder.quantity}
                  </p>
                </div>
              </div>

              {/* Order Info Grid */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Order ID</span>
                  <span className="font-mono font-bold text-slate-900">{confirmedOrder.orderId}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Total Payable</span>
                  <span className="font-bold text-emerald-700 font-mono text-sm">
                    ₹{confirmedOrder.totalPrice.toLocaleString('en-IN')}
                    <span className="text-[10px] text-slate-500 font-normal ml-1">
                      ({confirmedOrder.paymentStatus})
                    </span>
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Delivery Estimate</span>
                  <span className="font-semibold text-slate-800 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                    Tomorrow, by 7 PM
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">Carrier & Tracking</span>
                  <span className="font-mono text-slate-700 text-[11px]">{confirmedOrder.trackingNumber}</span>
                </div>
              </div>

              {/* Live Tracking Progress Bar */}
              <div className="pt-2 border-t border-slate-200">
                <span className="text-[11px] font-bold text-slate-800 block mb-2">Live Fulfillment Status:</span>
                <div className="grid grid-cols-4 gap-1 text-[10px] text-center font-medium">
                  <div className="p-1.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                    ✓ Confirmed
                  </div>
                  <div className="p-1.5 rounded bg-indigo-100 text-indigo-800 font-bold animate-pulse">
                    ⚡ Packing
                  </div>
                  <div className="p-1.5 rounded bg-slate-100 text-slate-500">
                    Shipped
                  </div>
                  <div className="p-1.5 rounded bg-slate-100 text-slate-500">
                    Delivered
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {onViewOrders && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onViewOrders();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Package className="w-4 h-4" />
                  <span>View in My Orders</span>
                </button>
              )}

              {onOpenReviewModal && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenReviewModal(product.id);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                  <span>Write a Customer Review</span>
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        ) : checkoutStep === 'processing' ? (
          /* ================================================================= */
          /* PROCESSING SPINNER VIEW                                           */
          /* ================================================================= */
          <div className="p-12 text-center space-y-4">
            <div className="w-14 h-14 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">
                Locking In Best Marketplace Deal & Booking Delivery...
              </h3>
              <p className="text-xs text-slate-500">
                Confirming real-time inventory on {selectedPlatform} and generating logistics dispatch order.
              </p>
            </div>
          </div>
        ) : (
          /* ================================================================= */
          /* MAIN PRODUCT BUYING FORM & PLATFORM PICKER                        */
          /* ================================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[82vh] overflow-y-auto">
            {/* LEFT COLUMN: Product, Marketplace selection & Shipping Form (7 cols) */}
            <div className="lg:col-span-7 p-5 sm:p-6 space-y-5 border-b lg:border-b-0 lg:border-r border-slate-200">
              {/* Product Mini Header Card */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-lg border border-slate-200 bg-white shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 font-mono">
                      {product.brand}
                    </span>
                    <span className="text-[11px] font-bold text-amber-700 flex items-center gap-0.5">
                      ★ {product.rating} <span className="text-slate-400 font-normal">({product.reviewCount} reviews)</span>
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 mt-1 leading-snug">
                    {product.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-base font-bold text-slate-950 font-mono">
                      ₹{unitPrice.toLocaleString('en-IN')}
                    </span>
                    {originalPrice > unitPrice && (
                      <span className="text-xs text-slate-400 line-through font-mono">
                        ₹{originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                      {activeOffer?.discountPercent || 20}% OFF
                    </span>
                  </div>
                </div>
              </div>

              {/* 1. Choose Marketplace Deal */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Select Seller Marketplace:</span>
                  </label>
                  <span className="text-[10px] text-slate-500">Live Price Comparison</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {offers.map((offer) => {
                    const isSelected = selectedPlatform === offer.platform;
                    return (
                      <button
                        key={offer.platform}
                        type="button"
                        onClick={() => setSelectedPlatform(offer.platform)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-emerald-50/60 border-emerald-600 ring-2 ring-emerald-500/20 shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <PlatformPill platform={offer.platform} size="sm" />
                          <span className="text-xs font-bold font-mono text-slate-950">
                            ₹{offer.price.toLocaleString('en-IN')}
                          </span>
                        </div>

                        <div className="text-[11px] text-slate-600 flex items-center gap-1">
                          <Truck className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate">{offer.deliverySpeed}</span>
                        </div>

                        {offer.badge && (
                          <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100/70 px-1.5 py-0.5 rounded mt-1.5 self-start">
                            {offer.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Product Variant & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Product Variant / Edition
                  </label>
                  <select
                    value={selectedVariant}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                  >
                    {defaultVariants.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Quantity
                  </label>
                  <div className="flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden h-[38px]">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-1 text-slate-600 hover:bg-slate-100 font-bold text-sm cursor-pointer"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-xs text-slate-900 font-mono">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.min(5, q + 1))}
                      className="px-3 py-1 text-slate-600 hover:bg-slate-100 font-bold text-sm cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* 3. Delivery Address Form */}
              <div className="pt-2 border-t border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Shipping Address & Delivery Details:</span>
                  </label>
                  <button
                    type="button"
                    onClick={handlePrefillSample}
                    className="text-[11px] text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer underline"
                  >
                    Prefill Sample Address
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Receiver Full Name"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Contact Mobile Number"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="House / Flat No., Street, Landmark"
                  className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City, State"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="relative">
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="PIN Code (e.g. 560103)"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                    />
                    {pincodeVerified && (
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                        <Check className="w-3 h-3" />
                        Deliverable
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* 4. Payment Method Options */}
              <div className="pt-2 border-t border-slate-200 space-y-2">
                <label className="text-xs font-bold text-slate-800 block">
                  Select Payment Option:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'cod', label: 'Cash on Delivery', sub: 'Zero Risk', icon: Banknote },
                    { id: 'upi', label: 'UPI / QR', sub: 'GPay/PhonePe', icon: QrCode },
                    { id: 'card', label: 'Card', sub: 'Visa/Mastercard', icon: CreditCard },
                    { id: 'netbanking', label: 'NetBanking', sub: 'All Banks', icon: Building2 },
                  ].map((p) => {
                    const Icon = p.icon;
                    const isActive = paymentMethod === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPaymentMethod(p.id as ProductPaymentMethod)}
                        className={`p-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                          isActive
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold ring-1 ring-emerald-500'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                        <span className="text-[11px] leading-tight block">{p.label}</span>
                        <span className="text-[9px] text-slate-400 block">{p.sub}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Order Summary, Coupon & Buy Button (5 cols) */}
            <div className="lg:col-span-5 bg-slate-50 p-5 sm:p-6 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Price Breakdown & Guarantees
                </h4>

                {/* Seller & Warranty Assurance */}
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-2">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500">Authorized Seller:</span>
                    <span className="font-semibold text-slate-900">{activeOffer?.sellerName}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500">Return Policy:</span>
                    <span className="font-semibold text-emerald-700">{activeOffer?.returnPolicy}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500">Warranty:</span>
                    <span className="font-semibold text-slate-900">{activeOffer?.warranty}</span>
                  </div>
                </div>

                {/* Promotional Coupon */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                    <Tag className="w-3 h-3 text-indigo-600" />
                    <span>Apply Marketplace Coupon</span>
                  </label>
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="e.g. DEAL200"
                      className="flex-1 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-mono uppercase text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCoupon}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>

                  {appliedCoupon && (
                    <div className="flex items-center justify-between text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                      <span className="font-semibold flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Code '{appliedCoupon}' Applied (₹{couponDiscount} Off)
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setAppliedCoupon(null);
                          setCouponInput('');
                        }}
                        className="text-slate-400 hover:text-slate-600 text-xs cursor-pointer font-bold"
                      >
                        ×
                      </button>
                    </div>
                  )}

                  {couponError && (
                    <p className="text-[11px] text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {couponError}
                    </p>
                  )}
                </div>

                {/* Price Breakdown Table */}
                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Price ({quantity} item{quantity > 1 ? 's' : ''}):</span>
                    <span className="font-mono">₹{rawSubtotal.toLocaleString('en-IN')}</span>
                  </div>

                  {couponDiscount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Marketplace Coupon Discount:</span>
                      <span className="font-mono">-₹{couponDiscount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-600">
                    <span>Express Delivery:</span>
                    <span className="text-emerald-700 font-bold uppercase text-[10px]">
                      FREE
                    </span>
                  </div>

                  <div className="flex justify-between border-t border-slate-200 pt-2 text-sm font-black text-slate-900">
                    <span>Total Amount:</span>
                    <span className="text-emerald-700 font-mono text-base">
                      ₹{finalPayable.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Place Order CTA Button */}
              <div className="space-y-3 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  id="place-order-button"
                  onClick={handlePlaceOrder}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer hover:shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    Place Order & Pay ₹{finalPayable.toLocaleString('en-IN')}
                  </span>
                </button>

                <div className="space-y-1 text-center">
                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Verified Genuine • 7-Day Return Guarantee</span>
                  </div>
                  <p className="text-[9px] text-slate-400">
                    Fulfilled through official verified {selectedPlatform} authorized sellers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

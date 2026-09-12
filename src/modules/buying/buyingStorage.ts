import { ProductOrder } from './types';
import { ALL_PRODUCTS } from '../products/productsData';

const ORDERS_STORAGE_KEY = 'remix_customer_orders_v1';

export const INITIAL_ORDERS: ProductOrder[] = [
  {
    orderId: 'ORD-2026-89412',
    date: '2026-03-08',
    productId: 'prod-001',
    productTitle: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    brand: 'Sony',
    category: 'Audio',
    platform: 'Amazon',
    variant: 'Midnight Black • Noise Cancelling Edition',
    quantity: 1,
    unitPrice: 26990,
    originalPrice: 34990,
    discount: 500,
    shippingFee: 0,
    totalPrice: 26490,
    status: 'Delivered',
    paymentMethod: 'upi',
    paymentStatus: 'Paid',
    customerName: 'Aarav Sharma',
    customerPhone: '+91 98765 43210',
    shippingAddress: 'Flat 402, Green Glen Layout, Bellandur',
    city: 'Bengaluru, Karnataka',
    pincode: '560103',
    estimatedDelivery: 'Delivered on March 10, 2026',
    trackingNumber: 'AZ-DEL-9841029',
    deliveryPartner: 'Amazon Logistics Prime',
  },
  {
    orderId: 'ORD-2026-77319',
    date: '2026-03-10',
    productId: 'prod-004',
    productTitle: 'Dot & Key Vitamin C + E Super Bright Glow Sunscreen SPF 50',
    productImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
    brand: 'Dot & Key',
    category: 'Beauty',
    platform: 'Nykaa',
    variant: 'Pack of 2 (50g each) • SPF 50 PA+++',
    quantity: 1,
    unitPrice: 595,
    originalPrice: 890,
    discount: 50,
    shippingFee: 0,
    totalPrice: 545,
    status: 'Out for Delivery',
    paymentMethod: 'cod',
    paymentStatus: 'Pay on Delivery',
    customerName: 'Aarav Sharma',
    customerPhone: '+91 98765 43210',
    shippingAddress: 'Flat 402, Green Glen Layout, Bellandur',
    city: 'Bengaluru, Karnataka',
    pincode: '560103',
    estimatedDelivery: 'Today by 6:00 PM',
    trackingNumber: 'NYK-EXP-440192',
    deliveryPartner: 'BlueDart Express',
  },
];

export const getStoredOrders = (): ProductOrder[] => {
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to load orders from localStorage', e);
  }
  return INITIAL_ORDERS;
};

export const saveStoredOrder = (newOrder: ProductOrder): ProductOrder[] => {
  try {
    const current = getStoredOrders();
    const updated = [newOrder, ...current];
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to save order to localStorage', e);
    return [newOrder];
  }
};

import { PlatformType, Product } from '../../types';

export type OrderStatus = 'Confirmed' | 'Shipped' | 'Out for Delivery' | 'Delivered';

export type ProductPaymentMethod = 'cod' | 'upi' | 'card' | 'netbanking';

export interface ProductOrder {
  orderId: string;
  date: string;
  productId: string;
  productTitle: string;
  productImage: string;
  brand: string;
  category: string;
  platform: PlatformType;
  variant: string;
  quantity: number;
  unitPrice: number;
  originalPrice: number;
  discount: number;
  shippingFee: number;
  totalPrice: number;
  status: OrderStatus;
  paymentMethod: ProductPaymentMethod;
  paymentStatus: 'Paid' | 'Pay on Delivery';
  customerName: string;
  customerPhone: string;
  shippingAddress: string;
  city: string;
  pincode: string;
  estimatedDelivery: string;
  trackingNumber: string;
  deliveryPartner: string;
}

export interface MarketplaceOffer {
  platform: PlatformType;
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  deliverySpeed: string;
  sellerName: string;
  sellerRating: number;
  inStock: boolean;
  stockCount: number;
  badge?: string;
  returnPolicy: string;
  warranty: string;
}

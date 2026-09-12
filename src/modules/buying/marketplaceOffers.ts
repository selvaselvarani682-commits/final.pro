import { Product, PlatformType } from '../../types';
import { MarketplaceOffer } from './types';

export const getMarketplaceOffers = (product: Product): MarketplaceOffer[] => {
  const platforms: PlatformType[] = ['Amazon', 'Myntra', 'Nykaa', 'Meesho', 'Snapdeal'];
  const offers: MarketplaceOffer[] = [];

  const basePrice = product.price;
  const originalPrice = product.originalPrice || Math.round(basePrice * 1.25);

  // Sellers and policies
  const sellerPresets: Record<
    PlatformType,
    {
      sellerName: string;
      sellerRating: number;
      speed: string;
      policy: string;
      warranty: string;
      badge?: string;
    }
  > = {
    Amazon: {
      sellerName: 'Appario Retail / Amazon Direct',
      sellerRating: 4.8,
      speed: '⚡ 1-Day Prime Delivery',
      policy: '7-Day Hassle-Free Replacement',
      warranty: '1 Year Brand Domestic Warranty',
      badge: 'Best Rated Seller',
    },
    Myntra: {
      sellerName: 'OmniLifestyle Brands India',
      sellerRating: 4.6,
      speed: '2-Day Express Delivery',
      policy: '14-Day Easy Return & Refund',
      warranty: '100% Genuine Brand Assurance',
      badge: 'Official Store',
    },
    Nykaa: {
      sellerName: 'Nykaa E-Retail Pvt Ltd',
      sellerRating: 4.7,
      speed: '2-3 Days Standard Delivery',
      policy: 'Authentic & Tamper-Proof Sealed',
      warranty: 'Batch-Verified Authenticity',
      badge: 'Certified Genuine',
    },
    Meesho: {
      sellerName: 'Direct Factory Wholesale Hub',
      sellerRating: 4.3,
      speed: '3-5 Days Free Road Delivery',
      policy: '7-Day Return on Defect',
      warranty: 'Standard Manufacturer Warranty',
      badge: 'Direct Manufacturer Deal',
    },
    Snapdeal: {
      sellerName: 'ValueBazaar Direct Sellers',
      sellerRating: 4.2,
      speed: '3-4 Days Express Shipping',
      policy: '7-Day Easy Exchange',
      warranty: 'Manufacturer Standard Warranty',
    },
  };

  platforms.forEach((plat) => {
    const platMetric = product.platforms[plat];
    if (platMetric) {
      const price = platMetric.price || basePrice;
      const discountPercent = Math.max(
        5,
        Math.round(((originalPrice - price) / originalPrice) * 100)
      );

      offers.push({
        platform: plat,
        price,
        originalPrice,
        discountPercent,
        rating: platMetric.rating || product.rating,
        deliverySpeed: platMetric.deliverySpeed || sellerPresets[plat].speed,
        sellerName: sellerPresets[plat].sellerName,
        sellerRating: sellerPresets[plat].sellerRating,
        inStock: true,
        stockCount: Math.floor(4 + (plat.charCodeAt(0) % 15)),
        badge:
          price < basePrice
            ? 'Lowest Price Deal'
            : sellerPresets[plat].badge,
        returnPolicy: sellerPresets[plat].policy,
        warranty: sellerPresets[plat].warranty,
      });
    }
  });

  // If no platforms defined in product, create default Amazon & Myntra offers
  if (offers.length === 0) {
    offers.push({
      platform: 'Amazon',
      price: basePrice,
      originalPrice,
      discountPercent: Math.round(((originalPrice - basePrice) / originalPrice) * 100),
      rating: product.rating,
      deliverySpeed: '⚡ 1-Day Prime Delivery',
      sellerName: 'Appario Retail / Amazon Direct',
      sellerRating: 4.8,
      inStock: true,
      stockCount: 8,
      badge: 'Best Seller',
      returnPolicy: '7-Day Replacement',
      warranty: '1 Year Brand Domestic Warranty',
    });
  }

  // Sort: lowest price first
  return offers.sort((a, b) => a.price - b.price);
};

import { Product } from '../types';

import iphone15Img from '../assets/images/product_iphone15_1790847823667.jpg';
import nikeShoesImg from '../assets/images/product_nike_shoes_1790847836073.jpg';
import samsungTvImg from '../assets/images/product_samsung_tv_1790847852509.jpg';
import nykaaLipstickImg from '../assets/images/product_nykaa_lipstick_1790847867533.jpg';
import samsungS23Img from '../assets/images/product_samsung_s23_1790847887154.jpg';
import boatAirdopesImg from '../assets/images/flash_boat_earbuds_1790846893387.jpg';
import levisJeansImg from '../assets/images/product_levis_jeans_1790847904974.jpg';
import nykaaSkincareImg from '../assets/images/flash_minimalist_serum_1790846918590.jpg';
import backpackImg from '../assets/images/product_black_backpack_1790847923860.jpg';
import airFryerImg from '../assets/images/product_air_fryer_1790849296172.jpg';
import studyTableImg from '../assets/images/product_study_table_1790847939798.jpg';

export const STORYBOARD_PRODUCTS: Product[] = [
  // 1. iPhone 15 (128GB) - Panel Featured 1
  {
    id: 'prod-iphone-15',
    title: 'iPhone 15 (128GB)',
    brand: 'Apple',
    category: 'Electronics',
    price: 69900,
    originalPrice: 79900,
    rating: 4.4,
    reviewCount: 12400,
    image: iphone15Img,
    thumbnails: [iphone15Img, samsungS23Img, boatAirdopesImg, nikeShoesImg],
    description:
      'Apple iPhone 15 comes with a powerful chip, dynamic island, amazing 48MP dual camera, and durable color-infused glass back.',
    specifications: [
      { label: 'Display', value: '6.1 inch Super Retina XDR' },
      { label: 'Processor', value: 'A16 Bionic chip' },
      { label: 'Camera', value: '48MP + 12MP Dual Rear' },
      { label: 'Battery', value: '3349 mAh with Fast Charging' },
    ],
    colors: ['#60A5FA', '#C084FC', '#FDE047', '#1E293B'],
    storageOptions: ['128GB', '256GB', '512GB'],
    platforms: {
      Amazon: {
        price: 69900,
        rating: 4.4,
        reviewCount: 12400,
        sentimentScore: 82,
        positivePercent: 82,
        negativePercent: 12,
        deliverySpeed: '1 Day Prime',
        authenticityRating: 98,
      },
      Meesho: {
        price: 71200,
        rating: 4.0,
        reviewCount: 850,
        sentimentScore: 76,
        positivePercent: 76,
        negativePercent: 18,
        deliverySpeed: '3-4 Days',
        authenticityRating: 88,
      },
      Myntra: {
        price: 69900,
        rating: 4.4,
        reviewCount: 620,
        sentimentScore: 85,
        positivePercent: 85,
        negativePercent: 9,
        deliverySpeed: '2 Days Insured',
        authenticityRating: 97,
      },
      Nykaa: {
        price: 70400,
        rating: 4.2,
        reviewCount: 410,
        sentimentScore: 78,
        positivePercent: 78,
        negativePercent: 15,
        deliverySpeed: '2 Days Express',
        authenticityRating: 95,
      },
      Snapdeal: {
        price: 70999,
        rating: 3.9,
        reviewCount: 380,
        sentimentScore: 72,
        positivePercent: 72,
        negativePercent: 20,
        deliverySpeed: '4-5 Days',
        authenticityRating: 85,
      },
    },
    aiSummary: {
      pros: ['Exceptional daylight camera detail', 'Dynamic Island functionality', 'Smooth fluid iOS performance'],
      cons: ['60Hz display refresh rate', 'Slower wired charging speeds'],
      sentimentBreakdown: { positive: 82, neutral: 6, negative: 12 },
      verdict: 'Top rated premium flagship with unrivaled camera and processor reliability.',
      aspects: [
        { aspect: 'Camera', sentiment: 'Positive', score: 91 },
        { aspect: 'Performance', sentiment: 'Positive', score: 89 },
        { aspect: 'Display', sentiment: 'Positive', score: 86 },
        { aspect: 'Battery', sentiment: 'Neutral', score: 68 },
      ],
    },
  },

  // 2. Nike Running Shoes - Panel Featured 2
  {
    id: 'prod-nike-shoes',
    title: 'Nike Running Shoes',
    brand: 'Nike',
    category: 'Fashion',
    price: 4499,
    originalPrice: 5699,
    rating: 4.5,
    reviewCount: 8600,
    image: nikeShoesImg,
    thumbnails: [nikeShoesImg],
    description:
      'Lightweight breathable athletic running sneakers engineered with responsive foam cushioning and high-traction rubber outsole.',
    specifications: [
      { label: 'Upper', value: 'Breathable Engineered Mesh' },
      { label: 'Midsole', value: 'Cushioned Phylon Foam' },
      { label: 'Outsole', value: 'Waffle-patterned Rubber' },
      { label: 'Closure', value: 'Lace-Up' },
    ],
    colors: ['#000000', '#FFFFFF', '#3B82F6'],
    platforms: {
      Amazon: {
        price: 4599,
        rating: 4.4,
        reviewCount: 4200,
        sentimentScore: 84,
        positivePercent: 84,
        negativePercent: 10,
      },
      Myntra: {
        price: 4499,
        rating: 4.5,
        reviewCount: 3800,
        sentimentScore: 88,
        positivePercent: 88,
        negativePercent: 7,
      },
      Snapdeal: {
        price: 4799,
        rating: 4.1,
        reviewCount: 600,
        sentimentScore: 76,
        positivePercent: 76,
        negativePercent: 14,
      },
    },
    aiSummary: {
      pros: ['Extremely lightweight on feet', 'Comfortable arch support for long runs', 'Sleek sporty aesthetic'],
      cons: ['Runs slightly narrow for wide feet'],
      sentimentBreakdown: { positive: 88, neutral: 6, negative: 6 },
      verdict: 'Reliable everyday running and training shoe with breathable airflow and plush rebound.',
      aspects: [
        { aspect: 'Comfort', sentiment: 'Positive', score: 94 },
        { aspect: 'Durability', sentiment: 'Positive', score: 89 },
        { aspect: 'Sizing', sentiment: 'Neutral', score: 72 },
      ],
    },
  },

  // 3. Samsung Smart TV 55" - Panel Featured 3
  {
    id: 'prod-samsung-tv',
    title: 'Samsung Smart TV 55"',
    brand: 'Samsung',
    category: 'Electronics',
    price: 42999,
    originalPrice: 50999,
    rating: 4.3,
    reviewCount: 5200,
    image: samsungTvImg,
    thumbnails: [samsungTvImg],
    description:
      '55-inch Crystal 4K Ultra HD Smart LED TV with HDR 10+, PurColor visual engine, and integrated voice assistants.',
    specifications: [
      { label: 'Resolution', value: '4K Ultra HD (3840 x 2160)' },
      { label: 'Refresh Rate', value: '60 Hertz' },
      { label: 'Sound', value: '20 Watts with Dolby Digital Plus' },
      { label: 'Connectivity', value: '3 HDMI, 1 USB, Wi-Fi, Bluetooth' },
    ],
    platforms: {
      Amazon: {
        price: 42999,
        rating: 4.3,
        reviewCount: 3400,
        sentimentScore: 83,
        positivePercent: 83,
        negativePercent: 11,
      },
      Snapdeal: {
        price: 44499,
        rating: 4.0,
        reviewCount: 1800,
        sentimentScore: 76,
        positivePercent: 76,
        negativePercent: 16,
      },
    },
    aiSummary: {
      pros: ['Crisp 4K upscaling', 'Vibrant punchy color reproduction', 'Snappy Tizen OS interface'],
      cons: ['Internal 20W speakers benefit from external soundbar'],
      sentimentBreakdown: { positive: 82, neutral: 8, negative: 10 },
      verdict: 'Exceptional 4K visual immersion at a competitive living-room friendly price point.',
      aspects: [
        { aspect: 'Picture Quality', sentiment: 'Positive', score: 93 },
        { aspect: 'Software OS', sentiment: 'Positive', score: 86 },
        { aspect: 'Audio Bass', sentiment: 'Neutral', score: 68 },
      ],
    },
  },

  // 4. Nykaa Matte Lipstick - Panel Featured 4
  {
    id: 'prod-nykaa-lipstick',
    title: 'Nykaa Matte Lipstick',
    brand: 'Nykaa',
    category: 'Beauty',
    price: 399,
    originalPrice: 489,
    rating: 4.2,
    reviewCount: 3100,
    image: nykaaLipstickImg,
    thumbnails: [nykaaLipstickImg],
    description:
      'Ultra-matte velvety lipstick offering 12-hour smudge-proof transfer-resistant wear enriched with nourishing vitamin E.',
    specifications: [
      { label: 'Finish', value: 'Ultra-Velvet Matte' },
      { label: 'Wear Time', value: 'Up to 12 Hours' },
      { label: 'Weight', value: '4.2 grams' },
    ],
    colors: ['#991B1B', '#BE185D', '#831843'],
    platforms: {
      Nykaa: {
        price: 399,
        rating: 4.4,
        reviewCount: 2200,
        sentimentScore: 89,
        positivePercent: 89,
        negativePercent: 6,
      },
      Amazon: {
        price: 429,
        rating: 4.1,
        reviewCount: 900,
        sentimentScore: 80,
        positivePercent: 80,
        negativePercent: 14,
      },
    },
    aiSummary: {
      pros: ['Rich one-stroke color payoff', 'Non-drying on lips', 'Transfer resistant formula'],
      cons: ['Needs oil-based remover for effortless removal'],
      sentimentBreakdown: { positive: 86, neutral: 7, negative: 7 },
      verdict: 'Bestselling transfer-proof matte lipstick with comfortable all-day pigment.',
      aspects: [
        { aspect: 'Pigment', sentiment: 'Positive', score: 95 },
        { aspect: 'Longevity', sentiment: 'Positive', score: 91 },
        { aspect: 'Comfort', sentiment: 'Positive', score: 87 },
      ],
    },
  },

  // 5. Wildcraft Backpack - Panel Featured 5
  {
    id: 'prod-backpack',
    title: 'Wildcraft Backpack',
    brand: 'Wildcraft',
    category: 'Home & Living',
    price: 1499,
    originalPrice: 1999,
    rating: 4.5,
    reviewCount: 2800,
    image: backpackImg,
    thumbnails: [backpackImg],
    description:
      'Ergonomic water-resistant daily commuter backpack with padded 15.6-inch laptop compartment and hidden anti-theft pocket.',
    specifications: [
      { label: 'Capacity', value: '30 Liters' },
      { label: 'Laptop Sleeve', value: 'Up to 15.6 inch' },
      { label: 'Material', value: 'Water-Repellent Oxford Polyester' },
    ],
    platforms: {
      Amazon: {
        price: 1499,
        rating: 4.5,
        reviewCount: 2100,
        sentimentScore: 87,
        positivePercent: 87,
        negativePercent: 8,
      },
      Meesho: {
        price: 1449,
        rating: 4.2,
        reviewCount: 700,
        sentimentScore: 78,
        positivePercent: 78,
        negativePercent: 15,
      },
    },
    aiSummary: {
      pros: ['Thick ergonomic shoulder padding', 'Heavy-duty water-repellent zippers', 'Spacious compartments'],
      cons: ['Side bottle pocket is a snug fit for 1L bottles'],
      sentimentBreakdown: { positive: 86, neutral: 7, negative: 7 },
      verdict: 'Dependable collegiate and office companion with reliable water-resistant build.',
      aspects: [
        { aspect: 'Durability', sentiment: 'Positive', score: 92 },
        { aspect: 'Space', sentiment: 'Positive', score: 90 },
        { aspect: 'Water Resistance', sentiment: 'Positive', score: 88 },
      ],
    },
  },

  // 6. Philips Air Fryer - Panel Featured 6
  {
    id: 'prod-air-fryer',
    title: 'Philips Air Fryer',
    brand: 'Philips',
    category: 'Home & Living',
    price: 8999,
    originalPrice: 9999,
    rating: 4.4,
    reviewCount: 2900,
    image: airFryerImg,
    thumbnails: [airFryerImg],
    description:
      'Digital air fryer with Rapid Air technology for delicious crispy fries with up to 90% less fat. Preset touch screen and dishwasher safe parts.',
    specifications: [
      { label: 'Capacity', value: '4.1 Liters' },
      { label: 'Power', value: '1400 Watts' },
      { label: 'Technology', value: 'Rapid Air Vortex' },
      { label: 'Controls', value: 'Digital Touch Interface' },
    ],
    platforms: {
      Amazon: {
        price: 8999,
        rating: 4.5,
        reviewCount: 2200,
        sentimentScore: 88,
        positivePercent: 88,
        negativePercent: 7,
      },
      Snapdeal: {
        price: 9299,
        rating: 4.2,
        reviewCount: 700,
        sentimentScore: 80,
        positivePercent: 80,
        negativePercent: 14,
      },
    },
    aiSummary: {
      pros: ['Crispy textures with 90% less oil', 'Simple touch presets for fries and chicken', 'Easy to clean non-stick basket'],
      cons: ['Cord length is slightly short (0.8m)'],
      sentimentBreakdown: { positive: 87, neutral: 6, negative: 7 },
      verdict: 'Market-leading air fryer delivering golden crispy cooking with effortless maintenance.',
      aspects: [
        { aspect: 'Crispiness', sentiment: 'Positive', score: 94 },
        { aspect: 'Ease of Cleaning', sentiment: 'Positive', score: 90 },
        { aspect: 'Build Quality', sentiment: 'Positive', score: 89 },
      ],
    },
  },

  // Additional Catalog Products
  {
    id: 'prod-samsung-s23',
    title: 'Samsung Galaxy S23',
    brand: 'Samsung',
    category: 'Electronics',
    price: 54999,
    originalPrice: 62499,
    rating: 4.3,
    reviewCount: 985,
    image: samsungS23Img,
    thumbnails: [samsungS23Img, iphone15Img],
    description:
      'Compact flagship smartphone with Snapdragon 8 Gen 2, vibrant 120Hz Dynamic AMOLED display, and premium Armor Aluminum frame.',
    specifications: [
      { label: 'Display', value: '6.1 inch Dynamic AMOLED 2X 120Hz' },
      { label: 'Processor', value: 'Snapdragon 8 Gen 2' },
      { label: 'Camera', value: '50MP + 10MP + 12MP' },
      { label: 'Battery', value: '3900 mAh' },
    ],
    platforms: {
      Amazon: { price: 54999, rating: 4.4, reviewCount: 520, sentimentScore: 84, positivePercent: 84, negativePercent: 10 },
      Myntra: { price: 55999, rating: 4.2, reviewCount: 230, sentimentScore: 80, positivePercent: 80, negativePercent: 12 },
    },
    aiSummary: {
      pros: ['120Hz high refresh rate screen', 'Compact form factor', 'Great telephoto zoom'],
      cons: ['Compact battery drains on heavy gaming'],
      sentimentBreakdown: { positive: 81, neutral: 9, negative: 10 },
      verdict: 'The best compact Android smartphone offering flagship camera and display prowess.',
      aspects: [{ aspect: 'Screen', sentiment: 'Positive', score: 94 }, { aspect: 'Build', sentiment: 'Positive', score: 88 }],
    },
  },
  {
    id: 'prod-boat-airdopes',
    title: 'boAt Airdopes 141',
    brand: 'boAt',
    category: 'Electronics',
    price: 1299,
    originalPrice: 1999,
    rating: 4.2,
    reviewCount: 4300,
    image: boatAirdopesImg,
    thumbnails: [boatAirdopesImg],
    description:
      'True Wireless Earbuds with 42H playtime, Beast Mode low latency for gaming, and ASAP Charge.',
    specifications: [
      { label: 'Driver', value: '8mm Dynamic Bass Drivers' },
      { label: 'Playtime', value: 'Up to 42 Hours Total' },
    ],
    platforms: {
      Amazon: { price: 1299, rating: 4.2, reviewCount: 3100, sentimentScore: 78, positivePercent: 78, negativePercent: 14 },
    },
    aiSummary: {
      pros: ['Punchy bass', 'Long battery life', 'Great value'],
      cons: ['Outdoor microphone sensitivity'],
      sentimentBreakdown: { positive: 76, neutral: 10, negative: 14 },
      verdict: 'Outstanding budget audio with exceptional battery backup.',
      aspects: [{ aspect: 'Bass', sentiment: 'Positive', score: 85 }, { aspect: 'Battery', sentiment: 'Positive', score: 90 }],
    },
  },
  {
    id: 'prod-levis-jeans',
    title: "Levi's Jeans",
    brand: "Levi's",
    category: 'Fashion',
    price: 2199,
    originalPrice: 2999,
    rating: 4.3,
    reviewCount: 1420,
    image: levisJeansImg,
    thumbnails: [levisJeansImg],
    description: 'Classic straight-fit stretch denim with iconic red tab and signature stitching.',
    specifications: [{ label: 'Fit', value: 'Slim Straight' }, { label: 'Material', value: '98% Cotton, 2% Elastane' }],
    platforms: {
      Myntra: { price: 2199, rating: 4.4, reviewCount: 890, sentimentScore: 86, positivePercent: 86, negativePercent: 8 },
      Amazon: { price: 2299, rating: 4.2, reviewCount: 530, sentimentScore: 80, positivePercent: 80, negativePercent: 12 },
    },
    aiSummary: {
      pros: ['Durable heavyweight denim', 'Comfortable stretch'],
      cons: ['Slightly long inseam'],
      sentimentBreakdown: { positive: 83, neutral: 9, negative: 8 },
      verdict: 'Timeless denim that handles daily wear with ease.',
      aspects: [{ aspect: 'Fabric', sentiment: 'Positive', score: 90 }, { aspect: 'Fit', sentiment: 'Positive', score: 85 }],
    },
  },
];

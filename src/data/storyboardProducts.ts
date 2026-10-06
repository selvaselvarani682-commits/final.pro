import { Product } from '../types/index';

import iphone15Img from '../assets/images/product_iphone15_1790847823667.jpg';
import nikeShoesImg from '../assets/images/product_nike_shoes_1790847836073.jpg';
import samsungTvImg from '../assets/images/product_samsung_tv_1790847852509.jpg';
import nykaaLipstickImg from '../assets/images/product_nykaa_lipstick_1790847867533.jpg';
import samsungS23Img from '../assets/images/product_samsung_s23_1790847887154.jpg';
import boatAirdopesImg from '../assets/images/flash_boat_earbuds_1790846893387.jpg';
import levisJeansImg from '../assets/images/product_levis_jeans_1790847904974.jpg';
import backpackImg from '../assets/images/product_black_backpack_1790847923860.jpg';
import airFryerImg from '../assets/images/product_air_fryer_1790849296172.jpg';
import studyTableImg from '../assets/images/product_study_table_1790847939798.jpg';
import boatEarbudsImg from '../assets/images/flash_boat_earbuds_1790846893387.jpg';
import snitchShirtImg from '../assets/images/flash_snitch_shirt_1790846905888.jpg';
import minimalistSerumImg from '../assets/images/flash_minimalist_serum_1790846918590.jpg';
import noiseWatchImg from '../assets/images/flash_noise_smartwatch_1790846933118.jpg';
import kurtiProductImg from '../assets/images/kurti_product_image_1788865143302.jpg';
import shirtProductImg from '../assets/images/shirt_product_image_1788865161902.jpg';
import ethnicKurtiImg from '../assets/images/ethnic_kurti_image_1788865173700.jpg';

export const STORYBOARD_PRODUCTS: Product[] = [
  // =========================================================================
  // 1. ELECTRONICS
  // =========================================================================
  {
    id: 'prod-iphone-15',
    title: 'iPhone 15 (128GB - Blue)',
    brand: 'Apple',
    category: 'Electronics',
    price: 69900,
    originalPrice: 79900,
    rating: 4.4,
    reviewCount: 12400,
    image: iphone15Img,
    thumbnails: [iphone15Img, samsungS23Img, boatAirdopesImg, nikeShoesImg],
    description:
      'Apple iPhone 15 features Dynamic Island, an advanced 48MP main camera with 2x Telephoto, USB-C connectivity, and durable color-infused glass back design.',
    specifications: [
      { label: 'Display', value: '6.1-inch Super Retina XDR OLED' },
      { label: 'Processor', value: 'A16 Bionic 6-core chip' },
      { label: 'Camera', value: '48MP Main + 12MP Ultra-Wide' },
      { label: 'Battery', value: '3349 mAh with 20W Fast Charging' },
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
  {
    id: 'prod-samsung-tv',
    title: 'Samsung Smart TV 55" 4K Ultra HD',
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
  {
    id: 'prod-samsung-s23',
    title: 'Samsung Galaxy S23 (5G, 128GB)',
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
    id: 'prod-boat-nirvana-01',
    title: 'boAt Nirvana Ion ANC True Wireless Earbuds',
    brand: 'boAt',
    category: 'Electronics',
    price: 2499,
    originalPrice: 7990,
    rating: 4.8,
    reviewCount: 14250,
    image: boatEarbudsImg,
    thumbnails: [boatEarbudsImg],
    description:
      'Premium quad mic ENx technology, 32dB active noise cancellation, Crystal Bionic Sound powered by HiFi DSP, and massive 120-hour battery life.',
    specifications: [
      { label: 'Playtime', value: '120 Hours Total with Charging Case' },
      { label: 'Noise Cancellation', value: '32dB Active Noise Cancellation' },
      { label: 'Latency', value: '60ms Low Latency BEAST Mode' },
      { label: 'Water Resistance', value: 'IPX4 Splash Proof' },
    ],
    platforms: {
      Amazon: { price: 2499, rating: 4.8, reviewCount: 8500, sentimentScore: 92, positivePercent: 92, negativePercent: 3 },
      Myntra: { price: 2699, rating: 4.7, reviewCount: 3200, sentimentScore: 89, positivePercent: 89, negativePercent: 4 },
      Nykaa: { price: 2799, rating: 4.6, reviewCount: 1100, sentimentScore: 87, positivePercent: 87, negativePercent: 5 },
    },
    aiSummary: {
      pros: ['Massive 120-hour battery stamina', 'Effective 32dB ANC', 'Deep thumping bass EQ'],
      cons: ['Case is slightly heavier than average'],
      sentimentBreakdown: { positive: 91, neutral: 6, negative: 3 },
      verdict: 'Sub-3k king for battery endurance and active noise cancellation.',
      aspects: [
        { aspect: 'Battery', sentiment: 'Positive', score: 98 },
        { aspect: 'ANC', sentiment: 'Positive', score: 91 },
        { aspect: 'Bass', sentiment: 'Positive', score: 94 },
      ],
    },
  },
  {
    id: 'prod-noise-watch',
    title: 'Noise ColorFit Pro 5 Smartwatch (1.85" AMOLED)',
    brand: 'Noise',
    category: 'Electronics',
    price: 3499,
    originalPrice: 8999,
    rating: 4.5,
    reviewCount: 9800,
    image: noiseWatchImg,
    thumbnails: [noiseWatchImg],
    description:
      '1.85-inch AMOLED display with functional crown, Bluetooth Calling, rapid charging, and comprehensive 24/7 health tracking suite.',
    specifications: [
      { label: 'Screen', value: '1.85" Ultra AMOLED (600 Nits)' },
      { label: 'Battery', value: 'Up to 7 Days on Single Charge' },
      { label: 'Sensors', value: 'SpO2, Heart Rate, Stress, Sleep' },
    ],
    platforms: {
      Amazon: { price: 3499, rating: 4.5, reviewCount: 6200, sentimentScore: 88, positivePercent: 88, negativePercent: 6 },
      Myntra: { price: 3699, rating: 4.4, reviewCount: 2100, sentimentScore: 85, positivePercent: 85, negativePercent: 7 },
    },
    aiSummary: {
      pros: ['Vivid high-brightness AMOLED screen', 'Smooth UI crown dial', 'Clear calling mic'],
      cons: ['Step tracking can overcount brisk car commutes'],
      sentimentBreakdown: { positive: 88, neutral: 7, negative: 5 },
      verdict: 'Premium aesthetic smartwatch with top-tier outdoor readability.',
      aspects: [
        { aspect: 'Display', sentiment: 'Positive', score: 95 },
        { aspect: 'Battery', sentiment: 'Positive', score: 90 },
      ],
    },
  },
  {
    id: 'prod-sony-wh1000xm5',
    title: 'Sony WH-1000XM5 Wireless ANC Headphones',
    brand: 'Sony',
    category: 'Electronics',
    price: 29990,
    originalPrice: 34990,
    rating: 4.7,
    reviewCount: 7600,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'],
    description:
      'Industry-leading noise canceling with Auto NC Optimizer, 8 microphones, 30-hour battery life, and crystal clear hands-free calling.',
    specifications: [
      { label: 'Driver', value: '30mm Carbon Fiber Composite' },
      { label: 'Battery', value: '30 Hours with ANC On' },
      { label: 'Microphones', value: '8 Mics with AI Beamforming' },
    ],
    platforms: {
      Amazon: { price: 29990, rating: 4.7, reviewCount: 4500, sentimentScore: 94, positivePercent: 94, negativePercent: 2 },
      Snapdeal: { price: 31490, rating: 4.5, reviewCount: 800, sentimentScore: 88, positivePercent: 88, negativePercent: 5 },
    },
    aiSummary: {
      pros: ['Unrivaled noise cancellation', 'Featherlight comfortable headband', 'Superb call clarity'],
      cons: ['Earcups do not fold inwards'],
      sentimentBreakdown: { positive: 93, neutral: 4, negative: 3 },
      verdict: 'The gold standard for travel and audiophile active noise cancellation.',
      aspects: [
        { aspect: 'Noise Cancellation', sentiment: 'Positive', score: 98 },
        { aspect: 'Sound Quality', sentiment: 'Positive', score: 95 },
        { aspect: 'Comfort', sentiment: 'Positive', score: 94 },
      ],
    },
  },

  // =========================================================================
  // 2. FASHION
  // =========================================================================
  {
    id: 'prod-nike-shoes',
    title: 'Nike Air Zoom Running Shoes',
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
      Amazon: { price: 4599, rating: 4.4, reviewCount: 4200, sentimentScore: 84, positivePercent: 84, negativePercent: 10 },
      Myntra: { price: 4499, rating: 4.5, reviewCount: 3800, sentimentScore: 88, positivePercent: 88, negativePercent: 7 },
      Snapdeal: { price: 4799, rating: 4.1, reviewCount: 600, sentimentScore: 76, positivePercent: 76, negativePercent: 14 },
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
  {
    id: 'prod-levis-jeans',
    title: "Levi's 511 Slim Fit Stretch Denim Jeans",
    brand: "Levi's",
    category: 'Fashion',
    price: 2199,
    originalPrice: 2999,
    rating: 4.3,
    reviewCount: 1420,
    image: levisJeansImg,
    thumbnails: [levisJeansImg],
    description: 'Classic straight-fit stretch denim with iconic red tab, copper rivets, and signature rear arch stitching.',
    specifications: [{ label: 'Fit', value: 'Slim Straight' }, { label: 'Material', value: '98% Cotton, 2% Elastane' }],
    platforms: {
      Myntra: { price: 2199, rating: 4.4, reviewCount: 890, sentimentScore: 86, positivePercent: 86, negativePercent: 8 },
      Amazon: { price: 2299, rating: 4.2, reviewCount: 530, sentimentScore: 80, positivePercent: 80, negativePercent: 12 },
    },
    aiSummary: {
      pros: ['Durable heavyweight denim', 'Comfortable stretch for movement', 'Doesn’t sag over multiple washes'],
      cons: ['Slightly long inseam'],
      sentimentBreakdown: { positive: 83, neutral: 9, negative: 8 },
      verdict: 'Timeless denim that handles daily wear with ease.',
      aspects: [{ aspect: 'Fabric', sentiment: 'Positive', score: 90 }, { aspect: 'Fit', sentiment: 'Positive', score: 85 }],
    },
  },
  {
    id: 'prod-snitch-shirt',
    title: 'Snitch Cuban Collar Linen Resort Shirt',
    brand: 'Snitch',
    category: 'Fashion',
    price: 1399,
    originalPrice: 2199,
    rating: 4.6,
    reviewCount: 3400,
    image: snitchShirtImg,
    thumbnails: [snitchShirtImg],
    description:
      'Contemporary relaxed-fit Cuban collar shirt woven with breathable slub cotton-linen fabric for warm summer vibes.',
    specifications: [
      { label: 'Fit', value: 'Relaxed Casual Fit' },
      { label: 'Collar', value: 'Camp / Cuban Collar' },
      { label: 'Fabric', value: '70% Cotton, 30% Linen' },
    ],
    platforms: {
      Myntra: { price: 1399, rating: 4.6, reviewCount: 2200, sentimentScore: 91, positivePercent: 91, negativePercent: 4 },
      Amazon: { price: 1499, rating: 4.4, reviewCount: 950, sentimentScore: 86, positivePercent: 86, negativePercent: 7 },
    },
    aiSummary: {
      pros: ['Ultra-breathable linen feel', 'Trendy modern boxy silhouette', 'Soft handfeel after wash'],
      cons: ['Linen blend naturally creases easily'],
      sentimentBreakdown: { positive: 90, neutral: 6, negative: 4 },
      verdict: 'Top-tier vacation and weekend casual shirt with impeccable modern styling.',
      aspects: [{ aspect: 'Comfort', sentiment: 'Positive', score: 95 }, { aspect: 'Style', sentiment: 'Positive', score: 93 }],
    },
  },
  {
    id: 'prod-libas-kurti',
    title: 'Libas Pure Cotton Anarkali Kurta & Dupatta Set',
    brand: 'Libas',
    category: 'Fashion',
    price: 1899,
    originalPrice: 3499,
    rating: 4.5,
    reviewCount: 4200,
    image: kurtiProductImg,
    thumbnails: [kurtiProductImg, ethnicKurtiImg],
    description:
      'Elegant floral printed Anarkali kurti featuring gotta patti borders, flared hemline, matching palazzos, and airy chiffon dupatta.',
    specifications: [
      { label: 'Fabric', value: '100% Breathable Mulmul Cotton' },
      { label: 'Neckline', value: 'Round Neck with Keyhole Detail' },
      { label: 'Occasion', value: 'Festive & Daily Workwear' },
    ],
    platforms: {
      Myntra: { price: 1899, rating: 4.5, reviewCount: 2800, sentimentScore: 89, positivePercent: 89, negativePercent: 5 },
      Meesho: { price: 1749, rating: 4.2, reviewCount: 1100, sentimentScore: 81, positivePercent: 81, negativePercent: 12 },
    },
    aiSummary: {
      pros: ['Lightweight mulmul fabric', 'Graceful flared fall', 'Colors stay intact after multiple washings'],
      cons: ['Dupatta is relatively lightweight'],
      sentimentBreakdown: { positive: 88, neutral: 7, negative: 5 },
      verdict: 'Bestselling ethnic ensemble balancing timeless elegance and daytime breathability.',
      aspects: [{ aspect: 'Fabric Quality', sentiment: 'Positive', score: 92 }, { aspect: 'Fitting', sentiment: 'Positive', score: 88 }],
    },
  },
  {
    id: 'prod-puma-sneakers',
    title: 'Puma Smash v2 Classic Suede Casual Sneakers',
    brand: 'Puma',
    category: 'Fashion',
    price: 2499,
    originalPrice: 4499,
    rating: 4.4,
    reviewCount: 5100,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80'],
    description:
      'Court-inspired low-profile sneakers crafted from rich genuine suede with cushioned SoftFoam+ comfort sockliner.',
    specifications: [
      { label: 'Upper', value: 'Genuine Suede Leather' },
      { label: 'Insole', value: 'SoftFoam+ Dual-Density Cushioning' },
      { label: 'Sole', value: 'Durable Non-Marking Rubber' },
    ],
    platforms: {
      Amazon: { price: 2499, rating: 4.4, reviewCount: 3100, sentimentScore: 86, positivePercent: 86, negativePercent: 8 },
      Myntra: { price: 2599, rating: 4.5, reviewCount: 1800, sentimentScore: 88, positivePercent: 88, negativePercent: 6 },
    },
    aiSummary: {
      pros: ['Plush SoftFoam insole cushioning', 'Understated retro court profile', 'Grippy non-slip rubber sole'],
      cons: ['Suede requires careful brushing in rainy season'],
      sentimentBreakdown: { positive: 87, neutral: 6, negative: 7 },
      verdict: 'Everyday lifestyle sneaker favorite with reliable day-long comfort.',
      aspects: [{ aspect: 'Comfort', sentiment: 'Positive', score: 92 }, { aspect: 'Style', sentiment: 'Positive', score: 90 }],
    },
  },

  // =========================================================================
  // 3. BEAUTY & PERSONAL CARE
  // =========================================================================
  {
    id: 'prod-nykaa-lipstick',
    title: 'Nykaa Matte to Last! Liquid Lipstick (5ml)',
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
      { label: 'Weight', value: '5 ml' },
    ],
    colors: ['#991B1B', '#BE185D', '#831843'],
    platforms: {
      Nykaa: { price: 399, rating: 4.4, reviewCount: 2200, sentimentScore: 89, positivePercent: 89, negativePercent: 6 },
      Amazon: { price: 429, rating: 4.1, reviewCount: 900, sentimentScore: 80, positivePercent: 80, negativePercent: 14 },
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
  {
    id: 'prod-minimalist-serum',
    title: 'Minimalist 10% Niacinamide Face Serum with Zinc',
    brand: 'Minimalist',
    category: 'Beauty',
    price: 599,
    originalPrice: 699,
    rating: 4.7,
    reviewCount: 11200,
    image: minimalistSerumImg,
    thumbnails: [minimalistSerumImg],
    description:
      'Clinically proven serum with pure 10% Niacinamide and Zinc PCA that diminishes blemish marks, reduces sebum, and strengthens skin barrier.',
    specifications: [
      { label: 'Key Active', value: '10% Niacinamide + 1% Zinc PCA' },
      { label: 'Skin Type', value: 'All skin types, Oily & Acne-Prone' },
      { label: 'Volume', value: '30 ml' },
    ],
    platforms: {
      Nykaa: { price: 599, rating: 4.8, reviewCount: 6500, sentimentScore: 94, positivePercent: 94, negativePercent: 2 },
      Amazon: { price: 599, rating: 4.6, reviewCount: 4200, sentimentScore: 91, positivePercent: 91, negativePercent: 4 },
    },
    aiSummary: {
      pros: ['Visible reduction in acne scars within 3 weeks', 'Non-sticky fast absorbing texture', 'Fragrance free'],
      cons: ['First time users should patch test to avoid mild tingling'],
      sentimentBreakdown: { positive: 93, neutral: 4, negative: 3 },
      verdict: 'Holy-grail clarifying serum backed by overwhelming dermatological praise.',
      aspects: [
        { aspect: 'Skin Clarification', sentiment: 'Positive', score: 96 },
        { aspect: 'Texture Absorption', sentiment: 'Positive', score: 94 },
      ],
    },
  },
  {
    id: 'prod-cetaphil-cleanser',
    title: 'Cetaphil Gentle Skin Hydrating Cleanser (250ml)',
    brand: 'Cetaphil',
    category: 'Beauty',
    price: 545,
    originalPrice: 625,
    rating: 4.6,
    reviewCount: 8900,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80'],
    description:
      'Dermatologist-recommended non-foaming gentle cleanser enriched with Niacinamide, Panthenol, and hydrating Glycerin for sensitive skin.',
    specifications: [
      { label: 'Type', value: 'Soap-Free, Hypoallergenic Cleanser' },
      { label: 'Formulation', value: 'Creamy Gel Barrier Repair' },
      { label: 'Size', value: '250 ml Pump Bottle' },
    ],
    platforms: {
      Nykaa: { price: 545, rating: 4.7, reviewCount: 5200, sentimentScore: 93, positivePercent: 93, negativePercent: 3 },
      Amazon: { price: 550, rating: 4.5, reviewCount: 3400, sentimentScore: 89, positivePercent: 89, negativePercent: 5 },
    },
    aiSummary: {
      pros: ['Zero skin stripping or tightness', 'Safe for eczema and hypersensitive skin', 'Fragrance and paraben free'],
      cons: ['Does not produce lather which some buyers take time getting used to'],
      sentimentBreakdown: { positive: 92, neutral: 5, negative: 3 },
      verdict: 'The gentlest daily face wash money can buy, pristine skin barrier protector.',
      aspects: [{ aspect: 'Gentleness', sentiment: 'Positive', score: 98 }, { aspect: 'Hydration', sentiment: 'Positive', score: 94 }],
    },
  },
  {
    id: 'prod-mamaearth-oil',
    title: 'Mamaearth Onion Hair Oil with Redensyl (150ml)',
    brand: 'Mamaearth',
    category: 'Beauty',
    price: 379,
    originalPrice: 419,
    rating: 4.3,
    reviewCount: 6300,
    image: 'https://images.unsplash.com/photo-1608248597359-543597406830?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1608248597359-543597406830?auto=format&fit=crop&w=600&q=80'],
    description:
      'Naturally formulated hair growth booster enriched with sulphur-rich onion oil, Redensyl, and almond oil to arrest hair fall.',
    specifications: [
      { label: 'Key Ingredients', value: 'Onion Seed Oil, Redensyl, Castor Oil' },
      { label: 'Applicator', value: 'Direct Scalp Comb Nozzle' },
      { label: 'Volume', value: '150 ml' },
    ],
    platforms: {
      Amazon: { price: 379, rating: 4.3, reviewCount: 4100, sentimentScore: 84, positivePercent: 84, negativePercent: 9 },
      Nykaa: { price: 399, rating: 4.4, reviewCount: 1900, sentimentScore: 86, positivePercent: 86, negativePercent: 7 },
    },
    aiSummary: {
      pros: ['Innovative comb applicator reaches roots easily', 'Noticeable reduction in hair shedding', 'Pleasant botanical scent'],
      cons: ['Requires shampooing twice to remove completely'],
      sentimentBreakdown: { positive: 84, neutral: 8, negative: 8 },
      verdict: 'Popular anti-hairfall remedy with convenient mess-free applicator.',
      aspects: [{ aspect: 'Hair Fall Control', sentiment: 'Positive', score: 86 }, { aspect: 'Applicator', sentiment: 'Positive', score: 91 }],
    },
  },

  // =========================================================================
  // 4. HOME & LIVING
  // =========================================================================
  {
    id: 'prod-backpack',
    title: 'Wildcraft Ergonomic Laptop Commuter Backpack (30L)',
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
      Amazon: { price: 1499, rating: 4.5, reviewCount: 2100, sentimentScore: 87, positivePercent: 87, negativePercent: 8 },
      Meesho: { price: 1449, rating: 4.2, reviewCount: 700, sentimentScore: 78, positivePercent: 78, negativePercent: 15 },
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
  {
    id: 'prod-air-fryer',
    title: 'Philips Digital Rapid Air Fryer (4.1L)',
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
      Amazon: { price: 8999, rating: 4.5, reviewCount: 2200, sentimentScore: 88, positivePercent: 88, negativePercent: 7 },
      Snapdeal: { price: 9299, rating: 4.2, reviewCount: 700, sentimentScore: 80, positivePercent: 80, negativePercent: 14 },
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
  {
    id: 'prod-study-table',
    title: 'Solimo Ergonomic Wooden Study & Work Desk',
    brand: 'Solimo',
    category: 'Home & Living',
    price: 4999,
    originalPrice: 7999,
    rating: 4.4,
    reviewCount: 2150,
    image: studyTableImg,
    thumbnails: [studyTableImg],
    description:
      'Spacious engineered wood workstation with dual shelving units, cable management grommet, and scratch-resistant walnut melamine top.',
    specifications: [
      { label: 'Dimensions', value: '120 cm x 60 cm x 75 cm' },
      { label: 'Material', value: 'Grade-E1 Engineered Wood' },
      { label: 'Weight Capacity', value: '75 kg load endurance' },
    ],
    platforms: {
      Amazon: { price: 4999, rating: 4.5, reviewCount: 1700, sentimentScore: 88, positivePercent: 88, negativePercent: 6 },
      Snapdeal: { price: 5199, rating: 4.1, reviewCount: 450, sentimentScore: 78, positivePercent: 78, negativePercent: 14 },
    },
    aiSummary: {
      pros: ['Sturdy wobble-free leg framing', 'Ample legroom for office chair', 'Easy 20-minute DIY assembly'],
      cons: ['Corner edges are relatively sharp before edge guards'],
      sentimentBreakdown: { positive: 87, neutral: 7, negative: 6 },
      verdict: 'Exceptional home office study table with premium walnut aesthetic.',
      aspects: [{ aspect: 'Sturdiness', sentiment: 'Positive', score: 91 }, { aspect: 'Assembly', sentiment: 'Positive', score: 86 }],
    },
  },
  {
    id: 'prod-milton-flask',
    title: 'Milton Thermosteel Insulated Water Bottle (1000ml)',
    brand: 'Milton',
    category: 'Home & Living',
    price: 949,
    originalPrice: 1195,
    rating: 4.6,
    reviewCount: 7400,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80'],
    description:
      'Double-walled vacuum insulated grade-304 stainless steel flask that retains hot or cold temperature for up to 24 hours.',
    specifications: [
      { label: 'Capacity', value: '1000 ml' },
      { label: 'Insulation', value: '24 Hours Hot / Cold Vacuum' },
      { label: 'Steel Grade', value: 'Rust-Proof 304 Food Grade' },
    ],
    platforms: {
      Amazon: { price: 949, rating: 4.6, reviewCount: 5200, sentimentScore: 92, positivePercent: 92, negativePercent: 4 },
      Meesho: { price: 899, rating: 4.3, reviewCount: 1600, sentimentScore: 84, positivePercent: 84, negativePercent: 9 },
    },
    aiSummary: {
      pros: ['Keeps water icy cold even in 45°C summer heat', 'Completely leakproof silicone gasket', 'Durable powder coat finish'],
      cons: ['Narrow mouth makes adding large ice cubes difficult'],
      sentimentBreakdown: { positive: 91, neutral: 5, negative: 4 },
      verdict: 'The quintessential indestructible Indian thermos flask for school, gym, and office.',
      aspects: [{ aspect: 'Temperature Retention', sentiment: 'Positive', score: 97 }, { aspect: 'Durability', sentiment: 'Positive', score: 95 }],
    },
  },

  // =========================================================================
  // 5. SPORTS & FITNESS
  // =========================================================================
  {
    id: 'prod-yonex-racquet',
    title: 'Yonex Muscle Power 29 Light Badminton Racquet',
    brand: 'Yonex',
    category: 'Sports',
    price: 2690,
    originalPrice: 3890,
    rating: 4.6,
    reviewCount: 5400,
    image: 'https://images.unsplash.com/photo-1613918108466-292b78a8ef95?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1613918108466-292b78a8ef95?auto=format&fit=crop&w=600&q=80'],
    description:
      'High-modulus graphite racquet with Muscle Power frame design, isometric head shape, and 85g lightweight balance for explosive smashes.',
    specifications: [
      { label: 'Weight', value: '4U (80-84 grams)' },
      { label: 'Grip Size', value: 'G4' },
      { label: 'String Tension', value: 'Up to 30 lbs endurance' },
      { label: 'Shaft', value: 'Full Carbon Graphite' },
    ],
    platforms: {
      Amazon: { price: 2690, rating: 4.6, reviewCount: 3800, sentimentScore: 91, positivePercent: 91, negativePercent: 4 },
      Snapdeal: { price: 2799, rating: 4.3, reviewCount: 900, sentimentScore: 83, positivePercent: 83, negativePercent: 9 },
    },
    aiSummary: {
      pros: ['Exceptional smash power and wrist speed', 'Lightweight 4U feel avoids arm fatigue', 'Durable isometric frame'],
      cons: ['Stock strings are pre-strung at medium 22 lbs tension'],
      sentimentBreakdown: { positive: 90, neutral: 6, negative: 4 },
      verdict: 'Top recommended intermediate racquet delivering lethal smashes and lightning defense.',
      aspects: [
        { aspect: 'Smash Power', sentiment: 'Positive', score: 94 },
        { aspect: 'Weight Balance', sentiment: 'Positive', score: 93 },
      ],
    },
  },
  {
    id: 'prod-nivia-football',
    title: 'Nivia Storm High-Durability Football (Size 5)',
    brand: 'Nivia',
    category: 'Sports',
    price: 499,
    originalPrice: 650,
    rating: 4.3,
    reviewCount: 7800,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80'],
    description:
      '32-panel rubber molded football engineered for hard ground, gravel, and rough turf surfaces. Resistant to wear and tear.',
    specifications: [
      { label: 'Size', value: 'Standard Size 5 Match Ball' },
      { label: 'Construction', value: 'Molded Rubber with Latex Bladder' },
      { label: 'Surface', value: 'Hard Ground, Grass, Concrete' },
    ],
    platforms: {
      Amazon: { price: 499, rating: 4.3, reviewCount: 5200, sentimentScore: 85, positivePercent: 85, negativePercent: 8 },
      Meesho: { price: 469, rating: 4.1, reviewCount: 1800, sentimentScore: 79, positivePercent: 79, negativePercent: 12 },
    },
    aiSummary: {
      pros: ['Practically indestructible on rough concrete or gravel', 'Consistent true bounce', 'Affordable price'],
      cons: ['Harder surface texture compared to soft stitched balls'],
      sentimentBreakdown: { positive: 84, neutral: 8, negative: 8 },
      verdict: 'The ultimate rough-and-tough street and school football that never bursts.',
      aspects: [{ aspect: 'Durability', sentiment: 'Positive', score: 95 }, { aspect: 'Value for Money', sentiment: 'Positive', score: 92 }],
    },
  },
  {
    id: 'prod-boldfit-yoga-mat',
    title: 'Boldfit Non-Slip Eco-Friendly Yoga Mat (6mm)',
    brand: 'Boldfit',
    category: 'Sports',
    price: 799,
    originalPrice: 1499,
    rating: 4.5,
    reviewCount: 4600,
    image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=600&q=80'],
    description:
      'High-density anti-tear TPE exercise mat with textured dual-sided grip, waterproof sweat resistance, and convenient carry strap.',
    specifications: [
      { label: 'Thickness', value: '6mm Joint-Protection Cushion' },
      { label: 'Material', value: 'Non-Toxic Eco-Friendly TPE' },
      { label: 'Dimensions', value: '183 cm x 61 cm' },
    ],
    platforms: {
      Amazon: { price: 799, rating: 4.5, reviewCount: 3200, sentimentScore: 89, positivePercent: 89, negativePercent: 5 },
      Myntra: { price: 849, rating: 4.4, reviewCount: 950, sentimentScore: 86, positivePercent: 86, negativePercent: 7 },
    },
    aiSummary: {
      pros: ['Zero slipping on polished tiles or wooden floors', '6mm thickness relieves knee strain', 'Lightweight with carry sling'],
      cons: ['Initial rubber smell dissipates after 24 hours of airing out'],
      sentimentBreakdown: { positive: 88, neutral: 6, negative: 6 },
      verdict: 'Top rated workout and yoga mat ensuring slip-free stability and plush joint support.',
      aspects: [{ aspect: 'Grip', sentiment: 'Positive', score: 93 }, { aspect: 'Cushioning', sentiment: 'Positive', score: 91 }],
    },
  },

  // =========================================================================
  // 6. BOOKS
  // =========================================================================
  {
    id: 'prod-atomic-habits',
    title: 'Atomic Habits by James Clear (Hardcover Edition)',
    brand: 'Penguin',
    category: 'Books',
    price: 499,
    originalPrice: 799,
    rating: 4.8,
    reviewCount: 38200,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'],
    description:
      'An Easy & Proven Way to Build Good Habits & Break Bad Ones. Over 15 million copies sold globally with life-transforming framework.',
    specifications: [
      { label: 'Author', value: 'James Clear' },
      { label: 'Format', value: 'Paperback / Deluxe Edition' },
      { label: 'Pages', value: '320 Pages' },
      { label: 'Language', value: 'English' },
    ],
    platforms: {
      Amazon: { price: 499, rating: 4.8, reviewCount: 32000, sentimentScore: 97, positivePercent: 97, negativePercent: 1 },
      Snapdeal: { price: 480, rating: 4.5, reviewCount: 4200, sentimentScore: 90, positivePercent: 90, negativePercent: 4 },
    },
    aiSummary: {
      pros: ['Actionable scientific framework', 'Engaging real-world case studies', 'Clear habit scorecards'],
      cons: ['Some concepts overlap with foundational behavioral psychology'],
      sentimentBreakdown: { positive: 96, neutral: 3, negative: 1 },
      verdict: 'The definitive masterclass on human habit formation and incremental self-mastery.',
      aspects: [
        { aspect: 'Content Quality', sentiment: 'Positive', score: 99 },
        { aspect: 'Print & Binding', sentiment: 'Positive', score: 94 },
      ],
    },
  },
  {
    id: 'prod-psychology-money',
    title: 'The Psychology of Money by Morgan Housel',
    brand: 'Jaico',
    category: 'Books',
    price: 299,
    originalPrice: 399,
    rating: 4.7,
    reviewCount: 24500,
    image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=600&q=80'],
    description:
      'Timeless lessons on wealth, greed, and happiness doing well with money isn’t necessarily about what you know. It’s about how you behave.',
    specifications: [
      { label: 'Author', value: 'Morgan Housel' },
      { label: 'Pages', value: '256 Pages' },
      { label: 'Genre', value: 'Personal Finance & Behavioral Economics' },
    ],
    platforms: {
      Amazon: { price: 299, rating: 4.7, reviewCount: 19500, sentimentScore: 95, positivePercent: 95, negativePercent: 2 },
      Meesho: { price: 275, rating: 4.4, reviewCount: 3200, sentimentScore: 87, positivePercent: 87, negativePercent: 6 },
    },
    aiSummary: {
      pros: ['19 short captivating story chapters', 'Demystifies compounding and financial ego', 'Easy to finish in a weekend'],
      cons: ['Does not contain stock trading formulas (focuses on mindset)'],
      sentimentBreakdown: { positive: 94, neutral: 4, negative: 2 },
      verdict: 'An indispensable guide to financial peace of mind and lifelong compounding.',
      aspects: [{ aspect: 'Wisdom & Insights', sentiment: 'Positive', score: 98 }, { aspect: 'Readability', sentiment: 'Positive', score: 96 }],
    },
  },
  {
    id: 'prod-ikigai-book',
    title: 'Ikigai: The Japanese Secret to a Long and Happy Life',
    brand: 'Tuttle',
    category: 'Books',
    price: 349,
    originalPrice: 550,
    rating: 4.6,
    reviewCount: 18400,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80'],
    description:
      'Discover the secret to health and longevity straight from the centenarians of Okinawa, Japan. Beautiful hardcover binding.',
    specifications: [
      { label: 'Authors', value: 'Héctor García & Francesc Miralles' },
      { label: 'Format', value: 'Signature Hardcover with Silver Foil' },
      { label: 'Pages', value: '208 Pages' },
    ],
    platforms: {
      Amazon: { price: 349, rating: 4.6, reviewCount: 14200, sentimentScore: 92, positivePercent: 92, negativePercent: 3 },
      Snapdeal: { price: 329, rating: 4.3, reviewCount: 2600, sentimentScore: 85, positivePercent: 85, negativePercent: 7 },
    },
    aiSummary: {
      pros: ['Calming and therapeutic prose', 'Practical longevity habits and diet insights', 'Beautiful collector cover art'],
      cons: ['Compact reading length'],
      sentimentBreakdown: { positive: 91, neutral: 6, negative: 3 },
      verdict: 'Gentle, inspiring exploration of purpose, community, and mindful living.',
      aspects: [{ aspect: 'Inspiration', sentiment: 'Positive', score: 94 }, { aspect: 'Cover Aesthetics', sentiment: 'Positive', score: 96 }],
    },
  },

  // =========================================================================
  // 7. TOYS & GAMES
  // =========================================================================
  {
    id: 'prod-lego-classic',
    title: 'LEGO Classic Medium Creative Brick Box (484 Pieces)',
    brand: 'LEGO',
    category: 'Toys',
    price: 2499,
    originalPrice: 2999,
    rating: 4.8,
    reviewCount: 9200,
    image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=600&q=80'],
    description:
      '484 vibrant building bricks in 35 different colors including windows, toy eyes, wheels, and convenient reusable storage tub.',
    specifications: [
      { label: 'Pieces', value: '484 Bricks & Special Elements' },
      { label: 'Age Group', value: '4 Years & Above' },
      { label: 'Packaging', value: 'Hard Plastic Tub with Lid' },
    ],
    platforms: {
      Amazon: { price: 2499, rating: 4.8, reviewCount: 6800, sentimentScore: 96, positivePercent: 96, negativePercent: 2 },
      Snapdeal: { price: 2599, rating: 4.5, reviewCount: 1100, sentimentScore: 89, positivePercent: 89, negativePercent: 5 },
    },
    aiSummary: {
      pros: ['Endless open-ended imagination', 'High precision clutch power of authentic LEGO', 'Sturdy reusable storage box'],
      cons: ['Keep away from toddlers due to small brick pieces'],
      sentimentBreakdown: { positive: 95, neutral: 3, negative: 2 },
      verdict: 'The ultimate screen-free creative investment for kids and nostalgic adults.',
      aspects: [{ aspect: 'Plastic Quality', sentiment: 'Positive', score: 99 }, { aspect: 'Creativity', sentiment: 'Positive', score: 98 }],
    },
  },
  {
    id: 'prod-hot-wheels-pack',
    title: 'Hot Wheels 10-Car Collector Die-Cast Vehicle Gift Pack',
    brand: 'Mattel',
    category: 'Toys',
    price: 1199,
    originalPrice: 1499,
    rating: 4.7,
    reviewCount: 8400,
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80'],
    description:
      '1:64 scale die-cast metallic vehicles featuring realistic details, authentic decos, and rolling wheels compatible with all track sets.',
    specifications: [
      { label: 'Scale', value: '1:64 Die-Cast Metal' },
      { label: 'Quantity', value: '10 Assorted Authentic Cars' },
      { label: 'Age Recommendation', value: '3 Years and Up' },
    ],
    platforms: {
      Amazon: { price: 1199, rating: 4.7, reviewCount: 5900, sentimentScore: 94, positivePercent: 94, negativePercent: 3 },
      Snapdeal: { price: 1249, rating: 4.4, reviewCount: 1300, sentimentScore: 87, positivePercent: 87, negativePercent: 6 },
    },
    aiSummary: {
      pros: ['Solid die-cast metal bodies survive crashes', 'Fast-rolling axles on Orange tracks', 'Exciting variety of muscle and sports cars'],
      cons: ['Vehicles are packed in factory assortments (cannot handpick single models)'],
      sentimentBreakdown: { positive: 93, neutral: 4, negative: 3 },
      verdict: 'Instant delight for automobile lovers and budding race track champions.',
      aspects: [{ aspect: 'Die-cast Build', sentiment: 'Positive', score: 96 }, { aspect: 'Speed on Track', sentiment: 'Positive', score: 94 }],
    },
  },
  {
    id: 'prod-monopoly-deluxe',
    title: 'Monopoly Deluxe Classic Family Board Game',
    brand: 'Hasbro',
    category: 'Toys',
    price: 899,
    originalPrice: 1199,
    rating: 4.6,
    reviewCount: 6700,
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=600&q=80'],
    description:
      'The fast-dealing property trading game. Buy, sell, dream, and scheme your way to riches with classic metal tokens and paper currency.',
    specifications: [
      { label: 'Players', value: '2 to 6 Players' },
      { label: 'Components', value: 'Gameboard, 8 Tokens, 28 Title Deeds, Cash' },
      { label: 'Playtime', value: '60 - 120 Minutes' },
    ],
    platforms: {
      Amazon: { price: 899, rating: 4.6, reviewCount: 4800, sentimentScore: 91, positivePercent: 91, negativePercent: 4 },
      Meesho: { price: 829, rating: 4.2, reviewCount: 1200, sentimentScore: 82, positivePercent: 82, negativePercent: 10 },
    },
    aiSummary: {
      pros: ['Timeless family game night staple', 'Heavy die-cast metallic tokens', 'Teaches bargaining and cash budgeting'],
      cons: ['Games can run long when players refuse to trade'],
      sentimentBreakdown: { positive: 89, neutral: 7, negative: 4 },
      verdict: 'The crowning jewel of weekend living room board games.',
      aspects: [{ aspect: 'Fun Quotient', sentiment: 'Positive', score: 95 }, { aspect: 'Board Material', sentiment: 'Positive', score: 90 }],
    },
  },

  // =========================================================================
  // 8. GROCERIES & GOURMET
  // =========================================================================
  {
    id: 'prod-tata-tea-gold',
    title: 'Tata Tea Gold Premium Assam & Darjeeling Blend (1kg)',
    brand: 'Tata',
    category: 'Groceries',
    price: 499,
    originalPrice: 620,
    rating: 4.7,
    reviewCount: 16800,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80'],
    description:
      'Crafted with 85% gently rolled CTC leaves and 15% long Darjeeling aromatic leaves for the perfect balance of rich taste and irresistible aroma.',
    specifications: [
      { label: 'Weight', value: '1 kg Pouch' },
      { label: 'Tea Variety', value: 'CTC with 15% Long Darjeeling Leaves' },
      { label: 'Shelf Life', value: '12 Months' },
    ],
    platforms: {
      Amazon: { price: 499, rating: 4.7, reviewCount: 12200, sentimentScore: 94, positivePercent: 94, negativePercent: 2 },
      Meesho: { price: 479, rating: 4.4, reviewCount: 3100, sentimentScore: 87, positivePercent: 87, negativePercent: 5 },
    },
    aiSummary: {
      pros: ['Exquisite Darjeeling aroma upon boiling', 'Strong golden liquor color', 'Consistently fresh sealing'],
      cons: ['Needs strainer due to delicate long leaf blend'],
      sentimentBreakdown: { positive: 93, neutral: 5, negative: 2 },
      verdict: 'The morning chai benchmark cherished across Indian households.',
      aspects: [{ aspect: 'Aroma', sentiment: 'Positive', score: 97 }, { aspect: 'Taste Strength', sentiment: 'Positive', score: 95 }],
    },
  },
  {
    id: 'prod-fortune-oil',
    title: 'Fortune Sunlite Refined Sunflower Cooking Oil (5L Pouch)',
    brand: 'Fortune',
    category: 'Groceries',
    price: 749,
    originalPrice: 890,
    rating: 4.5,
    reviewCount: 11400,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80'],
    description:
      'Light, clear cooking oil rich in Vitamin E with high smoke point for crisp frying and everyday healthy Indian curries.',
    specifications: [
      { label: 'Volume', value: '5 Litres' },
      { label: 'Type', value: 'Refined Sunflower Oil' },
      { label: 'Nutrients', value: 'Fortified with Vitamin A & D' },
    ],
    platforms: {
      Amazon: { price: 749, rating: 4.5, reviewCount: 8200, sentimentScore: 89, positivePercent: 89, negativePercent: 4 },
      Snapdeal: { price: 769, rating: 4.2, reviewCount: 1800, sentimentScore: 81, positivePercent: 81, negativePercent: 10 },
    },
    aiSummary: {
      pros: ['Light on the stomach without greasy aftertaste', 'High smoke point prevents burning while frying puris', 'Value pack pricing'],
      cons: ['5L jar requires funnel for dispensing into cruets'],
      sentimentBreakdown: { positive: 88, neutral: 7, negative: 5 },
      verdict: 'Reliable all-purpose heart-conscious culinary cooking oil.',
      aspects: [{ aspect: 'Purity & Lightness', sentiment: 'Positive', score: 93 }, { aspect: 'Frying Quality', sentiment: 'Positive', score: 91 }],
    },
  },
  {
    id: 'prod-happilo-almonds',
    title: 'Happilo 100% California Premium Whole Almonds (500g)',
    brand: 'Happilo',
    category: 'Groceries',
    price: 449,
    originalPrice: 595,
    rating: 4.6,
    reviewCount: 9800,
    image: 'https://images.unsplash.com/photo-1508061252445-5350f3ab0a55?auto=format&fit=crop&w=600&q=80',
    thumbnails: ['https://images.unsplash.com/photo-1508061252445-5350f3ab0a55?auto=format&fit=crop&w=600&q=80'],
    description:
      'Handpicked jumbo raw California badam kernels packed in resealable freshness zip pouch. Rich in protein, dietary fiber, and healthy fats.',
    specifications: [
      { label: 'Weight', value: '500 grams' },
      { label: 'Grade', value: '100% California Nonpareil Jumbo' },
      { label: 'Storage', value: 'Resealable Oxygen-Barrier Zipper Pouch' },
    ],
    platforms: {
      Amazon: { price: 449, rating: 4.6, reviewCount: 7100, sentimentScore: 92, positivePercent: 92, negativePercent: 3 },
      Snapdeal: { price: 469, rating: 4.3, reviewCount: 1500, sentimentScore: 85, positivePercent: 85, negativePercent: 7 },
    },
    aiSummary: {
      pros: ['Uniform large size without broken crumbs', 'Crunchy sweet natural taste', 'Resealable bag maintains freshness'],
      cons: ['Store in refrigerator during humid monsoon season'],
      sentimentBreakdown: { positive: 91, neutral: 6, negative: 3 },
      verdict: 'Premium dry fruit staple delivering crunch and wholesome vitality.',
      aspects: [{ aspect: 'Kernel Crispness', sentiment: 'Positive', score: 95 }, { aspect: 'Nutrient Value', sentiment: 'Positive', score: 94 }],
    },
  },
];

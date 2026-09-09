import { Product } from '../../types';
import kurtiProductImg from '../../assets/images/kurti_product_image_1788865143302.jpg';
import shirtProductImg from '../../assets/images/shirt_product_image_1788865161902.jpg';
import ethnicKurtiImg from '../../assets/images/ethnic_kurti_image_1788865173700.jpg';

export const ALL_PRODUCTS: Product[] = [
  {
    "id": "prod-kurti-01",
    "title": "Biba Women Embroidered Pure Cotton Straight Kurti",
    "brand": "Biba",
    "category": "Fashion & Footwear",
    "price": 1499,
    "originalPrice": 2999,
    "rating": 4.7,
    "reviewCount": 6840,
    "image": kurtiProductImg,
    "description": "Handcrafted pure cotton straight-cut ethnic kurti featuring intricate floral embroidery on neckline and side slits. Benchmark customer sentiment across Myntra, Amazon, Nykaa, and Meesho.",
    "platforms": {
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 3420,
        "sentimentScore": 88,
        "price": 1499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 99
      },
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 2150,
        "sentimentScore": 84,
        "price": 1549,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 780,
        "sentimentScore": 89,
        "price": 1499,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 100
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 490,
        "sentimentScore": 76,
        "price": 1299,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 89
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 220,
        "sentimentScore": 72,
        "price": 1349,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 88
      }
    },
    "aiSummary": {
      "pros": [
        "100% breathable pure cotton ideal for tropical climates and everyday wear",
        "Neat chikankari floral thread embroidery with zero fraying after machine wash",
        "True to size fit with flattering side slits and comfortable armholes"
      ],
      "cons": [
        "Gentle wash recommended for the first cycle to preserve delicate thread work",
        "Slightly sheer in direct sunlight; best paired with a light camisole"
      ],
      "sentimentBreakdown": {
        "positive": 88,
        "neutral": 8,
        "negative": 4
      },
      "verdict": "A top-rated ethnic apparel staple with standout fabric comfort, elegant embroidery, and unmatched cross-marketplace price-to-quality parity.",
      "aspects": [
        {
          "aspect": "Fabric & Breathability",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Embroidery & Stitching",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Color Fastness & Wash Durability",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Fit & Sizing Accuracy",
          "sentiment": "Positive",
          "score": 92
        }
      ]
    }
  },
  {
    "id": "prod-shirt-01",
    "title": "Tommy Hilfiger Men Classic Oxford Cotton Casual Shirt",
    "brand": "Tommy Hilfiger",
    "category": "Fashion & Footwear",
    "price": 2999,
    "originalPrice": 5999,
    "rating": 4.6,
    "reviewCount": 5120,
    "image": shirtProductImg,
    "description": "Timeless long-sleeve oxford cotton button-down shirt with fine weave, buttoned cuffs, and embroidered chest flag logo. High customer sentiment across verified e-commerce marketplaces.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 2560,
        "sentimentScore": 82,
        "price": 2999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 1640,
        "sentimentScore": 85,
        "price": 2999,
        "deliverySpeed": "2 Days",
        "authenticityRating": 99
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 520,
        "sentimentScore": 81,
        "price": 3199,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 98
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 400,
        "sentimentScore": 71,
        "price": 2799,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 89
      }
    },
    "aiSummary": {
      "pros": [
        "Premium combed Oxford cotton fabric that gets softer with every wash",
        "Structured button-down collar stays sharp without drooping throughout workdays",
        "Authentic stitching with reinforced buttons and tailored slim-fit silhouette"
      ],
      "cons": [
        "Requires steam ironing for crisp formal presentation",
        "Arms can feel slightly long for shorter torso builds"
      ],
      "sentimentBreakdown": {
        "positive": 84,
        "neutral": 11,
        "negative": 5
      },
      "verdict": "Benchmark casual and smart-casual shirt with exceptional weave density, reliable authenticity, and enduring color retention.",
      "aspects": [
        {
          "aspect": "Fabric Quality & Weave",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Collar & Cuff Structure",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Fit & Cut",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 94
        }
      ]
    }
  },
  {
    "id": "prod-kurti-02",
    "title": "Libas Women Festive Floral Printed Anarkali Kurti",
    "brand": "Libas",
    "category": "Fashion & Footwear",
    "price": 1899,
    "originalPrice": 3799,
    "rating": 4.5,
    "reviewCount": 4320,
    "image": ethnicKurtiImg,
    "description": "Flared festive pure cotton Anarkali kurti with traditional block-print gold accents, round neckline, and flowing 3/4 sleeves. Verified customer reviews across fashion marketplaces.",
    "platforms": {
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 2400,
        "sentimentScore": 83,
        "price": 1899,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 1280,
        "sentimentScore": 80,
        "price": 1949,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 420,
        "sentimentScore": 84,
        "price": 1899,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 220,
        "sentimentScore": 73,
        "price": 1649,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 87
      }
    },
    "aiSummary": {
      "pros": [
        "Generous flared Anarkali silhouette offering graceful drape and movement",
        "Rich colorfast gold foil and botanical prints that withstand gentle laundering",
        "Skin-friendly pure cotton lining ensuring itch-free festive wear"
      ],
      "cons": [
        "Ankle length may require modest heeled footwear for petite heights",
        "Cold dry-clean or gentle handwash advised for gold foil preservation"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 12,
        "negative": 5
      },
      "verdict": "Delivers festive ethnic grandeur with the comfort of everyday breathable cotton at an accessible marketplace price point.",
      "aspects": [
        {
          "aspect": "Silhouette & Flare",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Print & Foil Quality",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Comfort & Lining",
          "sentiment": "Positive",
          "score": 94
        }
      ]
    }
  },
  {
    "id": "prod-001",
    "title": "Sony WH-1000XM5 Wireless ANC Headphones",
    "brand": "Sony",
    "category": "Audio & Acoustics",
    "price": 29990,
    "originalPrice": 34990,
    "rating": 4.7,
    "reviewCount": 3840,
    "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Sony. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 1920,
        "sentimentScore": 75,
        "price": 29990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 576,
        "sentimentScore": 77,
        "price": 30211,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 768,
        "sentimentScore": 74,
        "price": 29491,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 307,
        "sentimentScore": 63,
        "price": 25844,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 269,
        "sentimentScore": 65,
        "price": 27593,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Sony",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 19,
        "negative": 6
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 86
        }
      ]
    }
  },
  {
    "id": "prod-002",
    "title": "Apple AirPods Pro (2nd Gen) with MagSafe Case USB-C",
    "brand": "Apple",
    "category": "Audio & Acoustics",
    "price": 24900,
    "originalPrice": 26900,
    "rating": 4.8,
    "reviewCount": 9420,
    "image": "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Apple. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 4710,
        "sentimentScore": 82,
        "price": 24900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 1413,
        "sentimentScore": 84,
        "price": 25510,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 1884,
        "sentimentScore": 81,
        "price": 24948,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 754,
        "sentimentScore": 70,
        "price": 21659,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 659,
        "sentimentScore": 72,
        "price": 22129,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Apple",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 82,
        "neutral": 16,
        "negative": 2
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 84
        }
      ]
    }
  },
  {
    "id": "prod-003",
    "title": "Bose QuietComfort Ultra Noise Cancelling Headphones",
    "brand": "Bose",
    "category": "Audio & Acoustics",
    "price": 35900,
    "originalPrice": 39900,
    "rating": 4.6,
    "reviewCount": 1820,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Bose. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 910,
        "sentimentScore": 77,
        "price": 35900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 273,
        "sentimentScore": 79,
        "price": 35256,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 364,
        "sentimentScore": 76,
        "price": 36162,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 146,
        "sentimentScore": 65,
        "price": 31243,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 127,
        "sentimentScore": 67,
        "price": 31687,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Bose",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 16,
        "negative": 7
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 82
        }
      ]
    }
  },
  {
    "id": "prod-004",
    "title": "Sennheiser Momentum 4 Wireless Audiophile Headphones",
    "brand": "Sennheiser",
    "category": "Audio & Acoustics",
    "price": 27990,
    "originalPrice": 34990,
    "rating": 4.6,
    "reviewCount": 1450,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Sennheiser. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 725,
        "sentimentScore": 84,
        "price": 27990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 218,
        "sentimentScore": 86,
        "price": 28765,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 290,
        "sentimentScore": 83,
        "price": 27906,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 116,
        "sentimentScore": 72,
        "price": 24706,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 102,
        "sentimentScore": 74,
        "price": 25851,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Sennheiser",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 84,
        "neutral": 10,
        "negative": 6
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Mixed",
          "score": 78
        }
      ]
    }
  },
  {
    "id": "prod-005",
    "title": "boAt Nirvana Ion ANC True Wireless Earbuds",
    "brand": "boAt",
    "category": "Audio & Acoustics",
    "price": 2499,
    "originalPrice": 9990,
    "rating": 4.3,
    "reviewCount": 14200,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by boAt. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 7100,
        "sentimentScore": 77,
        "price": 2499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 2130,
        "sentimentScore": 79,
        "price": 2502,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 2840,
        "sentimentScore": 76,
        "price": 2453,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 1136,
        "sentimentScore": 65,
        "price": 2246,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 994,
        "sentimentScore": 67,
        "price": 2318,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from boAt",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 18,
        "negative": 5
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 95
        }
      ]
    }
  },
  {
    "id": "prod-006",
    "title": "OnePlus Buds Pro 2 with Dynaudio Dual Drivers",
    "brand": "OnePlus",
    "category": "Audio & Acoustics",
    "price": 9999,
    "originalPrice": 11999,
    "rating": 4.5,
    "reviewCount": 3200,
    "image": "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by OnePlus. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 1600,
        "sentimentScore": 88,
        "price": 9999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 480,
        "sentimentScore": 90,
        "price": 10153,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 640,
        "sentimentScore": 87,
        "price": 10188,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 256,
        "sentimentScore": 76,
        "price": 8734,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 224,
        "sentimentScore": 78,
        "price": 9117,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from OnePlus",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 88,
        "neutral": 6,
        "negative": 6
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 89
        }
      ]
    }
  },
  {
    "id": "prod-007",
    "title": "JBL Flip 6 Portable Waterproof Bluetooth Speaker",
    "brand": "JBL",
    "category": "Audio & Acoustics",
    "price": 9999,
    "originalPrice": 13999,
    "rating": 4.7,
    "reviewCount": 6540,
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by JBL. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 3270,
        "sentimentScore": 86,
        "price": 9999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 981,
        "sentimentScore": 88,
        "price": 10202,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 1308,
        "sentimentScore": 85,
        "price": 9817,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 523,
        "sentimentScore": 74,
        "price": 8601,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 458,
        "sentimentScore": 76,
        "price": 9042,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from JBL",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 86,
        "neutral": 8,
        "negative": 6
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 83
        }
      ]
    }
  },
  {
    "id": "prod-008",
    "title": "Marshall Stanmore III Bluetooth Home Speaker",
    "brand": "Marshall",
    "category": "Audio & Acoustics",
    "price": 31999,
    "originalPrice": 34999,
    "rating": 4.8,
    "reviewCount": 920,
    "image": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Marshall. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 460,
        "sentimentScore": 89,
        "price": 31999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 138,
        "sentimentScore": 91,
        "price": 33323,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 184,
        "sentimentScore": 88,
        "price": 31580,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 74,
        "sentimentScore": 77,
        "price": 27475,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 64,
        "sentimentScore": 79,
        "price": 28302,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Marshall",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 4,
        "negative": 7
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Mixed",
          "score": 77
        }
      ]
    }
  },
  {
    "id": "prod-009",
    "title": "Nothing Ear (2) Hi-Res Audio Dual Chamber Earbuds",
    "brand": "Nothing",
    "category": "Audio & Acoustics",
    "price": 7999,
    "originalPrice": 9999,
    "rating": 4.4,
    "reviewCount": 2400,
    "image": "https://images.unsplash.com/photo-1590658006821-04f4008d5717?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Nothing. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 1200,
        "sentimentScore": 87,
        "price": 7999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 360,
        "sentimentScore": 89,
        "price": 8441,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 480,
        "sentimentScore": 86,
        "price": 8142,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 192,
        "sentimentScore": 75,
        "price": 7171,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 168,
        "sentimentScore": 77,
        "price": 7406,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Nothing",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 87,
        "neutral": 6,
        "negative": 7
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Mixed",
          "score": 75
        }
      ]
    }
  },
  {
    "id": "prod-010",
    "title": "Sony WF-1000XM5 True Wireless Earbuds",
    "brand": "Sony",
    "category": "Audio & Acoustics",
    "price": 23990,
    "originalPrice": 29990,
    "rating": 4.6,
    "reviewCount": 1980,
    "image": "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Sony. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 990,
        "sentimentScore": 84,
        "price": 23990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 297,
        "sentimentScore": 86,
        "price": 24432,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 396,
        "sentimentScore": 83,
        "price": 23572,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 158,
        "sentimentScore": 72,
        "price": 20979,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 139,
        "sentimentScore": 74,
        "price": 21965,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Sony",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 84,
        "neutral": 9,
        "negative": 7
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 94
        }
      ]
    }
  },
  {
    "id": "prod-011",
    "title": "Realme Buds Air 5 Pro with RealBoost Dual Drivers",
    "brand": "Realme",
    "category": "Audio & Acoustics",
    "price": 4499,
    "originalPrice": 7999,
    "rating": 4.4,
    "reviewCount": 5200,
    "image": "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Realme. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 2600,
        "sentimentScore": 88,
        "price": 4499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 780,
        "sentimentScore": 90,
        "price": 4731,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 1040,
        "sentimentScore": 87,
        "price": 4373,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 416,
        "sentimentScore": 76,
        "price": 3858,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 364,
        "sentimentScore": 78,
        "price": 4129,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Realme",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 88,
        "neutral": 4,
        "negative": 8
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 88
        }
      ]
    }
  },
  {
    "id": "prod-012",
    "title": "Jabra Elite 8 Active Rugged Earbuds",
    "brand": "Jabra",
    "category": "Audio & Acoustics",
    "price": 17999,
    "originalPrice": 21999,
    "rating": 4.5,
    "reviewCount": 880,
    "image": "https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Jabra. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 440,
        "sentimentScore": 89,
        "price": 17999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 132,
        "sentimentScore": 91,
        "price": 17679,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 176,
        "sentimentScore": 88,
        "price": 17590,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 70,
        "sentimentScore": 77,
        "price": 15846,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 62,
        "sentimentScore": 79,
        "price": 16273,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Jabra",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 3,
        "negative": 8
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 87
        }
      ]
    }
  },
  {
    "id": "prod-013",
    "title": "Anker Soundcore Space One ANC Headphones",
    "brand": "Anker",
    "category": "Audio & Acoustics",
    "price": 7999,
    "originalPrice": 10999,
    "rating": 4.5,
    "reviewCount": 3100,
    "image": "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Anker. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 1550,
        "sentimentScore": 89,
        "price": 7999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 465,
        "sentimentScore": 91,
        "price": 7961,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 620,
        "sentimentScore": 88,
        "price": 7925,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 248,
        "sentimentScore": 77,
        "price": 7155,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 217,
        "sentimentScore": 79,
        "price": 7099,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Anker",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 9,
        "negative": 2
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 91
        }
      ]
    }
  },
  {
    "id": "prod-014",
    "title": "Sony SRS-XE300 X-Series Wireless Speaker",
    "brand": "Sony",
    "category": "Audio & Acoustics",
    "price": 14990,
    "originalPrice": 19990,
    "rating": 4.4,
    "reviewCount": 1100,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Sony. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 550,
        "sentimentScore": 77,
        "price": 14990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 165,
        "sentimentScore": 79,
        "price": 15119,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 220,
        "sentimentScore": 76,
        "price": 14849,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 88,
        "sentimentScore": 65,
        "price": 13167,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 77,
        "sentimentScore": 67,
        "price": 13212,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Sony",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 19,
        "negative": 4
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-015",
    "title": "Marshall Major IV Wireless On-Ear Headphones",
    "brand": "Marshall",
    "category": "Audio & Acoustics",
    "price": 11999,
    "originalPrice": 14999,
    "rating": 4.7,
    "reviewCount": 3600,
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Marshall. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 1800,
        "sentimentScore": 90,
        "price": 11999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 540,
        "sentimentScore": 92,
        "price": 12431,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 720,
        "sentimentScore": 89,
        "price": 12147,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 288,
        "sentimentScore": 78,
        "price": 10349,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 252,
        "sentimentScore": 80,
        "price": 11271,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Marshall",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 90,
        "neutral": 6,
        "negative": 4
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 91
        }
      ]
    }
  },
  {
    "id": "prod-016",
    "title": "Audio-Technica ATH-M50xBT2 Studio Monitor Headphones",
    "brand": "Audio-Technica",
    "category": "Audio & Acoustics",
    "price": 18500,
    "originalPrice": 21500,
    "rating": 4.8,
    "reviewCount": 2900,
    "image": "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Audio-Technica. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 1450,
        "sentimentScore": 80,
        "price": 18500,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 435,
        "sentimentScore": 82,
        "price": 18209,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 580,
        "sentimentScore": 79,
        "price": 19017,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 232,
        "sentimentScore": 68,
        "price": 16289,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 203,
        "sentimentScore": 70,
        "price": 16825,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Audio-Technica",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 16,
        "negative": 4
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 90
        }
      ]
    }
  },
  {
    "id": "prod-017",
    "title": "Bose SoundLink Flex Waterproof Bluetooth Speaker",
    "brand": "Bose",
    "category": "Audio & Acoustics",
    "price": 14900,
    "originalPrice": 16900,
    "rating": 4.8,
    "reviewCount": 4120,
    "image": "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Bose. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 2060,
        "sentimentScore": 82,
        "price": 14900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 618,
        "sentimentScore": 84,
        "price": 15757,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 824,
        "sentimentScore": 81,
        "price": 15232,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 330,
        "sentimentScore": 70,
        "price": 12909,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 288,
        "sentimentScore": 72,
        "price": 13735,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Bose",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 82,
        "neutral": 12,
        "negative": 6
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Mixed",
          "score": 75
        }
      ]
    }
  },
  {
    "id": "prod-018",
    "title": "boAt Rockerz 550 Over-Ear Wireless Headphones",
    "brand": "boAt",
    "category": "Audio & Acoustics",
    "price": 1799,
    "originalPrice": 4999,
    "rating": 4.2,
    "reviewCount": 22400,
    "image": "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by boAt. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.2,
        "reviewCount": 11200,
        "sentimentScore": 83,
        "price": 1799,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.3,
        "reviewCount": 3360,
        "sentimentScore": 85,
        "price": 1778,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.2,
        "reviewCount": 4480,
        "sentimentScore": 82,
        "price": 1770,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.8,
        "reviewCount": 1792,
        "sentimentScore": 71,
        "price": 1608,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 3.9,
        "reviewCount": 1568,
        "sentimentScore": 73,
        "price": 1623,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from boAt",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 14,
        "negative": 3
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 87
        }
      ]
    }
  },
  {
    "id": "prod-019",
    "title": "Beats Studio Pro Premium Wireless ANC Headphones",
    "brand": "Beats",
    "category": "Audio & Acoustics",
    "price": 34900,
    "originalPrice": 37900,
    "rating": 4.5,
    "reviewCount": 1200,
    "image": "https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Beats. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 600,
        "sentimentScore": 92,
        "price": 34900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 180,
        "sentimentScore": 94,
        "price": 35095,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 240,
        "sentimentScore": 91,
        "price": 34883,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 96,
        "sentimentScore": 80,
        "price": 30675,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 84,
        "sentimentScore": 82,
        "price": 31063,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Beats",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 92,
        "neutral": 6,
        "negative": 2
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Mixed",
          "score": 75
        }
      ]
    }
  },
  {
    "id": "prod-020",
    "title": "Tribit StormBox Micro 2 Portable Rugged Speaker",
    "brand": "Tribit",
    "category": "Audio & Acoustics",
    "price": 4599,
    "originalPrice": 6999,
    "rating": 4.6,
    "reviewCount": 2800,
    "image": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Audio & Acoustics product by Tribit. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 1400,
        "sentimentScore": 80,
        "price": 4599,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 420,
        "sentimentScore": 82,
        "price": 4736,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 560,
        "sentimentScore": 79,
        "price": 4526,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 224,
        "sentimentScore": 68,
        "price": 4028,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 196,
        "sentimentScore": 70,
        "price": 4147,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sound quality praised by over 80% of buyers",
        "Reliable build quality from Tribit",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 11,
        "negative": 9
      },
      "verdict": "Highly recommended in the Audio & Acoustics segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sound Quality",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Noise Cancellation",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Bass Depth",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Comfort & Fit",
          "sentiment": "Positive",
          "score": 81
        }
      ]
    }
  },
  {
    "id": "prod-021",
    "title": "Apple iPhone 15 Pro Max (256GB, Titanium Natural)",
    "brand": "Apple",
    "category": "Smartphones & Mobile",
    "price": 149900,
    "originalPrice": 159900,
    "rating": 4.8,
    "reviewCount": 5200,
    "image": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Apple. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 2600,
        "sentimentScore": 90,
        "price": 149900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 780,
        "sentimentScore": 92,
        "price": 152552,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 1040,
        "sentimentScore": 89,
        "price": 146750,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 416,
        "sentimentScore": 78,
        "price": 132036,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 364,
        "sentimentScore": 80,
        "price": 135074,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Apple",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 90,
        "neutral": 7,
        "negative": 3
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Mixed",
          "score": 76
        }
      ]
    }
  },
  {
    "id": "prod-022",
    "title": "Samsung Galaxy S24 Ultra 5G AI Phone (512GB)",
    "brand": "Samsung",
    "category": "Smartphones & Mobile",
    "price": 139999,
    "originalPrice": 144999,
    "rating": 4.7,
    "reviewCount": 4800,
    "image": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Samsung. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 2400,
        "sentimentScore": 83,
        "price": 139999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 720,
        "sentimentScore": 85,
        "price": 139924,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 960,
        "sentimentScore": 82,
        "price": 138936,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 384,
        "sentimentScore": 71,
        "price": 119609,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 336,
        "sentimentScore": 73,
        "price": 124646,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Samsung",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 9,
        "negative": 8
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 94
        }
      ]
    }
  },
  {
    "id": "prod-023",
    "title": "Google Pixel 8 Pro (128GB, Obsidian Black)",
    "brand": "Google",
    "category": "Smartphones & Mobile",
    "price": 89999,
    "originalPrice": 106999,
    "rating": 4.5,
    "reviewCount": 2900,
    "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Google. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 1450,
        "sentimentScore": 86,
        "price": 89999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 435,
        "sentimentScore": 88,
        "price": 90207,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 580,
        "sentimentScore": 85,
        "price": 88431,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 232,
        "sentimentScore": 74,
        "price": 77290,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 203,
        "sentimentScore": 76,
        "price": 84236,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Google",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 86,
        "neutral": 9,
        "negative": 5
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 86
        }
      ]
    }
  },
  {
    "id": "prod-024",
    "title": "OnePlus 12 5G (Silky Black, 16GB RAM, 512GB)",
    "brand": "OnePlus",
    "category": "Smartphones & Mobile",
    "price": 64999,
    "originalPrice": 69999,
    "rating": 4.6,
    "reviewCount": 4210,
    "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by OnePlus. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 2105,
        "sentimentScore": 82,
        "price": 64999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 632,
        "sentimentScore": 84,
        "price": 64234,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 842,
        "sentimentScore": 81,
        "price": 66545,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 337,
        "sentimentScore": 70,
        "price": 58484,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 295,
        "sentimentScore": 72,
        "price": 59656,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from OnePlus",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 82,
        "neutral": 14,
        "negative": 4
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 85
        }
      ]
    }
  },
  {
    "id": "prod-025",
    "title": "Xiaomi 14 Ultra with Leica Quad Camera 5G",
    "brand": "Xiaomi",
    "category": "Smartphones & Mobile",
    "price": 99999,
    "originalPrice": 109999,
    "rating": 4.6,
    "reviewCount": 1450,
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Xiaomi. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 725,
        "sentimentScore": 85,
        "price": 99999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 218,
        "sentimentScore": 87,
        "price": 101397,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 290,
        "sentimentScore": 84,
        "price": 97421,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 116,
        "sentimentScore": 73,
        "price": 85500,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 102,
        "sentimentScore": 75,
        "price": 93319,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Xiaomi",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 85,
        "neutral": 6,
        "negative": 9
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 90
        }
      ]
    }
  },
  {
    "id": "prod-026",
    "title": "Vivo X100 Pro 5G with Zeiss APO Telephoto",
    "brand": "Vivo",
    "category": "Smartphones & Mobile",
    "price": 89999,
    "originalPrice": 96999,
    "rating": 4.7,
    "reviewCount": 1980,
    "image": "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Vivo. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 990,
        "sentimentScore": 81,
        "price": 89999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 297,
        "sentimentScore": 83,
        "price": 93190,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 396,
        "sentimentScore": 80,
        "price": 87361,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 158,
        "sentimentScore": 69,
        "price": 77501,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 139,
        "sentimentScore": 71,
        "price": 83922,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Vivo",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 81,
        "neutral": 13,
        "negative": 6
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 84
        }
      ]
    }
  },
  {
    "id": "prod-027",
    "title": "iQOO 12 5G Snapdragon 8 Gen 3 Flagship",
    "brand": "iQOO",
    "category": "Smartphones & Mobile",
    "price": 52999,
    "originalPrice": 59999,
    "rating": 4.6,
    "reviewCount": 3600,
    "image": "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by iQOO. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 1800,
        "sentimentScore": 78,
        "price": 52999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 540,
        "sentimentScore": 80,
        "price": 55507,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 720,
        "sentimentScore": 77,
        "price": 53324,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 288,
        "sentimentScore": 66,
        "price": 45222,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 252,
        "sentimentScore": 68,
        "price": 49388,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from iQOO",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 78,
        "neutral": 19,
        "negative": 3
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 88
        }
      ]
    }
  },
  {
    "id": "prod-028",
    "title": "Nothing Phone (2) with Glyph Interface 256GB",
    "brand": "Nothing",
    "category": "Smartphones & Mobile",
    "price": 36999,
    "originalPrice": 49999,
    "rating": 4.4,
    "reviewCount": 3800,
    "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Nothing. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 1900,
        "sentimentScore": 82,
        "price": 36999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 570,
        "sentimentScore": 84,
        "price": 36893,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 760,
        "sentimentScore": 81,
        "price": 36038,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 304,
        "sentimentScore": 70,
        "price": 32828,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 266,
        "sentimentScore": 72,
        "price": 32750,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Nothing",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 82,
        "neutral": 12,
        "negative": 6
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Mixed",
          "score": 77
        }
      ]
    }
  },
  {
    "id": "prod-029",
    "title": "Samsung Galaxy Z Fold 5 5G Foldable Phone",
    "brand": "Samsung",
    "category": "Smartphones & Mobile",
    "price": 154999,
    "originalPrice": 164999,
    "rating": 4.6,
    "reviewCount": 1800,
    "image": "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Samsung. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 900,
        "sentimentScore": 89,
        "price": 154999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 270,
        "sentimentScore": 91,
        "price": 163846,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 360,
        "sentimentScore": 88,
        "price": 155571,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 144,
        "sentimentScore": 77,
        "price": 133836,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 126,
        "sentimentScore": 79,
        "price": 139044,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Samsung",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 2,
        "negative": 9
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 90
        }
      ]
    }
  },
  {
    "id": "prod-030",
    "title": "Motorola Edge 50 Ultra Pantone Certified 5G",
    "brand": "Motorola",
    "category": "Smartphones & Mobile",
    "price": 54999,
    "originalPrice": 64999,
    "rating": 4.5,
    "reviewCount": 2100,
    "image": "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Motorola. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 1050,
        "sentimentScore": 89,
        "price": 54999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 315,
        "sentimentScore": 91,
        "price": 54779,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 420,
        "sentimentScore": 88,
        "price": 53453,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 168,
        "sentimentScore": 77,
        "price": 48100,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 147,
        "sentimentScore": 79,
        "price": 50401,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Motorola",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 9,
        "negative": 2
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 94
        }
      ]
    }
  },
  {
    "id": "prod-031",
    "title": "Apple iPhone 15 (128GB, Blue Ceramic Shield)",
    "brand": "Apple",
    "category": "Smartphones & Mobile",
    "price": 69900,
    "originalPrice": 79900,
    "rating": 4.7,
    "reviewCount": 12400,
    "image": "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Apple. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 6200,
        "sentimentScore": 88,
        "price": 69900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 1860,
        "sentimentScore": 90,
        "price": 73158,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 2480,
        "sentimentScore": 87,
        "price": 71708,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 992,
        "sentimentScore": 76,
        "price": 62256,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 868,
        "sentimentScore": 78,
        "price": 64164,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Apple",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 88,
        "neutral": 8,
        "negative": 4
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 89
        }
      ]
    }
  },
  {
    "id": "prod-032",
    "title": "Redmi Note 13 Pro+ 5G (Fusion Purple, 256GB)",
    "brand": "Xiaomi",
    "category": "Smartphones & Mobile",
    "price": 29999,
    "originalPrice": 33999,
    "rating": 4.3,
    "reviewCount": 7600,
    "image": "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Xiaomi. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 3800,
        "sentimentScore": 78,
        "price": 29999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 1140,
        "sentimentScore": 80,
        "price": 30815,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 1520,
        "sentimentScore": 77,
        "price": 29639,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 608,
        "sentimentScore": 66,
        "price": 26627,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 532,
        "sentimentScore": 68,
        "price": 26601,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Xiaomi",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 78,
        "neutral": 20,
        "negative": 2
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 91
        }
      ]
    }
  },
  {
    "id": "prod-033",
    "title": "Realme 12 Pro+ 5G with Periscope Portrait Lens",
    "brand": "Realme",
    "category": "Smartphones & Mobile",
    "price": 28999,
    "originalPrice": 34999,
    "rating": 4.4,
    "reviewCount": 4900,
    "image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Realme. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 2450,
        "sentimentScore": 88,
        "price": 28999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 735,
        "sentimentScore": 90,
        "price": 28738,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 980,
        "sentimentScore": 87,
        "price": 29027,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 392,
        "sentimentScore": 76,
        "price": 24834,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 343,
        "sentimentScore": 78,
        "price": 27098,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Realme",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 88,
        "neutral": 8,
        "negative": 4
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 88
        }
      ]
    }
  },
  {
    "id": "prod-034",
    "title": "POCO F6 5G with Snapdragon 8s Gen 3",
    "brand": "POCO",
    "category": "Smartphones & Mobile",
    "price": 29999,
    "originalPrice": 33999,
    "rating": 4.5,
    "reviewCount": 3100,
    "image": "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by POCO. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 1550,
        "sentimentScore": 81,
        "price": 29999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 465,
        "sentimentScore": 83,
        "price": 31691,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 620,
        "sentimentScore": 80,
        "price": 29106,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 248,
        "sentimentScore": 69,
        "price": 26601,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 217,
        "sentimentScore": 71,
        "price": 26876,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from POCO",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 81,
        "neutral": 13,
        "negative": 6
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-035",
    "title": "OnePlus Nord 4 5G All-Metal Unibody",
    "brand": "OnePlus",
    "category": "Smartphones & Mobile",
    "price": 32999,
    "originalPrice": 34999,
    "rating": 4.5,
    "reviewCount": 3800,
    "image": "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by OnePlus. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 1900,
        "sentimentScore": 89,
        "price": 32999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 570,
        "sentimentScore": 91,
        "price": 32474,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 760,
        "sentimentScore": 88,
        "price": 33000,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 304,
        "sentimentScore": 77,
        "price": 29223,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 266,
        "sentimentScore": 79,
        "price": 30561,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from OnePlus",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 3,
        "negative": 8
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 80
        }
      ]
    }
  },
  {
    "id": "prod-036",
    "title": "Google Pixel 8a (128GB, Bay Blue AI Phone)",
    "brand": "Google",
    "category": "Smartphones & Mobile",
    "price": 49999,
    "originalPrice": 52999,
    "rating": 4.5,
    "reviewCount": 2200,
    "image": "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Google. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 1100,
        "sentimentScore": 87,
        "price": 49999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 330,
        "sentimentScore": 89,
        "price": 49934,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 440,
        "sentimentScore": 86,
        "price": 48964,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 176,
        "sentimentScore": 75,
        "price": 43963,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 154,
        "sentimentScore": 77,
        "price": 46038,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Google",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 87,
        "neutral": 7,
        "negative": 6
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 88
        }
      ]
    }
  },
  {
    "id": "prod-037",
    "title": "Samsung Galaxy A55 5G Metal Frame Knox Vault",
    "brand": "Samsung",
    "category": "Smartphones & Mobile",
    "price": 39999,
    "originalPrice": 42999,
    "rating": 4.4,
    "reviewCount": 4100,
    "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Samsung. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 2050,
        "sentimentScore": 80,
        "price": 39999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 615,
        "sentimentScore": 82,
        "price": 40210,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 820,
        "sentimentScore": 79,
        "price": 41087,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 328,
        "sentimentScore": 68,
        "price": 34601,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 287,
        "sentimentScore": 70,
        "price": 36393,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Samsung",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 18,
        "negative": 2
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Mixed",
          "score": 76
        }
      ]
    }
  },
  {
    "id": "prod-038",
    "title": "Infinix GT 20 Pro Gaming Phone Cyber Mecha",
    "brand": "Infinix",
    "category": "Smartphones & Mobile",
    "price": 24999,
    "originalPrice": 27999,
    "rating": 4.3,
    "reviewCount": 3300,
    "image": "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Infinix. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 1650,
        "sentimentScore": 92,
        "price": 24999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 495,
        "sentimentScore": 94,
        "price": 26345,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 660,
        "sentimentScore": 91,
        "price": 25314,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 264,
        "sentimentScore": 80,
        "price": 21828,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 231,
        "sentimentScore": 82,
        "price": 22759,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Infinix",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 92,
        "neutral": 6,
        "negative": 2
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Mixed",
          "score": 78
        }
      ]
    }
  },
  {
    "id": "prod-039",
    "title": "Honor 200 Pro 5G with Studio Portrait AI",
    "brand": "Honor",
    "category": "Smartphones & Mobile",
    "price": 57999,
    "originalPrice": 64999,
    "rating": 4.6,
    "reviewCount": 1500,
    "image": "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Honor. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 750,
        "sentimentScore": 80,
        "price": 57999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 225,
        "sentimentScore": 82,
        "price": 57483,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 300,
        "sentimentScore": 79,
        "price": 56684,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 120,
        "sentimentScore": 68,
        "price": 50038,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 105,
        "sentimentScore": 70,
        "price": 53875,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Honor",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 14,
        "negative": 6
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 95
        }
      ]
    }
  },
  {
    "id": "prod-040",
    "title": "Asus ROG Phone 8 Pro 165Hz AMOLED Gaming Phone",
    "brand": "Asus",
    "category": "Smartphones & Mobile",
    "price": 94999,
    "originalPrice": 99999,
    "rating": 4.7,
    "reviewCount": 1100,
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smartphones & Mobile product by Asus. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 550,
        "sentimentScore": 84,
        "price": 94999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 165,
        "sentimentScore": 86,
        "price": 94631,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 220,
        "sentimentScore": 83,
        "price": 95333,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 88,
        "sentimentScore": 72,
        "price": 81911,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 77,
        "sentimentScore": 74,
        "price": 83898,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional display brightness praised by over 80% of buyers",
        "Reliable build quality from Asus",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 84,
        "neutral": 8,
        "negative": 8
      },
      "verdict": "Highly recommended in the Smartphones & Mobile segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Camera Clarity",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Processor Speed",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Build Ergonomics",
          "sentiment": "Positive",
          "score": 83
        }
      ]
    }
  },
  {
    "id": "prod-041",
    "title": "Minimalist 10% Vitamin C Face Serum for Brightening",
    "brand": "Minimalist",
    "category": "Beauty & Skincare",
    "price": 664,
    "originalPrice": 699,
    "rating": 4.5,
    "reviewCount": 7120,
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Minimalist. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 3560,
        "sentimentScore": 85,
        "price": 664,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 1068,
        "sentimentScore": 87,
        "price": 692,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 1424,
        "sentimentScore": 84,
        "price": 658,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 570,
        "sentimentScore": 73,
        "price": 582,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 498,
        "sentimentScore": 75,
        "price": 603,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Minimalist",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 85,
        "neutral": 11,
        "negative": 4
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 87
        }
      ]
    }
  },
  {
    "id": "prod-042",
    "title": "Cosrx Advanced Snail 96 Mucin Power Essence (100ml)",
    "brand": "Cosrx",
    "category": "Beauty & Skincare",
    "price": 1199,
    "originalPrice": 1450,
    "rating": 4.8,
    "reviewCount": 18400,
    "image": "https://images.unsplash.com/photo-1608248597359-001099238318?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Cosrx. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 9200,
        "sentimentScore": 87,
        "price": 1199,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 2760,
        "sentimentScore": 89,
        "price": 1229,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 3680,
        "sentimentScore": 86,
        "price": 1221,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 1472,
        "sentimentScore": 75,
        "price": 1073,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 1288,
        "sentimentScore": 77,
        "price": 1125,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Cosrx",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 87,
        "neutral": 7,
        "negative": 6
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Mixed",
          "score": 77
        }
      ]
    }
  },
  {
    "id": "prod-043",
    "title": "The Ordinary Niacinamide 10% + Zinc 1% Oil Control Serum",
    "brand": "The Ordinary",
    "category": "Beauty & Skincare",
    "price": 600,
    "originalPrice": 650,
    "rating": 4.6,
    "reviewCount": 22100,
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by The Ordinary. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 11050,
        "sentimentScore": 88,
        "price": 600,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 3315,
        "sentimentScore": 90,
        "price": 621,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 4420,
        "sentimentScore": 87,
        "price": 591,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 1768,
        "sentimentScore": 76,
        "price": 532,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 1547,
        "sentimentScore": 78,
        "price": 564,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from The Ordinary",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 88,
        "neutral": 6,
        "negative": 6
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 91
        }
      ]
    }
  },
  {
    "id": "prod-044",
    "title": "Laneige Lip Sleeping Mask Berry Intense Hydration (20g)",
    "brand": "Laneige",
    "category": "Beauty & Skincare",
    "price": 1200,
    "originalPrice": 1400,
    "rating": 4.8,
    "reviewCount": 12300,
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Laneige. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 6150,
        "sentimentScore": 77,
        "price": 1200,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 1845,
        "sentimentScore": 79,
        "price": 1199,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 2460,
        "sentimentScore": 76,
        "price": 1180,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 984,
        "sentimentScore": 65,
        "price": 1065,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 861,
        "sentimentScore": 67,
        "price": 1102,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Laneige",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 19,
        "negative": 4
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 94
        }
      ]
    }
  },
  {
    "id": "prod-045",
    "title": "CeraVe Moisturizing Cream with 3 Essential Ceramides",
    "brand": "CeraVe",
    "category": "Beauty & Skincare",
    "price": 1150,
    "originalPrice": 1350,
    "rating": 4.7,
    "reviewCount": 16200,
    "image": "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by CeraVe. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 8100,
        "sentimentScore": 76,
        "price": 1150,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 2430,
        "sentimentScore": 78,
        "price": 1187,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 3240,
        "sentimentScore": 75,
        "price": 1151,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 1296,
        "sentimentScore": 64,
        "price": 1010,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 1134,
        "sentimentScore": 66,
        "price": 1046,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from CeraVe",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 76,
        "neutral": 17,
        "negative": 7
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 95
        }
      ]
    }
  },
  {
    "id": "prod-046",
    "title": "Kama Ayurveda Kumkumadi Miraculous Beauty Ayurvedic Fluid",
    "brand": "Kama Ayurveda",
    "category": "Beauty & Skincare",
    "price": 3495,
    "originalPrice": 3995,
    "rating": 4.6,
    "reviewCount": 3100,
    "image": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Kama Ayurveda. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 1550,
        "sentimentScore": 76,
        "price": 3495,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 465,
        "sentimentScore": 78,
        "price": 3431,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 620,
        "sentimentScore": 75,
        "price": 3505,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 248,
        "sentimentScore": 64,
        "price": 2985,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 217,
        "sentimentScore": 66,
        "price": 3174,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Kama Ayurveda",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 76,
        "neutral": 22,
        "negative": 2
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 91
        }
      ]
    }
  },
  {
    "id": "prod-047",
    "title": "Dot & Key Watermelon Cooling Sunscreen SPF 50 PA+++",
    "brand": "Dot & Key",
    "category": "Beauty & Skincare",
    "price": 445,
    "originalPrice": 495,
    "rating": 4.4,
    "reviewCount": 8900,
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Dot & Key. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 4450,
        "sentimentScore": 86,
        "price": 445,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 1335,
        "sentimentScore": 88,
        "price": 439,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 1780,
        "sentimentScore": 85,
        "price": 450,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 712,
        "sentimentScore": 74,
        "price": 387,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 623,
        "sentimentScore": 76,
        "price": 415,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Dot & Key",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 86,
        "neutral": 9,
        "negative": 5
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 83
        }
      ]
    }
  },
  {
    "id": "prod-048",
    "title": "Plum Green Tea Alcohol-Free Toner with Glycolic Acid",
    "brand": "Plum",
    "category": "Beauty & Skincare",
    "price": 335,
    "originalPrice": 390,
    "rating": 4.3,
    "reviewCount": 9800,
    "image": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Plum. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 4900,
        "sentimentScore": 77,
        "price": 335,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 1470,
        "sentimentScore": 79,
        "price": 330,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 1960,
        "sentimentScore": 76,
        "price": 325,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 784,
        "sentimentScore": 65,
        "price": 301,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 686,
        "sentimentScore": 67,
        "price": 301,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Plum",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 17,
        "negative": 6
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 83
        }
      ]
    }
  },
  {
    "id": "prod-049",
    "title": "Forest Essentials Delicate Facial Cleanser Kashmiri Saffron",
    "brand": "Forest Essentials",
    "category": "Beauty & Skincare",
    "price": 1550,
    "originalPrice": 1695,
    "rating": 4.7,
    "reviewCount": 2900,
    "image": "https://images.unsplash.com/photo-1556228852-6d35a585d566?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Forest Essentials. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 1450,
        "sentimentScore": 90,
        "price": 1550,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 435,
        "sentimentScore": 92,
        "price": 1601,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 580,
        "sentimentScore": 89,
        "price": 1585,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 232,
        "sentimentScore": 78,
        "price": 1351,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 203,
        "sentimentScore": 80,
        "price": 1454,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Forest Essentials",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 90,
        "neutral": 6,
        "negative": 4
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 88
        }
      ]
    }
  },
  {
    "id": "prod-050",
    "title": "Cetaphil Gentle Skin Cleanser for Sensitive Skin (500ml)",
    "brand": "Cetaphil",
    "category": "Beauty & Skincare",
    "price": 899,
    "originalPrice": 1049,
    "rating": 4.7,
    "reviewCount": 24500,
    "image": "https://images.unsplash.com/photo-1556228722-d0b5b034731b?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Cetaphil. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 12250,
        "sentimentScore": 75,
        "price": 899,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 3675,
        "sentimentScore": 77,
        "price": 941,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 4900,
        "sentimentScore": 74,
        "price": 883,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 1960,
        "sentimentScore": 63,
        "price": 789,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 1715,
        "sentimentScore": 65,
        "price": 840,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Cetaphil",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 20,
        "negative": 5
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 82
        }
      ]
    }
  },
  {
    "id": "prod-051",
    "title": "Neutrogena Hydro Boost Water Gel Hyaluronic Acid (50g)",
    "brand": "Neutrogena",
    "category": "Beauty & Skincare",
    "price": 855,
    "originalPrice": 1100,
    "rating": 4.6,
    "reviewCount": 14200,
    "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Neutrogena. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 7100,
        "sentimentScore": 82,
        "price": 855,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 2130,
        "sentimentScore": 84,
        "price": 899,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 2840,
        "sentimentScore": 81,
        "price": 850,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 1136,
        "sentimentScore": 70,
        "price": 745,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 994,
        "sentimentScore": 72,
        "price": 778,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Neutrogena",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 82,
        "neutral": 16,
        "negative": 2
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 93
        }
      ]
    }
  },
  {
    "id": "prod-052",
    "title": "Dior Sauvage Eau de Parfum Long Lasting Perfume (100ml)",
    "brand": "Dior",
    "category": "Beauty & Skincare",
    "price": 12500,
    "originalPrice": 13500,
    "rating": 4.9,
    "reviewCount": 4800,
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Dior. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 2400,
        "sentimentScore": 92,
        "price": 12500,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 720,
        "sentimentScore": 94,
        "price": 12854,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 960,
        "sentimentScore": 91,
        "price": 12529,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 384,
        "sentimentScore": 80,
        "price": 10988,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 336,
        "sentimentScore": 82,
        "price": 11544,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Dior",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 92,
        "neutral": 1,
        "negative": 7
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 82
        }
      ]
    }
  },
  {
    "id": "prod-053",
    "title": "Biotique Bio Kelp Protein Shampoo for Hair Falling",
    "brand": "Biotique",
    "category": "Beauty & Skincare",
    "price": 299,
    "originalPrice": 450,
    "rating": 4.2,
    "reviewCount": 18900,
    "image": "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Biotique. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.2,
        "reviewCount": 9450,
        "sentimentScore": 80,
        "price": 299,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.3,
        "reviewCount": 2835,
        "sentimentScore": 82,
        "price": 307,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.2,
        "reviewCount": 3780,
        "sentimentScore": 79,
        "price": 296,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.8,
        "reviewCount": 1512,
        "sentimentScore": 68,
        "price": 262,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 3.9,
        "reviewCount": 1323,
        "sentimentScore": 70,
        "price": 266,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Biotique",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 15,
        "negative": 5
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 82
        }
      ]
    }
  },
  {
    "id": "prod-054",
    "title": "L'Oreal Paris Glycolic Bright Dark Circle Eye Serum",
    "brand": "L'Oreal",
    "category": "Beauty & Skincare",
    "price": 699,
    "originalPrice": 899,
    "rating": 4.3,
    "reviewCount": 6200,
    "image": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by L'Oreal. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 3100,
        "sentimentScore": 92,
        "price": 699,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 930,
        "sentimentScore": 94,
        "price": 696,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 1240,
        "sentimentScore": 91,
        "price": 690,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 496,
        "sentimentScore": 80,
        "price": 596,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 434,
        "sentimentScore": 82,
        "price": 654,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from L'Oreal",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 92,
        "neutral": 0,
        "negative": 8
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 85
        }
      ]
    }
  },
  {
    "id": "prod-055",
    "title": "Maybelline Superstay Matte Ink Liquid Lipstick Pioneer",
    "brand": "Maybelline",
    "category": "Beauty & Skincare",
    "price": 499,
    "originalPrice": 699,
    "rating": 4.5,
    "reviewCount": 31000,
    "image": "https://images.unsplash.com/photo-1599732497805-4c07a04910cf?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Maybelline. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 15500,
        "sentimentScore": 84,
        "price": 499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 4650,
        "sentimentScore": 86,
        "price": 495,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 6200,
        "sentimentScore": 83,
        "price": 499,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 2480,
        "sentimentScore": 72,
        "price": 444,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 2170,
        "sentimentScore": 74,
        "price": 451,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Maybelline",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 84,
        "neutral": 13,
        "negative": 3
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 88
        }
      ]
    }
  },
  {
    "id": "prod-056",
    "title": "Derma Co 1% Hyaluronic Sunscreen Aqua Gel (50g)",
    "brand": "The Derma Co",
    "category": "Beauty & Skincare",
    "price": 449,
    "originalPrice": 499,
    "rating": 4.5,
    "reviewCount": 11200,
    "image": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by The Derma Co. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 5600,
        "sentimentScore": 83,
        "price": 449,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 1680,
        "sentimentScore": 85,
        "price": 462,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 2240,
        "sentimentScore": 82,
        "price": 450,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 896,
        "sentimentScore": 71,
        "price": 391,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 784,
        "sentimentScore": 73,
        "price": 402,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from The Derma Co",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 13,
        "negative": 4
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 96
        }
      ]
    }
  },
  {
    "id": "prod-057",
    "title": "Bioderma Sensibio H2O Micellar Cleansing Water (500ml)",
    "brand": "Bioderma",
    "category": "Beauty & Skincare",
    "price": 1395,
    "originalPrice": 1690,
    "rating": 4.8,
    "reviewCount": 7600,
    "image": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Bioderma. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 3800,
        "sentimentScore": 77,
        "price": 1395,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 1140,
        "sentimentScore": 79,
        "price": 1439,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 1520,
        "sentimentScore": 76,
        "price": 1396,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 608,
        "sentimentScore": 65,
        "price": 1235,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 532,
        "sentimentScore": 67,
        "price": 1279,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Bioderma",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 16,
        "negative": 7
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 89
        }
      ]
    }
  },
  {
    "id": "prod-058",
    "title": "Innisfree Super Volcanic Pore Clay Mask 2X (100ml)",
    "brand": "Innisfree",
    "category": "Beauty & Skincare",
    "price": 1050,
    "originalPrice": 1150,
    "rating": 4.6,
    "reviewCount": 5400,
    "image": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Innisfree. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 2700,
        "sentimentScore": 88,
        "price": 1050,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 810,
        "sentimentScore": 90,
        "price": 1101,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 1080,
        "sentimentScore": 87,
        "price": 1080,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 432,
        "sentimentScore": 76,
        "price": 926,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 378,
        "sentimentScore": 78,
        "price": 964,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Innisfree",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 88,
        "neutral": 6,
        "negative": 6
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 90
        }
      ]
    }
  },
  {
    "id": "prod-059",
    "title": "Clinique Moisture Surge 100H Auto-Replenishing Hydrator",
    "brand": "Clinique",
    "category": "Beauty & Skincare",
    "price": 2950,
    "originalPrice": 3200,
    "rating": 4.7,
    "reviewCount": 6800,
    "image": "https://images.unsplash.com/photo-1567928815116-281b6716a444?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by Clinique. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 3400,
        "sentimentScore": 80,
        "price": 2950,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 1020,
        "sentimentScore": 82,
        "price": 3054,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 1360,
        "sentimentScore": 79,
        "price": 2903,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 544,
        "sentimentScore": 68,
        "price": 2549,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 476,
        "sentimentScore": 70,
        "price": 2682,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from Clinique",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 11,
        "negative": 9
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Mixed",
          "score": 77
        }
      ]
    }
  },
  {
    "id": "prod-060",
    "title": "Yves Saint Laurent Black Opium Eau De Parfum (90ml)",
    "brand": "YSL",
    "category": "Beauty & Skincare",
    "price": 11900,
    "originalPrice": 12900,
    "rating": 4.8,
    "reviewCount": 3400,
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Beauty & Skincare product by YSL. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 1700,
        "sentimentScore": 89,
        "price": 11900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 510,
        "sentimentScore": 91,
        "price": 12216,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 680,
        "sentimentScore": 88,
        "price": 12139,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 272,
        "sentimentScore": 77,
        "price": 10339,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 238,
        "sentimentScore": 79,
        "price": 11138,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional hyperpigmentation fading praised by over 80% of buyers",
        "Reliable build quality from YSL",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 5,
        "negative": 6
      },
      "verdict": "Highly recommended in the Beauty & Skincare segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Hyperpigmentation Fading",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Texture & Absorption",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Skin Safety",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Hydration Retention",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Value for Money",
          "sentiment": "Positive",
          "score": 80
        }
      ]
    }
  },
  {
    "id": "prod-061",
    "title": "Apple MacBook Air M3 (13.6-inch Liquid Retina, 16GB)",
    "brand": "Apple",
    "category": "Laptops & Computing",
    "price": 124900,
    "originalPrice": 134900,
    "rating": 4.9,
    "reviewCount": 4200,
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Apple. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 2100,
        "sentimentScore": 77,
        "price": 124900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 630,
        "sentimentScore": 79,
        "price": 128429,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 840,
        "sentimentScore": 76,
        "price": 126599,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 336,
        "sentimentScore": 65,
        "price": 110797,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 294,
        "sentimentScore": 67,
        "price": 111358,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Apple",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 21,
        "negative": 2
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 92
        }
      ]
    }
  },
  {
    "id": "prod-062",
    "title": "Dell XPS 13 Plus Intel Core Ultra 7 32GB RAM",
    "brand": "Dell",
    "category": "Laptops & Computing",
    "price": 169990,
    "originalPrice": 189990,
    "rating": 4.6,
    "reviewCount": 1600,
    "image": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Dell. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 800,
        "sentimentScore": 78,
        "price": 169990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 240,
        "sentimentScore": 80,
        "price": 174036,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 320,
        "sentimentScore": 77,
        "price": 166239,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 128,
        "sentimentScore": 66,
        "price": 145017,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 112,
        "sentimentScore": 68,
        "price": 150350,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Dell",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 78,
        "neutral": 14,
        "negative": 8
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 87
        }
      ]
    }
  },
  {
    "id": "prod-063",
    "title": "Lenovo ThinkPad X1 Carbon Gen 12 Carbon Fiber",
    "brand": "Lenovo",
    "category": "Laptops & Computing",
    "price": 184990,
    "originalPrice": 209990,
    "rating": 4.7,
    "reviewCount": 1100,
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Lenovo. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 550,
        "sentimentScore": 91,
        "price": 184990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 165,
        "sentimentScore": 93,
        "price": 183250,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 220,
        "sentimentScore": 90,
        "price": 181082,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 88,
        "sentimentScore": 79,
        "price": 160262,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 77,
        "sentimentScore": 81,
        "price": 171683,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Lenovo",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 91,
        "neutral": 4,
        "negative": 5
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 96
        }
      ]
    }
  },
  {
    "id": "prod-064",
    "title": "Asus ROG Zephyrus G14 OLED RTX 4070 Gaming Laptop",
    "brand": "Asus",
    "category": "Laptops & Computing",
    "price": 174990,
    "originalPrice": 194990,
    "rating": 4.7,
    "reviewCount": 2100,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Asus. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 1050,
        "sentimentScore": 75,
        "price": 174990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 315,
        "sentimentScore": 77,
        "price": 182172,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 420,
        "sentimentScore": 74,
        "price": 170808,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 168,
        "sentimentScore": 63,
        "price": 156353,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 147,
        "sentimentScore": 65,
        "price": 161743,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Asus",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 19,
        "negative": 6
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 83
        }
      ]
    }
  },
  {
    "id": "prod-065",
    "title": "HP Spectre x360 2-in-1 OLED Touch Laptop 14-inch",
    "brand": "HP",
    "category": "Laptops & Computing",
    "price": 154999,
    "originalPrice": 172999,
    "rating": 4.6,
    "reviewCount": 1350,
    "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by HP. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 675,
        "sentimentScore": 84,
        "price": 154999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 203,
        "sentimentScore": 86,
        "price": 159077,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 270,
        "sentimentScore": 83,
        "price": 159446,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 108,
        "sentimentScore": 72,
        "price": 137621,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 95,
        "sentimentScore": 74,
        "price": 138548,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from HP",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 84,
        "neutral": 8,
        "negative": 8
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 86
        }
      ]
    }
  },
  {
    "id": "prod-066",
    "title": "Acer Swift Go 14 OLED Intel Core Ultra 5",
    "brand": "Acer",
    "category": "Laptops & Computing",
    "price": 69990,
    "originalPrice": 84990,
    "rating": 4.4,
    "reviewCount": 3400,
    "image": "https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Acer. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 1700,
        "sentimentScore": 80,
        "price": 69990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 510,
        "sentimentScore": 82,
        "price": 71398,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 680,
        "sentimentScore": 79,
        "price": 70564,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 272,
        "sentimentScore": 68,
        "price": 61201,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 238,
        "sentimentScore": 70,
        "price": 65781,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Acer",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 17,
        "negative": 3
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 85
        }
      ]
    }
  },
  {
    "id": "prod-067",
    "title": "LG Gram 16 Featherlight Ultra-Thin Laptop (1.19kg)",
    "brand": "LG",
    "category": "Laptops & Computing",
    "price": 119990,
    "originalPrice": 139990,
    "rating": 4.5,
    "reviewCount": 980,
    "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by LG. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 490,
        "sentimentScore": 91,
        "price": 119990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 147,
        "sentimentScore": 93,
        "price": 123083,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 196,
        "sentimentScore": 90,
        "price": 117635,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 78,
        "sentimentScore": 79,
        "price": 107243,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 69,
        "sentimentScore": 81,
        "price": 108345,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from LG",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 91,
        "neutral": 5,
        "negative": 4
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 81
        }
      ]
    }
  },
  {
    "id": "prod-068",
    "title": "Apple MacBook Pro 14-inch M3 Pro (18GB, 512GB)",
    "brand": "Apple",
    "category": "Laptops & Computing",
    "price": 199900,
    "originalPrice": 209900,
    "rating": 4.9,
    "reviewCount": 3100,
    "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Apple. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 1550,
        "sentimentScore": 79,
        "price": 199900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 465,
        "sentimentScore": 81,
        "price": 206669,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 620,
        "sentimentScore": 78,
        "price": 200694,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 248,
        "sentimentScore": 67,
        "price": 171344,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 217,
        "sentimentScore": 69,
        "price": 186189,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Apple",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 79,
        "neutral": 19,
        "negative": 2
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 87
        }
      ]
    }
  },
  {
    "id": "prod-069",
    "title": "Asus Zenbook 14 OLED Slim AI Laptop (Intel Core Ultra 7)",
    "brand": "Asus",
    "category": "Laptops & Computing",
    "price": 99990,
    "originalPrice": 114990,
    "rating": 4.6,
    "reviewCount": 2400,
    "image": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Asus. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 1200,
        "sentimentScore": 75,
        "price": 99990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 360,
        "sentimentScore": 77,
        "price": 102788,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 480,
        "sentimentScore": 74,
        "price": 98897,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 192,
        "sentimentScore": 63,
        "price": 86312,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 168,
        "sentimentScore": 65,
        "price": 88383,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Asus",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 18,
        "negative": 7
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 96
        }
      ]
    }
  },
  {
    "id": "prod-070",
    "title": "HP Victus Gaming Laptop AMD Ryzen 7 RTX 4060",
    "brand": "HP",
    "category": "Laptops & Computing",
    "price": 82990,
    "originalPrice": 96990,
    "rating": 4.4,
    "reviewCount": 4600,
    "image": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by HP. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 2300,
        "sentimentScore": 75,
        "price": 82990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 690,
        "sentimentScore": 77,
        "price": 83970,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 920,
        "sentimentScore": 74,
        "price": 81947,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 368,
        "sentimentScore": 63,
        "price": 70658,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 322,
        "sentimentScore": 65,
        "price": 73450,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from HP",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 23,
        "negative": 2
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 84
        }
      ]
    }
  },
  {
    "id": "prod-071",
    "title": "Lenovo Legion Pro 5i Gen 9 RTX 4070 Gaming Beast",
    "brand": "Lenovo",
    "category": "Laptops & Computing",
    "price": 159990,
    "originalPrice": 179990,
    "rating": 4.7,
    "reviewCount": 1800,
    "image": "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Lenovo. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 900,
        "sentimentScore": 83,
        "price": 159990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 270,
        "sentimentScore": 85,
        "price": 168590,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 360,
        "sentimentScore": 82,
        "price": 159812,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 144,
        "sentimentScore": 71,
        "price": 139694,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 126,
        "sentimentScore": 73,
        "price": 142464,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Lenovo",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 10,
        "negative": 7
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 90
        }
      ]
    }
  },
  {
    "id": "prod-072",
    "title": "Dell Inspiron 15 3520 120Hz Anti-Glare Laptop",
    "brand": "Dell",
    "category": "Laptops & Computing",
    "price": 44990,
    "originalPrice": 54990,
    "rating": 4.2,
    "reviewCount": 8900,
    "image": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Dell. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.2,
        "reviewCount": 4450,
        "sentimentScore": 85,
        "price": 44990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.3,
        "reviewCount": 1335,
        "sentimentScore": 87,
        "price": 46359,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.2,
        "reviewCount": 1780,
        "sentimentScore": 84,
        "price": 46013,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.8,
        "reviewCount": 712,
        "sentimentScore": 73,
        "price": 40238,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 3.9,
        "reviewCount": 623,
        "sentimentScore": 75,
        "price": 42036,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Dell",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 85,
        "neutral": 12,
        "negative": 3
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Mixed",
          "score": 79
        }
      ]
    }
  },
  {
    "id": "prod-073",
    "title": "Samsung Galaxy Book4 Pro 360 Dynamic AMOLED 2X",
    "brand": "Samsung",
    "category": "Laptops & Computing",
    "price": 163990,
    "originalPrice": 179990,
    "rating": 4.6,
    "reviewCount": 750,
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Samsung. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 375,
        "sentimentScore": 75,
        "price": 163990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 113,
        "sentimentScore": 77,
        "price": 169373,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 150,
        "sentimentScore": 74,
        "price": 163035,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 60,
        "sentimentScore": 63,
        "price": 144586,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 53,
        "sentimentScore": 65,
        "price": 152911,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Samsung",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 21,
        "negative": 4
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Mixed",
          "score": 78
        }
      ]
    }
  },
  {
    "id": "prod-074",
    "title": "MSI Katana 15 AI Gaming Laptop RTX 4050 144Hz",
    "brand": "MSI",
    "category": "Laptops & Computing",
    "price": 78990,
    "originalPrice": 92990,
    "rating": 4.3,
    "reviewCount": 2900,
    "image": "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by MSI. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 1450,
        "sentimentScore": 82,
        "price": 78990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 435,
        "sentimentScore": 84,
        "price": 81502,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 580,
        "sentimentScore": 81,
        "price": 79649,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 232,
        "sentimentScore": 70,
        "price": 67359,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 203,
        "sentimentScore": 72,
        "price": 69647,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from MSI",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 82,
        "neutral": 16,
        "negative": 2
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 91
        }
      ]
    }
  },
  {
    "id": "prod-075",
    "title": "Microsoft Surface Laptop 7 Snapdragon X Elite CoPilot+",
    "brand": "Microsoft",
    "category": "Laptops & Computing",
    "price": 116999,
    "originalPrice": 124999,
    "rating": 4.7,
    "reviewCount": 1200,
    "image": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Microsoft. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 600,
        "sentimentScore": 76,
        "price": 116999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 180,
        "sentimentScore": 78,
        "price": 118503,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 240,
        "sentimentScore": 75,
        "price": 119359,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 96,
        "sentimentScore": 64,
        "price": 101937,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 84,
        "sentimentScore": 66,
        "price": 107841,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Microsoft",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 76,
        "neutral": 15,
        "negative": 9
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 93
        }
      ]
    }
  },
  {
    "id": "prod-076",
    "title": "Acer Predator Helios 16 Mini-LED 240Hz RTX 4080",
    "brand": "Acer",
    "category": "Laptops & Computing",
    "price": 219990,
    "originalPrice": 249990,
    "rating": 4.8,
    "reviewCount": 620,
    "image": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Acer. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 310,
        "sentimentScore": 87,
        "price": 219990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 93,
        "sentimentScore": 89,
        "price": 232159,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 124,
        "sentimentScore": 86,
        "price": 222686,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 50,
        "sentimentScore": 75,
        "price": 195098,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 43,
        "sentimentScore": 77,
        "price": 200270,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Acer",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 87,
        "neutral": 11,
        "negative": 2
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 86
        }
      ]
    }
  },
  {
    "id": "prod-077",
    "title": "Asus TUF Gaming A15 Military Grade Ryzen 7 RTX 4050",
    "brand": "Asus",
    "category": "Laptops & Computing",
    "price": 74990,
    "originalPrice": 89990,
    "rating": 4.4,
    "reviewCount": 6800,
    "image": "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Asus. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 3400,
        "sentimentScore": 78,
        "price": 74990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 1020,
        "sentimentScore": 80,
        "price": 77230,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 1360,
        "sentimentScore": 77,
        "price": 77193,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 544,
        "sentimentScore": 66,
        "price": 66904,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 476,
        "sentimentScore": 68,
        "price": 66635,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Asus",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 78,
        "neutral": 14,
        "negative": 8
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 80
        }
      ]
    }
  },
  {
    "id": "prod-078",
    "title": "Xiaomi Notebook Pro 120G 2.5K 120Hz Laptop",
    "brand": "Xiaomi",
    "category": "Laptops & Computing",
    "price": 59999,
    "originalPrice": 72999,
    "rating": 4.3,
    "reviewCount": 3400,
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Xiaomi. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 1700,
        "sentimentScore": 78,
        "price": 59999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 510,
        "sentimentScore": 80,
        "price": 61409,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 680,
        "sentimentScore": 77,
        "price": 60543,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 272,
        "sentimentScore": 66,
        "price": 53764,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 238,
        "sentimentScore": 68,
        "price": 55590,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Xiaomi",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 78,
        "neutral": 20,
        "negative": 2
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-079",
    "title": "Apple Mac Studio M2 Max (32GB Unified Memory)",
    "brand": "Apple",
    "category": "Laptops & Computing",
    "price": 209900,
    "originalPrice": 219900,
    "rating": 4.9,
    "reviewCount": 950,
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Apple. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 475,
        "sentimentScore": 84,
        "price": 209900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 143,
        "sentimentScore": 86,
        "price": 217039,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 190,
        "sentimentScore": 83,
        "price": 212031,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 76,
        "sentimentScore": 72,
        "price": 178694,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 67,
        "sentimentScore": 74,
        "price": 188475,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Apple",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 84,
        "neutral": 12,
        "negative": 4
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 94
        }
      ]
    }
  },
  {
    "id": "prod-080",
    "title": "Dell Alienware m16 R2 QHD+ 240Hz Gaming Laptop",
    "brand": "Dell",
    "category": "Laptops & Computing",
    "price": 189990,
    "originalPrice": 219990,
    "rating": 4.7,
    "reviewCount": 880,
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Laptops & Computing product by Dell. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 440,
        "sentimentScore": 77,
        "price": 189990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 132,
        "sentimentScore": 79,
        "price": 196328,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 176,
        "sentimentScore": 76,
        "price": 184440,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 70,
        "sentimentScore": 65,
        "price": 161675,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 62,
        "sentimentScore": 67,
        "price": 171756,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional cpu/gpu performance praised by over 80% of buyers",
        "Reliable build quality from Dell",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 18,
        "negative": 5
      },
      "verdict": "Highly recommended in the Laptops & Computing segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "CPU/GPU Performance",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Thermal Cooling",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Display Accuracy",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Battery Longevity",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Keyboard & Trackpad",
          "sentiment": "Positive",
          "score": 86
        }
      ]
    }
  },
  {
    "id": "prod-081",
    "title": "Apple Watch Ultra 2 GPS + Cellular 49mm Titanium",
    "brand": "Apple",
    "category": "Smart Wearables & Watches",
    "price": 89900,
    "originalPrice": 89900,
    "rating": 4.9,
    "reviewCount": 3400,
    "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Apple. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 1700,
        "sentimentScore": 75,
        "price": 89900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 510,
        "sentimentScore": 77,
        "price": 88982,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 680,
        "sentimentScore": 74,
        "price": 87916,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 272,
        "sentimentScore": 63,
        "price": 80599,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 238,
        "sentimentScore": 65,
        "price": 82395,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Apple",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 21,
        "negative": 4
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 96
        }
      ]
    }
  },
  {
    "id": "prod-082",
    "title": "Samsung Galaxy Watch 6 Classic Rotating Bezel 47mm",
    "brand": "Samsung",
    "category": "Smart Wearables & Watches",
    "price": 34999,
    "originalPrice": 39999,
    "rating": 4.6,
    "reviewCount": 3100,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Samsung. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 1550,
        "sentimentScore": 87,
        "price": 34999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 465,
        "sentimentScore": 89,
        "price": 34706,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 620,
        "sentimentScore": 86,
        "price": 34853,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 248,
        "sentimentScore": 75,
        "price": 31239,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 217,
        "sentimentScore": 77,
        "price": 31806,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Samsung",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 87,
        "neutral": 4,
        "negative": 9
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Mixed",
          "score": 75
        }
      ]
    }
  },
  {
    "id": "prod-083",
    "title": "Garmin Forerunner 265 AMOLED Running Smartwatch",
    "brand": "Garmin",
    "category": "Smart Wearables & Watches",
    "price": 50490,
    "originalPrice": 54990,
    "rating": 4.8,
    "reviewCount": 1400,
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Garmin. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 700,
        "sentimentScore": 76,
        "price": 50490,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 210,
        "sentimentScore": 78,
        "price": 53141,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 280,
        "sentimentScore": 75,
        "price": 49337,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 112,
        "sentimentScore": 64,
        "price": 44053,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 98,
        "sentimentScore": 66,
        "price": 46302,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Garmin",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 76,
        "neutral": 15,
        "negative": 9
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 80
        }
      ]
    }
  },
  {
    "id": "prod-084",
    "title": "Amazfit GTR 4 Dual-Band GPS Smartwatch with Alexa",
    "brand": "Amazfit",
    "category": "Smart Wearables & Watches",
    "price": 14999,
    "originalPrice": 19999,
    "rating": 4.5,
    "reviewCount": 5200,
    "image": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Amazfit. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 2600,
        "sentimentScore": 79,
        "price": 14999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 780,
        "sentimentScore": 81,
        "price": 14702,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 1040,
        "sentimentScore": 78,
        "price": 15291,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 416,
        "sentimentScore": 67,
        "price": 13415,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 364,
        "sentimentScore": 69,
        "price": 14074,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Amazfit",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 79,
        "neutral": 12,
        "negative": 9
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 88
        }
      ]
    }
  },
  {
    "id": "prod-085",
    "title": "Noise ColorFit Pro 5 AMOLED 1.85-inch Smartwatch",
    "brand": "Noise",
    "category": "Smart Wearables & Watches",
    "price": 3499,
    "originalPrice": 7999,
    "rating": 4.3,
    "reviewCount": 19800,
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Noise. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 9900,
        "sentimentScore": 77,
        "price": 3499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 2970,
        "sentimentScore": 79,
        "price": 3649,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 3960,
        "sentimentScore": 76,
        "price": 3517,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 1584,
        "sentimentScore": 65,
        "price": 2998,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 1386,
        "sentimentScore": 67,
        "price": 3117,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Noise",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 15,
        "negative": 8
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 81
        }
      ]
    }
  },
  {
    "id": "prod-086",
    "title": "Fire-Boltt Invincible Plus AMOLED Bluetooth Calling",
    "brand": "Fire-Boltt",
    "category": "Smart Wearables & Watches",
    "price": 3999,
    "originalPrice": 12999,
    "rating": 4.2,
    "reviewCount": 16400,
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Fire-Boltt. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.2,
        "reviewCount": 8200,
        "sentimentScore": 85,
        "price": 3999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.3,
        "reviewCount": 2460,
        "sentimentScore": 87,
        "price": 4238,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.2,
        "reviewCount": 3280,
        "sentimentScore": 84,
        "price": 4117,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.8,
        "reviewCount": 1312,
        "sentimentScore": 73,
        "price": 3431,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 3.9,
        "reviewCount": 1148,
        "sentimentScore": 75,
        "price": 3681,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Fire-Boltt",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 85,
        "neutral": 12,
        "negative": 3
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Mixed",
          "score": 79
        }
      ]
    }
  },
  {
    "id": "prod-087",
    "title": "Fitbit Charge 6 Fitness Tracker with Google Apps",
    "brand": "Fitbit",
    "category": "Smart Wearables & Watches",
    "price": 14999,
    "originalPrice": 16999,
    "rating": 4.4,
    "reviewCount": 2900,
    "image": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Fitbit. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 1450,
        "sentimentScore": 77,
        "price": 14999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 435,
        "sentimentScore": 79,
        "price": 15061,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 580,
        "sentimentScore": 76,
        "price": 15213,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 232,
        "sentimentScore": 65,
        "price": 12982,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 203,
        "sentimentScore": 67,
        "price": 13702,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Fitbit",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 15,
        "negative": 8
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 87
        }
      ]
    }
  },
  {
    "id": "prod-088",
    "title": "Apple Watch Series 9 GPS 45mm Midnight Aluminum",
    "brand": "Apple",
    "category": "Smart Wearables & Watches",
    "price": 44900,
    "originalPrice": 44900,
    "rating": 4.8,
    "reviewCount": 8900,
    "image": "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Apple. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 4450,
        "sentimentScore": 82,
        "price": 44900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 1335,
        "sentimentScore": 84,
        "price": 44857,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 1780,
        "sentimentScore": 81,
        "price": 45675,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 712,
        "sentimentScore": 70,
        "price": 39967,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 623,
        "sentimentScore": 72,
        "price": 42172,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Apple",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 82,
        "neutral": 15,
        "negative": 3
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 84
        }
      ]
    }
  },
  {
    "id": "prod-089",
    "title": "OnePlus Watch 2 Dual Engine Architecture Wear OS",
    "brand": "OnePlus",
    "category": "Smart Wearables & Watches",
    "price": 21999,
    "originalPrice": 24999,
    "rating": 4.6,
    "reviewCount": 1950,
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by OnePlus. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 975,
        "sentimentScore": 80,
        "price": 21999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 293,
        "sentimentScore": 82,
        "price": 22624,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 390,
        "sentimentScore": 79,
        "price": 21786,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 156,
        "sentimentScore": 68,
        "price": 18884,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 137,
        "sentimentScore": 70,
        "price": 19564,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from OnePlus",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 15,
        "negative": 5
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 92
        }
      ]
    }
  },
  {
    "id": "prod-090",
    "title": "Garmin Fenix 7 Pro Solar Multisport GPS Watch",
    "brand": "Garmin",
    "category": "Smart Wearables & Watches",
    "price": 92990,
    "originalPrice": 102990,
    "rating": 4.9,
    "reviewCount": 880,
    "image": "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Garmin. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 440,
        "sentimentScore": 87,
        "price": 92990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 132,
        "sentimentScore": 89,
        "price": 94185,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 176,
        "sentimentScore": 86,
        "price": 90810,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 70,
        "sentimentScore": 75,
        "price": 79428,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 62,
        "sentimentScore": 77,
        "price": 85244,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Garmin",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 87,
        "neutral": 11,
        "negative": 2
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 90
        }
      ]
    }
  },
  {
    "id": "prod-091",
    "title": "boAt Wave Call 2 Bluetooth Calling Smartwatch",
    "brand": "boAt",
    "category": "Smart Wearables & Watches",
    "price": 1299,
    "originalPrice": 6990,
    "rating": 4.1,
    "reviewCount": 28400,
    "image": "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by boAt. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.1,
        "reviewCount": 14200,
        "sentimentScore": 78,
        "price": 1299,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.2,
        "reviewCount": 4260,
        "sentimentScore": 80,
        "price": 1314,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.1,
        "reviewCount": 5680,
        "sentimentScore": 77,
        "price": 1279,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.7,
        "reviewCount": 2272,
        "sentimentScore": 66,
        "price": 1113,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 3.8,
        "reviewCount": 1988,
        "sentimentScore": 68,
        "price": 1207,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from boAt",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 78,
        "neutral": 14,
        "negative": 8
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 87
        }
      ]
    }
  },
  {
    "id": "prod-092",
    "title": "Fossil Gen 6 Touchscreen Smartwatch Gunmetal",
    "brand": "Fossil",
    "category": "Smart Wearables & Watches",
    "price": 18495,
    "originalPrice": 24995,
    "rating": 4.3,
    "reviewCount": 2100,
    "image": "https://images.unsplash.com/photo-1518131678677-2489e248b111?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Fossil. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 1050,
        "sentimentScore": 83,
        "price": 18495,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 315,
        "sentimentScore": 85,
        "price": 19376,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 420,
        "sentimentScore": 82,
        "price": 18182,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 168,
        "sentimentScore": 71,
        "price": 16147,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 147,
        "sentimentScore": 73,
        "price": 17260,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Fossil",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 10,
        "negative": 7
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Mixed",
          "score": 79
        }
      ]
    }
  },
  {
    "id": "prod-093",
    "title": "Titan Smart Pro AMOLED GPS Temperature Monitor",
    "brand": "Titan",
    "category": "Smart Wearables & Watches",
    "price": 7995,
    "originalPrice": 14995,
    "rating": 4.3,
    "reviewCount": 3800,
    "image": "https://images.unsplash.com/photo-1547996160-71dfabbce5ed?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Titan. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 1900,
        "sentimentScore": 80,
        "price": 7995,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 570,
        "sentimentScore": 82,
        "price": 8362,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 760,
        "sentimentScore": 79,
        "price": 7986,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 304,
        "sentimentScore": 68,
        "price": 6872,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 266,
        "sentimentScore": 70,
        "price": 7316,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Titan",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 15,
        "negative": 5
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Mixed",
          "score": 76
        }
      ]
    }
  },
  {
    "id": "prod-094",
    "title": "Fastrack Reflex Play Plus BT Calling 1.3 AMOLED",
    "brand": "Fastrack",
    "category": "Smart Wearables & Watches",
    "price": 2495,
    "originalPrice": 5995,
    "rating": 4.2,
    "reviewCount": 7600,
    "image": "https://images.unsplash.com/photo-1539874701005-579fefab4002?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Fastrack. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.2,
        "reviewCount": 3800,
        "sentimentScore": 85,
        "price": 2495,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.3,
        "reviewCount": 1140,
        "sentimentScore": 87,
        "price": 2500,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.2,
        "reviewCount": 1520,
        "sentimentScore": 84,
        "price": 2437,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.8,
        "reviewCount": 608,
        "sentimentScore": 73,
        "price": 2221,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 3.9,
        "reviewCount": 532,
        "sentimentScore": 75,
        "price": 2256,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Fastrack",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 85,
        "neutral": 9,
        "negative": 6
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 97
        }
      ]
    }
  },
  {
    "id": "prod-095",
    "title": "Suunto Race Titanium AMOLED GPS Adventure Watch",
    "brand": "Suunto",
    "category": "Smart Wearables & Watches",
    "price": 54999,
    "originalPrice": 59999,
    "rating": 4.7,
    "reviewCount": 450,
    "image": "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Suunto. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 225,
        "sentimentScore": 82,
        "price": 54999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 68,
        "sentimentScore": 84,
        "price": 56667,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 90,
        "sentimentScore": 81,
        "price": 55357,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 36,
        "sentimentScore": 70,
        "price": 49154,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 32,
        "sentimentScore": 72,
        "price": 48982,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Suunto",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 82,
        "neutral": 11,
        "negative": 7
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 84
        }
      ]
    }
  },
  {
    "id": "prod-096",
    "title": "Fitbit Sense 2 Advanced Health Smartwatch EDA Stress",
    "brand": "Fitbit",
    "category": "Smart Wearables & Watches",
    "price": 22999,
    "originalPrice": 24999,
    "rating": 4.3,
    "reviewCount": 1800,
    "image": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Fitbit. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 900,
        "sentimentScore": 88,
        "price": 22999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 270,
        "sentimentScore": 90,
        "price": 23662,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 360,
        "sentimentScore": 87,
        "price": 22335,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 144,
        "sentimentScore": 76,
        "price": 20029,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 126,
        "sentimentScore": 78,
        "price": 21530,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Fitbit",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 88,
        "neutral": 4,
        "negative": 8
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 81
        }
      ]
    }
  },
  {
    "id": "prod-097",
    "title": "Honor Watch GS 3 3D Curved Glass Heart Rate",
    "brand": "Honor",
    "category": "Smart Wearables & Watches",
    "price": 11999,
    "originalPrice": 15999,
    "rating": 4.4,
    "reviewCount": 1200,
    "image": "https://images.unsplash.com/photo-1509741102003-ca64bfe5f069?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Honor. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 600,
        "sentimentScore": 78,
        "price": 11999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 180,
        "sentimentScore": 80,
        "price": 12393,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 240,
        "sentimentScore": 77,
        "price": 11803,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 96,
        "sentimentScore": 66,
        "price": 10543,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 84,
        "sentimentScore": 68,
        "price": 10908,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Honor",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 78,
        "neutral": 20,
        "negative": 2
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 95
        }
      ]
    }
  },
  {
    "id": "prod-098",
    "title": "Amazfit Cheetah Pro Lightweight Running Watch",
    "brand": "Amazfit",
    "category": "Smart Wearables & Watches",
    "price": 21999,
    "originalPrice": 29999,
    "rating": 4.6,
    "reviewCount": 920,
    "image": "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Amazfit. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 460,
        "sentimentScore": 87,
        "price": 21999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 138,
        "sentimentScore": 89,
        "price": 23202,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 184,
        "sentimentScore": 86,
        "price": 22183,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 74,
        "sentimentScore": 75,
        "price": 19545,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 64,
        "sentimentScore": 77,
        "price": 19894,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Amazfit",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 87,
        "neutral": 4,
        "negative": 9
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 93
        }
      ]
    }
  },
  {
    "id": "prod-099",
    "title": "Samsung Galaxy Fit 3 Aluminum Fitness Tracker",
    "brand": "Samsung",
    "category": "Smart Wearables & Watches",
    "price": 4799,
    "originalPrice": 5999,
    "rating": 4.5,
    "reviewCount": 4600,
    "image": "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Samsung. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 2300,
        "sentimentScore": 90,
        "price": 4799,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 690,
        "sentimentScore": 92,
        "price": 5046,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 920,
        "sentimentScore": 89,
        "price": 4661,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 368,
        "sentimentScore": 78,
        "price": 4210,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 322,
        "sentimentScore": 80,
        "price": 4242,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Samsung",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 90,
        "neutral": 2,
        "negative": 8
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 94
        }
      ]
    }
  },
  {
    "id": "prod-100",
    "title": "Polar Vantage V3 Premium GPS Multisport Watch",
    "brand": "Polar",
    "category": "Smart Wearables & Watches",
    "price": 54900,
    "originalPrice": 59900,
    "rating": 4.7,
    "reviewCount": 380,
    "image": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Smart Wearables & Watches product by Polar. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 190,
        "sentimentScore": 80,
        "price": 54900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 57,
        "sentimentScore": 82,
        "price": 56165,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 76,
        "sentimentScore": 79,
        "price": 55734,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 30,
        "sentimentScore": 68,
        "price": 46760,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 27,
        "sentimentScore": 70,
        "price": 48849,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional heart rate & spo2 accuracy praised by over 80% of buyers",
        "Reliable build quality from Polar",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 16,
        "negative": 4
      },
      "verdict": "Highly recommended in the Smart Wearables & Watches segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Heart Rate & SpO2 Accuracy",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Battery Life",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Display Brightness",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Workout Tracking",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Strap Comfort",
          "sentiment": "Positive",
          "score": 93
        }
      ]
    }
  },
  {
    "id": "prod-101",
    "title": "Nike Air Jordan 1 Retro High OG Chicago Lost and Found",
    "brand": "Nike",
    "category": "Fashion & Footwear",
    "price": 16995,
    "originalPrice": 18995,
    "rating": 4.9,
    "reviewCount": 6200,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Nike. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 3100,
        "sentimentScore": 82,
        "price": 16995,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 930,
        "sentimentScore": 84,
        "price": 17055,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 1240,
        "sentimentScore": 81,
        "price": 16999,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 496,
        "sentimentScore": 70,
        "price": 15176,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 434,
        "sentimentScore": 72,
        "price": 14997,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Nike",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 82,
        "neutral": 14,
        "negative": 4
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 95
        }
      ]
    }
  },
  {
    "id": "prod-102",
    "title": "Adidas Ultraboost Light Running Shoes Continental Sole",
    "brand": "Adidas",
    "category": "Fashion & Footwear",
    "price": 14999,
    "originalPrice": 18999,
    "rating": 4.7,
    "reviewCount": 7800,
    "image": "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Adidas. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 3900,
        "sentimentScore": 75,
        "price": 14999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 1170,
        "sentimentScore": 77,
        "price": 14700,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 1560,
        "sentimentScore": 74,
        "price": 14671,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 624,
        "sentimentScore": 63,
        "price": 13355,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 546,
        "sentimentScore": 65,
        "price": 13246,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Adidas",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 19,
        "negative": 6
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 92
        }
      ]
    }
  },
  {
    "id": "prod-103",
    "title": "Puma Velocity Nitro 3 Engineered Mesh Road Running",
    "brand": "Puma",
    "category": "Fashion & Footwear",
    "price": 8499,
    "originalPrice": 10999,
    "rating": 4.6,
    "reviewCount": 3400,
    "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Puma. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 1700,
        "sentimentScore": 75,
        "price": 8499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 510,
        "sentimentScore": 77,
        "price": 8442,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 680,
        "sentimentScore": 74,
        "price": 8487,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 272,
        "sentimentScore": 63,
        "price": 7435,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 238,
        "sentimentScore": 65,
        "price": 7793,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Puma",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 18,
        "negative": 7
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 96
        }
      ]
    }
  },
  {
    "id": "prod-104",
    "title": "New Balance 574 Core Classic Suede Sneakers",
    "brand": "New Balance",
    "category": "Fashion & Footwear",
    "price": 7999,
    "originalPrice": 9999,
    "rating": 4.8,
    "reviewCount": 9100,
    "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by New Balance. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 4550,
        "sentimentScore": 79,
        "price": 7999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 1365,
        "sentimentScore": 81,
        "price": 7873,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 1820,
        "sentimentScore": 78,
        "price": 7988,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 728,
        "sentimentScore": 67,
        "price": 6910,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 637,
        "sentimentScore": 69,
        "price": 7429,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from New Balance",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 79,
        "neutral": 17,
        "negative": 4
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Breathability",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-105",
    "title": "Levi's Men 511 Slim Fit Stretch Denim Jeans",
    "brand": "Levi's",
    "category": "Fashion & Footwear",
    "price": 2499,
    "originalPrice": 3999,
    "rating": 4.4,
    "reviewCount": 5600,
    "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Levi's. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 2800,
        "sentimentScore": 86,
        "price": 2499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 840,
        "sentimentScore": 88,
        "price": 2474,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 1120,
        "sentimentScore": 85,
        "price": 2569,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 448,
        "sentimentScore": 74,
        "price": 2127,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 392,
        "sentimentScore": 76,
        "price": 2260,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Levi's",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 86,
        "neutral": 7,
        "negative": 7
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 96
        }
      ]
    }
  },
  {
    "id": "prod-106",
    "title": "Zara 100% Breathable Pure Linen Relaxed Button-down",
    "brand": "Zara",
    "category": "Fashion & Footwear",
    "price": 3590,
    "originalPrice": 4290,
    "rating": 4.4,
    "reviewCount": 2900,
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Zara. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 1450,
        "sentimentScore": 80,
        "price": 3590,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 435,
        "sentimentScore": 82,
        "price": 3554,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 580,
        "sentimentScore": 79,
        "price": 3516,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 232,
        "sentimentScore": 68,
        "price": 3177,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 203,
        "sentimentScore": 70,
        "price": 3186,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Zara",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 14,
        "negative": 6
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 83
        }
      ]
    }
  },
  {
    "id": "prod-107",
    "title": "Ray-Ban Aviator Classic Green G-15 Sunglasses 58mm",
    "brand": "Ray-Ban",
    "category": "Fashion & Footwear",
    "price": 8990,
    "originalPrice": 10490,
    "rating": 4.8,
    "reviewCount": 8400,
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Ray-Ban. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 4200,
        "sentimentScore": 81,
        "price": 8990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 1260,
        "sentimentScore": 83,
        "price": 9018,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 1680,
        "sentimentScore": 80,
        "price": 8727,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 672,
        "sentimentScore": 69,
        "price": 7872,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 588,
        "sentimentScore": 71,
        "price": 8185,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Ray-Ban",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 81,
        "neutral": 16,
        "negative": 3
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Breathability",
          "sentiment": "Mixed",
          "score": 75
        }
      ]
    }
  },
  {
    "id": "prod-108",
    "title": "Under Armour Tech 2.0 Short-Sleeve Moisture-Wicking Tee",
    "brand": "Under Armour",
    "category": "Fashion & Footwear",
    "price": 1699,
    "originalPrice": 2299,
    "rating": 4.6,
    "reviewCount": 6700,
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Under Armour. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 3350,
        "sentimentScore": 75,
        "price": 1699,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 1005,
        "sentimentScore": 77,
        "price": 1706,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 1340,
        "sentimentScore": 74,
        "price": 1748,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 536,
        "sentimentScore": 63,
        "price": 1469,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 469,
        "sentimentScore": 65,
        "price": 1561,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Under Armour",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 20,
        "negative": 5
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 92
        }
      ]
    }
  },
  {
    "id": "prod-109",
    "title": "Fossil Grant Chronograph Navy Blue Leather Watch",
    "brand": "Fossil",
    "category": "Fashion & Footwear",
    "price": 9495,
    "originalPrice": 13495,
    "rating": 4.7,
    "reviewCount": 11200,
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Fossil. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 5600,
        "sentimentScore": 86,
        "price": 9495,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 1680,
        "sentimentScore": 88,
        "price": 9453,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 2240,
        "sentimentScore": 85,
        "price": 9670,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 896,
        "sentimentScore": 74,
        "price": 8522,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 784,
        "sentimentScore": 76,
        "price": 8509,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Fossil",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 86,
        "neutral": 6,
        "negative": 8
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 91
        }
      ]
    }
  },
  {
    "id": "prod-110",
    "title": "Tommy Hilfiger Men Classic Oxford Cotton Casual Shirt",
    "brand": "Tommy Hilfiger",
    "category": "Fashion & Footwear",
    "price": 3499,
    "originalPrice": 5999,
    "rating": 4.5,
    "reviewCount": 4200,
    "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Tommy Hilfiger. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 2100,
        "sentimentScore": 75,
        "price": 3499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 630,
        "sentimentScore": 77,
        "price": 3500,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 840,
        "sentimentScore": 74,
        "price": 3599,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 336,
        "sentimentScore": 63,
        "price": 3048,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 294,
        "sentimentScore": 65,
        "price": 3112,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Tommy Hilfiger",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 23,
        "negative": 2
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 91
        }
      ]
    }
  },
  {
    "id": "prod-111",
    "title": "Asics Gel-Nimbus 26 PureGEL Cushion Long Distance",
    "brand": "Asics",
    "category": "Fashion & Footwear",
    "price": 15999,
    "originalPrice": 17999,
    "rating": 4.8,
    "reviewCount": 4100,
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Asics. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 2050,
        "sentimentScore": 89,
        "price": 15999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 615,
        "sentimentScore": 91,
        "price": 16566,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 820,
        "sentimentScore": 88,
        "price": 15643,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 328,
        "sentimentScore": 77,
        "price": 14193,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 287,
        "sentimentScore": 79,
        "price": 14589,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Asics",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 6,
        "negative": 5
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 97
        }
      ]
    }
  },
  {
    "id": "prod-112",
    "title": "Woodland Men Camel Leather Casual Rugged Boots",
    "brand": "Woodland",
    "category": "Fashion & Footwear",
    "price": 3995,
    "originalPrice": 5495,
    "rating": 4.3,
    "reviewCount": 14800,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Woodland. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 7400,
        "sentimentScore": 89,
        "price": 3995,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 2220,
        "sentimentScore": 91,
        "price": 4030,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 2960,
        "sentimentScore": 88,
        "price": 4027,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 1184,
        "sentimentScore": 77,
        "price": 3410,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 1036,
        "sentimentScore": 79,
        "price": 3557,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Woodland",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 5,
        "negative": 6
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 92
        }
      ]
    }
  },
  {
    "id": "prod-113",
    "title": "Crocs Classic Clog Slip-On Waterproof Sandals",
    "brand": "Crocs",
    "category": "Fashion & Footwear",
    "price": 2495,
    "originalPrice": 3295,
    "rating": 4.7,
    "reviewCount": 29500,
    "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Crocs. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 14750,
        "sentimentScore": 86,
        "price": 2495,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 4425,
        "sentimentScore": 88,
        "price": 2549,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 5900,
        "sentimentScore": 85,
        "price": 2521,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 2360,
        "sentimentScore": 74,
        "price": 2187,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 2065,
        "sentimentScore": 76,
        "price": 2295,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Crocs",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 86,
        "neutral": 7,
        "negative": 7
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 97
        }
      ]
    }
  },
  {
    "id": "prod-114",
    "title": "Skechers Go Walk Max Cushioned Athletic Slip-on",
    "brand": "Skechers",
    "category": "Fashion & Footwear",
    "price": 3799,
    "originalPrice": 4999,
    "rating": 4.6,
    "reviewCount": 16800,
    "image": "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Skechers. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 8400,
        "sentimentScore": 90,
        "price": 3799,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 2520,
        "sentimentScore": 92,
        "price": 3861,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 3360,
        "sentimentScore": 89,
        "price": 3763,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 1344,
        "sentimentScore": 78,
        "price": 3367,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 1176,
        "sentimentScore": 80,
        "price": 3481,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Skechers",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 90,
        "neutral": 3,
        "negative": 7
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 82
        }
      ]
    }
  },
  {
    "id": "prod-115",
    "title": "H&M Relaxed Fit Heavyweight Cotton Crewneck Hoodie",
    "brand": "H&M",
    "category": "Fashion & Footwear",
    "price": 2299,
    "originalPrice": 2699,
    "rating": 4.5,
    "reviewCount": 5900,
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by H&M. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 2950,
        "sentimentScore": 80,
        "price": 2299,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 885,
        "sentimentScore": 82,
        "price": 2317,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 1180,
        "sentimentScore": 79,
        "price": 2271,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 472,
        "sentimentScore": 68,
        "price": 2011,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 413,
        "sentimentScore": 70,
        "price": 2127,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from H&M",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 14,
        "negative": 6
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 83
        }
      ]
    }
  },
  {
    "id": "prod-116",
    "title": "Converse Chuck Taylor All Star High Top Canvas",
    "brand": "Converse",
    "category": "Fashion & Footwear",
    "price": 4499,
    "originalPrice": 4999,
    "rating": 4.7,
    "reviewCount": 21000,
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Converse. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 10500,
        "sentimentScore": 83,
        "price": 4499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 3150,
        "sentimentScore": 85,
        "price": 4649,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 4200,
        "sentimentScore": 82,
        "price": 4548,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 1680,
        "sentimentScore": 71,
        "price": 4036,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 1470,
        "sentimentScore": 73,
        "price": 4186,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Converse",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 8,
        "negative": 9
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 92
        }
      ]
    }
  },
  {
    "id": "prod-117",
    "title": "Vans Old Skool Suede Canvas Classic Skate Shoes",
    "brand": "Vans",
    "category": "Fashion & Footwear",
    "price": 4499,
    "originalPrice": 4999,
    "rating": 4.7,
    "reviewCount": 17400,
    "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Vans. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 8700,
        "sentimentScore": 87,
        "price": 4499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 2610,
        "sentimentScore": 89,
        "price": 4425,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 3480,
        "sentimentScore": 86,
        "price": 4372,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 1392,
        "sentimentScore": 75,
        "price": 4020,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 1218,
        "sentimentScore": 77,
        "price": 4070,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Vans",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 87,
        "neutral": 9,
        "negative": 4
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Breathability",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-118",
    "title": "Allen Solly Men Slim Fit Formal Work Trousers",
    "brand": "Allen Solly",
    "category": "Fashion & Footwear",
    "price": 1699,
    "originalPrice": 2799,
    "rating": 4.3,
    "reviewCount": 8900,
    "image": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Allen Solly. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 4450,
        "sentimentScore": 83,
        "price": 1699,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 1335,
        "sentimentScore": 85,
        "price": 1672,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 1780,
        "sentimentScore": 82,
        "price": 1648,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 712,
        "sentimentScore": 71,
        "price": 1460,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 623,
        "sentimentScore": 73,
        "price": 1496,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Allen Solly",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 8,
        "negative": 9
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Breathability",
          "sentiment": "Mixed",
          "score": 76
        }
      ]
    }
  },
  {
    "id": "prod-119",
    "title": "Jack & Jones Men Solid Cotton Regular Biker Jacket",
    "brand": "Jack & Jones",
    "category": "Fashion & Footwear",
    "price": 4999,
    "originalPrice": 8999,
    "rating": 4.4,
    "reviewCount": 3600,
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Jack & Jones. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 1800,
        "sentimentScore": 86,
        "price": 4999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 540,
        "sentimentScore": 88,
        "price": 4955,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 720,
        "sentimentScore": 85,
        "price": 5073,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 288,
        "sentimentScore": 74,
        "price": 4480,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 252,
        "sentimentScore": 76,
        "price": 4497,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Jack & Jones",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 86,
        "neutral": 6,
        "negative": 8
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 95
        }
      ]
    }
  },
  {
    "id": "prod-120",
    "title": "Bata Comfit Lightweight Everyday Cushioned Sandals",
    "brand": "Bata",
    "category": "Fashion & Footwear",
    "price": 1499,
    "originalPrice": 1999,
    "rating": 4.2,
    "reviewCount": 14200,
    "image": "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fashion & Footwear product by Bata. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.2,
        "reviewCount": 7100,
        "sentimentScore": 89,
        "price": 1499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.3,
        "reviewCount": 2130,
        "sentimentScore": 91,
        "price": 1505,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.2,
        "reviewCount": 2840,
        "sentimentScore": 88,
        "price": 1517,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.8,
        "reviewCount": 1136,
        "sentimentScore": 77,
        "price": 1276,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 3.9,
        "reviewCount": 994,
        "sentimentScore": 79,
        "price": 1401,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sole cushioning praised by over 80% of buyers",
        "Reliable build quality from Bata",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 3,
        "negative": 8
      },
      "verdict": "Highly recommended in the Fashion & Footwear segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sole Cushioning",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Material Durability",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Sizing Fit Accuracy",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Color Retention",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Breathability",
          "sentiment": "Positive",
          "score": 82
        }
      ]
    }
  },
  {
    "id": "prod-121",
    "title": "Dyson V12 Detect Slim Cordless Vacuum Cleaner Laser Fluffy",
    "brand": "Dyson",
    "category": "Home & Kitchen Appliances",
    "price": 49900,
    "originalPrice": 55900,
    "rating": 4.8,
    "reviewCount": 4900,
    "image": "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Dyson. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 2450,
        "sentimentScore": 80,
        "price": 49900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 735,
        "sentimentScore": 82,
        "price": 51602,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 980,
        "sentimentScore": 79,
        "price": 48609,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 392,
        "sentimentScore": 68,
        "price": 43386,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 343,
        "sentimentScore": 70,
        "price": 44564,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Dyson",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 15,
        "negative": 5
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 92
        }
      ]
    }
  },
  {
    "id": "prod-122",
    "title": "Philips Air Fryer XXL 1.4kg Rapid Air Fat Removal Tech",
    "brand": "Philips",
    "category": "Home & Kitchen Appliances",
    "price": 14999,
    "originalPrice": 17999,
    "rating": 4.7,
    "reviewCount": 11400,
    "image": "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Philips. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 5700,
        "sentimentScore": 76,
        "price": 14999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 1710,
        "sentimentScore": 78,
        "price": 15487,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 2280,
        "sentimentScore": 75,
        "price": 15071,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 912,
        "sentimentScore": 64,
        "price": 13115,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 798,
        "sentimentScore": 66,
        "price": 13812,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Philips",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 76,
        "neutral": 16,
        "negative": 8
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 80
        }
      ]
    }
  },
  {
    "id": "prod-123",
    "title": "Instant Pot Duo 7-in-1 Electric Pressure Cooker 6 Qt",
    "brand": "Instant Pot",
    "category": "Home & Kitchen Appliances",
    "price": 8499,
    "originalPrice": 12999,
    "rating": 4.8,
    "reviewCount": 26000,
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Instant Pot. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 13000,
        "sentimentScore": 85,
        "price": 8499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 3900,
        "sentimentScore": 87,
        "price": 8956,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 5200,
        "sentimentScore": 84,
        "price": 8507,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 2080,
        "sentimentScore": 73,
        "price": 7471,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 1820,
        "sentimentScore": 75,
        "price": 7870,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Instant Pot",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 85,
        "neutral": 10,
        "negative": 5
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 93
        }
      ]
    }
  },
  {
    "id": "prod-124",
    "title": "Nespresso Vertuo Pop Automatic Pod Coffee Machine",
    "brand": "Nespresso",
    "category": "Home & Kitchen Appliances",
    "price": 16999,
    "originalPrice": 19999,
    "rating": 4.7,
    "reviewCount": 3900,
    "image": "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Nespresso. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 1950,
        "sentimentScore": 76,
        "price": 16999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 585,
        "sentimentScore": 78,
        "price": 17421,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 780,
        "sentimentScore": 75,
        "price": 17200,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 312,
        "sentimentScore": 64,
        "price": 15112,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 273,
        "sentimentScore": 66,
        "price": 15080,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Nespresso",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 76,
        "neutral": 22,
        "negative": 2
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 81
        }
      ]
    }
  },
  {
    "id": "prod-125",
    "title": "Eureka Forbes Robo Lvc Robotic Vacuum & Smart Mop",
    "brand": "Eureka Forbes",
    "category": "Home & Kitchen Appliances",
    "price": 21999,
    "originalPrice": 35999,
    "rating": 4.4,
    "reviewCount": 2900,
    "image": "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Eureka Forbes. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 1450,
        "sentimentScore": 84,
        "price": 21999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 435,
        "sentimentScore": 86,
        "price": 23008,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 580,
        "sentimentScore": 83,
        "price": 21772,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 232,
        "sentimentScore": 72,
        "price": 18706,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 203,
        "sentimentScore": 74,
        "price": 19973,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Eureka Forbes",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 84,
        "neutral": 10,
        "negative": 6
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Durability",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-126",
    "title": "Kent Grand Plus RO+UV+UF Alkaline Water Purifier 9L",
    "brand": "Kent",
    "category": "Home & Kitchen Appliances",
    "price": 16499,
    "originalPrice": 20000,
    "rating": 4.5,
    "reviewCount": 18500,
    "image": "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Kent. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 9250,
        "sentimentScore": 79,
        "price": 16499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 2775,
        "sentimentScore": 81,
        "price": 16829,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 3700,
        "sentimentScore": 78,
        "price": 16026,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 1480,
        "sentimentScore": 67,
        "price": 14814,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 1295,
        "sentimentScore": 69,
        "price": 15056,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Kent",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 79,
        "neutral": 12,
        "negative": 9
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 82
        }
      ]
    }
  },
  {
    "id": "prod-127",
    "title": "LG 28L Charcoal Convection Microwave Oven Diet Fry",
    "brand": "LG",
    "category": "Home & Kitchen Appliances",
    "price": 19490,
    "originalPrice": 24990,
    "rating": 4.6,
    "reviewCount": 7200,
    "image": "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by LG. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 3600,
        "sentimentScore": 80,
        "price": 19490,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 1080,
        "sentimentScore": 82,
        "price": 20346,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 1440,
        "sentimentScore": 79,
        "price": 19292,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 576,
        "sentimentScore": 68,
        "price": 17369,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 504,
        "sentimentScore": 70,
        "price": 17996,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from LG",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 13,
        "negative": 7
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 81
        }
      ]
    }
  },
  {
    "id": "prod-128",
    "title": "Morphy Richards 52 Litre Digital OTG Oven Toaster Griller",
    "brand": "Morphy Richards",
    "category": "Home & Kitchen Appliances",
    "price": 12999,
    "originalPrice": 16995,
    "rating": 4.4,
    "reviewCount": 5400,
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Morphy Richards. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 2700,
        "sentimentScore": 77,
        "price": 12999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 810,
        "sentimentScore": 79,
        "price": 13323,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 1080,
        "sentimentScore": 76,
        "price": 12835,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 432,
        "sentimentScore": 65,
        "price": 11074,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 378,
        "sentimentScore": 67,
        "price": 11724,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Morphy Richards",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 15,
        "negative": 8
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 80
        }
      ]
    }
  },
  {
    "id": "prod-129",
    "title": "Sujata Dynamix 900-Watt Mixer Grinder with 3 Jars",
    "brand": "Sujata",
    "category": "Home & Kitchen Appliances",
    "price": 5899,
    "originalPrice": 6999,
    "rating": 4.7,
    "reviewCount": 23100,
    "image": "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Sujata. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 11550,
        "sentimentScore": 87,
        "price": 5899,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 3465,
        "sentimentScore": 89,
        "price": 5986,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 4620,
        "sentimentScore": 86,
        "price": 5950,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 1848,
        "sentimentScore": 75,
        "price": 5085,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 1617,
        "sentimentScore": 77,
        "price": 5338,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Sujata",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 87,
        "neutral": 10,
        "negative": 3
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 94
        }
      ]
    }
  },
  {
    "id": "prod-130",
    "title": "Dyson Pure Cool Air Purifier HEPA H13 Filter TP07",
    "brand": "Dyson",
    "category": "Home & Kitchen Appliances",
    "price": 39900,
    "originalPrice": 49900,
    "rating": 4.7,
    "reviewCount": 5600,
    "image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Dyson. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 2800,
        "sentimentScore": 76,
        "price": 39900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 840,
        "sentimentScore": 78,
        "price": 41282,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 1120,
        "sentimentScore": 75,
        "price": 40953,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 448,
        "sentimentScore": 64,
        "price": 35017,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 392,
        "sentimentScore": 66,
        "price": 36078,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Dyson",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 76,
        "neutral": 16,
        "negative": 8
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 83
        }
      ]
    }
  },
  {
    "id": "prod-131",
    "title": "Bosch 13 Place Settings Free-Standing Dishwasher Series 4",
    "brand": "Bosch",
    "category": "Home & Kitchen Appliances",
    "price": 42990,
    "originalPrice": 51990,
    "rating": 4.6,
    "reviewCount": 4800,
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Bosch. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 2400,
        "sentimentScore": 76,
        "price": 42990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 720,
        "sentimentScore": 78,
        "price": 43606,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 960,
        "sentimentScore": 75,
        "price": 43420,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 384,
        "sentimentScore": 64,
        "price": 38578,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 336,
        "sentimentScore": 66,
        "price": 38547,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Bosch",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 76,
        "neutral": 15,
        "negative": 9
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 80
        }
      ]
    }
  },
  {
    "id": "prod-132",
    "title": "Prestige Iris Plus 750W Mixer Grinder with 4 Jars",
    "brand": "Prestige",
    "category": "Home & Kitchen Appliances",
    "price": 3199,
    "originalPrice": 6195,
    "rating": 4.3,
    "reviewCount": 42000,
    "image": "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Prestige. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 21000,
        "sentimentScore": 78,
        "price": 3199,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 6300,
        "sentimentScore": 80,
        "price": 3291,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 8400,
        "sentimentScore": 77,
        "price": 3228,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 3360,
        "sentimentScore": 66,
        "price": 2855,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 2940,
        "sentimentScore": 68,
        "price": 2897,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Prestige",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 78,
        "neutral": 16,
        "negative": 6
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Durability",
          "sentiment": "Mixed",
          "score": 79
        }
      ]
    }
  },
  {
    "id": "prod-133",
    "title": "De'Longhi Dedica Deluxe Manual Espresso Machine Steel",
    "brand": "De'Longhi",
    "category": "Home & Kitchen Appliances",
    "price": 23999,
    "originalPrice": 28999,
    "rating": 4.6,
    "reviewCount": 3100,
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by De'Longhi. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 1550,
        "sentimentScore": 81,
        "price": 23999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 465,
        "sentimentScore": 83,
        "price": 25055,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 620,
        "sentimentScore": 80,
        "price": 24345,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 248,
        "sentimentScore": 69,
        "price": 21292,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 217,
        "sentimentScore": 71,
        "price": 22547,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from De'Longhi",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 81,
        "neutral": 12,
        "negative": 7
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 86
        }
      ]
    }
  },
  {
    "id": "prod-134",
    "title": "Nutribullet Pro 900W High Speed Blender Smoothie Maker",
    "brand": "Nutribullet",
    "category": "Home & Kitchen Appliances",
    "price": 7499,
    "originalPrice": 9999,
    "rating": 4.7,
    "reviewCount": 14600,
    "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Nutribullet. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 7300,
        "sentimentScore": 80,
        "price": 7499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 2190,
        "sentimentScore": 82,
        "price": 7733,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 2920,
        "sentimentScore": 79,
        "price": 7388,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 1168,
        "sentimentScore": 68,
        "price": 6457,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 1022,
        "sentimentScore": 70,
        "price": 6625,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Nutribullet",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 15,
        "negative": 5
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 90
        }
      ]
    }
  },
  {
    "id": "prod-135",
    "title": "Bajaj New Shakti Neo 15L Vertical Storage Water Geyser",
    "brand": "Bajaj",
    "category": "Home & Kitchen Appliances",
    "price": 5799,
    "originalPrice": 9950,
    "rating": 4.3,
    "reviewCount": 34000,
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Bajaj. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 17000,
        "sentimentScore": 90,
        "price": 5799,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 5100,
        "sentimentScore": 92,
        "price": 5860,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 6800,
        "sentimentScore": 89,
        "price": 5666,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 2720,
        "sentimentScore": 78,
        "price": 5218,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 2380,
        "sentimentScore": 80,
        "price": 5428,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Bajaj",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 90,
        "neutral": 8,
        "negative": 2
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 88
        }
      ]
    }
  },
  {
    "id": "prod-136",
    "title": "Havells Stealth Air 1200mm Silent BLDC Ceiling Fan",
    "brand": "Havells",
    "category": "Home & Kitchen Appliances",
    "price": 6299,
    "originalPrice": 9245,
    "rating": 4.5,
    "reviewCount": 12400,
    "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Havells. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 6200,
        "sentimentScore": 82,
        "price": 6299,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 1860,
        "sentimentScore": 84,
        "price": 6355,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 2480,
        "sentimentScore": 81,
        "price": 6367,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 992,
        "sentimentScore": 70,
        "price": 5446,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 868,
        "sentimentScore": 72,
        "price": 5611,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Havells",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 82,
        "neutral": 11,
        "negative": 7
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 89
        }
      ]
    }
  },
  {
    "id": "prod-137",
    "title": "Wonderchef Nutri-pot 3L Electric Pressure Cooker 18-in-1",
    "brand": "Wonderchef",
    "category": "Home & Kitchen Appliances",
    "price": 5499,
    "originalPrice": 8000,
    "rating": 4.4,
    "reviewCount": 6800,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Wonderchef. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 3400,
        "sentimentScore": 75,
        "price": 5499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 1020,
        "sentimentScore": 77,
        "price": 5612,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 1360,
        "sentimentScore": 74,
        "price": 5573,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 544,
        "sentimentScore": 63,
        "price": 4702,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 476,
        "sentimentScore": 65,
        "price": 5001,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Wonderchef",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 21,
        "negative": 4
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 86
        }
      ]
    }
  },
  {
    "id": "prod-138",
    "title": "Agaro Regency Multi-Function Air Fryer Oven 12L Rotisserie",
    "brand": "Agaro",
    "category": "Home & Kitchen Appliances",
    "price": 8999,
    "originalPrice": 14999,
    "rating": 4.5,
    "reviewCount": 8700,
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Agaro. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 4350,
        "sentimentScore": 84,
        "price": 8999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 1305,
        "sentimentScore": 86,
        "price": 9400,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 1740,
        "sentimentScore": 83,
        "price": 8822,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 696,
        "sentimentScore": 72,
        "price": 7889,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 609,
        "sentimentScore": 74,
        "price": 8127,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Agaro",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 84,
        "neutral": 8,
        "negative": 8
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 84
        }
      ]
    }
  },
  {
    "id": "prod-139",
    "title": "Kaff 60cm Filterless Curved Glass Kitchen Chimney",
    "brand": "Kaff",
    "category": "Home & Kitchen Appliances",
    "price": 13990,
    "originalPrice": 21990,
    "rating": 4.4,
    "reviewCount": 3900,
    "image": "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Kaff. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 1950,
        "sentimentScore": 92,
        "price": 13990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 585,
        "sentimentScore": 94,
        "price": 14156,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 780,
        "sentimentScore": 91,
        "price": 13873,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 312,
        "sentimentScore": 80,
        "price": 12482,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 273,
        "sentimentScore": 82,
        "price": 12727,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Kaff",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 92,
        "neutral": -1,
        "negative": 9
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 81
        }
      ]
    }
  },
  {
    "id": "prod-140",
    "title": "Cuisinart 4-Slice Metal Classic Toaster Brushed Stainless",
    "brand": "Cuisinart",
    "category": "Home & Kitchen Appliances",
    "price": 6999,
    "originalPrice": 8999,
    "rating": 4.6,
    "reviewCount": 4300,
    "image": "https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Home & Kitchen Appliances product by Cuisinart. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 2150,
        "sentimentScore": 87,
        "price": 6999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 645,
        "sentimentScore": 89,
        "price": 7307,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 860,
        "sentimentScore": 86,
        "price": 6907,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 344,
        "sentimentScore": 75,
        "price": 6248,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 301,
        "sentimentScore": 77,
        "price": 6527,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional motor power & speed praised by over 80% of buyers",
        "Reliable build quality from Cuisinart",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 87,
        "neutral": 4,
        "negative": 9
      },
      "verdict": "Highly recommended in the Home & Kitchen Appliances segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Motor Power & Speed",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Energy Efficiency",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Noise Level",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Cleaning Convenience",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Durability",
          "sentiment": "Positive",
          "score": 90
        }
      ]
    }
  },
  {
    "id": "prod-141",
    "title": "Sony PlayStation 5 Slim Console (Disc Edition, 1TB)",
    "brand": "Sony",
    "category": "Gaming & Consoles",
    "price": 54990,
    "originalPrice": 54990,
    "rating": 4.9,
    "reviewCount": 12400,
    "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Sony. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 6200,
        "sentimentScore": 81,
        "price": 54990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 1860,
        "sentimentScore": 83,
        "price": 57669,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 2480,
        "sentimentScore": 80,
        "price": 56200,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 992,
        "sentimentScore": 69,
        "price": 47658,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 868,
        "sentimentScore": 71,
        "price": 51206,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Sony",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 81,
        "neutral": 10,
        "negative": 9
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Load Times",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 82
        }
      ]
    }
  },
  {
    "id": "prod-142",
    "title": "Microsoft Xbox Series X 1TB Console 4K 120FPS",
    "brand": "Microsoft",
    "category": "Gaming & Consoles",
    "price": 52990,
    "originalPrice": 55990,
    "rating": 4.8,
    "reviewCount": 6800,
    "image": "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Microsoft. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 3400,
        "sentimentScore": 80,
        "price": 52990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 1020,
        "sentimentScore": 82,
        "price": 52217,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 1360,
        "sentimentScore": 79,
        "price": 53050,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 544,
        "sentimentScore": 68,
        "price": 47008,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 476,
        "sentimentScore": 70,
        "price": 49704,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Microsoft",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 15,
        "negative": 5
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 95
        }
      ]
    }
  },
  {
    "id": "prod-143",
    "title": "Nintendo Switch OLED Model Mario Red Special Edition",
    "brand": "Nintendo",
    "category": "Gaming & Consoles",
    "price": 31999,
    "originalPrice": 35999,
    "rating": 4.8,
    "reviewCount": 9200,
    "image": "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Nintendo. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 4600,
        "sentimentScore": 82,
        "price": 31999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 1380,
        "sentimentScore": 84,
        "price": 32826,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 1840,
        "sentimentScore": 81,
        "price": 32737,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 736,
        "sentimentScore": 70,
        "price": 27720,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 644,
        "sentimentScore": 72,
        "price": 28263,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Nintendo",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 82,
        "neutral": 14,
        "negative": 4
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 90
        }
      ]
    }
  },
  {
    "id": "prod-144",
    "title": "Valve Steam Deck OLED Handheld 512GB NVMe Gaming PC",
    "brand": "Valve",
    "category": "Gaming & Consoles",
    "price": 59999,
    "originalPrice": 64999,
    "rating": 4.9,
    "reviewCount": 3100,
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Valve. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 1550,
        "sentimentScore": 88,
        "price": 59999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 465,
        "sentimentScore": 90,
        "price": 58884,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 620,
        "sentimentScore": 87,
        "price": 61085,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 248,
        "sentimentScore": 76,
        "price": 51856,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 217,
        "sentimentScore": 78,
        "price": 56164,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Valve",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 88,
        "neutral": 8,
        "negative": 4
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Mixed",
          "score": 77
        }
      ]
    }
  },
  {
    "id": "prod-145",
    "title": "Logitech G Pro X Superlight 2 Wireless Gaming Mouse",
    "brand": "Logitech G",
    "category": "Gaming & Consoles",
    "price": 14995,
    "originalPrice": 16995,
    "rating": 4.8,
    "reviewCount": 4600,
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Logitech G. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 2300,
        "sentimentScore": 80,
        "price": 14995,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 690,
        "sentimentScore": 82,
        "price": 15212,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 920,
        "sentimentScore": 79,
        "price": 14702,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 368,
        "sentimentScore": 68,
        "price": 13343,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 322,
        "sentimentScore": 70,
        "price": 13335,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Logitech G",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 12,
        "negative": 8
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 93
        }
      ]
    }
  },
  {
    "id": "prod-146",
    "title": "Razer BlackWidow V4 Pro Mechanical Gaming Keyboard Chroma",
    "brand": "Razer",
    "category": "Gaming & Consoles",
    "price": 21999,
    "originalPrice": 24999,
    "rating": 4.7,
    "reviewCount": 2900,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Razer. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 1450,
        "sentimentScore": 75,
        "price": 21999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 435,
        "sentimentScore": 77,
        "price": 21658,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 580,
        "sentimentScore": 74,
        "price": 21674,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 232,
        "sentimentScore": 63,
        "price": 18761,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 203,
        "sentimentScore": 65,
        "price": 19821,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Razer",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 20,
        "negative": 5
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 85
        }
      ]
    }
  },
  {
    "id": "prod-147",
    "title": "Sony PlayStation DualSense Edge Wireless Pro Controller",
    "brand": "Sony",
    "category": "Gaming & Consoles",
    "price": 18990,
    "originalPrice": 19990,
    "rating": 4.7,
    "reviewCount": 2100,
    "image": "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Sony. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 1050,
        "sentimentScore": 90,
        "price": 18990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 315,
        "sentimentScore": 92,
        "price": 19391,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 420,
        "sentimentScore": 89,
        "price": 19480,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 168,
        "sentimentScore": 78,
        "price": 16852,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 147,
        "sentimentScore": 80,
        "price": 17438,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Sony",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 90,
        "neutral": 6,
        "negative": 4
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Mixed",
          "score": 78
        }
      ]
    }
  },
  {
    "id": "prod-148",
    "title": "SteelSeries Arctis Nova Pro Wireless Multi-System Headset",
    "brand": "SteelSeries",
    "category": "Gaming & Consoles",
    "price": 34999,
    "originalPrice": 39999,
    "rating": 4.7,
    "reviewCount": 1800,
    "image": "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by SteelSeries. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 900,
        "sentimentScore": 78,
        "price": 34999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 270,
        "sentimentScore": 80,
        "price": 34942,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 360,
        "sentimentScore": 77,
        "price": 34032,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 144,
        "sentimentScore": 66,
        "price": 30389,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 126,
        "sentimentScore": 68,
        "price": 31153,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from SteelSeries",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 78,
        "neutral": 16,
        "negative": 6
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 88
        }
      ]
    }
  },
  {
    "id": "prod-149",
    "title": "Asus ROG Swift 27-inch 1440p 240Hz OLED Gaming Monitor",
    "brand": "Asus",
    "category": "Gaming & Consoles",
    "price": 89999,
    "originalPrice": 104999,
    "rating": 4.8,
    "reviewCount": 1400,
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Asus. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 700,
        "sentimentScore": 81,
        "price": 89999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 210,
        "sentimentScore": 83,
        "price": 93056,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 280,
        "sentimentScore": 80,
        "price": 90196,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 112,
        "sentimentScore": 69,
        "price": 77593,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 98,
        "sentimentScore": 71,
        "price": 84102,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Asus",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 81,
        "neutral": 11,
        "negative": 8
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 87
        }
      ]
    }
  },
  {
    "id": "prod-150",
    "title": "Xbox Wireless Controller Robot White Textured Grip",
    "brand": "Microsoft",
    "category": "Gaming & Consoles",
    "price": 5390,
    "originalPrice": 5990,
    "rating": 4.7,
    "reviewCount": 18500,
    "image": "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Microsoft. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 9250,
        "sentimentScore": 86,
        "price": 5390,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 2775,
        "sentimentScore": 88,
        "price": 5490,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 3700,
        "sentimentScore": 85,
        "price": 5399,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 1480,
        "sentimentScore": 74,
        "price": 4607,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 1295,
        "sentimentScore": 76,
        "price": 5013,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Microsoft",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 86,
        "neutral": 8,
        "negative": 6
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 92
        }
      ]
    }
  },
  {
    "id": "prod-151",
    "title": "Elgato Stream Deck MK.2 15 Customizable LCD Keys",
    "brand": "Elgato",
    "category": "Gaming & Consoles",
    "price": 13999,
    "originalPrice": 16999,
    "rating": 4.8,
    "reviewCount": 5400,
    "image": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Elgato. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 2700,
        "sentimentScore": 80,
        "price": 13999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 810,
        "sentimentScore": 82,
        "price": 13901,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 1080,
        "sentimentScore": 79,
        "price": 13853,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 432,
        "sentimentScore": 68,
        "price": 12156,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 378,
        "sentimentScore": 70,
        "price": 12821,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Elgato",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 15,
        "negative": 5
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Load Times",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 93
        }
      ]
    }
  },
  {
    "id": "prod-152",
    "title": "Secretlab TITAN Evo Ergonomic SoftWeave Gaming Chair",
    "brand": "Secretlab",
    "category": "Gaming & Consoles",
    "price": 44999,
    "originalPrice": 49999,
    "rating": 4.8,
    "reviewCount": 3600,
    "image": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Secretlab. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 1800,
        "sentimentScore": 81,
        "price": 44999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 540,
        "sentimentScore": 83,
        "price": 46968,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 720,
        "sentimentScore": 80,
        "price": 45824,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 288,
        "sentimentScore": 69,
        "price": 39772,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 252,
        "sentimentScore": 71,
        "price": 39767,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Secretlab",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 81,
        "neutral": 12,
        "negative": 7
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Mixed",
          "score": 78
        }
      ]
    }
  },
  {
    "id": "prod-153",
    "title": "HyperX Cloud III Wireless Gaming Headset 120H Battery",
    "brand": "HyperX",
    "category": "Gaming & Consoles",
    "price": 14990,
    "originalPrice": 17990,
    "rating": 4.6,
    "reviewCount": 6200,
    "image": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by HyperX. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 3100,
        "sentimentScore": 88,
        "price": 14990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 930,
        "sentimentScore": 90,
        "price": 14999,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 1240,
        "sentimentScore": 87,
        "price": 14866,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 496,
        "sentimentScore": 76,
        "price": 12784,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 434,
        "sentimentScore": 78,
        "price": 13561,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from HyperX",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 88,
        "neutral": 3,
        "negative": 9
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Load Times",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 92
        }
      ]
    }
  },
  {
    "id": "prod-154",
    "title": "Razer DeathAdder V3 Pro Ultra-lightweight Wireless Mouse",
    "brand": "Razer",
    "category": "Gaming & Consoles",
    "price": 12999,
    "originalPrice": 14999,
    "rating": 4.7,
    "reviewCount": 5800,
    "image": "https://images.unsplash.com/photo-1629429408209-1ab9133e0817?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Razer. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 2900,
        "sentimentScore": 89,
        "price": 12999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 870,
        "sentimentScore": 91,
        "price": 12906,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 1160,
        "sentimentScore": 88,
        "price": 13268,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 464,
        "sentimentScore": 77,
        "price": 11630,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 406,
        "sentimentScore": 79,
        "price": 11793,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Razer",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 5,
        "negative": 6
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 92
        }
      ]
    }
  },
  {
    "id": "prod-155",
    "title": "Corsair K70 RGB PRO Mechanical Gaming Keyboard Cherry MX",
    "brand": "Corsair",
    "category": "Gaming & Consoles",
    "price": 14499,
    "originalPrice": 17999,
    "rating": 4.6,
    "reviewCount": 4900,
    "image": "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Corsair. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 2450,
        "sentimentScore": 90,
        "price": 14499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 735,
        "sentimentScore": 92,
        "price": 14225,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 980,
        "sentimentScore": 89,
        "price": 14342,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 392,
        "sentimentScore": 78,
        "price": 12925,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 343,
        "sentimentScore": 80,
        "price": 13543,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Corsair",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 90,
        "neutral": 3,
        "negative": 7
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 85
        }
      ]
    }
  },
  {
    "id": "prod-156",
    "title": "Meta Quest 3 128GB Mixed Reality VR Headset",
    "brand": "Meta",
    "category": "Gaming & Consoles",
    "price": 49999,
    "originalPrice": 54999,
    "rating": 4.8,
    "reviewCount": 4200,
    "image": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Meta. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 2100,
        "sentimentScore": 82,
        "price": 49999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 630,
        "sentimentScore": 84,
        "price": 50524,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 840,
        "sentimentScore": 81,
        "price": 50151,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 336,
        "sentimentScore": 70,
        "price": 42914,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 294,
        "sentimentScore": 72,
        "price": 44076,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Meta",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 82,
        "neutral": 9,
        "negative": 9
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 88
        }
      ]
    }
  },
  {
    "id": "prod-157",
    "title": "BenQ ZOWIE XL2546K 240Hz 24.5 inch Esports Monitor DyAc+",
    "brand": "BenQ",
    "category": "Gaming & Consoles",
    "price": 44990,
    "originalPrice": 49990,
    "rating": 4.8,
    "reviewCount": 2900,
    "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by BenQ. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 1450,
        "sentimentScore": 80,
        "price": 44990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 435,
        "sentimentScore": 82,
        "price": 44192,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 580,
        "sentimentScore": 79,
        "price": 44339,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 232,
        "sentimentScore": 68,
        "price": 38894,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 203,
        "sentimentScore": 70,
        "price": 40288,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from BenQ",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 11,
        "negative": 9
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 93
        }
      ]
    }
  },
  {
    "id": "prod-158",
    "title": "8BitDo Ultimate Bluetooth Controller with Charging Dock",
    "brand": "8BitDo",
    "category": "Gaming & Consoles",
    "price": 6999,
    "originalPrice": 8999,
    "rating": 4.7,
    "reviewCount": 7100,
    "image": "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by 8BitDo. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 3550,
        "sentimentScore": 90,
        "price": 6999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 1065,
        "sentimentScore": 92,
        "price": 7027,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 1420,
        "sentimentScore": 89,
        "price": 7030,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 568,
        "sentimentScore": 78,
        "price": 6157,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 497,
        "sentimentScore": 80,
        "price": 6274,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from 8BitDo",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 90,
        "neutral": 6,
        "negative": 4
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-159",
    "title": "Logitech G923 Racing Wheel and Pedals TRUEFORCE",
    "brand": "Logitech G",
    "category": "Gaming & Consoles",
    "price": 34995,
    "originalPrice": 41995,
    "rating": 4.6,
    "reviewCount": 2300,
    "image": "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Logitech G. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 1150,
        "sentimentScore": 89,
        "price": 34995,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 345,
        "sentimentScore": 91,
        "price": 36378,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 460,
        "sentimentScore": 88,
        "price": 34344,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 184,
        "sentimentScore": 77,
        "price": 30746,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 161,
        "sentimentScore": 79,
        "price": 31558,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Logitech G",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 5,
        "negative": 6
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Load Times",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Mixed",
          "score": 78
        }
      ]
    }
  },
  {
    "id": "prod-160",
    "title": "Shure MV7X XLR Podcast Dynamic Vocal Microphone",
    "brand": "Shure",
    "category": "Gaming & Consoles",
    "price": 18999,
    "originalPrice": 22999,
    "rating": 4.8,
    "reviewCount": 3400,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Gaming & Consoles product by Shure. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 1700,
        "sentimentScore": 92,
        "price": 18999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 510,
        "sentimentScore": 94,
        "price": 19532,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 680,
        "sentimentScore": 91,
        "price": 19273,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 272,
        "sentimentScore": 80,
        "price": 16828,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 238,
        "sentimentScore": 82,
        "price": 17677,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional frame rate stability praised by over 80% of buyers",
        "Reliable build quality from Shure",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 92,
        "neutral": -1,
        "negative": 9
      },
      "verdict": "Highly recommended in the Gaming & Consoles segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Frame Rate Stability",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Graphics Fidelity",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Controller Ergonomics",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Load Times",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Noise & Heat",
          "sentiment": "Positive",
          "score": 88
        }
      ]
    }
  },
  {
    "id": "prod-161",
    "title": "Philips Series 9000 Prestige Wet & Dry Electric Shaver",
    "brand": "Philips",
    "category": "Personal Care & Grooming",
    "price": 29995,
    "originalPrice": 35995,
    "rating": 4.7,
    "reviewCount": 2400,
    "image": "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Philips. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 1200,
        "sentimentScore": 77,
        "price": 29995,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 360,
        "sentimentScore": 79,
        "price": 31542,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 480,
        "sentimentScore": 76,
        "price": 29411,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 192,
        "sentimentScore": 65,
        "price": 25782,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 168,
        "sentimentScore": 67,
        "price": 26650,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Philips",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 14,
        "negative": 9
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 81
        }
      ]
    }
  },
  {
    "id": "prod-162",
    "title": "Dyson Supersonic Nural Intelligent Hair Dryer Iron/Fuchsia",
    "brand": "Dyson",
    "category": "Personal Care & Grooming",
    "price": 39900,
    "originalPrice": 44900,
    "rating": 4.9,
    "reviewCount": 5600,
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Dyson. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 2800,
        "sentimentScore": 85,
        "price": 39900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 840,
        "sentimentScore": 87,
        "price": 42051,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 1120,
        "sentimentScore": 84,
        "price": 41047,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 448,
        "sentimentScore": 73,
        "price": 34481,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 392,
        "sentimentScore": 75,
        "price": 35237,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Dyson",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 85,
        "neutral": 8,
        "negative": 7
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 96
        }
      ]
    }
  },
  {
    "id": "prod-163",
    "title": "Braun Series 9 Pro 9465cc Wet & Dry Men Shaver SmartCare",
    "brand": "Braun",
    "category": "Personal Care & Grooming",
    "price": 32999,
    "originalPrice": 39999,
    "rating": 4.8,
    "reviewCount": 1900,
    "image": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Braun. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 950,
        "sentimentScore": 86,
        "price": 32999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 285,
        "sentimentScore": 88,
        "price": 32822,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 380,
        "sentimentScore": 85,
        "price": 33067,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 152,
        "sentimentScore": 74,
        "price": 29298,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 133,
        "sentimentScore": 76,
        "price": 29891,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Braun",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 86,
        "neutral": 7,
        "negative": 7
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 91
        }
      ]
    }
  },
  {
    "id": "prod-164",
    "title": "Oral-B iO Series 9 Rechargeable Electric Toothbrush AI",
    "brand": "Oral-B",
    "category": "Personal Care & Grooming",
    "price": 19999,
    "originalPrice": 25999,
    "rating": 4.7,
    "reviewCount": 4300,
    "image": "https://images.unsplash.com/photo-1559591937-e62fb330bc1f?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Oral-B. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 2150,
        "sentimentScore": 90,
        "price": 19999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 645,
        "sentimentScore": 92,
        "price": 20006,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 860,
        "sentimentScore": 89,
        "price": 19532,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 344,
        "sentimentScore": 78,
        "price": 17367,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 301,
        "sentimentScore": 80,
        "price": 18415,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Oral-B",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 90,
        "neutral": 5,
        "negative": 5
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Mixed",
          "score": 79
        }
      ]
    }
  },
  {
    "id": "prod-165",
    "title": "Philips OneBlade Pro QP6550 Face & Body Hybrid Trimmer",
    "brand": "Philips",
    "category": "Personal Care & Grooming",
    "price": 4499,
    "originalPrice": 5995,
    "rating": 4.6,
    "reviewCount": 18500,
    "image": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Philips. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 9250,
        "sentimentScore": 92,
        "price": 4499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 2775,
        "sentimentScore": 94,
        "price": 4641,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 3700,
        "sentimentScore": 91,
        "price": 4630,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 1480,
        "sentimentScore": 80,
        "price": 3871,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 1295,
        "sentimentScore": 82,
        "price": 4001,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Philips",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 92,
        "neutral": 1,
        "negative": 7
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 95
        }
      ]
    }
  },
  {
    "id": "prod-166",
    "title": "Dyson Airwrap Multi-Styler Complete Long Copper/Nickel",
    "brand": "Dyson",
    "category": "Personal Care & Grooming",
    "price": 49900,
    "originalPrice": 54900,
    "rating": 4.8,
    "reviewCount": 8100,
    "image": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Dyson. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 4050,
        "sentimentScore": 77,
        "price": 49900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 1215,
        "sentimentScore": 79,
        "price": 49259,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 1620,
        "sentimentScore": 76,
        "price": 51383,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 648,
        "sentimentScore": 65,
        "price": 43887,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 567,
        "sentimentScore": 67,
        "price": 46790,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Dyson",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 17,
        "negative": 6
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 86
        }
      ]
    }
  },
  {
    "id": "prod-167",
    "title": "Beardo Godfather Beard Oil with Mineral Enriched Actives",
    "brand": "Beardo",
    "category": "Personal Care & Grooming",
    "price": 299,
    "originalPrice": 400,
    "rating": 4.3,
    "reviewCount": 24000,
    "image": "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Beardo. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 12000,
        "sentimentScore": 79,
        "price": 299,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 3600,
        "sentimentScore": 81,
        "price": 299,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 4800,
        "sentimentScore": 78,
        "price": 301,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 1920,
        "sentimentScore": 67,
        "price": 265,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 1680,
        "sentimentScore": 69,
        "price": 264,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Beardo",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 79,
        "neutral": 18,
        "negative": 3
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Mixed",
          "score": 75
        }
      ]
    }
  },
  {
    "id": "prod-168",
    "title": "Havells GS6451 Rechargeable 9-in-1 Multi Grooming Kit",
    "brand": "Havells",
    "category": "Personal Care & Grooming",
    "price": 2199,
    "originalPrice": 3495,
    "rating": 4.3,
    "reviewCount": 8900,
    "image": "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Havells. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 4450,
        "sentimentScore": 75,
        "price": 2199,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 1335,
        "sentimentScore": 77,
        "price": 2186,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 1780,
        "sentimentScore": 74,
        "price": 2244,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 712,
        "sentimentScore": 63,
        "price": 1934,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 623,
        "sentimentScore": 65,
        "price": 2029,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Havells",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 19,
        "negative": 6
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 82
        }
      ]
    }
  },
  {
    "id": "prod-169",
    "title": "Gillette Labs Heated Razor Starter Kit with Exfoliating Bar",
    "brand": "Gillette",
    "category": "Personal Care & Grooming",
    "price": 9999,
    "originalPrice": 12999,
    "rating": 4.5,
    "reviewCount": 1600,
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Gillette. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 800,
        "sentimentScore": 91,
        "price": 9999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 240,
        "sentimentScore": 93,
        "price": 9916,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 320,
        "sentimentScore": 90,
        "price": 10061,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 128,
        "sentimentScore": 79,
        "price": 8860,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 112,
        "sentimentScore": 81,
        "price": 9024,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Gillette",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 91,
        "neutral": 3,
        "negative": 6
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 84
        }
      ]
    }
  },
  {
    "id": "prod-170",
    "title": "Waterpik Cordless Advanced Water Flosser Dental Oral Irrigator",
    "brand": "Waterpik",
    "category": "Personal Care & Grooming",
    "price": 8999,
    "originalPrice": 10999,
    "rating": 4.6,
    "reviewCount": 6700,
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Waterpik. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 3350,
        "sentimentScore": 81,
        "price": 8999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 1005,
        "sentimentScore": 83,
        "price": 9358,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 1340,
        "sentimentScore": 80,
        "price": 9204,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 536,
        "sentimentScore": 69,
        "price": 7698,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 469,
        "sentimentScore": 71,
        "price": 8245,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Waterpik",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 81,
        "neutral": 11,
        "negative": 8
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 93
        }
      ]
    }
  },
  {
    "id": "prod-171",
    "title": "MI Xiaomi Grooming Kit Pro with Type-C Fast Charging",
    "brand": "Xiaomi",
    "category": "Personal Care & Grooming",
    "price": 2499,
    "originalPrice": 3499,
    "rating": 4.4,
    "reviewCount": 14200,
    "image": "https://images.unsplash.com/photo-1621607505833-616916c46a25?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Xiaomi. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 7100,
        "sentimentScore": 83,
        "price": 2499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 2130,
        "sentimentScore": 85,
        "price": 2625,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 2840,
        "sentimentScore": 82,
        "price": 2462,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 1136,
        "sentimentScore": 71,
        "price": 2215,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 994,
        "sentimentScore": 73,
        "price": 2252,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Xiaomi",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 13,
        "negative": 4
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Mixed",
          "score": 75
        }
      ]
    }
  },
  {
    "id": "prod-172",
    "title": "Philips Essential Care 1200W Foldable Hair Dryer",
    "brand": "Philips",
    "category": "Personal Care & Grooming",
    "price": 899,
    "originalPrice": 1145,
    "rating": 4.4,
    "reviewCount": 48000,
    "image": "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Philips. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 24000,
        "sentimentScore": 84,
        "price": 899,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 7200,
        "sentimentScore": 86,
        "price": 929,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 9600,
        "sentimentScore": 83,
        "price": 874,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 3840,
        "sentimentScore": 72,
        "price": 802,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 3360,
        "sentimentScore": 74,
        "price": 807,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Philips",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 84,
        "neutral": 8,
        "negative": 8
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 94
        }
      ]
    }
  },
  {
    "id": "prod-173",
    "title": "Panasonic Arc5 Wet/Dry 5-Blade Electric Shaver LV65",
    "brand": "Panasonic",
    "category": "Personal Care & Grooming",
    "price": 16999,
    "originalPrice": 19999,
    "rating": 4.7,
    "reviewCount": 2900,
    "image": "https://images.unsplash.com/photo-1512290900672-1f02e7ad0ba8?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Panasonic. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 1450,
        "sentimentScore": 76,
        "price": 16999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 435,
        "sentimentScore": 78,
        "price": 17217,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 580,
        "sentimentScore": 75,
        "price": 17206,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 232,
        "sentimentScore": 64,
        "price": 14535,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 203,
        "sentimentScore": 66,
        "price": 15562,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Panasonic",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 76,
        "neutral": 22,
        "negative": 2
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-174",
    "title": "Ikonic Professional Pro Titanium Hair Straightener",
    "brand": "Ikonic",
    "category": "Personal Care & Grooming",
    "price": 5400,
    "originalPrice": 6000,
    "rating": 4.7,
    "reviewCount": 7600,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Ikonic. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 3800,
        "sentimentScore": 85,
        "price": 5400,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 1140,
        "sentimentScore": 87,
        "price": 5714,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 1520,
        "sentimentScore": 84,
        "price": 5500,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 608,
        "sentimentScore": 73,
        "price": 4809,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 532,
        "sentimentScore": 75,
        "price": 5071,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Ikonic",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 85,
        "neutral": 6,
        "negative": 9
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Mixed",
          "score": 75
        }
      ]
    }
  },
  {
    "id": "prod-175",
    "title": "Colgate ProClinical 150 Charcoal Sonic Battery Toothbrush",
    "brand": "Colgate",
    "category": "Personal Care & Grooming",
    "price": 899,
    "originalPrice": 1200,
    "rating": 4.3,
    "reviewCount": 16800,
    "image": "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Colgate. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 8400,
        "sentimentScore": 83,
        "price": 899,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 2520,
        "sentimentScore": 85,
        "price": 932,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 3360,
        "sentimentScore": 82,
        "price": 874,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 1344,
        "sentimentScore": 71,
        "price": 792,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 1176,
        "sentimentScore": 73,
        "price": 829,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Colgate",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 14,
        "negative": 3
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 92
        }
      ]
    }
  },
  {
    "id": "prod-176",
    "title": "Ustraa Chrome Beard Trimmer with Titanium Coated Blades",
    "brand": "Ustraa",
    "category": "Personal Care & Grooming",
    "price": 1699,
    "originalPrice": 2499,
    "rating": 4.2,
    "reviewCount": 9200,
    "image": "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Ustraa. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.2,
        "reviewCount": 4600,
        "sentimentScore": 83,
        "price": 1699,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.3,
        "reviewCount": 1380,
        "sentimentScore": 85,
        "price": 1782,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.2,
        "reviewCount": 1840,
        "sentimentScore": 82,
        "price": 1666,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.8,
        "reviewCount": 736,
        "sentimentScore": 71,
        "price": 1517,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 3.9,
        "reviewCount": 644,
        "sentimentScore": 73,
        "price": 1519,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Ustraa",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 14,
        "negative": 3
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 83
        }
      ]
    }
  },
  {
    "id": "prod-177",
    "title": "Revlon One-Step Hair Dryer and Volumizer Hot Air Brush",
    "brand": "Revlon",
    "category": "Personal Care & Grooming",
    "price": 4499,
    "originalPrice": 5999,
    "rating": 4.6,
    "reviewCount": 29000,
    "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Revlon. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 14500,
        "sentimentScore": 91,
        "price": 4499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 4350,
        "sentimentScore": 93,
        "price": 4568,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 5800,
        "sentimentScore": 90,
        "price": 4431,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 2320,
        "sentimentScore": 79,
        "price": 3943,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 2030,
        "sentimentScore": 81,
        "price": 4061,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Revlon",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 91,
        "neutral": 3,
        "negative": 6
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 94
        }
      ]
    }
  },
  {
    "id": "prod-178",
    "title": "Wahl Professional Super Taper Corded Salon Clipper",
    "brand": "Wahl",
    "category": "Personal Care & Grooming",
    "price": 4999,
    "originalPrice": 5750,
    "rating": 4.7,
    "reviewCount": 8400,
    "image": "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Wahl. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 4200,
        "sentimentScore": 82,
        "price": 4999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 1260,
        "sentimentScore": 84,
        "price": 5004,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 1680,
        "sentimentScore": 81,
        "price": 5095,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 672,
        "sentimentScore": 70,
        "price": 4376,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 588,
        "sentimentScore": 72,
        "price": 4477,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Wahl",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 82,
        "neutral": 11,
        "negative": 7
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 85
        }
      ]
    }
  },
  {
    "id": "prod-179",
    "title": "Foreo LUNA 4 Smart Facial Cleansing & Firming Massage",
    "brand": "Foreo",
    "category": "Personal Care & Grooming",
    "price": 21900,
    "originalPrice": 24900,
    "rating": 4.7,
    "reviewCount": 2100,
    "image": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Foreo. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 1050,
        "sentimentScore": 92,
        "price": 21900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 315,
        "sentimentScore": 94,
        "price": 22201,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 420,
        "sentimentScore": 91,
        "price": 22069,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 168,
        "sentimentScore": 80,
        "price": 18618,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 147,
        "sentimentScore": 82,
        "price": 19277,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Foreo",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 92,
        "neutral": 2,
        "negative": 6
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 81
        }
      ]
    }
  },
  {
    "id": "prod-180",
    "title": "Remington Keratin Protect Intelligent Ceramic Hair Straightener",
    "brand": "Remington",
    "category": "Personal Care & Grooming",
    "price": 6999,
    "originalPrice": 8999,
    "rating": 4.6,
    "reviewCount": 4800,
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Personal Care & Grooming product by Remington. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 2400,
        "sentimentScore": 77,
        "price": 6999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 720,
        "sentimentScore": 79,
        "price": 7313,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 960,
        "sentimentScore": 76,
        "price": 6908,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 384,
        "sentimentScore": 65,
        "price": 6187,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 336,
        "sentimentScore": 67,
        "price": 6568,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional blade sharpness praised by over 80% of buyers",
        "Reliable build quality from Remington",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 17,
        "negative": 6
      },
      "verdict": "Highly recommended in the Personal Care & Grooming segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Blade Sharpness",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Battery Runtime",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Skin Comfort",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Waterproof IPX",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Ergonomics",
          "sentiment": "Positive",
          "score": 93
        }
      ]
    }
  },
  {
    "id": "prod-181",
    "title": "Sony Alpha 7 IV Full-Frame Mirrorless Camera Body",
    "brand": "Sony",
    "category": "Cameras & Photography",
    "price": 224990,
    "originalPrice": 242990,
    "rating": 4.9,
    "reviewCount": 3100,
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Sony. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 1550,
        "sentimentScore": 79,
        "price": 224990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 465,
        "sentimentScore": 81,
        "price": 235122,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 620,
        "sentimentScore": 78,
        "price": 219693,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 248,
        "sentimentScore": 67,
        "price": 200536,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 217,
        "sentimentScore": 69,
        "price": 201240,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Sony",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 79,
        "neutral": 16,
        "negative": 5
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 81
        }
      ]
    }
  },
  {
    "id": "prod-182",
    "title": "Fujifilm X-T5 Mirrorless Digital Camera Body Black",
    "brand": "Fujifilm",
    "category": "Cameras & Photography",
    "price": 169999,
    "originalPrice": 179999,
    "rating": 4.8,
    "reviewCount": 2200,
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Fujifilm. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 1100,
        "sentimentScore": 75,
        "price": 169999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 330,
        "sentimentScore": 77,
        "price": 172565,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 440,
        "sentimentScore": 74,
        "price": 166595,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 176,
        "sentimentScore": 63,
        "price": 148458,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 154,
        "sentimentScore": 65,
        "price": 154877,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Fujifilm",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 16,
        "negative": 9
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 87
        }
      ]
    }
  },
  {
    "id": "prod-183",
    "title": "DJI Mini 4 Pro Drone with RC 2 Controller 4K HDR",
    "brand": "DJI",
    "category": "Cameras & Photography",
    "price": 89990,
    "originalPrice": 99990,
    "rating": 4.9,
    "reviewCount": 4800,
    "image": "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by DJI. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 2400,
        "sentimentScore": 75,
        "price": 89990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 720,
        "sentimentScore": 77,
        "price": 93307,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 960,
        "sentimentScore": 74,
        "price": 89503,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 384,
        "sentimentScore": 63,
        "price": 79113,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 336,
        "sentimentScore": 65,
        "price": 84095,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from DJI",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 19,
        "negative": 6
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 94
        }
      ]
    }
  },
  {
    "id": "prod-184",
    "title": "GoPro HERO12 Black Waterproof 5.3K Action Camera",
    "brand": "GoPro",
    "category": "Cameras & Photography",
    "price": 37990,
    "originalPrice": 44990,
    "rating": 4.7,
    "reviewCount": 8900,
    "image": "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by GoPro. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 4450,
        "sentimentScore": 87,
        "price": 37990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 1335,
        "sentimentScore": 89,
        "price": 38646,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 1780,
        "sentimentScore": 86,
        "price": 37318,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 712,
        "sentimentScore": 75,
        "price": 33771,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 623,
        "sentimentScore": 77,
        "price": 35211,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from GoPro",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 87,
        "neutral": 10,
        "negative": 3
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Mixed",
          "score": 77
        }
      ]
    }
  },
  {
    "id": "prod-185",
    "title": "Canon EOS R6 Mark II Full-Frame 4K60p Mirrorless",
    "brand": "Canon",
    "category": "Cameras & Photography",
    "price": 239995,
    "originalPrice": 255995,
    "rating": 4.8,
    "reviewCount": 1950,
    "image": "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Canon. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 975,
        "sentimentScore": 75,
        "price": 239995,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 293,
        "sentimentScore": 77,
        "price": 244047,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 390,
        "sentimentScore": 74,
        "price": 246976,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 156,
        "sentimentScore": 63,
        "price": 212218,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 137,
        "sentimentScore": 65,
        "price": 224370,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Canon",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 16,
        "negative": 9
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 88
        }
      ]
    }
  },
  {
    "id": "prod-186",
    "title": "Nikon Z8 Professional Full-Frame Hybrid Mirrorless Body",
    "brand": "Nikon",
    "category": "Cameras & Photography",
    "price": 334990,
    "originalPrice": 359990,
    "rating": 4.9,
    "reviewCount": 920,
    "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Nikon. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 460,
        "sentimentScore": 81,
        "price": 334990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 138,
        "sentimentScore": 83,
        "price": 349372,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 184,
        "sentimentScore": 80,
        "price": 335725,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 74,
        "sentimentScore": 69,
        "price": 285532,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 64,
        "sentimentScore": 71,
        "price": 312955,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Nikon",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 81,
        "neutral": 10,
        "negative": 9
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Mixed",
          "score": 79
        }
      ]
    }
  },
  {
    "id": "prod-187",
    "title": "Insta360 X4 8K 360-Degree Waterproof Action Camera",
    "brand": "Insta360",
    "category": "Cameras & Photography",
    "price": 49990,
    "originalPrice": 54990,
    "rating": 4.8,
    "reviewCount": 3400,
    "image": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Insta360. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 1700,
        "sentimentScore": 90,
        "price": 49990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 510,
        "sentimentScore": 92,
        "price": 52448,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 680,
        "sentimentScore": 89,
        "price": 49464,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 272,
        "sentimentScore": 78,
        "price": 43455,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 238,
        "sentimentScore": 80,
        "price": 46536,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Insta360",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 90,
        "neutral": 2,
        "negative": 8
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 84
        }
      ]
    }
  },
  {
    "id": "prod-188",
    "title": "Sigma 24-70mm F2.8 DG DN Art Lens for Sony E-Mount",
    "brand": "Sigma",
    "category": "Cameras & Photography",
    "price": 99990,
    "originalPrice": 109990,
    "rating": 4.8,
    "reviewCount": 2900,
    "image": "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Sigma. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 1450,
        "sentimentScore": 88,
        "price": 99990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 435,
        "sentimentScore": 90,
        "price": 103442,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 580,
        "sentimentScore": 87,
        "price": 98075,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 232,
        "sentimentScore": 76,
        "price": 89015,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 203,
        "sentimentScore": 78,
        "price": 93413,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Sigma",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 88,
        "neutral": 3,
        "negative": 9
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 82
        }
      ]
    }
  },
  {
    "id": "prod-189",
    "title": "DJI Osmo Pocket 3 Gimbal 1-Inch CMOS 4K120fps Vlog",
    "brand": "DJI",
    "category": "Cameras & Photography",
    "price": 54990,
    "originalPrice": 59990,
    "rating": 4.9,
    "reviewCount": 4100,
    "image": "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by DJI. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 2050,
        "sentimentScore": 79,
        "price": 54990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 615,
        "sentimentScore": 81,
        "price": 56927,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 820,
        "sentimentScore": 78,
        "price": 54523,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 328,
        "sentimentScore": 67,
        "price": 47257,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 287,
        "sentimentScore": 69,
        "price": 50197,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from DJI",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 79,
        "neutral": 18,
        "negative": 3
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 95
        }
      ]
    }
  },
  {
    "id": "prod-190",
    "title": "Sony FE 50mm F1.4 GM Full Frame Prime Lens",
    "brand": "Sony",
    "category": "Cameras & Photography",
    "price": 134990,
    "originalPrice": 149990,
    "rating": 4.9,
    "reviewCount": 1200,
    "image": "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Sony. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 600,
        "sentimentScore": 75,
        "price": 134990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 180,
        "sentimentScore": 77,
        "price": 139343,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 240,
        "sentimentScore": 74,
        "price": 131068,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 96,
        "sentimentScore": 63,
        "price": 120828,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 84,
        "sentimentScore": 65,
        "price": 124108,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Sony",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 18,
        "negative": 7
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-191",
    "title": "Peak Design Everyday Backpack 20L V2 Charcoal",
    "brand": "Peak Design",
    "category": "Cameras & Photography",
    "price": 26999,
    "originalPrice": 29999,
    "rating": 4.8,
    "reviewCount": 2400,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Peak Design. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 1200,
        "sentimentScore": 85,
        "price": 26999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 360,
        "sentimentScore": 87,
        "price": 27601,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 480,
        "sentimentScore": 84,
        "price": 27051,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 192,
        "sentimentScore": 73,
        "price": 23926,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 168,
        "sentimentScore": 75,
        "price": 24641,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Peak Design",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 85,
        "neutral": 9,
        "negative": 6
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 95
        }
      ]
    }
  },
  {
    "id": "prod-192",
    "title": "Godox V1 Round Head Camera Flash Speedlite TTL",
    "brand": "Godox",
    "category": "Cameras & Photography",
    "price": 18990,
    "originalPrice": 22990,
    "rating": 4.6,
    "reviewCount": 3200,
    "image": "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Godox. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 1600,
        "sentimentScore": 83,
        "price": 18990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 480,
        "sentimentScore": 85,
        "price": 19829,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 640,
        "sentimentScore": 82,
        "price": 19401,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 256,
        "sentimentScore": 71,
        "price": 16543,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 224,
        "sentimentScore": 73,
        "price": 17495,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Godox",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 15,
        "negative": 2
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 95
        }
      ]
    }
  },
  {
    "id": "prod-193",
    "title": "SanDisk 128GB Extreme PRO SDXC UHS-II Memory Card V90",
    "brand": "SanDisk",
    "category": "Cameras & Photography",
    "price": 9999,
    "originalPrice": 14999,
    "rating": 4.8,
    "reviewCount": 9800,
    "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by SanDisk. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 4900,
        "sentimentScore": 75,
        "price": 9999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 1470,
        "sentimentScore": 77,
        "price": 9801,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 1960,
        "sentimentScore": 74,
        "price": 10138,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 784,
        "sentimentScore": 63,
        "price": 8544,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 686,
        "sentimentScore": 65,
        "price": 8976,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from SanDisk",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 75,
        "neutral": 20,
        "negative": 5
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 87
        }
      ]
    }
  },
  {
    "id": "prod-194",
    "title": "Rode Wireless PRO Dual Channel Wireless Mic System 32-bit Float",
    "brand": "Rode",
    "category": "Cameras & Photography",
    "price": 38990,
    "originalPrice": 44990,
    "rating": 4.8,
    "reviewCount": 2700,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Rode. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 1350,
        "sentimentScore": 91,
        "price": 38990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 405,
        "sentimentScore": 93,
        "price": 40849,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 540,
        "sentimentScore": 90,
        "price": 38346,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 216,
        "sentimentScore": 79,
        "price": 33870,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 189,
        "sentimentScore": 81,
        "price": 36081,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Rode",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 91,
        "neutral": 2,
        "negative": 7
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 83
        }
      ]
    }
  },
  {
    "id": "prod-195",
    "title": "Zhiyun Crane 4 Handheld 3-Axis Gimbal Stabilizer",
    "brand": "Zhiyun",
    "category": "Cameras & Photography",
    "price": 54990,
    "originalPrice": 62990,
    "rating": 4.6,
    "reviewCount": 1100,
    "image": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Zhiyun. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 550,
        "sentimentScore": 79,
        "price": 54990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 165,
        "sentimentScore": 81,
        "price": 54243,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 220,
        "sentimentScore": 78,
        "price": 53727,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 88,
        "sentimentScore": 67,
        "price": 48390,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 77,
        "sentimentScore": 69,
        "price": 48844,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Zhiyun",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 79,
        "neutral": 19,
        "negative": 2
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-196",
    "title": "Fujifilm Instax Mini 12 Instant Film Camera Pastel Blue",
    "brand": "Fujifilm",
    "category": "Cameras & Photography",
    "price": 6999,
    "originalPrice": 7999,
    "rating": 4.6,
    "reviewCount": 32000,
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Fujifilm. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 16000,
        "sentimentScore": 87,
        "price": 6999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 4800,
        "sentimentScore": 89,
        "price": 6927,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 6400,
        "sentimentScore": 86,
        "price": 6826,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 2560,
        "sentimentScore": 75,
        "price": 6176,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 2240,
        "sentimentScore": 77,
        "price": 6549,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Fujifilm",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 87,
        "neutral": 5,
        "negative": 8
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 92
        }
      ]
    }
  },
  {
    "id": "prod-197",
    "title": "Tamron 28-75mm F/2.8 Di III VXD G2 for Sony E",
    "brand": "Tamron",
    "category": "Cameras & Photography",
    "price": 74990,
    "originalPrice": 82990,
    "rating": 4.7,
    "reviewCount": 2800,
    "image": "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Tamron. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 1400,
        "sentimentScore": 89,
        "price": 74990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 420,
        "sentimentScore": 91,
        "price": 76372,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 560,
        "sentimentScore": 88,
        "price": 74630,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 224,
        "sentimentScore": 77,
        "price": 65065,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 196,
        "sentimentScore": 79,
        "price": 69438,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Tamron",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 5,
        "negative": 6
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 96
        }
      ]
    }
  },
  {
    "id": "prod-198",
    "title": "Blackmagic Pocket Cinema Camera 6K G2 EF Mount",
    "brand": "Blackmagic",
    "category": "Cameras & Photography",
    "price": 189990,
    "originalPrice": 209990,
    "rating": 4.7,
    "reviewCount": 850,
    "image": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Blackmagic. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 425,
        "sentimentScore": 91,
        "price": 189990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 128,
        "sentimentScore": 93,
        "price": 187795,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 170,
        "sentimentScore": 90,
        "price": 187796,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 68,
        "sentimentScore": 79,
        "price": 165294,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 60,
        "sentimentScore": 81,
        "price": 172472,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Blackmagic",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 91,
        "neutral": 3,
        "negative": 6
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Positive",
          "score": 91
        }
      ]
    }
  },
  {
    "id": "prod-199",
    "title": "Manfrotto Befree Advanced Carbon Fiber Travel Tripod",
    "brand": "Manfrotto",
    "category": "Cameras & Photography",
    "price": 29990,
    "originalPrice": 34990,
    "rating": 4.8,
    "reviewCount": 1600,
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475b?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Manfrotto. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 800,
        "sentimentScore": 77,
        "price": 29990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 240,
        "sentimentScore": 79,
        "price": 31506,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 320,
        "sentimentScore": 76,
        "price": 29827,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 128,
        "sentimentScore": 65,
        "price": 25745,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 112,
        "sentimentScore": 67,
        "price": 27876,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Manfrotto",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 18,
        "negative": 5
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Mixed",
          "score": 77
        }
      ]
    }
  },
  {
    "id": "prod-200",
    "title": "Sony ZV-E10 Interchangeable Lens Mirrorless Vlog Camera",
    "brand": "Sony",
    "category": "Cameras & Photography",
    "price": 61490,
    "originalPrice": 69990,
    "rating": 4.6,
    "reviewCount": 6800,
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Cameras & Photography product by Sony. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 3400,
        "sentimentScore": 76,
        "price": 61490,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 1020,
        "sentimentScore": 78,
        "price": 60969,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 1360,
        "sentimentScore": 75,
        "price": 61604,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 544,
        "sentimentScore": 64,
        "price": 52375,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 476,
        "sentimentScore": 66,
        "price": 56576,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional sensor dynamic range praised by over 80% of buyers",
        "Reliable build quality from Sony",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 76,
        "neutral": 16,
        "negative": 8
      },
      "verdict": "Highly recommended in the Cameras & Photography segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Sensor Dynamic Range",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Autofocus Tracking",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Low Light ISO Clarity",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Video Stabilization",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Ergonomic Handling",
          "sentiment": "Mixed",
          "score": 79
        }
      ]
    }
  },
  {
    "id": "prod-201",
    "title": "Bowflex SelectTech 552 Adjustable Dumbbells Pair",
    "brand": "Bowflex",
    "category": "Fitness & Sports",
    "price": 34999,
    "originalPrice": 42999,
    "rating": 4.8,
    "reviewCount": 8900,
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Bowflex. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 4450,
        "sentimentScore": 81,
        "price": 34999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 1335,
        "sentimentScore": 83,
        "price": 35473,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 1780,
        "sentimentScore": 80,
        "price": 34395,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 712,
        "sentimentScore": 69,
        "price": 30829,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 623,
        "sentimentScore": 71,
        "price": 30819,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Bowflex",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 81,
        "neutral": 10,
        "negative": 9
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 81
        }
      ]
    }
  },
  {
    "id": "prod-202",
    "title": "Manduka PRO Yoga Mat 6mm High Density Cushion",
    "brand": "Manduka",
    "category": "Fitness & Sports",
    "price": 11999,
    "originalPrice": 13999,
    "rating": 4.9,
    "reviewCount": 4200,
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Manduka. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 2100,
        "sentimentScore": 86,
        "price": 11999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 630,
        "sentimentScore": 88,
        "price": 12288,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 840,
        "sentimentScore": 85,
        "price": 11696,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 336,
        "sentimentScore": 74,
        "price": 10553,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 294,
        "sentimentScore": 76,
        "price": 10631,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Manduka",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 86,
        "neutral": 7,
        "negative": 7
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-203",
    "title": "Theragun PRO 5th Gen Bluetooth Deep Muscle Percussive Massager",
    "brand": "Therabody",
    "category": "Fitness & Sports",
    "price": 54999,
    "originalPrice": 59999,
    "rating": 4.8,
    "reviewCount": 3100,
    "image": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Therabody. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 1550,
        "sentimentScore": 77,
        "price": 54999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 465,
        "sentimentScore": 79,
        "price": 57241,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 620,
        "sentimentScore": 76,
        "price": 53377,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 248,
        "sentimentScore": 65,
        "price": 47315,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 217,
        "sentimentScore": 67,
        "price": 51191,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Therabody",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 21,
        "negative": 2
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 91
        }
      ]
    }
  },
  {
    "id": "prod-204",
    "title": "Concept2 RowErg Indoor Rowing Machine PM5 Performance",
    "brand": "Concept2",
    "category": "Fitness & Sports",
    "price": 119990,
    "originalPrice": 134990,
    "rating": 4.9,
    "reviewCount": 5600,
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Concept2. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.9,
        "reviewCount": 2800,
        "sentimentScore": 89,
        "price": 119990,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 5,
        "reviewCount": 840,
        "sentimentScore": 91,
        "price": 122552,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.9,
        "reviewCount": 1120,
        "sentimentScore": 88,
        "price": 119458,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.5,
        "reviewCount": 448,
        "sentimentScore": 77,
        "price": 105606,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.6,
        "reviewCount": 392,
        "sentimentScore": 79,
        "price": 109751,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Concept2",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 8,
        "negative": 3
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 90
        }
      ]
    }
  },
  {
    "id": "prod-205",
    "title": "Lululemon Align High-Rise Pant 25-inch Nulu Fabric",
    "brand": "Lululemon",
    "category": "Fitness & Sports",
    "price": 8900,
    "originalPrice": 9900,
    "rating": 4.8,
    "reviewCount": 14200,
    "image": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Lululemon. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 7100,
        "sentimentScore": 78,
        "price": 8900,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 2130,
        "sentimentScore": 80,
        "price": 9399,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 2840,
        "sentimentScore": 77,
        "price": 8784,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 1136,
        "sentimentScore": 66,
        "price": 7760,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 994,
        "sentimentScore": 68,
        "price": 8068,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Lululemon",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 78,
        "neutral": 13,
        "negative": 9
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 84
        }
      ]
    }
  },
  {
    "id": "prod-206",
    "title": "Decathlon Domyos Motorized Folding Treadmill T540C",
    "brand": "Decathlon",
    "category": "Fitness & Sports",
    "price": 44999,
    "originalPrice": 54999,
    "rating": 4.4,
    "reviewCount": 3600,
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Decathlon. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 1800,
        "sentimentScore": 76,
        "price": 44999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 540,
        "sentimentScore": 78,
        "price": 44106,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 720,
        "sentimentScore": 75,
        "price": 44884,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 288,
        "sentimentScore": 64,
        "price": 39105,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 252,
        "sentimentScore": 66,
        "price": 40954,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Decathlon",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 76,
        "neutral": 16,
        "negative": 8
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 82
        }
      ]
    }
  },
  {
    "id": "prod-207",
    "title": "Optimum Nutrition Gold Standard 100% Whey Protein Double Rich",
    "brand": "Optimum Nutrition",
    "category": "Fitness & Sports",
    "price": 6899,
    "originalPrice": 8499,
    "rating": 4.6,
    "reviewCount": 38000,
    "image": "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Optimum Nutrition. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 19000,
        "sentimentScore": 83,
        "price": 6899,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 5700,
        "sentimentScore": 85,
        "price": 7273,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 7600,
        "sentimentScore": 82,
        "price": 6936,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 3040,
        "sentimentScore": 71,
        "price": 6027,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 2660,
        "sentimentScore": 73,
        "price": 6260,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Optimum Nutrition",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 10,
        "negative": 7
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 80
        }
      ]
    }
  },
  {
    "id": "prod-208",
    "title": "Kobo Cast Iron Hex Dumbbell Set 5kg x 2 Anti-Roll",
    "brand": "Kobo",
    "category": "Fitness & Sports",
    "price": 2199,
    "originalPrice": 3500,
    "rating": 4.4,
    "reviewCount": 12400,
    "image": "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Kobo. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.4,
        "reviewCount": 6200,
        "sentimentScore": 80,
        "price": 2199,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.5,
        "reviewCount": 1860,
        "sentimentScore": 82,
        "price": 2237,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.4,
        "reviewCount": 2480,
        "sentimentScore": 79,
        "price": 2141,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4,
        "reviewCount": 992,
        "sentimentScore": 68,
        "price": 1927,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.1,
        "reviewCount": 868,
        "sentimentScore": 70,
        "price": 1967,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Kobo",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 80,
        "neutral": 13,
        "negative": 7
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 89
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-209",
    "title": "Speedo Fastskin Hyper Elite Mirror Swimming Goggles",
    "brand": "Speedo",
    "category": "Fitness & Sports",
    "price": 4999,
    "originalPrice": 5999,
    "rating": 4.7,
    "reviewCount": 2900,
    "image": "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Speedo. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 1450,
        "sentimentScore": 92,
        "price": 4999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 435,
        "sentimentScore": 94,
        "price": 4930,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 580,
        "sentimentScore": 91,
        "price": 4895,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 232,
        "sentimentScore": 80,
        "price": 4298,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 203,
        "sentimentScore": 82,
        "price": 4497,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Speedo",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 92,
        "neutral": 6,
        "negative": 2
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Mixed",
          "score": 74
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Mixed",
          "score": 77
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 85
        }
      ]
    }
  },
  {
    "id": "prod-210",
    "title": "Yonex Astrox 99 Pro Badminton Racket Full Graphite",
    "brand": "Yonex",
    "category": "Fitness & Sports",
    "price": 16499,
    "originalPrice": 19990,
    "rating": 4.8,
    "reviewCount": 4100,
    "image": "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Yonex. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 2050,
        "sentimentScore": 78,
        "price": 16499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 615,
        "sentimentScore": 80,
        "price": 17214,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 820,
        "sentimentScore": 77,
        "price": 16513,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 328,
        "sentimentScore": 66,
        "price": 14199,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 287,
        "sentimentScore": 68,
        "price": 15364,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Yonex",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 78,
        "neutral": 14,
        "negative": 8
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Positive",
          "score": 95
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-211",
    "title": "Spalding NBA Official Leather Basketball Size 7",
    "brand": "Spalding",
    "category": "Fitness & Sports",
    "price": 4299,
    "originalPrice": 5499,
    "rating": 4.7,
    "reviewCount": 7800,
    "image": "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Spalding. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 3900,
        "sentimentScore": 90,
        "price": 4299,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 1170,
        "sentimentScore": 92,
        "price": 4245,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 1560,
        "sentimentScore": 89,
        "price": 4362,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 624,
        "sentimentScore": 78,
        "price": 3797,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 546,
        "sentimentScore": 80,
        "price": 3880,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Spalding",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 90,
        "neutral": 2,
        "negative": 8
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Mixed",
          "score": 79
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 92
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 81
        }
      ]
    }
  },
  {
    "id": "prod-212",
    "title": "Nivia Storm Football Hard Ground Rubber Molded Size 5",
    "brand": "Nivia",
    "category": "Fitness & Sports",
    "price": 549,
    "originalPrice": 890,
    "rating": 4.3,
    "reviewCount": 31000,
    "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Nivia. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.3,
        "reviewCount": 15500,
        "sentimentScore": 89,
        "price": 549,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.4,
        "reviewCount": 4650,
        "sentimentScore": 91,
        "price": 550,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.3,
        "reviewCount": 6200,
        "sentimentScore": 88,
        "price": 555,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.9,
        "reviewCount": 2480,
        "sentimentScore": 77,
        "price": 471,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4,
        "reviewCount": 2170,
        "sentimentScore": 79,
        "price": 514,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Nivia",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 89,
        "neutral": 4,
        "negative": 7
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 85
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 82
        }
      ]
    }
  },
  {
    "id": "prod-213",
    "title": "Garmin Edge 840 Solar GPS Cycling Computer",
    "brand": "Garmin",
    "category": "Fitness & Sports",
    "price": 54490,
    "originalPrice": 59990,
    "rating": 4.8,
    "reviewCount": 980,
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Garmin. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 490,
        "sentimentScore": 84,
        "price": 54490,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 147,
        "sentimentScore": 86,
        "price": 53862,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 196,
        "sentimentScore": 83,
        "price": 53889,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 78,
        "sentimentScore": 72,
        "price": 47572,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 69,
        "sentimentScore": 74,
        "price": 49319,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Garmin",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 84,
        "neutral": 10,
        "negative": 6
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 80
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Mixed",
          "score": 78
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 89
        }
      ]
    }
  },
  {
    "id": "prod-214",
    "title": "TRX All-in-One Suspension Trainer Bodyweight System",
    "brand": "TRX",
    "category": "Fitness & Sports",
    "price": 14999,
    "originalPrice": 17999,
    "rating": 4.8,
    "reviewCount": 6500,
    "image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by TRX. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 3250,
        "sentimentScore": 79,
        "price": 14999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 975,
        "sentimentScore": 81,
        "price": 15236,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 1300,
        "sentimentScore": 78,
        "price": 15206,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 520,
        "sentimentScore": 67,
        "price": 13039,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 455,
        "sentimentScore": 69,
        "price": 13746,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from TRX",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 79,
        "neutral": 18,
        "negative": 3
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 86
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Mixed",
          "score": 74
        }
      ]
    }
  },
  {
    "id": "prod-215",
    "title": "TriggerPoint GRID Foam Roller Multi-Density Massage",
    "brand": "TriggerPoint",
    "category": "Fitness & Sports",
    "price": 3499,
    "originalPrice": 4499,
    "rating": 4.7,
    "reviewCount": 16000,
    "image": "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by TriggerPoint. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.7,
        "reviewCount": 8000,
        "sentimentScore": 86,
        "price": 3499,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.8,
        "reviewCount": 2400,
        "sentimentScore": 88,
        "price": 3472,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.7,
        "reviewCount": 3200,
        "sentimentScore": 85,
        "price": 3419,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.3,
        "reviewCount": 1280,
        "sentimentScore": 74,
        "price": 3096,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.4,
        "reviewCount": 1120,
        "sentimentScore": 76,
        "price": 3121,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from TriggerPoint",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 86,
        "neutral": 10,
        "negative": 4
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 82
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 87
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 96
        }
      ]
    }
  },
  {
    "id": "prod-216",
    "title": "Strauss Adjustable Hand Grip Strengthener 10-40kg",
    "brand": "Strauss",
    "category": "Fitness & Sports",
    "price": 299,
    "originalPrice": 599,
    "rating": 4.2,
    "reviewCount": 29000,
    "image": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Strauss. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.2,
        "reviewCount": 14500,
        "sentimentScore": 86,
        "price": 299,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.3,
        "reviewCount": 4350,
        "sentimentScore": 88,
        "price": 312,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.2,
        "reviewCount": 5800,
        "sentimentScore": 85,
        "price": 306,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 3.8,
        "reviewCount": 2320,
        "sentimentScore": 74,
        "price": 257,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 3.9,
        "reviewCount": 2030,
        "sentimentScore": 76,
        "price": 274,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Strauss",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 86,
        "neutral": 8,
        "negative": 6
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Positive",
          "score": 94
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 85
        }
      ]
    }
  },
  {
    "id": "prod-217",
    "title": "Hyperice Hypervolt 2 Pro Cordless Percussion Massager",
    "brand": "Hyperice",
    "category": "Fitness & Sports",
    "price": 39999,
    "originalPrice": 44999,
    "rating": 4.8,
    "reviewCount": 2100,
    "image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Hyperice. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 1050,
        "sentimentScore": 90,
        "price": 39999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 315,
        "sentimentScore": 92,
        "price": 41459,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 420,
        "sentimentScore": 89,
        "price": 39926,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 168,
        "sentimentScore": 78,
        "price": 34406,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 147,
        "sentimentScore": 80,
        "price": 36712,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Hyperice",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 90,
        "neutral": 8,
        "negative": 2
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 90
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 81
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 89
        }
      ]
    }
  },
  {
    "id": "prod-218",
    "title": "Adidas Predator Elite Firm Ground Football Cleats",
    "brand": "Adidas",
    "category": "Fitness & Sports",
    "price": 21999,
    "originalPrice": 24999,
    "rating": 4.8,
    "reviewCount": 1900,
    "image": "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Adidas. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.8,
        "reviewCount": 950,
        "sentimentScore": 77,
        "price": 21999,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.9,
        "reviewCount": 285,
        "sentimentScore": 79,
        "price": 22541,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.8,
        "reviewCount": 380,
        "sentimentScore": 76,
        "price": 21862,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.4,
        "reviewCount": 152,
        "sentimentScore": 65,
        "price": 19459,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.5,
        "reviewCount": 133,
        "sentimentScore": 67,
        "price": 19411,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Adidas",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 77,
        "neutral": 17,
        "negative": 6
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Positive",
          "score": 88
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Mixed",
          "score": 77
        }
      ]
    }
  },
  {
    "id": "prod-219",
    "title": "Gymshark Arrival Slim Fit Gym Workout Shorts",
    "brand": "Gymshark",
    "category": "Fitness & Sports",
    "price": 2899,
    "originalPrice": 3500,
    "rating": 4.6,
    "reviewCount": 5400,
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Gymshark. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.6,
        "reviewCount": 2700,
        "sentimentScore": 83,
        "price": 2899,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.7,
        "reviewCount": 810,
        "sentimentScore": 85,
        "price": 2892,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.6,
        "reviewCount": 1080,
        "sentimentScore": 82,
        "price": 2850,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.2,
        "reviewCount": 432,
        "sentimentScore": 71,
        "price": 2497,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.3,
        "reviewCount": 378,
        "sentimentScore": 73,
        "price": 2712,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Gymshark",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 83,
        "neutral": 15,
        "negative": 2
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 91
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 93
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Positive",
          "score": 96
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Mixed",
          "score": 75
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Positive",
          "score": 96
        }
      ]
    }
  },
  {
    "id": "prod-220",
    "title": "Cosco Light Cricket Tennis Ball Pack of 12 Heavy Duty",
    "brand": "Cosco",
    "category": "Fitness & Sports",
    "price": 899,
    "originalPrice": 1199,
    "rating": 4.5,
    "reviewCount": 24500,
    "image": "https://images.unsplash.com/photo-1531415074868-036b1c5f53ec?auto=format&fit=crop&w=600&q=80",
    "description": "Premium Fitness & Sports product by Cosco. High customer sentiment across verified e-commerce marketplaces with robust aspect performance.",
    "platforms": {
      "Amazon": {
        "rating": 4.5,
        "reviewCount": 12250,
        "sentimentScore": 92,
        "price": 899,
        "deliverySpeed": "1-2 Days",
        "authenticityRating": 98
      },
      "Nykaa": {
        "rating": 4.6,
        "reviewCount": 3675,
        "sentimentScore": 94,
        "price": 883,
        "deliverySpeed": "2-3 Days",
        "authenticityRating": 99
      },
      "Myntra": {
        "rating": 4.5,
        "reviewCount": 4900,
        "sentimentScore": 91,
        "price": 915,
        "deliverySpeed": "2 Days",
        "authenticityRating": 97
      },
      "Meesho": {
        "rating": 4.1,
        "reviewCount": 1960,
        "sentimentScore": 80,
        "price": 805,
        "deliverySpeed": "4-5 Days",
        "authenticityRating": 82
      },
      "Snapdeal": {
        "rating": 4.2,
        "reviewCount": 1715,
        "sentimentScore": 82,
        "price": 831,
        "deliverySpeed": "3-4 Days",
        "authenticityRating": 85
      }
    },
    "aiSummary": {
      "pros": [
        "Exceptional durability under load praised by over 80% of buyers",
        "Reliable build quality from Cosco",
        "Competitive marketplace price with fast delivery options"
      ],
      "cons": [
        "Premium price point compared to entry-level alternatives",
        "Minor packaging wear reported on budget marketplaces"
      ],
      "sentimentBreakdown": {
        "positive": 92,
        "neutral": 2,
        "negative": 6
      },
      "verdict": "Highly recommended in the Fitness & Sports segment for buyers prioritizing authentic performance.",
      "aspects": [
        {
          "aspect": "Durability Under Load",
          "sentiment": "Positive",
          "score": 97
        },
        {
          "aspect": "Grip & Non-Slip Surface",
          "sentiment": "Positive",
          "score": 84
        },
        {
          "aspect": "Portability & Storage",
          "sentiment": "Mixed",
          "score": 76
        },
        {
          "aspect": "Ergonomic Build",
          "sentiment": "Positive",
          "score": 83
        },
        {
          "aspect": "Material Safety",
          "sentiment": "Mixed",
          "score": 75
        }
      ]
    }
  }
];

export const TOTAL_PRODUCTS_COUNT = ALL_PRODUCTS.length;

export const PRODUCT_CATEGORIES: string[] = [
  'All Categories',
  'Audio & Acoustics',
  'Smartphones & Mobile',
  'Beauty & Skincare',
  'Laptops & Computing',
  'Smart Wearables & Watches',
  'Fashion & Footwear',
  'Home & Kitchen Appliances',
  'Gaming & Consoles',
  'Personal Care & Grooming',
  'Cameras & Photography',
  'Fitness & Sports'
];

export const PRODUCT_BRANDS: string[] = Array.from(
  new Set(ALL_PRODUCTS.map((p) => p.brand))
).sort();

export function getProductById(id: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.id === id);
}

export function searchProducts(query: string, category = 'All Categories'): Product[] {
  const q = query.trim().toLowerCase();
  return ALL_PRODUCTS.filter((p) => {
    if (category !== 'All Categories' && p.category !== category) return false;
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });
}

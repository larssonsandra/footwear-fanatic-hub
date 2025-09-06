export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  sizes: number[];
  colors: {
    name: string;
    value: string;
    image: string;
  }[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Air Max Revolution",
    price: "$189",
    originalPrice: "$249",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
    category: "Running",
    description: "Experience ultimate comfort and performance with the Air Max Revolution. Engineered with advanced cushioning technology and breathable mesh upper for maximum comfort during your runs.",
    features: [
      "Advanced Air Max cushioning system",
      "Breathable mesh upper with synthetic overlays",
      "Durable rubber outsole with flex grooves",
      "Lightweight construction for all-day comfort",
      "Reflective details for low-light visibility"
    ],
    sizes: [6, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    colors: [
      {
        name: "Black/Red",
        value: "black",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop"
      },
      {
        name: "White/Blue",
        value: "white",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop"
      },
      {
        name: "Gray/Orange",
        value: "gray",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop"
      }
    ],
    inStock: true
  },
  {
    id: 2,
    name: "Urban Explorer",
    price: "$159",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
    category: "Lifestyle",
    description: "Perfect for city adventures and casual outings. The Urban Explorer combines street-ready style with all-day comfort, making it your go-to choice for urban exploration.",
    features: [
      "Premium leather and suede upper",
      "Memory foam insole for superior comfort",
      "Reinforced toe and heel for durability",
      "Slip-resistant rubber outsole",
      "Classic design with modern touches"
    ],
    sizes: [6, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: [
      {
        name: "Navy Blue",
        value: "navy",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop"
      },
      {
        name: "Brown Leather",
        value: "brown",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop"
      }
    ],
    inStock: true
  },
  {
    id: 3,
    name: "Elite Performance",
    price: "$299",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    category: "Training",
    description: "Engineered for athletes who demand the best. The Elite Performance series delivers superior support, stability, and energy return for intense training sessions and competitions.",
    features: [
      "Carbon fiber plate for explosive energy return",
      "Engineered mesh upper with zone ventilation",
      "Multi-directional traction outsole",
      "Lockdown lacing system for secure fit",
      "Professional-grade performance technology"
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14],
    colors: [
      {
        name: "Black/Gold",
        value: "black",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop"
      },
      {
        name: "White/Silver",
        value: "white",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop"
      }
    ],
    inStock: true
  },
  {
    id: 4,
    name: "Classic Heritage",
    price: "$139",
    originalPrice: "$179",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
    category: "Casual",
    description: "Timeless style meets modern comfort. The Classic Heritage collection celebrates traditional craftsmanship while incorporating contemporary comfort technologies for everyday wear.",
    features: [
      "Premium canvas and leather construction",
      "Cushioned footbed for all-day comfort",
      "Vintage-inspired design with modern updates",
      "Durable construction for long-lasting wear",
      "Versatile style for any occasion"
    ],
    sizes: [6, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    colors: [
      {
        name: "Canvas Tan",
        value: "tan",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop"
      },
      {
        name: "Classic White",
        value: "white",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop"
      }
    ],
    inStock: true
  }
];
import { Product } from "../models/Product";

export const getTrendingProducts = (): Product[] => {
    return [
        {
            id: 1,
            name: "Wireless Earbuds Pro",
            description: "High-quality wireless earbuds with noise cancellation",
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600",
            prices: { amazon: 129.99, flipkart: 124.99 },
        },
        {
            id: 2,
            name: "Smart Fitness Watch",
            description: "Track your health and fitness with this advanced smartwatch",
            image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600",
            prices: { amazon: 199.99, flipkart: 189.99 },
        },
        {
            id: 3,
            name: "4K Ultra HD Smart TV",
            description: "55-inch smart TV with stunning picture quality",
            image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600",
            prices: {
              amazon: 699.99,
              flipkart: 679.99
            }
          },
          {
            id:4,
            name:"Gaming Laptop X15",
            description:"High-performance gaming laptop with RTX graphics",
            image:"images/gaminglaptop.jpg",
            prices:{
              amazon:1499.99,
              flipkart:1459.99
              
            }
          },
          {
            id:5,
            name:"Noise Cancelling Headphones",
            description:"Premium noise-canceling headphones with long battery life",
            image:"images/Headphones.jpg",
            prices:{
              amazon:299.99,
              flipkart:289.99
              
            }
          },
          {
            id: 6,
            name: "Portable Bluetooth Speaker",
            description: "Compact and powerful speaker with deep bass",
            image: "images/speaker.jpg",
            prices: {
              amazon: 89.99,
              flipkart: 84.99
            }
          },
          {
            id: 7,
            name: "Smartphone Pro Max",
            description: "Flagship smartphone with advanced camera and AI features",
            image: "images/phone.jpg",
            prices: {
              amazon: 999.99,
              flipkart: 979.99
            }
          },
          {
            id: 8,
            name: "Mechanical Gaming Keyboard",
            description: "RGB-backlit mechanical keyboard with fast response time",
            image: "images/keyboard.jpg",
            prices: {
              amazon: 129.99,
              flipkart: 119.99
            }
          },
          {
            id: 9,
            name: "Ergonomic Office Chair",
            description: "Comfortable chair with lumbar support and adjustable height",
            image: "images/chair.jpg",
            prices: {
              amazon: 199.99,
              flipkart: 189.99
            }
          }
    ];
};
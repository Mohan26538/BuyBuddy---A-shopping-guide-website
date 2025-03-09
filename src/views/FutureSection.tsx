import { Search, TrendingUp, ShoppingCart } from "lucide-react";

const FeatureSection = () => {
  return (
    <section id="features" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          Why Choose BuyBuddy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
            <p className="text-gray-600">
              Find exactly what you're looking for with our intelligent search system.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Prices</h3>
            <p className="text-gray-600">
              Get up-to-date prices from multiple e-commerce platforms.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Price Alerts</h3>
            <p className="text-gray-600">
              Set alerts for price drops on your favorite products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

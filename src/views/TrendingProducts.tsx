
import { getTrendingProducts } from "../controllers/productController";
import { ExternalLink, ShoppingCart, TrendingUp,ArrowRight } from "lucide-react";

const TrendingProducts = () => {
    const trendingProducts = getTrendingProducts();
    return (
        <section id="trending" className="py-16 container mx-auto px-4">
            <div className="flex items-center mb-8">
                <TrendingUp className="text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold">Trending Deals</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trendingProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center">
                                        <ShoppingCart className="w-4 h-4 mr-1" /> Amazon
                                    </span>
                                    <span className="font-semibold">${product.prices.amazon}</span>
                                    <a href="#" className="text-blue-600 hover:text-blue-800">
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                                <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                <ShoppingCart className="w-4 h-4 mr-1" /> Flipkart
                               </span>
                               <span className="font-semibold">${product.prices.flipkart}</span>
                               <a href="#" className="text-blue-600 hover:text-blue-800">
                               <ExternalLink className="w-4 h-4" />
                               </a>
                            </div>
                            </div>
                            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Compare Prices <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default TrendingProducts;
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <ShoppingCart className="h-8 w-8 text-blue-600" />
                        <span className="ml-2 text-xl font-bold">BuyBuddy</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
                        <a href="#trending" className="text-gray-700 hover:text-blue-600">Trending</a>
                        <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
                        <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4">
                        <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
                        <a href="#trending" className="block py-2 text-gray-700 hover:text-blue-600">Trending</a>
                        <a href="#features" className="block py-2 text-gray-700 hover:text-blue-600">Features</a>
                        <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
                    </div>
                )}
            </div>
        </nav>
    );
};
export default Navbar;
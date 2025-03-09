import { useState } from "react";
import { Search } from "lucide-react";
import { handleSearch } from "../controllers/searchController"; 

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find the Best Deals Across the Web
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Compare prices instantly across multiple platforms and save money on your purchases
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full py-4 pl-12 pr-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch(searchQuery)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
// const HeroSection = () => {
//   return (
    
//     <section>
//       <h1>Welcome to BuyBuddy</h1>
      
//     </section>
//   );
// };

// export default HeroSection;
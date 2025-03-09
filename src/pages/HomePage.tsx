import HeroSection from "../views/HeroSection";
import Navbar from "../views/Navbar";
import TrendingProducts from "../views/TrendingProducts";
import FeatureSection from "../views/FutureSection";
import { ChatBot } from "../components/ChatBot";
const HomePage = () => {
  return (
    <div>
       
      <Navbar/>
      <HeroSection/>
      
      <TrendingProducts/>
      <FeatureSection/>
      <ChatBot/>
      
    </div>
  );
};

export default HomePage;

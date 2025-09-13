import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import News from "./News";
import Recommedation from "./Recommedation";
import TopSeller from "./TopSeller";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Top Seller Section */}
      <TopSeller />
      {/* recommdation section */}
      <Recommedation />
      {/* News section */}
      <News />
      {/* Featured section */}
      <FeatureSection />
    </>
  );
};

export default Home;

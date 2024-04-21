// Import HeroDescription component
import HeroDescription from "./HeroDescription";

// Import HeroSection component
import HeroSection from "./HeroSection";

// Define Hero component
function Hero() {
  return (
    <div className="mt-10">
      <HeroDescription />
      <HeroSection />
    </div>
  );
}

export default Hero;

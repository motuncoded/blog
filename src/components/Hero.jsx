// Import HeroDescription component
import HeroDescription from "./HeroDescription";

// Import HeroSection component
import HeroSection from "./HeroSection";

// Define Hero component
function Hero() {
  return (
    <div className="mt-10" aria-label="Hero component">
      <HeroDescription aria-label="Hero description" />
      <HeroSection aria-label="Hero section" />
    </div>
  );
}

export default Hero;

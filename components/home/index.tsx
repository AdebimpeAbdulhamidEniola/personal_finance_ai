import Header from "./header";
import Hero from "./hero";
import Features from "./features";
import HowItWorks from "./how-it-works";
import CTA from "./cta";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;

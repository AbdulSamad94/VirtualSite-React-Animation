import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Feature from "./Components/Feature";
import Workflow from "./Components/Workflow";
import Pricing from "./Components/Pricing";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Feature />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Workflow />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Pricing />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Testimonial />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Footer/>
      </div>
    </>
  );
}

export default App;

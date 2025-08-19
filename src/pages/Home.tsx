import React, { Suspense } from "react";
import Loader from "../components/Loader";
import HeroSection from "../components/HeroSection";
import About from "./About";
import Contact from "./Contact";
import VantaBackground from "../components/VantaBackground";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
  
   <div className="min-h-screen bg-transparent text-white">
  {/* Hero Section */}
  <section id="hero" className="bg-transparent">
    <HeroSection />
  </section>

  {/* About Section */}
  <section id="about" className="bg-transparent">
    <About />
  </section>

  {/* Portfolio Section */}
  {/* <section id="portfolio" className="bg-transparent">
    <Portfolio />
  </section> */}

  {/* Contact Section */}
  <section id="contact" className="bg-transparent">
    <Contact />
  </section>
</div>

    
  );
};

export default Home;

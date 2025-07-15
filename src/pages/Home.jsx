import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Footer from "../components/Footer/Footer";
import Features from "../components/Features/Features";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;

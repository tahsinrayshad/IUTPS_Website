import React from "react";
import Hero from "@/components/Home/Hero";
import Stat from "@/components/Home/Stat";
import About from "@/components/Home/About";
import Gallery from "@/components/Home/Gallary";
import Event from "@/components/Home/Event";
import Alumni from "@/components/Home/Alumni";
import Team from "@/components/Home/Team";
import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
    <div className="min-h-90vh flex flex-col bg-black">
      {/* Navigation */}

      {/* Main Content */}
      
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}     

        <Stat/>

        {/* About Section */}
        <About/>

        {/* Gallery Section */}
        <Gallery/>

        {/* Events Section */}
        <Event/>

        {/* Testimonials Section */}
        <Alumni/>

        {/* Team Section */}
        <Team/>

        {/* Contact Section */}
        <Contact/>
      
    </div>
  );
}

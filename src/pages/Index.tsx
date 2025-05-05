
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skillset from '@/components/Skillset';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import BlogSection from '@/components/BlogSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Skillset />
      <Services />
      <Projects />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

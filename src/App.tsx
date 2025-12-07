import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Features } from './components/Features';
import { ChurchTools } from './components/ChurchTools';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Audience } from './components/Audience';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Features />
      <ChurchTools />
      <Pricing />
      <Testimonials />
      <Audience />
      <CTA />
      <Footer />
    </div>
  );
}
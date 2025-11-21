import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PinkBanner } from './components/PinkBanner';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-900 bg-white relative min-h-screen">
      <Navbar />
      <Hero />
      <PinkBanner />
      <Services />
      <Stats />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </div>
  );
};

export default App;

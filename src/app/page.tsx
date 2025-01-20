import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { MenuMobile } from './components/MenuMobile';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Projects from './components/Projects';
import Phrase from './components/Phrase';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Whatsapp from './components/Whatsapp';
import CookieConsent from './components/Cookies';

export default function Home() {
  return (
    <div className="w-full">
      <div>
        <Header />
        <CookieConsent />
        <MenuMobile />
        <Whatsapp />
        <Hero />
        <Services />
        <Differentials />
        <Projects />
        <Phrase />
        <Clients />
        <Footer />
      </div>
    </div>
  )
}
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="flex flex-col items-center font-montserrat">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
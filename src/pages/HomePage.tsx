import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import WhyNow from '../components/WhyNow'
import HowItWorks from '../components/HowItWorks'
import EcosystemShowcase from '../components/EcosystemShowcase'
import MetricsSection from '../components/MetricsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FeaturesGrid from '../components/FeaturesGrid'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      <Navbar />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <WhyNow />
        <HowItWorks />
        <EcosystemShowcase />
        <MetricsSection />
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="features">
          <FeaturesGrid />
        </div>
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default HomePage
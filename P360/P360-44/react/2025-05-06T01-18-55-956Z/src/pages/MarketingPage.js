import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';

// Marketing page component
function MarketingPage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactForm />
    </main>
  );
}

export default MarketingPage;
import React from 'react';
import Hero from '../components/hero/Hero';
import FeaturesSection from '../components/section/FeatureSection';
import TestimonialsCarousel from '../components/testimonial/TestmonialsCarousel';
import ContactForm from '../components/contact/Contact';
import FeatureCard from '../components/feature/FeatureCard';

function Home() {
  return (
    <>
      <Hero />
      <FeatureCard/>
      <FeaturesSection />
      <TestimonialsCarousel />
      <ContactForm />
    </>
  );
}
export default Home;
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import FeatureCard from './components/feature/FeatureCard';
import FeaturesSection from './components/section/FeatureSection';
import TestimonialsCarousel from './components/testimonial/TestmonialsCarousel';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Feature" element={ <FeaturesSection/>} />
       <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<TestimonialsCarousel />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;


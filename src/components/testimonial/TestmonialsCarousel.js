import React, { useState, useEffect } from 'react';
import jd from '../utils/img/jd.jpeg';
import sara from '../utils/img/sara.jpeg';  
import js from '../utils/img/js.jpeg';

const testimonials = [
  { img: jd ,name: "John Doe", feedback: "Excellent care and friendly staff!" },
  {img: sara , name: "Sarah Lee", feedback: "Doctors are very experienced and helpful." },
  { img: js ,name: "Michael Smith", feedback: "Great facilities and quick service." }
];

function TestimonialsCarousel() {
  const [i, setI] = useState(0);

  const next = () => setI((i + 1) % testimonials.length);
  const prev = () => setI((i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prevI) => (prevI + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="testimonials" className="bg-light text-center p-5">
      <h2 className="mb-4">What Our Patients Say</h2>
      <img src={testimonials[i].img} alt={testimonials[i].name} className="rounded-circle mb-3" style={{ width: '100px', height: '100px' }} />
      <h4>{testimonials[i].name}</h4>
      <p className="fst-italic">"{testimonials[i].feedback}"</p>
 
      <div className="mt-3">
        <button onClick={prev} className="btn btn-outline-primary me-2">Prev</button>
        <button onClick={next} className="btn btn-primary">Next</button>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
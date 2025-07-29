import react from 'react';
import emg from '../components/utils/img/emg.jpg';
import ed from '../components/utils/img/ed.webp';
import ip from '../components/utils/img/ip.jpeg';
import jd from '../components/utils/img/jd.jpeg';
import js from '../components/utils/img/js.jpeg';
import sara from '../components/utils/img/sara.jpeg';


export const featuresData = [
  {
    title: "24x7 Emergency",
    description: "Round-the-clock emergency services for all critical cases.",
    icon: emg
  },
  {
    title: "Expert Doctors",
    description: "Meet our highly qualified and experienced doctors specializing in various fields.",
    icon: ed
  },
  {
    title: "International Patients",
    description: "Comprehensive care and assistance for patients coming from abroad.",
    icon: ip
  }
];

export const testimonialsData = [
  { 
    img: jd,
    name: "John Doe",
    feedback: "Excellent care and friendly staff! The doctors are truly amazing."
  },
  {img: sara,
    name: "Sarah Lee",
    feedback: "State-of-the-art facilities and outstanding treatment. Highly recommended!"
  },
  {img: js,
    name: "Michael Smith",
    feedback: "Quick service and very cooperative hospital staff. Made me feel safe."
  },
  
];
import React from 'react';
import emg from '../utils/img/emg.jpg'
import ed from '../utils/img/ed.webp';
import ip from '../utils/img/ip.jpeg';

import FeatureCard from '../feature/FeatureCard';

const features = [
  {  title: "24x7 Emergency", description: "Round-the-clock emergency services.", icon: emg },
  { title: "Expert Doctors", description: "Team of highly qualified doctors.", icon: ed },
  { title: "International Patients", description: "Special care for patients from abroad.", icon: ip }
];

function FeatureSection() {
  return (
    <div id="features" className="container py-5">
      <div className="row g-4">
        {features.map((f, i) => (
          <div className="col-md-4" key={i}>
            <FeatureCard {...f} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
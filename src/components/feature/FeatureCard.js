import React from 'react';
import featuresData from '../../Data/Data.js';
function FeatureCard({ icon,title, description }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={icon} className="card-img-top w-25 mx-auto mt-3" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
export default FeatureCard;
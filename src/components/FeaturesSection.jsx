import React from 'react';
import '../assets/css/FeaturesSection.css';
import main from '../assets/images/image.png'

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <div className="features-image">
        <img src={main} alt="Main Watch" />
      </div>
      <div className="features-text">
        <div className="features-item">
          <h1>01</h1>
          <p>Built to last, our watches offer durability and longevity, making them a valuable investment.</p>
        </div>
        <div className="features-item">
          <h1>02</h1>
          <p>Every timepiece is made with the highest quality materials and meticulous attention to detail.</p>
        </div>
        <div className="features-item">
          <h1>03</h1>
          <p>Designed for both aesthetics and comfort, our watches are as pleasing to wear as they are to look at.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

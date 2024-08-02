import React from 'react';
import '../assets/css/GallerySection.css';
import rolex1 from '../assets/images/rolex1.png'
import rolex2 from '../assets/images/rolex2.png'
import rolex3 from '../assets/images/rolex3.png'

const GallerySection = () => {
  return (
    <div className="gallery-section">
      <div className="gallery-item">
        <img src={rolex1} alt="Watch 1" />
      </div>
      <div className="gallery-item">
        <img src={rolex2} alt="Watch 2" />
      </div>
      <div className="gallery-item">
        <img src={rolex3} alt="Watch 3" />
      </div>
    </div>
  );
};

export default GallerySection;

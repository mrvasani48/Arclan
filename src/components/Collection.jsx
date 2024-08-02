import React from 'react';
import '../assets/css/collection.css';
import watch1 from '../assets/images/watch1.png'
import watch2 from '../assets/images/watch2.png'
import gray1 from '../assets/images/gray1.png'
import gray2 from '../assets/images/gray2.png'

const Collection = () => {
  return (
    <div className="collection-section">
     <div className="collection-item-image">
     <img src={gray1} alt='gray-1'></img>
     <img src={gray2} alt='gray-2'></img>
     </div>
      <div className="collection-item">
        <h1>Elegant Timepieces Collection</h1>
        <p>
          Discover our curated collection of premium timepieces, blending classic elegance with modern craftsmanship. Elevate your style with watches that embody precision, sophistication, and enduring quality.
        </p>
        <button className="hero-button">Explore More</button>
      </div>
      <div className="collection-item-watch">
        <img src={watch1} alt='watch-1'></img>
        <img src={watch2} alt='watch-2'></img>
      </div>
    </div>
  );
};

export default Collection;

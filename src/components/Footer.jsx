import React from 'react';
import '../assets/css/footer.css';
import fb from '../assets/images/icons/fb.svg'
import twitter from '../assets/images/icons/twitter.svg'
import instagram from '../assets/images/icons/instagram.svg'
import figma from '../assets/images/icons/figma.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>Arclan</h3>
        <p>High level experience in web design and development knowledge, producing quality work.</p>
        <hr />
        <p className='copy'>&copy; 2024 All Rights Reserved</p>
      </div>
        <div className="footer-follow">
          <h4 className='follow'>Follow us</h4>
          <div className='social'>
            <img src={fb} alt='facebook'/>
            <img src={twitter} alt='twitter'/>
            <img src={instagram} alt='instagram'/>
            <img src={figma} alt='figma'/>
          </div> 
          <h4>Call us</h4>
          <p>+1 800 654-36-80</p>
        </div>
    
        <div className="footer-links">
          <h4>Customer Care</h4>
          <p>About Us</p>
          <p>Delivery & Returns</p>
          <p>Terms & Conditions</p>
          <p>Product Return</p>
          <p>Wholesale Policy</p>
        </div>
        <div className="footer-links">
          <h4>Quick Shop</h4>
          <p>Position</p>
          <p>Terms & Conditions</p>
          <p>Accessories</p>
          <p>Contact Us</p>
          <p>Terms of Use</p>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <p>Help Center</p>
          <p>Address Store</p>
          <p>Privacy Policy</p>
          <p>Receivers</p>
          <p>Store Locations</p>
        </div>
    </footer>
  );
};

export default Footer;

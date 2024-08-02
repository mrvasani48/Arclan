import React, { useState } from 'react';
import '../assets/css/Navbar.css';
import { Icon } from '@iconify/react/dist/iconify.js';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Arclan
      </div>
      <div className={isMobile ? "navbar-links-mobile" : "navbar-links"}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#shop">Shop</a>
        <a href="#contact">Contact</a>
        <div className='action'>
        <div>
        <Icon icon="material-symbols:search" />

        </div>
        <div>
        <Icon icon="f7:bag" />

        </div>
        <div>
        <Icon icon="iconamoon:profile-thin" />

        </div>


        </div>
      </div>
      <button className="navbar-menu-icon" onClick={() => setIsMobile(!isMobile)}>
      <Icon icon="fe:bar" fontSize={18} />
            </button>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <ul>
            <a href="#" >HOME</a>
            <a href="#about">ABOUT US</a>
            <a href="#services">SERVICE</a>
            <a href="#contact">CONTACT</a>
        </ul>
    </nav>
  );
};

export default Navbar;
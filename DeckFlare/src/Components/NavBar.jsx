import React, { useState } from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between p-4 border-b-[0.5px] border-[#2e2e2f] items-center sticky top-0 bg-[#161618] z-50'>
      {/* Container for Logo and Hamburger Menu */}
      <div className='flex items-center w-full md:w-auto'>
        {/* Logo */}
        <div className='cursor-pointer flex-shrink-0 ml-4 md:ml-20'>
          <Link to="/" spy={true} smooth={true} offset={-70} duration={500}>
            <span className='text-yellow-400 text-5xl font-bold'>Deck</span>
            <span className='text-white text-5xl font-bold'>.</span>
          </Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <button
          className='block md:hidden text-white text-3xl ml-auto mr-10'
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>
      
      {/* Desktop Navigation */}
      <div className='hidden md:flex mr-20'>
        <ul className='flex gap-6 text-white text-xl font-medium'>
          <li className='cursor-pointer hover:text-yellow-400 ease-in-out duration-300'>
            <Link to="/" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
          </li>
          <li className='cursor-pointer hover:text-yellow-400 ease-in-out duration-300'>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
          </li>
          <li className='cursor-pointer hover:text-yellow-400 ease-in-out duration-300'>
            <Link to="services" spy={true} smooth={true} offset={-110} duration={500}>Services</Link>
          </li>
          <li className='cursor-pointer hover:text-yellow-400 ease-in-out duration-300'>
            <Link to="contactUs" spy={true} smooth={true} offset={-110} duration={500}>Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-[#161618] text-white p-6 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          className='text-3xl absolute top-4 right-4'
          onClick={toggleMobileMenu}
        >
          ×
        </button>
        <ul className='flex flex-col gap-6 text-xl font-medium'>
          <li className='cursor-pointer hover:text-yellow-400 ease-in-out duration-300'>
            <Link to="/" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMobileMenu}>Home</Link>
          </li>
          <li className='cursor-pointer hover:text-yellow-400 ease-in-out duration-300'>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMobileMenu}>About</Link>
          </li>
          <li className='cursor-pointer hover:text-yellow-400 ease-in-out duration-300'>
            <Link to="services" spy={true} smooth={true} offset={-110} duration={500} onClick={toggleMobileMenu}>Services</Link>
          </li>
          <li className='cursor-pointer hover:text-yellow-400 ease-in-out duration-300'>
            <Link to="contactUs" spy={true} smooth={true} offset={-110} duration={500} onClick={toggleMobileMenu}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

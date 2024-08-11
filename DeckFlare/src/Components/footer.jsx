import React from 'react';
import emailIllustration from '/src/assets/email-icon.png';
import instagramIllustration from '/src/assets/instagram-icon.png';
import githubIllustration from '/src/assets/github-icon.png';

function Footer() {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-between items-center bg-[#1d1d20] p-4'>
      {/* Logo Section */}
      <div className='lg:ml-20 text-center mb-4 md:mb-0'>
        <span className='text-yellow-400 text-4xl md:text-5xl font-bold'>Deck</span>
        <span className='text-white text-4xl md:text-5xl font-bold'>.</span>
      </div>

      {/* Copyright Text */}
      <p className='text-center text-sm md:text-base mb-4 md:mb-0 text-white'>
        All rights reserved @ DeckFlare 2024
      </p>

      {/* Social Media Icons */}
      <div className='flex justify-center gap-4 md:gap-6 lg:mr-20'>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img className='w-6 md:w-8' src={emailIllustration} alt="Email-logo" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img className='w-6 md:w-8' src={instagramIllustration} alt="Instagram-logo" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img className='w-6 md:w-8' src={githubIllustration} alt="Github-logo" />
        </a>
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';
import heroImg from '/src/assets/HeroImg.png';
import MainBtn from './MainBtn';

function HeroSection() {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-4 md:px-20 mb-11' id='/'>
      {/* Text Content */}
      <div className='text-white p-4 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
        <h2 className='text-4xl md:text-6xl font-bold leading-tight mb-4'>
          Transforming Clicks into <span className='text-yellow-400'>Valuable Customers.</span>
        </h2>
        <p className='text-base md:text-md font-bold mb-6'>
          Welcome to DeckFlare, your partner in unlocking the full potential of your online presence. We're a team of innovative thinkers, creative problem solvers, and digital marketing experts dedicated to helping businesses like yours thrive in the ever-evolving online landscape.
        </p>
        <MainBtn />
      </div>

      {/* Hero Image */}
      <div className='w-full md:w-1/2 flex justify-center'>
        <img 
          className='w-full h-auto md:w-[640px] md:h-[600px] object-cover' 
          src={heroImg} 
          alt="Hero-Img" 
        />
      </div>
    </div>
  );
}

export default HeroSection;

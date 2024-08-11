import React from 'react';
import aboutIllustration from '/src/assets/About-illustration.png';

function AboutUs() {
  return (
    <div className='flex flex-col text-center text-white justify-center items-center px-4 md:px-10 lg:px-20' id='about'>
      {/* Heading */}
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold my-6 md:my-10 border-b-4 border-yellow-500'>
        About Us
      </h1>

      {/* Description */}
      <p className='text-base md:text-lg lg:text-xl w-full md:w-4/5 lg:w-3/4 mb-6 md:mb-8'>
        We're not your average marketing agency. We're the renegades, the rebels, the ones who color outside the lines. We don't just think outside the box, we break it.
      </p>

      {/* Image */}
      <img 
        className='w-full md:w-3/4 lg:w-2/3 my-10 md:my-16 animate-translate-y' 
        src={aboutIllustration} 
        alt="About-Section-Illustration" 
      />
    </div>
  );
}

export default AboutUs;

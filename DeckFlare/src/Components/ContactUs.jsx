import React from 'react';
import contactIllustration from '/src/assets/contact-illustration.png';

function ContactUs() {
  return (
    <div id='contactUs' className='text-white px-4 sm:px-10 md:px-20 py-10'>
      <h1 className='text-center text-3xl md:text-4xl font-bold underline decoration-yellow-500 underline-offset-8 mb-8'>
        Contact Us
      </h1>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        {/* Contact Illustration */}
        <img 
          className='w-full md:w-1/2 max-w-xs md:max-w-md lg:max-w-lg mx-auto mb-8 md:mb-0' 
          src={contactIllustration} 
          alt="ContactUs Illustration" 
        />
        
        {/* Contact Form */}
        <div className='bg-white text-black w-full md:w-3/4 lg:w-1/2 rounded-xl flex flex-col justify-center items-center gap-6 p-6'>
          <h4 className='text-center text-xl md:text-2xl font-light mb-4'>
            Have a project in mind?<br />or want to join us?
          </h4>
          <h1 className='text-2xl md:text-3xl font-extrabold mb-4'>
            Let's Talk
          </h1>
          <img 
            className='w-24 md:w-28 mb-4' 
            src="https://assets-global.website-files.com/64056fef7504e53451ce2061/64056fef7504e58063ce20d7_Black-line.svg" 
            loading="lazy" 
            alt="Separator"
          />
          <input 
            className='border-black border-2 rounded-lg p-2 w-full max-w-xs md:max-w-sm px-4 placeholder:text-black font-semibold mb-4' 
            type="text" 
            name="Full Name" 
            placeholder='Your Name' 
          />
          <input 
            className='border-black border-2 rounded-lg p-2 w-full max-w-xs md:max-w-sm px-4 placeholder:text-black font-semibold mb-4' 
            type="number" 
            name="Mobile Number" 
            placeholder='Mobile No.' 
          />
          <input 
            className='border-black border-2 rounded-lg p-2 w-full max-w-xs md:max-w-sm px-4 placeholder:text-black font-semibold mb-4' 
            type="email" 
            name="EmailId" 
            placeholder='Email' 
          />
          <button 
            className='w-full max-w-xs md:max-w-sm bg-black text-yellow-500 p-3 rounded-xl text-lg md:text-xl font-bold'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

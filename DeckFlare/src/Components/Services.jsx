import React from 'react';
import Cards from './Cards';
import seoIllustration from '/src/assets/SEO-illustration.jpg';
import smmIllustration from '/src/assets/Smm-illustration.jpg';
import webDevelopmentIllustration from '/src/assets/Webdevelopment-illustration.jpg';
import adscreationIllustration from '/src/assets/Adscreation-illustration.jpg';
import brandingIllustration from '/src/assets/branding-illustration.jpg';

function Services() {
  return (
    <div id='services' className='py-10'>
        <h1 className='text-center text-white text-3xl md:text-4xl font-bold underline decoration-yellow-500 underline-offset-8 mb-8'>
          Services
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-10 md:px-20 mx-auto'>
          <Cards 
            imgAddress={seoIllustration} 
            title="SEO Management" 
            content="Take your online presence to the next level with our comprehensive SEO management services. As a social media marketing agency, we understand the importance of search engine optimization with your social media strategy to drive maximum results."
          />
          <Cards 
            imgAddress={smmIllustration} 
            title="Social Media Marketing" 
            content="Unlock the full potential of social media to drive business results with our comprehensive social media marketing services. Our team of experts will help you build a strong online presence, engage with your audience, and achieve your marketing goals."
          />
          <Cards 
            imgAddress={webDevelopmentIllustration} 
            title="Web Development" 
            content="Take your online presence to the next level with our expert web development services. As a social media marketing agency, we understand the importance of having a website that not only looks great but also drives results."
          />
          <Cards 
            imgAddress={adscreationIllustration} 
            title="Ads Creation" 
            content="Capture your audience's attention and drive real results with our expert ads creation services. Our team of creatives and strategists will craft compelling ad campaigns that resonate with your target audience and achieve your marketing goals."
          />
          <Cards 
            imgAddress={brandingIllustration} 
            title="Branding" 
            content="Establish a strong online presence and make a lasting impression with our comprehensive branding services. Our team of experts will help you develop a unique brand identity that resonates with your target audience and sets you apart from the competition."
          />
        </div>
    </div>
  );
}

export default Services;

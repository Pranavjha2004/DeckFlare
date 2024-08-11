import React from 'react';
import MainBtn from './MainBtn';

function Cards(props) {
  return (
    <div className='flex flex-col text-white justify-center items-center w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-xl mx-4 my-6 cursor-pointer bg-[#1d1d20] transform transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:shadow-custom'>
      <div className='w-full'>
        <img 
          className='w-full h-[200px] md:h-[250px] rounded-t-xl object-cover' 
          src={props.imgAddress} 
          alt="Illustration-Img" 
        />
      </div>
      <div className='flex flex-col justify-center items-center gap-4 p-4'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{props.title}</h1>
        <p className='text-sm md:text-base text-center text-[#8F8F8F]'>{props.content}</p>
        <MainBtn />
      </div>
    </div>
  );
}

export default Cards;

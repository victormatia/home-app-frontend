"use client"
import React, { useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const PropertyCarousel: React.FC = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
          perView: 1.5,
          spacing: 16,
        },
        loop:false,
      });
  return (
    <div className='mt-5 ml-5 flex flex-col'>
        <span className='text-left'>Meus Imoveis</span>
        <div ref={sliderRef} className="keen-slider mt-2 max-w-[95%]">
            <div className='shadow-sm rounded max-w-[250px] h-[130px] bg-gray-400 keen-slider__slide'></div>
            <div className='shadow-sm rounded max-w-[250px] h-[130px] bg-gray-400 keen-slider__slide'></div>
            <div className='shadow-sm rounded max-w-[250px] h-[130px] bg-gray-400 keen-slider__slide'></div>
            <div className='shadow-sm rounded max-w-[250px] h-[130px] bg-gray-400 keen-slider__slide'></div>
        </div>
    </div>
  );
};

export default PropertyCarousel;
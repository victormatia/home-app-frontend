'use client';
import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

import { Buildings, MapPin, Money } from 'phosphor-react';

export function Card(){
  const RandomImage1 = 'https://picsum.photos/344/181?random=1';
  const RandomImage2 = 'https://picsum.photos/344/181?random=2';
  const RandomImage3 = 'https://picsum.photos/344/181?random=3';

  const imgArray = [RandomImage1, RandomImage2, RandomImage3];
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
    },
    loop:true,
  });

  return(
    <div className='flex flex-col rounded-md shadow-sm bg-white'>
      <div ref={sliderRef} className="keen-slider mx-2 mt-2">
        {
          imgArray.map((image, index) => {
            return(
              <div key={index} className={`keen-slider__slide number-slide${index} w-full`} >
                <img src={image} alt=""/>
              </div>
            );
          })
        }

      </div>
      <div className='flex items-start justify-between text-info font-semibold mt-3 px-4 pb-2'>
        <div>
          <p className='text-placeholder text-xs w-36'>
          1 quarto, 1 banheiro, sala e cozinha integrada, garagem
          </p>

        </div>
        <div className='w-36'>
          <p className='flex gap-2'>
            apartamento
            <Buildings size={20}/>
          </p>
          <p className='flex gap-2'>
            itapipoca - ce
            <MapPin size={20} />
          </p>
          <p className='flex gap-2'>
            R$ 450,00 
            <Money size={20} />
          </p>
        </div>
      </div>
    </div>
  );
}
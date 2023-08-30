'use client';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

import 'keen-slider/keen-slider.min.css';

export function Card(){
  const RandomImage1 = 'https://picsum.photos/170?random=1';
  const RandomImage2 = 'https://picsum.photos/170?random=2';
  const RandomImage3 = 'https://picsum.photos/170?random=3';

  const imgArray = [RandomImage1, RandomImage2, RandomImage3];
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
    },
  });

  return(
    <div className='grid grid-cols-2 rounded-md shadow-sm bg-white'>
      <div ref={sliderRef} className="keen-slider">
        {
          imgArray.map((image, index) => {
            return(
              <div key={index} className="keen-slider__slide" >
                <Image src={image} alt="" width={170} height={170}/>
              </div>
            );
          })
        }

      </div>
      <div className='flex flex-col items-end text-info font-semibold mr-2'>
        <p>apartamento</p>
        <p>itapipoca - ce</p>
        <p>R$ 450,00</p>

        <p className='mt-5 text-placeholder text-xs'>
          1 quarto, 1 banheiro, 1 garagem
        </p>

      </div>
    </div>
  );
}
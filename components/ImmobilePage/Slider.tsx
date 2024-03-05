'use client';
import { Button } from '../Button';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { TCard } from '@/types';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Slider({ immobile }: TCard ) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    breakpoints:{
      '(max-width:700px)':{
        slides:{
          perView:1,
        },
      },
    },
    slides:{
      perView: 2.5,
    },
    loop:true,
  });

  return (
    <div className="w-full">
      <figure ref={sliderRef} className="keen-slider">
        {
          immobile?.photos?.map(( { photo } , index ) => {
            return(
              <img
                key={ index }
                src={ photo.url }
                alt={''}
                className={
                  `keen-slider__slide
                  number-slide${index}
                  max-h-[400px]
                  w-full
                  `
                }
              />
            );
          })
        }
      </figure>
      <Button
        variant="ghost"
        data-testid='prevButton'
        className="hover:bg-lSliderButtonGradient absolute left-0 top-0 
        flex h-full w-9 items-center justify-center px-2"
        onClick={(e: any) =>
          e.stopPropagation() || instanceRef.current?.prev()
        }
      >
        <CaretLeft size={32} className="font-bold text-white"/>
      </Button>

      <Button
        variant="ghost"
        data-testid='nextButton'
        className="hover:bg-rSliderButtonGradient absolute left-auto right-px top-0  
        flex h-full w-9 items-center justify-center px-2 hover:cursor-pointer "
        onClick={(e: any) =>
          e.stopPropagation() || instanceRef.current?.next()
        }
      >
        <CaretRight size={32} className="font-bold text-white"/> 
      </Button>
       
    </div>

  );
}
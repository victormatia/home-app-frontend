'use client';
import { TCard } from '@/types';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { IoBedOutline } from 'react-icons/io5';
import { FaCar, FaShower } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

export function Card({ immobile }: TCard){
  const [isSaved, setIsSaved] = useState(false);
  const { photos } = immobile;

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
    },
    loop:true,
  });

  return(
    <div className='flex flex-col rounded-md shadow-lg bg-white w-[360px] h-[345px]
    hover:scale-105 transition-all cursor-pointer p-2
    '>
      <div ref={sliderRef} className="keen-slider">
        {
          photos?.map(({ photo }, index) => {
            return(
              <Image
                key={ index }
                src={ photo.url }
                alt='immobile photo'
                width={344}
                height={222}
                className={
                  `keen-slider__slide
                  number-slide${index}
                  w-full
                  rounded-md`
                }
              />
            );
          })
        }

      </div>
      <div>
        <div className='flex justify-between pt-2'>
          <strong className='text-black text-sm font-medium'>
            {`${immobile.type?.type}, ${immobile.address?.city}`}
          </strong>
          {
            isSaved === false ? (
              <button className='text-grayIcon'>
                <BsBookmark />
              </button>
            ): (
              <button className='text-grayIcon'>
                <BsBookmarkFill />
              </button>
            )
          }
        </div>

        <div className='flex gap-2 pt-2 items-end'>
          <div className='w-52'>
            <span  className='text-xs text-grayLegend line-clamp-2'>
              { immobile.description }
            </span>

            <div className='flex items-center gap-2 mt-4 text-placeholder'>
              <span className='flex items-center gap-1 border-r-[1px] border-zinc-300 pr-1'>
                <IoBedOutline />
                {immobile.bedroomsQty} 
              </span>
              <span className='flex items-center gap-1 border-r-[1px] border-zinc-300 pr-1'>
                <FaCar />
                {immobile.parkingQty} 
              </span>
              <span className='flex items-center gap-1 border-r-[1px] border-zinc-300 pr-1'>
                <FaShower />
                {immobile.bathroomsQty} 
              </span>
              {immobile.petFriendly && (
                < MdPets />
              )}
            </div>
          </div>

          <button className='flex  gap-2  w-32 h-10  bg-gradientBlue rounded-md text-white shadow-xl
          hover:opacity-80 transition-all'>
            <span className=' pl-1 pt-1 text-[10px] text-left'>
              Alugar 
              {' '}
              <br/>
              por:
            </span> 
            <span className='whitespace-nowrap flex-grow mt-3'>
              {`R$ ${Number(immobile.price).toFixed(2)}`} 
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
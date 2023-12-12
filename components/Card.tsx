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
import { Button } from './Button';

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
      <figure ref={sliderRef} className="keen-slider">
        {
          photos?.map(({ photo }, index) => {
            return(
              <Image
                key={ index }
                src={ photo.url }
                alt={`immobile photo - ${index}`}
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

      </figure>
      <div>
        <div className='flex justify-between pt-2'>
          <h3 className='text-black text-sm font-medium'>
              {`${immobile.type?.type}, ${immobile.address?.city}`}
          </h3>
          {
            isSaved === false ? (
              <Button
                variant='save'
                onClick={() => setIsSaved(true)}
                data-testid='bookMarkIcon'
              >
                <BsBookmark />
              </Button>
            ): (
              <Button
                variant='save'
                onClick={() => setIsSaved(false)}
                data-testid='bookMarkFillIcon'
              >
                <BsBookmarkFill />
              </Button>
            )
          }
        </div>

        <div className='flex gap-2 pt-2 items-end'>
          <div className='w-52'>
            <p  className='text-xs text-grayIcon line-clamp-2 font-medium'>
              { immobile.description }
            </p>

            <div className='flex items-center gap-2 mt-4 text-grayIcon'>
              <div
                className='flex items-center gap-1 border-r-[1px] border-zinc-300 pr-1'
              >
                <IoBedOutline />
                <span data-testid='bedRoomQty'>
                  {immobile.bedroomsQty}
                </span>
              </div>
              <div
                className='flex items-center gap-1 border-r-[1px] border-zinc-300 pr-1'
              >
                <FaCar />
                <span data-testid='parkingQty'>
                  {immobile.parkingQty} 
                </span>
              </div>
              <div
                className='flex items-center gap-1 border-r-[1px] border-zinc-300 pr-1'
              >
                <FaShower />
                <span data-testid='bathroomsQty'>
                  {immobile.bathroomsQty} 
                </span>
              </div>
              {immobile.petFriendly && (
                < MdPets />
              )}
            </div>
          </div>

          <Button variant='card'>
            <span className=' pl-1 pt-1 text-[10px] text-left'>
              Alugar 
              {' '}
              <br/>
              por:
            </span> 
            <span className='whitespace-nowrap flex-grow mt-3'>
              {`R$ ${Number(immobile.price).toFixed(2)}`} 
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
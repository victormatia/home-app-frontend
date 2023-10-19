'use client';
import { TCard } from '@/types';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { IoBedOutline } from 'react-icons/io5';
import { FaCar, FaShower } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export function Card({ immobile }: TCard){
  const [isSaved, setIsSaved] = useState(false);
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
    <div className='flex flex-col rounded-md shadow-lg bg-white w-[360px]'>
      <div ref={sliderRef} className="keen-slider mx-2 mt-2">
        {
          imgArray.map((image, index) => {
            return(
              <div key={index} className={`keen-slider__slide number-slide${index} w-full rounded-md`} >
                <img src={image} alt=""/>
              </div>
            );
          })
        }

      </div>
      <div className='p-2'>
        <div className='flex justify-between'>
          <strong className='text-black text-sm font-medium'>
            {`${immobile.type?.type}, ${immobile.address?.city}`}
          </strong>
          {
            isSaved === false ? (
              <button className='text-zinc-500'>
                <BsBookmark />
              </button>
            ): (
              <button className='text-zinc-500'>
                <BsBookmarkFill />
              </button>
            )
          }
        </div>

        <div className='flex gap-2 items-end'>
          <div className='w-52'>
            <span  className='text-xs text-info'>
            Kitnet de 35m² com sala, quarto e cozinha integrados e um banheiro...
            </span>

            <div className='flex items-center gap-2 mt-4 text-placeholder'>
              <span className='flex items-center gap-1'>
                <IoBedOutline />
                {immobile.bedroomsQty} 
              </span>
              <span className='flex items-center gap-1'>
                <FaCar />
                {immobile.parkingQty} 
              </span>
              <span className='flex items-center gap-1'>
                <FaShower />
                {immobile.bathroomsQty} 
              </span>
              {immobile.petFriendly && (
                < MdPets />
              )}
            </div>
          </div>

          <button className='flex  gap-2  w-32 h-10  bg-paymentButton rounded-md text-white shadow-xl'>
            <span className=' pl-1 pt-1 text-[10px] text-left'>
              Alugar 
              {' '}
              <br/>
              por:
            </span> 
            <span className='whitespace-nowrap flex-grow mt-3'>
              {`R$ ${immobile.price},00`} 
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
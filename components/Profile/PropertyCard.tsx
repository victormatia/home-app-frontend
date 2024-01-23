'use client';
import { TCard } from '@/types';
import { useState } from 'react';

export function PropertyCard({ immobile }: TCard){
  const [isSaved, setIsSaved] = useState(false);


  return(
    <div className='keen-slider__slide rounded shadow-md'>
      <div className='flex text-left bg-left bg-gradient-to-r from-white via-white via-50% to-transparent to-70% z-10 w-full rounded'>
        <div className='p-2'>
          <div className='mb-2 flex flex-col'>
              <span className='mb-1 text-xs font-normal text-[#ACACAC]'>Apelido</span>
              <span className='text-sm'>Minha Casa</span>
          </div>
          <div className='mb-2 flex flex-col'>
              <span className='mb-1 text-xs font-normal text-[#ACACAC]'>Endereco</span>
              <div className='text-sm line-clamp-1'>
              {`${immobile.address?.street}, ${immobile.address?.burgh} - ${immobile.address?.city}`}
              </div>
          </div>
          <div className='flex flex-row text-[14px] text-[white]'>
            {immobile.payment.paid == true ? 
            <div className='bg-[#30D207] m-1 shadow rounded w-[75px] flex justify-center'>
              pago
            </div>
            :''}
            {immobile.payment.overdue == true ?
            <div className='bg-[#FFD028] m-1 shadow rounded w-[75px] flex justify-center'>
              atrasado
            </div>
            :''}
            {immobile.payment.terminated == true ?
            <div className='bg-[#FF6060] m-1 shadow rounded w-[75px] flex justify-center'>
              encerrado
            </div>
            :''}
          </div>
        </div>
        <div className={`absolute w-full h-[150px] bg-[url('https://images.unsplash.com/photo-1614568742191-1ec6d6c183b3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTN8fHxlbnwwfHx8fHw%3D')] bg-[length:200px_150px] bg-no-repeat bg-right -z-10 rounded`}/>
      </div>
    </div>
  );
}
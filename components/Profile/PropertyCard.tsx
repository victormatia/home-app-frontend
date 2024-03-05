'use client';
import { TCard } from '@/types';

export function PropertyCard({ immobile }: TCard){

  return(
    <div className='keen-slider__slide rounded shadow-md'>
      <div className='z-10 flex w-[300px] rounded bg-gradient-to-r 
      from-white via-white via-50% to-transparent to-70% bg-left text-left'>
        <div className='p-2'>
          <div className='mb-2 flex flex-col'>
            <span className='mb-1 text-xs font-normal text-[#ACACAC]'>Apelido</span>
            <span className='text-sm'>Minha Casa</span>
          </div>
          <div className='mb-2 flex flex-col'>
            <span className='mb-1 text-xs font-normal text-[#ACACAC]'>Endereco</span>
            <div className='line-clamp-1 text-sm'>
              {`${immobile.address?.street}, ${immobile.address?.burgh} - ${immobile.address?.city}`}
            </div>
          </div>
          <div className='flex flex-row text-[14px] text-[white]'>
            {immobile.payment.paid == true ? 
              <div className='m-1 flex w-[75px] justify-center rounded bg-[#30D207] shadow'>
              pago
              </div>
              :''}
            {immobile.payment.overdue == true ?
              <div className='m-1 flex w-[75px] justify-center rounded bg-[#FFD028] shadow'>
              atrasado
              </div>
              :''}
            {immobile.payment.terminated == true ?
              <div className='m-1 flex w-[75px] justify-center rounded bg-[#FF6060] shadow'>
              encerrado
              </div>
              :''}
          </div>
        </div>
        {/* <div className={`absolute w-[150px] h-[150px] bg-[url('https://images.unsplash.com/photo-1614568742191-1ec6d6c183b3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTN8fHxlbnwwfHx8fHw%3D')] bg-[length:150px_150px] bg-no-repeat bg-right -z-10 rounded`}/> */}
      </div>
    </div>
  );
}
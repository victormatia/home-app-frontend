'use client';

import { PiListFill } from 'react-icons/pi';
import { BsFillGridFill } from 'react-icons/bs';
import globalContext from '@/context/context';
import { useContext } from 'react';
import Filters from '@/components/Filters';
import ImmobileList from '@/components/ImmobileList';
import MostUsedFilters from '@/components/MostUsedFilters';

export default function Home() {
  return (
    <main className='flex flex-col gap-4 items-center w-full h-[calc(100vh-80px)] 
    min-[700px]:pl-20 min-[700px]:flex-row min-[700px]:gap-0 min-[700px]:items-stretch'>
      <div className='basis-[85%] max-[1466px]:basis-full flex flex-col'>
        <div className='max-[700px]:hidden border border-x-0 border-[#C1C1C1] w-full flex justify-between  pl-2 py-2'>
          <MostUsedFilters />
          <div className='flex  items-center gap-2 pr-2 text-[#424242] text-2xl'>
            <PiListFill className='hover:text-zinc-500 cursor-pointer transition-all' />
            <BsFillGridFill className='hover:text-zinc-500 cursor-pointer transition-all' />
            <button className='border-[#C1C1C1] border-l
            text-center font-medium text-[#424242] text-base px-5 min-[1466px]:hidden h-full'>
              Filtros
            </button>
          </div>
        </div>
        <ImmobileList />
      </div>
      <Filters />
    </main>
  );
}


'use client';

import { PiListFill } from 'react-icons/pi';
import { BsFillGridFill } from 'react-icons/bs';
import DesktopFilter from '@/components/FIlters/DesktopFilter';
import ImmobileList from '@/components/ImmobileList';
import MostUsedFilters from '@/components/MostUsedFiltersList';
import OverlaidFilter from '@/components/FIlters/OverlaidFilter';
import { useState } from 'react';

export default function Home() {
  const [openOverlaidFilter, setOpenOverlaidFilter] = useState(false);

  function handleOpenOverlaidFilter(){
    setOpenOverlaidFilter(true);
  }

  return (
    <main className='flex flex-col gap-4 items-center w-full h-[calc(100vh-80px)] bg-grayBase
    min-[700px]:pl-20 min-[700px]:flex-row min-[700px]:gap-0 min-[700px]:items-stretch'>
      <div className='basis-[85%] max-[1466px]:basis-full flex flex-col'>
        <div className='max-[700px]:hidden border border-x-0 border-[#C1C1C1] w-full flex justify-between  pl-2 py-2'>
          <MostUsedFilters />
          <div className='flex  items-center gap-2 pr-2 text-[#424242] text-2xl'>
            <PiListFill className='hover:text-zinc-500 cursor-pointer transition-all' />
            <BsFillGridFill className='hover:text-zinc-500 cursor-pointer transition-all' />
            <button 
              className='border-[#C1C1C1] border-l text-center font-medium text-[#424242] text-base px-5 h-full
              min-[1466px]:hidden '
              onClick={handleOpenOverlaidFilter}  
            >
              Filtros
            </button>
          </div>
        </div>
        <ImmobileList />
      </div>
      <DesktopFilter />
      <OverlaidFilter openOverlaidFilter={openOverlaidFilter} closeOverlaidFilter={setOpenOverlaidFilter}/>
    </main>
  );
}

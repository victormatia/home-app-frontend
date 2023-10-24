'use client';

import { Card } from '@/components/Card';
import { PiListFill } from 'react-icons/pi';
import { BsFillGridFill } from 'react-icons/bs';
import globalContext from '@/context/context';
import { useContext } from 'react';

export default function Home() {
  const { immobiles, searchedImmobiles } = useContext(globalContext);
  return (
    <main className='flex flex-col gap-4 items-center w-full h-[calc(100vh-80px)] 
    min-[700px]:pl-20 min-[700px]:flex-row min-[700px]:gap-0 min-[700px]:items-stretch'>
      <div className='basis-[85%] max-[1466px]:basis-full flex flex-col'>
        <div className='max-[700px]:hidden border border-x-0 border-[#C1C1C1] w-full flex justify-between  pl-2 py-2'>
          <div className='flex gap-3'>
            <button className=' rounded-2xl bg-[#C1C1C1] text-white py-1 px-3'>destaques</button>
            <button className=' rounded-2xl bg-[#C1C1C1] text-white py-1 px-3'>aceita pet</button>
            <button className=' rounded-2xl bg-[#C1C1C1] text-white py-1 px-3'>2 quartos</button>
            <button className=' rounded-2xl bg-[#C1C1C1] text-white py-1 px-3'>3 quartos</button>
          </div>
          <div className='flex  items-center gap-2 pr-2 text-[#424242] text-3xl'>
            <PiListFill />
            <BsFillGridFill />
            <button className='border-[#C1C1C1] border-l text-center font-medium text-[#424242] text-base px-5 min-[1466px]:hidden h-full'>Filtros</button>
          </div>
        </div>
        <div className='h-full overflow-scroll overflow-x-hidden p-2'>
          {
            searchedImmobiles.length ? (
              <div className='flex flex-col pb-20 gap-4 items-center w-full 
            min-[700px]:p-2 min-[700px]:flex-wrap min-[700px]:flex-row 
            min-[700px]:h-[calc(100%-50px)]
            min-[700px]:gap-6
            '>
                { 
                  searchedImmobiles.map(({ immobileId, immobile }) => (<Card key={ immobileId } immobile={immobile}/>))
                }
              </div>
            ) : <p className='text-center w-full'>Ops, nenhum imóvel encontrado</p>
          }
        </div>
       
      </div>
      <div className='max-[1466px]:hidden  basis-[15%] border border-[#C1C1C1] flex flex-col items-center'>
        <p className='w-full border-[#C1C1C1] border-b p-3 text-center font-medium text-[#424242]'>Filtro</p>

        <label htmlFor="" >
          Nome
        </label>
        <input type='text'/>
      </div>
        
    </main>
  );
}


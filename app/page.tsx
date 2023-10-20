'use client';

import { Card } from '@/components/Card';
import globalContext from '@/context/context';
import { useContext } from 'react';

export default function Home() {
  const { immobiles, searchedImmobiles } = useContext(globalContext);
  return (
    <main className='flex flex-col gap-4 items-center w-full h-screen 
    min-[700px]:ml-20 min-[700px]:grid min-[700px]:grid-cols-homePageGrid'>
      <div>
        <div className='max-[700px]:hidden border border-[#C1C1C1] w-full flex gap-3 mb-3 pl-2 py-2'>
          <button className=' rounded-2xl bg-[#C1C1C1] text-white py-1 px-3'>destaques</button>
          <button className=' rounded-2xl bg-[#C1C1C1] text-white py-1 px-3'>aceita pet</button>
          <button className=' rounded-2xl bg-[#C1C1C1] text-white py-1 px-3'>2 quartos</button>
          <button className=' rounded-2xl bg-[#C1C1C1] text-white py-1 px-3'>3 quartos</button>
        </div>
        {
          searchedImmobiles.length ? (
            <div className='flex flex-col gap-4 items-center w-full h-screen overflow-scroll pb-36 
            min-[700px]:pl-4 min-[700px]:grid min-[700px]:grid-cols-3'>
              { 
                searchedImmobiles.map(({ immobileId, immobile }) => (<Card key={ immobileId } immobile={immobile}/>))
              }             
            </div>
          ) : <p className='text-center w-full h-screen'>Ops, nenhum imóvel encontrado</p>
        }
       
      </div>
        
      <div>
          Filtro
      </div>
    </main>
  );
}


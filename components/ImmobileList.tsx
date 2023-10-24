'use client';

import globalContext from '@/context/context';
import { useContext } from 'react';
import { Card } from './Card';

export default function ImmobileList() {
  const { searchedImmobiles } = useContext(globalContext);
  return (
    <ul className="h-full overflow-scroll overflow-x-hidden p-2">
      {
        searchedImmobiles.length ? (
          <div className='flex flex-col pb-20 gap-4 items-center w-full 
            min-[700px]:p-2 min-[700px]:flex-wrap min-[700px]:flex-row 
            min-[700px]:h-[calc(100%-50px)]
            min-[700px]:gap-6 min-[700px]:items-start
            '>
            {
              searchedImmobiles.map(({ immobileId, immobile }) => (<Card key={immobileId} immobile={immobile} />))
            }
          </div>
        ) : <p className='text-center w-full'>Ops, nenhum imóvel encontrado</p>
      }
    </ul>
  );
}
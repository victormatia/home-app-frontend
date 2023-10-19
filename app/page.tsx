'use client';

import { Card } from '@/components/Card';
import globalContext from '@/context/context';
import { useContext } from 'react';

export default function Home() {
  const { immobiles, searchedImmobiles } = useContext(globalContext);
  return (
    <main className='flex flex-col gap-4 items-center w-full h-screen overflow-scroll pb-36'>
      {
        searchedImmobiles.length 
          ? searchedImmobiles.map((immobile) => (<Card key={ immobile.immobileId } />))
          : <span>Ops, nenhum imóvel encontrado</span>
      }
    </main>
  );
}


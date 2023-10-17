'use client';

import { Card } from '@/components/Card';
import globalContext from '@/context/context';
import { useContext } from 'react';

export default function Home() {
  const { immobiles, searchedImmobiles } = useContext(globalContext);
  return (
    <main className='flex flex-col justify-normal'>
      {
        searchedImmobiles.length 
          ? searchedImmobiles.map((immobile) => (<Card key={ immobile.id } immobile={ immobile } />))
          : <span>Ops, nenhum imóvel encontrado</span>
      }
    </main>
  );
}


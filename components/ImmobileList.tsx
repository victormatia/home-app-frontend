import globalContext from '@/context/context';
import { useContext } from 'react';
import { Card } from './Card';

export default function ImmobileList() {
  const { searchedImmobiles } = useContext(globalContext);
  return (
    <section className="h-full overflow-hidden min-[700px]:overflow-clip overflow-x-hidden p-2">
      {
        searchedImmobiles.length ? (
          <ul className='flex flex-col pb-20 gap-4 w-full overflow-hidden 
            min-[700px]:p-2 min-[700px]:flex-wrap min-[700px]:flex-row 
            min-[700px]:h-full min-[700px]:gap-6 
            min-[700px]:overflow-scroll min-[700px]:overflow-x-hidden
            '>
            {
              searchedImmobiles.map(({ immobileId, immobile }) => (<Card key={immobileId} immobile={immobile} />))
            }
          </ul>
        ) : <p className='text-center w-full'>Ops, nenhum imóvel encontrado</p>
      }
    </section>
  );
}
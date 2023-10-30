'use client';
import { X } from 'phosphor-react';
import * as Tabs from '@radix-ui/react-tabs';
import { useContext, useState } from 'react';
import globalContext from '@/context/context';
import { FilterForm } from '../FilterForm';

export default function MobileFilter(){
  const { toggleOpenFilter, setToggleOpenFilter } = useContext(globalContext);

  const isFilterOpen = toggleOpenFilter;

  const [buyOrRent, setBuyOrRent] = useState('alugar');

  function handleCloseFilter(){
    setToggleOpenFilter(false);
  }

  function toggleBuyAndRent(data: string){
    setBuyOrRent(data);
  }

  return(
    <>
      {isFilterOpen && (
        <div
          className="z-20 h-full w-full bg-app overflow-x-hidden fixed top-0 
          animate-openfilter transition-all min-[700px]:hidden"
        >
          <div className='flex justify-between p-6 shadow-md'>
            <button onClick={handleCloseFilter}>
              <X size={15}/>
            </button>

            <span className='text-red-600 font-semibold'>
              Filtros
            </span>
          </div>

          <div>
            <Tabs.Root defaultValue='alugar' onValueChange={toggleBuyAndRent}>
              <Tabs.List className='w-full flex mt-5 mb-7 items-center justify-center '>
                <Tabs.Trigger
                  value='alugar' 
                  className='flex items-center justify-center w-36 h-14 font-semibold rounded-l-md
               bg-white text-buttonText data-[state=active]:bg-black data-[state=active]:text-white shadow-md'
                >
              Alugar
                </Tabs.Trigger>
                <Tabs.Trigger 
                  value='comprar'
                  className='flex items-center justify-center w-36 h-14 font-semibold rounded-r-md
               bg-white text-buttonText data-[state=active]:bg-black data-[state=active]:text-white shadow-md'
                >
              Comprar
                </Tabs.Trigger>
              </Tabs.List>

              <FilterForm />
            </Tabs.Root>
          </div>

        </div>
      )}
    </>
  );
}
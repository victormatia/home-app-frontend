'use client';
import { X } from 'phosphor-react';
import { useContext } from 'react';
import globalContext from '@/context/context';
import { FilterForm } from '../FilterForm';

export default function MobileFilter(){
  const { toggleOpenFilter, setToggleOpenFilter } = useContext(globalContext);

  const isFilterOpen = toggleOpenFilter;

  function handleCloseFilter(){
    setToggleOpenFilter(false);
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

          <FilterForm />

        </div>
      )}
    </>
  );
}
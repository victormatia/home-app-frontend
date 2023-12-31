import { FilterForm } from './FilterForm';
import { X } from 'phosphor-react';

interface OverlaidFilterProps {
  openOverlaidFilter: boolean
  closeOverlaidFilter: Function
}

export default function OverlaidFilter(props : OverlaidFilterProps) {  
  function handleCloseFilter(){
    props.closeOverlaidFilter(false);
  }

  const openFilter = props.openOverlaidFilter;
  return (
    <>
      {openFilter && (
        <div 
          className='w-80 h-[calc(100vh-80px)] z-20 bg-grayBase border border-[#C1C1C1] flex flex-col items-center 
          absolute right-0 animate-openfilter transition-all min-[1466px]:hidden max-[700px]:hidden'
        >
          <div className='flex justify-between px-6 py-3 shadow-md w-full'>
            <button onClick={handleCloseFilter}>
              <X size={15}/>
            </button>

            <span 
              className='text-red-600 font-semibold'
            >
              Filtros
            </span>
          </div>

          <FilterForm />
        </div>

      )}
    </>
  );
}
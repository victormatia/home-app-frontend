import { FilterForm } from './FilterForm';

export default function DesktopFilter() {  
  return (
    <div 
      className='basis-[15%] border border-[#C1C1C1] flex flex-col items-center min-w-[275px]
      max-[1466px]:hidden'
    >
      <p className='w-full border-[#C1C1C1] border-b p-3 text-center font-medium text-[#424242]'>Filtro</p>

      <FilterForm />
    </div>

  );
}
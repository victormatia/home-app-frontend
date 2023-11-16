import globalContext from '@/context/context';
import { useContext, useState } from 'react';

export default function MostUsedFilters({ filter }: any) {
  const { setPropertyCaracteristics } = useContext(globalContext);

  const [applyedFilter, setApplyedFilter] = useState<boolean>(false);

  return (
    <>
      {
        applyedFilter ? (
          <li className="sticky">
            <button
              className="rounded-2xl bg-primaryBlue text-white py-1 px-3 font-medium
              before:bg-[#FF6F6F] before:text-white before:flex before:items-center before:justify-center 
              before:content-['\2716'] before:absolute before:top-[-3px] before:right-[-3px] 
              before:rounded-full before:w-4 before:h-4 before:text-[10px] before:p-2" 
              onClick={() => {
                setApplyedFilter(false);
                setPropertyCaracteristics((prev) => ({
                  ...prev,
                  [filter.key] : 'todos',
                }));
              }}>
              { `${typeof filter.value === 'number'? filter. value : ''} ${filter.name}`}
            </button>
          </li> 
        ) : (
          <button 
            className="rounded-2xl bg-[#C1C1C1] text-white py-1 px-3"
            onClick={() => {
              setApplyedFilter(true);
              setPropertyCaracteristics((prev) => ({
                ...prev,
                [filter.key] : filter.value,
              }));
            }}>
            { `${typeof filter.value === 'number'? filter. value : ''} ${filter.name}`}
          </button>
        )
      }
    </>

  );
}
import globalContext from '@/context/context';
import { useContext, useState } from 'react';
import { Button } from './Button';

export default function MostUsedFilters({ filter }: any) {
  const { setPropertyCaracteristics } = useContext(globalContext);

  const [applyedFilter, setApplyedFilter] = useState<boolean>(false);

  return (
    <>
      {
        applyedFilter ? (
          <li className="sticky">
            <Button
              variant='mostUsedFiltersClicked'
              onClick={() => {
                setApplyedFilter(false);
                setPropertyCaracteristics((prev) => ({
                  ...prev,
                  [filter.key] : 'todos',
                }));
              }}>
              { `${typeof filter.value === 'number'? filter. value : ''} ${filter.name}`}
            </Button>
          </li> 
        ) : (
          <Button
            type='button' 
            variant='mostUsedFilters'
            onClick={() => {
              setApplyedFilter(true);
              setPropertyCaracteristics((prev) => ({
                ...prev,
                [filter.key] : filter.value,
              }));
            }}>
            { `${typeof filter.value === 'number'? filter. value : ''} ${filter.name}`}
          </Button>
        )
      }
    </>

  );
}
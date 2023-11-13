import globalContext from '@/context/context';
import { useContext } from 'react';

const mosteUsedFilters = [
  { name: 'Quartos', key:  'bedroomsQty', value: 3 },
  { name: 'Quartos', key:  'bedroomsQty', value: 2 },
  { name: 'Aceita pet', key:  'petFriendly', value: true },
];

export default function MostUsedFilters() {

  const { setPropertyCaracteristics } = useContext(globalContext);


  return (
    <ul className='flex gap-3'>
      
      <li className="rounded-2xl bg-[#C1C1C1] text-white py-1 px-3">
        <button>
          destaques
        </button>
      </li>

      {
        mosteUsedFilters.map(filter => (
          <li key={filter.key + filter.value} className="rounded-2xl bg-[#C1C1C1] text-white py-1 px-3">
            <button onClick={() => {
              
              setPropertyCaracteristics((prev) => ({
                ...prev,
                [filter.key] : filter.value,
              }));
            }}>
              { `${typeof filter.value === 'number'? filter. value : ''} ${filter.name}`}
            </button>
          </li>
        ))
      }
     
    </ul>
  );
}
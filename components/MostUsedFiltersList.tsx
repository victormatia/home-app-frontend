import MostUsedFilters from './MostUsedFilter';

const mosteUsedFilters = [
  { name: 'Quartos', key:  'bedroomsQty', value: 3 },
  { name: 'Quartos', key:  'bedroomsQty', value: 2 },
  { name: 'Banheiros', key:  'bathroomsQty', value: 1 },
  { name: 'Aceita pet', key:  'petFriendly', value: true },
];

export default function MostUsedFiltersList() {

  return (
    <ul className='flex gap-3'>
      
      <li className="rounded-2xl bg-[#C1C1C1] text-white py-1 px-3">
        <button>
          destaques
        </button>
      </li>

      {mosteUsedFilters.map(filter => (
        <MostUsedFilters key={filter.value + filter.name} filter={filter}/>
      ))}
         
    </ul>
  );}
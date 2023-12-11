import MostUsedFilters from './MostUsedFilter';

const mosteUsedFilters = [
  { name: 'Quartos', key:  'bedroomsQty', value: 3 },
  { name: 'Quartos', key:  'bedroomsQty', value: 2 },
  { name: 'Banheiros', key:  'bathroomsQty', value: 1 },
  { name: 'Aceita pet', key:  'petFriendly', value: true },
];

export default function MostUsedFiltersList() {

  return (
    <ul className='flex items-center gap-3'>
      
      <li className="rounded-2xl bg-gradientBlue text-white py-1 px-3 font-medium">
        <button>
          Destaques
        </button>
      </li>

      <div className='w-[30px] h-[2px] bg-[#C1C1C1] rotate-90' />

      {mosteUsedFilters.map(filter => (
        <MostUsedFilters key={filter.value + filter.name} filter={filter}/>
      ))}
         
    </ul>
  );}
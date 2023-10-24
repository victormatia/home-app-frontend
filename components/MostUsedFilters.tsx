const MostUsedFiltersListMock = ['destaques', 'aceita pet', '2 quartos', '3 quartos'];

export default function MostUsedFilters() {
  return (
    <ul className='flex gap-3'>
      {
        MostUsedFiltersListMock.map((filter, i) => (
          <li key={filter + i} className="rounded-2xl bg-[#C1C1C1] text-white py-1 px-3">
            <button>{filter}</button>
          </li>
        ))
      }
    </ul>
  );
}
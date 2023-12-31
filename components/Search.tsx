/* eslint-disable max-len */
import globalContext from '@/context/context';
import filterImmobilesByTerms from '@/utils/filterImmobilesByTerms';
import Image from 'next/image';
import { useContext, useState } from 'react';
import Lupa from '../assets/Lupa.svg';

export default function Search() {
  const { setSearchedImmobiles, immobiles } = useContext(globalContext);
  const [search, setSearch] = useState<string>('');

  return (
    <label htmlFor="search" className='flex gap-2 items-center w-[285px] px-2 h-8 rounded bg-white focus-within:ring-1 focus-within:border-primaryBlue shadow-2xl min-[700px]:w-80 '>
      <input
        type="text"
        name="search"
        id="search"
        value={ search }
        className='
          bg-transparent 
          w-[250px] h-6 py-2 px-3 border-r border-r-placeholder
          text-xs placeholder:text-placeholder outline-none min-[700px]:w-[285px]'
        placeholder='Rua 1, Número 2, Bairro 3...'
        onChange={ (e) => setSearch(e.target.value) }
      />
      <button type="submit" onClick={ () => {
        setSearchedImmobiles(filterImmobilesByTerms(immobiles, search));
      }}>
        <Image src={Lupa} alt='lupa' />
      </button>
    </label>
  );
}

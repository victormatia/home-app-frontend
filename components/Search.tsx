import Image from 'next/image';
import Lupa from '../assets/Lupa.svg';
import globalContext from '@/context/context';
import { useContext } from 'react';

export default function Search() {
  const { search, setSearch } = useContext(globalContext);
  return (
    <label htmlFor="search" className='flex gap-2 items-center w-[285px] px-2 h-8 rounded bg-white'>
      <input 
        type="text" 
        name="search" 
        id="search" 
        className='
          bg-transparent 
          w-[250px] h-6 py-2 px-3 border-r border-r-placeholder
          text-xs placeholder:text-placeholder'
        placeholder='Rua 1, Número 2, Bairro 3...'
        value={ search }
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <Image src={Lupa} alt='lupa'/>
      </button>
    </label>
  );
}

import Image from 'next/image';
import Lupa from '../assets/Lupa.svg';
import globalContext from '@/context/context';
import { useContext } from 'react';
import { TRankedImmobile } from '@/types';

export default function Search() {
  const { search, setSearch, setSearchedImmobiles, immobiles } = useContext(globalContext);

  const filterImmobilesByTerms = () => {
    const allUniqueTermsList = Array.from(new Set(search.split(/[ ,.]+/)));

    const RankedImmobilesList = allUniqueTermsList.reduce((acc: TRankedImmobile[], term) => {
      const ImmobilesFilteredByTerm = immobiles.filter((immobile) => (
        immobile.address?.street.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        || immobile.address?.city.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      ));

      ImmobilesFilteredByTerm.forEach((immobile) => {
        const immobileRankedId = acc.find((immo) => immo.immobileId === immobile.id)?.immobileId;
        
        if (immobileRankedId) {
          acc.forEach((immobile) => {
            if (immobile.immobileId === immobileRankedId) immobile.rank += 1;
          });

        } else {
          acc.push({
            immobileId: immobile.id,
            immobile: immobile,
            rank: 1,
          });
        }
      });

      return acc;
    }, []);

    setSearchedImmobiles(RankedImmobilesList.sort((a, b) => b.rank - a.rank));
  };

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
        onChange={ (e) => setSearch(e.target.value) }
      />
      <button type="submit" onClick={ filterImmobilesByTerms }>
        <Image src={Lupa} alt='lupa' />
      </button>
    </label>
  );
}

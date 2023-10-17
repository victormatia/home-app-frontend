'use client';

import Link from 'next/link';
import { Sliders } from 'phosphor-react';
import { Filter } from './Filter';
import { useState } from 'react';
import Search from './Search';

const links = [
  { name: 'Alugar', href: '/rent' },
  { name: 'Comprar', href: '/buy' },
  { name: 'Anunciar', href: '/advertise' },
];

export function Header(){
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleOpenFilter() {
    setIsFilterOpen(true);
  }

  return(
    <>
      <div className='flex h-20 px-6 py-7 gap-11 items-center justify-center bg-app'>
        <div className="max-[500px]:hidden">
          <Link href='/'> Logo </Link>
        </div>

        <Search />

        <div className='max-[500px]:hidden' >
          <ul className="">
            {links.map((link) => (
              <li key={link.name} className="text-xl my-4">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button 
            className='flex flex-row justify-between items-center text-placeholder'
            onClick={handleOpenFilter}
          >
            <Sliders size={24} className='rotate-90'/>
          Filter
          </button>
        </div>
      </div>

      <Filter openFilter={isFilterOpen} closeFilter={setIsFilterOpen}/>       
    </>
  );
};

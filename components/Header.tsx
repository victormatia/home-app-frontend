'use client';
import Image from 'next/image';
import Link from 'next/link';
import Lupa from '../assets/Lupa.svg';
import { Sliders } from 'phosphor-react';
import { Filter } from './Filter';

const links = [
  { name: 'Alugar', href: '/rent' },
  { name: 'Comprar', href: '/buy' },
  { name: 'Anunciar', href: '/advertise' },
];

const Header = () => {
  
  return(
    <>
      <div className='flex h-20 px-6 py-7 gap-11 items-center justify-center bg-app'>
        <div className="max-[500px]:hidden">
          <Link href='/'> Logo </Link>
        </div>

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
          />
          <button type="submit">
            <Image src={Lupa} alt='lupa'/>
          </button>
        </label>

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
          //onClick={handleOpenFilter}
          >
            <Sliders size={24} className='rotate-90'/>
          Filter
          </button>
        </div>
      </div>

      <Filter />       
    </>
  );
};

export default Header;
'use client';

import Image from 'next/image';
import homeIcon from '../assets/home-icon.svg';
import { BsFillGearFill, BsBookmarkFill, BsHouseAdd } from 'react-icons/bs';
import { SlMagnifier } from 'react-icons/sl';
import Link from 'next/link';
import { useContext } from 'react';
import globalContext from '@/context/context';

export default function Sidebar() {
  const { currPage, setCurrPage } = useContext(globalContext);

  return (
    <section
      className='max-[700px]:hidden
      h-screen w-20 flex flex-col justify-between items-center bg-darkGray py-6'  
    >
      <section>
        <Image src={homeIcon} width={32} height={32} alt={'home-logo'} />
      </section>

      <nav className='h-64 w-full flex flex-col items-center justify-center gap-6 text-grayIcon text-2xl'>
        <Link
          className='relative w-full h-12 flex justify-center items-center sidebar__span'
          href='/'
          onClick={() => setCurrPage('home')}
          data-value='Pesquisar'
        >
          {
            currPage === 'home'
            &&  <div className='absolute top-0 left-0 h-full w-1 bg-gradientBlue rounded-r-md' />
          }
          
          <SlMagnifier
            className="hover:text-zinc-200"
          />
        </Link>

        <Link
          className='relative w-full h-12 flex justify-center items-center sidebar__span'
          href='/saved'
          onClick={() => setCurrPage('saved')}
          data-value='Salvos'
        >
          {
            currPage === 'saved'
            &&  <div className='absolute top-0 left-0 h-full w-1 bg-gradientBlue rounded-r-md' />
          }

          <BsBookmarkFill className="hover:text-zinc-200" />
        </Link>

        <Link
          className='relative w-full h-12 flex justify-center items-center sidebar__span'
          href='/advertise'
          onClick={() => setCurrPage('advertise')}
          data-value='Anúnciar'
        >
          {
            currPage === 'advertise' 
            &&  <div className='absolute top-0 left-0 h-full w-1 bg-gradientBlue rounded-r-md' />
          }

          <BsHouseAdd className="hover:text-zinc-200" />
        </Link>
      </nav>

      <nav className='w-full text-grayIcon text-2xl'>
        <Link
          className='relative w-full h-12 flex justify-center items-center sidebar__span'
          href='/settings'
          onClick={() => setCurrPage('settings')}
          data-value='Configurações'
        >
          {
            currPage === 'settings' 
            &&  <div className='absolute top-0 left-0 h-full w-1 bg-gradientBlue rounded-r-md' />
          }

          <BsFillGearFill className="hover:text-zinc-200" />
        </Link>
      </nav>
    </section>
  );
}

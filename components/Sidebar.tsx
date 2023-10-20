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
      // eslint-disable-next-line max-len
      className='max-[700px]:hidden h-screen w-20 flex flex-col justify-between items-center absolute top-0 left-0 bg-darkGray py-6'  
    >
      <section>
        <Image src={homeIcon} width={32} height={32} alt={''} />
      </section>

      <section className='h-64 w-full flex flex-col items-center justify-center gap-6 text-zinc-500 text-2xl'>
        <Link
          className='relative w-full h-12 flex justify-center items-center'
          href='/'
          onClick={() => setCurrPage('home')}
        >
          {
            currPage === 'home'
            &&  <div className='absolute top-0 left-0 h-full w-1 bg-paymentButton rounded-r-md' />
          }
          
          <SlMagnifier className="hover:text-zinc-200" />
        </Link>

        <Link
          className='relative w-full h-12 flex justify-center items-center'
          href='/saved'
          onClick={() => setCurrPage('saved')}
        >
          {
            currPage === 'saved'
            &&  <div className='absolute top-0 left-0 h-full w-1 bg-paymentButton rounded-r-md' />
          }

          <BsBookmarkFill className="hover:text-zinc-200" />
        </Link>

        <Link
          className='relative w-full h-12 flex justify-center items-center'
          href='/advertise'
          onClick={() => setCurrPage('advertise')}
        >
          {
            currPage === 'advertise' 
            &&  <div className='absolute top-0 left-0 h-full w-1 bg-paymentButton rounded-r-md' />
          }

          <BsHouseAdd className="hover:text-zinc-200" />
        </Link>
      </section>

      <section className='w-full text-zinc-500 text-2xl'>
        <Link
          className='relative w-full h-12 flex justify-center items-center'
          href='/settings'
          onClick={() => setCurrPage('settings')}
        >
          {
            currPage === 'settings' 
            &&  <div className='absolute top-0 left-0 h-full w-1 bg-paymentButton rounded-r-md' />
          }

          <BsFillGearFill className="hover:text-zinc-200" />
        </Link>
      </section>
    </section>
  );
}

'use client';
import globalContext from '@/context/context';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';
import { SlMagnifier } from 'react-icons/sl';
import {  BsBookmarkFill, BsHouseAdd } from 'react-icons/bs';
import { useContext } from 'react';
import {
  Nav,
  NavItem,
} from 'reactstrap';

export function Footer() {
  const { user, isLoading } = useUser();
  const { currPage, setCurrPage } = useContext(globalContext);
  return(
    <div className='w-full flex items-center justify-center'>
      <div className='min-[700px]:hidden z-10 fixed bottom-2 flex justify-center items-center w-96 h-14 rounded-md
       bg-white'>
        <Link
          className='text-buttonText flex items-center justify-center font-semibold 
          rounded-l-md py-3 h-14 w-full bg-white'
          href='/'
          onClick={() => setCurrPage('home')}
          data-value='Pesquisar'
        >
          {
            currPage === 'home'
            &&  <div className='absolute top-0 w-16 h-1 bg-paymentButton rounded-md' />
          }
          <button className='flex flex-col items-center justify-center '>
            <SlMagnifier
              className="hover:text-zinc-200"
            />
          Buscar
          </button>
        </Link>

        <div className='w-[2px] h-5 bg-placeholder'></div>

        <Link
          className='text-buttonText flex items-center justify-center font-semibold  py-3 h-14 w-full bg-white'
          href='/advertise'
          onClick={() => setCurrPage('advertise')}
          data-value='Anúnciar'
        >
          {
            currPage === 'advertise' 
            &&  <div className='absolute top-0 w-16 h-1 bg-paymentButton rounded-md' />
          }
          <button className='flex flex-col items-center justify-center'>
            <BsHouseAdd className="hover:text-zinc-200" />
            Anunciar
          </button>
        </Link>

        <div className='w-[2px] h-5 bg-placeholder'></div>

        <Link
          className='text-buttonText flex items-center justify-center font-semibold  py-3 h-14 w-full bg-white'
          href='/saved'
          onClick={() => setCurrPage('saved')}
          data-value='Salvos'
        >
          {
            currPage === 'saved'
            &&  <div className='absolute top-0 w-16 h-1 bg-paymentButton rounded-md' />
          }
          <button className='flex flex-col items-center justify-center '>
            <BsBookmarkFill className="hover:text-zinc-200" />
            Favoritos
          </button>
        </Link>

        <div className='w-[2px] h-5 bg-placeholder'></div>

        {isLoading && (
          <div className="h-14 w-full  flex items-center justify-center  bg-white rounded-r-md">
          Loading...
          </div>
        )}

        {!isLoading && !user && (
          <Nav className="h-14 w-full flex items-center justify-center  bg-white rounded-r-md" navbar>
            <a
              href="/api/auth/login"
              className="btn btn-primary btn-block"
              tabIndex={0}>
              Log in
            </a>
          </Nav>
        )}
        {user && (
          <Nav
            id="nav-mobile"
            className="h-14 w-full flex items-center justify-center  bg-white rounded-r-md"
            navbar
            data-testid="navbar-menu-mobile">
            <NavItem>
              <span className="user-info">
                <Image
                  src={user.picture as string}
                  alt="Profile"
                  className="nav-user-profile"
                  width={50}
                  height={50}
                  data-testid="navbar-picture-mobile"
                />
              </span>
            </NavItem>
            <NavItem id="qsLogoutBtn">
              <a
                href="/api/auth/logout"
                className="p-0">
                Log out
              </a>
            </NavItem>
          </Nav>
        )}
      </div>
    </div>
  );
}
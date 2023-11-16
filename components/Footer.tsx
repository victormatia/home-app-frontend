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
    <div className='w-full flex items-center justify-center min-[700px]:hidden'>
      <div className=' z-10 fixed bottom-2 flex justify-center items-center w-96 h-14 rounded-md
       bg-white shadow-lg'>
        <Link
          className='text-buttonText flex items-center justify-center font-semibold 
          rounded-l-md py-3 h-14 w-full bg-white '
          href='/'
          onClick={() => setCurrPage('home')}
          data-value='Pesquisar'
        >
          {
            currPage === 'home'
            &&  <div className='absolute top-0 w-16 h-1 bg-paymentButton rounded-b-md' />
          }
          <button className='flex flex-col items-center justify-center gap-1'>
            <SlMagnifier
              className="hover:text-zinc-200 text-lg text-zinc-500"
            />
            <span className='text-xs text-zinc-500'>
              Buscar
            </span>
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
            &&  <div className='absolute top-0 w-16 h-1 bg-paymentButton rounded-b-md' />
          }
          <button className='flex flex-col items-center justify-center gap-1'>
            <BsHouseAdd className="hover:text-zinc-200 text-lg text-zinc-500" />
            <span className='text-xs text-zinc-500'>
            Anunciar
            </span>
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
            &&  <div className='absolute top-0 w-16 h-1 bg-paymentButton rounded-b-md' />
          }
          <button className='flex flex-col items-center justify-center gap-1'>
            <BsBookmarkFill className="hover:text-zinc-200 text-lg text-zinc-500" />
            <span className=' text-xs text-zinc-500'>  
            Favoritos
            </span>
          </button>
        </Link>

        <div className='w-[2px] h-5 bg-placeholder'></div>

        {isLoading && (
          <div className="h-14 w-full  flex items-center justify-center bg-white rounded-r-md">
          Loading...
          </div>
        )}

        {!isLoading && !user && (
          <Nav className="h-14 w-full flex items-center justify-center  bg-white rounded-r-md" navbar>
            <a
              href="/api/auth/login"
              className="btn btn-primary btn-block"
              tabIndex={0}
            >
              Log in
            </a>
          </Nav>
        )}
        {user && (
          <Nav
            id="nav-mobile"
            className="w-full flex flex-col items-center justify-center bg-white rounded-r-md"
            navbar
            data-testid="navbar-menu-mobile">
            {
              currPage === 'profile'
                &&  <div className='absolute top-0 w-16 h-1 bg-paymentButton rounded-b-md' />
            }
            <NavItem>
              <span className="user-info">
                <Image
                  src={user.picture as string}
                  alt="Profile"
                  className="nav-user-profile rounded-full border border-appBlue"
                  width={24}
                  height={24}
                  data-testid="navbar-picture-mobile"
                />
              </span>
            </NavItem>
            <NavItem id="qsLogoutBtn">
              <Link
                href="/profile"
                className="text-xs text-zinc-500"
                onClick={() => setCurrPage('profile')}
              >
                Perfil
              </Link>
            </NavItem>
          </Nav>
        )}
      </div>
    </div>
  );
}
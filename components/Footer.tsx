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
            &&  <div className='absolute top-0 w-16 h-1 bg-gradientBlue rounded-b-md' />
          }
          <div className='flex flex-col items-center justify-center gap-1'>
            <SlMagnifier
              className="hover:text-zinc-200 text-lg text-grayIcon"
            />
            <span className='text-xs text-grayIcon'>
              Buscar
            </span>
          </div>
        </Link>

        <div className='w-[2px] h-5 bg-grayIcon'/>

        <Link
          className='text-buttonText flex items-center justify-center font-semibold  py-3 h-14 w-full bg-white'
          href='/advertise'
          onClick={() => setCurrPage('advertise')}
          data-value='Anúnciar'
        >
          {
            currPage === 'advertise' 
            &&  <div className='absolute top-0 w-16 h-1 bg-gradientBlue rounded-b-md' />
          }
          <div className='flex flex-col items-center justify-center gap-1'>
            <BsHouseAdd className="hover:text-zinc-200 text-lg text-grayIcon" />
            <span className='text-xs text-grayIcon'>
            Anunciar
            </span>
          </div>
        </Link>

        <div className='w-[2px] h-5 bg-grayIcon'/>

        <Link
          className='text-buttonText flex items-center justify-center font-semibold  py-3 h-14 w-full bg-white'
          href='/saved'
          onClick={() => setCurrPage('saved')}
          data-value='Salvos'
        >
          {
            currPage === 'saved'
            &&  <div className='absolute top-0 w-16 h-1 bg-gradientBlue rounded-b-md' />
          }
          <div className='flex flex-col items-center justify-center gap-1'>
            <BsBookmarkFill className="hover:text-zinc-200 text-lg text-grayIcon" />
            <span className=' text-xs text-grayIcon'>  
            Favoritos
            </span>
          </div>
        </Link>

        <div className='w-[2px] h-5 bg-grayIcon'/>

        {isLoading && (
          <div className="h-14 w-full  flex items-center justify-center gap-1 bg-white rounded-r-md">
            <div 
              className='h-6 w-6 border-2 border-[#c3c3c373] rounded-full 
              border-t-primaryBlue animate-spin'
            />
          </div>
        )}

        {!isLoading && !user && (
          <Nav className="h-14 w-full flex items-center justify-center  bg-white rounded-r-md" navbar>
            <a
              href="/api/auth/login"
              className="btn btn-primary btn-block"
              tabIndex={0}
            >
              Login
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
                &&  <div className='absolute top-0 w-16 h-1 bg-gradientBlue rounded-b-md' />
            }
            <NavItem>
              <span className="user-info">
                <Image
                  src={user.picture as string}
                  alt="Profile"
                  className="nav-user-profile rounded-full border border-primaryBlue"
                  width={24}
                  height={24}
                  data-testid="navbar-picture-mobile"
                />
              </span>
            </NavItem>
            <NavItem id="qsLogoutBtn">
              <Link
                href="/profile"
                className="text-xs text-grayIcon"
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
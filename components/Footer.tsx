'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import { Heart, House } from 'phosphor-react';
import {
  Nav,
  NavItem,
} from 'reactstrap';

export function Footer() {
  const { user, isLoading } = useUser();
  return(
    <div className='min-[700px]:hidden z-10 fixed bottom-0 grid grid-cols-4 gap-1 mx-auto w-full h-14 bg-app'>
      <div
        className='text-buttonText flex items-center justify-center font-semibold rounded-md bg-white  py-3 h-full'
      >
        <button className='flex flex-col items-center justify-center '>
          <House size={20} />
          Buscar
        </button>
      </div>

      <div
        className='text-buttonText flex items-center justify-center font-semibold rounded-md bg-white  py-3 h-full'
      >
        <button className='flex flex-col items-center justify-center'>
          <House size={20} />
          Anunciar
        </button>
      </div>

      <div
        className='text-buttonText flex items-center justify-center font-semibold rounded-md bg-white  py-3 h-full'
      >
        <button className='flex flex-col items-center justify-center'>
          <Heart size={20} />
          Favoritos
        </button>
      </div>

      {isLoading && (
        <div className="h-full  flex items-center justify-center rounded-md bg-white">
          Loading...
        </div>
      )}

      {!isLoading && !user && (
        <Nav className="h-full  flex items-center justify-center rounded-md bg-white" navbar>
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
          className="h-full  flex items-center justify-center rounded-md bg-white"
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
  );
}
'use client';

import Image from 'next/image';
import { Sliders } from 'phosphor-react';
import { Filter } from './Filter';
import { useState } from 'react';
import Search from './Search';
import { Nav, NavItem } from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0/client';

export function Header(){
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { user, isLoading } = useUser();

  function handleOpenFilter() {
    setIsFilterOpen(true);
  }

  return(
    <>
      <div className='flex  h-20 px-6 py-7 items-center justify-around bg-app min-[700px]:justify-end'>

        <div className='min-[700px]:fixed min-[700px]:left-[calc(50%-160px)] '>
          <Search />
        </div>

        <div>
          <button 
            className='flex justify-between items-center text-placeholder min-[700px]:hidden '
            onClick={handleOpenFilter}
          >
            <Sliders size={24} className='rotate-90'/>
          Filter
          </button>
        </div>

        <div className='max-[700px]:hidden justify-self-end mr-3'>
          {isLoading && (
            <div className="h-full  flex items-center justify-center rounded-md bg-paymentButton p-2 text-white ">
          Loading...
            </div>
          )}

          {!isLoading && !user && (
            <Nav className="h-full  flex items-center justify-center rounded-md bg-paymentButton p-2 text-white " navbar>
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
              className="h-full  flex items-center justify-center"
              navbar
              data-testid="navbar-menu-mobile">
              <NavItem className='flex items-center justify-center gap-2'>
                <span className='text-lg text-info'>
                  {user.name}
                </span>
                <span className="user-info">
                  <Image
                    src={user.picture as string}
                    alt="Profile"
                    className="nav-user-profile rounded-full border border-blue"
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

      <Filter openFilter={isFilterOpen} closeFilter={setIsFilterOpen}/>       
    </>
  );
};

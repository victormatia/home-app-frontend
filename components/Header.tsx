'use client'

import Image from 'next/image';
import { Sliders } from 'phosphor-react';
import Search from './Search';
import { Nav, NavItem } from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useContext } from 'react';
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import globalContext from '@/context/context';
import { Button } from './Button';

export function Header(){
  const { setToggleOpenFilter } = useContext(globalContext);
  const { user, isLoading } = useUser();

  function handleOpenFilter() {
    setToggleOpenFilter(true);
  }
  return(
    <div className='flex  h-20 px-6 py-7 items-center justify-around bg-grayBase min-[700px]:justify-end'>

      <div className='min-[700px]:fixed min-[700px]:left-[calc(50%-160px)] '>
        <Search />
      </div>

      <div>
        <Button 
          variant='filter'
          onClick={handleOpenFilter}
        >
          <Sliders size={24} className='rotate-90'/>
          Filter
        </Button>
      </div>

      <div className='max-[700px]:hidden justify-self-end pr-3'>
      {
          isLoading ? (
            <div className="h-14 w-full  flex items-center justify-center gap-1 bg-grayBase rounded-r-md">
              <div 
                className='h-6 w-6 border-2 border-[#c3c3c373] rounded-full 
                border-t-[#2be4a0] animate-spin'
              />
            </div>
          ) : (
            <>
              {
                !user ? (
                <Nav className="h-full flex items-center justify-center rounded-md bg-gradientBlue p-2 text-white " navbar>
                  <a
                    href="/api/auth/login"
                    className="btn btn-primary btn-block"
                    tabIndex={0}>
                    Login
                  </a>
                </Nav>
              ) : (
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
                        className="nav-user-profile rounded-full border border-primaryBlue"
                        width={50}
                        height={50}
                        data-testid="navbar-picture-mobile"
                      />
                    </span>
                  </NavItem>
                  <NavItem id="qsLogoutBtn" className='ml-4'>
                    <Link href="/api/auth/logout" >
                      <FiLogOut  className="text-xl text-info"/>
                    </Link>
                  </NavItem>
                </Nav>
              )
            }
            </>
          )
        }
      </div>
    </div>
  );
};
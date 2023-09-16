'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Nav,
  NavItem,
} from 'reactstrap';
import Lupa from '../assets/Lupa.svg';

const links = [
  { name: 'Alugar', href: '/rent' },
  { name: 'Comprar', href: '/buy' },
  { name: 'Anunciar', href: '/advertise' },
];
const Header = () => {
  const { user, isLoading } = useUser();
  return(
    <div className='flex h-20 px-6 py-7 gap-11 items-center justify-center bg-app'>
      <div className="max-[500px]:hidden">
        <Link href='/'> Logo </Link>
      </div>

      <label htmlFor="search" className='flex gap-2 items-center w-[285px] h-8 rounded bg-white'>
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
        {!isLoading && !user && (
          <Nav className="d-md-none" navbar>
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
            className="d-md-none justify-content-between"
            navbar
            data-testid="navbar-menu-mobile">
            <NavItem>
              <span className="user-info">
                <Image
                  src={user.picture as string}
                  alt="Profile"
                  className="nav-user-profile d-inline-block rounded-circle mr-3"
                  width="50"
                  height="50"
                  data-testid="navbar-picture-mobile"
                />
                <h6 className="d-inline-block" data-testid="navbar-user-mobile">
                  {user.name}
                </h6>
              </span>
            </NavItem>
            <NavItem>
              <a href="/profile">
                    Profile
              </a>
            </NavItem>
            <NavItem id="qsLogoutBtn">
              <a
                href="/api/auth/logout"
                className="btn btn-link p-0">
                    Log out
              </a>
            </NavItem>
          </Nav>
        )}
      </div>
    </div>
  );
};

export default Header;
import { UserButton, auth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import Lupa from '../assets/Lupa.svg';

const links = [
  { name: 'Alugar', href: '/rent' },
  { name: 'Comprar', href: '/buy' },
  { name: 'Anunciar', href: '/advertise' },
];

const Header = async () => {
  const { userId } = await auth();
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
        {
          userId === null ?
            <Link href='/sign-in' >
              <button>Login</button>
            </Link> : 
            <UserButton afterSignOutUrl="/"/>
        }
      </div>
      
    </div>
  );
};

export default Header;
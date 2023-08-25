import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';

const links = [
  { name: 'Alugar', href: '/rent' },
  { name: 'Comprar', href: '/buy' },
  { name: 'Anunciar', href: '/advertise' },
];

const Header = async () => {
  const { userId } = await auth();
  return(
    <div className='flex justify-between items-center w-full px-5'>
      <div>
        <Link href='/'> Logo </Link>
      </div>
      <div className='flex gap-2 items-center' >
        <ul className="px-4 flex gap-2">
          {links.map((link) => (
            <li key={link.name} className="text-xl my-4">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
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
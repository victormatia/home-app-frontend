'use client';

import globalContext from '@/context/context';
import { useContext, useEffect } from 'react';
import { Button } from './Button';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

function AdvertiseActions() {
  const { setCurrPage } = useContext(globalContext);
  const { user } = useUser();

  useEffect(() => setCurrPage('advertise') , []);

  return (
    <>
      {user ? (
        <div className='flex justify-center gap-2 p-4'>
          <Button
            variant='ghost'
            className='hover:shadow-default border border-zinc-200 p-4 transition-all'
          >
            <Link href='http://localhost:3000/advertise/propertyRegister'>
              Cadastrar imóvel
            </Link>
          </Button>
          <Button
            variant='ghost'
            className='hover:shadow-default border border-zinc-200 p-4 transition-all'
          >
            <Link href=''>
              Gerenciar imóveis
            </Link>
          </Button>
        </div>
      ): (
        <section className="flex h-full w-full flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-semibold">Para cadastrar seus imóveis é necessário estar logado</h1>
          <a 
            href="/api/auth/login" 
            className="bg-gradientBlue rounded p-2 text-lg font-medium text-white hover:opacity-80">
            Faça login clicando aqui
          </a>
        </section>
      )}
    </>
  );
}

export default AdvertiseActions;
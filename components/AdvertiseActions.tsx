'use client';

import globalContext from '@/context/context';
import { useContext, useEffect } from 'react';
import { Button } from './Button';
import Link from 'next/link';

function AdvertiseActions() {
  const { setCurrPage } = useContext(globalContext);

  useEffect(() => setCurrPage('advertise') , []);

  return (
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
  );
}

export default AdvertiseActions;
'use client';
import ActivateAccountUserButton from '@/components/Profile/ActivateAccountUserButton';
import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react';

function SuspendedUser() {
  const { user } = useUser();
  console.log(user);
  const daysCount = 999;

  return (
    <div className='mx-auto flex h-screen w-full max-w-[560px] 
    flex-col items-center justify-center text-center max-[700px]:p-4'>
      <div className='p-4'>
        <h1 className='text-center text-4xl  font-bold text-red-400'>Conta suspensa!</h1>
        <p className='mb-8 mt-4 text-left text-lg font-medium  text-red-400'>
          {user?`Olá ${user.given_name}, sua conta está suspensa e será deletada dentro de: ${daysCount} dias!`:''}
        </p>
        <ActivateAccountUserButton />
      </div>
    </div>
  );
}

export default SuspendedUser;

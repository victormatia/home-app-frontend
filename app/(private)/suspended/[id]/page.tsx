'use client'
import ActivateAccountUserButton from '@/components/Profile/ActivateAccountUserButton'
import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react'

function SuspendedUser() {
  const { user } = useUser();
  console.log(user);
  const daysCount = 999
  

  return (
    <div className='w-full h-screen text-center flex justify-center flex-col items-center max-[700px]:p-4 max-w-[560px] mx-auto'>
      <div className='p-4'>
        <h1 className='font-bold text-red-400  text-4xl text-center'>Conta suspensa!</h1>
        <p className='mt-4 mb-8 text-left text-lg font-medium  text-red-400'>{user?`Olá ${user.given_name}, sua conta está suspensa e será deletada dentro de: ${daysCount} dias!`:''}</p>
        <ActivateAccountUserButton />
      </div>
    </div>
  )
}

export default SuspendedUser;

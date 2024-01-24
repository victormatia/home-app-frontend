import ActivateAccountUserButton from '@/components/Profile/ActivateAccountUserButton'
import React from 'react'

function SuspendedUser() {
  return (
    <div className='w-full h-screen text-center flex justify-center flex-col items-center min-[700px]:pl-20 max-[700px]:p-4 max-w-[560px] mx-auto'>
      <div className='p-4'>
        <h1 className='font-bold text-red-400  text-4xl text-center'>Conta suspensa!</h1>
        <p className='mt-4 mb-8 text-left text-lg font-medium  text-red-400'>Olá fulano, sua conta está em processo de suspensão e será deletada da nossa base de dados em: <span className='font-bold'>X dias</span></p>
        <ActivateAccountUserButton />
      </div>
    </div>
  )
}

export default SuspendedUser;

"use client"
import queryClient from '@/tanstack/queryClient';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';

const ActivateAccountUserButton: React.FC = () => {
  const router = useRouter();
  const userId = localStorage.getItem('userId')
  const activateUser = useMutation({
    mutationFn: () => axios.put(`http://localhost:3001/user/${userId}/activate`),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']})
      //caso delay usar removeQueries
    }
  })

  const handleActivate = () => {
    activateUser.mutate()
    console.log("conta reativada")
    router.push('/profile');
  };

  return (
    <div className='border rounded border-zinc-300 p-5 text-left text-[16px] flex flex-col text-zinc-400'>
      <h1 className='font-bold'>Reativação de conta</h1>
      <span className='text-opacity-90 mb-3'>Usuário suspenso, para reativar-lo clique no botão abaixo</span>
      <button className='text-zinc-600 mt-3 border rounded border-zinc-500 font-bold bg-zinc-200 pt-2 pb-2' onClick={handleActivate}>Reativar Conta</button>
    </div>
  );
};

export default ActivateAccountUserButton;

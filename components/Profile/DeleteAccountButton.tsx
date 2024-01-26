"use client"
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteAccountButton: React.FC = () => {
  const router = useRouter();
  const userId = localStorage.getItem('userId')
  const suspendUser = useMutation({
    mutationFn: () => axios.delete(`http://localhost:3001/user/${userId}`)
  })

  const handleDelete = () => {
    suspendUser.mutate()
    console.log("conta deletada")
    router.push(`/suspended/${userId}`);
  };

  return (
    <div className='max-[600px]:m-5 border rounded border-[#FFBDBD] p-5 text-left text-[16px] flex flex-col md:w-[250px] md:h-[320px] lg:w-[350px] lg:h-[260px] min-[600px]:ml-5'>
      <span className='text-[#F54C4C] font-bold'>Suspensão de conta</span>
      <span className='text-red-500 text-opacity-90 mb-3'>Atenção, ao confirmar essa opção sua conta será suspensa por x dias, o impossibilitanto de usar todo o nosso sistema. Após esse prazo todos as suas dados serão apagadas do nosso banco de dados. </span>
      <button className='text-[#F54C4C] mt-3 border rounded border-[#F54C4C] font-bold bg-[#F5C7C7] pt-2 pb-2' onClick={handleDelete}>Suspender Conta</button>
    </div>
  );
};

export default DeleteAccountButton;

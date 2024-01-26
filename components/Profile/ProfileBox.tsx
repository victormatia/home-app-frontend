"use client"
import { resetPassword } from '@/app/api/auth/resetPassword/route';
import queryClient from '@/tanstack/queryClient';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ProfileBox: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  const userId = localStorage.getItem('userId')

  const { data: user, isError } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3001/user/${userId}`);
      setName(data.name);
      setEmail(data.email);
      setCpf(data.cpf);
      return data;
    },
  })
  const router = useRouter();
  if(isError) router.push(`/suspended/${userId}`);

  const updateUser = useMutation({
    mutationFn: () => axios.put(`http://localhost:3001/user/${userId}`, {
      name,
      email,
      cpf
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']})
      //caso delay usar removeQueries
    }
  })

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleResetPassword = () => {
    // Redirect the user to Auth0's Change Password page
    // loginWithRedirect({ screen_hint: 'resetPassword' });
    resetPassword()
  };
  
  const handleSave = () => {
    updateUser.mutate()
    console.log("salvo")
    setIsEditing(false);
  };

  return (
    <div className='border rounded border-[#DADADA] p-5 text-left md:w-[380px] lg:w-[535px] md:h-[320px] lg:h-[260px] md:pr-20'>
        <div className='flex justify-between items-start md:w-[340px] lg:w-[495px]'>
            <div className='mb-3 md:mb-5 lg:mb-3 flex flex-col'>
                <span className='text-[#ACACAC] text-[12px]'>Nome: </span>
                {isEditing ? (
                <input className="rounded-md bg-white shadow-md p-1 w-[280px] text-buttonText" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                ) : (
                <span className="p-1">{name}</span>
                )}
            </div>
            <button className='underline text-sm' onClick={isEditing ? handleSave : handleEdit}>
            {isEditing ? 'Salvar' : 'Editar'}
            </button>
        </div>
      <div className='mb-3 md:mb-5 lg:mb-3 flex flex-col'>
        <span className='text-[#ACACAC] text-[12px]'>Email: </span>
        {isEditing ? (
                <input className="rounded-md bg-white shadow-md p-1 w-[280px] text-buttonText" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                ) : (
                <span className="p-1">{email}</span>
                )}
      </div>
      <div className='mb-3 md:mb-5 lg:mb-3 flex flex-col'>
        <span className='text-[#ACACAC] text-[12px]'>CPF: </span>
        {isEditing ? (
                <input className="rounded-md bg-white shadow-md p-1 w-[280px] text-buttonText" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                ) : (
                <span className="p-1">{cpf}</span>
                )}
      </div>
      <div className='flex flex-col items-start md:w-[340px] lg:w-[495px]'>
        <span className='text-[#ACACAC] text-[12px]'>Senha: </span>
        <div className='flex w-full justify-between'>
          <span className="p-1">**********</span>
          {isEditing ? (
            <button className='underline p-1 text-sm' onClick={handleResetPassword}>Redefinir senha</button>
            ) : (
              ''
              )}
          </div>
      </div>
    </div>
  );
};

export default ProfileBox;

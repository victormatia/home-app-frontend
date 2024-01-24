"use client"
import React from 'react';

const ActivateAccountUserButton: React.FC = () => {
  const handleDelete = () => {
    // Add logic to delete the account
    console.log("conta deletada")
  };

  return (
    <div className='border rounded border-zinc-300 p-5 text-left text-[16px] flex flex-col text-zinc-400'>
      <h1 className='font-bold'>Reativação de conta</h1>
      <span className='text-opacity-90 mb-3'>Usuário suspenso, para reativar-lo clique no botão abaixo</span>
      <button className='text-zinc-600 mt-3 border rounded border-zinc-500 font-bold bg-zinc-200 pt-2 pb-2' onClick={handleDelete}>Reativar Conta</button>
    </div>
  );
};

export default ActivateAccountUserButton;

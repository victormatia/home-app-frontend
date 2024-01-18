"use client"
import React from 'react';

const DeleteAccountButton: React.FC = () => {
  const handleDelete = () => {
    // Add logic to delete the account
    console.log("conta deletada")
  };

  return (
    <div className='m-5 border rounded border-[#FFBDBD] p-5 text-left text-[16px] flex flex-col'>
      <span className='text-[#F54C4C] mb-3 font-bold'>Suspensão de conta</span>
      <span className='text-red-500 text-opacity-90 mb-3'>Atenção, ao confirmar essa opção sua conta será suspensa por x dias, o impossibilitanto de usar todo o nosso sistema. Após esse prazo todos as suas dados serão apagadas do nosso banco de dados. </span>
      <button className='text-[#F54C4C] mt-5 border rounded border-[#F54C4C] font-bold bg-[#F5C7C7] pt-2 pb-2' onClick={handleDelete}>Suspender Conta</button>
    </div>
  );
};

export default DeleteAccountButton;

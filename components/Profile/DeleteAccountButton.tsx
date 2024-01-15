"use client"
import React from 'react';

const DeleteAccountButton: React.FC = () => {
  const handleDelete = () => {
    // Add logic to delete the account
    console.log("conta deletada")
  };

  return (
    <button className='text-[#F54C4C] mt-5' onClick={handleDelete}>Deletar Conta</button>
  );
};

export default DeleteAccountButton;

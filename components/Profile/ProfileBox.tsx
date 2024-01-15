"use client"
import React, { useState } from 'react';

const ProfileBox: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [cpf, setCpf] = useState('123.456.789-00');

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Add logic to save changes
    console.log("salvo")
    setIsEditing(false);
  };

  return (
    <div className='border rounded border-[#DADADA] p-5 text-left'>
        <div className='flex justify-between items-start'>
            <div className='mb-5 flex flex-col'>
                <span className='text-[#ACACAC]'>Nome: </span>
                {isEditing ? (
                <input className="rounded-md bg-white shadow-md p-1 text-buttonText" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                ) : (
                <span className="p-1">{name}</span>
                )}
            </div>
            <button onClick={isEditing ? handleSave : handleEdit}>
            {isEditing ? 'Salvar' : 'Editar'}
            </button>
        </div>
      <div className='mb-5 flex flex-col'>
        <span className='text-[#ACACAC]'>Email: </span>
        <span className="p-1">{email}</span>
      </div>
      <div className='flex flex-col'>
        <span className='text-[#ACACAC]'>CPF: </span>
        <span className="p-1">{cpf}</span>
      </div>
    </div>
  );
};

export default ProfileBox;

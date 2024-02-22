'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { Card } from './Card';
import { TFavorite } from '@/types';
import { useContext, useEffect } from 'react';
import globalContext from '@/context/context';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export function SavedPageLogin(){
  const { setCurrPage } = useContext(globalContext);
  const { user } = useUser();
  const userId = localStorage.getItem('userId');

  const { data :  favoriteList } = useQuery<TFavorite[]>({
    queryKey: ['favorite'],
    queryFn: async () => {
      if(!userId) return;
      const { data } = await axios.get(`http://localhost:3001/user/${userId}`);
      return data.favoriteImmobile;
    },
  });

  useEffect(() => setCurrPage('saved'), []);

  if (!favoriteList?.length) return (
    <div className='flex h-screen w-full items-center justify-center'>
      <h2 className='text-grayIcon text-2xl font-semibold'>Sem imóveis favoritados</h2>
    </div>
  );

  return(
    <>
      { user ? (
        <ul className='flex w-full flex-col items-center gap-4 p-4 pb-20
        min-[700px]:h-full
           min-[700px]:flex-row min-[700px]:flex-wrap min-[700px]:items-start 
           min-[700px]:gap-6 min-[700px]:overflow-scroll 
           min-[700px]:overflow-x-hidden min-[700px]:p-6
           '>
          {
            favoriteList?.map(({ immobile, immobileId }) => <Card immobile={immobile} key={immobileId}/>)
          }
        </ul>
      ):(
        <section className="flex h-full w-full flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-semibold">Para acessar seus imóveis salvos é necessário estar logado</h1>
          <a 
            href="/api/auth/login" 
            className="bg-gradientBlue rounded p-2 text-lg font-medium text-white hover:opacity-80">
              Faça login clicando aqui
          </a>
        </section>
      )
      }
    </>
  );
}
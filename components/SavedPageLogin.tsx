'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

import { Card } from './Card';
import queryClient from '@/tanstack/queryClient';
import { TFavorite } from '@/types';

export function SavedPageLogin(){
  const { user } = useUser();
  const favoriteList  = queryClient.getQueryData<TFavorite[]>(['favorite']);

  return(
    <>
      { user ? (
        <ul className='flex w-full flex-col gap-4 pb-20
           min-[700px]:h-full min-[700px]:flex-row min-[700px]:flex-wrap 
           min-[700px]:gap-6 min-[700px]:overflow-scroll 
           min-[700px]:overflow-x-hidden min-[700px]:p-6
           '>
          {favoriteList?.map(({ immobile, immobileId }) => <Card immobile={immobile} key={immobileId}/>)}
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
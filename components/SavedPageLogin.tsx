'use client'

import { useUser } from "@auth0/nextjs-auth0/client";

import { Card } from "./Card";
import queryClient from "@/tanstack/queryClient";
import { TFavorite } from "@/types";

export function SavedPageLogin(){
  const { user } = useUser();
 const favoriteList  = queryClient.getQueryData<TFavorite[]>(['favorite'])

  return(
    <>
      { user ? (
           <ul className='flex flex-col pb-20 gap-4 w-full
           min-[700px]:p-6 min-[700px]:flex-wrap min-[700px]:flex-row 
           min-[700px]:h-full min-[700px]:gap-6 
           min-[700px]:overflow-scroll min-[700px]:overflow-x-hidden
           '>
            {favoriteList?.map(({immobile, immobileId}) => <Card immobile={immobile} key={immobileId}/>)}
          </ul>
      ):(
        <section className="text-center w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold">Para acessar seus imóveis salvos é necessário estar logado</h1>
          <a href="/api/auth/login" className="text-lg text-white font-medium bg-gradientBlue p-2 rounded hover:opacity-80">Faça login clicando aqui</a>
        </section>
        )
      }
    </>
  )
}
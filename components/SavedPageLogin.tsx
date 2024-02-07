'use client'
import globalContext from "@/context/context";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useContext } from "react";
import { Card } from "./Card";

export function SavedPageLogin(){
  const { user } = useUser();
  const { favoriteList } = useContext(globalContext)

  return(
    <>
      { user ? (
          <div>
            {favoriteList.map(({immobile, immobileId}) => <Card immobile={immobile} key={immobileId}/>)}
          </div>
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
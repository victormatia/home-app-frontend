'use client'
import { useUser } from "@auth0/nextjs-auth0/client";

export function SavedPageLogin(){
  const { user } = useUser();

  return(
    <>
      { user ? (
          <div></div>
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
import { useContext, useState } from "react";
import { Button } from "./Button";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import * as Dialog from '@radix-ui/react-dialog';
import { X } from "phosphor-react";
import axios from "axios";
import queryClient from "@/tanstack/queryClient";
import { useMutation } from "@tanstack/react-query";
import globalContext from "@/context/context";


interface SaveButtonPorps {
  immobileId: string | undefined
}

export function SaveButton({immobileId} : SaveButtonPorps){
  const { favoriteList } = useContext( globalContext)
  const userId = localStorage.getItem('userId')

  

  const saveImmobile = useMutation({
    mutationFn: () => axios.post(`http://localhost:3001/immobile/favorite`, {
        userId,
        immobileId,
    }),
    onSuccess: () => {

      //caso delay usar removeQueries
    }
  })

  const unSaveImmobile = useMutation({
    mutationFn: () => axios.delete(`http://localhost:3001/immobile/unfavorite`, {
       data: {
        userId,
        immobileId,
       } 
    }),
    onSuccess: () => {
      //caso delay usar removeQueries
    }
  })

  async function favoriteImmobile(){
    console.log('favoritou')
    await saveImmobile.mutateAsync()
    queryClient.removeQueries({queryKey: ['favorite']})
  }

  async function unFavoriteImmobile(){
    console.log('desfavoritou')
    await unSaveImmobile.mutateAsync()
    queryClient.removeQueries({queryKey: ['favorite']})
  }

  return(
    <div>


    {userId ? (
            favoriteList.some((favorite) => favorite.immobileId === immobileId) ? ( 
              <Button
                variant='ghost'
                className='text-grayIcon'
                onClick={unFavoriteImmobile}
                data-testid='bookMarkFillIcon'
              >
                <BsBookmarkFill />
              </Button>
            ): (
              <Button
                variant='ghost'
                className='text-grayIcon'
                onClick={favoriteImmobile}
                data-testid='bookMarkIcon'
              >
                <BsBookmark />
              </Button>
            )
          ) : (
            <Dialog.Root>
              <Dialog.Trigger asChild>
              <Button
                variant='ghost'
                className='text-grayIcon'
                data-testid='bookMarkIcon'
              >
                <BsBookmark />
              </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-black/20 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="text-primaryBlue m-0 text-[17px] font-medium">
                  Login necessário para esta ação. 
                </Dialog.Title>
                <Dialog.Description className="text-grayLegend mt-[10px] mb-5 text-[15px] leading-normal">
                  Para salvar um imóvel nos favoritos é necessário estar logado
                </Dialog.Description>
                <Dialog.Close asChild>
                  <a 
                  className="text-primaryBlue hover:bg-borderColor inline-flex h-[35px] items-center justify-center px-2 font-medium"
                  href="/api/auth/login"
                  >
                    Para fazer login clique aqui 
                  </a>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <button
                  className="text-primaryBlue  absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                  >
                    <X size={16}/>
                  </button>
                </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          )
          }
    </div>
  )
}

function useContex() {
  throw new Error("Function not implemented.");
}

import {  useMemo, useState } from "react";
import { Button } from "./Button";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import axios from "axios";
import queryClient from "@/tanstack/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { DialogComponent } from "./DialogComponent";
import { useUser } from "@auth0/nextjs-auth0/client";
import { TFavorite } from "@/types";


interface SaveButtonPorps {
  immobileId: string | undefined
}

export function SaveButton({immobileId} : SaveButtonPorps){

  const [isSaved, setIsSaved] = useState(false)
  const userId = localStorage.getItem('userId')
  const { user } = useUser()

  const { data :  favoriteList } = useQuery<TFavorite[]>({
    queryKey: ['favorite'],
    queryFn: async () => {
      if(!userId) return
      const { data } = await axios.get(`http://localhost:3001/user/${userId}`);
    
        //setFavoriteList(data.favoriteImmobile)
      return data.favoriteImmobile;
    },
  })

  const saveImmobile = useMutation({
    mutationFn: () => axios.post(`http://localhost:3001/immobile/favorite`, {
        userId,
        immobileId,
    }),
    onSuccess: () => {
      setIsSaved(true)
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
      setIsSaved(false)
      queryClient.removeQueries({queryKey: ['favorite']})
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
      
  }

   const wasFavorited = useMemo(() => {
    return favoriteList?.some((favorite) => favorite.immobileId === immobileId) 
   }, [favoriteList])

  return(
    <div>


    {user ? (
             wasFavorited || isSaved ? ( 
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
            <DialogComponent />
          )
          }
    </div>
  )
}

import {  useMemo, useState } from 'react';
import { Button } from './Button';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import axios from 'axios';
import queryClient from '@/tanstack/queryClient';
import { useMutation } from '@tanstack/react-query';
import { DialogComponent } from './DialogComponent';
import { useUser } from '@auth0/nextjs-auth0/client';
import { TFavorite } from '@/types';

interface SaveButtonPorps {
  immobileId: string | undefined
}

export function SaveButton({ immobileId } : SaveButtonPorps){

  const [isSaved, setIsSaved] = useState(false);
  const userId = localStorage.getItem('userId');
  const { user } = useUser();

  const token = localStorage.getItem('token');

  const favoriteList  = queryClient.getQueryData<TFavorite[]>(['favorite']);

  const saveImmobile = useMutation({
    mutationFn: () => axios.post('http://localhost:3001/immobile/favorite', {
      userId,
      immobileId,
    }, {
      headers: { Authorization: token },
    }),
    onSuccess: () => {
      setIsSaved(true);
      queryClient.refetchQueries({ queryKey: ['favorite'] });
    },
  });

  const unSaveImmobile = useMutation({
    mutationFn: () => axios.delete('http://localhost:3001/immobile/unfavorite', {
      data: {
        userId,
        immobileId,
      }, headers: { Authorization: token },
    }),
    onSuccess: () => {
      setIsSaved(false);
      queryClient.refetchQueries({ queryKey: ['favorite'] });
    },
  });

  async function favoriteImmobile(){
    await saveImmobile.mutateAsync();
  }

  async function unFavoriteImmobile(){
    await unSaveImmobile.mutateAsync();
  }

  const wasFavorited = useMemo(() => {
    return favoriteList?.some((favorite) => favorite.immobileId === immobileId); 
  }, [favoriteList]);

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
  );
}

'use client';

import { ReactNode, useCallback, useMemo } from 'react';
import globalContext from './context';
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import getAuthUsers from '@/utils/getAuthUsers';

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const { user } = useUser();

  (useCallback(async () => {
    if (user) {
      const [{ user_id, name, email, created_at, updated_at }] = await getAuthUsers(user.email as string);
      
      const URL = 'http://localhost:3001/user/sign-up';

      const userData = {
        id:user_id,
        name:name,
        email: email,
        createdAt:created_at,
        updatedAt:updated_at,
      };

      const { data } = await axios.get('http://localhost:3001/user/list');

      const userAlreadyRegistered = data.some(({ id }: {id: string}) => id === user_id);

      if (!userAlreadyRegistered) {
        
        axios.post(URL, userData)
          .then((response) => {
            sessionStorage.setItem('token', response.data.token);
            localStorage.setItem('token', response.data.token);
            console.log(response.data.token);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }, [user]))();

  return (
    <globalContext.Provider value={ {} }>
      { children }
    </globalContext.Provider>
  );
}
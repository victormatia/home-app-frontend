'use client';

import { ReactNode, useMemo } from 'react';
import globalContext from './context';
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const { user } = useUser();

  useMemo(async () => {
    if (user) {
      const { data } = await axios.get('http://localhost:3000/api/get-all-users');
      
      const userAlreadyRegistered = data.some((e: {email: string}) => e.email === user?.email);

      console.log(userAlreadyRegistered);

      if (userAlreadyRegistered) {
        console.log('entrou no if');
        const URL = 'http://localhost:3001/user/sign-up';
        const userData = {
          name: user?.name,
          email: user?.email,
        };

        axios.post(URL, userData)
          .then((response) => {
            console.log(response.data.token);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }, [user]);

  return (
    <globalContext.Provider value={ {} }>
      { children }
    </globalContext.Provider>
  );
}
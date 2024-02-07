'use client';

import { ReactNode, useMemo, useState } from 'react';
import globalContext from './context';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Session } from '@auth0/nextjs-auth0';
import { TFavoriteList, TFiltredPropertys, TImmobile, TRankedImmobile } from '@/types';

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [immobiles, setImmobiles] = useState<TImmobile[]>([]);
  const [searchedImmobiles, setSearchedImmobiles] = useState<TRankedImmobile[]>([]);
  const [search, setSearch] = useState<string>('');
  const [currPage, setCurrPage] = useState<string>('home');
  const [toggleOpenFilter, setToggleOpenFilter] = useState<boolean>(false);
  const [propertyCaracteristics, setPropertyCaracteristics] = useState<TFiltredPropertys>({} as TFiltredPropertys);
  const [ favoriteList, setFavoriteList ] = useState<TFavoriteList[]>([]) 

  const userId = localStorage.getItem('userId')

  const {} = useQuery({
    queryKey: ['immobiles'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3001/immobile/list');
      setImmobiles(data);
      setSearchedImmobiles(data.map((i: TImmobile) => ({ immobileId: i.id,  immobile: i, rank: 0 })));

      return data;
    },
  });

  const { data: session } = useQuery<Session>({
    queryKey: ['session'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3000/api/auth/sessionInfos');
      return data;
    },
  });

  const { data } = useQuery({
    queryKey: ['favorite'],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3001/user/${userId}`);
        console.log(data.favoriteImmobile)
        setFavoriteList(data.favoriteImmobile)
      return data;
    },
  })
  
  useMemo(async () => {
    if (session?.user) {
      const SIGN_IN_URL = 'http://localhost:3001/user/sign-in';
      const SIGN_UP_URL = 'http://localhost:3001/user/sign-up';

      const userData = {
        name: session.user.name,
        email: session.user.email,
        updatedAt: session.user.updated_at,
      };

      axios.post(SIGN_IN_URL, { email: session.user.email })
        .then((response) => {
          localStorage.setItem('userId', response.data.userId);
          localStorage.setItem('token', response.data.token);
        })
        .catch(() => {
          axios.post(SIGN_UP_URL, userData)
            .then((response) => {
              localStorage.setItem('userId', response.data.userId);
              localStorage.setItem('token', response.data.token);
            })
            .catch((e) => {
              console.error(e);
            });
        });
    }
  }, [session]);

  const states = useMemo(() => ({
    immobiles, setImmobiles,
    search, setSearch,
    searchedImmobiles, setSearchedImmobiles,
    currPage, setCurrPage,
    toggleOpenFilter, setToggleOpenFilter,
    propertyCaracteristics, setPropertyCaracteristics,
    favoriteList, setFavoriteList
  }), [immobiles, searchedImmobiles, search, currPage, toggleOpenFilter, propertyCaracteristics, favoriteList]);
  return (
    <globalContext.Provider value={ states }>
      { children }
    </globalContext.Provider>
  );
}
import { Dispatch, SetStateAction } from 'react';

export type TUserData = {
  user_id?: string,
  name?: string,
  email?: string,
  created_at?: string,
  updated_at?: string
}

export type TAddress = {
  id: string,
  street: string,
  city: string,
  state: string, 
  postalCode: string,
  number: string, 
  apto: string,
  complement: string,
  createdAt: Date, 
  updatedAt: Date,
}

export type TType = {
  id: string,
  type: string,
}

export type TImmobile = {
  id: string,
  ownerId: string,
  tenantId?: string,
  addressId: string,
  price: number,
  bedroomsQty: number,
  bathroomsQty: number,
  parkingQty: number,
  sqrFoota: number,
  petFriendly: boolean,
  createdAt: Date,
  updatedAt: Date
  typeId: string,
  address?: TAddress,
  images?: string[]
  type?: TType,
}

export type TRankedImmobile = {
  immobileId: string,
  immobile: TImmobile,
  rank: number,
};

export type TConext = {
  immobiles: TImmobile[],
  setImmobiles: Dispatch<SetStateAction<TImmobile[]>>
  search: string,
  setSearch: Dispatch<SetStateAction<string>>,
  searchedImmobiles: TRankedImmobile[],
  setSearchedImmobiles: Dispatch<SetStateAction<TRankedImmobile[]>>
}

export type DefaultDiacriticalMapItem = {
  base: string;
  diacriticals: string;
}
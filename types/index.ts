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
  burgh: string,
  state: string, 
  postalCode: string,
  number: string, 
  apto: string,
  complement: string,
  createdAt?: Date, 
  updatedAt?: Date,
}

export type TType = {
  id: string,
  type: string,
}

export type TPhoto = {
  id?: string,
  url: string,
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
  sqrFootage: number,
  petFriendly: boolean,
  createdAt?: Date,
  updatedAt?: Date
  typeId: string,
  description: string,
  address?: TAddress,
  images?: string[]
  type?: TType,
  photos?: { photo: TPhoto }[]
}

export type  TFavorite = {
  userId : string,
  immobileId: string,
  immobile: TImmobile
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
  currPage: TRoute,
  setCurrPage: Dispatch<SetStateAction<TRoute>>
  toggleOpenFilter: boolean,
  setToggleOpenFilter: Dispatch<SetStateAction<boolean>>
  propertyCaracteristics: TFiltredPropertys
  setPropertyCaracteristics: Dispatch<SetStateAction<TFiltredPropertys>>
}

export type TRoute = 'home' | 'saved' | 'advertise' | 'settings'

export type TFiltredPropertys = {
  immobileType: string
  minPrice: number
  maxPrice: number
  minArea: number
  maxArea: number
  bedroomsQty: number | string
  bathroomsQty: number | string
  parkingQty: number | string
  petFriendly: boolean | string
  isFurnished: boolean | string
}

export type TDefaultDiacriticalMapItem = {
  base: string;
  diacriticals: string;
}

export type TCard = {
  immobile: TImmobile,
}

export type TUser = {
  favoriteImmobile: TFavorite[]
}


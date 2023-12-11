import { TConext } from '@/types';
import { createContext } from 'react';

const globalContext =  createContext({} as TConext);

export default globalContext;

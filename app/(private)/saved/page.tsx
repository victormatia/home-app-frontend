import { SavedPageLogin } from '@/components/SavedPageLogin';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Salvos',
};

export default function Saved() {
  return (
    <div className='h-screen'>
      <SavedPageLogin /> 
    </div> 
  );
}
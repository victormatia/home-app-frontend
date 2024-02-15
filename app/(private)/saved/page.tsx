import { SavedPageLogin } from '@/components/SavedPageLogin';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Salvos',
};

export default function Saved() {
  return (
    <div className='h-screen min-[700px]:pl-20'>
      <SavedPageLogin /> 
    </div> 
  );
}
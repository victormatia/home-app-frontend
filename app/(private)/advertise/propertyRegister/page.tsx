import { Metadata } from 'next';
import { RegisterForm } from '@/components/PropertyRegister/RegistrationForm';
import { Button } from '@/components/Button';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home | Registrar',
};
export default function PropertyRegister() {

  return (
    <section className="w-full bg-[#F5F5F5] min-[700px]:h-screen min-[700px]:overflow-y-scroll">
      <div 
        className='p-2 '
      >
        <div className='min-[1000px]:mx-auto min-[1000px]:w-[1000px]'>
          <Button
            variant='ghost'
            className='mb-4 py-2 text-2xl text-zinc-600 hover:opacity-70'
          >
            <Link href='http://localhost:3000/advertise' >
              <FaArrowLeftLong />
            </Link>
          </Button>
        </div>
        <RegisterForm/>
      </div>
    </section>
  );
}
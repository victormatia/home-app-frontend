import { Metadata } from 'next';
import { RegisterForm } from '@/components/PropertyRegister/RegistrationForm';
import { Button } from '@/components/Button';
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home | Registrar',
};
export default function PropertyRegister() {

  return (
    <section className="bg-[#F5F5F5]">
      <div className='p-2'>
        <Button
          variant='ghost'
          className='text-2xl text-zinc-600 hover:opacity-70 py-2 mb-4'
        >
          <Link href='http://localhost:3000/advertise' >
            <FaArrowLeftLong />
          </Link>
        </Button>
        <RegisterForm/>
      </div>
    </section>
  );
}
import { Metadata } from 'next';
import { RegisterForm } from '@/components/PropertyRegister/RegistrationForm';

export const metadata: Metadata = {
  title: 'Home | Registrar',
};
export default function PropertyRegister() {
  return (
    <section className="bg-[#F5F5F5]">
      <div>
        <RegisterForm/>
      </div>
    </section>
  );
}
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Perfil',
};

export default function Profile() {
  return (
    <section className="text-center">
      <h1>Profile</h1>
    </section>
  );
}
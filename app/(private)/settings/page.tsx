import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Configurações',
};

export default function Settings() {
  return (
    <section className="text-center">
      <h1>Settings</h1>
    </section>
  );
}
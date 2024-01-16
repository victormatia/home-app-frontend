import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Salvos',
};

export default function Saved() {
  return (
    <section className="text-center">
      <h1>Saved</h1>
    </section>
  );
}
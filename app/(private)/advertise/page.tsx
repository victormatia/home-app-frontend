import AdvertiseActions from '@/components/AdvertiseActions';
import { Button } from '@/components/Button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home | Anúnciar',
};

export default function Advertise() {
  return (
    <main className="text-center bg-grayBase h-screen">
      <h1>Advertise</h1>
      <AdvertiseActions />
    </main>
  );
}

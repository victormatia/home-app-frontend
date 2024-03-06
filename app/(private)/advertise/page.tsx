import AdvertiseActions from '@/components/AdvertiseActions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Anúnciar',
};

export default function Advertise() {
  return (
    <main className="bg-grayBase h-screen text-center">
      <AdvertiseActions />
    </main>
  );
}

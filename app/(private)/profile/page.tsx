

import { Metadata } from 'next';
import ProfileImage from '@/components/Profile/ProfileImage';
import DeleteAccountButton from '@/components/Profile/DeleteAccountButton';
import ProfileBox from '@/components/Profile/ProfileBox';
import PropertyCarousel from '@/components/Profile/PropertyCarousel';
import RentCarousel from '@/components/Profile/RentCarousel';

export const metadata: Metadata = {
  title: 'Home | Perfil',
};

export default function Profile() {
  return (
    <section className="text-center flex-col pb-20 bg-[#F5F5F5]">
      <div className='w-full h-[125px] bg-gradientBlue'>
      </div>
          <ProfileImage/>
      <div className='mt-20 px-5'>
        <ProfileBox/>
      </div>
      <RentCarousel/>
      <PropertyCarousel/>
      <DeleteAccountButton/>
    </section>
  );
}
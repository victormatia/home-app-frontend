

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
    <section className="text-center flex-col pb-20 bg-[#F5F5F5] h-screen md:ml-20 overflow-y-scroll">
      <div className='w-full h-[125px] md:h-[200px] bg-gradientBlue'/>
      <div className='lg:w-[1000px] mx-auto'>
        <ProfileImage/>
        <div className='mt-5 lg:mt-8 px-5 md:flex md:justify-normal'>
          <ProfileBox/>
          <div className='md:block hidden'>
            <DeleteAccountButton/>
          </div>
        </div>
        <RentCarousel/>
        <PropertyCarousel/>
        <div className='md:hidden'>
          <DeleteAccountButton/>
        </div>
      </div>
    </section>
  );
}
import { Metadata } from 'next';
import ProfileImage from '@/components/Profile/ProfileImage';
import DeleteAccountButton from '@/components/Profile/DeleteAccountButton';
import ProfileBox from '@/components/Profile/ProfileBox';
import PropertyCarousel from '@/components/Profile/PropertyCarousel';
import RentCarousel from '@/components/Profile/RentCarousel';

export const metadata: Metadata = {
  title: 'Home | Perfil',
};

export default async function Profile() {
  return (
    <section className="h-screen flex-col overflow-y-scroll bg-[#F5F5F5] pb-20 text-center">
      <div className='bg-gradientBlue h-[125px] w-full min-[700px]:h-[200px]'/>
      <div className='mx-auto lg:w-[1000px]'>
        <ProfileImage/>
        <div className='mt-5 px-5 min-[700px]:flex min-[700px]:justify-normal min-[700px]:pr-0 lg:mt-8'>
          <ProfileBox/>
          <div className='hidden min-[700px]:flex min-[700px]:w-full min-[700px]:justify-end'>
            <DeleteAccountButton/>
          </div>
        </div>
        <RentCarousel/>
        <PropertyCarousel/>
        <div className='min-[700px]:hidden'>
          <DeleteAccountButton/>
        </div>
      </div>
    </section>
  );
}
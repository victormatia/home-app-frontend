import SkeletonCards  from '@/components/SkeletonCards';
import { BsFillGridFill } from 'react-icons/bs';
import { PiListFill } from 'react-icons/pi';

const cardListMock = Array.from({ length: 8 }, (_, i) => +i);

function HomeLoading(){
  return(
    <main className='bg-grayBase flex h-[calc(100vh-80px)] w-full flex-col items-center gap-4
      min-[700px]:flex-row min-[700px]:items-stretch min-[700px]:gap-0'>
      <div className='flex basis-[85%] flex-col max-[1466px]:basis-full'>
        <div className='flex w-full justify-between border border-x-0
         border-[#C1C1C1] py-3  pl-2 max-[700px]:hidden'>
          <div 
            className='border-t-primaryBlue h-6 w-6 animate-spin rounded-full 
              border-2 border-[#c3c3c373]'
          />
          <div className='flex  items-center gap-2 pr-2 text-2xl text-[#424242]'>
            <PiListFill className='transition-all hover:text-zinc-500' />
            <BsFillGridFill className='transition-all hover:text-zinc-500' />
          </div>
        </div>
        <div className="h-full overflow-hidden p-2 min-[700px]:text-clip">
          <ul className='flex w-full flex-col gap-4 overflow-hidden pb-20 
            min-[700px]:h-full min-[700px]:flex-row min-[700px]:flex-wrap 
            min-[700px]:gap-6 min-[700px]:overflow-scroll 
            min-[700px]:overflow-x-hidden min-[700px]:p-2
            '>
            { cardListMock.map((i) => (<SkeletonCards key={i} />)) }
          </ul>
        
        </div>
      </div>
      <div 
        className='flex min-w-[275px] basis-[15%] flex-col items-center
        border border-[#C1C1C1] max-[1466px]:hidden'
      >
        <p className='text-grayLegend w-full border-b border-[#C1C1C1]
          p-3 text-center font-medium'>
          Filtro
        </p>
        <div className="flex h-screen items-center justify-center">
          <div 
            className='border-t-primaryBlue h-6 w-6 animate-spin rounded-full 
              border-2 border-[#c3c3c373]'
          />
        </div>
      
      </div>
    </main>
  );
}

export default HomeLoading;

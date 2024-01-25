import { BsFillGridFill } from "react-icons/bs";
import { PiListFill } from "react-icons/pi";

export default function HomeLoading(){
  return(
    <main className='flex flex-col gap-4 items-center w-full h-[calc(100vh-80px)] bg-grayBase
    min-[700px]:pl-20 min-[700px]:flex-row min-[700px]:gap-0 min-[700px]:items-stretch'>
      <div className='basis-[85%] max-[1466px]:basis-full flex flex-col'>
        <div className='max-[700px]:hidden border border-x-0 border-[#C1C1C1] w-full flex justify-between  pl-2 py-3'>
        <div 
              className='h-6 w-6 border-2 border-[#c3c3c373] rounded-full 
              border-t-primaryBlue animate-spin'
            />
          <div className='flex  items-center gap-2 pr-2 text-[#424242] text-2xl'>
            <PiListFill className='hover:text-zinc-500 cursor-pointer transition-all' />
            <BsFillGridFill className='hover:text-zinc-500 cursor-pointer transition-all' />
          </div>
        </div>
        <div className="h-full overflow-hidden min-[700px]:overflow-clip overflow-x-hidden p-2">
          <ul className='flex flex-col pb-20 gap-4 w-full overflow-hidden 
            min-[700px]:p-2 min-[700px]:flex-wrap min-[700px]:flex-row 
            min-[700px]:h-full min-[700px]:gap-6 
            min-[700px]:overflow-scroll min-[700px]:overflow-x-hidden
            '>
            <div className="bg-zinc-600/80 animate-pulse rounded-md w-[360px] h-[345px]"></div>
            <div className="bg-zinc-600/80 animate-pulse rounded-md w-[360px] h-[345px]"></div>
            <div className="bg-zinc-600/80 animate-pulse rounded-md w-[360px] h-[345px]"></div>
            <div className="bg-zinc-600/80 animate-pulse rounded-md w-[360px] h-[345px]"></div>
            <div className="bg-zinc-600/80 animate-pulse rounded-md w-[360px] h-[345px]"></div>
            <div className="bg-zinc-600/80 animate-pulse rounded-md w-[360px] h-[345px]"></div>
          </ul>
        
        </div>
      </div>
        <div 
          className='basis-[15%] border border-[#C1C1C1] flex flex-col items-center min-w-[275px]
          max-[1466px]:hidden'
        >
          <p className='w-full border-[#C1C1C1] border-b p-3 text-center font-medium text-grayLegend'>Filtro</p>
          <div className="flex items-center justify-center h-screen">
          <div 
              className='h-6 w-6 border-2 border-[#c3c3c373] rounded-full 
              border-t-primaryBlue animate-spin'
            />
          </div>
      
        </div>
    </main>
  )
}
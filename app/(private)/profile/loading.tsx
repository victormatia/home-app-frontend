export default function ProfileLoading() {
  return (

    <div className="text-center flex-col pb-20 bg-[#F5F5F5] h-screen min-[700px]:ml-20 overflow-y-scroll">
      <div className='w-full h-[125px] min-[700px]:h-[200px] bg-gradientBlue'/>
        <div className='lg:w-[1000px] mx-auto'> 
        <div className="flex items-center justify-center h-screen">
          <div 
            className='h-12 w-12 border-4 border-[#c3c3c373] rounded-full 
            border-t-primaryBlue animate-spin'
          />
          </div> 
        </div>
      </div>
  )
}

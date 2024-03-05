export default function ProfileLoading() {
  return (

    <div className="h-screen flex-col overflow-y-scroll bg-[#F5F5F5] pb-20 text-center min-[700px]:ml-20">
      <div className='bg-gradientBlue h-[125px] w-full min-[700px]:h-[200px]'/>
      <div className='mx-auto lg:w-[1000px]'> 
        <div className="flex h-screen items-center justify-center">
          <div 
            className='border-t-primaryBlue h-12 w-12 animate-spin rounded-full 
            border-4 border-[#c3c3c373]'
          />
        </div> 
      </div>
    </div>
  );
}

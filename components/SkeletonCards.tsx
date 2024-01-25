export function SkeletonCards(){
  return(
    <div className="bg-white flex flex-col rounded-md shadow-lg w-[360px] h-[345px]">
      <div className=" m-1 w-[344px] h-[222px] rounded-md bg-zinc-400 animate-pulse"/>
        <div className="flex justify-between mt-2 mx-2">
          <div className="w-40 h-5 bg-zinc-400 animate-pulse rounded-md " />
          <div className="w-4 h-4 bg-zinc-400 animate-pulse rounded-md " />
        </div>
        <div className="w-52 h-8 bg-zinc-400 animate-pulse rounded-md mt-2 ml-2"/>
        <div className="flex justify-between items-end mx-2 mb-2">
          <div className="h-6 w-52 bg-zinc-400 animate-pulse rounded-md"/>
          <div className="w-32 h-10 bg-zinc-400 animate-pulse rounded-md"/>
        </div>
    </div>
  )
}
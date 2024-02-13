function SkeletonCards(){
  return(
    <div className="flex h-[345px] w-[360px] flex-col
      items-center justify-center gap-2 rounded-md bg-white p-2 shadow-lg"
    >
      <div className="h-[222px] w-full animate-pulse rounded-md bg-zinc-300"/> 
      <div className="flex w-full justify-between">
        <div className="h-5 w-40 animate-pulse rounded-md bg-zinc-300 " />
        <div className="h-4 w-4 animate-pulse rounded-sm bg-zinc-300 " />
      </div>
      <div className="h-8 w-52 animate-pulse self-start rounded-md bg-zinc-300"/>
      <div className="flex w-full items-end justify-between">
        <div className="h-6 w-32 animate-pulse rounded-md bg-zinc-300"/>
        <div className="h-10 w-32 animate-pulse rounded-md bg-zinc-300"/>
      </div>
    </div>
  );
}

export default SkeletonCards;

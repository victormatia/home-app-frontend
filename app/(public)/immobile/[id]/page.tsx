'use client'

import { Button } from "@/components/Button"
import { CaracteristicList } from "@/components/CaracteristcList"
import Map from "@/components/Map"
import Slider from "@/components/Slider"
import { TImmobile } from "@/types"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface ImmobileProps {
  params: {
    id: string
  }
}


export default function Immobile({ params: { id }  } : ImmobileProps ){
  const { data: immobile } = useQuery<TImmobile>({
    queryKey: ['immobile'],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3001/immobile/id:${id}`);
      console.log(data)
      return data;
    },
  });

  return(
    <main className="w-full overflow-x-hidden">
      <div className="min-[700px]:left-20 left-0 relative w-full overflow-hidden">
            <Slider immobile={immobile!}/>  
      </div>
      <div className="w-full mt-2 flex flex-col gap-2 pb-20 min-[700px]:pl-[400px] min-[700px]:pr-[340px]">
        <div className="pl-3 pr-10">
          <h2 className="text-[#ACACAC] text-xs">Descrição</h2>
          <p className="text-base font-medium">{ immobile?.description }</p>
        </div>
        <div className="min-[700px]:grid min-[700px]:grid-cols-2 items-centerz'">
          <CaracteristicList bathroomsQty={immobile?.bathroomsQty} parkingQty={immobile?.parkingQty} bedroomsQty={immobile?.bedroomsQty} sqrFootage={immobile?.sqrFootage} petFriendly={immobile?.petFriendly} />
           <Map />
        </div>
        <div className="mt-8 flex flex-col gap-4 px-4 min-[700px]:grid min-[700px]:grid-cols-2 min-[700px]:gap-32">
          <Button 
            className="w-full py-3"
            variant="secondary"
          >
            Conversar com o propietário
          </Button>

          <Button 
            className="w-full py-3"
          >
            Agendar visita
          </Button>
        </div>
      </div>


    </main>
  )
}
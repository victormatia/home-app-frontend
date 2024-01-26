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
      return data;
    },
  });

  return(
    <main className="w-full overflow-x-hidden ">
      <div className="min-[700px]:left-20 left-0 relative w-full overflow-hidden ">
        <Slider immobile={immobile!}/>
      </div>
        <div className="text-right w-full max-w-[412px] bg-gradientBlack pr-2 absolute right-0 top-[292px] min-[700px]:hidden">
          <p className="text-[#ACACAC]">Aluguel</p> 
          <p className="text-white">R$ {immobile?.price}</p>
        </div>  
      <div className="w-full mt-2 mx-auto flex flex-col gap-2 pb-20 min-[700px]:pl-[80px]  min-[700px]:mt-7 min-[700px]:w-[60%] px-3">
        <div>
          <h2 className="text-[#ACACAC] text-base min-[700px]:text-xl font-medium">Descrição</h2>
          <p className="text-base font-medium  min-[700px]:text-xl">{ immobile?.description }</p>
        </div>
        <div className="flex flex-col gap-3 min-[700px]:flex-row  min-[700px]:mt-5">
          <CaracteristicList
            bathroomsQty={immobile?.bathroomsQty}
            parkingQty={immobile?.parkingQty}
            bedroomsQty={immobile?.bedroomsQty}
            sqrFootage={immobile?.sqrFootage}
            petFriendly={immobile?.petFriendly}
          />
          <Map />
        </div>
        <div className="mt-8 flex flex-col gap-4 min-[700px]:flex-row  min-[700px]:gap-48 min-[700px]:px-0">
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
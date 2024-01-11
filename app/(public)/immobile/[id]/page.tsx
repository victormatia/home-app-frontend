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

// const {} = useQuery({
//   queryKey: ['immobile'],
//   queryFn: async () => {
//     const { data } = await axios.get(`http://localhost:3001/immobile/${id}`);

//     return data;
//   },
// });

  async function getImmobile(id : string): Promise<TImmobile> {
   const response = await axios.get(`http://localhost:3001/immobile/id:000`)

    const immobile = await response.data

    return immobile
  }

export default async function Immobile({params} : ImmobileProps ){
  const immobile = await getImmobile(params.id)

  return(
    <main className="w-full overflow-x-hidden">
      <div className="min-[700px]:left-20 left-0 relative w-full overflow-hidden">
        <Slider />
      </div>
      <div className="w-full mt-2 flex flex-col gap-2 pb-20">
        <div className="pl-3 pr-10">
          <h2 className="text-[#ACACAC] text-xs">Descrição</h2>
          <p className="text-base font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fugiat error ab voluptatibus, iste impedit fuga earum facere, optio nemo repellendus illo labore ipsam minus aliquid deleniti similique? Odit, autem!</p>
          <CaracteristicList />
        </div>
           <Map />
        <div className="mt-8 flex flex-col gap-4 px-4">
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
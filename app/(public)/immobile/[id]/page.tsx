'use client'

import { Button } from "@/components/Button"
import { CaracteristicList } from "@/components/CaracteristcList"
import Map from "@/components/Map"
import { SaveButton } from "@/components/SaveButton"
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
    <main className="w-full overflow-x-hidden">
      <div className="relative w-full overflow-hidden mb-2">
        <Slider immobile={immobile!}/>
      </div>
        {/* <div className="text-right w-full font-medium bg-gradientTransparentToBlue text-white pr-2 py-2 relative -top-[72px] text-lg right-0">
          <p>Aluguel</p> 
          <p>R$ {immobile?.price}</p>
        </div>   */}
      <div className="mx-auto flex flex-col gap-2 pb-20 min-[700px]:w-[60%] h-full">
        <div>
          <div className="flex justify-between">
            <h2 className="text-[#ACACAC] text-base min-[700px]:text-xl font-normal">Descrição</h2>
            <SaveButton />
          </div>
          <p className="text-base font-medium w-[90%] min-[700px]:w-full  min-[700px]:text-xl">{ immobile?.description }</p>
          <h2 className="mt-4 text-[#ACACAC] text-base min-[700px]:text-xl font-medium">Alugar por</h2>
          <div className="flex items-center gap-2">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABtElEQVR4nO2Vv0scURDHN5wQkYAQElSuiWBnl0AKSeOfYHFgo9bRRgub4B9wiKlCihSXqy6B73cexy24YOORNAG9RoQDm6QxhYYgiAdiuGx4ZBaG9Y7dQhTFgWnm1+fNvHm7QXAv1yUiEotI8+YA8j8grWci0hKR1SiKHqZzABRIrpDcMfEVAMW8gDhRkl+azeZAKueT8Z+b+EMAo/0Ac+aERZIbiQ/AvPG91MJ/AczGcfyA5CTJn2p/mwnwoolt9X00gEUtdGDjSb7R2L1cAC8iEmmxmrG91vhf1Wp1MMiSfgAAwyJyrL61xF6v15+R7Ch4E8BELgDJdyRLqksk99X32zk3ZnNILojIhfq7JEMRmc7qoNcGtQG86JXnnHuuhbsmp5LeONvBNskPqh1vc84tZ40YwDjJ936r0uPsewd+1RR6BOBRFkTrlJO3kAloNBoj+jovnYjkaa+lcM7N6KE6mQAttK4JJwAem/gttX8Lw3BIx1QQkc9ap5ULAOCp6aJs7K9I/klG6IEkf5i7LOUC2Ln6tu03huSUiOyai/X63X86gquUWq32RIt/DW7tD+fuyj+RvDqW7+XkEAAAAABJRU5ErkJggg=="/>
            <p className="mt-2 text-base font-medium w-[90%] min-[700px]:w-full  min-[700px]:text-xl">{ immobile?.price }</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 min-[1200px]:flex-row  min-[700px]:mt-5">
          <CaracteristicList
            bathroomsQty={immobile?.bathroomsQty}
            parkingQty={immobile?.parkingQty}
            bedroomsQty={immobile?.bedroomsQty}
            sqrFootage={immobile?.sqrFootage}
            petFriendly={immobile?.petFriendly}
          />
          <Map />
        </div>
        <div className="
        mt-8 flex flex-col gap-4 min-[700px]:flex-row  min-[700px]:gap-5 min-[1100px]:gap-48">
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
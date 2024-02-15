'use client';

import { Button } from '@/components/Button';
import { CaracteristicList } from '@/components/ImmobilePage/CaracteristcList';
import Slider from '@/components/ImmobilePage/Slider';
import Map from '@/components/ImmobilePage/Map';
import { SaveButton } from '@/components/SaveButton';

import globalContext from '@/context/context';
import { TImmobile } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useEffect } from 'react';

interface ImmobileProps {
  params: {
    id: string
  }
}

export default function Immobile({ params: { id } }: ImmobileProps) {
  const { setCurrPage } = useContext(globalContext);

  useEffect(() => setCurrPage('') , []);

  const { data: immobile } = useQuery<TImmobile>({
    queryKey: ['immobile'],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3001/immobile/id:${id}`);
      return data;
    },
  });

  return (
    <main className="w-full overflow-x-hidden">
      <div className="relative mb-2 w-full overflow-hidden">
        <Slider immobile={immobile!} />
      </div>
      <div className="mx-auto mt-4 flex h-full flex-col gap-2 px-2 pb-20 min-[700px]:w-[60%]">
        <div>
          <div className="flex justify-between">
            <h2 className="text-base font-medium text-[#ACACAC] min-[700px]:text-xl">Descrição</h2>
            <SaveButton immobileId={immobile?.id}/>
          </div>
          <p
            className="w-[90%] text-base font-medium min-[700px]:w-full  min-[700px]:text-xl">
            {immobile?.description}
          </p>
          <h2 className="mt-4 text-base font-medium text-[#ACACAC] min-[700px]:text-xl">Alugar por</h2>
          <p
            className="mt-2 w-[90%] text-base font-medium min-[700px]:w-full min-[700px]:text-xl"
          >
            <span className="text-primaryBlue mr-2">R$</span>
            {Number(immobile?.price).toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col gap-3 min-[700px]:mt-5  min-[1200px]:flex-row">
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
  );
}
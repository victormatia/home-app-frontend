import { IoHomeOutline } from "react-icons/io5";
import { IoBedOutline } from 'react-icons/io5';
import { FaCar, FaShower } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';

export interface CaracteristListProps{
  bathroomsQty: number | undefined,
  bedroomsQty: number | undefined,
  parkingQty: number | undefined,
  sqrFootage: number | undefined,
  petFriendly: boolean | undefined
}

export function CaracteristicList({bathroomsQty, bedroomsQty, parkingQty, sqrFootage, petFriendly} : CaracteristListProps) {
  return(
    <div className="basis-[50%]">
      <h2 className="text-[#ACACAC] text-base font-medium  min-[700px]:text-xl">Caracteristicas</h2>
      
      <ul className="mt-2 flex flex-wrap text-sm text-grayIcon gap-3">
        <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center ">
            <IoHomeOutline/>
            <p>Área de {sqrFootage} m²</p>
        </li>
        {bedroomsQty === 0 ?
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center">
            <IoBedOutline/>
            <p>sem quartos</p>
          </li>:
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center">
            <IoBedOutline/>
            <p>{bedroomsQty} quartos</p>
          </li>
        }
        {bathroomsQty === 0 ?
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center">
            <FaShower/>
            <p>sem banheiros</p>
          </li>:
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center">
            <FaShower/>
            <p>{bathroomsQty} banheiros</p>
          </li>
        }

        {parkingQty === 0 ?
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center">
            <FaCar/>
            <p>sem vagas</p>
          </li>:
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center">
            <FaCar/>
            <p>{parkingQty} vagas</p>
          </li>
        }
        {petFriendly ?
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center">
            <MdPets/>
            <p>Aceita pet</p>
          </li>: null
        }
      </ul>
    </div>
   
  )
}
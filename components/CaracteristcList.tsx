import { IoHomeOutline } from "react-icons/io5";
import { IoBedOutline } from 'react-icons/io5';
import { FaCar, FaShower } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';

interface CaracteristListProps{
  bathroomsQty: number | undefined,
  bedroomsQty: number | undefined,
  parkingQty: number | undefined,
  sqrFootage: number | undefined,
  petFriendly: boolean | undefined
}

export function CaracteristicList({bathroomsQty, bedroomsQty, parkingQty, sqrFootage, petFriendly} : CaracteristListProps) {
  return(
    <div className="pl-3 pr-10">
      <h2 className="text-[#ACACAC] text-xs">Caracteristicas</h2>
      
      <ul className="mt-2 grid grid-cols-3 gap-3">
        <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <IoHomeOutline/>
            <p>Área de {sqrFootage} m²</p>
        </li>
        {bedroomsQty === 0 ?
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <IoBedOutline/>
            <p>sem quartos</p>
          </li>:
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <IoBedOutline/>
            <p>{bedroomsQty} quartos</p>
          </li>
        }
        {bathroomsQty === 0 ?
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <FaShower/>
            <p>sem banheiros</p>
          </li>:
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <FaShower/>
            <p>{bathroomsQty} banheiros</p>
          </li>
        }

        {parkingQty === 0 ?
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <FaCar/>
            <p>sem vagas</p>
          </li>:
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <FaCar/>
            <p>{parkingQty} vagas</p>
          </li>
        }
        {petFriendly ?
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <MdPets/>
            <p>Aceita pet</p>
          </li>: null
        }
      </ul>
    </div>
   
  )
}
import { IoHomeOutline } from "react-icons/io5";
import { IoBedOutline } from 'react-icons/io5';
import { FaCar, FaShower } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';

const caracteristics = {sqrFootage: 40, bedrooms: 1, bathrooms: 3, petFrindly: true, parking: 0}

export function CaracteristicList(props: any) {
  return(
    <>
      <h2 className="text-[#ACACAC] text-xs">Caracteristicas</h2>
      
      <ul className="grid grid-cols-3 gap-3">
        <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <IoHomeOutline/>
            <p>Área de {caracteristics.sqrFootage} m²</p>
        </li>
        {caracteristics.bedrooms === 0 ?
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <IoBedOutline/>
            <p>sem quartos</p>
          </li>:
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <IoBedOutline/>
            <p>{caracteristics.bedrooms} quartos</p>
          </li>
        }
        {caracteristics.bathrooms === 0 ?
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <FaShower/>
            <p>sem banheiros</p>
          </li>:
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <FaShower/>
            <p>{caracteristics.bathrooms} banheiros</p>
          </li>
        }

        {caracteristics.parking === 0 ?
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <FaCar/>
            <p>sem vagas</p>
          </li>:
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <FaCar/>
            <p>{caracteristics.parking} vagas</p>
          </li>
        }
        {caracteristics.petFrindly ?
          <li className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <MdPets/>
            <p>Aceita pet</p>
          </li>: null
        }
      </ul>
    </>
   
  )
}
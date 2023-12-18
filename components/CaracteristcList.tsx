import { IoHomeOutline } from "react-icons/io5";
import { IoBedOutline } from 'react-icons/io5';
import { FaCar, FaShower } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';

const caracteristics = {sqrFootage: 40, bedrooms: 1, bathrooms: 3, petFrindly: true, parking: 0}

export function CaracteristicList(props: any) {
  return(
    <div>
      <h2 className="text-[#ACACAC]">Caracteristicas</h2>
      
      <div className="grid grid-cols-3 gap-3">
        <div className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <IoHomeOutline/>
            <p>Área de {caracteristics.sqrFootage} m²</p>
        </div>
        {caracteristics.bedrooms === 0 ?
          <div className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <IoBedOutline/>
            <p>sem quartos</p>
          </div>:
          <div className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <IoBedOutline/>
            <p>{caracteristics.bedrooms} quartos</p>
          </div>
        }
        {caracteristics.bathrooms === 0 ?
          <div className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <FaShower/>
            <p>sem banheiros</p>
          </div>:
          <div className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <FaShower/>
            <p>{caracteristics.bathrooms} banheiros</p>
          </div>
        }

        {caracteristics.parking === 0 ?
          <div className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <FaCar/>
            <p>sem vagas</p>
          </div>:
          <div className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <FaCar/>
            <p>{caracteristics.parking} vagas</p>
          </div>
        }
        {caracteristics.petFrindly ?
          <div className="border-grayIcon rounded-md border p-2 flex gap-2 items-center justify-center text-[10px] text-grayIcon">
            <MdPets/>
            <p>Aceita pet</p>
          </div>: null
        }

    

      </div>
    </div>
  )
}
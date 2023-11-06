import * as Checkbox from '@radix-ui/react-checkbox';
import { InputControl, InputPrefix, InputRoot } from '../Input';
import { QuantitySelector } from './MobileFilter/QuantitySelector';
import { SelectComponent } from './MobileFilter/Select';
import { Check } from 'phosphor-react';
import { useContext, useMemo, useState } from 'react';
import globalContext from '@/context/context';
import { TImmobile } from '@/types';

export function FilterForm(){
  const { 
    setToggleOpenFilter, 
    searchedImmobiles, 
    setSearchedImmobiles, 
    immobiles, 
    setPropertyCaracteristics, 
    propertyCaracteristics, 
  } = useContext(globalContext);
  const [immobiliType, setImmobileType] = useState('todos');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(9999);
  const [bathroomsQuantity, setBathroomsQuantity] = useState('1');
  const [bedroomsQuantity, setBedroomsQuantity] = useState('1');
  const [parkingQantity, setParkingQuantity] = useState('1');
  const [isPetFrendly, setIsPetFrendly] = useState(false);
  const [isFurnished, setIsFurnished] = useState(false);

  const propetyKeys = Object.keys(propertyCaracteristics);
  useMemo(
    () => { 
      const bla = propetyKeys.reduce((acc, key) => {
        console.log(acc);
        switch(key){
        case 'immobiliType':
          return propertyCaracteristics[key] === 'todos' ? acc :
            acc = (searchedImmobiles.filter(({ immobile }) => 
              immobile.type?.type === propertyCaracteristics[key]));
        // case 'minPrice':
        //   acc = (searchedImmobiles.filter(({ immobile }) => 
        //     immobile.price >= propertyCaracteristics[key]));
        // return acc;
        default:
          return acc;
        }
      }
      , immobiles.map((i: TImmobile) => ({ immobileId: i.id,  immobile: i, rank: 0 })));

      setSearchedImmobiles(bla);
    }, [propertyCaracteristics]
  );

  function handleApplyFilter(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    setPropertyCaracteristics({
      bathrooms: bathroomsQuantity,
      bedrooms: bedroomsQuantity,
      parking: parkingQantity,
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      immobiliType,
      isPetFrendly ,
      isFurnished,
    }
    );

    setToggleOpenFilter(false);
  };

  return(
    <form onSubmit={handleApplyFilter} className='w-full flex flex-col gap-4 p-4 min-[700px]:overflow-y-scroll'>
      <div className='flex flex-col '>
        <label htmlFor="immoblie-type" className='text-info font-semibold mb-2'>
                   Tipo de imóvel
        </label>
        <SelectComponent immobliType={setImmobileType}/>
      </div>

      <div className='flex flex-col '>
        <label htmlFor="price-range" className='text-info font-semibold mb-2'>
                   Preço
        </label>
        <div className=' grid grid-cols-2 gap-3 pr-10'>
          <label htmlFor="min-price" className='flex flex-col font-semibold text-xs'>
                    Mínimo
            <InputRoot>
              <InputPrefix className='font-semibold text-xs'>
                        R$
              </InputPrefix>
              <InputControl
                type="number" 
                name="min-price" 
                id="min-price"
                min="0"
                max="999999"
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </InputRoot>
          </label>

          <label htmlFor="max-price" className='flex flex-col font-semibold text-xs'>
                    Máximo
            <InputRoot>
              <InputPrefix className='font-semibold text-xs'>
                        R$
              </InputPrefix>
              <InputControl
                type='number' 
                name="max-price" 
                id="max-price"
                min="0"
                max="999999"
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </InputRoot>
          </label>
        </div>
      </div>

      <div className='flex flex-col '>
        <label htmlFor="bathrooms" className='text-info font-semibold mb-2'>
                  Banheiros
          <QuantitySelector quantitySelect={setBathroomsQuantity}/>
        </label>
      </div>

      <div className='flex flex-col'>
        <label htmlFor="bedrooms" className='text-info font-semibold mb-2'>
                  Quartos
          <QuantitySelector quantitySelect={setBedroomsQuantity}/>
        </label>
      </div>

      <div className='flex flex-col mb-4'>
        <label htmlFor="parking" className='text-info font-semibold mb-2'>
                  Vagas
          <QuantitySelector quantitySelect={setParkingQuantity}/>
        </label>
      </div>

      <div className='flex flex-col'>
        <label htmlFor="area-range" className='text-info font-semibold mb-2'>
                   Área do imóvel
        </label>
        <div className=' grid grid-cols-2 gap-3 pr-10'>
          <label htmlFor="min-area" className='flex flex-col font-semibold text-xs'>
                    Mínimo
            <InputRoot>
              <InputControl
                type="number" 
                name="min-area" 
                id="min-area"
                min="0"
                max="9999"
                placeholder='0 m²'
                onChange={(e) => setMinArea(e.target.value)}
              />
            </InputRoot>
          </label>

          <label htmlFor="max-area" className='flex flex-col font-semibold text-xs'>
                    Máximo
            <InputRoot>
              <InputControl
                type='number' 
                name="max-area" 
                id="max-area"
                min="0"
                max="9999"
                placeholder='9999 m²'
                onChange={(e) => setMaxArea(e.target.value)}
              />
            </InputRoot>
          </label>
        </div>
      </div>

      <div className='border border-borderColor w-11/12'></div>

      <div className='flex flex-col gap-2 text-info font-semibold'>
        <span>Caracteristicas do imóvel</span>

        <div className='flex items-center gap-2'>
          <Checkbox.Root 
            className='bg-white w-6 h-6 rounded border-borderColor data-[state=checked]:bg-blue-700'
            id='Aceita pet'
            onCheckedChange={(data : boolean) => {setIsPetFrendly(data);}}
          >
            <Checkbox.Indicator className='flex items-center justify-center text-white'>
              <Check size={16} />
            </Checkbox.Indicator> 
          </Checkbox.Root>
          <label htmlFor='Aceita pet'>Aceita Pet</label>
        </div>

        <div className='flex items-center gap-2'>
          <Checkbox.Root 
            className='bg-white w-6 h-6 rounded border-borderColor data-[state=checked]:bg-blue-700'
            id='Mobiliado'
            onCheckedChange={(data : boolean) => {setIsFurnished(data);}}
          >
            <Checkbox.Indicator className='flex items-center justify-center text-white'>
              <Check size={16} />
            </Checkbox.Indicator> 
          </Checkbox.Root>
          <label htmlFor='Mobiliado'>Mobiliado</label>
        </div>
      </div>

      <button
        type='submit' 
        className='bg-paymentButton font-semibold text-lg p-3 text-white rounded-md w-full'
      >
         Aplicar filtros
      </button>
    </form>
  );
}
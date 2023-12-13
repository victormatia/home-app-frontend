import * as Checkbox from '@radix-ui/react-checkbox';
import { InputControl, InputPrefix, InputRoot } from '../Input';
import { QuantitySelector } from './MobileFilter/QuantitySelector';
import { SelectComponent } from './MobileFilter/Select';
import { Check } from 'phosphor-react';
import { useContext, useMemo, useState } from 'react';
import globalContext from '@/context/context';
import { TImmobile } from '@/types';
import { Button } from '../Button';

export function FilterForm(){
  const { 
    setToggleOpenFilter, 
    setSearchedImmobiles, 
    immobiles, 
    setPropertyCaracteristics, 
    propertyCaracteristics, 
  } = useContext(globalContext);
  const [resetFilter, setResetFilter] = useState('1')
  const [immobileType, setImmobileType] = useState<string>('todos');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(999999);
  const [minArea, setMinArea] = useState<number>(0);
  const [maxArea, setMaxArea] = useState<number>(9999);
  const [bathroomsQty, setBathroomsQty] = useState<number| string>('todos');
  const [bedroomsQty, setBedroomsQty] = useState<number| string>('todos');
  const [parkingQty, setParkingQty] = useState<number| string>('todos');
  const [petFriendly, setPetFriendly] = useState<boolean | string>('todos');
  const [isFurnished, setIsFurnished] = useState<boolean | string>('todos');

  const propetyKeys = Object.keys(propertyCaracteristics);
  const immobileList = immobiles.map((i: TImmobile) => ({ immobileId: i.id,  immobile: i, rank: 0 }));
  useMemo(
    () => { 
      const filtredImmobiles = propetyKeys.reduce((acc, key) => {
        switch(key){
        case 'immobileType':
          return propertyCaracteristics[key] === 'todos' ? acc :
            acc.filter(({ immobile }) => 
              immobile.type?.type === propertyCaracteristics[key]);
        case 'minPrice':
          return acc.filter(({ immobile }) => 
            propertyCaracteristics.maxPrice >=  immobile.price && immobile.price >= propertyCaracteristics.minPrice);
        case 'bedroomsQty':
        case 'bathroomsQty':
        case 'parkingQty':
          if(propertyCaracteristics[key] === 'todos'){
            return acc;
          }else if(propertyCaracteristics[key] === 4){
            return acc.filter(({ immobile }) => 
              immobile[key] >= +propertyCaracteristics[key]);
          } 
          return acc.filter(({ immobile }) => 
            immobile[key] === propertyCaracteristics[key]);
            
        case 'petFriendly':
        //case 'isFurnished':
          return propertyCaracteristics[key] === 'todos' ? acc : 
            acc.filter(({ immobile }) => 
              immobile[key] === propertyCaracteristics[key]);
        case 'minArea':
          return acc.filter(({ immobile }) => 
            propertyCaracteristics.maxArea >=  immobile.sqrFootage && 
            immobile.sqrFootage >= propertyCaracteristics.minArea);
   
        default:
          return acc;
        }
      }
      , immobileList);

      setSearchedImmobiles(filtredImmobiles);
    }, [propertyCaracteristics]
  );

  function handleApplyFilter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const filter = {
      bedroomsQty,
      bathroomsQty,
      parkingQty,
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      immobileType,
      petFriendly ,
      isFurnished,
    };

    setPropertyCaracteristics(filter);

    setToggleOpenFilter(false);
  };

  function handleCleanFilters(){

    const cleanFilter = {
      bedroomsQty: 'todos',
      bathroomsQty: 'todos',
      parkingQty: 'todos',
      minPrice: 0,
      maxPrice: 999999,
      minArea: 0,
      maxArea: 9999,
      immobileType: 'todos',
      petFriendly: 'todos',
      isFurnished: 'todos',
    };

    setResetFilter((prev) => (prev === '1' ? '2' : '1'))

    setImmobileType('todos')
    setPetFriendly('todos')
    setIsFurnished('todos')
    setParkingQty('todos')
    setBathroomsQty('todos')
    setBedroomsQty('todos')
    setMinArea(0)
    setMinPrice(0)
    setMaxArea(9999)
    setMaxPrice(999999)

    setPropertyCaracteristics(cleanFilter);

    setToggleOpenFilter(false);
  }

  return(
    <form onSubmit={handleApplyFilter} 
      className='w-full flex flex-col gap-4 p-4 min-[700px]:overflow-y-scroll'>
      <div className='flex flex-col '>
        <label htmlFor="immoblie-type" className='text-info font-semibold mb-2'>
                   Tipo de imóvel
        </label>
        <SelectComponent immobliType={setImmobileType} key={resetFilter}/>
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
                onChange={(e) => setMinPrice(Number(e.target.value))}
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
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </InputRoot>
          </label>
        </div>
      </div>

      <div className='flex flex-col '>
        <label htmlFor="bathrooms" className='text-info font-semibold mb-2'>
                  Banheiros
          <QuantitySelector quantitySelect={setBathroomsQty} key={resetFilter}/>
        </label>
      </div>

      <div className='flex flex-col'>
        <label htmlFor="bedrooms" className='text-info font-semibold mb-2'>
                  Quartos
          <QuantitySelector quantitySelect={setBedroomsQty} key={resetFilter}/>
        </label>
      </div>

      <div className='flex flex-col mb-4'>
        <label htmlFor="parking" className='text-info font-semibold mb-2'>
                  Vagas
          <QuantitySelector quantitySelect={setParkingQty} key={resetFilter}/>
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
                onChange={(e) => setMinArea(Number(e.target.value))}
              />
            </InputRoot>
          </label>

          <label htmlFor="max-area" className='flex flex-col font-semibold text-xs'>
                    Mínimo
            <InputRoot>
              <InputControl
                type="number" 
                name="max-area" 
                id="max-area"
                min="0"
                max="9999"
                placeholder='9999 m²'
                onChange={(e) => setMaxArea(Number(e.target.value))}
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
            onCheckedChange={(data : boolean) => {setPetFriendly(data);}}
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

      <div className='flex gap-1'>
        <Button
          onClick={handleCleanFilters}
          type='reset' 
          variant='cleanFilter'
        >
          Limpar
        </Button>

        <Button type='submit'>
         Aplicar
        </Button>
      </div>

    </form>
  );
}
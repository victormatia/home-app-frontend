'use client';
import { Check, X } from 'phosphor-react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Checkbox from '@radix-ui/react-checkbox';
import { SelectComponent } from './Select';
import { InputControl, InputPrefix, InputRoot } from '../Input';
import { QuantitySelector } from './QuantitySelector';
import { useState } from 'react';

interface FilterProps{
  openFilter: boolean
  closeFilter: Function
}

export function Filter(props: FilterProps){

  const isFilterOpen = props.openFilter === true;

  const [buyOrRent, setBuyOrRent] = useState('alugar');
  const [immobiliType, setImmobileType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bathroomsQuantity, setBathroomsQuantity] = useState('1');
  const [bedroomsQuantity, setBedroomsQuantity] = useState('1');
  const [parkingQantity, setParkingQuantity] = useState('1');
  const [propertyCaracteristics, setPropertyCaracteristics] = useState<string[]>([]);

  function handleCloseFilter(){
    props.closeFilter(false);
  }

  function toggleBuyAndRent(data: string){
    setBuyOrRent(data);
  }

  return(
    <>
      {isFilterOpen && (
        <div
          className="z-20 h-screen w-full bg-app absolute top-0 animate-openfilter transition-all"
        >
          <div className='flex justify-between p-6 shadow-md'>
            <button onClick={handleCloseFilter}>
              <X size={15}/>
            </button>

            <button 
              type='submit' 
              className='text-red-600 font-semibold'
              onClick={handleCloseFilter}
            >
              Aplicar filtro
            </button>
          </div>

          <div>
            <Tabs.Root defaultValue='alugar' onValueChange={toggleBuyAndRent}>
              <Tabs.List className='w-full flex mt-5 mb-7 items-center justify-center '>
                <Tabs.Trigger
                  value='alugar' 
                  className='flex items-center justify-center w-36 h-14 font-semibold rounded-l-md
               bg-white text-buttonText data-[state=active]:bg-black data-[state=active]:text-white shadow-md'
                >
              Alugar
                </Tabs.Trigger>
                <Tabs.Trigger 
                  value='comprar'
                  className='flex items-center justify-center w-36 h-14 font-semibold rounded-r-md
               bg-white text-buttonText data-[state=active]:bg-black data-[state=active]:text-white shadow-md'
                >
              Comprar
                </Tabs.Trigger>
              </Tabs.List>

              <form action="" className='w-full pl-4'>
                <div className='flex flex-col mb-4'>
                  <label htmlFor="immoblie-type" className='text-info font-semibold mb-2'>
                   Tipo de imóvel
                  </label>
                  <SelectComponent immobliType={setImmobileType}/>
                </div>

                <div className='flex flex-col mb-4'>
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
                          onChange={e => setMinPrice(e.target.value)}
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
                          onChange={e => setMaxPrice(e.target.value)}
                        />
                      </InputRoot>
                    </label>
                  </div>
                </div>

                <div className='flex flex-col mb-4'>
                  <label htmlFor="bathrooms" className='text-info font-semibold mb-2'>
                  Banheiros
                    <QuantitySelector quantitySelect={setBathroomsQuantity}/>
                  </label>
                </div>

                <div className='flex flex-col mb-4'>
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

                <div className='flex flex-col mb-4 border-b-2'>
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
                        />
                      </InputRoot>
                    </label>
                  </div>
                </div>

                <div className='border border-borderColor w-11/12 mb-3'></div>

                <div className='flex flex-col gap-2 text-info font-semibold'>
                  <span>Caracteristicas do imóvel</span>

                  <div className='flex items-center gap-2'>
                    <Checkbox.Root 
                      className='bg-white w-6 h-6 rounded border-borderColor data-[state=checked]:bg-blue-700'
                      id='Aceita pet'
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
                    >
                      <Checkbox.Indicator className='flex items-center justify-center text-white'>
                        <Check size={16} />
                      </Checkbox.Indicator> 
                    </Checkbox.Root>
                    <label htmlFor='Mobiliado'>Mobiliado</label>
                  </div>
                </div>

              </form>
              
            </Tabs.Root>
          </div>

        </div>
      )}
    </>
  );
}
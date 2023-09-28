import { X } from 'phosphor-react';
import * as Tabs from '@radix-ui/react-tabs';
import { SelectComponent } from './Select';
import { InputControl, InputPrefix, InputRoot } from '../Input';
import { QuantitySelector } from './QuantitySelector';

interface FilterProps{
  openFilter: boolean
  closeFilter: Function
}

export function Filter(props: FilterProps){

  const isFilterOpen = props.openFilter === true;

  function handleCloseFilter(){
    props.closeFilter(false);
  }

  return(
    <>
      {isFilterOpen && (
        <div
          className="z-20 h-screen bg-app absolute top-0 animate-openfilter"
        >
          <div className='flex justify-between p-6 shadow-md'>
            <button onClick={handleCloseFilter}>
              <X size={15}/>
            </button>

            <span className='text-red-600 font-semibold'>Filtrar</span>
          </div>

          <div>
            <Tabs.Root defaultValue='alugar'>
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

              <Tabs.Content value='alugar' className='w-[100%] pl-4'>
                <form action="">
                  <div className='flex flex-col mb-4'>
                    <label htmlFor="immoblie-type" className='text-info font-semibold mb-2'>
                   Tipo de imóvel
                    </label>
                    <SelectComponent />
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
                            maxLength={7}
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
                            maxLength={7}
                          />
                        </InputRoot>
                      </label>
                    </div>
                  </div>

                  <div className='flex flex-col mb-4'>
                    <label htmlFor="bathrooms" className='text-info font-semibold mb-2'>
                  Banheiros
                      <QuantitySelector />
                    </label>
                  </div>

                  <div className='flex flex-col mb-4'>
                    <label htmlFor="bedrooms" className='text-info font-semibold mb-2'>
                  Quartos
                      <QuantitySelector />
                    </label>
                  </div>

                  <div className='flex flex-col mb-4'>
                    <label htmlFor="parking" className='text-info font-semibold mb-2'>
                  Vagas
                      <QuantitySelector />
                    </label>
                  </div>

                  <div className='flex flex-col mb-4'>
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
                            maxLength={4}
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
                            maxLength={4}
                            placeholder='9999 m²'
                          />
                        </InputRoot>
                      </label>
                    </div>
                  </div>

                </form>
              </Tabs.Content>

              <Tabs.Content value='comprar' className='w-[100%] pl-4'>
                <form action="">
                  <div className='flex flex-col mb-4'>
                    <label htmlFor="immoblie-type" className='text-info font-semibold mb-2'>
                   Tipo de imóvel
                    </label>
                    <SelectComponent />
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
                            maxLength={7}
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
                            maxLength={7}
                          />
                        </InputRoot>
                      </label>
                    </div>
                  </div>

                  <div className='flex flex-col mb-4'>
                    <label htmlFor="bathrooms" className='text-info font-semibold mb-2'>
                  Banheiros
                      <QuantitySelector />
                    </label>
                  </div>

                  <div className='flex flex-col mb-4'>
                    <label htmlFor="bedrooms" className='text-info font-semibold mb-2'>
                  Quartos
                      <QuantitySelector />
                    </label>
                  </div>

                  <div className='flex flex-col mb-4'>
                    <label htmlFor="parking" className='text-info font-semibold mb-2'>
                  Vagas
                      <QuantitySelector />
                    </label>
                  </div>

                  <div className='flex flex-col mb-4'>
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
                            maxLength={4}
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
                            maxLength={4}
                            placeholder='9999 m²'
                          />
                        </InputRoot>
                      </label>
                    </div>
                  </div>

                </form>
              </Tabs.Content>

            </Tabs.Root>
          </div>

        </div>
      )}
    </>
  );
}
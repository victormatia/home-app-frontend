"use client"
import * as RadioGroup from '@radix-ui/react-radio-group';
import { InputControl, InputPrefix, InputRoot } from '../Input';
import { useState } from 'react';
import { Button } from '../Button';
import { QuantitySelector } from '../FIlters/MobileFilter/QuantitySelector';
import { SelectComponent } from '../FIlters/MobileFilter/Select';

export function RegisterForm(){
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [burgh, setBurgh] = useState('')
  const [city, setCity] = useState('')
  const [registeredProperty, setRegisteredProperty] = useState({})
  const [immobileType, setImmobileType] = useState<string>('todos');
  const [minPrice, setMinPrice] = useState<number| string>('0,00');
  const [maxPrice, setMaxPrice] = useState<number| string>('99.999,99');
  const [minArea, setMinArea] = useState<number| string>(0);
  const [maxArea, setMaxArea] = useState<number| string>(9999);
  const [bathroomsQty, setBathroomsQty] = useState<number| string>('todos');
  const [bedroomsQty, setBedroomsQty] = useState<number| string>('todos');
  const [parkingQty, setParkingQty] = useState<number| string>('todos');
  const [petFriendly, setPetFriendly] = useState<boolean | string>('todos');
  const [isFurnished, setIsFurnished] = useState<boolean | string>('todos');

  const propetyKeys = Object.keys(registeredProperty);

  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newProperty = {
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

    setRegisteredProperty(newProperty);
  };

  // const handleNumberFormatter = (inputValue: string) => {

  //   const result = Number(inputValue).toLocaleString('pt-BR', {
  //     style: 'currency',
  //     currency: 'brl',
  //     minimumFractionDigits: 2,
  //     maximumFractionDigits: 2,
  //   })
  //   return result
  // };

  return(
    <form onSubmit={handleRegister}
      className='w-full flex flex-col gap-4 p-4 min-[700px]:overflow-y-scroll'>
        <span>Localização</span>
        <div className='flex flex-col '>
              <div>
            <label htmlFor="address" className='flex flex-col font-semibold text-xs'>
                Endereço
                <InputRoot>
                <InputControl
                    type="string" 
                    name="address" 
                    id="address"
                    placeholder='Ex.: Rua Perilo Teixeira'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                </InputRoot>
            </label>
            <label htmlFor="number" className='flex flex-col font-semibold text-xs'>
            Número
                <InputRoot>
                <InputControl
                    type="number" 
                    name="number" 
                    id="number"
                    min="0"
                    max="999999"
                    placeholder='Ex.: 192'
                    value={number}
                    onChange={(e) => setNumber((e.target.value))}
                />
                </InputRoot>
            </label>
            </div>
            <label htmlFor="burgh" className='flex flex-col font-semibold text-xs'>
            Bairro
                <InputRoot>
                <InputControl
                    type="string" 
                    name="burgh" 
                    id="burgh"
                    placeholder='Ex.: Centro'
                    value={burgh}
                    onChange={(e) => setBurgh(e.target.value)}
                />
                </InputRoot>
            </label>
            <label htmlFor="city" className='flex flex-col font-semibold text-xs'>
            Cidade
                <InputRoot>
                <InputControl
                    type="string" 
                    name="city" 
                    id="city"
                    placeholder='Ex.: Itapipoca'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                </InputRoot>
            </label>
        </div>

      <span>Características do imóvel</span>
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
                placeholder='0,00'
                value={minPrice}
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
                type="number" 
                name="max-price" 
                id="max-price"
                min="0"
                max="999999"
                placeholder='10.000,00'
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </InputRoot>
          </label>
        </div>
      </div>

      <div className='flex flex-col '>
        <label htmlFor="bathrooms" className='text-info font-semibold mb-2'>
                  Banheiros
          <QuantitySelector quantitySelect={setBathroomsQty}/>
        </label>
      </div>

      <div className='flex flex-col'>
        <label htmlFor="bedrooms" className='text-info font-semibold mb-2'>
                  Quartos
          <QuantitySelector quantitySelect={setBedroomsQty}/>
        </label>
      </div>

      <div className='flex flex-col mb-4'>
        <label htmlFor="parking" className='text-info font-semibold mb-2'>
                  Vagas
          <QuantitySelector quantitySelect={setParkingQty}/>
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
                value={minArea}
                onChange={(e) => setMinArea(e.target.value)}
              />
              <InputPrefix className='font-semibold text-xs'>
                        m²
              </InputPrefix>
            </InputRoot>
          </label>

          <label htmlFor="max-area" className='flex flex-col font-semibold text-xs'>
                    Máximo
            <InputRoot>
              <InputControl
                type="number" 
                name="max-area" 
                id="max-area"
                min="0"
                max="9999"
                placeholder='9.999 m²'
                value={maxArea}
                onChange={(e) => setMaxArea(e.target.value)}
              />
              <InputPrefix className='font-semibold text-xs'>
                        m²
              </InputPrefix>
            </InputRoot>
          </label>
        </div>
      </div>

      <div className='flex flex-col gap-2 text-info font-semibold'>
        <span>Aceita Pets</span>
        <RadioGroup.Root className="RadioGroupRoot" defaultValue="yes" aria-label="View density">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="className='bg-white w-6 h-6 rounded border-borderColor data-[state=checked]:bg-blue-700'" value="yes" id="r1">
            <RadioGroup.Indicator className="flex items-center justify-center text-white" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r1">
          Sim
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="className='bg-white w-6 h-6 rounded border-borderColor data-[state=checked]:bg-blue-700'" value="no" id="r2">
            <RadioGroup.Indicator className="flex items-center justify-center text-white" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r2">
          Não
          </label>
        </div>
      </RadioGroup.Root>
      <span>Mobiliado</span>
        <RadioGroup.Root className="RadioGroupRoot" defaultValue="no" aria-label="View density">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="className='bg-white w-6 h-6 rounded border-borderColor data-[state=checked]:bg-blue-700'" value="yes" id="r1">
            <RadioGroup.Indicator className="flex items-center justify-center text-white" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r1">
          Sim
          </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RadioGroup.Item className="className='bg-white w-6 h-6 rounded border-borderColor data-[state=checked]:bg-blue-700'" value="no" id="r2">
            <RadioGroup.Indicator className="flex items-center justify-center text-white" />
          </RadioGroup.Item>
          <label className="Label" htmlFor="r2">
          Não
          </label>
        </div>
      </RadioGroup.Root>
      </div>

      <label htmlFor="description" className='flex flex-col font-semibold text-xs'>
      Descrição
                <InputRoot>
                <InputControl
                    type="string" 
                    name="description" 
                    id="description"
                    placeholder='Ex.: Um apartamento espaçoso com boa localização... '
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </InputRoot>
            </label>

      add a 

      <div className='flex gap-1'>
        <Button className='font-semibold text-lg p-3 w-full' type='submit'>
        Cadastrar imóvel
        </Button>
      </div>

    </form>
  );
}
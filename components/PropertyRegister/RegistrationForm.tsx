'use client';

import * as Checkbox from '@radix-ui/react-checkbox';
import Input, { InputPrefix, InputRoot } from '../Input';
import { useContext, useEffect } from 'react';
import { Button } from '../Button';
import { SelectComponent } from '../FIlters/MobileFilter/Select';
import globalContext from '@/context/context';
import { Check } from 'phosphor-react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

type TInputs = {
  address: string,
  number: string,
  burgh: string,
  city: string,
  postalCode: string,
  price: string,
  area: string,
  petFriendly: boolean,
  bedrooms: string,
  bathrooms: string,
  parkings: string,
  isFurnished: boolean,
  description: string
}

const defaultValues = {
  address: '',
  number: '',
  burgh: '',
  city: '',
  postalCode: '',
  price: '',
  area: '',
  bedrooms: '0',
  bathrooms: '0',
  parkings: '0',
  petFriendly: false,
  isFurnished: false,
  description: '',
};

export function RegisterForm() {
  const { register, handleSubmit, reset, control } = useForm({ defaultValues });

  const registerImmobile: SubmitHandler<TInputs> = (data) => {
    console.log(data);
    reset();
  };

  const { setCurrPage } = useContext(globalContext);

  useEffect(() => setCurrPage('advertise'), []);

  return (
    <form
      onSubmit={handleSubmit(registerImmobile)}
      className='flex w-full flex-col gap-8 pb-20
      min-[700px]:overflow-y-scroll'
    >
      <div>
        <h2 className='text-grayTitle mb-4 text-xl font-medium'>Localização</h2>
        <div className='flex flex-col gap-4'>
          <label htmlFor="address" className='text-grayLabel flex flex-col font-medium'>
            <h3 className='mb-2 text-base'>Endereço</h3>
            <InputRoot>
              <Input
                type='text'
                id='address'
                placeholder='Ex.: Rua Perilo Teixeira'
                {...register('address')}
              />
            </InputRoot>
          </label>

          <label htmlFor="number" className='text-grayLabel flex flex-col font-medium'>
            <h3 className='mb-2 text-base'>Número</h3>
            <InputRoot>
              <Input
                type='number'
                id='number'
                placeholder='Ex.: 2223'
                {...register('number', { valueAsNumber: true })}
              />
            </InputRoot>
          </label>

          <label htmlFor="burgh" className='text-grayLabel flex flex-col font-medium'>
            <h3 className='mb-2 text-base'>Bairro</h3>
            <InputRoot>
              <Input
                type='text'
                id='burgh'
                placeholder='Ex.: Centro'
                {...register('burgh')}
              />
            </InputRoot>
          </label>

          <label htmlFor="city" className='text-grayLabel flex flex-col font-medium'>
            <h3 className='mb-2 text-base'>Cidade</h3>
            <InputRoot>
              <Input
                type='text'
                id='city'
                placeholder='Ex.: Itapipoca'
                {...register('city')}
              />
            </InputRoot>
          </label>

          <label htmlFor="postalCode" className='text-grayLabel flex flex-col font-medium'>
            <h3 className='mb-2 text-base'>CEP</h3>
            <InputRoot>
              <Input
                type='text'
                id='postalCode'
                placeholder='Ex.: 62500-000'
                {...register('postalCode')}
              />
            </InputRoot>
          </label>
        </div>
      </div>

      <div>
        <h2 className='text-grayTitle mb-4 text-xl font-medium'>Características do imóvel</h2>
        <div className='flex flex-col gap-4'>
          <label htmlFor="immoblie-type" className='text-grayLabel flex flex-col font-medium'>
            <h3 className='mb-2 text-base'>Tipo de imóvel</h3>
            <SelectComponent immobliType={() => { }}/>
          </label>
          <div className='flex gap-4'>
            <label htmlFor="price" className='text-info font-semibold'>
              <h3 className='text-grayLabel mb-2 text-base font-medium'>Preço</h3>
              <InputRoot>
                <InputPrefix className='text-base font-semibold'>
                  R$
                </InputPrefix>
                <Input
                  type='number'
                  id='price'
                  placeholder='Ex.: 550.00'
                  {...register('price', { valueAsNumber: true })}
                />
              </InputRoot>
            </label>

            <label htmlFor="area" className='text-grayLabel flex flex-col font-medium'>
              <h3 className='text-grayLabel mb-2 text-base'>Área</h3>
              <InputRoot>
                <Input
                  type='number'
                  id='area'
                  placeholder='Ex.: 120'
                  {...register('area', { valueAsNumber: true })}
                />
                <InputPrefix className='text-base font-semibold'>
                  m²
                </InputPrefix>
              </InputRoot>
            </label>
          </div>

          <div className='flex w-full gap-8'>
            <Controller
              control={control}
              name='bathrooms'
              render={({ field }) => {
                return(
                  <label htmlFor="bathrooms" className='text-grayLabel flex flex-col font-medium'>
                    <h3 className='mb-2 text-base'>Banheiros</h3>
                    <ToggleGroup.Root
                      type="single"
                      onValueChange={field.onChange}
                      value={field.value}
                      className='text-grayLabel flex gap-3 text-base'
                    >
                      <ToggleGroup.Item
                        className='shadow-default flex h-8 w-8 items-center justify-center 
                        rounded-md border-2 border-transparent bg-white  p-2
                      data-[state=on]:border-blue-600'
                        value='1'
                      >
                        1
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='shadow-default flex h-8 w-8 items-center justify-center 
                        rounded-md border-2 border-transparent bg-white p-2
                      data-[state=on]:border-blue-600'
                        value='2'>
                        2
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='shadow-default flex h-8 w-8 items-center justify-center 
                        rounded-md border-2 border-transparent bg-white p-2
                      data-[state=on]:border-blue-600'
                        value='3'>
                        3
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='shadow-default flex h-8 w-8 items-center justify-center 
                        rounded-md border-2 border-transparent bg-white p-2
                      data-[state=on]:border-blue-600'
                        value='4'>
                        +4
                      </ToggleGroup.Item>
                    </ToggleGroup.Root>
                  </label>
                );
              }}
            />
            
            <Controller 
              control={control}
              name='bedrooms'
              render={({ field }) => {

                return(
                  <label htmlFor="bedrooms" className='text-grayLabel flex flex-col font-medium'>
                    <h3 className='mb-2 text-base'>Quartos</h3>
                    <ToggleGroup.Root
                      type="single"
                      onValueChange={field.onChange}
                      value={field.value}
                      className='text-grayLabel flex gap-3 text-base'
                    >
                      <ToggleGroup.Item
                        className='shadow-default flex h-8 w-8 items-center justify-center 
                        rounded-md border-2 border-transparent bg-white  p-2
                      data-[state=on]:border-blue-600'
                        value='1'
                      >
                        1
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='shadow-default flex h-8 w-8 items-center justify-center 
                        rounded-md border-2 border-transparent bg-white p-2
                      data-[state=on]:border-blue-600'
                        value='2'>
                        2
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='shadow-default flex h-8 w-8 items-center justify-center 
                        rounded-md border-2 border-transparent bg-white p-2
                      data-[state=on]:border-blue-600'
                        value='3'>
                        3
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='shadow-default flex h-8 w-8 items-center justify-center 
                        rounded-md border-2 border-transparent bg-white p-2
                      data-[state=on]:border-blue-600'
                        value='4'>
                        +4
                      </ToggleGroup.Item>
                    </ToggleGroup.Root>
                  </label>
                );
              }}  
            />
          </div>

          <Controller 
            control={control}
            name='parkings'
            render={({ field }) => {
              return(
                <label htmlFor="parking" className='text-grayLabel flex flex-col font-medium'>
                  <h3 className='mb-2 text-base'>Vagas de estacionamento</h3>
                  <ToggleGroup.Root
                    type="single"
                    onValueChange={field.onChange}
                    value={field.value}
                    className='text-grayLabel flex gap-3 text-base'
                  >
                    <ToggleGroup.Item
                      className='shadow-default flex h-8 w-8 items-center justify-center 
                      rounded-md border-2 border-transparent bg-white  p-2
                      data-[state=on]:border-blue-600'
                      value='1'
                    >
                        1
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      className='shadow-default flex h-8 w-8 items-center justify-center 
                      rounded-md border-2 border-transparent bg-white p-2
                      data-[state=on]:border-blue-600'
                      value='2'>
                        2
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      className='shadow-default flex h-8 w-8 items-center justify-center 
                      rounded-md border-2 border-transparent bg-white p-2
                      data-[state=on]:border-blue-600'
                      value='3'>
                        3
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      className='shadow-default flex h-8 w-8 items-center justify-center 
                      rounded-md border-2 border-transparent bg-white p-2
                      data-[state=on]:border-blue-600'
                      value='4'>
                        +4
                    </ToggleGroup.Item>
                  </ToggleGroup.Root>
                </label>
              );
            }}
          /> 

          <div className='text-grayLabel flex gap-4 font-medium'>

            <label htmlFor='petFriendly' className='flex items-center gap-2 text-base'>
              <h3>Aceita pet</h3>
              <Controller 
                control={control}
                name='petFriendly'
                render={({ field }) => {
                  return(
                    <Checkbox.Root
                      className='border-borderColor data-[state=checked]:bg-primaryBlue 
                      shadow-default h-7 w-7 rounded bg-white'
                      id='petFriendly'
                      onCheckedChange={field.onChange}
                    >
                      <Checkbox.Indicator className='flex items-center justify-center text-white'>
                        <Check size={16} />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  );
                }}
              /> 
            </label>

            <label htmlFor='Mobiliado' className='flex items-center gap-2 py-1'>
              <h3>Mobiliado</h3>
              <Controller 
                control={control}
                name='isFurnished'
                render={({ field }) => {
                  return(
                    <Checkbox.Root
                      className='border-borderColor data-[state=checked]:bg-primaryBlue 
                      shadow-default h-7 w-7 rounded bg-white'
                      id='Mobiliado'
                      onCheckedChange={field.onChange}
                    >
                      <Checkbox.Indicator className='flex items-center justify-center text-white'>
                        <Check size={16} />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  );
                }}
              /> 
            </label>

          </div>
          <label htmlFor="description" className='text-grayLabel flex flex-col text-base font-medium'>
            <h3 className='mb-2'>Descrição</h3>
            <textarea
              className='outline-primaryBlue rounded-md p-2' id="description"
              cols={30}
              rows={10}
              placeholder='Ex.: Um apartamento espaçoso com boa localização... '
              {...register('description')}
            />
          </label>
        </div>
      </div>

      <Button className='w-full p-3 text-lg font-semibold' type='submit'>
        Cadastrar imóvel
      </Button>

    </form>
  );
}
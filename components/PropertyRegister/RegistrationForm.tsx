'use client'

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
  bedrooms: "0",
  bathrooms: "0",
  parkings: "0",
  petFriendly: false,
  isFurnished: false,
  description: ''
}

export function RegisterForm() {
  const { register, handleSubmit, reset, control } = useForm({ defaultValues });

  const registerImmobile: SubmitHandler<TInputs> = (data) => {
    console.log(data);
    reset()
  };


  const { setCurrPage } = useContext(globalContext)

  useEffect(() => setCurrPage('advertise'), [])

  return (
    <form
      onSubmit={handleSubmit(registerImmobile)}
      className='w-full flex flex-col gap-8 min-[700px]:overflow-y-scroll
      pb-20'
    >
      <div>
        <h2 className='text-xl font-medium text-grayTitle mb-4'>Localização</h2>
        <div className='flex flex-col gap-4'>
          <label htmlFor="address" className='flex flex-col font-medium text-grayLabel'>
            <h3 className='text-base mb-2'>Endereço</h3>
            <InputRoot>
              <Input
                type='text'
                id='address'
                placeholder='Ex.: Rua Perilo Teixeira'
                {...register('address')}
              />
            </InputRoot>
          </label>

          <label htmlFor="number" className='flex flex-col font-medium text-grayLabel'>
            <h3 className='text-base mb-2'>Número</h3>
            <InputRoot>
              <Input
                type='number'
                id='number'
                placeholder='Ex.: 2223'
                {...register('number', {valueAsNumber: true})}
              />
            </InputRoot>
          </label>

          <label htmlFor="burgh" className='flex flex-col font-medium text-grayLabel'>
            <h3 className='text-base mb-2'>Bairro</h3>
            <InputRoot>
              <Input
                type='text'
                id='burgh'
                placeholder='Ex.: Centro'
                {...register('burgh')}
              />
            </InputRoot>
          </label>

          <label htmlFor="city" className='flex flex-col font-medium text-grayLabel'>
            <h3 className='text-base mb-2'>Cidade</h3>
            <InputRoot>
              <Input
                type='text'
                id='city'
                placeholder='Ex.: Itapipoca'
                {...register('city')}
              />
            </InputRoot>
          </label>

          <label htmlFor="postalCode" className='flex flex-col font-medium text-grayLabel'>
            <h3 className='text-base mb-2'>CEP</h3>
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
        <h2 className='text-xl font-medium text-grayTitle mb-4'>Características do imóvel</h2>
        <div className='flex flex-col gap-4'>
          <label htmlFor="immoblie-type" className='font-medium flex flex-col text-grayLabel'>
            <h3 className='text-base mb-2'>Tipo de imóvel</h3>
            <SelectComponent immobliType={() => { }}/>
          </label>
          <div className='flex gap-4'>
            <label htmlFor="price" className='text-info font-semibold'>
              <h3 className='text-base font-medium text-grayLabel mb-2'>Preço</h3>
              <InputRoot>
                <InputPrefix className='font-semibold text-base'>
                  R$
                </InputPrefix>
                <Input
                  type='number'
                  id='price'
                  placeholder='Ex.: 550.00'
                  {...register('price', {valueAsNumber: true})}
                />
              </InputRoot>
            </label>

            <label htmlFor="area" className='flex flex-col font-medium text-grayLabel'>
              <h3 className='text-base text-grayLabel mb-2'>Área</h3>
              <InputRoot>
                <Input
                  type='number'
                  id='area'
                  placeholder='Ex.: 120'
                  {...register('area', {valueAsNumber: true})}
                />
                <InputPrefix className='font-semibold text-base'>
                  m²
                </InputPrefix>
              </InputRoot>
            </label>
          </div>

          <div className='flex w-full gap-8'>
            <Controller
              control={control}
              name='bathrooms'
              render={({field}) => {
                return(
                  <label htmlFor="bathrooms" className='flex flex-col font-medium text-grayLabel'>
                    <h3 className='text-base mb-2'>Banheiros</h3>
                    <ToggleGroup.Root
                    type="single"
                    onValueChange={field.onChange}
                    value={field.value}
                    className='flex gap-3 text-grayLabel text-base'
                    >
                      <ToggleGroup.Item
                        className='flex items-center justify-center border-2 bg-white border-transparent w-8 h-8 rounded-md p-2  shadow-default
                      data-[state=on]:border-blue-600'
                        value='1'
                      >
                        1
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='flex items-center justify-center border-2 bg-white border-transparent w-8 h-8 rounded-md p-2 shadow-default
                      data-[state=on]:border-blue-600'
                        value='2'>
                        2
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='flex items-center justify-center border-2 bg-white border-transparent w-8 h-8 rounded-md p-2 shadow-default
                      data-[state=on]:border-blue-600'
                        value='3'>
                        3
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='flex items-center justify-center border-2 bg-white border-transparent w-8 h-8 rounded-md p-2 shadow-default
                      data-[state=on]:border-blue-600'
                        value='4'>
                        +4
                      </ToggleGroup.Item>
                    </ToggleGroup.Root>
                  </label>
                )
              }}
            />
            
            <Controller 
              control={control}
              name='bedrooms'
              render={({field}) => {

                return(
                  <label htmlFor="bedrooms" className='flex flex-col font-medium text-grayLabel'>
                    <h3 className='text-base mb-2'>Quartos</h3>
                    <ToggleGroup.Root
                    type="single"
                    onValueChange={field.onChange}
                    value={field.value}
                    className='flex gap-3 text-grayLabel text-base'
                    >
                      <ToggleGroup.Item
                        className='flex items-center justify-center border-2 bg-white border-transparent w-8 h-8 rounded-md p-2  shadow-default
                      data-[state=on]:border-blue-600'
                        value='1'
                      >
                        1
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='flex items-center justify-center border-2 bg-white border-transparent w-8 h-8 rounded-md p-2 shadow-default
                      data-[state=on]:border-blue-600'
                        value='2'>
                        2
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='flex items-center justify-center border-2 bg-white border-transparent w-8 h-8 rounded-md p-2 shadow-default
                      data-[state=on]:border-blue-600'
                        value='3'>
                        3
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='flex items-center justify-center border-2 bg-white border-transparent w-8 h-8 rounded-md p-2 shadow-default
                      data-[state=on]:border-blue-600'
                        value='4'>
                        +4
                      </ToggleGroup.Item>
                    </ToggleGroup.Root>
                  </label>
                )
              }}  
            />
          </div>

          <Controller 
            control={control}
            name='parkings'
            render={({field}) => {
              return(
                <label htmlFor="parking" className='flex flex-col font-medium text-grayLabel'>
                  <h3 className='text-base mb-2'>Vagas de estacionamento</h3>
                  <ToggleGroup.Root
                    type="single"
                    onValueChange={field.onChange}
                    value={field.value}
                    className='flex gap-3 text-grayLabel text-base'
                    >
                      <ToggleGroup.Item
                        className='flex items-center justify-center border-2 bg-white border-transparent w-8 h-8 rounded-md p-2  shadow-default
                      data-[state=on]:border-blue-600'
                        value='1'
                      >
                        1
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='flex items-center justify-center border-2 bg-white border-transparent w-8 h-8 rounded-md p-2 shadow-default
                      data-[state=on]:border-blue-600'
                        value='2'>
                        2
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='flex items-center justify-center border-2 bg-white border-transparent w-8 h-8 rounded-md p-2 shadow-default
                      data-[state=on]:border-blue-600'
                        value='3'>
                        3
                      </ToggleGroup.Item>
                      <ToggleGroup.Item
                        className='flex items-center justify-center border-2 bg-white border-transparent w-8 h-8 rounded-md p-2 shadow-default
                      data-[state=on]:border-blue-600'
                        value='4'>
                        +4
                      </ToggleGroup.Item>
                    </ToggleGroup.Root>
                </label>
              )
            }}
          /> 

          

          <div className='flex gap-4 font-medium text-grayLabel'>

            <label htmlFor='petFriendly' className='flex gap-2 text-base items-center'>
              <h3>Aceita pet</h3>
              <Controller 
              control={control}
              name='petFriendly'
              render={({field}) => {
              return(
              <Checkbox.Root
                className='bg-white w-7 h-7 rounded border-borderColor data-[state=checked]:bg-primaryBlue shadow-default'
                id='petFriendly'
                onCheckedChange={field.onChange}
              >
                <Checkbox.Indicator className='flex items-center justify-center text-white'>
                  <Check size={16} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              )
            }}
          /> 
            </label>

            <label htmlFor='Mobiliado' className='flex gap-2 items-center py-1'>
              <h3>Mobiliado</h3>
              <Controller 
              control={control}
              name='isFurnished'
              render={({field}) => {
              return(
              <Checkbox.Root
                className='bg-white w-7 h-7 rounded border-borderColor data-[state=checked]:bg-primaryBlue shadow-default'
                id='Mobiliado'
                onCheckedChange={field.onChange}
              >
                <Checkbox.Indicator className='flex items-center justify-center text-white'>
                  <Check size={16} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              )
            }}
          /> 
            </label>

          </div>
          <label htmlFor="description" className='flex flex-col font-medium text-base text-grayLabel'>
            <h3 className='mb-2'>Descrição</h3>
            <textarea
              className='p-2 outline-primaryBlue rounded-md' id="description"
              cols={30}
              rows={10}
              placeholder='Ex.: Um apartamento espaçoso com boa localização... '
              {...register('description')}
            />
          </label>
        </div>
      </div>

      <Button className='font-semibold text-lg p-3 w-full' type='submit'>
        Cadastrar imóvel
      </Button>


    </form>
  );
}
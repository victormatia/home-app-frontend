'use client';

import * as Checkbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';
import Input, { InputPrefix, InputRoot } from '../Input';
import { useContext, useEffect } from 'react';
import { Button } from '../Button';
import { ImmobileTypesProps, SelectItem } from '../FIlters/MobileFilter/Select';
import globalContext from '@/context/context';
import { CaretDown, Check } from 'phosphor-react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import queryClient from '@/tanstack/queryClient';

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
  description: string,
  state: string,
  type: string
}

const defaultValues = {
  address: '',
  number: '',
  burgh: '',
  city: '',
  state: '',
  postalCode: '',
  price: '',
  area: '',
  bedrooms: '0',
  bathrooms: '0',
  parkings: '0',
  petFriendly: false,
  isFurnished: false,
  description: '',
  type: '',
};

export function RegisterForm() {
  const { register, handleSubmit, reset, control } = useForm({ defaultValues });
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const typeList  = queryClient.getQueryData<ImmobileTypesProps[]>(['listType']);

  const { mutate } = useMutation({
    mutationFn: (immobile : TInputs) => axios.post('http://localhost:3001/immobile/create', {
      ownerId: userId,
      typeId: immobile.type,
      price: immobile.price,
      sqrFootage: Number(immobile.area),
      description: immobile.description,
      bathroomsQty: Number(immobile.bathrooms),
      bedroomsQty:Number(immobile.bedrooms),
      parkingQty:Number(immobile.parkings),
      petFriendly: immobile.petFriendly,
      furnished: immobile.isFurnished,
      address: {
        street: immobile.address,
        burgh: immobile.burgh,
        city: immobile.city,
        state: immobile.state,
        postalCode: immobile.postalCode,
        number: String(immobile.number),
      },
    }, 
    {
      headers: {
        Authorization: token,
      },
    }
    ),
    onSuccess: () => {},
  });

  const registerImmobile: SubmitHandler<TInputs> = (data) => {
    mutate(data);
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
                type='text'
                id='number'
                placeholder='Ex.: 2223'
                {...register('number')}
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

          <label htmlFor="city" className='text-grayLabel flex flex-col font-medium'>
            <h3 className='mb-2 text-base'>Estado</h3>
            <InputRoot>
              <Input
                type='text'
                id='state'
                placeholder='Ex.: Ceará'
                {...register('state')}
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
            <Controller 
              control={control}
              name='type'
              render={({ field }) => {
                return(
                  <Select.Root
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <Select.Trigger 
                      className='focus-within:border-primaryBlue inline-flex h-[32px]
                      items-center justify-between
                      rounded-md bg-[#FFF] px-3 shadow-sm outline-none focus-within:ring-1 min-[700px]:w-full'
                    >
                      <Select.Value placeholder="Selecione o típo de imóvel" />
                      <Select.Icon >
                        <CaretDown size={17} />
                      </Select.Icon >
                    </Select.Trigger>

                    <Select.Portal>
                      <Select.Content 
                        side='bottom'
                        position='popper'
                        sideOffset={8}
                        className='z-30 w-[--radix-select-trigger-width] overflow-hidden rounded-md bg-white'
                      >
                        <Select.Viewport className='px-2 py-3'>
                          <Select.Group>
                            {typeList?.map(({ type, id } : ImmobileTypesProps) => {
                              return(
                                <SelectItem key={type} value={id}>
                                  {type.charAt(0).toUpperCase() + type.slice(1)}
                                </SelectItem>
                              );
                            })} 
                          </Select.Group>
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                );
              }}
            />

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
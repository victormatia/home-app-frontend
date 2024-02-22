import * as Select from '@radix-ui/react-select';
import { CaretDown } from 'phosphor-react';
import classnames from 'classnames';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

interface SelectComponentProps{
  immobliType: Function
}

interface ImmobileTypesProps {
    type: string,
    id: string
};

export function SelectComponent(props: SelectComponentProps) {

  const { data : listType } = useQuery<ImmobileTypesProps>({
    queryKey: ['listType'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3001/immobile/listTypes');
      
      return data;
    },
  });
  
  function selectImmobliType(data: string){
    props.immobliType(data);
  }
  
  return(
    <Select.Root onValueChange={selectImmobliType} defaultValue='todos'>
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
              <SelectItem value="todos">Todos</SelectItem>
              {listType?.map(({ type, id } : ImmobileTypesProps) => {
                return(
                  <SelectItem key={id} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</SelectItem>
                );
              })} 
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

// eslint-disable-next-line react/display-name
const SelectItem = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => {
  return (
    <Select.Item
      className={classnames(
        // eslint-disable-next-line max-len
        'text-placeholder data-[highlighted]:bg-grayBase relative flex h-6 select-none items-center leading-none data-[disabled]:pointer-events-none data-[highlighted]:outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
});
import * as Select from '@radix-ui/react-select';
import { CaretDown } from 'phosphor-react';
import React, { useContext } from 'react';
import classnames from 'classnames';
import globalContext from '@/context/context';

interface SelectComponentProps{
  immobliType: Function
}

export function SelectComponent(props: SelectComponentProps) {

  const { immobiles } = useContext(globalContext);

  const immobileType : string[] = [];
  immobiles.forEach((immobile) => {
    if(!immobileType.includes(immobile.type?.type!)){
      immobileType.push(immobile.type?.type!);
    }
  });

  function selectImmobliType(data: string){
    props.immobliType(data);
  }
  
  return(
    <Select.Root onValueChange={selectImmobliType} defaultValue='todos'>
      <Select.Trigger 
        className='w-80 h-16 border-borderColor border 
        inline-flex items-center justify-between px-3 rounded-md outline-none min-[700px]:w-full'
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
          className='overflow-hidden bg-white rounded-md z-30 w-[--radix-select-trigger-width]'
        >
          <Select.Viewport className='px-2 py-3'>
            <Select.Group>
              <SelectItem value="todos">Todos</SelectItem>
              {immobileType.map((type) => {
                return(
                  <SelectItem key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</SelectItem>
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
        'flex leading-none text-placeholder items-center h-6 relative select-none data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-app',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
});
import * as Select from '@radix-ui/react-select';
import { CaretDown } from 'phosphor-react';
import React from 'react';
import classnames from 'classnames';

interface SelectComponentProps{
  immobliType: Function
}

export function SelectComponent(props: SelectComponentProps) {

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
              <SelectItem value="apartamento">Apartamento</SelectItem>
              <SelectItem value="casa">Casa</SelectItem>
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
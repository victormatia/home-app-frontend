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
    <Select.Root onValueChange={selectImmobliType}>
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
        <Select.Content className='overflow-hidden bg-white rounded-md z-30'>
          <Select.Viewport className='px-2 py-3'>
            <Select.Group>
              <SelectItem value="Apartament">Apartamento</SelectItem>
              <SelectItem value="House">Casa</SelectItem>
              <SelectItem value="1">Casa</SelectItem>
              <SelectItem value="2">Casa</SelectItem>
              <SelectItem value="3">Casa</SelectItem>
              <SelectItem value="4">Casa</SelectItem>
              <SelectItem value="5">Casa</SelectItem>
              <SelectItem value="6">Casa</SelectItem>
              <SelectItem value="7">Casa</SelectItem>
              <SelectItem value="8">Casa</SelectItem>
              <SelectItem value="10">Casa</SelectItem>
              <SelectItem value="9">Casa</SelectItem>
              <SelectItem value="11">Casa</SelectItem>
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
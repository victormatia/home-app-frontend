import * as ToggleGroup from '@radix-ui/react-toggle-group';

export function QuantitySelector(){
  return(
    <ToggleGroup.Root 
      type="single"
      defaultValue="1"
      className='flex gap-3 text-black text-2xl'
    >
      <ToggleGroup.Item 
        className='flex items-center justify-center border border-borderColor w-10 h-10 rounded-md p-2 
        data-[state=on]:border-blue-600 data-[state=on]:border-2' 
        value='1'
      >
        1
      </ToggleGroup.Item>
      <ToggleGroup.Item 
        className='flex items-center justify-center border border-borderColor w-10 h-10 rounded-md p-2 
        data-[state=on]:border-blue-600 data-[state=on]:border-2' 
        value='2'>
        2
      </ToggleGroup.Item>
      <ToggleGroup.Item 
        className='flex items-center justify-center border border-borderColor w-10 h-10 rounded-md p-2 
        data-[state=on]:border-blue-600 data-[state=on]:border-2' 
        value='3'>
        3
      </ToggleGroup.Item>
      <ToggleGroup.Item 
        className='flex items-center justify-center border border-borderColor w-10 h-10 rounded-md p-2 
        data-[state=on]:border-blue-600 data-[state=on]:border-2' 
        value='+4'>
        +4
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
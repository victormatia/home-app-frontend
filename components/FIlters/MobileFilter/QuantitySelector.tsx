import * as ToggleGroup from '@radix-ui/react-toggle-group';

interface QuantitySelectorComponentProps{
  quantitySelect: Function
}

export function QuantitySelector(props: QuantitySelectorComponentProps){

  function SelectQuantity(data: string){
    props.quantitySelect(Number(data));
  }

  return(
    <ToggleGroup.Root 
      type="single"
      defaultValue="todos"
      onValueChange={SelectQuantity}
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
  );
}
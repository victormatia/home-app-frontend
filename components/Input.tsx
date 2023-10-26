import { ComponentProps } from 'react';

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props}></div>;
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 w-full outline-none"
      {...props}
    />
  );
}

type InputRootPorps = ComponentProps<'div'>

export function InputRoot(props: InputRootPorps) {
  return (
    <div
      className="flex w-full items-center gap-2 
      border border-borderColor bg-transparent rounded-md px-3 py-2 shadow-sm 
      focus-within:ring-1 focus-within:border-appBlue"
      {...props}
    ></div>
  );
}
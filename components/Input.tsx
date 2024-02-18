import { ComponentProps, LegacyRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge'

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props}></div>;
}

type InputControlProps = ComponentProps<'input'>

function InputControl({ className, ...props }: InputControlProps, ref: LegacyRef<HTMLInputElement>) {
  return (
    <input
      className={ twMerge("flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-400 w-full outline-none", className) }
      {...props}
      ref={ref}
    />
  );
}

const Input = forwardRef(InputControl);

export default Input;

type InputRootPorps = ComponentProps<'div'>

export function InputRoot({ className, ...props }: InputRootPorps) {
  return (
    <div
      className={twMerge("flex w-full items-center gap-2 bg-[#FFF] rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:border-primaryBlue", className)}
      {...props}
    ></div>
  );
}
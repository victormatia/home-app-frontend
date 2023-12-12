import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [],

  variants: {
    variant: {
      primary:
      'bg-gradientBlue font-semibold text-lg p-3 text-white rounded-md w-full',
      openFilter:
      'border-[#C1C1C1] border-l text-center font-medium text-[#424242] text-base px-5 h-full min-[1466px]:hidden',
      cleanFilter:
      'font-semibold text-lg p-3 rounded-md w-full hover:bg-gray-200 shadow-lg',
      save:
      'text-grayIcon',
      card:
      'flex gap-2 w-32 h-10 bg-gradientBlue rounded-md text-white shadow-xl hover:opacity-80 transition-all',
      filter:
      'flex justify-between items-center text-[#676767] min-[700px]:hidden ',
      mostUsedFilters:
      "rounded-2xl bg-[#C1C1C1] text-white py-1 px-3",
      mostUsedFiltersClicked:[
      "rounded-2xl bg-primaryBlue text-white py-1 px-3 font-medium",
      "before:bg-[#FF6F6F] before:text-white before:flex before:items-center before:justify-center",  
      "before:content-['\\2716'] before:absolute before:top-[-3px] before:right-[-3px] before:rounded-full before:w-4 before:h-4 before:text-[10px] before:p-2"
      ],
      talkToOwner:
      'bg-grayTitle w-full py-4 text-white rounded-md'
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}
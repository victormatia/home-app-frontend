import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: ['rounded-md text-white'],

  variants: {
    variant: {
      primary:
      'bg-gradientBlue',
      secondary:
      'bg-grayTitle ',
      tertiary:
      "bg-[#C1C1C1]",
      ghost:
      'bg-transparent text-grayTitle hover:bg-gray-200',
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
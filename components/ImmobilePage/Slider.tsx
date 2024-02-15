'use client'
import { Button } from "../Button"
import { CaretLeft, CaretRight } from "phosphor-react"
import { TCard } from "@/types"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


export default function Slider({ immobile }: TCard ) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    breakpoints:{
      '(max-width:700px)':{
        slides:{
          perView:1
        },
      },
    },
    slides:{
      perView: 2.5,
    },
    loop:true,
  })
  
  

  return (
      <div className="w-full">
        <figure ref={sliderRef} className="keen-slider">
        {
          immobile?.photos?.map(( {photo} , index ) => {
            return(
              <img
                key={ index }
                src={ photo.url }
                alt={""}
                className={
                  `keen-slider__slide
                  number-slide${index}
                  w-full
                  max-h-[400px]
                  `
                }
              />
            );
          })
        }
      </figure>
        <Button
          variant="ghost"
          data-testid='prevButton'
          className="w-9 h-full flex items-center justify-center left-0 px-2 top-0 absolute hover:bg-lSliderButtonGradient"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
        >
          <CaretLeft size={32} className="text-white font-bold"/>
        </Button>

        <Button
          variant="ghost"
          data-testid='nextButton'
          className="w-9 h-full flex items-center justify-center  left-auto right-px px-2 top-0 absolute hover:cursor-pointer hover:bg-rSliderButtonGradient "
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
            >
             <CaretRight size={32} className="text-white font-bold"/> 
        </Button>
          
       
      </div>

  )
}
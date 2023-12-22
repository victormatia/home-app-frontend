'use client'
import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { CaretLeft, CaretRight } from "phosphor-react"
import { Button } from "./Button"


export default function Slider(props: any) {
  const [loaded, setLoaded] = useState(false)
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
    created() {
      setLoaded(true)
    },
  })


  return (
      <div className="min-[700px]:left-20 relative w-full">
        <figure ref={sliderRef} className="keen-slider  h-96 max-h-screen">

          <div className="keen-slider__slide bg-blue-400">1</div>
          <div className="keen-slider__slide bg-green-400">2</div>
          <div className="keen-slider__slide bg-amber-400">3</div>
          <div className="keen-slider__slide bg-purple-400">4</div>
          <div className="keen-slider__slide bg-rose-400">5</div>
              {/* <Image
                src={ props }
                alt={`immobile photo - ${index}`}
                width={344}
                height={222}
                className={
                  `keen-slider__slide
                  number-slide${index}
                  w-full
                  `
                }
              /> */}
        </figure>
        {loaded && instanceRef.current && (
          <>
            <Button
              variant="ghost"
              className="w-9 h-full flex items-center justify-center left-0 px-2 top-0 absolute hover:bg-lSliderButtonGradient"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            >
              <CaretLeft size={32} />
            </Button>

            <Button
              variant="ghost"
              className="w-9 h-full flex items-center justify-center  left-auto min-[700px]:right-20 right-6 px-2 top-0 absolute hover:cursor-pointer hover:bg-rSliderButtonGradient "
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            >
             <CaretRight size={32}/> 
            </Button>
          </>
        )}
      </div>
  )
}

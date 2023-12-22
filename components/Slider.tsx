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
    slides:{
      perView: 2.5,
    },
    loop:true,
    created() {
      setLoaded(true)
    },
  })


  return (
      <div className=" left-20 relative w-full">
        <figure ref={sliderRef} className="keen-slider h-96 max-h-screen">

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
              className="w-9 h-9 flex items-center justify-center rounded-full left-4 top-1/2 absolute"
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            >
              <CaretLeft size={32} />
            </Button>

            <Button
              variant="ghost"
              className="w-9 h-9 flex items-center justify-center rounded-full left-auto right-24 top-1/2 absolute hover:cursor-pointer"
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

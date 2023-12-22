import Slider from "@/components/Slider"
import { TImmobile } from "@/types"
import axios from "axios"

interface ImmobileProps {
  params: {
    id: string
  }
}

async function getImmobile(id : string): Promise<TImmobile> {
  const response = await axios.get(`http://localhost:3001/immobile/${id}`)

  const immobile = await response.data

  return immobile
}

export default async function Immobile({params} : ImmobileProps ){
  const immobile = await getImmobile(params.id)

  return(
        <Slider props={immobile}/>
  )
}
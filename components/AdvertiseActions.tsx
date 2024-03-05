'use client'

import globalContext from "@/context/context"
import { useContext, useEffect } from "react"
import { Button } from "./Button";
import Link from "next/link";

function AdvertiseActions() {
  const { setCurrPage } = useContext(globalContext);

  useEffect(() => setCurrPage("advertise") , []);

  return (
    <div className='flex gap-2 justify-center p-4'>
        <Button
          variant='ghost'
          className='p-4 border border-zinc-200 hover:shadow-default transition-all'
        >
          <Link href='http://localhost:3000/advertise/propertyRegister'>
            Cadastrar imóvel
          </Link>
        </Button>
        <Button
          variant='ghost'
          className='p-4 border border-zinc-200 hover:shadow-default transition-all'
        >
          <Link href=''>
            Gerenciar imóveis
          </Link>
        </Button>
      </div>
  )
}

export default AdvertiseActions
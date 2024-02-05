import { useState } from "react";
import { Button } from "./Button";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import * as Dialog from '@radix-ui/react-dialog';
import { useUser } from "@auth0/nextjs-auth0/client";
import { X } from "phosphor-react";


export function SaveButton(){
  const [isSaved, setIsSaved] = useState(false);
  const { user } = useUser();
  return(
    <div>

{user ? (
            isSaved === false ? (
              <Button
                variant='ghost'
                className='text-grayIcon'
                onClick={() => setIsSaved(true)}
                data-testid='bookMarkIcon'
              >
                <BsBookmark />
              </Button>
            ): (
              <Button
                variant='ghost'
                className='text-grayIcon'
                onClick={() => setIsSaved(false)}
                data-testid='bookMarkFillIcon'
              >
                <BsBookmarkFill />
              </Button>
            )
          ) : (
            <Dialog.Root>
              <Dialog.Trigger asChild>
              <Button
                variant='ghost'
                className='text-grayIcon'
                data-testid='bookMarkIcon'
              >
                <BsBookmark />
              </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-black/20 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="text-primaryBlue m-0 text-[17px] font-medium">
                  Login necessário para esta ação. 
                </Dialog.Title>
                <Dialog.Description className="text-grayLegend mt-[10px] mb-5 text-[15px] leading-normal">
                  Para salvar um imóvel nos favoritos é necessário estar logado
                </Dialog.Description>
                <Dialog.Close asChild>
                  <a 
                  className="text-primaryBlue hover:bg-secondaryBlue/60 inline-flex h-[35px] items-center justify-center px-[15px] font-medium"
                  href="/api/auth/login"
                  >
                    Para fazer login <span className="text-inherit"> clique aqui </span> 
                  </a>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <button
                  className="text-primaryBlue  absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                  >
                    <X size={16}/>
                  </button>
                </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          )
          }
    </div>
  )
}
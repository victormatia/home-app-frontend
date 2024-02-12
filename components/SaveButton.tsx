import { useState } from "react";
import { Button } from "./Button";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";


export function SaveButton(){
  const [isSaved, setIsSaved] = useState(false);
  return(
    <div>

    {
      isSaved === false ? (
        <Button
        variant='ghost'
        className='text-grayIcon text-lg'
        onClick={() => setIsSaved(true)}
        data-testid='bookMarkIcon'
        >
          <BsBookmark />
        </Button>
      ): (
        <Button
        variant='ghost'
        className='text-grayIcon text-lg'
        onClick={() => setIsSaved(false)}
        data-testid='bookMarkFillIcon'
        >
          <BsBookmarkFill />
        </Button>
      )
    }
    </div>
  )
}
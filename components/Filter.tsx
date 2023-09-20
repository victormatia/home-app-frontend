import { X } from 'phosphor-react';
import { useState } from 'react';

export function Filter(){
  const [open, setOpen] = useState(false);

  function handleCloseFilter(){
    setOpen(true);
  }

  return(
    <div
      data-open={open === false} 
      className="data-[open=false]:hidden z-20 h-screen bg-app"
    >
      <div className='flex justify-between p-6 shadow-md'>
        <button onClick={handleCloseFilter}>
          <X size={15}/>
        </button>

        <span className='text-red-600 font-semibold'>Filtrar</span>
      </div>

      <div>
        <form action="">
          <label htmlFor="imovel-type">Tipo de imóvel</label>
        </form>
      </div>

    </div>
  );
}
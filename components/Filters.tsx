export default function Filters() {
  return (
    <div className='max-[1466px]:hidden  basis-[15%] border border-[#C1C1C1] flex flex-col items-center'>
      <p className='w-full border-[#C1C1C1] border-b p-3 text-center font-medium text-[#424242]'>Filtro</p>

      <label htmlFor="" >
          Nome
      </label>
      <input type='text' />
    </div>
  );
}
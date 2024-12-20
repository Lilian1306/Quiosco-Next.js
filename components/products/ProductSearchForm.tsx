


export default function ProductSearchForm() {
  return (
    <form className="flect items-center">
        <input 
           type='text'
           placeholder="Buscar Producto"
           className="p-2 placeholder-gray-400 w-full"
        />

        <input
           type="submit"
           className="bg-indigo-600 p-2 uppercase text-white cursor-pointer"
           value={'Buscar'}
        />
      
    </form>
  )
}

"use client"

import { useStore } from '@/src/store'


export default function OrderSummary() {
  const order = useStore((state) => state.order)


  return (
    <aside className='lg:h-screen lg:overflow-y-scroll md:-64 lg:w-96 p-5'>
      <h1 className='text-4xl text-center font-black'>Mi Pedido</h1>

      {order.length === 0 ? <p className='text-center my-10' >El Carrito esta vacio</p> : (
        <div className='mt-5'>
          Si hay algo
        </div>
      )}
    </aside>
  )
}

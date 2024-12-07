import { create} from 'zustand'
import type { OrderItem } from './types'
import type { Product } from '@prisma/client'

interface Store {
    order: OrderItem[]
    addToOrder:  (product: Product) => void

}

export const useStore = create<Store>(() => ({
    order: [],
    addToOrder: (product) => {
        console.log('Agregando', product)
    }

}))
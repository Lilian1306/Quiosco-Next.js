import { create} from 'zustand'
import type { OrderItem } from './types'
import type { Product } from '@prisma/client'

interface Store {
    order: OrderItem[]
    addToOrder:  (product: Product) => void

}

export const useStore = create<Store>((set) => ({
    order: [],
    addToOrder: (product) => {
         
        const {categoryId, image, ...data } = product
        set((state) => ({
            order: [...state.order, {
                ...data,
                quantity: 1,
                subtotal: 1 * product.price

            }]
        }))
    }

}))
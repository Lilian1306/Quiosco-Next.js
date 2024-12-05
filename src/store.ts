import { create} from 'zustand'
import type { OrderItem } from './types'

interface Store {
    order: OrderItem[]

}

export const useStore = create<Store>(() => ({
    order: []

}))
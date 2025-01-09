import { createContext } from 'react'

interface CartContextValue {
  addToCart: (productId: number) => void
  cart: Map<number, number>
}

const CartContext = createContext<CartContextValue>({
  addToCart: () => new Map(),
  cart: new Map()
})

export default CartContext

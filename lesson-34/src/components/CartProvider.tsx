import { type ReactNode, useState } from 'react'
import CartContext from '@/contexts/CartContext'

const initialState = new Map()

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Map<number, number>>(initialState)

  function addToCart(productId: number) {
    setCart((currentCart) => {
      const newCart = new Map(currentCart)
      const currentQuantity = newCart.get(productId) ?? 0

      newCart.set(productId, currentQuantity + 1)

      return newCart
    })
  }

  const cartContextValue = {
    addToCart,
    cart
  }

  return (
    <CartContext value={cartContextValue}>
      {children}
    </CartContext>
  )
}

'use client'

import { useContext } from 'react'
import CartContext from '@/contexts/CartContext'
import styles from '@/styles/components.module.css'

export default function AddToCartButton({ productId }: { productId: number }) {
  const { addToCart } = useContext(CartContext)

  return (
    <button type="button" className={styles.button} onClick={() => addToCart(productId)}>Add to cart</button>
  )
}

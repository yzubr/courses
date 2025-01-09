'use client'

import { useContext } from 'react'
import Link from 'next/link'
import styles from '@/app/layout.module.css'
import CartContext from '@/contexts/CartContext'

export default function Header() {
  const { cart } = useContext(CartContext)
  const productsCount = Array.from(cart.values()).reduce((sum, amount) => sum + amount, 0)

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link href="/">Dashboard</Link></li>
          <li><Link href="/categories">Categories</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li>{`Cart ${productsCount}`}</li>
        </ul>
      </nav>
    </header>
  )
}

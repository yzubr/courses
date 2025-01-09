'use client'

import type { ReactNode } from 'react'
import 'the-new-css-reset'
import '@fontsource-variable/inter'
import '@/styles/app.css'
import CartProvider from '@/components/CartProvider'
import Header from '@/components/Header'
import styles from './layout.module.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className={styles.layout}>
            <Header />
            <main className={styles.contents}>
              {children}
            </main>
          </div>
        </CartProvider>
      </body>
    </html>
  )
}

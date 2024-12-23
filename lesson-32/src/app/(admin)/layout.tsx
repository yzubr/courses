import type { ReactNode } from 'react'
import Link from 'next/link'
import 'the-new-css-reset'
// import '@/style/app.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/admin">Dashboard</Link></li>
              <li><Link href="/admin/categories">Categories</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

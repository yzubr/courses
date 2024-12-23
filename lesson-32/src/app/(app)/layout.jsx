import Header from '@/app/(app)/components/Header'
import 'the-new-css-reset'
import './style/app.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

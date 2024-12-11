import 'the-new-css-reset'
import './style/app.css'
import Header from './components/Header.jsx'

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

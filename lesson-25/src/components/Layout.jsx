import { Link, Outlet } from 'react-router'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/categories">categories</Link></li>
            <li><Link to="/contacts">contacts</Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer />
    </>
  )
}

import { Link, Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/categories'>categories</Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer></footer>
    </>)
}

import styles from './Header.module.css'

export default function Header() {
  return (
    <header>
      <nav>
        <ul className={styles.navigation}>
          <li><a href="/">Главная</a></li>
          <li><a href="/blog">Блог</a></li>
          <li><a href="/contacts">Контакты</a></li>
        </ul>
      </nav>
    </header>
  )
}

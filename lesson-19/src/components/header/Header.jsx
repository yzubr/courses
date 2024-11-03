import styles from './Header.module.css'
export default function Header() {
  return (
    <header>
      <nav>
        <ul className={ styles.navigation }>
          <li className={styles['navigation-item']}><a href="#">Главная</a></li>
          <li className={styles['navigation-item']}><a href="#">Блог</a></li>
          <li className={styles['navigation-item']}><a href="#">Контакты</a></li>
        </ul>
      </nav>
    </header>
  )
}

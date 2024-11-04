import styles from './Footer.module.css'
import headerStyles from '../header/Header.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>2023. Разработано компанией <a href="#" className={headerStyles['navigation-item']}>«Гарцующий пони»</a></p>
    </footer>
  )
}

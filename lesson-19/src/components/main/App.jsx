import styles from './App.module.css'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'

export default function Section() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles['main-title']}>Курсы компании &quot;Гарцующий пони&quot;</h1>
        <ul className={styles['card-list']}>
          <li className={styles.card}>
            <header className={styles['card-header']}>
              <h2>SEO для начинающих</h2>
              <p>Иван Иванович</p>
            </header>
            <div className={styles['card-main-content']}>
              <img src="../src/img/image1.png" alt="seo"/>
              <p>Благодаря этому курсу вы научитесь задавливать конкурентов с помощью
                ссылочной массы, а не качественного контента.</p>
            </div>
            <footer className={styles['card-footer']}>
              <p>13 февраля 2023</p>
            </footer >
          </li>
          <li className={styles.card}>
            <header className={styles['card-header']}>
              <h2>WordPress разработка</h2>
              <p>Ольга Ольгина</p>
            </header>
            <div className={styles['card-main-content']}>
              <img src="../src/img/image2.png" alt="Worldpress course"/>
              <p >WordPress — топ за свои деньги. Изучите его,
                чтобы стать востребованным фрилансером.</p>
            </div>
            <footer className={styles['card-footer']}>
              <p>23 октября 2023</p>
            </footer>
          </li>
          <li className={styles.card}>
            <header className={styles['card-header']}>
              <h2>JavaScript для чайников.</h2>
              <p>М. Михайловских</p>
            </header>
            <div className={styles['card-main-content']}>
              <img src="../src/img/image3.png" alt="JavaScript course"/>
              <p>Курс подойдёт для любых чайников: электрических, газовых
                и даже для кастрюлек, временно подменяющих сломанный чайник.</p>
            </div>
            <footer className={styles['card-footer']}>
              <p>30 ноября 2023</p>
            </footer>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  )
}

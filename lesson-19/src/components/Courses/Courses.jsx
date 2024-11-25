import courses from '../../data/courses.js'
import styles from './Courses.module.css'

export default function Courses() {
  return (
    <main className={styles.courses}>
      <h1>Курсы компании «Гарцующий пони»</h1>
      <ul className={styles['courses-list']}>
        {courses.map((course) => (
          <li key={course.title}>
            <a href={`/${course.slug}`}>
              <article className={styles.course}>
                <header>
                  <h2>{course.title}</h2>
                  <address>{course.author}</address>
                </header>
                <img alt={course.image.alt} src={course.image.url} />
                <p>{course.description}</p>
                <footer>
                  <p>{course.date}</p>
                </footer>
              </article>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

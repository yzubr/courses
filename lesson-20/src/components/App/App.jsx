import products from '/src/data/products.js'
import CardRendering from '../'
import styles from './App.module.css'

export default function App() {
  return (
    <section className={styles.section}>
      products.map((product) => <CardRendering />)
    </section>
  )
}

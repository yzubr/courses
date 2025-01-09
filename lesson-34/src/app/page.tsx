import Image from 'next/image'
import tunaImage from '@/assets/images/tuna.jpg'
import getCategoriesCount from '@/queries/get-categories-count'
import getProductsCount from '@/queries/get-products-count'
import styles from '@/styles/components.module.css'

export default async function Page() {
  const categoriesCount = await getCategoriesCount()
  const productsCount = await getProductsCount()

  return (
    <>
      <header className={styles.header}>
        <h1>Welcome to the Shop 👋</h1>
      </header>
      <ul className={styles.grid}>
        <li>
          <section>
            <h2>Shop Stats</h2>
            <p>Categories: <span className={styles.highlight}>{categoriesCount}</span></p>
            <p>Products: <span className={styles.highlight}>{productsCount}</span></p>
          </section>
        </li>
        <li>
          <section>
            <h2>Some Tuna</h2>
            <p>Optimized tuna image with Next.js Image component</p>
            <Image src={tunaImage} alt="Tuna jumping out of water" placeholder="blur" />
          </section>
        </li>
      </ul>
    </>
  )
}

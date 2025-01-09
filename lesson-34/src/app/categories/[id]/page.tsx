import getCategoryId from '@/queries/get-category-by-id'
import getProductsByCategoryId from '@/queries/get-products-by-category-id'
import styles from '@/styles/components.module.css'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id)
  const [category, products] = await Promise.all([
    getCategoryId(id),
    getProductsByCategoryId(id)
  ])

  return (
    <>
      <header className={styles.header}>
        <h1>{category.name}: <span className={styles.highlight}>{products.length}</span></h1>
      </header>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{`- ${product.name}`}</li>
        ))}
      </ul>
    </>
  )
}

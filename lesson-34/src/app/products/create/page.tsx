import CreateProductForm from '@/components/CreateProductForm'
import getCategories from '@/queries/get-categories'
import styles from '@/styles/components.module.css'

export default async function Page() {
  const categories = await getCategories()

  return (
    <>
      <header className={styles.header}>
        <h1>Create product</h1>
      </header>
      <CreateProductForm categories={categories} />
    </>
  )
}

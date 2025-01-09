import Link from 'next/link'
import getCategories from '@/queries/get-categories'
import styles from '@/styles/components.module.css'

export default async function Page() {
  const categories = await getCategories()

  return (
    <>
      <header className={styles.header}>
        <h1>Categories List</h1>
        <Link href="/categories/create">Create category</Link>
      </header>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`}>{`- ${category.name}`}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

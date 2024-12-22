import Link from 'next/link'
import database from '@/modules/database.ts'

export default async function Page() {
  const categories = await database.selectFrom('categories').selectAll().execute()

  console.log(categories)

  return (
    <>
      <h1>List of Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

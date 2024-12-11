import { Suspense } from 'react'
import Link from 'next/link'

export default async function Page() {
  const response = await fetch('https://happy-store.spacehub.workers.dev/api/categories')
  const categories = await response.json()

  return (
    <>
      <h1>List of Categories</h1>
      <Suspense fallback={<p>...Loading...</p>}>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`/categories/${category.slug}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </Suspense>
      <Link href="/categories/create"><button type="button">Create category</button></Link>
    </>
  )
}

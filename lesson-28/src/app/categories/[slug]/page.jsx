import { Suspense } from 'react'
import Link from 'next/link'

export default async function Page({ params }) {
  const { slug } = await params
  const response = await fetch(`https://happy-store.spacehub.workers.dev/api/categories/slug/${slug}`)
  const category = await response.json()

  return (
    <>
      <title>{category.name}</title>
      <Suspense fallback={<p>...Loading...</p>}>
        <h1>{category.name}</h1>
        <h2>Details</h2>
        <p>id: {category.id}</p>
        <p>slug: {category.slug}</p>
        <Link href={`/categories/${category.slug}/edit`}>Edit category</Link>
      </Suspense>
    </>
  )
}

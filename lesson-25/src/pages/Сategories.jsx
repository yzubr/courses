import { Link } from 'react-router'
import useSWR from 'swr'

async function fetcher(url) {
  const response = await fetch(url)

  return await response.json()
}

export default function Categories() {
  const { data: categories, error, isLoading } = useSWR(
    'https://happy-store.vercel.app/api/categories',
    fetcher
  )

  if (isLoading) {
    return <p>...</p>
  }

  if (error) {
    return <p>Unexpected error, please try again later</p>
  }

  return (
    <>
      <title>Categories</title>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

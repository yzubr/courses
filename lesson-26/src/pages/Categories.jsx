import { Link } from 'react-router'
import useSWR from 'swr'
import fetcher from '../utilities/fetcher.js'

export default function Categories() {
  const { data: categories, error, isLoading } = useSWR(
    'https://happy-store.spacehub.workers.dev/api/categories',
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
      <Link to="/categories/create">Create a new caterory</Link>
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

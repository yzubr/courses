import { Link, useParams } from 'react-router'
import useSWR from 'swr'
import fetcher from '../utilities/fetcher.js'

export default function Category() {
  const { slug } = useParams()

  const { data: category, error, isLoading } = useSWR(
    `https://happy-store.spacehub.workers.dev/api/categories/slug/${slug}`,
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
      <title>{category.name}</title>
      <h1>{category.name}</h1>
      <h2>category details</h2>
      <ul>
        {Object.entries(category).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
      <button type="button">
        <Link to={`/categories/${slug}/edit`}>Edit category</Link>
      </button>
    </>
  )
}

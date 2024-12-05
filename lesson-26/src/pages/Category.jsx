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
      <title>{slug}</title>
      <h1>category - {slug}</h1>
      <h2>category details</h2>
      {Object.entries(category).map(([key, value]) => <p key={key}>{key}:{value}</p>)}
      <Link
        to={{ pathname: `/categories/${slug}/edit` }}
        state={{ id: category.id }}
      >
        Edit caterory
      </Link>
    </>
  )
}

import { useParams } from 'react-router'
import useSWR from 'swr'

async function fetcher(url) {
  const response = await fetch(url)

  return response.json()
}

export default function Category() {
  const { slug } = useParams()

  const { data: category, error, isLoading } = useSWR(
    `https://happy-store.vercel.app/api/categories/${slug}`,
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
      {Object.entries(category).map(([key, value]) => <p key={category.id}>{key}:{value}</p>)}
    </>
  )
}

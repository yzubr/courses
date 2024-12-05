import { useActionState } from 'react'
import { useNavigate, useParams } from 'react-router'
import useSWR from 'swr'
import fetcher from '../utilities/fetcher.js'

export default function EditCategory() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const { data: category, error, isLoading } = useSWR(
    `https://happy-store.spacehub.workers.dev/api/categories/slug/${slug}`,
    fetcher
  )

  const [, submitAction, isPending] = useActionState(
    async (_, formData) => {
      if (formData.get('name').length && formData.get('slug').length) {
        const responce = await fetch(`https://happy-store.spacehub.workers.dev/api/categories/${category.id}`, {
          body: JSON.stringify({
            name: formData.get('name'),
            slug: formData.get('slug')
          }),
          headers: { 'Content-Type': 'application/json' },
          method: 'PATCH'
        })

        if (responce.ok) {
          navigate(`/categories/${formData.get('slug')}`)
        }
      }
    },
    null
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Unexpected error, please try again later</p>
  }

  return (
    <>
      <title>Edit category</title>
      <h1>Edit category</h1>
      <form action={submitAction}>
        <div>
          <label htmlFor="name">Edit Name</label>
          <input type="text" name="name" id="name" defaultValue={category.name} />
        </div>
        <div>
          <label htmlFor="slug">Edit Slug</label>
          <input type="text" name="slug" id="slug" defaultValue={category.slug} />
        </div>
        <button type="submit" disabled={isPending}>Edit category</button>
      </form>
    </>
  )
}

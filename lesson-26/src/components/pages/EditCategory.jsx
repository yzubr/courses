import { useActionState } from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function CreateCategory() {
  const location = useLocation()
  const { state } = location
  const categoryId = state.id
  const navigate = useNavigate()
  const [, submitAction, isPending] = useActionState(
    async (_, formData) => {
      if (formData.get('name').length && formData.get('slug').length) {
        const responce = await fetch(`https://happy-store.vercel.app/api/categories/${categoryId}`, {
          body: JSON.stringify({
            name: formData.get('name'),
            slug: formData.get('slug')
          }),
          headers: { 'Content-Type': 'application/json' },
          method: 'PATCH'
        })

        if (responce.ok) {
          navigate('/categories')
        }
      }
    },
    null
  )

  return (
    <>
      <title>Edit category</title>
      <h1>Edit category</h1>
      <form action={submitAction}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="slug">Slug</label>
          <input type="text" name="slug" id="slug" />
        </div>
        <button type="submit" disabled={isPending}>Edit category</button>
      </form>
    </>
  )
}

import { useActionState } from 'react'
import { useNavigate } from 'react-router'

export default function CreateCategory() {
  const navigate = useNavigate()
  const [, submitAction, isPending] = useActionState(
    async (_, formData) => {
      if (formData.get('name').length && formData.get('slug').length) {
        const responce = await fetch('https://happy-store.spacehub.workers.dev/api/categories', {
          body: JSON.stringify({
            name: formData.get('name'),
            slug: formData.get('slug')
          }),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST'
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
      <title>Create a new category</title>
      <h1>Create a new category</h1>
      <form action={submitAction}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="slug">Slug</label>
          <input type="text" name="slug" id="slug" />
        </div>
        <button type="submit" disabled={isPending}>Create category</button>
      </form>
    </>
  )
}

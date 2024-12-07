import { useActionState, useState } from 'react'
import { useNavigate } from 'react-router'
import { flatten, minLength, object, pipe, safeParse, string } from 'valibot'

const schema = object({
  name: pipe(
    string('Must be a string'),
    minLength(4, 'Must be at least 4 characters')
  ),
  slug: pipe(
    string('Must be a string'),
    minLength(4, 'Must be at least 4 characters')
  )
})

export default function CreateCategory() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [, submitAction, isPending] = useActionState(
    async (_, formData) => {
      const name = formData.get('name')
      const slug = formData.get('slug')
      const { issues, output: data, success } = safeParse(schema, { name, slug })

      if (success) {
        const responce = await fetch('https://happy-store.spacehub.workers.dev/api/categories', {
          body: JSON.stringify({
            name: data.name,
            slug: data.slug
          }),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST'
        })

        if (responce.ok) {
          navigate('/categories')
        }
      }
      const errorMessages = Object.fromEntries(
        Object.entries(flatten(issues).nested).map(([field, [error]]) => ([field, error]))
      )
      setErrors(errorMessages)
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
          {errors.name && (<p>{errors.name}</p>)}
        </div>
        <div>
          <label htmlFor="slug">Slug</label>
          <input type="text" name="slug" id="slug" />
          {errors.slug && (<p>{errors.slug}</p>)}
        </div>
        <button type="submit" disabled={isPending}>Create category</button>
      </form>
    </>
  )
}

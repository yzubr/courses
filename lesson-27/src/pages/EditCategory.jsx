import { useActionState, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import useSWR from 'swr'
import { flatten, minLength, object, pipe, safeParse, string } from 'valibot'
import fetcher from '../utilities/fetcher.js'

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

export default function EditCategory() {
  const [errors, setErrors] = useState({})
  const { slug: paramSlug } = useParams()
  const navigate = useNavigate()
  const { data: category, error, isLoading } = useSWR(
    `https://happy-store.spacehub.workers.dev/api/categories/slug/${paramSlug}`,
    fetcher
  )
  const [, submitAction, isPending] = useActionState(
    async (_, formData) => {
      const name = formData.get('name')
      const slug = formData.get('slug')
      const { issues, output, success } = safeParse(schema, { name, slug })
      if (success) {
        const response = await fetch(`https://happy-store.spacehub.workers.dev/api/categories/${category.id}`, {
          body: JSON.stringify({
            name: output.name,
            slug: output.slug
          }),
          headers: { 'Content-Type': 'application/json' },
          method: 'PATCH'
        })

        if (response.ok) {
          navigate(`/categories/${output.slug}`)
        } else {
          const serverError = await response.json()
          const serverErrorMessage = serverError.detail
          setErrors({ server: serverErrorMessage })
        }
      } if (issues) {
        const errorMessages = Object.fromEntries(
          Object.entries(flatten(issues).nested).map(([field, [error]]) => ([field, error]))
        )
        setErrors(errorMessages)
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
        {errors.server && (<p>{errors.server}</p>)}
        <div>
          <label htmlFor="name">Edit Name</label>
          <input type="text" name="name" id="name" defaultValue={category.name} />
          {errors.name && (<p>{errors.name}</p>)}
        </div>
        <div>
          <label htmlFor="slug">Edit Slug</label>
          <input type="text" name="slug" id="slug" defaultValue={category.slug} />
          {errors.slug && (<p>{errors.slug}</p>)}
        </div>
        <button type="submit" disabled={isPending}>Edit category</button>
      </form>
    </>
  )
}

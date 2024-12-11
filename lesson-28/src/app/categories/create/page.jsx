'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
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

export default function CreateCategoryPage() {
  const [errors, setErrors] = useState({})
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrors({})

    const formData = new FormData(event.target)
    const name = formData.get('name')
    const slug = formData.get('slug')

    const { issues, output: data, success } = safeParse(schema, { name, slug })

    if (success) {
      const response = await fetch('https://happy-store.spacehub.workers.dev/api/categories', {
        body: JSON.stringify({
          name: data.name,
          slug: data.slug
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      })

      if (response.ok) {
        router.push('/categories')
      } else {
        const serverError = await response.json()
        setErrors(serverError.errors)
      }
    } else {
      const errorMessages = issues && issues.nested
        ? Object.fromEntries(
          Object.entries(flatten(issues).nested).map(([field, [error]]) => ([field, error]))
        )
        : {}
      setErrors(errorMessages)
    }
  }

  return (
    <>
      <title>Create a new category</title>
      <h1>Create a new category</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="slug">Slug</label>
          <input type="text" name="slug" id="slug" />
          {errors.slug && <p>{errors.slug}</p>}
        </div>
        {/* {errors.server && <p>{errors.server}</p>} */}
        <button type="submit">Create category</button>
      </form>
    </>
  )
}

'use client'

import { Suspense, use, useEffect, useState } from 'react'
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

export default function EditCategory({ params }) {
  const [errors, setErrors] = useState({})
  const [category, setCategory] = useState(null)
  const router = useRouter()
  const { slug: paramSlug } = use(params)

  useEffect(() => {
    const fetchCategory = async () => {
      if (paramSlug) {
        const response = await fetch(`https://happy-store.spacehub.workers.dev/api/categories/slug/${paramSlug}`)
        if (response.ok) {
          const data = await response.json()
          setCategory(data)
        } else {
          setErrors({ server: 'response.errors' })
        }
      }
    }
    fetchCategory()
  }, [paramSlug])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrors({})

    const formData = new FormData(event.target)
    const name = formData.get('name')
    const slug = formData.get('slug')

    const { issues, output: data, success } = safeParse(schema, { name, slug })

    if (success && category) {
      const response = await fetch(`https://happy-store.spacehub.workers.dev/api/categories/${category.id}`, {
        body: JSON.stringify({
          name: data.name,
          slug: data.slug
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'PATCH'
      })

      if (response.ok) {
        router.push(`/categories/${data.slug}`)
      } else {
        const serverError = await response.json()
        setErrors(serverError.errors)
      }
    } else if (issues) {
      const errorMessages = Object.fromEntries(
        Object.entries(flatten(issues).nested).map(([field, [error]]) => ([field, error]))
      )
      setErrors(errorMessages)
    }
  }

  if (!category) {
    return <p>Loading...</p>
  }

  return (
    <>
      <title>Edit category</title>
      <h1>Edit category</h1>
      <Suspense fallback={<p>...Loading...</p>}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Edit Name</label>
            <input type="text" name="name" id="name" defaultValue={category.name} />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="slug">Edit Slug</label>
            <input type="text" name="slug" id="slug" defaultValue={category.slug} />
            {errors.slug && <p>{errors.slug}</p>}
          </div>
          <button type="submit">Edit category</button>
        </form>
      </Suspense>
    </>
  )
}

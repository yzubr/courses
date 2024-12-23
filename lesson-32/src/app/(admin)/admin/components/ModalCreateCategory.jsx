'use client'

import { useActionState } from 'react'
import createCategory from '@/action/create-category'

export default function ModalCreateCategory() {
  const [formState, formAction] = useActionState(createCategory, {
    errors: {},
    values: {}
  })

  return (
    <>
      <h2>Add New Category</h2>
      <form action={formAction}>
        <div>
          <input type="text" name="name" placeholder="Enter name" />
          {formState.errors.name && <p>{formState.errors.name}</p>}
        </div>
        <div>
          <input type="text" name="slug" placeholder="Enter slug" />
          {formState.errors.name && <p>{formState.errors.name}</p>}
        </div>
        <button type="submit">Create category</button>
      </form>
    </>
  )
}

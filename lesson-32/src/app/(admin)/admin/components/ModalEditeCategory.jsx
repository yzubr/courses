'use client'

import { useActionState } from 'react'
import editCategoryById from '../../../../action/edit-category-by-id'

export default function ModalEditeCategory() {
  const [formState, formAction] = useActionState(editCategoryById, {
    errors: {},
    values: {}
  })

  return (
    <>
      <h2>Edit Category</h2>
      <form action={formAction}>
        <div>
          <input type="text" name="name" placeholder="Enter name" />
          {formState.errors.name && <p>{formState.errors.name}</p>}
        </div>
        <div>
          <input type="text" name="slug" placeholder="Enter slug" />
          {formState.errors.name && <p>{formState.errors.name}</p>}
        </div>
        <button type="submit">Edite category</button>
      </form>
    </>
  )
}

'use client'

import { useActionState } from 'react'
import createProduct from '@/actions/create-product'
import type getCategories from '@/queries/get-categories'
import styles from '@/styles/components.module.css'

interface FormState {
  error: string | null
}

const initialState: FormState = {
  error: null
}

export default function CreateProductForm({
  categories
}: {
  categories: Awaited<ReturnType<typeof getCategories>>
}) {
  const [formState, formAction, isPending] = useActionState(createProduct, initialState)

  return (
    <form action={formAction}>
      {formState.error && <p className={styles.error}>{formState.error}</p>}
      <div className={styles.select}>
        <select name="category" defaultValue="">
          <option value="" disabled>Select category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className={styles.input}>
        <input type="text" name="name" placeholder="Enter name" />
      </div>
      <div className={styles.input}>
        <input type="file" name="image" />
      </div>
      <button type="submit" className={styles.button} disabled={isPending}>Create product</button>
    </form>
  )
}

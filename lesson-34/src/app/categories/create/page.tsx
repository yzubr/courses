'use client'

import { useActionState } from 'react'
import createCategory from '@/actions/create-category'
import styles from '@/styles/components.module.css'

interface FormState {
  error: string | null
}

const initialState: FormState = {
  error: null
}

export default function Page() {
  const [formState, formAction, isPending] = useActionState(createCategory, initialState)

  return (
    <>
      <header className={styles.header}>
        <h1>Create Category</h1>
      </header>
      <form action={formAction}>
        {formState.error && <p className={styles.error}>{formState.error}</p>}
        <div className={styles.input}>
          <input type="text" name="name" placeholder="Enter name" />
        </div>
        <div className={styles.input}>
          <input type="text" name="slug" placeholder="Enter slug" />
        </div>
        <button type="submit" className={styles.button} disabled={isPending}>Create category</button>
      </form>
    </>
  )
}

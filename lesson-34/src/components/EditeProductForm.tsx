'use client'

import { useActionState } from 'react'
import updateProductAction from '@/actions/update-products' // Обновляем имя для соответствия
import type getCategories from '@/queries/get-categories'
import styles from '@/styles/components.module.css'

interface FormState {
  error: string | null
}

const initialState: FormState = {
  error: null
}

interface UpdateProductFormProps {
  categories: Awaited<ReturnType<typeof getCategories>>,
  currentProduct: {
    id: number,
    categoryId: number,
    name: string,
  },
  hasImage: boolean // Новый пропс для указания наличия изображения
}

export default function UpdateProductForm({
  categories,
  currentProduct,
  hasImage // Деструктурируем новый пропс
}: UpdateProductFormProps) {
  const [formState, formAction, isPending] = useActionState(updateProductAction, initialState)

  return (
    <form action={formAction}>
      {formState.error && <p className={styles.error}>{formState.error}</p>}
      <div className={styles.select}>
        <select name="category" defaultValue={currentProduct.categoryId}>
          <option value="" disabled>Select category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className={styles.input}>
        <input
          type="text"
          name="name"
          defaultValue={currentProduct.name} // Устанавливаем текущее имя продукта
          placeholder="Enter name"
        />
      </div>
      <div className={styles.input}>
        {!hasImage && (
          <input
            type="file"
            name="image"
            placeholder="Upload images"
          />
        )}
      </div>
      <input type="hidden" name="id" value={currentProduct.id} />
      <button type="submit" className={styles.button} disabled={isPending}>Update product</button>
    </form>
  )
}

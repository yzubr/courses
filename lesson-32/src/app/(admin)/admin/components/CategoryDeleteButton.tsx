'use client'

import deleteCategoryById from '@/action/delete-category-by-id'

export default function CategoryDeleteButton({ categoryId }: { categoryId: number }) {
  return (
    <button type="button" onClick={() => deleteCategoryById(categoryId)}>
      Delete Category
    </button>
  )
}

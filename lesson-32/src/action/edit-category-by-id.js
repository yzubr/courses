'use server'

import { redirect } from 'next/navigation'
import database from '@/modules/database'

export default async function deleteCategoryById(_, formData, id) {
  await database
    .updateTable('categories')
    .set({
      name: formData.get('name'),
      slug: formData.get('slug')
    })
    .where('id', '=', id)
    .execute()

  return redirect('/admin/categories')
}

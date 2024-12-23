'use server'

import { redirect } from 'next/navigation'
import database from '@/modules/database'

export default async function deleteCategoryById(id: number) {
  await database
    .deleteFrom('categories')
    .where('id', '=', id)
    .execute()

  return redirect('/admin/categories')
}

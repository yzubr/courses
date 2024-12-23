'use server'

import { redirect } from 'next/navigation'
import { flatten, safeParse } from 'valibot'
import database from '@/modules/database'
import CategorySchema from '@/schema/schema'

export default async function createCategory(_, formData) {
  const values = Object.fromEntries(formData.entries())
  console.log(values)
  const errors = {}
  const { issues, output, success } = safeParse(
    CategorySchema,
    values,
    { abortPipeEarly: true }
  )

  if (!success) {
    const { nested } = flatten(issues)

    if (nested) {
      for (const [field, [fieldError]] of Object.entries(nested)) {
        errors[field] = fieldError
      }
    }

    return {
      errors,
      values
    }
  }

  await database
    .insertInto('categories')
    .values({
      name: output.name,
      slug: output.slug
    })
    .returningAll()
    .executeTakeFirstOrThrow()

  return redirect('/admin/categories')
}

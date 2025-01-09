'use server'

import { redirect } from 'next/navigation'
import { maxLength, minLength, object, pipe, safeParse, string, trim } from 'valibot'
import database from '@/modules/database'

const Schema = object({
  name: pipe(string(), trim(), minLength(3), maxLength(50)),
  slug: pipe(string(), trim(), minLength(3), maxLength(50))
})

export default async function createCategory(_: unknown, formData: FormData) {
  const { output, success } = safeParse(Schema, Object.fromEntries(formData))

  if (!success) {
    return { error: 'Validation error' }
  }

  await database
    .insertInto('categories')
    .values({
      name: output.name,
      slug: output.slug
    })
    .execute()

  return redirect('/categories')
}

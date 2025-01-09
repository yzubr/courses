import database from '@/modules/database'

export default function getCategoryId(id: number) {
  return database
    .selectFrom('categories')
    .select(['id', 'name'])
    .where('id', '=', id)
    .executeTakeFirstOrThrow()
}

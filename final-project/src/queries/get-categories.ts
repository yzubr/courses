import database from '@/modules/database'

export default function getCategories() {
  return database
    .selectFrom('categories')
    .select(['id', 'name'])
    .execute()
}

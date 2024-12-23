import database from '@/modules/database'

export default async function Fetcher() {
  const categoriesData = await database
    .selectFrom('categories')
    .select(['id', 'name'])
    .execute()

  return categoriesData
}

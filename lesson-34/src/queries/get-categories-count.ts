import database from '@/modules/database'

export default async function getCategoriesCount() {
  const { count } = await database
    .selectFrom('categories')
    .select(({ fn }) => fn.count('id').as('count'))
    .executeTakeFirstOrThrow()

  return Number(count)
}

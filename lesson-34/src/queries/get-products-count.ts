import database from '@/modules/database'

export default async function getProductsCount() {
  const { count } = await database
    .selectFrom('products')
    .select(({ fn }) => fn.count('id').as('count'))
    .executeTakeFirstOrThrow()

  return Number(count)
}

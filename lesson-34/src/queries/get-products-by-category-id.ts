import database from '@/modules/database'

export default function getProductsByCategoryId(id: number) {
  return database
    .selectFrom('products')
    .select(['id', 'name'])
    .where('categoryId', '=', id)
    .execute()
}

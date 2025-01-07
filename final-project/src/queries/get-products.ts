import database from '@/modules/database'

export default function getProducts() {
  return database
    .selectFrom('products')
    .innerJoin('prices', 'productId', 'products.id')
    .select([
      'products.id',
      'products.name',
      'prices.lPrice'
    ])
    .execute()
}

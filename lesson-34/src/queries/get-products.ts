import database from '@/modules/database'

export default function getProducts() {
  return database
    .selectFrom('products')
    .leftJoin('images', 'images.id', 'products.imageId')
    .select([
      'products.id',
      'products.name',
      'images.path',
      'images.width',
      'images.height'
    ])
    .execute()
}

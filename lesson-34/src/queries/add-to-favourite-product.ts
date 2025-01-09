import database from '@/modules/database'

interface FavouriteProductData {
  productId: number;
}

export default async function createProduct(data: FavouriteProductData) {
  const createdFavouriteProduct = await database.transaction().execute(async (transaction) => transaction
    .insertInto('favouriteProducts')
    .values({
      productId: data.productId
    })
    .returning(['id'])
    .executeTakeFirstOrThrow())

  return createdFavouriteProduct
}

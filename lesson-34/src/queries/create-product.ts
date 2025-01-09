import database from '@/modules/database'

interface ProductData {
  categoryId: number
  imageHeight: number
  imagePath: string
  imageWidth: number
  name: string
}

export default async function createProduct(data: ProductData) {
  const createdProduct = await database.transaction().execute(async (transaction) => {
    const insertedImage = await transaction
      .insertInto('images')
      .values({
        height: data.imageHeight,
        path: data.imagePath,
        width: data.imageWidth
      })
      .returning(['id'])
      .executeTakeFirstOrThrow()

    const insertedProduct = await transaction
      .insertInto('products')
      .values({
        categoryId: data.categoryId,
        imageId: insertedImage.id,
        name: data.name
      })
      .returningAll()
      .executeTakeFirstOrThrow()

    return insertedProduct
  })

  return createdProduct
}

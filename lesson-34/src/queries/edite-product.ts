import database from '@/modules/database'

interface ProductData {
  categoryId: number
  productId: number // Идентификатор продукта для обновления
  imageHeight: number
  imagePath: string
  imageWidth: number
  name: string
}

export default async function updateProduct(data: ProductData) {
  const updatedProduct = await database.transaction().execute(async (transaction) => {
    // Обновляем изображение
    await transaction
      .updateTable('images')
      .set({
        height: data.imageHeight,
        path: data.imagePath,
        width: data.imageWidth
      })
      .where('id', '=', data.productId) // Предполагается, что у вас есть id изображения
      .execute()

    // Обновляем продукт
    const updatedProductDetails = await transaction
      .updateTable('products')
      .set({
        categoryId: data.categoryId,
        name: data.name
      })
      .where('id', '=', data.productId) // Здесь также предполагается, что у вас есть id продукта
      .returningAll()
      .executeTakeFirstOrThrow()

    return updatedProductDetails
  })

  return updatedProduct
}

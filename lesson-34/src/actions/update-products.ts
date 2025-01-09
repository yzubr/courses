'use server'

import { redirect } from 'next/navigation'
import sharp from 'sharp'
import { file, maxLength, mimeType, minLength, nonEmpty, object, pipe, safeParse, string, transform, trim } from 'valibot'
import supabase from '@/modules/supabase'
import updateProduct from '@/queries/edite-product' // Функция для обновления продукта
import generateFilename from '@/utilities/generate-filename'

// Схема валидации для формы
const Schema = object({
  category: pipe(string(), trim(), nonEmpty(), transform((value) => Number(value))),
  image: pipe(
    file('Please select an image file').optional(), // Делаем поле изображения необязательным
    mimeType(['image/jpeg', 'image/png'], 'Please select a JPEG or PNG file.')
  ),
  name: pipe(string(), trim(), minLength(3), maxLength(50))
})

export default async function updateProductAction(productId: number, formData: FormData) {
  const { output, success } = safeParse(Schema, Object.fromEntries(formData))

  if (!success) {
    return { error: 'Validation error' }
  }

  // Получаем существующий продукт из базы данных
  const { data: existingProduct, error: fetchError } = await supabase
    .from('products')
    .select('*')
    .eq('id', productId)
    .single()

  if (fetchError || !existingProduct) {
    return { error: 'Product not found' }
  }

  let { imagePath } = existingProduct // Сохраняем существующий путь к изображению

  // Если пользователь загрузил новое изображение, обрабатываем его
  if (output.image) {
    const fileBuffer = await output.image.arrayBuffer()
    const resizedImage = await sharp(fileBuffer)
      .resize(1200)
      .toFormat('jpg', { quality: 80 })
      .toBuffer()
    const resizedMetadata = await sharp(resizedImage).metadata()

    if (!resizedMetadata.width || !resizedMetadata.height) {
      return { error: 'Image metadata error' }
    }

    const filename = generateFilename(output.image.name)

    const { data, error: uploadError } = await supabase.storage
      .from('images')
      .upload(`products/${filename}`, resizedImage, { contentType: output.image.type })

    if (uploadError) {
      return { error: 'Image upload error' }
    }

    imagePath = data.path // Обновляем путь к изображению
  }

  // Обновляем информацию о продукте
  await updateProduct({
    categoryId: output.category,
    imageHeight: resizedMetadata.height || existingProduct.imageHeight, // Используем существующие данные, если новое изображение не загружено
    imagePath,
    imageWidth: resizedMetadata.width || existingProduct.imageWidth, // Аналогично для ширины
    name: output.name,
    productId // Передаем идентификатор продукта
  })

  return redirect('/products')
}

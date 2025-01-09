'use server'

import { redirect } from 'next/navigation'
import sharp from 'sharp'
import { file, maxLength, mimeType, minLength, nonEmpty, object, pipe, safeParse, string, transform, trim } from 'valibot'
import supabase from '@/modules/supabase'
import createProduct from '@/queries/create-product'
import generateFilename from '@/utilities/generate-filename'

const Schema = object({
  category: pipe(string(), trim(), nonEmpty(), transform((value) => Number(value))),
  image: pipe(
    file('Please select an image file'),
    mimeType(['image/jpeg', 'image/png'], 'Please select a JPEG or PNG file.')
  ),
  name: pipe(string(), trim(), minLength(3), maxLength(50))
})

export default async function createProductAction(_: unknown, formData: FormData) {
  const { output, success } = safeParse(Schema, Object.fromEntries(formData))

  if (!success) {
    return { error: 'Validation error' }
  }

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

  const { data, error } = await supabase.storage
    .from('images')
    .upload(`products/${filename}`, resizedImage, { contentType: output.image.type })

  if (error) {
    return { error: 'Image upload error' }
  }

  await createProduct({
    categoryId: output.category,
    imageHeight: resizedMetadata.height,
    imagePath: data.path,
    imageWidth: resizedMetadata.width,
    name: output.name
  })

  return redirect('/products')
}

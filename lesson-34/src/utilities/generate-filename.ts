import { customAlphabet } from 'nanoid'
import { alphanumeric } from 'nanoid-dictionary'
import { extname } from 'node:path'

const nanoid = customAlphabet(`${alphanumeric}-`, 12)

export default function generateFilename(initialFilename: string) {
  const filename = nanoid()
  const extension = extname(initialFilename).replace('.', '')

  return `${filename}.${extension}`
}

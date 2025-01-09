import type { ColumnType, GeneratedAlways } from 'kysely'

export interface CategoriesTable {
  id: GeneratedAlways<number>
  name: string
  slug: string
  createdAt: GeneratedAlways<Date>
  updatedAt: ColumnType<Date | null, never, Date>
}

export interface ImagesTable {
  id: GeneratedAlways<number>
  height: number
  path: string
  width: number
  createdAt: GeneratedAlways<Date>
  updatedAt: ColumnType<Date | null, never, Date>
}

export interface ProductsTable {
  id: GeneratedAlways<number>
  categoryId: number
  imageId: number
  name: string
  createdAt: GeneratedAlways<Date>
  updatedAt: ColumnType<Date | null, never, Date>
}

export interface favouriteProductsTable {
  id: GeneratedAlways<number>
  productId: number
  createdAt: GeneratedAlways<Date>
  updatedAt: ColumnType<Date | null, never, Date>
}

export interface Database {
  categories: CategoriesTable
  images: ImagesTable
  products: ProductsTable
}

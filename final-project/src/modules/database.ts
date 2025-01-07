import { CamelCasePlugin, type GeneratedAlways, Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'

export interface CategoriesTable {
  id: GeneratedAlways<number>
  name: string
  createdAt: GeneratedAlways<Date>
}

export interface ImagesTable {
  id: GeneratedAlways<number>
  height: number | null
  path: string
  width: number | null
  createdAt: GeneratedAlways<Date>
}

export interface ProductsTable {
  id: GeneratedAlways<number>
  categoryId: number
  // heroImageId: number
  description: string | null
  name: string
  createdAt: GeneratedAlways<Date>
}

export interface PricesTable {
  id: GeneratedAlways<number>
  productId: number
  lPrice: number
  createdAt: GeneratedAlways<Date>
}

export interface Database {
  categories: CategoriesTable
  images: ImagesTable
  products: ProductsTable
  prices: PricesTable
}

const database = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_CONNECTION_STRING
    })
  }),
  plugins: [
    new CamelCasePlugin({
      maintainNestedObjectKeys: true
    })
  ]
})

export default database

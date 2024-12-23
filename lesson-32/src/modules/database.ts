import { CamelCasePlugin, type GeneratedAlways, Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'

export interface CategoriesTable {
  id: GeneratedAlways<number>
  name: string
  slug: string
  createdAt: GeneratedAlways<Date>
}

export interface Database {
  categories: CategoriesTable
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

import { type Kysely, sql } from 'kysely'

export async function up(database: Kysely<unknown>) {
  await database.schema
    .createTable('favouriteProducts')
    .addColumn('id', 'serial', (colummn) => colummn.primaryKey())
    .addColumn('category_id', 'integer', (column) => (
      column.notNull().references('products.id').onUpdate('cascade').onDelete('cascade')
    ))
    .addColumn('created_at', 'timestamptz', (colummn) => colummn.notNull().defaultTo(sql`now()`))
    .addColumn('updated_at', 'timestamptz')
    .execute()
}

export async function down(database: Kysely<unknown>) {
  await database.schema
    .dropTable('favouriteProducts')
    .execute()
}

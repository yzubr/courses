import CategoryDeleteButton from '@/app/(admin)/admin/components/CategoryDeleteButton'
import CategoryEditButton from '@/app/(admin)/admin/components/CategoryEditButton'
import database from '@/modules/database'

export default async function CategoriesList() {
  const categories = await database
    .selectFrom('categories')
    .select(['id', 'name'])
    .execute()

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          {category.name}
          {' - '}
          <CategoryDeleteButton categoryId={category.id} />
          {' - '}
          <CategoryEditButton categoryId={category.id} />
        </li>
      ))}
    </ul>
  )
}

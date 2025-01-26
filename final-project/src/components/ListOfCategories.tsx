import getCategories from '@/queries/get-categories.ts'

export default async function ListOfCategories() {
  const categories = await getCategories()

  return (
    <>
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button type="button">{category.name}</button>
          </li>
        ))}
      </ul>
    </>
  )
}

import useSWR from 'swr'

const fetcher = async () => {
  const response = await fetch('https://dummyjson.com/recipes')
  const recipesData = await response.json()

  return recipesData.recipes
}

export default function RecipesList({ updateSelectedRecipe }) {
  const { data, error, isLoading } = useSWR('/api/recipes', fetcher)

  function handleButtonClick(id) {
    updateSelectedRecipe(id)
  }

  if (error) {
    return <p>ошибка загрузки</p>
  }
  if (isLoading) {
    return <p>загрузка...</p>
  }

  if (data) {
    return (
      <ul>
        {data.map((recipe) => (
          <li key={recipe.id}>
            <button type="button" onClick={() => handleButtonClick(recipe.id)}>
              {recipe.name}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

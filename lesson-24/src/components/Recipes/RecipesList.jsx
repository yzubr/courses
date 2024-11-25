import useSWR from 'swr'

const fetcher = async () => {
  const response = await fetch('https://dummyjson.com/recipes')
  const recipesData = await response.json()

  return recipesData.recipes
}

export default function RecipesList({ updateSelectedRecepie }) {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)

  function handleButtonClick(id) {
    updateSelectedRecepie(id)
  }

  if (error) {
    return <div>ошибка загрузки</div>
  }
  if (isLoading) {
    return <div>загрузка...</div>
  }

  if (data) {
    return (
      <ul>
        {data.map((recipe) => (
          <li key={recipe.id}>
            <button type='button' onClick={() => handleButtonClick(recipe.id)}>
              {recipe.name}
            </button>
          </li>))
        }
      </ul>

    )
  }
}

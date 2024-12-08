import { useEffect, useState } from 'react'

export default function RecipesList({ updateSelectedRecipe }) {
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch('https://dummyjson.com/recipes')
      const recipesData = await response.json()

      return setRecipes(recipesData.recipes)
    }

    fetchRecipes()
  }, [])

  function handleButtonClick(id) {
    updateSelectedRecipe(id)
  }

  return (
    <ul>
      {recipes && recipes.map((recipe) => (
        <li key={recipe.id}>
          <button type="button" onClick={() => handleButtonClick(recipe.id)}>
            {recipe.name}
          </button>
        </li>
      ))}
    </ul>
  )
}

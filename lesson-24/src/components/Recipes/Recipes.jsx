import { useState } from 'react'
import RecipeDetails from './RecipesDetails.jsx'
import RecipesList from './RecipesList.jsx'

export default function Recipes() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null)

  function updateSelectedRecipe(id) {
    setSelectedRecipeId(id)
  }

  return (
    <section>
      <RecipesList updateSelectedRecipe={updateSelectedRecipe} />
      <RecipeDetails recipeId={selectedRecipeId} />
    </section>
  )
}

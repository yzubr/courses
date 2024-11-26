// import styles from './CategoryItem.module.css'
import { useState } from 'react'
import styles from './Recipes.module.css'
import RecipeDetails from './RecipesDetails.jsx'
import RecipesList from './RecipesList.jsx'

export default function Recipes() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null)

  function updateSelectedRecipe(id) {
    setSelectedRecipeId(id)
  }

  return (
    <section className={styles.recipes}>
      <RecipesList updateSelectedRecipe={updateSelectedRecipe} />
      <RecipeDetails recipeId={selectedRecipeId} />
    </section>
  )
}

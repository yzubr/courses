// import styles from './CategoryItem.module.css'
import { useState } from 'react'
import RecipeDetails from './RecipesDetails.jsx'
import RecipesList from './RecipesList.jsx'

export default function Recipes() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null)

  function updateSelectedRecepie(id) {
    setSelectedRecipeId(id)
  }

  return (
    <>
      <RecipesList updateSelectedRecepie={updateSelectedRecepie} />
      <RecipeDetails recipeId={selectedRecipeId} />
    </>
  )
}

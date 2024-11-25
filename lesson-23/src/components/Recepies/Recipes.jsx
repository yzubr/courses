// import styles from './CategoryItem.module.css'
import { useState } from 'react'
import RecipeDetails from './RecipesDetails.jsx'
import RecipesList from './RecipesList.jsx'

export default function Recipes() {
  const [selectedRecipeId, setSelectedRecepieId] = useState(null)

  function updateSelectedRecepie(id) {
    setSelectedRecepieId(id)
  }

  return (
    <>
      <RecipesList updateSelectedRecepie = {updateSelectedRecepie} />
      <RecipeDetails recipeId={selectedRecipeId}/>
    </>
  )
}

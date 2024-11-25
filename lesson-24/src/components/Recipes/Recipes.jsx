// import styles from './CategoryItem.module.css'
import { useState } from 'react'
import styles from './Recipes.module.css'
import RecipeDetails from './RecipesDetails.jsx'
import RecipesList from './RecipesList.jsx'

export default function Recipes() {
  const [selectedRecipeId, setSelectedRecepieId] = useState(null)

  function updateSelectedRecepie(id) {
    setSelectedRecepieId(id)
  }

  return (
    <section className={styles.recipes}>
      <RecipesList updateSelectedRecepie = {updateSelectedRecepie} />
      <RecipeDetails recipeId={selectedRecipeId}/>
    </section>
  )
}

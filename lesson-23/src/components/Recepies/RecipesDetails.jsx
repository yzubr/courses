// import styles from './CategoryItem.module.css'

import { useEffect, useState } from 'react'

export default function RecipeDetails({ recipeId }) {
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    async function fetchRecipe() {
      if (recipeId) {
        const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
        const recipeData = await response.json()

        setRecipe(recipeData)
      }
    }

    fetchRecipe()
  }, [recipeId])

  return (
    <article>
      {recipe && (
        <p>ingredients: {recipe.ingredients}
        </p>
      )}
    </article>
  )
}

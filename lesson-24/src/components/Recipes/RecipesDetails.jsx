import { useEffect, useState } from 'react'
import styles from './RecipeDetails.module.css'

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
    recipe && (
      <article className={styles['recipe-details']}>
        <h2>{recipe.name}</h2>
        <article>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </article>
        <article>
          <h3>Instruction</h3>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </article>
      </article>
    )
  )
}

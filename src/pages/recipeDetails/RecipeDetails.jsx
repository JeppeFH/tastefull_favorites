import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./recipeDetails.module.css";

const RecipeDetails = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  const fetchRecipeById = async (id) => {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await response.json();
    setRecipe(data);
    console.log(data);
  };

  useEffect(() => {
    fetchRecipeById(id);
  }, [id]);

  return (
    <>
      {recipe && (
        <article className={styles.RecipeDetailsContainer}>
          <div>
            <h1>{recipe.name}</h1>
            <h2>{recipe.mealType}</h2>
            <figure>
              <h4>Forberedelsestid (minutter) :</h4>
              <p>{recipe.prepTimeMinutes}</p>
              <h4>Sværhedsgrad:</h4>
              <p>{recipe.difficulty}</p>
              <h4>Antal serveringer:</h4>
              <p>{recipe.servings}</p>
            </figure>
            <h3>Fremgangsmåde:</h3>
            <p>{recipe.instructions}</p>
            <h3>Ingredienser:</h3>
            <p>{recipe.ingredients}</p>
          </div>
          <img src={recipe.image} alt={recipe.name} />
        </article>
      )}
    </>
  );
};

export default RecipeDetails;

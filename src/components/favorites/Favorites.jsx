import { useEffect, useState } from "react";
import RecipeCard from "../recipeCard/RecipeCard";
import styles from "./favorites.module.css";
import { useFetchFavorites } from "../../hooks/useFetchFavorites";

const Favorites = () => {
  const { recipes } = useFetchFavorites();

  let ratings = recipes.filter((r) => r.rating > 4.8);

  return (
    <section>
      {ratings.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
};

export default Favorites;

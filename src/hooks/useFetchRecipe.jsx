import { useEffect, useState } from "react";

/* Hooks der skal fetche til Recipes.jsx */
const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  /* Filter variable */
  let dinner = recipes.filter((d) => d.mealType.includes("Dinner"));
  let lunch = recipes.filter((d) => d.mealType.includes("Lunch"));
  let breakfast = recipes.filter((d) => d.mealType.includes("Breakfast"));
  let dessert = recipes.filter((d) => d.mealType.includes("Dessert"));

  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes, dinner, lunch, breakfast, dessert };
};

export { useFetchRecipes };

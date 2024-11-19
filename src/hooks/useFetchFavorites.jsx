import { useEffect, useState } from "react";

/* Hooks der skal fetche til Favorites.jsx */
const useFetchFavorites = () => {
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

  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes };
};

export { useFetchFavorites };

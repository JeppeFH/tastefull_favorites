import { FcLike, FcDislike } from "react-icons/fc";
import styles from "./recipeCard.module.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const RecipeCard = ({ recipe }) => {
  const [favorites, setfavorites] = useLocalStorage("Favorites", []);
  const isFavorite = favorites.includes(recipe.id);

  const handleLike = () => {
    /*Tilføjer eller sletter isFavorites fra localstorage*/
    /*  ? = if     : = else*/
    setfavorites((prevFavorites) =>
      isFavorite
        ? prevFavorites.filter((fav) => fav !== recipe.id)
        : [...prevFavorites, recipe.id]
    );
  };

  return (
    <figure className={styles.recipeCard}>
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.name} />
        <h3 className={styles.recipeName}>{recipe.name}</h3>
      </Link>

      {isFavorite ? (
        <FcDislike className="favoriteDislike" size={30} onClick={handleLike} />
      ) : (
        <FcLike className="favoriteLike" size={30} onClick={handleLike} />
      )}
    </figure>
  );
};

export default RecipeCard;

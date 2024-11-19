import PageHeader from "../../components/pageHeader/PageHeader";
import headerImg from "../../assets/header.webp";
import { useEffect, useState } from "react";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import styles from "./recipes.module.css";
import Button from "../../components/button/Button";
import { useFetchRecipes } from "../../hooks/useFetchRecipe";

const Recipes = () => {
  const { recipes, dinner, lunch, breakfast, dessert } = useFetchRecipes();

  /* Tilstand der indeholder de filterede opskrifter */
  const [filtered, setFiltered] = useState([
    ...dinner,
    ...lunch,
    ...breakfast,
    ...dessert,
  ]);

  const [activeFilter, setActiveFilter] = useState(["All"]);

  /* Objekt der indeholder arrays af opskrifter baseret på 'mealType' */
  const filters = {
    All: recipes,
    Dinner: dinner,
    Lunch: lunch,
    Breakfast: breakfast,
    Dessert: dessert,
  };

  /* Håndterer ændring af filter */
  const handleFilterChance = async (filter) => {
    setActiveFilter(filter);
    setFiltered(filters[filter]);
  };

  const recipesArray = filtered?.length > 0 ? filtered : recipes;

  return (
    <article>
      <PageHeader headerImg={headerImg} />
      <div className="mealTypeCategories">
        <Button
          onClick={() => handleFilterChance("All")}
          buttonText="Alle"
        ></Button>
        <Button
          onClick={() => handleFilterChance("Breakfast")}
          buttonText="Morgenmad"
        ></Button>
        <Button
          onClick={() => handleFilterChance("Lunch")}
          buttonText="Middagsmad"
        ></Button>
        <Button
          onClick={() => handleFilterChance("Dinner")}
          buttonText="Aftensmad"
        ></Button>
        <Button
          onClick={() => handleFilterChance("Dessert")}
          buttonText="Dessert"
        ></Button>
      </div>

      <section>
        {recipesArray.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </article>
  );
};

export default Recipes;

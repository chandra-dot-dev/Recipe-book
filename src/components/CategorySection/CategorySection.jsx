import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./CategorySection.css";

const CategorySection = ({ category, recipes, onSelectRecipe }) => {
  return (
    <section className="category-section">
      <h2 className="category-title">{category}</h2>

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onClick={() => onSelectRecipe(recipe)}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

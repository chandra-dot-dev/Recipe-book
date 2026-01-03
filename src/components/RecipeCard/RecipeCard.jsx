import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <div className="recipe-img">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>

      <div className="recipe-info">
        <h3>{recipe.strMeal}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;

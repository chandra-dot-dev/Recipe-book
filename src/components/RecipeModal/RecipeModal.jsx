import React from "react";
import "./RecipeModal.css";

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>×</button>

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="modal-img"
        />

        <h2>{recipe.strMeal}</h2>
        <p className="instructions">{recipe.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeModal;

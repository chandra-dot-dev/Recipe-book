import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import CategorySection from "./components/CategorySection/CategorySection";
import RecipeModal from "./components/RecipeModal/RecipeModal";
import Navabar from "./components/Navabar/Navabar";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [groupedRecipes, setGroupedRecipes] = useState({});
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If searchText is empty, we still want to fetch default recipes (API returns some by default)
    // if (!searchText) { ... } -> Removed to allow default load

    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        );
        const data = await res.json();

        if (!data.meals) {
          setGroupedRecipes({});
          return;
        }

        // GROUP BY CATEGORY
        const grouped = data.meals.reduce((acc, recipe) => {
          const category = recipe.strCategory;
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(recipe);
          return acc;
        }, {});

        setGroupedRecipes(grouped);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchText]);

  return (
    <div>
      <Navabar />
      {/* SEARCH */}
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      {/* LOADING */}
      {loading && <p style={{ textAlign: "center" }}>Loading recipes...</p>}

      {/* RESULTS */}
      {!loading && Object.keys(groupedRecipes).length === 0 && (
        <p style={{ textAlign: "center" }}>No recipes found 🍽️</p>
      )}

      {/* CATEGORY SECTIONS */}
      {Object.entries(groupedRecipes).map(([category, recipes]) => (
        <CategorySection
          key={category}
          category={category}
          recipes={recipes}
          onSelectRecipe={setSelectedRecipe}
        />
      ))}

      {/* MODAL */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
};

export default App;

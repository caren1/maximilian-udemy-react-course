import React, { useState, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const addIngredient = (ingredient) => {
    setIsLoading(true);
    fetch(
      "https://react-hooks-b227a-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((responseData) => {
        const newIngredients = ingredients.concat({
          id: responseData.name,
          ...ingredient,
        });
        setIngredients(newIngredients);
      });
  };

  const removeIngredient = (id) => {
    setIsLoading(true);
    fetch(
      `https://react-hooks-b227a-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        setIsLoading(false);
        const updatedIngredients = ingredients.filter(
          (ingredient) => ingredient.id !== id
        );
        setIngredients(updatedIngredients);
      })
      .catch((error) => {
        setError("Something went wrong", error.message);
        setIsLoading(false);
      });
  };

  const filteredIngredients = useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
  }, []);

  return (
    <div className="App">
      {error && <ErrorModal onClose={() => setError(null)}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredient} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredients} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredient}
        />
      </section>
    </div>
  );
};

export default Ingredients;

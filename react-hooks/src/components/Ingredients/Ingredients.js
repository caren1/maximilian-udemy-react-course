import React, { useState, useCallback, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;

    case "ADD":
      return [...currentIngredients, action.ingredient];

    case "DELETE":
      return currentIngredients.filter(
        (ingredient) => ingredient.id !== action.id
      );

    default:
      break;
  }
};

const Ingredients = () => {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  // const [ingredients, setIngredients] = useState([]);
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
        // const newIngredients = ingredients.concat({
        //   id: responseData.name,
        //   ...ingredient,
        // });
        // setIngredients(newIngredients);
        dispatch({
          type: "ADD",
          ingredient: { id: responseData.name, ...ingredient },
        });
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
        // const updatedIngredients = ingredients.filter(
        //   (ingredient) => ingredient.id !== id
        // );
        // setIngredients(updatedIngredients);
        dispatch({ type: "DELETE", id });
      })
      .catch((error) => {
        setError("Something went wrong", error.message);
        setIsLoading(false);
      });
  };

  const filteredIngredients = useCallback((filteredIngredients) => {
    // setIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredients: filteredIngredients });
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

import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-hooks-b227a-default-rtdb.firebaseio.com/ingredients.json"
    ).then((response) => {
      return response.json()
    })
    .then(responseData => {
      const loadedIngredients = []
      for (let key in responseData) {
        loadedIngredients.push({ id:key, title: responseData[key].title, amount: responseData[key].amount })
      }
      setIngredients(loadedIngredients);
    })
  }, []);

  const addIngredient = (ingredient) => {
    fetch(
      "https://react-hooks-b227a-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
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
    const updatedIngredients = ingredients.filter(
      (ingredient) => ingredient.id !== id
    );
    setIngredients(updatedIngredients);
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredient} />

      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredient}
        />
      </section>
    </div>
  );
};

export default Ingredients;

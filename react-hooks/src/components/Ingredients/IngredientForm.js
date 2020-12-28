import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  // const inputState = useState({ title: '', amount: '' })

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  console.log(title);
  console.log(amount);

  const submitHandler = (event) => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            {/* <input type="text" id="title" value={inputState[0].title} onChange={(event) => inputState[1]((previousInputState) => ({ title: event.target.value, amount: previousInputState.amount }))}/> */}
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            {/* <input type="number" id="amount" value={inputState[0].amount} onChange={(event) => inputState[1]((previousInputState) => ({ amount: event.target.value, title: previousInputState.title }))}/> */}
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;

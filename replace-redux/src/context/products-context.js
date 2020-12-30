import React, { useState } from "react";

const initialState = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

export const ProductsContext = React.createContext({ products: [] });

// 1 - we created a folder containing context component
// 2 - we want to export the above context
// 3 - we also export the component with provider which we want to pass to anything passed to it
// 4 - value for the context provider should be a value we manage in this component
// 5 - then we'll use it in index.js where we previously been using redux and wrap the app with the component
// 6 - by doing that we'll be having an access to conext anywhere in the child components of the 'App'
// 7 - we use the conext by importing 'ProductsContext' from the context folder in the place we want to use it together with useContext from react


export default (props) => {
  const [productsList, setProductsList] = useState(initialState);

  return (
    <ProductsContext.Provider value={{ products: productsList }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

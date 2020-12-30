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

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

// 1 - we created a folder containing context component
// 2 - we want to export the above context
// 3 - we also export the component with provider which we want to pass to anything passed to it
// 4 - value for the context provider should be a value we manage in this component
// 5 - then we'll use it in index.js where we previously been using redux and wrap the app with the component
// 6 - by doing that we'll be having an access to conext anywhere in the child components of the 'App'
// 7 - we use the conext by importing 'ProductsContext' from the context folder in the place we want to use it together with useContext from react
// 8 - to be able to mark the product to favorite we are adding a function
// 9 - we also add it to our ProductsContext in order to be able to use it and also to value of provider so that it is stored in context value, and anywhere we use the context we can use it there
//      -> emiting the changed value in every place

export default (props) => {
  const [productsList, setProductsList] = useState(initialState);

  const toggleFavorite = (productId) => {
    setProductsList((currentProdList) => {
      const prodIndex = currentProdList.findIndex((p) => p.id === productId);
      const newFavStatus = !currentProdList[prodIndex].isFavorite;
      const updatedProducts = [...currentProdList];
      updatedProducts[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

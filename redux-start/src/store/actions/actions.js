export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

// action creators
// are functions that create the action

// for sync code
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const add = (number) => {
  return {
    type: ADD,
    value: number,
  };
};

export const subtract = (number) => {
  return {
    type: SUBTRACT,
    value: number,
  };
};

export const storeResult = (result) => {
  return {
    type: STORE_RESULT,
    result,
  };
};

export const deleteResult = (id) => {
  return {
    type: STORE_RESULT,
    id,
  };
};

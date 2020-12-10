import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

// OPTIONAL CLEANING UP OF REDUCER
// 1 - immutability ; creating utility functions

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    (result) => result.id !== action.id
  );
  return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result }),
      });

    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);

    default:
      return state;
  }
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.STORE_RESULT:
//       return {
//         ...state,
//         results: state.results.concat({ id: new Date(), value: action.result }),
//       };

//     case actionTypes.DELETE_RESULT:
//       // const id = 2;
//       // const newArray = [...state.results]

//       const updatedArray = state.results.filter(
//         (result) => result.id !== action.id
//       );
//       return {
//         ...state,
//         results: updatedArray,
//       };

//     default:
//       return state;
//   }
// };

export default reducer;

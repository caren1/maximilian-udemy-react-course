import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0,
};

// OPTIONAL CLEANING UP OF REDUCER
// 1 - immutability ; creating utility functions

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.INCREMENT:
      return updateObject(state, {
        counter: state.counter + 1,
      });

    case actionTypes.DECREMENT:
      return updateObject(state, {
        counter: state.counter - 1,
      });

    case actionTypes.ADD:
      return updateObject(state, {
        counter: state.counter + action.value,
      });

    case actionTypes.SUBTRACT:
      return updateObject(state, {
        counter: state.counter - action.value,
      });

    default:
      return state;
  }
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.INCREMENT:
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };

//     case actionTypes.DECREMENT:
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };

//     case actionTypes.ADD:
//       return {
//         ...state,
//         counter: state.counter + action.value,
//       };
//     case actionTypes.SUBTRACT:
//       return {
//         ...state,
//         counter: state.counter - action.value,
//       };

//     default:
//       return state;
//   }
// };

export default reducer;

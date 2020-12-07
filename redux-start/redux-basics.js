// node import, since we'll be using this as an example purpose
const redux = require('redux');

const initialState = {
    // it is usually an object, but might be anything else like number
    counter: 0
}

// allows to create new redux store instance
const createStore = redux.createStore;

// Reducer 
    // strongly related to the store, since it takes it the only thing that might update the state in the end
    // might there be multiple reducers, but they will be converted to one anyway
    // must be created / initialized before the store
    // receives two arguments old state and the action
    // must return ONE THING - UPDATED STATE
const rootReducer = (state = initialState, action) => {
    // whenever state is undefined it will take initial state as a default
    return state;
}
 
// Store
    // it needs to be initialized with reducer
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action

// Subscription
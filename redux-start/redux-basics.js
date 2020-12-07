// node import, since we'll be using this as an example purpose
const redux = require('redux');

const initialState = {
    // it is usually an object, but might be anything else like number
    counter: 0
}

// allows to create new redux store instance
const createStore = redux.createStore;

// REDUCER 
    // strongly related to the store, since it takes it the only thing that might update the state in the end
    // might there be multiple reducers, but they will be converted to one anyway
    // must be created / initialized before the store
    // receives two arguments old state and the action
    // must return ONE THING - UPDATED STATE
const rootReducer = (state = initialState, action) => {
    // whenever state is undefined it will take initial state as a default
    // NEVER MUTATE ANY DATA, IT HAS TO BE DONE IN IMMUTABLE WAY
    switch (action.type){
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'ADD_COUNTER':
            return {
                ...state,
                // refering to the property name send via payload
                counter: state.counter + action.value
            }
        default:
            return state;
    }
    // return state;
}
 
// STORE   
    // it needs to be initialized with reducer
const store = createStore(rootReducer);
console.log(store.getState());

// DISPATCHING ACTION
    // an action is dispatched by accessing the store and using on it dispatch method
    // it is a function that takes a JS object as a parameter, that should define 'type' property
    // it is important, in getting what type of action was dispatched and what should we do about it in the reducer
    // ALL UPPPERCASE STRING FOR ACTION - ie. INC_COUNTER
    // + optional payload
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());

// SUBSCRIPTION
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// we typically initialize the store in the main file of our application
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// while reducer is being set up in the separate file as it contains a lot of logic in more complex apps
// import reducer from "./store/reducer";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

// react-redux allows us to hook up the redux with react
// where Provider is a helper component, we then wrap our app with it
// it allows to kind of inject our store into the react components
// for hooking it up, we set up a property 'store', with it the store is connected
import { Provider } from "react-redux";

// middleware allowing to run async action dispatchers
import thunk from "redux-thunk";

const reducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

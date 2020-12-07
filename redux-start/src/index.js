import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// we typically initialize the store in the main file of our application
import { createStore } from "redux";

// while reducer is being set up in the separate file as it contains a lot of logic in more complex apps
import reducer from "./store/reducer";

// react-redux allows us to hook up the redux with react
// where Provider is a helper component, we then wrap our app with it
// it allows to kind of inject our store into the react components
// for hooking it up, we set up a property 'store', with it the store is connected
import { Provider } from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./index.css";

import App from "./App.js";

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

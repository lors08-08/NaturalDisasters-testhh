import React from "react";
import ReactDOM from "react-dom";
import "./css/styles.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import application from "./redux/application";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(application, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

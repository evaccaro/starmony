import React from "react";
import "semantic-ui-css/semantic.min.css";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();

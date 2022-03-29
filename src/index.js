import "./index.css";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// let renderFunction = () => {
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App
      // state={state}
      // dispatch={store.dispatch.bind(store)}
      // store={store}
      />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
// renderFunction(store.getState());
// store.subscribe(() => {
//   let state = store.getState();
//   renderFunction(state);
// });
// renderFunction();

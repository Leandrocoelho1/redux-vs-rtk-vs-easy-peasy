import React from "react";
import ReactDOM from "react-dom";

// --> Redux and RTK
// import { Provider } from "react-redux";

// --> Easy-peasy
import { StoreProvider as Provider } from "easy-peasy";

// Change import from redux-or, redux-rtk or easy-peasy
import store from "./easy-peasy";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import { StoreProvider as Provider } from "easy-peasy";

// Change import from Redux, RTK or Easy-peasy
import store from "./easy-peasy";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

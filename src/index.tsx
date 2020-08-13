import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Change import from Redux ou RTK
import store from "./redux-rtk";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

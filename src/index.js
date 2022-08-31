import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

//components
import App from "./App";

//redux store
import store from "./ReduxStore/Store";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();

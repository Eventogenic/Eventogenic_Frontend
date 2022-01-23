// This is the main index.js file in the Eventogenic frontend project

import reactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

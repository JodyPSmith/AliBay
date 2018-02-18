import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "tachyons";
import "react-responsive";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <App history={history} />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();

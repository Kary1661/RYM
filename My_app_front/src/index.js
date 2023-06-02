import React from "react";
import "./index.modules.css";
import App from "./App";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./components/Redux/store";
import { Provider } from "react-redux";


const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      ,
    </Provider>
  </React.StrictMode>
);

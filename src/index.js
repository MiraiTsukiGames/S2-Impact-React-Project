import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/Themecontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContextProvider>,
);

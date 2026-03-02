import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { SearchProvider } from "./pages/SearchContext";
import "./index.css";
import "./styles/animations.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <SearchProvider>
      <App />
    </SearchProvider>
  </HashRouter>
);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Standard React entry point: find the root div in index.html and
// mount the whole component tree into it. Everything above this file
// (App, SearchBar, CityList, CityCard) is just a tree of functions —
// this is the one line that actually puts it on screen.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

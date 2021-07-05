import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { TripsStoreProvider } from "./store/TripsStore";

ReactDOM.render(
  <TripsStoreProvider>
    <Router>
      <App />
    </Router>
  </TripsStoreProvider>,
  document.getElementById("root")
);

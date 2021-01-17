import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { HomePage } from "./views/HomePage";

const App = (): JSX.Element => {
  return (
    <div className="App p-4">
      <h1 className="text-center">Habit Tracker</h1>
      <HomePage />
    </div>
  );
};

export default App;

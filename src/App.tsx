import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { HabitDetail } from "./views/HabitDetail";
import { HomePage } from "./views/HomePage";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="App p-4">
        <h1 className="text-center">Habit Tracker</h1>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/habit/:id(\d+)"
            render={({ match }: RouteComponentProps<{ id: string }>) => {
              return <HabitDetail habitId={Number(match.params.id)} />;
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

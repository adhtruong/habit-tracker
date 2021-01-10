import React from "react";
import HabitList from "./components/HabitList";
import HabitTable from "./components/HabitTable";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDates } from "./getDates";

const initHabits: Habit[] = [
  { name: "Running", events: [] },
  { name: "Spanish", events: [] },
];

function App(): JSX.Element {
  const dates = getDates(7);
  return (
    <div className="App">
      <header className="App-header">Habit Tracker</header>
      <HabitList habits={initHabits} />
      <HabitTable habits={initHabits} dates={dates} />
    </div>
  );
}

export default App;

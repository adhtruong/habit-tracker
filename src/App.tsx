import React, { useState } from "react";
import HabitList from "./components/HabitList";
import HabitTable from "./components/HabitTable";
import HabitAdder from "./components/HabitAdder";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDates } from "./getDates";

const initHabits: Habit[] = [
  { id: 1, name: "Running", events: [] },
  { id: 2, name: "Spanish", events: [] },
];

function App(): JSX.Element {
  const dates = getDates(7);

  const [habits, setHabits] = useState(initHabits);

  const addHabit = (habit_name: string) => {
    const id = Math.max(...habits.map((habit) => habit.id)) + 1;
    const newHabits = [...habits, { id: id, name: habit_name, events: [] }];
    setHabits(newHabits);
  };

  const updateHabit = (updatedHabit: Habit) => {
    setHabits(
      habits.map((habit) =>
        habit.id === updatedHabit.id ? updatedHabit : habit,
      ),
    );
  };

  return (
    <div className="App">
      <header className="App-header">Habit Tracker</header>
      <HabitList habits={habits} />
      <br />
      <HabitAdder addHabit={addHabit} />
      <br />
      <HabitTable habits={habits} dates={dates} updateHabit={updateHabit} />
    </div>
  );
}

export default App;

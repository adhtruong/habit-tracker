import React from "react";
import Habit from "./Habit";

interface Props {
  habits: Habit[];
}

const HabitList: React.FC<Props> = ({ habits }) => {
  return (
    <ul>
      {habits.map((habit) => (
        <Habit key={habit.name} habit={habit} />
      ))}
    </ul>
  );
};

export default HabitList;

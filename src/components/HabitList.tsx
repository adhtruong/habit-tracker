import React from "react";

import { ListGroup } from "react-bootstrap";

import Habit from "./Habit";

interface Props {
  habits: Habit[];
}

const HabitList: React.FC<Props> = ({ habits }) => {
  return (
    <ListGroup>
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit} />
      ))}
    </ListGroup>
  );
};

export default HabitList;

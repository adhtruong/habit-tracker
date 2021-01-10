import React from "react";
import Habit from "./Habit";
import { ListGroup } from "react-bootstrap";

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

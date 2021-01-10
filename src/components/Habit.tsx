import React from "react";
import { ListGroup } from "react-bootstrap";

interface Props {
  habit: Habit;
}

const Habit: React.FC<Props> = ({ habit }) => {
  return (
    <ListGroup.Item>
      Habit {habit.name}. Count {habit.events.length}
    </ListGroup.Item>
  );
};

export default Habit;

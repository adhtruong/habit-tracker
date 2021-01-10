import React from "react";

interface Props {
  habit: Habit;
}

const Habit: React.FC<Props> = ({ habit }) => {
  return (
    <li>
      Habit {habit.name}. Count {habit.events.length}
    </li>
  );
};

export default Habit;

import React, { useState } from "react";

interface Props {
  addHabit: (string: string) => void;
}

const HabitAdder = ({ addHabit }: Props): JSX.Element => {
  const [text, setText] = useState("");
  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          if (!text) return;
          addHabit(text);
          setText("");
        }}
      >
        Add Habit
      </button>
    </form>
  );
};

export default HabitAdder;

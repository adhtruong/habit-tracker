import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface Props {
  addHabit: (string: string) => void;
}

const HabitAdder = ({ addHabit }: Props): JSX.Element => {
  const [text, setText] = useState("");
  return (
    <Form inline>
      <Form.Control
        className="mb-2 mr-sm-2"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        type="submit"
        className="mb-2 mr-sm-2"
        onClick={(e) => {
          e.preventDefault();
          if (!text) return;
          addHabit(text);
          setText("");
        }}
      >
        Add Habit
      </Button>
    </Form>
  );
};

export default HabitAdder;

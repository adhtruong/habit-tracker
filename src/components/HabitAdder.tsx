import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

interface Props {
  addHabit: (name: string, detail: string) => void;
}

interface HabitInput {
  name: string;
  details: string;
}

const HabitAdder = ({ addHabit }: Props): JSX.Element => {
  const [input, setInput] = useState<HabitInput>({ name: "", details: "" });
  return (
    <Form inline>
      <Form.Control
        className="mb-2 mr-sm-2"
        placeholder="Habit name..."
        type="text"
        value={input.name}
        onChange={(e) => setInput({ ...input, name: e.target.value })}
      />
      <Form.Control
        className="mb-2 mr-sm-2"
        placeholder="Details..."
        type="text"
        value={input.details}
        onChange={(e) => setInput({ ...input, details: e.target.value })}
      />
      <Button
        type="submit"
        className="mb-2 mr-sm-2"
        onClick={(e) => {
          e.preventDefault();
          if (!input.name) return;
          addHabit(input.name, input.details);
          setInput({ name: "", details: "" });
        }}
      >
        Add Habit
      </Button>
    </Form>
  );
};

export default HabitAdder;

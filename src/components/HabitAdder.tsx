import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

import { addHabit } from "../features/habits/actions";
import { HabitInput } from "../features/habits/types";
import store from "../store";

const HabitAdder = (): JSX.Element => {
  const [input, setInput] = useState<HabitInput>({ name: "", detail: "" });

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
        value={input.detail}
        onChange={(e) => setInput({ ...input, detail: e.target.value })}
      />
      <Button
        type="submit"
        className="mb-2 mr-sm-2"
        onClick={(e) => {
          e.preventDefault();
          if (!input.name) return;
          store.dispatch(addHabit(input));
          setInput({ name: "", detail: "" });
        }}
      >
        Add Habit
      </Button>
    </Form>
  );
};

export default HabitAdder;

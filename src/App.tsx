import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

// import HabitList from "./components/HabitList";
import HabitAdder from "./components/HabitAdder";
import HabitTable from "./components/HabitTable";
import { getDates } from "./getDates";

function App(): JSX.Element {
  const dates = getDates(7);
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (habitName: string, detail: string) => {
    const id = habits.length
      ? Math.max.apply(
          null,
          habits.map((habit) => habit.id),
        ) + 1
      : 1;
    console.log(id, habits);
    const newHabits = [
      ...habits,
      { id: id, name: habitName, detail: detail, events: [] },
    ];
    setHabits(newHabits);
  };

  const updateHabit = (updatedHabit: Habit) => {
    setHabits(
      habits.map((habit) =>
        habit.id === updatedHabit.id ? updatedHabit : habit,
      ),
    );
  };

  const deleteHabit = (habitToDelete: Habit) => {
    setHabits(habits.filter((habit) => habit.id !== habitToDelete.id));
  };

  return (
    <div className="App">
      <h1 className="text-center">Habit Tracker</h1>
      <Container fluid="md">
        {/* <Row className="p-2">
          <Col>
            <HabitList habits={habits} />
          </Col>
        </Row> */}
        <Row className="p-2">
          <Col>
            <HabitAdder addHabit={addHabit} />
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <HabitTable
              habits={habits}
              dates={dates}
              updateHabit={updateHabit}
              deleteHabit={deleteHabit}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

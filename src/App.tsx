import React, { useState } from "react";
// import HabitList from "./components/HabitList";
import HabitTable from "./components/HabitTable";
import HabitAdder from "./components/HabitAdder";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDates } from "./getDates";
import { Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
  const dates = getDates(7);
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (habitName: string) => {
    const id = habits.length
      ? Math.max.apply(
          null,
          habits.map((habit) => habit.id),
        ) + 1
      : 1;
    console.log(id, habits);
    const newHabits = [...habits, { id: id, name: habitName, events: [] }];
    setHabits(newHabits);
  };

  const updateHabit = (updatedHabit: Habit) => {
    setHabits(
      habits.map((habit) =>
        habit.id === updatedHabit.id ? updatedHabit : habit,
      ),
    );
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
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

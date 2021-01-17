import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

import HabitAdder from "./components/HabitAdder";
import HabitTable from "./components/HabitTable";
import { getDates } from "./util/getDates";

function App(): JSX.Element {
  const dates = getDates(7);

  return (
    <div className="App p-4">
      <h1 className="text-center">Habit Tracker</h1>
      <Container fluid="md">
        {/* <Row className="p-2">
          <Col>
            <HabitList habits={habits} />
          </Col>
        </Row> */}
        <Row className="p-2">
          <Col>
            <HabitAdder />
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <HabitTable dates={dates} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

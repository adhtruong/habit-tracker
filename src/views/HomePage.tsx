import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import HabitAdder from "../components/HabitAdder";
import HabitTable from "../components/HabitTable";
import { getDates } from "../util/getDates";

export function HomePage(): JSX.Element {
  const dates = getDates(7);
  return (
    <Container fluid="md">
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
  );
}

import React from "react";
import { Button, Modal } from "react-bootstrap";

interface Props {
  handleClose: () => void;
  habit: Habit | null;
  //   updateHabit: (habit: Habit) => void;
  deleteHabit: (habit: Habit) => void;
}

const HabitEdit = ({ handleClose, habit, deleteHabit }: Props): JSX.Element => {
  if (!habit) {
    return <div></div>;
  }

  return (
    <Modal show={habit !== null} animation={false} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{habit.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Habit occurred {habit.events.length} times.</Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            deleteHabit(habit);
            handleClose();
          }}
        >
          Delete
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HabitEdit;

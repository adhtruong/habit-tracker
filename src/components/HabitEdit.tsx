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
      <Modal.Body>
        {habit.detail ? <p>{habit.detail}</p> : ""}
        <p>Habit occurred {habit.events.length} times.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            if (!window.confirm("Are you sure you wish to delete this item?"))
              return;
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

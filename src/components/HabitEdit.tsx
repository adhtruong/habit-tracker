import React, { useCallback } from "react";

import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { deleteHabit } from "../features/habits/actions";

interface Props {
  handleClose: () => void;
  habit: Habit | null;
}

const HabitEdit = ({ handleClose, habit }: Props): JSX.Element => {
  if (!habit) {
    return <div></div>;
  }

  const dispatch = useDispatch();
  const handleDelete = useCallback(() => dispatch(deleteHabit(habit)), [
    dispatch,
  ]);

  return (
    <Modal show={!!habit} animation={false} onHide={handleClose}>
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
            handleDelete();
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

export default React.memo(HabitEdit);

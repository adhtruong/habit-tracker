import React, { useState } from "react";

import Table from "react-bootstrap/Table";

import HabitEdit from "./HabitEdit";

interface RowProps {
  habit: Habit;
  dates: Date[];
  updateHabit: (habit: Habit) => void;
  handleShow: (habit: Habit) => void;
}

interface CellProps {
  ticked: boolean;
  date: Date;
  toggleHabit: () => void;
}

interface Props {
  habits: Habit[];
  dates: Date[];
  updateHabit: (habit: Habit) => void;
  deleteHabit: (habit: Habit) => void;
}

const HabitCell: React.FC<CellProps> = ({ ticked, toggleHabit }) => {
  return <td onClick={() => toggleHabit()}>{ticked ? 1 : 0}</td>;
};

function getRowData(habit: Habit, dates: Date[]) {
  return dates.map((date) => ({
    date: date,
    ticked:
      habit.events
        .map((event) => event.date.toDateString())
        .indexOf(date.toDateString()) !== -1,
  }));
}

const HabitRow: React.FC<RowProps> = ({
  habit,
  dates,
  updateHabit,
  handleShow,
}) => {
  return (
    <tr>
      <td key={habit.name} onClick={() => handleShow(habit)}>
        {habit.name}
      </td>
      {getRowData(habit, dates).map(({ ticked, date }) => {
        return (
          <HabitCell
            key={date.getDate()}
            ticked={ticked}
            date={date}
            toggleHabit={() => toggleHabit(updateHabit, habit, date)}
          />
        );
      })}
    </tr>
  );
};

const toggleHabit = (
  updateHabit: (habit: Habit) => void,
  habit: Habit,
  date: Date,
) => {
  const isSelected =
    habit.events
      .map((event) => event.date.toDateString())
      .indexOf(date.toDateString()) !== -1;

  const updatedHabit = habit;
  if (isSelected)
    updatedHabit.events = updatedHabit.events.filter(
      (event) => event.date.getDate() !== date.getDate(),
    );
  else updatedHabit.events.push({ date: date });

  updateHabit(updatedHabit);
};

function HabitTable({
  habits,
  dates,
  updateHabit,
  deleteHabit,
}: Props): JSX.Element {
  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);

  const handleClose = () => setSelectedHabit(null);
  const handleShow = (habit: Habit) => setSelectedHabit(habit);

  return (
    <>
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th key="title">Habit</th>
            {dates.map((date) => (
              <th key={date.getDate()}>{date.toLocaleDateString()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit) => (
            <HabitRow
              key={habit.id}
              habit={habit}
              dates={dates}
              updateHabit={updateHabit}
              handleShow={handleShow}
            />
          ))}
        </tbody>
      </Table>

      <HabitEdit
        handleClose={handleClose}
        habit={selectedHabit}
        deleteHabit={deleteHabit}
      ></HabitEdit>
    </>
  );
}

export default HabitTable;

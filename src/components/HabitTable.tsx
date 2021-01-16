import React, { useState } from "react";

import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../features";
import { toggleHabitEvent } from "../features/habits/actions";
import HabitEdit from "./HabitEdit";

interface RowProps {
  habit: Habit;
  dates: Date[];
  handleShow: (habit: Habit) => void;
}

interface CellProps {
  ticked: boolean;
  date: Date;
  toggleHabit: () => void;
}

const HabitCell: React.FC<CellProps> = ({ ticked, toggleHabit }) => {
  return <td onClick={toggleHabit}>{ticked ? 1 : 0}</td>;
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

const HabitRow: React.FC<RowProps> = ({ habit, dates, handleShow }) => {
  const dispatch = useDispatch();
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
            toggleHabit={() => dispatch(toggleHabitEvent(habit, date))}
          />
        );
      })}
    </tr>
  );
};

const allHabit = (state: RootState) => state.habits.habits;

function HabitTable({ dates }: { dates: Date[] }): JSX.Element {
  const habits = useSelector(allHabit);

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
              handleShow={handleShow}
            />
          ))}
        </tbody>
      </Table>

      <HabitEdit handleClose={handleClose} habit={selectedHabit}></HabitEdit>
    </>
  );
}

export default HabitTable;

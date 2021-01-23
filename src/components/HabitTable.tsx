import React, { useState } from "react";

import Table from "react-bootstrap/Table";
import { HiCheck, HiX } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";

import { toggleHabitEvent } from "../features/habits/actions";
import { allHabits } from "../features/selectors";
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
  return (
    <td align="center" onClick={toggleHabit}>
      {ticked ? <HiCheck /> : <HiX color="grey" />}
    </td>
  );
};

function getRowData(habit: Habit, dates: Date[]) {
  return dates.map((date) => ({
    date: date,
    ticked:
      habit.events
        .map((event) => event.date)
        .indexOf(date.toLocaleDateString()) !== -1,
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

type HeaderProps = {
  dates: Date[];
};

const HabitHeader: React.FC<HeaderProps> = ({ dates }: HeaderProps) => {
  return (
    <thead>
      <th key="title">Habit</th>
      {dates.map((date) => (
        // TODO clean up
        <th className="text-center" key={date.getUTCDate()}>
          {date.toString().split(" ")[0] + " " + date.getDate()}
        </th>
      ))}
    </thead>
  );
};

function HabitTable({ dates }: { dates: Date[] }): JSX.Element {
  const habits = useSelector(allHabits);

  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);

  const handleClose = () => setSelectedHabit(null);
  const handleShow = (habit: Habit) => setSelectedHabit(habit);

  return (
    <>
      <Table responsive striped bordered>
        <HabitHeader dates={dates} />
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

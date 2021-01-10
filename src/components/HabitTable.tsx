import React from "react";
import Table from "react-bootstrap/Table";

interface RowProps {
  habit: Habit;
  dates: Date[];
  updateHabit: (habit: Habit) => void;
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

const HabitRow: React.FC<RowProps> = ({ habit, dates, updateHabit }) => {
  return (
    <tr>
      <td key={habit.name}>{habit.name}</td>
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

function toggleHabit(
  updateHabit: (habit: Habit) => void,
  habit: Habit,
  date: Date,
) {
  const isSelected =
    habit.events
      .map((event) => event.date.toDateString())
      .indexOf(date.toDateString()) !== -1;

  const updated_habit = habit;
  if (isSelected)
    updated_habit.events = updated_habit.events.filter(
      (event) => event.date.getDate() !== date.getDate(),
    );
  else updated_habit.events.push({ date: date });

  updateHabit(updated_habit);
}

function HabitTable({ habits, dates, updateHabit }: Props): JSX.Element {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th key="title">Habit</th>
          {dates.map((date) => (
            <th key={date.getDate()}>{date.getDate()}</th>
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
          />
        ))}
      </tbody>
    </Table>
  );
}

export default HabitTable;

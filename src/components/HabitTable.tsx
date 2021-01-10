import React from "react";
import Table from "react-bootstrap/Table";

interface RowProps {
  habit: Habit;
  dates: Date[];
}

interface CellProps {
  ticked: boolean;
  date: Date;
}

interface Props {
  habits: Habit[];
  dates: Date[];
}

const HabitCell: React.FC<CellProps> = ({ ticked, date }) => {
  return (
    <td key={date.getDate()} onClick={() => console.log(date)}>
      {ticked ? 1 : 0}
    </td>
  );
};

function getRowData(habit: Habit, dates: Date[]): CellProps[] {
  return dates.map((date) => ({
    date: date,
    ticked: habit.events.map((event) => event.date).indexOf(date) !== -1,
  }));
}

const HabitRow: React.FC<RowProps> = ({ habit, dates }) => {
  return (
    <tr>
      <td key={habit.name}>{habit.name}</td>
      {getRowData(habit, dates).map(({ ticked, date }) => {
        return <HabitCell key={date.getDate()} ticked={ticked} date={date} />;
      })}
    </tr>
  );
};

function HabitTable({ habits, dates }: Props): JSX.Element {
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
          <HabitRow key={habit.name} habit={habit} dates={dates} />
        ))}
      </tbody>
    </Table>
  );
}

export default HabitTable;

import { useSelector } from "react-redux";

import { makeGetHabit } from "../features/selectors";

export function HabitDetail({ habitId }: { habitId: number }): JSX.Element {
  const habit = useSelector(makeGetHabit(habitId));
  if (!habit) return <div>Habit not found!</div>;
  return <div>Habit {habit.name}</div>;
}

import { HabitState } from "./types";

export const allHabit = (state: HabitState): Habit[] => state;
export const makeGetHabit = (id: number) => (
  state: HabitState,
): Habit | undefined => state.find((habit) => habit.id === id);

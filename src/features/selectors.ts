import { RootState } from ".";
import * as habitSelectors from "./habits/selectors";

export const allHabits = (state: RootState): Habit[] =>
  habitSelectors.allHabit(state.habits);

export const makeGetHabit = (
  habitId: number,
): ((state: RootState) => Habit | undefined) => (state: RootState) =>
  habitSelectors.makeGetHabit(habitId)(state.habits);

import { RootState } from ".";
import * as habitSelectors from "./habits/selectors";

export const allHabits = (state: RootState): Habit[] =>
  habitSelectors.allHabit(state.habits);

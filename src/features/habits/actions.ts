import {
  HabitInput,
  ADD_HABIT,
  DELETE_HABIT,
  HabitActionTypes,
  UPDATE_HABIT,
} from "./types";

export function addHabit(habitInput: HabitInput): HabitActionTypes {
  return {
    type: ADD_HABIT,
    payload: habitInput,
  };
}

export function updateHabit(habit: Habit): HabitActionTypes {
  return {
    type: UPDATE_HABIT,
    payload: habit,
  };
}

export function deleteHabit(habit: Habit): HabitActionTypes {
  return {
    type: DELETE_HABIT,
    payload: habit,
  };
}

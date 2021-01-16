import { HabitInput, HabitActionInterface, HabitActionTypes } from "./types";

export function addHabit(habitInput: HabitInput): HabitActionInterface {
  return {
    type: HabitActionTypes.ADD_HABIT,
    payload: habitInput,
  };
}

export function updateHabit(habit: Habit): HabitActionInterface {
  return {
    type: HabitActionTypes.UPDATE_HABIT,
    payload: habit,
  };
}

export function deleteHabit(habit: Habit): HabitActionInterface {
  return {
    type: HabitActionTypes.DELETE_HABIT,
    payload: habit,
  };
}

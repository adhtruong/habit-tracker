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

export function toggleHabitEvent(
  habit: Habit,
  date: Date,
): HabitActionInterface {
  const isSelected =
    habit.events
      .map((event) => event.date.toDateString())
      .indexOf(date.toDateString()) !== -1;

  const updatedHabit = habit;
  if (isSelected)
    updatedHabit.events = updatedHabit.events.filter(
      (event) => event.date.getDate() !== date.getDate(),
    );
  else updatedHabit.events.push({ date: date });

  return {
    type: HabitActionTypes.UPDATE_HABIT,
    payload: updatedHabit,
  };
}

export function deleteHabit(habit: Habit): HabitActionInterface {
  return {
    type: HabitActionTypes.DELETE_HABIT,
    payload: habit,
  };
}

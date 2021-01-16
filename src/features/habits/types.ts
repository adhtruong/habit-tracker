export interface HabitInput {
  name: string;
  detail: string;
}

export interface HabitState {
  habits: Habit[];
}

export const ADD_HABIT = "ADD_HABIT";
export const UPDATE_HABIT = "UPDATE_HABIT";
export const DELETE_HABIT = "DELETE_HABIT";

interface AddHabitAction {
  type: typeof ADD_HABIT;
  payload: HabitInput;
}

interface UpdateHabitAction {
  type: typeof UPDATE_HABIT;
  payload: Habit;
}

interface DeleteHabitAction {
  type: typeof DELETE_HABIT;
  payload: Habit;
}

export type HabitActionTypes =
  | AddHabitAction
  | UpdateHabitAction
  | DeleteHabitAction;

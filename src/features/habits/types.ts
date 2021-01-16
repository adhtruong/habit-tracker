export interface HabitInput {
  name: string;
  detail: string;
}

export type HabitState = Habit[];

export enum HabitActionTypes {
  ADD_HABIT = "ADD_HABIT",
  UPDATE_HABIT = "UPDATE_HABIT",
  DELETE_HABIT = "DELETE_HABIT",
}

interface AddHabitAction {
  type: HabitActionTypes.ADD_HABIT;
  payload: HabitInput;
}

interface UpdateHabitAction {
  type: HabitActionTypes.UPDATE_HABIT;
  payload: Habit;
}

interface DeleteHabitAction {
  type: HabitActionTypes.DELETE_HABIT;
  payload: Habit;
}

export type HabitActionInterface =
  | AddHabitAction
  | UpdateHabitAction
  | DeleteHabitAction;

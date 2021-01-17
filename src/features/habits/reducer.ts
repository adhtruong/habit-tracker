import { HabitActionTypes } from "./constants";
import { HabitState, HabitActionInterface } from "./types";

const nextID = (habits: Habit[]) => {
  if (!habits.length) {
    return 1;
  }
  const maxID = Math.max.apply(
    null,
    habits.map((habit) => habit.id),
  );
  return maxID + 1;
};

const initialHabits: HabitState = [];

export default function habitReducer(
  state = initialHabits,
  action: HabitActionInterface,
): HabitState {
  switch (action.type) {
    case HabitActionTypes.ADD_HABIT:
      const newID = nextID(state);
      const newHabit: Habit = { id: newID, events: [], ...action.payload };
      return [...state, newHabit];
    case HabitActionTypes.UPDATE_HABIT:
      return state.map((habit) =>
        habit.id === action.payload.id ? action.payload : habit,
      );
    case HabitActionTypes.DELETE_HABIT:
      return state.filter((habit) => habit.id !== action.payload.id);
    default:
      return state;
  }
}

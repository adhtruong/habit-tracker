import habitReducer from "./reducer";
import * as types from "./types";

describe("Add habit", () => {
  it("Add habit on empty", () => {
    const action: types.HabitActionInterface = {
      type: types.HabitActionTypes.ADD_HABIT,
      payload: {
        name: "New Habit 1",
        detail: "",
      },
    };
    expect(habitReducer({ habits: [] }, action)).toEqual({
      habits: [
        {
          id: 1,
          name: "New Habit 1",
          detail: "",
          events: [],
        },
      ],
    });
  });

  it("Add habit on non-empty", () => {
    const existingHabit = {
      id: 1,
      name: "Existing Habit",
      detail: "",
      events: [],
    };
    const action: types.HabitActionInterface = {
      type: types.HabitActionTypes.ADD_HABIT,
      payload: {
        name: "New Habit 1",
        detail: "",
      },
    };
    expect(habitReducer({ habits: [existingHabit] }, action)).toEqual({
      habits: [
        existingHabit,
        {
          id: 2,
          name: "New Habit 1",
          detail: "",
          events: [],
        },
      ],
    });
  });
});

describe("Delete habit reducer", () => {
  it("Delete habit", () => {
    const habitToDelete = {
      id: 1,
      name: "Habit to delete",
      detail: "",
      events: [],
    };
    const otherHabit = {
      id: 2,
      name: "Other habit",
      detail: "",
      events: [],
    };
    const action = {
      type: types.HabitActionTypes.DELETE_HABIT,
      payload: habitToDelete,
    };
    expect(
      habitReducer({ habits: [habitToDelete, otherHabit] }, action),
    ).toEqual({ habits: [otherHabit] });
  });
});

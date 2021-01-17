import * as constants from "../constants";
import habitReducer from "../reducer";
import * as types from "../types";

describe("Add habit", () => {
  it("Add habit on empty", () => {
    const action: types.HabitActionInterface = {
      type: constants.HabitActionTypes.ADD_HABIT,
      payload: {
        name: "New Habit 1",
        detail: "",
      },
    };
    expect(habitReducer([], action)).toEqual([
      {
        id: 1,
        name: "New Habit 1",
        detail: "",
        events: [],
      },
    ]);
  });

  it("Add habit on non-empty", () => {
    const existingHabit = {
      id: 1,
      name: "Existing Habit",
      detail: "",
      events: [],
    };
    const action: types.HabitActionInterface = {
      type: constants.HabitActionTypes.ADD_HABIT,
      payload: {
        name: "New Habit 1",
        detail: "",
      },
    };
    expect(habitReducer([existingHabit], action)).toEqual([
      existingHabit,
      {
        id: 2,
        name: "New Habit 1",
        detail: "",
        events: [],
      },
    ]);
  });
});

describe("Update habit reducer", () => {
  it("Update habit", () => {
    const updatedHabit = {
      id: 1,
      name: "Habit to update",
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
      type: constants.HabitActionTypes.UPDATE_HABIT,
      payload: updatedHabit,
    };
    expect(
      habitReducer(
        [{ id: 1, name: "Original name", detail: "", events: [] }, otherHabit],
        action,
      ),
    ).toEqual([updatedHabit, otherHabit]);
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
      type: constants.HabitActionTypes.DELETE_HABIT,
      payload: habitToDelete,
    };
    expect(habitReducer([habitToDelete, otherHabit], action)).toEqual([
      otherHabit,
    ]);
  });
});

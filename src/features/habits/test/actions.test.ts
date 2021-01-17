import * as actions from "../actions";
import * as constants from "../constants";

describe("actions", () => {
  it("Create habit", () => {
    const name = "New Habit";
    const expectedAction = {
      type: constants.HabitActionTypes.ADD_HABIT,
      payload: {
        name: name,
        detail: "",
      },
    };
    expect(actions.addHabit({ name, detail: "" })).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("Delete habit", () => {
    const habit = { id: 1, name: "Habit", detail: "", events: [] };
    expect(actions.deleteHabit(habit)).toEqual({
      type: constants.HabitActionTypes.DELETE_HABIT,
      payload: habit,
    });
  });
});

describe("actions", () => {
  it("Update habit", () => {
    const habit = { id: 1, name: "Habit", detail: "", events: [] };
    expect(actions.updateHabit(habit)).toEqual({
      type: constants.HabitActionTypes.UPDATE_HABIT,
      payload: habit,
    });
  });

  it("Toggle habit on", () => {
    const date = new Date("2021-01-10");
    const habit = { id: 1, name: "Habit", detail: "", events: [] };
    expect(actions.toggleHabitEvent(habit, date)).toEqual({
      type: constants.HabitActionTypes.UPDATE_HABIT,
      payload: {
        id: 1,
        name: "Habit",
        detail: "",
        events: [{ date: date.toLocaleDateString() }],
      },
    });
  });

  it("Toggle habit off", () => {
    const date = new Date("2021-01-10");
    const habit = {
      id: 1,
      name: "Habit",
      detail: "",
      events: [{ date: date.toLocaleDateString() }],
    };
    expect(actions.toggleHabitEvent(habit, date)).toEqual({
      type: constants.HabitActionTypes.UPDATE_HABIT,
      payload: { id: 1, name: "Habit", detail: "", events: [] },
    });
  });
});

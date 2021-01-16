import throttle from "lodash/throttle";
import { createStore } from "redux";

import rootReducer, { RootState } from "./features";

const _persistantState = "persitantState";

const saveToLocalStorage = (state: RootState) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem(_persistantState, serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem(_persistantState);
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

const store = createStore(rootReducer, loadFromLocalStorage());

store.subscribe(throttle(() => saveToLocalStorage(store.getState()), 1000));

export default store;

import { combineReducers } from "redux";

import habitReducer from "./features/habits/reducer";

const rootReducer = combineReducers({
  habits: habitReducer,
});

export default rootReducer;

import { combineReducers } from "redux";

import habitReducer from "./habits/reducer";

const rootReducer = combineReducers({
  habits: habitReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

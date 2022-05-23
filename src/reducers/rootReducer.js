import { combineReducers } from "redux";
import { calendarReducer } from "./calendarReducer";
import { uiReducer } from "./uiReducer";

// Here we put all the reducers together usin combineReducers from Redux

export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    // TODO: authReducer
})
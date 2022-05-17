import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";

// Here we put all the reducers together usin combineReducers from Redux

export const rootReducer = combineReducers({
    ui: uiReducer,
    // TODO: authReducer, calendarReducer
})
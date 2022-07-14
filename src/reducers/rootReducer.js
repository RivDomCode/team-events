import { combineReducers } from "redux";
import { authSlice } from "../store/auth/authSlice";
import { calendarReducer } from "./calendarReducer";
import { uiReducer } from "./uiReducer";

// Here we put all the reducers together usin combineReducers from Redux

export const rootReducer = combineReducers({
    ui:       uiReducer,
    calendar: calendarReducer,
    auth:     authSlice.reducer
    // TODO: authReducer
})
import { combineReducers } from "redux";
import { authSlice } from "../store/auth/authSlice";
import { calendarSlice } from "../store/calendar/calendarSlice";
// Here we put all the reducers together usin combineReducers from Redux

export const rootReducer = combineReducers({
    auth:     authSlice.reducer,
    calendar: calendarSlice.reducer
})


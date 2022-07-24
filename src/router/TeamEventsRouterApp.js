import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { EventsCalendarScreen } from "../components/calendar/EventsCalendarScreen";
import { useAuthStore } from "../hooks/useAuthStore";


export const TeamEventsRouterApp = () => {
  const { status, checkAuthToken} =  useAuthStore()

  useEffect(() => {
    checkAuthToken();
  }, [])

  if ( status === "checking") {
    return (
      <h3>Loading....</h3>
    )
  }

  return (
    <BrowserRouter>
    <Routes>
      {
        (status === "not-authenticated")

        ? (
            <>
            <Route path="/auth/*" element={<LoginScreen/>} />
            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
            </>
           )
        : (
            <>
              <Route path="/" element={<EventsCalendarScreen/>} />
              <Route path="/*" element={ <Navigate to="/" /> } />
            </>
          )
      }


    </Routes>
  </BrowserRouter> )
}

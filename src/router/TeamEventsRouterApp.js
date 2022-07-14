import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { EventsCalendarScreen } from "../components/calendar/EventsCalendarScreen";


export const TeamEventsRouterApp = () => {

  const authStatus = "non-auth";


  return (
    <BrowserRouter>
    <Routes>
      {
        (authStatus === "non-auth")
        ? <Route path="/login" element={<LoginScreen/>} />
        : <Route path="/*" element={<EventsCalendarScreen/>} />
      }

      <Route path="/*" element={<Navigate to="/login"/>}/>

    </Routes>
  </BrowserRouter> )
}

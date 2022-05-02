import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { EventsCalendarScreen } from "../components/calendar/EventsCalendarScreen";


export const TeamEventsRouterApp = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginScreen/>} />
        <Route path="events-calendar" element={<EventsCalendarScreen/>} />
    </Routes>
  </BrowserRouter> )
}

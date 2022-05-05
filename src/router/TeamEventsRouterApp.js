import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { EventsCalendarScreen } from "../components/calendar/EventsCalendarScreen";


export const TeamEventsRouterApp = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="login" element={<LoginScreen/>} />
      <Route path="register" element={<RegisterScreen/>}/>
        <Route path="/" element={<EventsCalendarScreen/>} />
    </Routes>
  </BrowserRouter> )
}

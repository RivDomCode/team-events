import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


export const EventsCalendarScreen = () => {

  //setup for react-big-calendar
  const localizer = momentLocalizer(moment);
  //events -->follow react-big-calendar docs
  const events= [{
    title:"new event",
    start: moment().toDate(),  //initial date using moment
    end: moment().add(2, "hours").toDate(),    //final date, I added 2 hours
  }]


  return (
    <main className='calendar'>
      <Navbar/>
      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
    />
    </main>
  )
}

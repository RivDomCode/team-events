import { useState } from "react"
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent';
import { Modal } from "./Modal";

  //setup for react-big-calendar
  const localizer = momentLocalizer(moment);
  //events -->follow react-big-calendar docs
  const events= [{
    title:"new event",
    start: moment().toDate(),  //initial date using moment
    end: moment().add(2, "hours").toDate(),    //final date, I added 2 hours
    notes: "detail of the events ares bklalalvl",
    user: {
      _id:"123",
      name: "Manolo"
    }
  }];

export const EventsCalendarScreen = () => {

  //To get last view used when browser is reloaded
  const [lastView, setLastView] = useState(localStorage.getItem('lastview') || "month");



  //Event to trigger the modal when I double Click ot edit the event
  const onDoubleClick = (e) => {
    console.log(e)
  }

  //Event triggered when I select the event
  const onSelectEvent = (e)=>{
    console.log(e)
  }

  //Event when changing view
  // Save on LS last view
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastview', e);
  }


  //Setup events styles in react-big-calendar
  const eventStyleGetter = (event, start, end, isSelected) =>{

    const style = {
      backgroundColor: "#E3C404 ",
      opacity: "0.8",
      color:"#eee"
    }
    return {style};
  }

  eventStyleGetter();

  return (
    <main className='calendar'>
      <Navbar/>
      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      eventPropGetter = {eventStyleGetter} //for style
      onDoubleClickEvent={onDoubleClick}
      onView={onViewChange}
      onSelectEvent={onSelectEvent}
      view={lastView}
      components={{
        event: CalendarEvent
      }}  //To personalize the event
      className='calendar-layout'
    />
<Modal/>
    </main>
  )
}

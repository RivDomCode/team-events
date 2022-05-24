import { useState } from "react"
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent';
import { Modal } from "./Modal";
import { useDispatch, useSelector} from "react-redux";
import { eventSetActive } from "../../actions/events";
import { AddBtn } from "../ui/AddBtn";

  //setup for react-big-calendar
  const localizer = momentLocalizer(moment);
  //events -->follow react-big-calendar docs


export const EventsCalendarScreen = () => {

  //get data from store
  const { events } = useSelector(state => state.calendar);
  console.log(events)

  //To get last view used when browser is reloaded
  const [lastView, setLastView] = useState(localStorage.getItem('lastview') || "month");
  //to open-close modal
  const [isOpen, setIsOpen] = useState(false);
  //Event to trigger the modal when I double Click ot edit the event
  const openModal = (e) => {
    setIsOpen(true);
  }
  //close modal
  const closeModal = () =>{
    setIsOpen(false);
  }

//useDispatch to send the action to reducer
const dispatch = useDispatch()
  //Event triggered when I select the event
  const onSelectEvent = (e)=>{
    dispatch(eventSetActive(e));
  }

  const onDoubleClick = (e) => {
    openModal();
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
      onDoubleClickEvent= {onDoubleClick}
      onView={onViewChange}
      onSelectEvent={onSelectEvent}
      view={lastView}
      components={{
        event: CalendarEvent
      }}  //To personalize the event
      className='calendar-layout'

    />
    <AddBtn openModal={openModal}/>
    { isOpen && <Modal closeModal={closeModal}/>}
    </main>
  )
}

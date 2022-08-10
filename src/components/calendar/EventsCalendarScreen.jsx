import { useState, useEffect } from "react"
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarEvent } from './CalendarEvent';
import { Modal } from "./Modal";
import { useDispatch} from "react-redux";
import {  eventClearActiveEvent } from "../../actions/events";
import { AddBtn } from "../ui/AddBtn";
import { DeleteBtn } from "../ui/DeleteBtn";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useAuthStore } from "../../hooks/useAuthStore";

  //setup for react-big-calendar
  const localizer = momentLocalizer(moment);
  //events -->follow react-big-calendar docs


export const EventsCalendarScreen = () => {

  //Get logged user from store
  const { user } = useAuthStore();
  //get data from store
  const { events, activeEvent, setActiveEvent, startLoadingEvents } = useCalendarStore()

  //To get last view used when browser is reloaded
  const [lastView, setLastView] = useState(localStorage.getItem('lastview') || "month");
  //to open-close modal
  const [isOpen, setIsOpen] = useState(false);
  //Event to trigger the modal when I double Click ot edit the event
  const openModal = (e) => {
    setIsOpen(true);
    setActiveEvent(activeEvent);
  }
  //close modal
  const closeModal = () =>{
    setIsOpen(false);
    dispatch(eventClearActiveEvent())
  }

//useDispatch to send the action to reducer
const dispatch = useDispatch()
  //Event triggered when I select the event
  const onSelectEvent = (e)=>{
    setActiveEvent(e)
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

  const onSelectSlot = (e) => {
    dispatch(eventClearActiveEvent(e))
  }


  //Setup events styles in react-big-calendar
  const eventStyleGetter = (event, start, end, isSelected) =>{

    const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid );


    const style = {
      backgroundColor: isMyEvent ? "#E3C404 " : "#465660",
      color:"#eee"
    }
    return {style};
  }


  //load events when component load
  useEffect(() => {
   startLoadingEvents()
  }, [])
  

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
      onSelectSlot={onSelectSlot}
      selectable={true}
      onSelectEvent={onSelectEvent}
      view={lastView}
      components={{
        event: CalendarEvent
      }}  //To personalize the event
      className='calendar-layout'

    />
    <AddBtn openModal={openModal}/>

    {(activeEvent) && <DeleteBtn /> }

    { isOpen && <Modal closeModal={closeModal}/>}
    </main>
  )
}

import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import calendarApi from "../api/calendarApi";
import { convertEventDate } from "../helpers/convertEventDate";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { user } = useSelector(state => state.auth)

    const setActiveEvent = (calendarEvent) =>{
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent) => {
        try {
        //todo bien:
        if( calendarEvent._id) {
            //updating
            await calendarApi.put(`/events/${calendarEvent._id}`, calendarEvent);
            dispatch(onUpdateEvent({...calendarEvent, user}))
        } else{
            //creating

            const { data } = await calendarApi.post('/events', calendarEvent);

            dispatch(onAddNewEvent({
                ...calendarEvent,
                id: data.event.id,
                user
            }));
        }
        } catch (error) {
            console.log(error);
            Swal.fire('Error saving event', error.response.data.msg, 'error')
        }

    }

    const starDeletingEvents = async(calendarEvent) => {
        try {
            await calendarApi.delete(`${activeEvent._id}`)
            dispatch(onDeleteEvent())
        } catch (error) {
            console.log(error);
            Swal.fire('Error deleting event', error.response.data.msg, 'error')
        }

    }

    const startLoadingEvents = async() => {
        try {
            const { data } = await calendarApi.get('/events');
            const events = convertEventDate(data.events);
            dispatch(onLoadEvents(events));
        } catch (error) {
            console.log("error loading events");
            console.log(error)
        }
    }



  return {
    //Properties:
    events,
    activeEvent,
    //Methods:
    setActiveEvent,
    startSavingEvent,
    startLoadingEvents,
    starDeletingEvents
  }
}



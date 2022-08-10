import { useSelector, useDispatch } from "react-redux";
import calendarApi from "../api/calendarApi";
import { convertEventDate } from "../helpers/convertEventDate";
import { onAddNewEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { user } = useSelector(state => state.auth)

    const setActiveEvent = (calendarEvent) =>{
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent) => {
        //TODO: llegar al backend y enviar la info

        //todo bien:
        if( calendarEvent._id) {
            //updating
            dispatch(onUpdateEvent(calendarEvent))
        } else{
            //creating

            const { data } = await calendarApi.post('/events', calendarEvent);
            console.log(data);

            dispatch(onAddNewEvent({
                ...calendarEvent,
                id: data.event.id,
                user
            }));
        }
    }

    const startLoadingEvents = async() => {
        try {
            const { data } = await calendarApi.get('/events');
            const events = convertEventDate(data.events);
            dispatch(onLoadEvents(events));
            console.log(events);
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
    startLoadingEvents
  }
}



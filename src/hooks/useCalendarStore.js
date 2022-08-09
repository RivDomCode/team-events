import { useSelector, useDispatch } from "react-redux";
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
    const dispatch = useDispatch()

    const { events, activeEvent } = useSelector(state => state.calendar);

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
            dispatch(onAddNewEvent({
                ...calendarEvent,
                _id: new Date().getTime()
            }));
        }
    }



  return {
    //Properties:
    events,
    activeEvent,
    //Methods:
    setActiveEvent,
    startSavingEvent
  }
}



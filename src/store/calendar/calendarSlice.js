import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const tempEvent = {
    _id: new Date().getTime(),
    title:"new event",
    start: moment().toDate(),  //initial date using moment
    end: moment().add(2, "hours").toDate(),    //final date, I added 2 hours
    notes: "detail of the events ares bklalalvl",
    user: {
      _id:"123",
      name: "Manolo"
}}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (state, action ) => {
            state.activeEvent= action.payload;
        },
        onAddNewEvent: (state, action) => {
            state.events.push( action.payload );
            state.activeEvent = null;
        },

        onUpdateEvent: (state, {payload}) => {
            state.events = state.events.map( event => {
                if( event._id === payload._id) {
                    return payload
                }
                return event
            })
        },
        onDeleteEvent: (state) => {
            if( state.activeEvent) {
                state.events = state.events.filter(event => event._id !== state.activeEvent._id)
                state.activeEvent = null;
            }

        }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;
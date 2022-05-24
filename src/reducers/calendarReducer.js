import moment from 'moment';
import { types } from '../types/types';


const initialState = {
    events:[
        {
            title:"new event",
            start: moment().toDate(),  //initial date using moment
            end: moment().add(2, "hours").toDate(),    //final date, I added 2 hours
            notes: "detail of the events ares bklalalvl",
            user: {
              _id:"123",
              name: "Manolo"
            }
          }
    ],
    activeEvent: null
};


export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            };

        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events, action.payload
                ]
            }

        default:
            return state;
    }
}
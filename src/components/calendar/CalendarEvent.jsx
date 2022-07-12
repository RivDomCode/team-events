import React from 'react'

export const CalendarEvent = ({event}) => {

    const { title, user } = event

    return (
    <div>
        <p>{title.toUpperCase()}</p>
       <p>-PEDRO USER-</p> {/* here I have to render the userName */}
    </div>
  )
}

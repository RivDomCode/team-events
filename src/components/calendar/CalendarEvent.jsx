import React from 'react'

export const CalendarEvent = ({event}) => {

    const { title } = event

    return (
    <div>
        <p>{title.toUpperCase()}</p>
       <p>-USERNAME-</p> {/* here I have to render the userName */}
    </div>
  )
}

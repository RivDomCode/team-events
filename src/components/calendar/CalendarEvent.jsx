import React from 'react'

export const CalendarEvent = ({event}) => {

    const { title, user } = event

    return (
    <div>
        <p>{title.toUpperCase()}</p>
        <p>-{user.name}-</p>
    </div>
  )
}

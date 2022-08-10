import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { onDeleteEvent } from '../../store/calendar/calendarSlice';


export const DeleteBtn = () => {

  const { startDeletingEvents } = useCalendarStore();


  const handleDelete = (e) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        startDeletingEvents();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }



  return (
    <button className='delete-btn' onClick={handleDelete}>Delete Event</button>
  )
}

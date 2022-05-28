import React from 'react'
import { useDispatch } from 'react-redux'
import { eventDeleted } from '../../actions/events';
import Swal from 'sweetalert2';


export const DeleteBtn = () => {

  const dispatch = useDispatch();

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
        dispatch(eventDeleted(e));
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

import React from 'react'

export const Modal = ( ) => {

  return (
    <section className='modal-container'>
      <div className="modal-form-container">
      <span class="material-symbols-outlined">
close
</span>
        <h2>New event</h2>
        <form >
          <div className="modal-input-container">
          <label>Task</label>
            <input type="text" placeholder='task' />
          </div>
          <div className="modal-input-container">
          <label>Starting date and time</label>
            <input type="text" placeholder='date and time' />
          </div>
          <div className="modal-input-container">
          <label>Ending date and time</label>
            <input type="text" placeholder='task' />
          </div>
          <div className="modal-input-container">
          <label>Title and notes</label>
            <input type="text" placeholder='task' />
          </div>
          <div className="modal-input-container">
          <label>Description</label>
            <textarea type="text" placeholder='task' rows={5}/>
          </div>
          <div className="add-event-btn-container">
          <button className='add-event-btn'>Add new Event</button>

          </div>
        </form>
      </div>
    </section>
  )
}


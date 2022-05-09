import React from 'react'

export const Modal = () => {
  return (
    <section className='modal-container'>
      <div className="modal-form-container">
        <h2>Esto es el Modal</h2>
        <form >
          <div className="modal-input-container">
          <label>Task</label>
            <input type="text" placeholder='task' />
          </div>

        </form>
      </div>
    </section>
  )
}


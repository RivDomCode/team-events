import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Swal from 'sweetalert2'


export const Modal = () => {

  //react-datetime
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  //get data from form
  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: new Date(),
    end: new Date(),
  });

  const { title, notes, start, end } = formValues;

  const hanldeInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name] : e.target.value
    })
  }

  //dates
  const handleStartDate = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      start:e
    })
  }

  const handleEndDate = (e) => {
    setDateEnd(e);
    setFormValues({
      ...formValues,
      end:e
    })
  }

  //submit the form
  const handleSubmitForm = (e)=>{
    e.preventDefault();

    //form validations
    if(start >= end) {
     return  Swal.fire({
        title: 'Error!',
        text: 'Start date cannot be equal or higher than end date',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

    if (title.trim() < 2 ) {
      return  Swal.fire({
        title: 'Error!',
        text: 'The event must have a title',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }

    //TODO: function to close modal and save in database

  }

  return (
    <section className="modal-container">
      <div className="modal-form-container">
        <span class="material-symbols-outlined">close</span>
        <h2>New event</h2>
        <form onSubmit={handleSubmitForm}>
          <div className="react-datetimepicker-container">
            <label>Starting date and time</label>
            <DateTimePicker onChange={handleStartDate} value={dateStart} />
          </div>
          <div className="react-datetimepicker-container">
            <label>Ending date and time</label>
            <DateTimePicker onChange={handleEndDate} value={dateEnd} />
          </div>
          <div className="modal-input-container">
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={hanldeInputChange}/>
          </div>
          <div className="modal-input-container">
            <label>Description</label>
            <textarea type="text" name="notes" rows={5} value={notes} onChange={hanldeInputChange}/>
          </div>
          <div className="add-event-btn-container">
            <button className="add-event-btn">Add new Event</button>
          </div>
        </form>
      </div>
    </section>
  );
};

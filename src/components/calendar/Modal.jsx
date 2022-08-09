import { useState, useEffect } from "react";
import moment from 'moment';
import DateTimePicker from "react-datetime-picker";
import Swal from 'sweetalert2';
import { useCalendarStore } from "../../hooks/useCalendarStore";

const now = moment().minutes(0).seconds(0).add(1,'hours'); // 3:00:00
const nowPlus1 = now.clone().add(1, 'hours');
const initEvent = {
  title: "",
  notes: "",
  start: now.toDate(),
  end: nowPlus1.toDate()
}

export const Modal = ( {closeModal} ) => {
  const {activeEvent, startSavingEvent} = useCalendarStore()

  //react-datetime
  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());

  //get data from form
  const [formValues, setFormValues] = useState(initEvent);

  const { title, notes, start, end } = formValues;

  //useEffect to listen changes in activeEvent
  useEffect(() => {
    if (activeEvent!=null) {
      setFormValues({...activeEvent})
    }
  }, [activeEvent])

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
  const handleSubmitForm = async(e)=>{
    e.preventDefault();
    const momentStart = moment( start );
    const momentEnd = moment( end );
    //form validations
    if(momentStart.isSameOrAfter(momentEnd)) {
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
    //add new event
    await startSavingEvent(formValues);
    //close modal after add new event
    closeModal();
  }

  return (
    <section className="modal-container">
      <div className="modal-form-container">
        <span class="material-symbols-outlined" onClick={closeModal}>close</span>
        <h2>{(activeEvent) ? "Edit Event" : "New Event"}</h2>
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

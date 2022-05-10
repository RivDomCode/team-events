import React, {useState} from "react";
import DateTimePicker from "react-datetime-picker";

export const Modal = () => {

  //react-datetime
  const [value, onChange] = useState(new Date());

  return (
    <section className="modal-container">
      <div className="modal-form-container">
        <span class="material-symbols-outlined">close</span>
        <h2>New event</h2>
        <form>
          <div className="modal-input-container">
            <label>Task</label>
            <input type="text" placeholder="task" />
          </div>
          <div className="react-datetimepicker-container">
            <label>Starting date and time</label>
            <DateTimePicker
              onChange={onChange}
              value={value}

            />
          </div>
          <div className="react-datetimepicker-container">
            <label>Ending date and time</label>
            <DateTimePicker
              onChange={onChange}
              value={value}

            />
          </div>
          <div className="modal-input-container">
            <label>Title and notes</label>
            <input type="text" placeholder="task" />
          </div>
          <div className="modal-input-container">
            <label>Description</label>
            <textarea type="text" placeholder="task" rows={5} />
          </div>
          <div className="add-event-btn-container">
            <button className="add-event-btn">Add new Event</button>
          </div>
        </form>
      </div>
    </section>
  );
};

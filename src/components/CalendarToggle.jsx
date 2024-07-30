import React, { useState } from 'react';
import Calendar from "react-calendar";




const CalendarToggle = ({ calendarDate, onDateChange }) => {
    const [showCalendar, setShowCalendar] = useState(false);

    const handleToggleCalendar = () => {
        setShowCalendar(!showCalendar)
    }
    return (
      <div className="calendar-toggle">
        <button className="toggle-button" onClick={handleToggleCalendar}>
          {showCalendar ? "Скрыть календарь" : "Посмотреть календарь"}
        </button>
        {showCalendar && (
          <div className="calendar-container">
            <Calendar onChange={onDateChange} value={calendarDate}  />
          </div>
        )}
      </div>
    );
}

export default CalendarToggle;

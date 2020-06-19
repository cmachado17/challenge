import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const Calendario = (props) => {
  const myEventsList = [1, 2, 3, 4];
  return (
    <div className="container">
      <Calendar
      views={['month', 'week']}
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={{next: "Siguiente", previous: "Anterior", today: "Hoy", month: "Mensual", week: "Semanal"}}
      />
    </div>
  );
};

export default Calendario;

import React, {useState, useEffect} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calendario = (props) => {

const [eventos, setEventos] = useState([]);

useEffect(() =>{
  const cargarEventos = async() =>{
    try{
      const respuesta = await fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
    }catch(e){
      alert(e);
    }
  }
  cargarEventos();
}, [eventos])

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

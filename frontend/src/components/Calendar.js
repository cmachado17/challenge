import React, {useState, useEffect} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calendario = () => {

const [eventos, setEventos] = useState([]);

useEffect(() =>{
  const cargarEventos = async() =>{
    try{
      const respuesta = await fetch('http://localhost:5000/');
      const events = await respuesta.json();
      console.log(events);
      setEventos(events);
      }
    catch(e){
      alert(e);
    }
  }
  cargarEventos();
}, [])

  return (
    <div className="container">
      <Calendar
      views={['month', 'week']}
        localizer={localizer}
        events={eventos.map(evento =>(
          {
            title: evento.title,
            start: moment(evento.start).toDate(),
            end: moment(evento.end).toDate()
          }
        ))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={{next: "Siguiente", previous: "Anterior", today: "Hoy", month: "Mensual", week: "Semanal"}}
      />
    </div>
  );
};

export default Calendario;

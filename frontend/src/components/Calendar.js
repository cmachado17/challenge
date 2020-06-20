import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from "react-bootstrap/Button";
import ModalEvento from './ModalEvento';

const localizer = momentLocalizer(moment);

const Calendario = () => {

  //Estado eventos
  const [eventos, setEventos] = useState([]);

  //Estados Modal
  const [mostrarModal, setMostrarModal] = useState(false);

//Mostrar Modal
  const handleMostrarModal = (e) =>{
    setMostrarModal(true)
  }
  //Ocultar Modal
  const handleOcultarModal = (e) => {
    setMostrarModal(false);
  }


  //Peticion para la carga de eventos
  useEffect(() => {
    const cargarEventos = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/get-events");
        const events = await respuesta.json();
        setEventos(events);
      } catch (e) {
        alert('asd');
      }
    };
    cargarEventos();
  }, []);

  return (
    <div className="container">
      <Button onClick={handleMostrarModal}>Nuevo evento</Button>
      <Calendar
        views={["month", "week"]}
        localizer={localizer}
        //pasar las fechas a objeto Date para formato necesario de react-big-calendar
        events={eventos.map((evento) => ({
          title: evento.title,
          start: moment(evento.start).toDate(),
          end: moment(evento.end).toDate(),
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mensual",
          week: "Semanal",
        }}
      />
    <ModalEvento show={mostrarModal} handleOcultarModal={handleOcultarModal}/>
    </div>
  );
};

export default Calendario;

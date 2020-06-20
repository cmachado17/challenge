import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from "react-bootstrap/Button";
import ModalEvento from "./ModalEvento";
import { Link } from "react-router-dom";

const localizer = momentLocalizer(moment);

const Calendario = () => {
  //Estado eventos
  const [eventos, setEventos] = useState([]);

  //Estados Modal
  const [mostrarModal, setMostrarModal] = useState(false);

  //Mostrar Modal
  const handleMostrarModal = (e) => {
    setMostrarModal(true);
  };
  //Ocultar Modal
  const handleOcultarModal = (e) => {
    setMostrarModal(false);
  };

  //Peticion para la carga de eventos
  const cargarEventos = async () => {
    try {
      const respuesta = await fetch("http://localhost:5000/get-events");
      const events = await respuesta.json();
      setEventos(events);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() =>{
    cargarEventos()}, []);

  const CustomEvent = (event) => {
    console.log(event.event.start);
    return (
      <div>
        <Link to="/evento">
          {event.event.title}
        </Link>
      </div>
    );
  };

  let formats = {
    weekDayFormat: null,
    eventTimeRangeStartFormat: null,
    eventTimeRangeEndFormat: null,
  };

  return (
    <div className="container">
      <h1>Challenge Alkemy</h1>
      <Button onClick={handleMostrarModal}>Nuevo evento</Button>
      <Calendar
        components={{
          event: CustomEvent,
        }}
        views={["week", "month"]}
        defaultView="week"
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
        formats={formats}
      />
      <ModalEvento
        show={mostrarModal}
        handleOcultarModal={handleOcultarModal}
        cargarEventos={cargarEventos}
      />
    </div>
  );
};

export default Calendario;

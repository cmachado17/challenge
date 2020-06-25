import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from "react-bootstrap/Button";
import ModalEvento from "./ModalEvento";
import { Link } from "react-router-dom";

const localizer = momentLocalizer(moment);

const Calendario = (props) => {
  //Estado eventos
  const [eventos, setEventos] = useState([]);

  //Estados Modal
  const [mostrarModal, setMostrarModal] = useState(false);

  //admin
  const [admin, setAdmin] = useState(true);

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

  //Borrar evento
  const borrarEvento = async(id) => {
    try {
      fetch(`http://localhost:5000/delete-event/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      }).then(response => response.json())
      .then(data =>{
        if(data.status === 'ok'){
          alert(data.message);
          cargarEventos();
        }else{
          alert(data.message);
        }
      })
  
    

    } catch (e) {}
  };

  useEffect(() => {
    cargarEventos();
  }, []);

  const CustomEvent = (event) => {
    return (
      <div>
        <Link to={`/evento/${event.event.id}`}>{event.event.title}</Link>
        {admin && (
          <button
            className="bg-danger"
            onClick={() => borrarEvento(event.event.id)}
          >
            X
          </button>
        )}
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
          id: evento.id_evento,
          title: evento.title_evento,
          start: moment(evento.start_evento).toDate(),
          end: moment(evento.end_evento).toDate(),
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
      type="nuevo"
        show={mostrarModal}
        handleOcultarModal={handleOcultarModal}
        cargarEventos={cargarEventos}
      />
    </div>
  );
};

export default Calendario;

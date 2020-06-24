import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ModalEvento = (props) => {
  //estados valores del formulario
  const [titulo, setTitulo] = useState("");
  const [inicio, setInicio] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFinal, setHoraFinal] = useState("");

  //Tomar valores del formulario

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  };
  const handleInicio = (e) => {
    setInicio(e.target.value);
  };
  const handleHoraInicio = (e) => {
    setHoraInicio(e.target.value);
  };
  const handleHoraFinal = (e) => {
    setHoraFinal(e.target.value);
  };

  //Cerrar el modal
  const handleClickCerrar = (e) => {
    props.handleOcultarModal();
  };

  //Enviar datos de evento
  const handleSave = (e) => {
    //objeto a enviar al back
    const formData = new FormData();

    let start = inicio + "T" + horaInicio;
    let end = inicio + "T" + horaFinal;

    formData.append("titulo", titulo);
    formData.append("inicio", start);
    formData.append("final", end);

    let url = "http://localhost:5000/new-event";

    fetch(url, {
      method: "POST",
      body: formData,
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          //cerrar el modal
          props.handleOcultarModal();
         //recargar eventos en calendario
         props.cargarEventos();
        } else {
          alert("Error al ingresar");
        }
      })
      .catch((error) => {
        console.log("Error en peticion");
      });
  };

  return (
    <Modal show={props.show} onHide={handleClickCerrar}>
      <Modal.Header closeButton>Nuevo/Editando Evento</Modal.Header>
      <Modal.Body>
        <Form enctype="multipart/form-data">
          <Form.Group>
            <Form.Label>Nombre del evento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de evento"
              value={titulo}
              onChange={handleTitulo}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha del evento</Form.Label>
            <Form.Control
              type="date"
              placeholder="Fecha de evento"
              value={inicio}
              onChange={handleInicio}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Label>Inicio del evento</Form.Label>
              <Form.Control
                type="time"
                value={horaInicio}
                onChange={handleHoraInicio}
              />
            </Col>
            <Col>
              <Form.Label>Fin del evento</Form.Label>
              <Form.Control
                type="time"
                value={horaFinal}
                onChange={handleHoraFinal}
              />
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClickCerrar}>
          Cerrar
        </Button>
        <Button onClick={handleSave}>Enviar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEvento;

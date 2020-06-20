import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ModalEvento = (props) => {
  //Cerrar el modal
  const handleClickCerrar = (e) => {
    props.handleOcultarModal();
  };

  //Enviar datos de evento
  const handleSave = (e) => {
    alert("Guardar");
    props.handleOcultarModal();
  };

  return (
    <Modal show={props.show} onHide={handleClickCerrar}>
      <Modal.Header closeButton>Nuevo/Editando Evento</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre del evento</Form.Label>
            <Form.Control type="text" placeholder="Nombre de evento" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha del evento</Form.Label>
            <Form.Control type="date" placeholder="Fecha de evento" />
          </Form.Group>
          <Row>
            <Col>
              <Form.Label>Inicio del evento</Form.Label>
              <Form.Control type="time" />
            </Col>
            <Col>
              <Form.Label>Fin del evento</Form.Label>
              <Form.Control type="time" />
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

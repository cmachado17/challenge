import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ModalEvento = (props) => {
  return (
    <Modal show={props.show}>
      <Modal.Header closeButton>Nuevo/Editando Evento</Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant="danger">Cerrar</Button>
        <Button>Enviar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEvento;

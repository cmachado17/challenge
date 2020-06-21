import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

const Evento = () => {
  let { id } = useParams();
  let url = "http://localhost:5000/evento/";
  const [evento, setEvento] = useState({});

  useEffect(() => {
    fetch(url + id)
      .then((response) => response.json())
      .then((data) => {
        setEvento(data);
      });
  }, []);

  return (
    <div className="container">
      <h2>{evento.title}</h2>

      <Row className="pl-3 py-3 bg-light">
        <Button variant="success mx-2">Editar</Button>

        <Button variant="danger mx-2">Eliminar</Button>
      </Row>

      <Row className="pl-3 my-3">
        <Button variant="success mx-2">Asistire</Button>

        <Button variant="danger mx-2">No Asistire</Button>
      </Row>
      <Row>
        <Col sm={12} md={9}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            gravida enim at libero pretium sagittis. Praesent cursus lobortis
            nunc et volutpat. Vivamus aliquet, risus id faucibus dictum, massa
            lectus rhoncus nibh, eu mollis felis augue ut tellus. Morbi viverra
            luctus dui, at malesuada felis. Fusce vehicula odio ac tempor
            tincidunt. Etiam facilisis, turpis blandit maximus elementum, tellus
            ex porta justo, ut fringilla tortor sapien et turpis. Sed volutpat
            sagittis est ac euismod. Etiam lacinia quis leo ut aliquet. Donec
            lacus lorem, aliquet sed tortor a, mattis tincidunt ipsum. Integer
            ac mi eget ante tristique bibendum. Phasellus quis tincidunt ante.
            Morbi et volutpat erat. Sed vel sem suscipit, molestie odio sit
            amet, lobortis leo.
          </p>
        </Col>
        <Col sm={12} md={3} className="bg-secondary">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};

export default Evento;

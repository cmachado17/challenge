const cnn = require("../src/connection");

//traer todos los eventos
const getEvents = (req, res) => {
  let sql = "SELECT * FROM eventos";
  cnn.query(sql, (err, result, fields) => {
    res.json(result);
  });
};

//traer evento especifico
const getEvent = (req, res) => {
  let sql = `SELECT * FROM eventos WHERE id_evento = ${req.params.id}`;
  try {
    cnn.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (e) {
    console.log(e);
  }
};

//crear nuevo evento
const newEvent = (req, res) => {
  const { titulo, inicio, final } = req.body;

  let sqlInsert =
    "INSERT INTO eventos (title_evento, start_evento, end_evento) VALUES (?,?,?)";

  values = [titulo, inicio, final];
  try {
    cnn.query(sqlInsert, values, (err, result, fields) => {
      if (err) throw err;

      res.send({
        status: "ok",
        message: "Evento creado satisfactoriamente",
      });
    });
  } catch (e) {
    console.log(e);
  }
};

//borrar evento
const deleteEvent = (req, res) => {
  let sqlDelete = `DELETE FROM eventos WHERE id_evento = ${req.params.id}`;
  try {
    cnn.query(sqlDelete, (err, result, fields) => {
      if (err) throw err;
      res.json({
        status: "ok",
        message: "Evento borrado",
      });
    });
  } catch (e) {
    console.log(e);
    res.json({
      status: "error",
      message: "Error al eliminar la publicación",
    });
  }
};

//modificar evento

const modifyEvent = (req, res) => {

  console.log(req.body)

  const { titulo, inicio, final } = req.body;

  let sqlEdit = `UPDATE eventos SET title_evento = ?, start_evento = ?, end_evento = ? WHERE id_evento = ${req.params.id}`;

  values = [titulo, inicio, final];

  try {
    cnn.query(sqlEdit, values, (err, result, fields) => {
      if (err) throw err;
      res.json({
        status: "ok",
        message: "Evento modificado correctamente",
      });
    });
  } catch (e) {
    console.log(e);
    res.json({
      status: "error",
      message: "Error al modificar el evento",
    });
  }
};

module.exports = {
  getEvents,
  getEvent,
  newEvent,
  deleteEvent,
  modifyEvent,
};

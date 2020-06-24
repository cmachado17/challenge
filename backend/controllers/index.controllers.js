const cnn = require("../src/connection");

let eventos = [
  {
    id: 1,
    title: "Webinar JS",
    start: "2020-06-22T21:00",
    end: "2020-06-22T22:00",
  },
  {
    id: 2,
    title: "Webinar Python",
    start: "2020-06-24T15:00",
    end: "2020-06-24T18:00",
  },
  {
    id: 3,
    title: "React Workshop",
    start: "2020-06-26T12:00",
    end: "2020-06-26T15:00",
  },
  {
    id: 4,
    title: "Angular Workshop",
    start: "2020-06-22T21:00",
    end: "2020-06-22T22:00",
  },
];
var id = 5;
//traer todos los eventos
const getEvents = async (req, res) => {
  let sql = "SELECT * FROM eventos";
  cnn.query(sql, (err, result, fields) => {
    res.json(result);
  });
};

//traer evento especifico
const getEvent = (req, res) => {
  try {
    eventos.map((evento) => {
      if (evento.id == req.params.id) {
        res.send(evento);
      }
    });
  } catch (e) {
    console.log(e);
  }
};

//crear nuevo evento
const newEvent = async (req, res) => {
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
const deleteEvent = async (req, res) => {
  let sqlDelete = `DELETE FROM eventos WHERE id_evento = ${req.params.id}`;
  try {
    cnn.query(sqlDelete, (err, result, fields) => {
      if(err) throw err;
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

module.exports = {
  getEvents,
  getEvent,
  newEvent,
  deleteEvent,
};

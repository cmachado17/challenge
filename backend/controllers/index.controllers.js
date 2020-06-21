let eventos = [
  {
    id: 1,
    title: "Webinar JS",
    start: "2020-06-19T21:00",
    end: "2020-06-19T22:00",
  },
  {
    id: 2,
    title: "Webinar Python",
    start: "2020-06-15T15:00",
    end: "2020-06-15T18:00",
  },
  {
    id: 3,
    title: "React Workshop",
    start: "2020-06-20T12:00",
    end: "2020-06-20T15:00",
  },
  {
    id: 4,
    title: "Angular Workshop",
    start: "2020-06-19T21:00",
    end: "2020-06-19T22:00",
  },
];
var id = 5;
//traer todos los eventos
const getEvents = async (req, res) => {
  await res.send(eventos);
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
  console.log(req.body);
  try {
    const { titulo, inicio, final } = req.body;
    const eventInsert = {
      title: titulo,
      start: inicio,
      end: final,
      id: id++,
    };
    eventos.push(eventInsert);
    res.send({
      status: "ok",
      message: "Evento creado satisfactoriamente",
    });
  } catch (e) {
    console.log(e);
  }
};

//borrar evento
const deleteEvent = async (req, res) => {
  try {
    let event;
    eventos.map((evento) => {
      if (evento.id == req.params.id) {
        event = evento;
      }
    });
    const removeItem = (array, item) => {
      let i = array.indexOf(item);
      if (i !== -1) {
        array.splice(i, 1);
      }
    };
    removeItem(eventos, event);
    res.send(eventos);
  } catch (e) {
    console.log(e);
    res.send('error')
  }
};

module.exports = {
  getEvents,
  getEvent,
  newEvent,
  deleteEvent,
};

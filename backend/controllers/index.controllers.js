let eventos = [
  {
    title: "Webinar JS",
    start: "2020-06-19T21:00",
    end: "2020-06-19T22:00",
  },
  {
    title: "Webinar Python",
    start: "2020-06-15T15:00",
    end: "2020-06-15T18:00",
  },
  {
    title: "React Workshop",
    start: "2020-06-20T12:00",
    end: "2020-06-20T15:00",
  },
  {
    title: "Angular Workshop",
    start: "2020-06-19T21:00",
    end: "2020-06-19T22:00",
  },

];

const getEvents = async (req, res) => {
  await res.send(eventos);
};

const newEvent = async (req, res) => {
console.log(req.body)
  try {
    const { titulo, inicio, final } = req.body;
    const eventInsert = {
      title: titulo,
      start: inicio,
      end: final,
    };
    eventos.push(eventInsert);
    res.send({
        status: "ok",
        message: "Evento creado satisfactoriamente"
    });
  } catch (e) {
    console.log(e);
  }
};

//   const newEvent = async () => {
//     try {
//       router.post("/", (req, res) => {
//         let eventInsert = {
//           title: req.body.title,
//           start: req.body.start,
//           end: req.body.end,
//         };
//         eventos.push(eventInsert);
//         res.send(eventos);
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   };

module.exports = {
  getEvents,
  newEvent,
};

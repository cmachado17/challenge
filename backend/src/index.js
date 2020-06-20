const express = require('express');
const cors = require('cors');
const app = express();

const eventos = [
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
]

//middlewares
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type']
}))


//routes
app.get('/', (req, res)=>{
    res.send(eventos);
})

//listener
app.listen('5000', () =>{
    console.log('Conectado a server 5000');
})
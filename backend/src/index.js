const express = require('express');
const cors = require('cors');
const app = express();

const eventos = [
    {
        nombre: "Webinar JS",
        fecha: "19/06/2020",
    }
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
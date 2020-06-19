const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hola mundo desde express');
})

app.listen('5000', () =>{
    console.log('Conectado a server 5000');
})
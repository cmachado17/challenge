const express = require("express");
const cors = require("cors");


const app = express();


//middlewares

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type"],
  })
);

//routes
app.use(require('../routers/index'));


//listener
app.listen("5000", () => {
  console.log("Conectado a server 5000");
});

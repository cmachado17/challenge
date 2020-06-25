

const express = require("express");
const cors = require("cors");


const app = express();

const PORT = process.env.PORT || 5000;
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
app.listen(PORT, () => {
  console.log("Conectado a server: " + PORT);
});

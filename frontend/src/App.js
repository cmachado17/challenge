import React from "react";
import Calendario from "./components/Calendar";
import Evento from "./components/Evento";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Calendario  />} />
        <Route exact path="/evento/:id" children={<Evento />} />
      </Switch>
    </Router>
  );
}

export default App;

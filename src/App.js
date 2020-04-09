import React from "react";
import "./App.css";
import { Switch, Route,Link  } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/contacts" component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;

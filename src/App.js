import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Greet from "./components/Greet";
import ContextDemo from "./components/ContextDemo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/greet/:name" exact component={Greet} />
        <Route path="/contextdemo" exact component={ContextDemo} />
      </Switch>
    </Router>
  );
}

export default App;

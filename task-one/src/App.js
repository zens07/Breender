import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Content from "./components/content";
import Home from "./components/home";
import Profile from "./components/profile";
import Edit from "./components/edit";
import AddPet from "./components/add-pet";
import CardHomeLeft from "./card/card-home-left";
// import Protected from "./protected";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/edit" component={Edit} />
          <Route path="/add" component={AddPet} />
          <Route path="/" component={Content} />
        </Switch>
      </Router>
    );
  }
}
export default App;

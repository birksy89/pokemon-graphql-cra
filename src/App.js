import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import logo from "./logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="text-center">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </header>

        <div className="container">
          <div className="row justify-content-center">
            <Switch>
              <Route exact path="/" component={PokemonList} />
              <Route exact path="/:id" component={PokemonDetail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

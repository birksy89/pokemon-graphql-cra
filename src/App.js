import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/detail">Details</Link>

          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/:id" component={PokemonDetail} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;

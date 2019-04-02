import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import PokemonList from "./components/PokemonList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/detail">Details</Link>

          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/detail" component={() => <p>Hello</p>} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;

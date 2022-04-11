import { Component } from "react";
import Circle from "./Circle";

class App extends Component {
  state = {
    score: 0,
    pace: 1000,
    active: 0,
  };

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <div className="App">
        <h1>Speedgame</h1>
        <div className="circles">
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </div>
        <button type="button" id="start">
          Start game
        </button>
        <button type="button" id="stop">
          Stop game
        </button>
      </div>
    );
  }
}

export default App;

import { Component } from "react";
import Circle from "./Circle";
import Button from "./Button";

class App extends Component {
  state = {
    score: 0,
    pace: 1000,
    active: 0,
  };

  timer = undefined;

  circles = [
    { id: 1, isActive: false },
    { id: 2, isActive: false },
    { id: 3, isActive: false },
    { id: 4, isActive: false },
  ];

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  startGame = () => {
    this.nextCircle();
  };

  stopGame = () => {
    clearTimeout(this.timer);
  };

  clickedCircle = (i) => {
    console.log("clicked", i);
    this.setState({
      score: this.state.score + 10,
    });
  };

  nextCircle = () => {
    let nextActive;
    do {
      nextActive = this.getRndInteger(0, this.circles.length - 1);
    } while (nextActive === this.state.active);

    this.setState({
      active: nextActive,
    });

    console.log("active is ", this.state.active);

    this.timer = setTimeout(this.nextCircle, 1000);
  };

  render() {
    return (
      <div className="App">
        <h1>Speedgame</h1>
        <p>Your score: {this.state.score}</p>
        <div className="circles">
          {this.circles.map((circle, i) => (
            <Circle key={i} id={i} click={() => this.clickedCircle(i)} />
          ))}
        </div>
        <Button click={this.startGame}>START</Button>
        <Button click={this.stopGame}>STOP</Button>
      </div>
    );
  }
}

export default App;

import { Component } from "react";
import Circle from "./Circle";
import Button from "./Button";
import Popup from "./Popup";

import bgSound from "./sounds/bg.mp3";
import endSound from "./sounds/end.mp3";

const BGsound = new Audio(bgSound);
const ENDsound = new Audio(endSound);

class App extends Component {
  state = {
    score: 0,
    pace: 1200,
    active: -1,
    showPopup: false,
    rounds: 0,
    gameOn: false,
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

  clickedCircle = (i) => {
    if (this.state.active !== i) {
      this.stopGame();
      return;
    }
    this.setState({
      score: this.state.score + 10,
      rounds: this.state.rounds - 1,
    });
  };

  closeHandler = () => {
    window.location.reload();
    // this.setState({
    //   showPopup: false,
    //   score: 0,
    //   active: -1,
    // });
  };

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.stopGame();
      return;
    }
    let nextActive;
    do {
      nextActive = this.getRndInteger(0, this.circles.length - 1);
    } while (nextActive === this.state.active);

    this.setState({
      active: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
    });

    console.log(this.state.rounds);

    this.timer = setTimeout(this.nextCircle, this.state.pace);
  };

  startGame = () => {
    this.nextCircle();
    this.setState({ gameOn: true });
    BGsound.play();
  };

  stopGame = () => {
    clearTimeout(this.timer);
    this.setState({
      showPopup: true,
      gameOn: false,
      rounds: 0,
    });
    BGsound.pause();
    ENDsound.play();
  };

  render() {
    return (
      <div className="App">
        <h1>Speedgame</h1>
        <p>Your score: {this.state.score}</p>
        <div className="circles">
          {this.circles.map((circle, i) => (
            <Circle
              key={i}
              id={i}
              click={() => this.clickedCircle(i)}
              active={this.state.active === i}
              disabled={this.state.gameOn}
            />
          ))}
        </div>
        {!this.state.gameOn && <Button click={this.startGame}>START</Button>}
        {this.state.gameOn && <Button click={this.stopGame}>STOP</Button>}
        {this.state.showPopup && (
          <Popup close={this.closeHandler} score={this.state.score} />
        )}
      </div>
    );
  }
}

export default App;

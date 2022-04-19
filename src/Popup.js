import React from "react";

const Popup = (props) => {
  let message = "";

  if (props.score <= 50) {
    message = "You can do better!";
  } else if (props.score > 50 && props.score <= 100) {
    message = "Not bad!";
  } else {
    message = "Great!";
  }
  return (
    <div id="overlay">
      <div className="modal">
        <p>Ups, game over!</p>
        <p id="result">Score is: {props.score}</p>
        <p>{message}</p>
        <button type="button" id="close" onClick={props.close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;

import React from "react";

const Popup = (props) => {
  return (
    <div id="overlay">
      <div className="modal">
        <p>Ups, game over!</p>
        <p id="result">{props.score}</p>
        <button type="button" id="close" onClick={props.close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;

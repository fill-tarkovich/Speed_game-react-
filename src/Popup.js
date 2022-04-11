import React from "react";

const Popup = () => {
  return (
    <div id="overlay">
      <div className="modal">
        <p>Ups, game over!</p>
        <p id="result"></p>
        <button type="button" id="close">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;

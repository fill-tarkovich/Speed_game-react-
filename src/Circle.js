import React from "react";

const Circle = (props) => {
  return (
    <div
      style={{ pointerEvents: props.disabled ? "auto" : "none" }}
      className={`circle ${props.active ? "active" : ""}`}
      onClick={props.click}
    >
      🔘
    </div>
  );
};

export default Circle;

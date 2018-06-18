import React from "react";

export const Randombutton = props => {
  return (
    <div>
      {
        <button id="randomButton" onClick={props.handleClick}>
          Get lucky winner!
        </button>
      }
    </div>
  );
};

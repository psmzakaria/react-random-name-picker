import React from "react";

export const Randombutton = props => {
  return (
    <div>
      {<button onClick={() => props.handleClick()}>get lucky winner!</button>}
    </div>
  );
};

import React from "react";

const Form = props => (
  <form onSubmit={props.handleSubmit}>
    <input type="text" value={props.inputName} onChange={props.handleNewName} />
    <button id="addButton">Add a Name</button>
  </form>
);

export default Form;

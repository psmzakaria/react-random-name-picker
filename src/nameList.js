import React from "react";

const nameList = props => {
  return <li className={props.isLucky ? "lucky" : ""}>{props.name}</li>;
};

export default nameList;

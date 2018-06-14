import React, { Component } from "react";
import math from "mathjs";
import { Randombutton } from "./Randombutton.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: 0
    };
  }
  render() {
    return (
      <div>
        <h1>hello random name picker</h1>
        {/* <h3>{this.state.names[this.state.luckyWinnerIndex]}</h3> */}
        <ul>
          {this.state.names.map((name, i) => {
            if (this.state.luckyWinnerIndex === i) {
              return <li id="winner"> {name} </li>;
            } else {
              return <li id="">{name} </li>;
            }
          })}
        </ul>
        {/* <button onClick={() => this.handleClick()}>get lucky winner!</button> */}
        <Randombutton handleClick={() => this.handleClick()} />
      </div>
    );
  }

  handleClick() {
    this.setState({
      luckyWinnerIndex: math.randomInt(this.state.names.length)
    });
  }
}

export default App;

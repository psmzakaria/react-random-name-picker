import React, { Component } from "react";
import math from "mathjs";
import { Randombutton } from "./Randombutton.js";
import Form from "./Form.js";
import nameList from "./nameList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null,
      isLoading: false
    };
  }
  render() {
    return (
      <div>
        <h1 id="title">hello random name picker</h1>

        <div>
          <ul>
            {this.state.names.map((name, index) => (
              <nameList
                key={index}
                name={name}
                isLucky={this.state.luckyWinnerIndex === index}
              />
            ))}
          </ul>
          <Randombutton handleClick={() => this.handleClick()} />
        </div>
        <Form
          inputName={this.state.inputName}
          handleNewName={event => this.handleNewNameChange(event)}
          handleSubmit={event => this.handleSubmit(event)}
        />
      </div>
    );
  }

  handleClick() {
    this.setState({
      isLoading: true
    });
    const randomIndex = math.randomInt(this.state.names.length);
    this.setState({
      luckyWinnerIndex: randomIndex
      
    });
  }

  handleNewNameChange(event) {
    this.setState({
      inputName: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newName = this.state.inputName;
    this.setState({
      names: [...this.state.names, newName],
      inputName: ""
    });
  }
}

export default App;

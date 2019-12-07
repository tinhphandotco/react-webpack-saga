import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  addCounter = num => () => {
    this.setState(pevState => ({
      counter: pevState.counter + num,
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter} </h1>

        <button type="button" onClick={this.addCounter(-1)}>
          <h1>-</h1>
        </button>
        <button type="button" onClick={this.addCounter(1)}>
          <h1>+</h1>
        </button>
      </div>
    );
  }
}

export default App;

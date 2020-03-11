import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  operation(isSum) {
    if (isSum === true) {
      this.setState(state => ({ counter: state.counter + 1 }));
    } else {
      if (this.state.counter > 0) {
        this.setState(state => ({ counter: state.counter - 1 }));
      }
    }
  }

  render() {
    const numbers = Array.from(Array(this.state.counter).keys());
    console.log(numbers);
    return (
      <div>
        <button onClick={() => this.operation(true)}>+1</button>
        <button
          onClick={() => this.operation(false)}
          disabled={this.state.counter === 0}
        >
          -1
        </button>
        <p>{this.state.counter}</p>

        {this.state.counter >= 5 && <span>Congrats</span>}
        <ul>
          {numbers.map(value => {
            return <li key={value}>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Counter;

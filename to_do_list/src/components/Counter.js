import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      list: []
    };

    this.handleChange = event => {
      this.setState({
        input: event.target.value
      });
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({
      input: "",
      list: state.list.concat([state.input])
    }));
  }

  handleDelete() {
    this.setState({
      input: "",
      list: []
    });
  }

  eachDelete(index) {
    this.setState(state => state.list.splice(index, 1));
  }

  render() {
    const { input, list } = this.state;

    return (
      <div>
        <form className="all" onSubmit={event => this.handleSubmit(event)}>
          <input
            className="input"
            type="text"
            value={input}
            onChange={this.handleChange}
          />
          <div className="box">
            <button className="add" type="submit">
              Add Task
            </button>
            <button
              className="remove"
              type="button"
              onClick={event => this.handleDelete(event)}
            >
              Remove All
            </button>
          </div>
        </form>
        <div className="box2">
          <ul>
            {list.map((value, index) => {
              return (
                <li key={index}>
                  {value}{" "}
                  <button type="button" onClick={() => this.eachDelete(index)}>
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Counter;

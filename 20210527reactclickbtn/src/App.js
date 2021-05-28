import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  
  addCount = () => {
    this.setState({count: this.state.count + 1});
  }

  resetCount = () => {
    this.setState({count: this.state.count = 0});
  }

  render() {
    return (
      <div className="App">
        <button onClick={ this.addCount }>+1</button>
        <button onClick={ this.resetCount }>Reset</button>
        <h1>Count: { this.state.count }</h1>
      </div>
    );
  }
}
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    inputText: ''
  }

  handleInputChange = (event) => {
    this.setState({ 
      inputText: event.target.value
     })
  }

  render(){
  return (
    <div className="App">
      <input type="text" onChange={this.handleInputChange} />
      <p>{this.state.inputText.length}</p>
    </div>
  );
}
}

export default App;

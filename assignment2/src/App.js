import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent'

import './App.css';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputText: '',
    // inputTextLength: this.inputText?.length
  } 

  handleInputChange = (event) => {
    this.setState({ 
      inputText: event.target.value
     })
  }

  render(){

    let inputCharArray = null;

    if (this.state.inputText) {
      inputCharArray = this.state.inputText.split('');
    }

    console.log(inputCharArray);

  return (
    <div className="App">
      <input type="text" onChange={this.handleInputChange} />
      <p>{this.state.inputText.length}</p>
      <ValidationComponent textLength={this.state.inputText.length}/>
      <hr />
      {inputCharArray?.map((char, index) => (
        <CharComponent key={index} char={char}/>
      ))}
    </div>
  );
}
}

export default App;

import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent'

import './App.css';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputText: '',
  } 

  handleInputChange = (event) => {
    this.setState({ 
      inputText: event.target.value
     })
  }

  handleCharRemoval = (index, charArray) => {
    const newCharArray = [...charArray];
    // console.log(newCharArray);
    newCharArray.splice(index, 1);
    // console.log('deleted', newCharArray);

    const inputText = newCharArray.join('');
    this.setState({ inputText });
  }

  render(){

    let inputCharArray = null;

    if (this.state.inputText) {
      inputCharArray = this.state.inputText.split('');
    }

    // console.log(inputCharArray);

  return (
    <div className="App">
      <input type="text" value={this.state.inputText} onChange={this.handleInputChange} />
      <p>{this.state.inputText.length}</p>
      <ValidationComponent textLength={this.state.inputText.length}/>
      <hr />
      {inputCharArray?.map((char, index) => (
        <CharComponent key={index} char={char} remove={() => this.handleCharRemoval(index, inputCharArray)}/>
      ))}
    </div>
  );
}
}

export default App;

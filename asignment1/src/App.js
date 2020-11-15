import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {
    username: 'wojti'
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;

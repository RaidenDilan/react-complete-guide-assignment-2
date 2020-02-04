import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  };

  inputChangedListener = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char
        character={ char }
        clicked={ () => this.deleteCharHandler(index) }
        key={ index }
        />;
    });

    return (
      <div className="App">
        <h1>Assignment 2 - Lists Conditionals</h1>
        <input
          type="text"
          onChange={ this.inputChangedListener }
          value={ this.state.userInput }
          />
        <p>{ this.state.userInput }</p>
        <Validation inputLength={ this.state.userInput.length }/>
        { charList }
      </div>
    );
  }
}

export default App;

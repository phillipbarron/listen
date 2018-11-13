import React, { Component } from 'react';
import './App.css';
import TestInput from './test-input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TestInput />
        </header>
      </div>
    );
  }
}

export default App;

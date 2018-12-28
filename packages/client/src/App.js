import React, { Component } from 'react';
import './App.css';
import LanguageDetectionInput from './language-detection-input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LanguageDetectionInput />
        </header>
      </div>
    );
  }
}

export default App;

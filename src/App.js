import React, { Component } from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;



// VERY FIRST REDUCER

const defaultState = {
  welcome: 'Hi',
  otherState: 'some stuff',
  otherStates: 'some other stuff'
}

const greeting = (state = defaultState, action) => {
  switch (action.type) {
    case 'GREET_ME':
      return { ...state, welcome: 'Hello Adam' }
    case 'GREET_WORLD':
      return { ...state, welcome: 'Hello World' }
    default:
      return state;
  }
};

const store = createStore(greeting);
console.log(store.getState());
store.dispatch({
  type: 'GREET_ME'
})



console.log(store.getState());


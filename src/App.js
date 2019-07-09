import React from 'react';
// import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './reducers/todo'

import logo from './logo.svg';
import './App.css';

import Todo from "./components/todo"


const store = createStore(Reducers)

function App() {
  return (
    <div>
      <Provider store={store}>
        <Todo />
      </Provider> 
    </div>
  );
}

export default App;

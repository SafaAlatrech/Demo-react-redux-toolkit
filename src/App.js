import './App.css';
import React from 'react'
import Profile from './Profile';
import Login from './Login';
// Import for Redux Toolkit 
import {store} from './store'
import {Provider} from 'react-redux'
import Test from './parent/test';

function App() {
  return (
    <div className="App">
      <h1>React with redux Toolkit</h1>
      <Provider store={store}>
      <Profile/>
      <Login/>
      <Test/>
      </Provider>
    </div>
  );
}

export default App;

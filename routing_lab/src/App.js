import React from 'react';
import './App.css';
import SingleDog from './components/dogs/SingleDog'
import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      This is a test
    <Route path={"/dog/random"} component = {SingleDog} />
      
    </div>
  );
}

export default App;

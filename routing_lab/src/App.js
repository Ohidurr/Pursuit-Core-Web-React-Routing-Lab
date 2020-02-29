import React from 'react';
import './App.css';
import SingleDog from './components/dogs/SingleDog'
import RandomDogs from './components/dogs/RandomDogs'
import { Route, Switch } from 'react-router-dom'



function App() {
  return (
    <div className="App">
    <Switch>
      <Route path = {"/dog/random/:num"} component={RandomDogs}/>
      <Route path={"/dog/random"} component={SingleDog} />
      </Switch>
    </div>
  );
}

export default App;

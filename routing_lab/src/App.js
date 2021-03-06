import React from 'react';
import './App.css';
import SingleDog from './components/dogs/SingleDog'
import RandomDogs from './components/dogs/RandomDogs'
import DogBreed from './components/dogs/DogBreed'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'



function App() {
  return (
    <div className="App">
    <Switch>
      <Route path = {"/dog/random/:num"} component={RandomDogs}/>
      <Route path={"/dog/random"} component={SingleDog} />
      <Route path={"/dog/:breed"} component={DogBreed} />
      </Switch>
      <NavBar/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>hi i'm a React App</h1>
      <Person />
    </div>
    //React.createElement('div',{className:'App'},React.createElement('h1',null, 'Does this work now?'))
  );
}

export default App;

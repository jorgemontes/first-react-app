import React, { useState } from 'react';
import { useImperativeHandle } from 'react';
import './App.css';

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'



const App = props => {

  const [personsState, setPersonsState ] = useState(
    {
      persons: [
        {id: 'asdf', name:'Maximilian', age:28},
        {id: 'dxf', name:'Metro', age:1},
        {id: 'ar4f', name:'Sebas', age:37}
      ]
    });

    const [showPersonsState, setShowPersonsState] = useState(
     false
    );

    console.log(personsState, showPersonsState);

   const deletePersonHandler = (personIndex) =>{
     const persons = [...personsState.persons]
    persons.splice(personIndex,1);
     setPersonsState(
        {
          persons:persons
        });
   }

    const nameChangedHandler = (event, id) => {

      const personIndex = personsState.persons.findIndex(p => {
        return p.id === id;
      })

      const person = {
        ...personsState.persons[personIndex]
      }

      person.name = event.target.value;

      const persons = [...personsState.persons];
      persons[personIndex] = person;

      setPersonsState({persons:persons});
    }

    const togglePersonsHandler = () => {
      const doesShow = showPersonsState;
      setShowPersonsState(!doesShow);
    };

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(showPersonsState){
      persons = <Persons persons={personsState.persons} clicked={deletePersonHandler} changed={nameChangedHandler}></Persons>;
     // style.backgroundColor = 'red';
     // style[':hover'] = {
     //   backgroundColor: 'salmon',
     //   color: 'black'
     // }
    }

    return (
      <div className="App">
        <Cockpit title={props.appTitle} persons={personsState.persons} clicked={togglePersonsHandler}></Cockpit>
        {persons}
      </div>
    );
};

export default App;
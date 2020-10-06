import React, { useState } from 'react';
import { useImperativeHandle } from 'react';
import './App.css';
import Person from './Person/Person'

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
      const doesShow = personsState.showPersons;
      setShowPersonsState(!doesShow);
    };

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(showPersonsState){
      persons = (
        <div>
          {personsState.persons.map((person,index) => {
            return<Person 
              click={() => deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => nameChangedHandler(event,person.id)} />;
          })}
       </div>
      );
    }

    return (
      <div className="App">
        <h1>hi i'm a React App</h1>
        <button 
        style={style}
        onClick={togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
};

export default App;
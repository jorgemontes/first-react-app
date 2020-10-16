import React, { useState } from 'react';
import { useImperativeHandle } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];

    if(personsState.persons.length <= 2 ){
      classes.push('red');
    }
    if(personsState.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>hi i'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style={style}
          onClick={togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
};

export default Radium(App);
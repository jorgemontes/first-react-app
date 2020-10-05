import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {

  const [personsState, setPersonsState ] = useState(
    {
      persons: [
        {id: 'asdf', name:'Maximilian', age:28},
        {id: 'dxf', name:'Metro', age:1},
        {id: 'ar4f', name:'Sebas', age:37}
      ],
      showPersons: false
    });

    const [someOtherState, setSomeOtherState] = useState(
     'some other state'
    );

    console.log(personsState, someOtherState);

   const deletePersonHandler = (personIndex) =>{
     const persons = [...personsState.persons]
    persons.splice(personIndex,1);
     setPersonsState(
        {
          persons:persons,
          showPersons: personsState.showPersons
        });
   }

    const nameChangedHandler = (event) => {
      setPersonsState({
        persons: [
          {name:'Max', age:28},
          {name: event.target.value, age:1},
          {name:'Sebas', age:34}
        ]
      });
    }

    const togglePersonsHandler = () => {
      const doesShow = personsState.showPersons;
      setPersonsState({
        persons: [
          {name:'El Señor', age:28},
          {name:'Metro', age:1},
          {name:'Sebas', age:34}
        ],
        showPersons: !doesShow});
    };

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(personsState.showPersons){
      persons = (
        <div>
          {personsState.persons.map((person,index) => {
            return<Person 
              click={() => deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id} />;
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
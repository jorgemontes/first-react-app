import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {

  const [personsState, setPersonsState ] = useState(
    {
      persons: [
        {name:'Maximilian', age:28},
        {name:'Metro', age:1},
        {name:'Sebas', age:37}
      ],
      showPersons: false
    });

    const [someOtherState, setSomeOtherState] = useState(
     'some other state'
    );

    console.log(personsState, someOtherState);

    const switchNameHandler = (newName) => {
      console.log('Was Clicked!');
     // THIS IS BAD this.state.persons[0].name = 'Maximilian';
     setPersonsState({
      persons: [
        {name:newName, age:28},
        {name:'Metro', age:1},
        {name:'Sebas', age:34}
      ]
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
          <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age} />
          <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click={switchNameHandler.bind(this,'Metro!')}
          changed={nameChangedHandler} >My hobbies: Breaking thinks</Person>
          <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age} />
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
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
      ]
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

    return (
      <div className="App">
        <h1>hi i'm a React App</h1>
        <button onClick={() => switchNameHandler('Maxi')}>Switch Name</button>
        <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} />
        <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this,'Metro!')} >My hobbies: Breaking thinks</Person>
        <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} />
      </div>
      //React.createElement('div',{className:'App'},React.createElement('h1',null, 'Does this work now?'))
    );
};

export default App;
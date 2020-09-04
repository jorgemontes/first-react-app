import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name:'Max', age:28},
      {name:'Metro', age:1},
      {name:'Sebas', age:34}
    ]
  }

  switchNameHandler = () => {
    console.log('Was Clicked!');
  }

  render(){
    return (
      <div className="App">
        <h1>hi i'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My hobbies: Breaking thinks</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
      //React.createElement('div',{className:'App'},React.createElement('h1',null, 'Does this work now?'))
    );
  }
}

export default App;

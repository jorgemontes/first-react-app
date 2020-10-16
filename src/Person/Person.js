import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    return (
    <div className="Person" onClick={props.click}>
        <p>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    )
}

export default Radium(person);
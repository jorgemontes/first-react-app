import React from 'react';
import classes from './Cockpit.css'
import styled from 'styled-components';




const cockpit = (props) => {

    const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red': 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
        color: black
      }
`;

    let classes = [];

    if(props.persons.length <= 2 ){
      classes.push('red');
    }
    if(props.persons.length <= 1){
      classes.push('bold');
    }

    return (
    <div className={classes.Cockpit}>
        <h1>hi i'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton alt={props.showPersonsState}
          onClick={props.clicked}>Switch Name</StyledButton>
    </div>);

}

export default cockpit;
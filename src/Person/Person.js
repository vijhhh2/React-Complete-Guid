import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="person">
            <p onClick = {props.click}>I'm {props.name} & I'm {props.age} old</p>
            <p>{props.children}</p>
            <input onChange={props.change} value={props.name}/>
        </div>
    );
}

export default person;
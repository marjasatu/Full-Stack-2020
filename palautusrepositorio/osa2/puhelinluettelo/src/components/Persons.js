import React from 'react'

const Persons = (props) => {  
    return (
        <ul>
        {props.persons
        .filter(person => person.name.includes(props.searchField))
        .map(person => <li key={person.id}>{person.name} {person.number} </li>
        )}
      </ul>
    )      
}

export default Persons
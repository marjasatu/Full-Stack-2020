import React from 'react'


const Persons = (props) => {  
    return (
        <ul>
        {props.persons
            .filter(person => person.name.toUpperCase().includes(props.searchField.toUpperCase()))
            .map(person => <li key={person.id}>{person.name} {person.number} <button onClick={() => props.deletePerson(person.id)}>delete</button></li>)
        }
      </ul>
    )      
}

export default Persons
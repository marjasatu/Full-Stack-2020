import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchField, setSearchField] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }
    nameExists(newName) ? 
      alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(person))
    setNewName('')
    setNewNumber('')   
  }

  const nameExists = (name) => {
    return persons.filter(person => name === person.name).length > 0
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleChange = (event) => {
    setSearchField(event.target.value)
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <input
        value={searchField}
        onChange={handleChange} 
      />
      <form onSubmit={addNewName}>
        <div>
          name: 
          <input
            value={newName}
            onChange={handleNameChange} 
          />
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
        .filter(person => person.name.includes(searchField))
        .map(person => <li key={person.id}>{person.name} {person.number} </li>
        )}
      </ul>
    </div>
  )

}

export default App
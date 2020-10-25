import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      id: persons.length + 1,
    }
    nameExists(newName) ? 
      alert(`${newName} is already added to phonebook`) 
      : setPersons(persons.concat(noteObject))
    setNewName('')   
  }

  const nameExists = (name) => {
    return persons.filter(person => name === person.name).length > 0
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: 
          <input
            value={newName}
            onChange={handleNameChange} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.id}>{person.name}</li>
        )}
      </ul>
    </div>
  )

}

export default App
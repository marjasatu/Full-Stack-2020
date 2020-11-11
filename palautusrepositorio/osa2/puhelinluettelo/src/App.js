import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])  


  const addNewName = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }
    nameExists(newName) 
    ? alert(`${newName} is already added to phonebook`) 
      : axios
          .post('http://localhost:3001/persons', person)
          .then(response => {
          setPersons(persons.concat(response.data))
          })
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
      filter shown with:
      <Filter
        searchField={searchField}
        handleChange={handleChange} 
      />
      <PersonForm 
        addNewName={addNewName}
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
        newName={newName} 
        newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} searchField={searchField}/>
    </div>
  )

}

export default App
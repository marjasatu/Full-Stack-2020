import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(personlist => {
        setPersons(personlist)     
      })
  }, [])  


  const addNewName = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }
    nameExists(newName) 
    ? alert(`${newName} is already added to phonebook`) 
      : personService
          .create (person)
          .then(personlist => {
            setPersons(persons.concat(personlist))
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

  const deletePerson = (id) => {
    const person = persons.filter(person => person.id === id)
    if (window.confirm(`Delete ${person[0].name}?`)) { 
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }  
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
      <Persons persons={persons} searchField={searchField} deletePerson={deletePerson} />
    </div>
  )

}

export default App
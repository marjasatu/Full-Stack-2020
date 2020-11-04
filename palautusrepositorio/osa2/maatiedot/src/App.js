
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter.js'
import Countries from './components/Countries'
import axios from 'axios'


const App = () => {
  const [countries, setCountries] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])  


  const handleChange = (event) => {
    setSearchField(event.target.value)
  } 

  return (
    <div>
      <h2>Countries</h2>
      find countries:
      <Filter
        searchField={searchField}
        handleChange={handleChange} 
      />
      <Countries countries={countries} searchField={searchField}/>
    </div>
  )

}

export default App
